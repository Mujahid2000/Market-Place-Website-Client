import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Button } from "flowbite-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const MyBids = () => {
  const { user } = useContext(AuthContext);
  const tableRef = useRef(null); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("");

  const fetchData = () => {
    const apiUrl = `https://marketplace-website-server.vercel.app/bitJobs?employerEmail=${user.email}&sort=${sort}`;

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
  }, [sort]);

  async function updateStatus(id, status) {
    const apiUrl = `https://marketplace-website-server.vercel.app/bitJobs/${id}`;
    try {
      const res = await axios.patch(apiUrl, {
        status: status,
      });

      if (res?.data?.modifiedCount > 0) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Status updated successfully!',
        });
        fetchData();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update status. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error updating status:', error);
      // Handle the error as needed
    }
  }

  const downloadPDF = () => {
    const input = tableRef.current;
    if (input) {
      html2canvas(input , { scale: 11 }).then((canvas) => {
        const pdf = new jsPDF('l', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 297, 210);
        pdf.save('table_data.pdf');
      });
    } else {
      console.error('Table element not found.');
    }
  };


  return (
    <div className="px-6 min-h-screen pt-10 dark:bg-gray-900">
      <Helmet>
        <title>My Bid Jobs</title>

      </Helmet>
      
      <div className="overflow-auto">
        <table ref={tableRef} className="min-w-full bg-white border shadow rounded-lg">
          <thead>
            <tr>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Job Title</th>
              <th className="border px-4 py-2">Deadline</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Actions</th>
              <th className="border px-4 py-2">
                <div className="flex items-center gap-2">
                  <span>Status</span>
                  {
                    sort === "" ? <span className="cursor-pointer" onClick={() => setSort("asc")}>▲</span> : <span className="cursor-pointer" onClick={() => setSort("")}>▼</span>
                  }
                </div>
              </th>
          
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.buyerEmail}</td>
                <td className="border px-4 py-2">{item.jobTitle}</td>
                <td className="border px-4 py-2">{item.deadline}</td>
                <td className="border px-4 py-2">${item.price}</td>
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
                      item.status === 'in progress' ? <div className="text-xs bg-blue-500 text-white px-2 py-1 rounded my-2 w-fit inline mx-auto cursor-pointer" onClick={() => updateStatus(item._id, 'complete')} >
                        Complete
                      </div> : <div className="text-xs bg-gray-500 opacity-40 text-white px-2 py-1 rounded my-2 w-fit inline mx-auto">
                        Complete
                      </div>
                    }
                  </div>

                </td>
                <td className="border px-4 py-2">{item.status}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        <Button color="purple" onClick={downloadPDF} className="mt-6">Download PDF</Button>
      </div>

    </div>
  );
};

export default MyBids;
