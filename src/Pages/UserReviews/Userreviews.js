import React from 'react';
import { Link } from 'react-router-dom';
import './Userreviews.css'

const Userreviews = ({ myreviews, handledelete }) => {

    const { customer, email, image, message, serviceName, _id, status
    } = myreviews;





    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handledelete(_id)} className="btn btn-primary">Delete</button>
                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-primary">Edit</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Userreviews;