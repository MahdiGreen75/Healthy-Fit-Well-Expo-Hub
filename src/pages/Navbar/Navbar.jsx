import { SiWorldhealthorganization } from 'react-icons/si';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FormValidationContext } from '../../Providers/FormValidationProvider';
import { AuthContext } from '../../Providers/AuthProvider';
import { useState } from 'react';
import "./Navbar.css"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [validataion, setValidation] = useContext(FormValidationContext);
    const navigate = useNavigate();

    const handleLoginAndOut = () => {
        //login handler
        if (!user) {
            navigate("/login");
        }

        //logout handler
        if (user) {
            logOut()
                .then(() => {
                    console.log("sign out successfull")
                    setValidation("");
                    navigate("/");
                })
                .catch(() => console.error("sign out error"))

        }
    }

    return (
        <div className="xl:max-w-6xl lg:max-w-6xl md:max-w-2xl mx-auto flex justify-between items-center">
            <div className=" text-base sm:text-2xl md:text-4xl font-semibold flex items-end">
                <h1 className='flex items-center gap-1'>
                    <SiWorldhealthorganization className='text-blue-400 text-4xl md:text-6xl'></SiWorldhealthorganization>
                    <span className="text-blue-400 font-satisfy ">Healthy</span>
                    <span className="text-red-400 font-satisfy ">Fit</span>
                    <span className="text-green-400 font-satisfy ">Well</span>
                </h1>
            </div>

            <div className={`${user ? "pr-20" : "pr-40"}`}>
                <nav id="nav-bar" className='flex gap-6 text-xs sm:text-sm font-semibold text-white nav-text'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/register">Sign Up</NavLink>
                    <NavLink to="/about-us">About Us</NavLink>
                    {user && <>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                    </>}
                </nav>
            </div>

            <div className='flex gap-2 items-center '>
                <div>
                    {
                        user && <>
                            <div className='flex text-white nav-text gap-1'>
                                <img src={"../../../profile.jpg"}  className='w-6 rounded-full' />
                                <span>{user.displayName}</span>
                            </div>
                        </>
                    }
                </div>
                <button onClick={handleLoginAndOut} className='text-xs sm:text-sm px-3 py-1 bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white rounded-sm'>
                    {user ? "Log Out" : "Log In"}
                </button>
            </div>
        </div>
    );
};

export default Navbar;