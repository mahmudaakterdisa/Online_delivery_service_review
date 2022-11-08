import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Servicedetails.css'

const Servicedetails = () => {
    const detailsdata = useLoaderData()
    console.log(detailsdata)
    const { service_image, service_name, service_description, price, _id, service_id } = detailsdata;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={service_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <div className="text-2xl text-color">Price:{price}$</div>
                    <p>{service_description}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div> */}
                </div>
            </div>


        </div>
    );
};

export default Servicedetails;