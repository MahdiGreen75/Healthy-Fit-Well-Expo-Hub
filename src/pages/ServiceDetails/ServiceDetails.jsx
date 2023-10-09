import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "./style.css"
import { TbChecks } from 'react-icons/tb';
import { MdEmail } from 'react-icons/md';
import { GiRotaryPhone } from 'react-icons/gi';
import { MdEventNote } from 'react-icons/md';
import { FaPlaceOfWorship } from 'react-icons/fa6';
import { BsArrowLeftCircle } from 'react-icons/bs';
// import { Link } from "react-router-dom";

const ServiceDetails = () => {
    const { detailsId } = useParams();
    const navigate = useNavigate();
    const { title, description,
        dateAndTime, location,
        highlights,
        contactInfo,
        image } = useLoaderData().find(item => item.id === Number(detailsId));

    return (
        <>
            <div className="flex justify-center items-center my-10 drop-shadow-2xl">
                <div className="text-slate-700 w-72 h-[420px] bg-white p-5 rounded-l-md">
                    <h1 className="text-xl font-semibold border-b-2">{title}</h1>
                    <p className="text-sm font-light mb-1">{description}</p>
                    <div className="flex  gap-1">
                        <MdEventNote className="text-blue-500 text-lg"></MdEventNote>
                        <p className="text-sm font-light mb-1">{dateAndTime}</p>
                    </div>
                    <div className="flex  gap-1">
                        <FaPlaceOfWorship className="text-blue-500 text-lg"></FaPlaceOfWorship>
                        <p className="text-sm font-light mb-1">{location}</p>
                    </div>
                    <p className="text-sm font-semibold border-b-2 pb-1">Highlights:</p>
                    <ul>
                        {
                            highlights.map((item, index) => <li className="text-slate-700 font-light flex items-start gap-1" key={index}><TbChecks className="text-base text-blue-500"></TbChecks>{item}</li>)
                        }
                    </ul>
                    <p className="text-sm font-semibold border-b-2 pb-1">Contact-Info:</p>
                    <ul>
                        <li className="text-sm font-light flex items-center gap-1 "><MdEmail className="text-blue-500 text-sm"></MdEmail>{contactInfo.email}</li>
                        <li className="text-sm font-light flex items-center gap-1 "><GiRotaryPhone className="text-blue-500 text-sm"></GiRotaryPhone>{contactInfo.phone}</li>
                    </ul>
                </div>
                <div className="w-72 h-[420px]  rounded-r-md">
                    <img src={image} className="h-full w-full object-cover  rounded-r-md" />
                </div>
            </div>
            <div className="flex justify-center items-center mb-10">
                
                    <button onClick={()=>navigate(-1)} className="flex items-center px-4 py-2 
                bg-blue-500 hover:bg-blue-700 
                active:bg-blue-900 duration-500 rounded 
                text-white outline-none">
                        <BsArrowLeftCircle className="text-xl mr-1"></BsArrowLeftCircle>
                        Go back to services
                    </button>
               
            </div>
        </>
    );
};

export default ServiceDetails;