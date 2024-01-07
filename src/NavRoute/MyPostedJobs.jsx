import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/Authprovider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    const apiUrl = `https://marketplace-website-server.vercel.app/addJobs?buyerEmail=${user.email}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
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
      .delete(`https://marketplace-website-server.vercel.app/addJobs/${_id}`)
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
    <div className="dark:bg-gray-900">
      <Helmet>
        <title>My Posted Jobs</title>
      </Helmet>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item, index) => (
          <div key={index} className="w-full">
            <Card className="bg-blue-200 dark:bg-blue-800 shadow-lg rounded-lg px-2 m-4 transition duration-500 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {item.jobTitle}
              </h2>
              <p className="text-sm text-gray-500">Category: {item.category}</p>
              <p>
                <strong>Email:</strong> {item.employerEmail}
              </p>
              <p>
                <strong>Deadline:</strong> {item.deadline}
              </p>
              <div className="description overflow-hidden h-24">
                <strong>Description:</strong>
                <p className="overflow-auto text-justify">{item.description}</p>
              </div>
              <p>
                <strong>Price Range:</strong> ${item.minPrice} - ${item.maxPrice}
              </p>
              <div className="flex text-center mt-4">
                <Link to={`/update/${item._id}`}>
                  <Button color="blue" className="mr-2">
                    Update
                  </Button>
                </Link>
                <Button
                  onClick={() => handleDeleteButton(item._id, item.jobTitle)}
                  color="red"
                  className="bg-red-600 text-white"
                >
                  Delete
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
