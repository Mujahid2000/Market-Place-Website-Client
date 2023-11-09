import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ProgressBar, Step } from "react-step-progress-bar";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/Authprovider";

const BidReq = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const apiUrl = `https://marketplace-website-server.vercel.app/bitJobs`;
    console.log(apiUrl);

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

  async function updateStatus(id, status) {
    const apiUrl = `https://marketplace-website-server.vercel.app/bitJobs/${id}`;
    const res = await axios.patch(apiUrl, {
      status: status,
    });
    
    if(res?.data?.modifiedCount > 0){
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Status updated successfully!',
      });
      fetchData();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update status. Please try again.',
      });
    }

  }


  return (
    <div className="px-6 min-h-screen">
      <Helmet>
        <title>Bid Request</title>
      </Helmet>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white border shadow rounded-lg">
          <thead>
            <tr className="bg-[#9CA3AF]">
              <th className="border px-4 py-2">Email (Not Editable)</th>
              <th className="border px-4 py-2">Job Title</th>
              <th className="border px-4 py-2">Deadline</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              if (user.email === item.buyerEmail) {
                return (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.employerEmail}</td>
                    <td className="border px-4 py-2">{item.jobTitle}</td>
                    <td className="border px-4 py-2">{item.deadline}</td>
                    <td className="border px-4 py-2">{item.price}</td>
                    <td className="border px-4 py-2">{item.status} </td>
                    <td className="border px-4 py-2">
                      <div className="grid gap-2">
                        <ProgressBar percent={item.status == "pending" ? 0 : item.status == "in progress" ? 50 : item.status === 'rejected' ? 0 : 100}>
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
                        {
                          item.status === 'pending' ? <div className="flex justify-center ">
                            <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105 focus:outline-none" onClick={() => updateStatus(item._id, 'in progress')}>
                              Accept
                            </button>
                            <button className="bg-red-500 text-white px-2 py-1 ml-2 rounded hover:bg-red-600 transition duration-300 transform hover:scale-105 focus:outline-none" onClick={() => updateStatus(item._id, 'rejected')}>
                              Reject
                            </button>
                          </div> : <div className="flex justify-center ">
                            <button className="bg-blue-500 opacity-30 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105 focus:outline-none">
                              Accept
                            </button>
                            <button className="bg-red-500 opacity-30 text-white px-2 py-1 ml-2 rounded hover:bg-red-600 transition duration-300 transform hover:scale-105 focus:outline-none">
                              Reject
                            </button>
                          </div>
                        }
                      </div>
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidReq;
