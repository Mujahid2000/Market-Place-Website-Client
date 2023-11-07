import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import axios from "axios";

const BidReq = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const apiUrl = `http://localhost:5050/bitJobs`;
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

  return (
    <div>
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
                    <td className="border px-4 py-2">Developer</td>
                    <td className="border px-4 py-2">{item.deadline}</td>
                    <td className="border px-4 py-2">{item.price}</td>
                    <td className="border px-4 py-2"> </td>
                    <td className="border px-4 py-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105 focus:outline-none">
                        Accept
                      </button>
                      <button className="bg-red-500 text-white px-2 py-1 ml-2 rounded hover:bg-red-600 transition duration-300 transform hover:scale-105 focus:outline-none">
                        Reject
                      </button>
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
