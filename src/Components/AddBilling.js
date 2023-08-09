import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Feedback.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useBill from '../billContext/billContext';
const AddBilling = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [feedback, setFeedback] = useState({
        tname: queryParams.get('tname') || 0,
        pricing: queryParams.get('pricing') || 0,
        tax: 35,
        book_Id: 2
    });
    const usenavigate = useNavigate();

    const {updateBill} = useBill()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await fetch('https://localhost:7187/api/Billing', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(feedback),
            // });

            if (feedback!='') {
                alert('Payment done!');
            updateBill(feedback.pricing,feedback.tax)
                setFeedback({
                    tname: '',
                    pricing: null,
                    tax: null,
                    book_Id: 2,


                });
                // usenavigate(`/Billing?tname=${feedback.tname}`);
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
            <Navbar />
            <div className='back card row' style={{ marginTop: '7%' }}>
                <div align="center">
                    <h1>Billing Details</h1>
                </div>

                <form onSubmit={handleSubmit} className='card-body offset-md-4 col-md-4'>
                    <div className="Form-group">
                        <label>
                            Traveller Name:</label>
                        <input type="text" name="message" className="form-control" value={feedback.tname} onChange={handleChange} />

                    </div>
                    <div className="Form-group">
                        <label>
                            Sub Total:</label>
                        <input type="text" name="message" className="form-control" value={feedback.pricing} onChange={handleChange} />

                    </div>
                    <div className="Form-group">
                        <label>
                            Tax:</label>
                        <input type="text" name="rating" className="form-control" value={feedback.tax} onChange={handleChange} />

                    </div>
                    <div className="Form-group">
                        <label>
                            Package ID:</label>
                        <input type="text" name="userId" className="form-control" value={feedback.book_Id} onChange={handleChange} />

                    </div>
                    <button type="submit" className='btn btn-dark m-3 '>Pay</button>
                    <button type="submit" className='btn btn-secondary my-3'><Link to="/Billing" className='nav-link'>Download Now</Link></button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddBilling;
