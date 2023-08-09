import React, { useEffect, useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import Footer from "./Footer";
import { useCollapse } from "react-collapsed";
import './PackagesView.css'


const PackagesAdmin = () => {
    const [Packages, setPackages] = useState([]);
    const [images, setImages] = useState([]);
    const [show, setShow] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ show });
    const [expandedStates, setExpandedStates] = useState([]);

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
            <NavbarAdmin />
            <div className="row article-div container-fluid justify-content-center">
                <h2 align="center" className="h1 my-3">Packages</h2>

                {Packages.map((Doctor, index) => (

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
                            <button
                                onClick={() => handleExpand(index)}

                                class="btn butn-show btn-success btn-sm">
                                {expandedStates[index] ? "Read Less" : "Read More"}
                            </button>

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
            </div>
            <Footer></Footer>

        </div>
    );
};

export default PackagesAdmin;
