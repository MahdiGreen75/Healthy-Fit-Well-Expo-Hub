import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";
import LeftHeader from "../pages/LeftHeader/LeftHeader";
import RightHeader from "../pages/RightHeader/RightHeader";
import Services from "../pages/Services/Services";
import "./Home.css"

const Root = () => {
    return (
        <div className="body">
            <div>
                <Navbar></Navbar>
                <div className="flex items-center justify-between xl:max-w-6xl lg:max-w-6xl md:max-w-2xl mx-auto">
                    <LeftHeader></LeftHeader>
                    <RightHeader></RightHeader>
                </div>
            </div>
            <div className="xl:max-w-6xl lg:max-w-6xl md:max-w-2xl mx-auto">
                <Services></Services>
            </div>
            <div>
                <div className="xl:max-w-6xl lg:max-w-6xl md:max-w-2xl mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
            <div>
                <Footer ></Footer>
            </div>
        </div>
    );
};

export default Root;