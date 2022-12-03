import React, { useState } from 'react';
import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom';
import './Updatereview.css'

const Updatereview = () => {
    const storedreview = useLoaderData();

    const params = useParams();
    const [user, setUser] = useState(storedreview);
    const navigate = useNavigate();
    const location = useLocation();


    const handlereview = (event) => {

        event.preventDefault();
        const form = event.target;


        fetch(`https://assignment-11-server-ecru.vercel.app/review/${params.id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    alert("Updated");
                    navigate('/reviews');

                }


            })
    }

    const handleInputChange = (event) => {
        // const form = event.target;
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);


    }

    return (
        <div className='updatereview-container'>
            <form onSubmit={handlereview} className='reviewform'>
                <div className='flex flex-col sm:flex-col justify-center items-center h-full'>

                    <textarea onChange={handleInputChange} defaultValue={storedreview.message} name='message' className="textarea textarea-bordered md:w-96 lg:w-2/3 " placeholder="Your review"></textarea>



                    <input className='btn btn-danger mt-4' type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    );
};

export default Updatereview;