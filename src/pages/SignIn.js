import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import backButtonImage from "../assets/images/back.png";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    
    try {
      const response = await axios.post('http://localhost:5000/users/signin', {
        email,
        password
      });
      sessionStorage.setItem('token', response.data.token); // Store the token
      navigate('/'); // Navigate to the dashboard or another protected route
    } catch (error) {
      console.error('Error signing in:', error.response ? error.response.data : error.message);
      alert('Failed to sign in. Please check your email & password');
    }
};

  return (
    <main className="login-page">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-4 px-0 d-none d-sm-block login-img"
            style={{ backgroundImage: `url(../assets/images/myhelth.jpg)` }}
          >
            <div className="brand-wrapper">
              <img
                src="../assets/images/logo (1).png"
                alt="logo"
                className="logo"
              />
            </div>
          </div>
          <div className="col-sm-8 login-section-wrapper">
            <div className="text-top" style={{ paddingTop: "5%" }}>
              <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
            <div className="login-wrapper my-auto">
              <div className="center">
                <Link to="/signin" className="btn sign-btn">
                  Sign In
                </Link>
                <Link to="/signup" className="btn signup-btn">
                  Sign Up
                </Link>
              </div>
              <form onSubmit={handleSignIn}>
                <div className="form-group center">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div className="form-group center">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  {errors.password && <p className="error-text">{errors.password}</p>}
                </div>
                <Link
                  to="/forgotpw"
                  className="text-right"
                  style={{ color: "#fff", fontSize: "14px" }}
                >
                  Forgot Password?
                </Link>
                <div className="center">
                  <button type="submit" className="btn login-btn">
                    Sign In
                  </button>
                </div>
              </form>
              <p className="login-wrapper-footer-text">or</p>
              <div className="center justify">
                <button className="btn signup-btn-fa">
                  <i
                    className="fa-brands fa-google"
                    style={{ color: "#3b5998" }}
                  ></i>
                  Google
                </button>
                <button className="btn signup-btn-fa">
                  <i
                    className="fa-brands fa-facebook"
                    style={{ color: "#3b5998" }}
                  ></i>
                  Facebook
                </button>
              </div>
            </div>
            <p className="text-footer">
              Protected by reCAPTCHA and subject to the Rhombus Privacy Policy
              and Terms of Service
            </p>
            <div className="container">
              <Link to="/" className="back-link">
                <img src={backButtonImage} alt="Back" className="back-image" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
