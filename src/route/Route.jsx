import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Layouts from "../Layouts/Layouts";

export const router = createBrowserRouter([
   { 
    path: '/',
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
             
        }
    ]
   }
])