import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Home.css'
import Services from './Services/Services';

const Home = () => {
    const getservices = useLoaderData();
    // const [services, setServices] = useState([]);
    // console.log(services.length);
    if (getservices.length > 3) {

        getservices.length = 3;



    }
    return (
        <div className='home-container'>
            <div className='banner-image mt-10'>
                <Banner></Banner>
            </div>

            <div className='services-container'>


                {
                    getservices.map((offers) => <Services key={offers._id} offers={offers}></Services>)
                }


            </div>


            <div className='button-container'>
                <Link to='/services'>
                    <Button variant="primary" size="lg">
                        Show All
                    </Button>
                </Link>

            </div>

        </div>
    );
};

export default Home;