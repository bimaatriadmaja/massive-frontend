import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./admin.css";

const EditUser = () => {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        email,
        first_name,
        last_name,
        password,
      });
      navigate("/userlist");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setEmail(response.data.email);
    setFirstName(response.data.first_name);
    setLastName(response.data.last_name);
    setPassword(response.data.password);
  };

  return (
    <div className="edit-users">
      <div className="edit-users">
        <form onSubmit={updateUser} className="edit-form">
          <div className="edit-field">
            <label className="edit-label">Email</label>
            <div className="control">
              <input
                className="edit-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="edit-field">
            <label className="edit-label">First Name</label>
            <div className="control">
              <input
                className="edit-input"
                type="text"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="edit-field">
            <label className="edit-label">Last Name</label>
            <div className="control">
              <input
                className="edit-input"
                type="text"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="edit-field">
            <label className="edit-label">Password</label>
            <div className="control">
              <input
                className="edit-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="edit-field">
            <button type="submit" className="edit-button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
