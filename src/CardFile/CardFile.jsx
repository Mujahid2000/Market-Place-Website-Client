import { Button, Card } from "flowbite-react";
import { useContext, useState } from "react";
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";


const CardFile = ({cart}) => {
  const { user } = useContext(AuthContext);
  const maxDisplayLength = 80;
  const [isExpanded, setIsExpanded] = useState(false);
    const {category, minPrice,maxPrice, jobTitle, deadline, description, _id, } = cart || {};
    console.log(cart);
    const toggleReadMore = () => {
      setIsExpanded(!isExpanded);
    }

    const displayText = isExpanded ? description : `${description.slice(0, maxDisplayLength)}...`;
    return (
        <div >
            <Card className="max-w-sm ">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {jobTitle}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {category}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Deadline: {deadline}
      </p>
      <p className="description text-justify">
        {displayText}
      </p>
      {description.length > maxDisplayLength && (
        <button className="underline text-left text-blue-600" onClick={toggleReadMore}>
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
      <p className="text-xl text-justify font-bold">
        Budget: ${minPrice} - ${maxPrice}
      </p>
      
        <Link to={`detail/${_id}`}>
      <Button className=" w-full" color="purple">
          Bid Now
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
      </Link>
      
    </Card>
        </div>
    );
};

export default CardFile;