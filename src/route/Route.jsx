import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import Residential from "../Components/Residential/Residential";
import ResidentialDetails from "../Pages/Home/ResidentialDetails";
import AppliedResidential from "../Pages/AppliedResidential";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Components/PrivateRoute";

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
                element: <PrivateRoute>
                    <ResidentialDetails />
                </PrivateRoute>,
                loader: () => fetch('/public/data.json')
            },
            {
                path: '/appliedResidential',
                element: <PrivateRoute>
                    <AppliedResidential />
                </PrivateRoute>,
                loader: () => fetch('/public/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])