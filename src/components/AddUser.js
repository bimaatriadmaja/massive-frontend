import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const AddUser = () => {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const saveUser = async (e) =>{
    e.preventDefault();
    try{
        await axios.post('http://localhost:5000/users',{
            email,
            first_name,
            last_name,
            password
        });
        navigate('/userlist');
    } catch (error){
        console.log(error);
    }
  }

  return (
    <div className="add-columns mt-5 is-centered">
      <div className="add-column is-half">
        <form onSubmit={saveUser} className="add-form">
          <div className="add-field">
            <label className="add-label">Email</label>
            <div className="control">
              <input
                className="add-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="add-field">
            <label className="add-label">First Name</label>
            <div className="control">
              <input
                className="add-input"
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="add-field">
            <label className="add-label">Last Name</label>
            <div className="control">
              <input
                className="add-input"
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="add-field">
            <label className="add-label">Password</label>
            <div className="control">
              <input
                className="add-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="add-field">
            <button type="submit" className="add-button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
