import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Footer from "./Footer";
import './Login.css'

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import jwt_decode from "jwt-decode";

const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const [errors, setErrors] = useState({});

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLoginusingAPI = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let inpobj = {
        userName: username,
        password: password,
      };
      let inputobj = { username: username, password: password };
      fetch("https://localhost:7187/api/Token", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inpobj),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            window.alert("invalid credentials");
            toast.error("Login failed, invalid credentials");
          }
           else {
            window.alert("Welcome "+username);
            toast.success('Login successful!');
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("jwttoken", resp.token);
            console.log(resp.token);
            const decodedToken = jwt_decode(resp.token);
            console.log(decodedToken);
            const role =
              decodedToken[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
              ];
            console.log(role); 
            if(role==='agent')
            {
              usenavigate("/HomeAgent");
            }
            else if(role==='traveller')
            {
              usenavigate("/Home");
            }
            else{
                usenavigate("/HomeAdmin");
            }
            
          }
        })
        .catch((err) => {
          //window.alert("Login Failed due to :" + err.message);
          toast.error("Your account is not activated yet!");
        });
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;
  
    if (!username.trim()) {
      errors.username = "Username is required";
      isValid = false;
    }
  
    if (!password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    }
  
    setErrors(errors);
    return isValid;
  };

  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
    }
    if (password === "" || password === null) {
      result = false;
    }
    return result;
  };

  return (
    <div className="container-fluid row body-login">
      <ToastContainer />
      
      {/* <div className="row"> */}
      <div className="offset-lg-4 col-lg-5" >
      <h1 className="text-dark" align=
      'center'>Login </h1>
        <form onSubmit={ProceedLoginusingAPI} className="container">
          <div className="card border-0 bg-success bg-opacity-10 rounded">
            
              
            
            <div className="card-body">
              <div className="form-group my-2">
                {/* <label>
                  User Name <span className="errmsg">*</span>
                </label> */}
                <input
                  value={username}
                  onChange={(e) => usernameupdate(e.target.value)}
                  className="form-control bg-light bg-opacity-10 border-info" placeholder="Enter username here"></input>
                  {errors.username && <p className="text-danger">{errors.username}</p>}
              </div>
              <div className="form-group">
                {/* <label>
                  Password <span className="errmsg">*</span>
                </label> */}
                <input
                  type="password"
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  className="form-control bg-light bg-opacity-10 border-info" placeholder="Enter password here"
                ></input>
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </div>
            </div>
            <div className="card-footer btn-group">
              <button type="submit" className="btn btn-warning">
                Login
              </button>
              don't have account? 
              <Link to={"/Register"}>
                <a className=" link-primary">Create one</a>
              </Link>
            </div>
          </div>
        </form>
      </div>
      {/* </div> */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Login;