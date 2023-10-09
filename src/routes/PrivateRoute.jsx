import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { AuthLocation } from "../Providers/UseLocation";
// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const [value, setValue] = useContext(AuthLocation)
    const forwardLocation = useLocation();
    
    setValue(forwardLocation)
    
    
    
    // console.log(location);
    const {user} = useContext(AuthContext);

    if (user) {
        return children;
    }
    return <Navigate  to={"/login-1"}></Navigate>

};

export default PrivateRoute;