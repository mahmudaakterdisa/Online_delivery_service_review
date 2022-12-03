import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Allreviews from '../Pages/Allreviews/Allreviews';
import { Authcontext } from '../Pages/Authprovider/Authprovider';
import './Servicedetails.css';


const Servicedetails = () => {
    const detailsdata = useLoaderData();

    const { user } = useContext(Authcontext);
    const [loader, setLoader] = useState(false);




    const { service_image, service_name, service_description, price, _id, service_id } = detailsdata;

    // console.log(service_name, _id)

    const handlereview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const image = form.image.value;
        const message = form.message.value;
        const email = user?.email || 'unregistered';
        const date = form.date.value;

        //to post review

        const review = {
            service: _id,
            serviceName: service_name,
            review_date: date,
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
                setLoader(true);
            })
            .catch(error => console.error(error));

    }




    const [allreview, setAllreview] = useState([]);

    console.log(allreview)
    useEffect(() => {
        fetch(`https://assignment-11-server-ecru.vercel.app/review/${_id}`)
            .then(res => res.json())
            .then(data => setAllreview(data))
    }, [_id])


    return (
        <div className='details-container grid sm:grid-cols-2 grid-cols-1 md:grid-cols-2'>
            <div className='each-servicecard'>
                <div className="card card-compact  bg-base-100 shadow-xl detailsaboutservice">
                    <figure><img src={service_image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{service_name}</h2>
                        <div className="text-2xl text-color">Price:{price}$</div>
                        <p>{service_description}</p>

                    </div>


                </div>
            </div>

            <div className='service-review'>
                <div>

                    {
                        allreview.map((rev) => <Allreviews rev={rev}></Allreviews>)
                    }


                </div>


                <div>
                    {
                        user?.email ?
                            <>

                                <div className='review-container'>
                                    <form onSubmit={handlereview} className='form-body'>
                                        <div className='grid grid-cols-1 gap-4 p-5'>
                                            <input name='name' type="text" placeholder="Name" className="input w-full" />
                                            <input name='image' type="text" placeholder="Photo URL" className="input w-full" />
                                            <textarea name='message' className="textarea textarea-bordered" placeholder="Your review"></textarea>
                                            <input type="date" id="start" name="date"

                                                min="2022-01-01" max="2025-12-31" />

                                            <input type="text" placeholder="Your email" defaultValue={user?.email} className="input w-full" readOnly />
                                            <input className='btn btn-danger' type="submit" value="Submit"></input>
                                        </div>

                                    </form>
                                </div>
                            </>
                            :
                            <h2>Please <Link to='/login'>Login </Link> to add a review</h2>
                    }

                </div>




            </div>



        </div>
    );
};

export default Servicedetails;