import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Pages/Home/Home";

const Layouts = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;