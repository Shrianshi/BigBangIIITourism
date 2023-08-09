import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Link,useNavigate } from "react-router-dom";

const Booking = () => {
    const [feedback, setFeedback] = useState({
        tname: '',
        booking_date: '',
        p_id: null,
    });
    const [packageOptions, setPackageOptions] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState('');
    const usenavigate = useNavigate();


    useEffect(() => {
        // Fetch the package options from your API or data source
        const fetchPackageOptions = async () => {
            try {
                const response = await fetch('https://localhost:7187/api/Package'); // Update the URL
                if (response.ok) {
                    const data = await response.json();
                    setPackageOptions(data); // Assuming data is an array of package objects
                } else {
                    console.error('Error fetching package options');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchPackageOptions();
    }, []);




    const handlePackageChange = (e) => {
        const selectedValue = e.target.value;
        console.log('Selected Value:', selectedValue);

        setSelectedPackage(selectedValue);
        setFeedback((prevFeedback) => ({ ...prevFeedback, pricing: selectedValue }));
    };




    const handleGeneratePDF = async () => {
        try {
            const input = document.getElementById('booking-form'); // Give your form an ID
            const canvas = await html2canvas(input);
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 10, 10, 190, 250); // Adjust the coordinates and dimensions as needed
            pdf.save('booking.pdf');
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://localhost:7187/api/Booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feedback),
            });

            if (response.ok) {
                setFeedback({
                    tname: '',
                    booking_date: '',
                    p_id: null

                });
                setSelectedPackage({
                    selectedPackage: ''
                })
                usenavigate(`/AddBilling?tname=${feedback.tname}&pricing=${feedback.pricing}`);
                

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
                    <h1>Book Now</h1>
                </div>

                <form onSubmit={handleSubmit} id="booking-form" className='card-body offset-md-4 col-md-4'>
                    <div className="Form-group">
                        <label>
                            Name:</label>
                        <input type="text" name="tname" className="form-control" value={feedback.tname} onChange={handleChange} />

                    </div>
                    <div className="Form-group">
                        <label>
                            Booking Date:</label>
                        <input type="date" name="booking_date" className="form-control" value={feedback.booking_date} onChange={handleChange} />

                    </div>
                    <div className="Form-group">
                        <label>
                            Package Id:</label>
                        <select
                            name="p_id"
                            className="form-control"
                            value={selectedPackage}
                            onChange={handlePackageChange}
                        >
                            <option value="">Select a package</option>
                            {packageOptions.map((packageOption) => (
                                <option key={packageOption.p_id} value={packageOption.pricing}>
                                    {packageOption.p_Name} {/* Adjust the property names */}
                                </option>
                            ))}
                        </select>


                    </div>
                    <div className="form-group">
                        <label>Package Price:</label>
                        <input value={selectedPackage}
                            type="text"
                            className="form-control"
                            disabled
                        />
                    </div>


                    <button type="submit" className="btn btn-dark">Submit</button>

                    {/* <button type="button" onClick={handleGeneratePDF} className='btn btn-secondary my-3 mx-3'>Download Pdf</button> */}
                    {/* <button type="submit" className='btn btn-secondary my-3 mx-3'><Link to="/Billing">Download Pdf</Link></button> */}

                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Booking;