import axios from "axios";
import { Spinner } from "flowbite-react";
import { useLoaderData, useNavigate, useNavigation, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const { _id } = useParams();
 
  const navigation = useNavigation();
  const goTo = useNavigate();
  const data = useLoaderData();
  console.log(data)
  if (navigation.loading === "loading") {
    return <Spinner color="info" aria-label="Info spinner example" />;
  }

  const { category, deadline, description,  buyerEmail, jobTitle, maxPrice, minPrice } = data;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const updateJob = {
    employerEmail: form.get("employerEmail"),
    jobTitle: form.get("jobTitle"),
    deadline: form.get("deadline"),
    category: form.get("category"),
    description: form.get("description"),
    minPrice: form.get("minPrice"),
    maxPrice: form.get("maxPrice"),
    };

    const response = await axios.put(
      `https://marketplace-website-server.vercel.app/addJobs/${_id}`,
      updateJob
    );
    const data = await response.data;
    console.log(data);
    if(data.modifiedCount > 0 ){
      Swal.fire({
        icon: 'success',
        title: jobTitle,
        text: 'Job Updated successfully!',
      });
      goTo('/myPostedJob')
    }

    // axios
    //   .put(`https://marketplace-website-server.vercel.app/addJobs/${_id}`, updateJob)
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  };

  return (
    <div className="max-w-full mx-auto bg-white p-8 rounded shadow-md mb-5 mt-4">
      <h1 className="text-2xl font-bold mb-4">Update Job</h1>
      <form onSubmit={handleUpdate}>
        <div className="flex flex-wrap">
          <div className="w-1/2 pr-2 mb-4">
            <label className="text-gray-600" htmlFor="employerEmail">
              Email of the Buyer:
            </label>
            <input
              type="email"
              id="employerEmail"
              name="employerEmail"
              placeholder={buyerEmail}
              defaultValue={buyerEmail}
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
              defaultValue={jobTitle}
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
              defaultValue={deadline}
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
              defaultValue={category}
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
            defaultValue={description}
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
              defaultValue={minPrice}
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
              defaultValue={maxPrice}
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus-border-blue-500 bg-gray-100"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover-bg-blue-700 focus:outline-none"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default Update;
