import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Banner from '../Banner/Banner';
import About from './About/About';
import './Home.css'
import Services from './Services/Services';

const Home = () => {
    const getservices = useLoaderData();
    useTitle('Home');

    // if (getservices.length > 3) {

    //     getservices.length = 3;



    // }
    return (
        <div className='home-container'>
            <div className='banner-image mt-10 homebanner-container'>
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

            <div className='services-container grid grid-cols-1 sm:grid-cols-2 gap-4'>


                {
                    getservices.map((offers) => <Services key={offers._id} offers={offers}></Services>)
                }


            </div>


            <div className='button-container'>
                <Link to='/services'>
                    <Button variant="danger" size="lg" >
                        Show All
                    </Button>
                </Link>

            </div>




            <div className='Donuts-container'>
                <div className='donuts-text p-7'>
                    <h2>Sweet Delights Special Donuts</h2>
                </div>

                <div className='special-container'>
                    <div >
                        <img src='https://img.freepik.com/free-photo/colorful-tasty-donuts_144627-18316.jpg?w=1380&t=st=1670076642~exp=1670077242~hmac=75b4f53869206cd1746fe315958ae5a26cde69950d98ee05000709e36c7e6562' alt="special offer" />

                    </div>

                    {/* 2nd offer */}
                    <div>
                        <img src='https://img.freepik.com/free-photo/high-angle-view-three-fresh-donuts-wooden-chopping-board_23-2147909346.jpg?w=1380&t=st=1668085286~exp=1668085886~hmac=c54b147e20bdae4670ffea74c244a0ea7e6d889b9ea9da90cc5a38474f91430e' alt="special offer" />

                    </div>

                    {/* 3rd offer */}
                    <div>
                        <img src='https://img.freepik.com/free-photo/cup-herbal-tea-with-plate-sweet-cookies-stone-surface_114579-54380.jpg?w=1380&t=st=1668085199~exp=1668085799~hmac=96af4c534f7d6f6b6af856c6fad9af1dba69fa7f60a31fd4350a24792dc6b6b9' alt="special offer" />

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Home;