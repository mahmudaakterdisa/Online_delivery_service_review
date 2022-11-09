import React from 'react';
import './Userreviews.css'

const Userreviews = ({ myreviews, handledelete }) => {
    console.log(myreviews);
    const { customer, email, image, message, serviceName, _id
    } = myreviews;





    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handledelete(_id)} className="btn btn-primary">Delete</button>
                    <button className="btn btn-primary">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default Userreviews;