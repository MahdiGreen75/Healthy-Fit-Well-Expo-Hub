import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";
import "./Home.css"
import Testimonial from "../pages/Testimonial/Testimonial";
import FAQs from "../pages/FAQs/FAQs";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Root = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    return (
        <div className="body">
            <div data-aos="fade-down">
                <Navbar></Navbar>

            </div>
            <div className="xl:max-w-6xl lg:max-w-6xl md:max-w-2xl mx-auto" data-aos="fade-right">
                <Outlet></Outlet>
            </div>
            <div data-aos="fade-down">
                <Testimonial ></Testimonial>
            </div>
            <div data-aos="fade-down">
                <FAQs></FAQs>
            </div>
            <div>
                <Footer ></Footer>
            </div>
        </div>
    );
};

export default Root;