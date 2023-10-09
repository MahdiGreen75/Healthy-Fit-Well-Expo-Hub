import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";
import "./Home.css"
import Testimonial from "../pages/Testimonial/Testimonial";
import FAQs from "../pages/FAQs/FAQs";

const Root = () => {
    return (
        <div className="body">
            <Navbar></Navbar>
            <div className="xl:max-w-6xl lg:max-w-6xl md:max-w-2xl mx-auto">
                <Outlet></Outlet>
            </div>
            <Testimonial></Testimonial>
            <FAQs></FAQs>
            <div>
                <Footer ></Footer>
            </div>
        </div>
    );
};

export default Root;