import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../layouts/Root";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Header from "../pages/Header/Header";
import Login from "../pages/Login/Login";
import YouHaveToLoginFirst from "../pages/YouHaveToLoginFirst/YouHaveToLoginFirst";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import Blogs from "../pages/Blogs/Blogs"
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root />,
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
                path: "/about-us",
                element: <About></About>
            },
            {
                path: "/service/:detailsId",
                loader: () => fetch(`/serviceDetails.json`),
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/products",
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
            {
                path: "/blog",
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
        ]
    }
]);

export default router;