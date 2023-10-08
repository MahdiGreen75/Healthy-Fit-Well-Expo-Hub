import { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch("../../../services.json")
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[]);
    // console.log(Array.isArray(services))
    return (
        <div >
            <div className="text-center space-y-2 text">
                <h2 className="text-4xl font-semibold text-white">Our Service</h2>
                <p className="max-w-xl mx-auto text-white text-base">Empowering Wellness Through Events - We curate and manage health and wellness events that inspire positive change, fostering a community of well-being and personal growth.</p>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-10">
                {services.map(service=><Service {...service} key={service.id}></Service>)}
            </div>
        </div>
    );
};

export default Services;