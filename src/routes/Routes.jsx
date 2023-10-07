import Home from "../pages/Home/Home";
import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../layouts/Root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            }
        ]
    }
]);

export default router;