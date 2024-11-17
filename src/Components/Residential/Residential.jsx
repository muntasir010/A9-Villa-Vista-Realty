const Residential = ({ residential }) => {
    const { id, image, estate_title, segment_name, description, price, status, area, location, facilities, ViewProperty } = residential;
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
                    <p className="">{location}</p>
                    <h3>{price}</h3>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default Residential;