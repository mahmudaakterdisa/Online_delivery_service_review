import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './Services.css'

const Services = ({ offers }) => {

    const { service_image, service_name, service_description, price, _id
    } = offers;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl allservice-container">
            <PhotoProvider>
                <PhotoView src={service_image}>
                    <figure><img src={service_image} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <div className="text-2xl text-color">Price:{price}$</div>
                <p>{service_description.slice(50)}..</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-danger">View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Services;