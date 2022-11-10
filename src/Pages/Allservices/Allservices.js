import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Availableservices from '../Availableservices/Availableservices';
import './Allservices.css'

const Allservices = () => {
    // const allservicesdata = useLoaderData();

    const [allservices, setAllservices] = useState();

    useEffect(() => {
        fetch('https://assignment-11-server-ecru.vercel.app/services?limit=100')

            .then(res => res.json())
            .then(data => setAllservices(data))
    }, [])
    console.log(allservices);

    return (
        <div className='allservices-container'>
            {
                allservices.map((items) => <Availableservices key={items._id} items={items}></Availableservices>)
            }
        </div>
    );
};

export default Allservices;