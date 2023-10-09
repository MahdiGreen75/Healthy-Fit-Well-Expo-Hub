import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const user = useContext(AuthContext);

    if (user) {
        return children;
    }
    return <Navigate to={"/login-1"}></Navigate>

};

export default PrivateRoute;