import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Availableservices from '../Availableservices/Availableservices';
import './Allservices.css'

const Allservices = () => {
    const allservicesdata = useLoaderData();

    return (
        <div className='allservices-container'>
            {
                allservicesdata.map((items) => <Availableservices key={items._id} items={items}></Availableservices>)
            }
        </div>
    );
};

export default Allservices;