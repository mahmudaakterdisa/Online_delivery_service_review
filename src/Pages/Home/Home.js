import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import About from './About/About';
import './Home.css'
import Services from './Services/Services';

const Home = () => {
    const getservices = useLoaderData();

    // if (getservices.length > 3) {

    //     getservices.length = 3;



    // }
    return (
        <div className='home-container'>
            <div className='banner-image mt-10'>
                <Banner></Banner>
            </div>

            <div className='about-container'>
                <div className='image-container'>
                    <img src="https://img.freepik.com/free-photo/professional-smiling-confectioner-wrapping-box-with-cookies_1163-2864.jpg?w=1380&t=st=1667965863~exp=1667966463~hmac=4efdf45a9658630184c8f07ce44aebee08204bc1c227c3914b79a80b74686bfb" alt="" />
                </div>
                <div className='description-container'>
                    <h1>About Sweet Delight</h1>

                    <p> Hello from sweet delight!  sweet delight offers you specializing in fresh, quality  Home made cakes and pastries at reasonable price. At My sweet delight, i am known for the uniqueness and large variety of my cakes – from forest cakes with fresh whipping cream and fruit to chocolate fudge cakes and banana cakes – and the creativity and customization that goes into them. Most importantly, I am never compromise on quality.</p>
                </div>
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

            <div>

            </div>

        </div>
    );
};

export default Home;