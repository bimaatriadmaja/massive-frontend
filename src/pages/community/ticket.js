import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './ticket.css';
import base from  "../../assets/images/p.png";
import pay from  "../../assets/images/Frame 1000004409.png";
import dana from  "../../assets/images/Frame 1000004410.png";
import bca from  "../../assets/images/Group 1000004380.png";

const Ticket = () => {
    const [title, setTitle] = useState("");
    const [email_or_hp, setEmail_or_hp] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the form submission logic here
//     alert('Ticket purchased!');
//   };

    

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const savePayment = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("email_or_hp", email_or_hp);
    try {
      await axios.post("http://localhost:5000/payments", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/ts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="payment-page">
      <header className="head">
       <Link to='/payment'> <button className="back-button">&lt; Back</button></Link>
      </header>
      <main className="main-ticket">
        <section className="event-details">
          <img
            src={base}  // Update this to the actual image path
            alt="Stay Active: Time Management"
            className="event-image"
          />
          <h1>Stay Active: Time Management</h1>
          <p className="host">Hosted By Bima</p>
          <p className="description">
            Join our engaging webinar, "Stay Active: Time Management." Learn practical advice from experts on maintaining physical activity, improving fitness, and incorporating wellness into your daily routine. Don't miss out on this opportunity!
          </p>
          <p className="date-location">
            <span className="date">16 May 2024</span>
            <span className="location">Malang</span>
          </p>
        </section>
        <section className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <p className="item">Stay Active: How To Manage Time</p>
            <p className="price" style={{fontSize:"16px", marginRight:"5%"}}>$6</p>
          </div>
          
            <div className="payment-methods">
              <p>Payment Method</p>
              <div className="methods">
                <img src={pay} alt="PayPal" /> {/* Update paths */}
                <img src={bca} alt="BCA" />
                <img src={dana} alt="Dana" />
              </div>
            </div>
            <p className="total">Fill Your Email</p>
            <form onSubmit={savePayment}>
            <div className="addfeed-form-group">
            <label className="addfeed-label">Username</label>
            <div className="addfeed-input-container">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Username"
                className="addfeed-input"
                style={{width:"285px", marginTop:"-5%"}}
              />
            </div>
          </div>

          <div className="addfeed-form-group">
            <label className="addfeed-label">Email or Phone</label>
            <div className="addfeed-input-container">
              <input
                className="addfeed-input"
                type="text"
                value={email_or_hp}
                onChange={(e) => setEmail_or_hp(e.target.value)}
                placeholder="Email or Phone"
                style={{width:"285px", marginTop:"-5%"}}
              />
            </div>
          </div>

            <div className="addfeed-form-group">
            <label className="addfeed-label">Transaction Proof</label>
            <div className="addfeed-input-container">
              <div className="addfeed-file-input">
                <label className="addfeed-file-label">
                  <input type="file" onChange={loadImage} style={{backgroundColor:"#fff"}}/>
                  <span className="addfeed-file-text">
                  </span>
                </label>
              </div>
            </div>
          </div>
            <p className="total">Total: $6</p>
            
            <button type="submit" className="buy-button">BUY TICKET</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Ticket;