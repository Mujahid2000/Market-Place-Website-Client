import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";

import axios from "axios";
import Swal from "sweetalert2";

const AddJobForm = () => {
  const { user } = useContext(AuthContext);
  const formRef = React.createRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const addJobs = {
      buyerEmail: form.get('buyerEmail'),
      jobTitle: form.get('jobTitle'),
      deadline: form.get('deadline'),
      category: form.get('category'),
      description: form.get('description'),
      minPrice: form.get('minPrice'),
      maxPrice: form.get('maxPrice'),
    };
  
    axios
      .post('http://localhost:5050/addJobs', addJobs)
      .then((res) => {
        console.log(res);
  
        // Check if the job was added successfully
        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: ' Job added successfully!',
          });
          formRef.current.reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to add the job. Please try again.',
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
  
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred. Please try again later.',
        });
      });
  };

  return (
    <div className="max-w-full mx-auto dark:bg-gray-900 bg-white p-8 rounded shadow-md mb-5 mt-4">
      <h1 className="text-2xl font-bold mb-4">Added Job</h1>
      <form onSubmit={handlesubmit} ref={formRef}>
        <div className="flex flex-wrap">
          <div className="w-1/2 pr-2 mb-4">
            <label className="text-gray-600" htmlFor="employerEmail">
              Email of the Buyer:
            </label>
            <input
              type="email"
              id="buyerEmail"
              name="buyerEmail"
              placeholder={user?.email}
              value={user?.email}
              readOnly
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
            />
          </div>

          <div className="w-1/2 pl-2 mb-4">
            <label className="text-gray-600" htmlFor="jobTitle">
              Job Title:
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-1/2 pr-2 mb-4">
            <label className="text-gray-600" htmlFor="deadline">
              Deadline:
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            />
          </div>

          <div className="w-1/2 pl-2 mb-4">
            <label className="text-gray-600" htmlFor="category">
              Category:
            </label>
            <select
              id="category"
              name="category"
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            >
              <option value="Select a category">Select a category</option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600" htmlFor="description">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full p-2 border rounded border-gray-300 focus:outline-none focus-border-blue-500 bg-gray-100"
            rows="4"
            required
          />
        </div>

        <div className="flex flex-wrap">
          <div className="w-1/2 pr-2 mb-4">
            <label className="text-gray-600" htmlFor="minPrice">
              Minimum Price:
            </label>
            <input
              type="text"
              id="minPrice"
              name="minPrice"
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus-border-blue-500 bg-gray-100"
              required
            />
          </div>

          <div className="w-1/2 pl-2 mb-4">
            <label className="text-gray-600" htmlFor="maxPrice">
              Maximum Price:
            </label>
            <input
              type="text"
              id="maxPrice"
              name="maxPrice"
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus-border-blue-500 bg-gray-100"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJobForm;
