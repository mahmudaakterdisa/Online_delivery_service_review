import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import Userreviews from '../UserReviews/Userreviews';
import './Review.css'

const Myreview = () => {
    const { user } = useContext(Authcontext);
    const [reviews, setReviews] = useState([]);



    useEffect(() => {

        fetch(`https://assignment-11-server-ecru.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    //delete
    const handledelete = (id) => {
        const proceed = window.confirm('do you wants to delete your review?');
        if (proceed) {
            fetch(`https://assignment-11-server-ecru.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const reamining = reviews.filter(rev => rev._id !== id);
                        setReviews(reamining);
                    }
                })
        }

    }

    return (
        <div className='myreviews-container'>
            {
                reviews.map((myreviews) => <Userreviews key={myreviews._id} myreviews={myreviews} handledelete={handledelete}></Userreviews>)
            }
        </div>
    );
};

export default Myreview;