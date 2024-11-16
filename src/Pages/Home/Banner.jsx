const Banner = () => {
    return (
        <div className="carousel w-full rounded-2xl h-[calc(100vh-124px)]">
            <div id="slide1" className="carousel-item relative w-full">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url(https://i.ibb.co/xGrDnsJ/modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Welcome to Your Dream Home</h1>
                            <p className="mb-5">
                                Stylish homes with spacious interiors, modern amenities, and prime locations offer unparalleled comfort, convenience, and elegance for every lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url(https://i.ibb.co/FbwLrz0/3d-electric-car-building.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Where Comfort Meets Elegance</h1>
                            <p className="mb-5">
                                Relax in thoughtfully designed homes featuring natural light, open layouts, premium finishes, and tranquil surroundings for ultimate peace.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div
                    className="hero"
                    style={{
                        backgroundImage: "url(https://i.ibb.co/HxcL5xV/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Discover a Place You'll Love to Call Home</h1>
                            <p className="mb-5">
                                Enjoy luxurious, affordable residences with premium amenities, vibrant community spaces, and family-friendly features in a setting built for thriving.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;