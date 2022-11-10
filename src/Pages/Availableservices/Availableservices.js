import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import './Availableservices.css'

const Availableservices = ({ items }) => {
    // console.log(items);
    const { service_image, service_name, service_description, price, _id } = items
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl card-image">
            <PhotoProvider>
                <PhotoView src={service_image}>
                    <figure><img src={service_image} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">{service_name}

                </h2>
                <div className="text-2xl text-color">Price:{price}$</div>
                <p>{service_description.slice(100)}..</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-danger">View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Availableservices;