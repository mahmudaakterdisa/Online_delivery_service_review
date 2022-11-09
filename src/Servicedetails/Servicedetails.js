import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Authcontext } from '../Pages/Authprovider/Authprovider';
import './Servicedetails.css'

const Servicedetails = () => {
    const detailsdata = useLoaderData()
    const { user } = useContext(Authcontext)

    // console.log(detailsdata)
    const { service_image, service_name, service_description, price, _id, service_id } = detailsdata;


    const handlereview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const image = form.image.value;
        const message = form.message.value;
        const email = user?.email || 'unregistered';

        //to post review

        const review = {
            service: _id,
            serviceName: service_name,
            price,
            customer: name,
            email,
            message,
            image
        }



        fetch('https://assignment-11-server-ecru.vercel.app/review', {
            method: 'POST',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Thanks for your review')
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }


    return (
        <div className='details-container'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={service_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <div className="text-2xl text-color">Price:{price}$</div>
                    <p>{service_description}</p>

                </div>


            </div>

            <div>
                <div>
                    <h1>right here</h1>
                </div>


                <div>
                    {
                        user?.email ?
                            <>
                                {/* <Link to='/reviews'>
                                    <button className="btn btn-primary">ADD REVIEWS</button>
                                </Link> */}
                                <div className='review-container'>
                                    <form onSubmit={handlereview} className='form-body'>
                                        <div className='grid grid-cols-1 gap-4 p-5'>
                                            <input name='name' type="text" placeholder="Name" className="input w-full" />
                                            <input name='image' type="text" placeholder="Photo URL" className="input w-full" />
                                            <textarea name='message' className="textarea textarea-bordered" placeholder="Your review"></textarea>


                                            <input type="text" placeholder="Your email" defaultValue={user?.email} className="input w-full" readOnly />
                                            <input className='btn btn-primary' type="submit" value="Submit"></input>
                                        </div>

                                    </form>
                                </div>
                            </>
                            :
                            <h2>Please login to add a review</h2>
                    }

                </div>




            </div>



        </div>
    );
};

export default Servicedetails;