import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    message: '',
    rating: 0,
    userId: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://localhost:7187/api/Feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });

      if (response.ok) {
        alert('Feedback submitted successfully!');
        setFeedback({
          name: '',
          message: '',
          rating: 1,
          userId: null,
        });
      } else {
        alert('Error submitting feedback!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({ ...prevFeedback, [name]: value }));
  };

  return (
    <div>
        <Navbar/>
        <div className='back card row' style={{marginTop:'7%'}}>
            <div align="center">
               <h1>Review Us</h1>
            </div>
        
    <form onSubmit={handleSubmit}className='card-body offset-md-4 col-md-4'>
        <div className="Form-group">
      <label>
        Reviewer Name:</label>
        <input type="text" name="name" className="form-control" value={feedback.name} onChange={handleChange} />
      
      </div>
      <div className="Form-group">
      <label>
        Message:</label>
        <input type="text" name="message" className="form-control" value={feedback.message} onChange={handleChange} />
      
      </div>
      <div className="Form-group">
      <label>
        Rating (where 1 is for worst and 5 is for best):</label>
        <input type="number" name="rating" min={1} max={5} className="form-control" value={feedback.rating} onChange={handleChange} />
      
      </div>
      <div className="Form-group">
      <label>
        User ID:</label>
        <input type="number" name="userId" min={2} className="form-control" value={feedback.userId} onChange={handleChange} />
      
      </div>
      <button type="submit" className='btn btn-dark my-3'>Submit Feedback</button>
    </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Feedback;
