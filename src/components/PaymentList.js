import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./admin.css";

const PaymentList = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = async () => {
    const response = await axios.get("http://localhost:5000/payments");
    setPayments(response.data);
  };

  const deletePayment = async (paymentId) => {
    try {
      await axios.delete(`http://localhost:5000/payments/${paymentId}`);
      getPayments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-column">
        <div className="admin-div-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/21dbecc2d40c839c7263c10dd4d8de944ebfab879c1a152ef5a2ab11531ce5dc?"
            className="admin-img"
          />
          <div className="admin-div-4">
            <Link to="/userlist" className="admin-link">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e008047b762b62edd51adacb7d980cb9a6cdcec7e747298f8760bde52248f671?"
                className="admin-img-2"
              />
              <div className="admin-div-5">User</div>
            </Link>
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

      <div className="admin-table-container">
        <div className="admin-div-10">Payment Table</div>
        <Link to="/addpayment">
          <button className="admin-button-addnew">Add New Payment</button>
        </Link>
        <table className="admin-table">
          <thead className="admin-thead">
            <tr>
            <th>No</th>
              <th>Name</th>
              <th>Email or Phone</th>
              <th>Transaction Proof</th>
              <th>URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment.id}>
              <td>{index + 1}</td>
                <td>{payment.name}</td>
                <td>{payment.email_or_hp}</td>
                <td>
                  <figure>
                    <img
                      src={payment.url}
                      alt="Image"
                      style={{ width: "100px", height: "auto" }}
                    />
                  </figure>
                </td>
                <td>
                  <a href={payment.url} target="_blank" rel="noopener noreferrer">
                    {payment.url}
                  </a>
                </td>
                
                <td className="admin-table-actions-feed">
                  <Link to={`../editpayment/${payment.id}`}>
                    <button className="admin-button-edit-feed">Edit</button>
                  </Link>
                  <button
                    onClick={() => deletePayment(payment.id)}
                    className="admin-button-delete-feed"
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

export default PaymentList;
