import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Updatereview = () => {
    const storedreview = useLoaderData();
    const [user, setUser] = useState(storedreview);
    // console.log(storedreview);

    const handlereview = (event) => {

        event.preventDefault();
        // console.log(user)

        fetch(`https://assignment-11-server-ecru.vercel.app/review/${storedreview._id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <form onSubmit={handlereview}>
                <div className='grid grid-cols-1 gap-4 p-5'>
                    {/* <input name='name' type="text" placeholder="Name" className="input w-full" />
                    <input name='image' type="text" placeholder="Photo URL" className="input w-full" /> */}
                    <textarea onChange={handleInputChange} defaultValue={storedreview.message} name='message' className="textarea textarea-bordered" placeholder="Your review"></textarea>



                    <input className='btn btn-primary' type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    );
};

export default Updatereview;