import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Allreviews = ({ rev }) => {

    return (
        <div>
            <h3>{rev.serviceName}</h3>
            <h4>{rev.email}</h4>
            <p>{rev.message}</p>
        </div>
    );
};

export default Allreviews;