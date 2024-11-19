import { Helmet } from "react-helmet-async";
import Residence from "../../Components/Residential/Residence";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Villa Vista Realty | Home page</title>
            </Helmet>
            <Banner></Banner>
            <Residence></Residence>
        </div>
    );
};

export default Home;