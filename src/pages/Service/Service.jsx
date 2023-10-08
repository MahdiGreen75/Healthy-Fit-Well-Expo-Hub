/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Service = ({ name, image, price, short_description }) => {
    const { user } = useContext(AuthContext);
    

    return (
        <div className="flex flex-col items-start justify-start rounded-md drop-shadow-lg bg-white">
            <div className=" h-60 w-full">
                <img src={image} className="w-full h-full object-cover rounded-t-md" />
            </div>
            <div className="p-4 flex flex-col gap-2">
                <h1 className="text-base font-semibold">{name}</h1>
                <p className="flex-1 text-sm font-light">{short_description}</p>
                <p>
                    <span className="text-sm font-semibold">Price per worksop:</span>
                    <span className="text-sm font-extralight ml-1">{price === "Free" ? "Free" : `$${price}`}</span>
                </p>
                <Link to={user ? "/service-details": "/login-1"}><button className="font-semibold px-2 py-1 bg-blue-500 hover:bg-blue-700 active:bg-blue-900 duration-800 text-xs text-white rounded-sm">View Details</button></Link>
            </div>
        </div>
    );
};

export default Service;