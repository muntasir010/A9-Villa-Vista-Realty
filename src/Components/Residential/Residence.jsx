import { useEffect, useState } from "react";
import Residential from "./Residential";

const Residence = () => {
    const [residence, setResidence] = useState([]);

    const [displayResidential, setDisplayResidential] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setResidence(data))
    }, [])

    
    const handleResidentialFilter = filter => {
        if (filter === 'all') {
            setDisplayResidential(residence);
        }
        else if (filter === 'rent') {
            const rentHome = residence.filter(residential => residential.status === 'Rent');
            setDisplayResidential(rentHome)
        }
        else if (filter === 'sell') {
            const sellHome = residence.filter(residential => residential.status === 'Sell')
            setDisplayResidential(sellHome);
        }
    }



    return (

        <div>
            <div className="max-w-xl mx-auto text-center my-7 space-y-3">
                <h2 className='text-4xl font-semibold'> Properties for Sell and Rent</h2>
                <p>These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.</p>
                <ul className=" w-52 p-2 flex gap-6 max-w-sm mx-auto">
                    <li className="text-xl font-bold text-orange-400 hover:border hover:rounded-lg hover:p-2 underline" onClick={() => handleResidentialFilter('all')}><a>All</a></li>
                    <li className="text-xl font-bold text-orange-400 hover:border hover:rounded-lg hover:p-2 underline" onClick={() => handleResidentialFilter('rent')}><a>Rent</a></li>
                    <li className="text-xl font-bold text-orange-400 hover:border hover:rounded-lg hover:p-2 underline" onClick={() => handleResidentialFilter('sell')}><a>Sell</a></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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