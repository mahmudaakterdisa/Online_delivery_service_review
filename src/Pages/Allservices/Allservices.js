import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Allservices = () => {
    const allservicesdata = useLoaderData();
    return (
        <div>
            <h1>{allservicesdata.length}</h1>
        </div>
    );
};

export default Allservices;