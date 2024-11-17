import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredResidential } from "../utility/localStorage";
import { FaDove } from "react-icons/fa";

const AppliedResidential = () => {
    const residential = useLoaderData();

    const [appliedResidential, setAppliedResidential] = useState([]);

    useEffect(() => {
        const storedResidentialIds = getStoredResidential();
        if (residential.length > 0) {
            const residentialApplied = [];
            for (const id of storedResidentialIds) {
                const resident = residential.find(resident => resident.id === id);
                if (resident) {
                    residentialApplied.push(resident);
                }
            }
            setAppliedResidential(residentialApplied)
            // console.log(residential, storedResidentialIds, residentialApplied)
        }
    }, [])
    return (
        <div className="h-screen">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    appliedResidential.map(resident => <li key={resident.id}>
                        <div className="card card-side bg-base-100 border-2 ">
                            <figure>
                                <img className="w-80 h-56"
                                    src={resident.image}
                                    alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <p className="text-2xl font-bold">{resident.id}.</p>
                                <h2 className="card-title">{resident.estate_title}</h2>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedResidential;