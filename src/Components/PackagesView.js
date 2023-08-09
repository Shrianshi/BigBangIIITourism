import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useCollapse } from "react-collapsed";
import './PackagesView.css';
import { Link } from "react-router-dom";


const PackagesView = () => {
    const [Packages, setPackages] = useState([]);
    const [images, setImages] = useState([]);
    const [show, setShow] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ show });
    const [expandedStates, setExpandedStates] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        fetchPackages();
    }, []);

    useEffect(() => {
        // Initialize the expandedStates array with false values corresponding to each card
        const initialStates = Packages.map(() => false);
        setExpandedStates(initialStates);
    }, [Packages]);

    // Function to handle expansion of a specific card
    const handleExpand = (index) => {
        // Create a copy of the expandedStates array to modify it
        const newExpandedStates = [...expandedStates];
        newExpandedStates[index] = !newExpandedStates[index];
        setExpandedStates(newExpandedStates);
    };



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
                setPackages(data);

            } else {
                console.error("Error fetching packages:", response.statusText);
                window.alert("Unauthorized");
            }
        } catch (error) {
            console.error("Error fetching doctors:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="row article-div container-fluid justify-content-center" style={{ marginTop: "7%" }}>
                <h2 align="center" className="h1 my-3">Packages</h2>
                <div className="form-group">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i className="fas fa-search fa-icon"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Filter by Package Name"
                            value={filter} onChange={e => setFilter(e.target.value)} aria-label="Text input with checkbox" style={{height:"30px"}} />
                    </div>
                </div>


                {/* <div className="form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping"><i className="fas fa-search fa-icon"></i></span>
                    </div>

                    <input
                        type="text"
                        placeholder="Filter by Package Name"
                        value={filter}
                        className="form-control" aria-describedby="addon-wrapping"
                        onChange={e => setFilter(e.target.value)}
                    />


                </div> */}
                {Packages.filter(pkg => pkg.p_Name.toLowerCase().includes(filter.toLowerCase())).map((Doctor, index) => (


                    <div key={Doctor.p_id} className="card card-package col-md-3 m-3">


                        <img className="card-img-top img-package" src={Doctor.imageSrc} alt={Doctor.iName} height={200} />


                        <div class="card-body">
                            <h5 class="card-title">{Doctor.p_Name}</h5>
                            <p class="card-text">{Doctor.desc}</p>
                            <section {...getCollapseProps()} style={{ display: expandedStates[index] ? "block" : "none" }}>
                                
                                <p><b>Food: </b>{Doctor.food_Details}</p>
                                <p><b>Accomodation: </b>{Doctor.acc_details}</p>
                                <p><b className="text-danger">Total cost: </b>{Doctor.pricing}</p>


                            </section>
                            <div className="row">
                                <button
                                    onClick={() => handleExpand(index)}

                                    className="btn butn-show btn-success btn-sm col-sm-6">
                                    {expandedStates[index] ? "Read Less" : "Read More"}
                                </button>
                                <button type="button" className="btn butn-show btn-warning btn-sm col-sm-6 nav-link"><Link to="/Booking" className="nav-link">Book now</Link></button>
                            </div>

                            {/* {
                            show && (
                                <div className="container-fluid">
                                    <h1>{Doctor.p_Name}</h1>
                                    <p>{Doctor.desc}</p>

                                </div>


                            )
                        } */}
                        </div>
                    </div>


                ))}


                {/* {Packages.map((Doctor, index) => (

                    <div key={Doctor.p_id} className="card card-package col-md-3 m-3">


                        <img className="card-img-top img-package" src={Doctor.imageSrc} alt={Doctor.iName} height={200} />


                        <div class="card-body">
                            <h5 class="card-title">{Doctor.p_Name}</h5>
                            <p class="card-text">{Doctor.desc}</p>
                            <section {...getCollapseProps()} style={{ display: expandedStates[index] ? "block" : "none" }}>
                                <p>{Doctor.pricing}</p>
                                <p>{Doctor.food_Details}</p>
                                <p>{Doctor.acc_details}</p>


                            </section>
                            <div className="row">
                                <button
                                    onClick={() => handleExpand(index)}

                                    className="btn butn-show btn-success btn-sm col-sm-6">
                                    {expandedStates[index] ? "Read Less" : "Read More"}
                                </button>
                                <button type="button" className="btn butn-show btn-warning btn-sm col-sm-6 nav-link"><Link to="/Booking" className="nav-link">Book now</Link></button>
                            </div>

                            {/* {
                            show && (
                                <div className="container-fluid">
                                    <h1>{Doctor.p_Name}</h1>
                                    <p>{Doctor.desc}</p>

                                </div>


                            )
                        } */}
                {/* </div>
                    </div>

                ))}  */}
            </div>
            <Footer></Footer>

        </div>
    );
};

export default PackagesView;
