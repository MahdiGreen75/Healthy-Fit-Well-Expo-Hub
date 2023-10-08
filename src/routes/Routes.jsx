import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../layouts/Root";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Header from "../pages/Header/Header";
import Login from "../pages/Login/Login";
import YouHaveToLoginFirst from "../pages/YouHaveToLoginFirst/YouHaveToLoginFirst";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Header></Header>,
            },
            {
                path: "/login-1",
                element: <YouHaveToLoginFirst></YouHaveToLoginFirst>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/service-details",
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default router;