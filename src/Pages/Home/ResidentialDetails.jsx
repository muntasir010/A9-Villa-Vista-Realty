import { GiRapidshareArrow } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { saveResidential } from "../../utility/localStorage";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const ResidentialDetails = () => {
    const residence = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const residential = residence.find(residential => residential.id === idInt);
    const { image, estate_title, description, segment_name, status, facilities, price, area, location } = residential;
    console.log(residential);
    const handleApplyResidential = () => {
        saveResidential(idInt);
        toast('You have applied rent or sale successfully');
    }
    return (
        <div className="max-w-3xl mx-auto ">
            <Helmet>
                <title>Villa Vista Realty | Residential Details</title>
            </Helmet>
            <h1 className="text-center text-4xl font-bold my-5 text-orange-400">Residential Details</h1>
            <div className="rounded-xl border my-10 space-y-4 p-4">
                <h3 className="text-3xl font-bold text-center my-3">{estate_title}</h3>
                <img className="rounded-xl h-fit" src={image} alt="" />
                <div className="flex md:text-xl font-medium justify-between px-4">
                    <p className="flex gap-2 items-center"><span><MdLocationOn></MdLocationOn></span>{location}</p>
                    <p className="flex gap-2 items-center">{segment_name}</p>
                    <h3>{status}</h3>
                </div>
                <div className="flex md:text-xl font-medium justify-between px-4">
                    <p className="flex gap-2 items-center"><span><GiRapidshareArrow></GiRapidshareArrow></span>{area}</p>
                    <h3>{price}</h3>
                </div>
                <div className="flex justify-between md:text-xl font-bold">
                    <h3>Facilities: </h3>
                    <h3>{facilities[0]}</h3>
                    <h3>{facilities[1]}</h3>
                    <h3>{facilities[2]}</h3>
                </div>
                <p className="font-medium text-[17px]">{description}</p>

                <div>
                    <button onClick={handleApplyResidential}
                        className="btn btn-outline  w-full mt-4 text-xl text-orange-400">Add Residential</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default ResidentialDetails;