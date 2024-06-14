import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./admin.css";

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-column-user">
        <div className="admin-div-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/21dbecc2d40c839c7263c10dd4d8de944ebfab879c1a152ef5a2ab11531ce5dc?"
            className="admin-img"
          />
          <div className="admin-div-4">
            <a className="admin-link">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e008047b762b62edd51adacb7d980cb9a6cdcec7e747298f8760bde52248f671?"
                className="admin-img-2"
              />
              <div className="admin-div-5">User</div>
            </a>
          </div>
          <div className="admin-div-6">
            <Link to='/feedlist' className="admin-link">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b67c319295272a24999dfd4e0fcafeb2094cbdbaace9d06ad78b2f541b35d87b?"
                className="admin-img-3"
              />
              <div className="admin-div-7">Feeds</div>
            </Link>
          </div>
          <div className="admin-div-8">
            <a href="/paymentlist" className="admin-link">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/629918e3374ae6c70d3e573bc67450ee821e3ac77a3cf3197cbc4988d16e38c0?"
                className="admin-img-4"
              />
              <div className="admin-div-9">Payment</div>
            </a>
          </div>
        </div>
      </div>

      <div className="admin-table-container-user">
        <div className="admin-div-10">User Table</div>
        <Link to="/add" >
          <button className="admin-button-addnew">Add New User</button>
        </Link>
        <table className="admin-table">
          <thead className="admin-thead">
            <tr>
              <th>No</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.password}</td>
                <td className="admin-table-actions">
                  <Link
                    to={`/edit/${user.id}`}
                    
                  >
                    <button className="admin-button-edit">Edit</button>
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="admin-button-delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
