import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Allreviews.css'

const Allreviews = ({ rev }) => {

    return (
        <div>
            <div className='review-image'>
                <img src={rev.image} alt="" />
            </div>
            <div className='reviewer-info'>
                <h3>{rev.serviceName}</h3>
                <h4>{rev.email}</h4>
                <p>{rev.message}</p>
            </div>

        </div>
    );
};

export default Allreviews;