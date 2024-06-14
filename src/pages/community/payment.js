import React from 'react';
import { Link } from 'react-router-dom';
import './feeds.css';
import poster from  "../../assets/images/Frame 1000004400.png";
import text from  "../../assets/images/Frame 1000004400 (1).png";
import bento from  "../../assets/images/Frame 1000004401.png";

const Payment = () => {
  return (
    <div className="event-page">
      <main>
        <section className="main-event">
          <Link to='/event'><button className="back-button">Back</button></Link>
          <div className="ticket-event-details">
            <h1 style={{color:"#ffffff"}}>Stay Active: Time Management</h1>
            <p className="hosted-by">Hosted By Bima</p>
            <p className="event-description">
              Join our engaging webinar, "Stay Active: Time Management." Learn practical advice from experts on maintaining physical activity, improving fitness, and incorporating wellness into your daily routine. Don’t miss out on this opportunity!
            </p>
            <div className="event-info">
              <p><strong>Date:</strong> 16 May 2024</p>
              <p><strong>Location:</strong> Jakarta</p>
              <p><strong>Price:</strong> $6</p>
              <Link to='/ticket'><button className="buy-ticket">Buy Ticket</button></Link>
            </div>
          </div>
        </section>
        <section className="other-events">
          <h2 style={{textAlign:"center", fontWeight:"600"}}>Other Events</h2>
          <div className="event-list">
            <div className="event-item">
              <img src={poster} alt="Easy Way to Relax Your Self" />
              <Link to='/payment'><p>Easy Way to Relax Your Self</p></Link>
              <p>Hosted By Bima</p>
            </div>
            <div className="event-item">
              <img src={bento} alt="Foods For Aging" />
              <Link to='/payment'><p>Foods For Aging</p></Link>
              <p>Hosted By Ginta</p>
            </div>
            <div className="event-item">
              <img src={text} alt="Set Your Goals" />
              <Link to='/ticket'><p>Set Your Goals</p></Link>
              <p>Hosted By Ubay</p>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
};

export default Payment;
