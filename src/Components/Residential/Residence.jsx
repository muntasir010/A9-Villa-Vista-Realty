import { useEffect, useState } from "react";
// import Residential from "./Residential";

const Residence = () => {
    const [residence, setResidence] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setResidence(data))
    }, [])

    return (

        <div>
            <div className="max-w-xl mx-auto text-center my-7 space-y-3">
                <h2 className='text-4xl font-semibold'> Properties for Sell and Rent</h2>
                <p>These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    residence.map(residential => 
                    <Residential 
                    residential={residential} 
                    key={residential.id}
                    ></Residential>)
                }
            </div>
        </div>
    );
};

export default Residence;