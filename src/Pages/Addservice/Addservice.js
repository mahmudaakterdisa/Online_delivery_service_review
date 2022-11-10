import React from 'react';

import Moment from 'react-moment';
import './Addservice.css'
import useTitle from '../../hooks/useTitle';

const Addservice = () => {

    useTitle('Add service');

    const handleService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.name.value}`;
        const image = form.image.value;
        const overview = form.overview.value;
        const price = form.price.value;
        const id = form.id.value;
        const date = form.date.value;

        //to post review

        const order = {

            service_name: name,
            service_id: id,
            service_date: date,
            price: price,
            service_description: overview,
            service_image: image,

        }


        fetch('https://assignment-11-server-ecru.vercel.app/services', {
            method: 'POST',

            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your service is successfully added')
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }


    return (
        <div className='review-container'>
            <h1>Please Add Your Service Here</h1>
            <form onSubmit={handleService} className='form-body'>
                <div className='grid grid-cols-1 gap-4 p-5'>

                    <input name='name' type="text" placeholder="service name" className="input w-full" />
                    <input name='id' type="number" placeholder="service id" className="input w-full" />
                    <input name='image' type="text" placeholder="Photo URL" className="input w-full" />
                    <input name='price' type="number" placeholder="price" className="input w-full" />
                    {/* <textarea name='message' className="textarea textarea-bordered" placeholder="Your review"></textarea> */}

                    <input type="date" id="start" name="date"

                        min="2022-01-01" max="2025-12-31" />

                    <input name='overview' type="text" placeholder="service overview" className="input w-full" />
                    <input className='btn btn-danger' type="submit" value="Submit"></input>
                </div>

            </form>
        </div>
    );
};

export default Addservice;