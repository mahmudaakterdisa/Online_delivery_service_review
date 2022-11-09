import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <Carousel className='carusel-body'>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://img.freepik.com/free-photo/chocolate-cake-decorated-with-cream-strawberry-tea-plum-cinnamon-dark-background_114579-17270.jpg?w=900&t=st=1667869971~exp=1667870571~hmac=e8c218eb38abd19c0388658a360a7b9f6b6bf06762441f204b7e2446187d48a0"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='text-color'>Freshly Baked For Today!</h1>
                        <p className='text-color'>Savor our range of freshly baked Cakes with a blend of mouth-watering flavors</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://img.freepik.com/premium-photo/red-velvet-cookies-chefs-hands-with-small-sieve-baking-sprinkling-powdered-sugar-baker-decorating-sprinkling-stack-cookies-dark-background-homemade-bakery-goods-colourful-food_410521-506.jpg?w=900"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-color'>Freshly Baked For Today!</h1>
                        <p className='text-color'>Savor our range of freshly baked Cakes with a blend of mouth-watering flavors</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://img.freepik.com/premium-photo/red-velvet-cake-dark-background-close-up-side-view-sweet-dessert-holiday_116377-449.jpg?w=900"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-color'>Freshly Baked For Today!</h1>
                        <p className='text-color'>
                            Savor our range of freshly baked Cakes with a blend of mouth-watering flavors
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;