import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';
import './FeedbackList.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7187/api/Feedback')
      .then((response) => response.json())
      .then((data) => setFeedbacks(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
        <Navbar/>
    <div className='background'>
    <div className='container-fluid row m-3'>
      <h2 align="center">REVIEWS</h2>
      <Link to='/Feedback'>Add your review</Link>
      <div className='row'>
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className='card col-md-3 m-3 p-3'>
            <div>
            <p className='fw-bold'>{feedback.name}</p>
            <p><b>Review:</b> {feedback.message}</p>
            <div>
              <StarRating rating={feedback.rating} />
            </div>
            </div>
            
          </div>
        ))}

      </div>

    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default FeedbackList;
