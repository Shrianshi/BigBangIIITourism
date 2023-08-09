// import "../components/BillingStyles.css";
import { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Travelicon from "../assets/img/Travelicon2.png";
import { format } from 'date-fns';
import axios from "axios";
import { useState, useEffect } from "react";
import Booking from './Booking';
import './Billing.css'
import useBill from '../billContext/billContext';
function Billing() {
    const [billing, setBilling] = useState([]);
    const {tax, totalCost} = useBill()
    useEffect(() => {
        fetchPackages();
    }, []);

    const currentDate = new Date();
    const customDateFormat = format(currentDate, 'dd MMM yyyy');
    const componentRef = useRef();
    const handlePrint = () => {
        window.print()
    }

    const fetchPackages = async () => {
        try {
            let jwttoken = sessionStorage.getItem("jwttoken");
            const response = await fetch("https://localhost:7187/api/Package", {
                headers: {
                    Authorization: "bearer " + jwttoken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setBilling(data);

            } else {
                console.error("Error fetching packages:", response.statusText);
                window.alert("Unauthorized");
            }
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    return (
        <div className="container-fluid billing-page">
            <h1 className='text-danger' align="center">Billing</h1>

            <ReactToPrint trigger={() => (
                <button className='btn btn-dark justify-content-end'>Print/Download the bill</button>
            )}
                content={() => componentRef.current}
            />
            <div ref={componentRef} className="motech" >
                <div className="row invoice container-fluid m-3">
                    <img src={Travelicon} className="img col-sm-3" alt="Profile" width={20} />
                    <div className="profile-info col-sm-8">
                        <p className='fw-bold'>Kanini Travels</p>
                        <p>Rattha Tek Meadows, Tower-A, 1st Floor
                            51, Rajiv Gandhi Salai (OMR)
                            Sholinganallur, Chennai- 600119
                            Tamil Nadu, India
                            044 40098700</p>
                        <p>Chennai, Tamil Nadu, India</p>

                        <p> + 91 987 008 956</p>
                    </div>
                    <div className="date-time">
                        <h5><b>INVOICE</b></h5>
                        <span><strong>Date : </strong>{customDateFormat}<br />
                            <strong>Invoice No: </strong></span>
                    </div >


                            <div className="customer-info">
                                <h3>Bill to: Shrianshi</h3>
                                <hr className="hr hr-blurry" />
                                {/* <p>Traveller Name:</p> */}
                                <p>Date of booking: {customDateFormat}</p>
                                <p>Tax: {tax}</p>
                                <p>Total Cost: {totalCost}</p>
                            </div>
                            


                    
                
                    </div>
                    <div className="bill-table">
                        <table className="table striped-table ">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th>Cost of tour:</th>
                                    <th>Tax:</th>
                                    <th>Total:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><h6>Remarks/Payment Instructions</h6></td>
                                    <td>SUBTOTAL: {totalCost}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>DISCOUNT: 25%</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>TOTAL TAX:{tax}</td>
                                </tr>

                            </tbody>
                        </table>
                        <h6>Thank you for Booking. Have a Wonderful Trip.</h6>
                    </div>
                </div>


            </div>
            )
}
            export default Billing;