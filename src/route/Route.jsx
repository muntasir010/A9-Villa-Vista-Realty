import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Residential from "../Components/Residential/Residential";
import ResidentialDetails from "../Pages/Home/ResidentialDetails";

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
        {
            path: '/residential',
            element: <Residential></Residential>
        },
        {
            path: '/residential/:id',
            element: <ResidentialDetails></ResidentialDetails>,
            loader: () => fetch('/public/data.json')
        },
    ]
   }
])