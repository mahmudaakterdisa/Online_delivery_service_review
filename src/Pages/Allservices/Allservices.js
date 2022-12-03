import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Availableservices from '../Availableservices/Availableservices';
import './Allservices.css'

const Allservices = () => {
    const allservicesdata = useLoaderData();




    return (
        <div className='allservice' >
            <div className='allservices-container grid sm:grid-cols-2 grid-cols-1 gap-3 justify-between'>
                {
                    allservicesdata.map((items) => <Availableservices key={items._id} items={items}></Availableservices>)
                }
            </div>



        </div>
    );
};

export default Allservices;