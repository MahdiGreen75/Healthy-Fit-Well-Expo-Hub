import { SiWorldhealthorganization } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="xl:max-w-6xl lg:max-w-6xl md:max-w-2xl mx-auto flex justify-between items-center">
            <h1 className=" text-base sm:text-2xl md:text-4xl font-semibold flex items-end">
                <div className='flex items-center gap-1'>
                    <SiWorldhealthorganization className='text-blue-400 text-4xl md:text-6xl'></SiWorldhealthorganization>
                    <span className="text-blue-400 font-satisfy ">Healthy</span>
                    <span className="text-red-400 font-satisfy ">Fit</span>
                    <span className="text-green-400 font-satisfy ">Well</span>
                </div>
                <span className="text-gray-600 ml-1 mb-1 md:mb-3 text-xs md:text-base font-semibold mobile">Expo Hub</span>
            </h1>
            <div>
                <ul className='flex gap-8 text-base font-semibold'>
                    <li><NavLink>ITEM 1</NavLink></li>
                    <li><NavLink>ITEM 2</NavLink></li>
                    <li><NavLink>ITEM 3</NavLink></li>
                    <li><NavLink>ITEM 4</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;