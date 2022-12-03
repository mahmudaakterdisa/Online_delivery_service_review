import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import Userreviews from '../UserReviews/Userreviews';
import './Review.css'
import useTitle from '../../hooks/useTitle';

const Myreview = () => {

    const { user, logout } = useContext(Authcontext);

    const [reviews, setReviews] = useState([]);



    useEffect(() => {

        fetch(`https://assignment-11-server-ecru.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('sweet-token')}`
            }
        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {
                    return logout();
                }

                return res.json();
            })
            .then(data => setReviews(data))
    }, [user?.email, logout])
    useTitle('My-review');
    console.log(reviews);

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
        <div className='reviews-section'>

            <div className='reviewstext p-7 flex flex-col justify-center items-center'>

                {
                    reviews.length == 0 &&
                    <p>No review were added.Please add some review.Thanks in Advance</p>
                }

            </div>
            <div className='myreviews-container grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-1 gap-5'>


                {
                    reviews.map((myreviews) => <Userreviews key={myreviews._id} myreviews={myreviews} handledelete={handledelete}></Userreviews>)
                }


            </div>
        </div>
    );
};

export default Myreview;