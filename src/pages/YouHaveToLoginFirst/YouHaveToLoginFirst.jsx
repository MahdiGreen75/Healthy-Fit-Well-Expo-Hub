import { Link, useLocation } from "react-router-dom";
import { BsArrowRightCircle } from 'react-icons/bs';
import "./textShadow.css"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const YouHaveToLoginFirst = () => {
    

    return (
        <div className="flex flex-col items-center justify-center gap-10 my-10">
            <h1 className="text-shadow text-white font-semibold 
                text-3xl">
                Hey, seems like you are logged out!!!
            </h1>
            <Link  to="/login">
                <button className="flex items-center px-4 py-2 
                bg-blue-500 hover:bg-blue-700 
                active:bg-blue-900 duration-500 rounded 
                text-white outline-none">
                    Login
                    <BsArrowRightCircle className="text-xl ml-1"></BsArrowRightCircle>
                </button>
            </Link>
        </div>
    );
};

export default YouHaveToLoginFirst;