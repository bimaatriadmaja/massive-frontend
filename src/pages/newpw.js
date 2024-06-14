import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/verif.css';
import backButtonImage from '../assets/images/back.png';

function NewPW() {
  return (
    <main className='login-page'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 px-0 d-none d-sm-block login-img" style={{ backgroundImage: `url(../assets/images/myhelth.jpg)` }}>
            <div className="brand-wrapper">
              <img src="../assets/images/logo (1).png" alt="logo" className="logo" />
            </div>
          </div>
          <div className="col-sm-8 login-section-wrapper-pw">
            <div className="login-wrapper my-auto">
            
        <p class="forgot-password-text-newpw">New Password</p>
    
              <form action="#">
              <div className="form-group center">
                  <input type="password" name="password" id="password" className="form-control" placeholder="  Password" />
                </div>
                <div className="form-group center">
                  <input type="password" name="password" id="password" className="form-control" placeholder="  New Password" />
                </div>
                <Link to="./signupyey" className="center">
                  <button type="submit" className="btn login-btn">Confirm</button>
                </Link>
              </form>
            </div>
            <p className="text-footer">Protected by reCAPTCHA and subject to the Rhombus Privacy Policy and Terms of Service</p>
            <div className="container">
      <Link to="/" className="back-link-pw">
        <img src={backButtonImage} alt="Back" className="back-image" />
      </Link>
    </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default NewPW;
