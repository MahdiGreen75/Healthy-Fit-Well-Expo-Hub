import Services from "../ServicesList/Services";
import LeftHeader from "./LeftHeader/LeftHeader";
import RightHeader from "./RightHeader/RightHeader";

const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-between xl:max-w-6xl lg:max-w-6xl md:max-w-2xl mx-auto">
                <LeftHeader></LeftHeader>
                <RightHeader></RightHeader>
            </div>
            <Services></Services>
        </div>
    );
};

export default Header;