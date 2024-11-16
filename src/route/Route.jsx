import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
   { 
    path: '/',
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        
    ]
   }
])