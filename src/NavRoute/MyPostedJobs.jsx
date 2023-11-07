import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const apiUrl = `http://localhost:5050/addJobs?buyerEmail=${user.email}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response);
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

  const handleDeleteButton = (_id, jobTitle) => {
    axios
      .delete(`http://localhost:5050/addJobs/${_id}`)
      .then((res) => {
        if (res?.data?.deletedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: jobTitle,
            text: 'Job deleted successfully!',
          });
          fetchData(); 
        }
      });
  };

  return (
    <div className="grid grid-cols-1 dark:bg-gray-900 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.map((item, index) => (
        <div key={index} className="w-full">
          <Card className="bg-white shadow-lg rounded-lg p-4 m-4">
            <h2 className="text-xl font-semibold">{item.jobTitle}</h2>
            <p className="text-sm text-gray-500">Category: {item.category}</p>
            <p><strong>Email:</strong> {item.employerEmail}</p>
            <p><strong>Deadline:</strong> {item.deadline}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Price Range:</strong> {item.minPrice} - {item.maxPrice}</p>
            <div className="text-center flex justify-evenly">
              <Link to={`/update/${item._id}`}><Button color="blue" >Update</Button></Link>
              <Button
                onClick={() => handleDeleteButton(item._id, item.jobTitle)}
                color="failure"
              >
                Delete
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MyPostedJobs;
