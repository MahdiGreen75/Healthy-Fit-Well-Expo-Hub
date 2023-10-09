import { Link } from "react-router-dom";
import { BsArrowRightCircle } from 'react-icons/bs';

const LeftHeader = () => {
    return (
        <div>
            <div className="text-4xl font-bold leading-snug">
                <h1>Find the perfect event of</h1>
                <h1>
                    <span className="text-blue-500 mr-1">health</span>
                    <span className="text-red-500 mr-1">fitness</span>
                    <span className="text-green-500 ">and wellness.</span>
                </h1>
            </div>
            <Link to={"/about-us"}>
                <button className="flex items-center px-4 py-2 
                bg-blue-500 hover:bg-blue-700 
                active:bg-blue-900 duration-500 rounded 
                text-white outline-none">
                    Know More 
                <BsArrowRightCircle className="text-xl ml-1"></BsArrowRightCircle>
                </button>
            </Link>

        </div>
    );
};

export default LeftHeader;