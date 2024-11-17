import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Residential = ({ residential }) => {
    const { id, image, estate_title, description, price,  location} = residential;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img className="w-full h-60"
                    src={image}
                    alt="home" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <div className="flex gap-4 text-xl font-medium">
                    <p className="flex gap-2 items-center"><span><MdLocationOn></MdLocationOn></span>{location}</p>
                    <h3>{price}</h3>
                </div>
                <p>{description.slice(0-150)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/residential/${id}`}><button className="btn btn-outline">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Residential;