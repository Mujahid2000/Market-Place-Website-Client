import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { AuthContext } from "../AuthProvider/Authprovider";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const apiUrl = `http://localhost:5050/bitJobs?employerEmail=${user.email}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div>
      <div>
            <select
              id="category"
              name="category"
              className=" border rounded border-gray-300 focus:outline-none focus:border-blue-500 bg-gray-100"
              required
            >
              <option value="Select a category">Select a category</option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
            </select>
          </div>
      </div>
      <div>
        <table className="min-w-full bg-white border shadow rounded-lg">
        <thead>
          <tr>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Job Title</th>
            <th className="border px-4 py-2">Deadline</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Actions</th>
            <th className="border px-4 py-2">Actions</th>
            <th className="border px-4 py-2">Filter</th>
          </tr>
        </thead>
        <tbody> 
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.buyerEmail}</td>
              <td className="border px-4 py-2">{item.jobTitle}</td>
              <td className="border px-4 py-2">{item.deadline}</td>
              <td className="border px-4 py-2">{item.price}</td>
              <td className="border px-4 py-2">
                <ProgressBar percent={75}>
                  <Step>
                    {({ accomplished, index }) => (
                      <div
                        className={`indexedStep ${accomplished ? "accomplished" : "Pending"}`}
                      >
                        {index + 1}
                      </div>
                    )}
                  </Step>
                  <Step>
                    {({ accomplished, index }) => (
                      <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                      >
                        {index + 1}
                      </div>
                    )}
                  </Step>
                  <Step>
                    {({ accomplished, index }) => (
                      <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                      >
                        {index + 1}
                      </div>
                    )}
                  </Step>
                </ProgressBar>
              </td>
              <td className="border px-4 py-2">Pending</td>
            </tr>
          ))}
        </tbody> 
      </table>
      </div>
      
    </div>
  );
};

export default MyBids;
