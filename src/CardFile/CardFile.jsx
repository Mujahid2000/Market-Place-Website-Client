import { Button, Card } from "flowbite-react";
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from "react-router-dom";


const CardFile = ({cart}) => {
    const {category, minPrice,maxPrice, jobTitle, deadline, description, _id, } = cart || {};
    console.log(cart);
    return (
        <div>
            <Card className="max-w-sm h-[450px]">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {jobTitle}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {category}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Deadline: {deadline}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Description:{description}
      </p>
      <p className="text-xl font-bold">
        Budget: {minPrice} - {maxPrice}
      </p>
      <Link to={`detail/${_id}`}>
      <Button className=" w-full">
          Bid Now
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
      </Link>
    </Card>
        </div>
    );
};

export default CardFile;