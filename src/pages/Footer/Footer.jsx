import { SiWorldhealthorganization } from "react-icons/si"

const Footer = () => {
    return (
        <div>


            <footer className="bg-transparent">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">

                        <h1 className='flex items-center gap-1'>
                            <SiWorldhealthorganization className='text-blue-400 text-2xl'></SiWorldhealthorganization>
                            <span className="text-blue-400 font-satisfy ">Healthy</span>
                            <span className="text-red-400 font-satisfy ">Fit</span>
                            <span className="text-green-400 font-satisfy ">Well</span>
                        </h1>

                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">HealthyFitWell™</a>. All Rights Reserved.</span>
                </div>
            </footer>



        </div>
    );
};

export default Footer;