import React from 'react';

const Services = ({ offers }) => {
    console.log(offers);
    const { service_image, service_name, service_description
    } = offers;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={service_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p>{service_description.slice(100)}..</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Services;