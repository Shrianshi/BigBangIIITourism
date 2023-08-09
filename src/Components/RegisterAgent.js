import React, { useState } from "react";
import './RegisterAgent.css';
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const RegisterAgent = () => {
  const [AgentName, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const [Userid, setUserid] = useState();
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const studentData = {
        agentname: AgentName,
        email: Email,
        password: Password,
        phone:Phone,
        country:Country,
        city:City,
        userId:Userid        
      };

      let jwttoken = sessionStorage.getItem("jwttoken");
      const response = await fetch("https://localhost:7187/api/Agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + jwttoken,
        },
        body: JSON.stringify(studentData),
      });

      if (response.ok) {
        console.log("Agent added successfully");
        alert("Details are saved successfully!!");
      } else {
        console.error("Error registering agent:", response.statusText);
        window.alert("Failed to register agent");
      }
    } catch (error) {
      console.error("Error registering agent:", error);
    }

    // Reset the form fields
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setCity("");
    setCountry("");
    setUserid()
  };

  return (
    <div>
    <div className="container-fluid row body-agent justify-content-end fw-bold">
      <h1 align="center">Agent Details</h1>
      <Link to='/PackageView' className="nav-link">Go Back</Link>
      <form onSubmit={handleSubmit} className="p-3 justify-content-end col-lg-4">
        <div className="form-group my-2">
          Username: <input className="form-control bg-white bg-opacity-25" id="username" placeholder="e.g., abc"
            type="text"
            value={AgentName}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group my-2">
          Email: <input className="form-control bg-white bg-opacity-25" placeholder="e.g., abc@domain.com"
            type="text"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group my-2">
          Password:<input className="form-control bg-white bg-opacity-25" placeholder="e.g., ********"
            type="password"
            value={Password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group my-2">
          Contact number:<input className="form-control bg-white bg-opacity-25" placeholder="e.g., 54321 12345"
            type="text"
            value={Phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="form-group my-2">
          Country:<input className="form-control bg-white bg-opacity-25" placeholder="e.g., India"
            type="text"
            value={Country}
            onChange={(event) => setCountry(event.target.value)}
          />
        </div>
        <div className="form-group my-2">
          City:<input className="form-control bg-white bg-opacity-25" placeholder="e.g., Supaul"
            type="text"
            value={City}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="form-group my-2">
          Status:<input
            type="text" className="form-control bg-white bg-opacity-25" placeholder="Enter Agent Id"
            value={Userid}
            onChange={(event) => setUserid(event.target.value)}
          />
        </div>
        <div>
            <button type="submit" className="btn btn-danger"><Link to="/PackageView" className="nav-link">Submit</Link></button>
        </div>
      </form>
      </div>
      <Footer/>
    </div>
  );
};
export default RegisterAgent;

