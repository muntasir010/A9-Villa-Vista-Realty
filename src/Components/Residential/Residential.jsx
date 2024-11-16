const Residential = ({ residential }) => {
    const { id, image, estate_title, segment_name, description, price, status, area, location, facilities, ViewProperty } = residential;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img className="w-full h-64"
                    src={image}
                    alt="home" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Residential;