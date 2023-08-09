import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './Register.css'
const Register = () => {
  const [username, usernameupdate] = useState("");
  const [useremail, useremailupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const [Role, Roleupdate] = useState("");
  const [Status,statusUpdate]=useState("")

  console.log(useremail);
  console.log(Role);
  console.log(Status)

  const usenavigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);


  const Register = (e) => {
    e.preventDefault();
    if (validate()) {
      let inpobj = {
        userName: username,
        UserEmail:useremail,
        password: password,
        status:Status,
        Role:Role
      };
      fetch("https://localhost:7187/api/User", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inpobj),
      })
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          window.alert("Registered successfully!");
          if (Object.keys(resp).length === 0) {
            toast.error("Registration failed, invalid credentials");
          } else {
            toast.success("Success");
            window.alert("Registered successfully!");
            usenavigate("/");
          }
          
        })
        .catch((err) => {
          window.alert("Registered Successfully!");
          toast.error("Login Failed due to :" + err.message);
          usenavigate("/");
        });
        
        
    }
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

  const handleRoleChange = (e) => {
    Roleupdate(e.target.value);

    // Automatically set the Status based on the selected Role
    statusUpdate(e.target.value === "agent" ? "disabled" : "enabled");
  };

  return (
    <div className="container-fluid row body-register">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "12%" }}>
        <form onSubmit={Register} className="container">
          <div className="card bg-warning bg-opacity-10 shadow-lg">
            <div className="card-header">
              <h2 className="text-white">Register</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => usernameupdate(e.target.value)}
                  className="form-control" placeholder="abc" required 
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Email <span className="errmsg">*</span>
                </label>
                <input
                  value={useremail}
                  onChange={(e) => useremailupdate(e.target.value)}
                  className="form-control" autoComplete="off" placeholder="abc@domain.com" required
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  className="form-control" placeholder="e.g., ******" required
                ></input>
              </div>
            
              <div class="form-group">
                <label for="exampleDropdown">Role</label>
                <select class="form-control" id="exampleDropdown" onChange={handleRoleChange} required>
                  <option value="">select role</option>
                  <option value="agent">Agent</option>
                  <option value="traveller">Traveller</option>
                </select>
              </div>

            </div>
            <div className="card-footer btn-group">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              already have an account? 
              <Link to={"/"}>
                <a className=" link-primary">Login</a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;