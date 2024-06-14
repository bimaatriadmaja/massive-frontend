import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/signup.css";
import backButtonImage from "../assets/images/back.png";

function SignUp() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const checkboxStyles = {
    container: {
      display: "flex",
      alignItems: "center",
      marginTop: "-40px",
      marginLeft: "20px",
    },
    label: {
      marginLeft: "5px",
      fontSize: "12px",
      color: "#333",
    },
  };

  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        email,
        first_name,
        last_name,
        password,
      });
      navigate("/signupyey");
    } catch (error) {
      console.log(error);
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
                Already have an account? <Link to="/signup">Sign in</Link>
              </p>
            </div>
            <div className="login-wrapper my-auto">
              <div className="center">
                <Link to="/signin" className="btn sign-btnn">
                  Sign In
                </Link>
                <Link to="/signup" className="btn signup-btnn">
                  Sign Up
                </Link>
              </div>
              <form onSubmit={saveUser}>
                <div class="form-grup centerr">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-cntrl email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div class="form-grup centerr">
                  <input
                    type="text"
                    name="fn"
                    id="fn"
                    className="form-cntrl name-input"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    name="ln"
                    id="ln"
                    className="form-cntrl name-input"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                  />
                </div>
                <div class="form-grup centerr password">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-cntrl password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>

                <div className="center">
                  <button type="submit" className="btn login-btn">
                    Sign Up
                  </button>
                </div>
              </form>
              <p className="login-wrapper-footer-text">or</p>
              <div className="centerr justify">
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

              <div style={checkboxStyles.container}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label style={checkboxStyles.label}>
                  By clicking Create account, I agree that I have read and
                  accepted the Terms of Use and Privacy Policy.
                </label>
              </div>
            </div>
            <p className="text-footer">
              Protected by reCAPTCHA and subject to the Rhombus Privacy Policy
              and Terms of Service
            </p>
            <div className="container">
              <Link to="/" className="back-linkk">
                <img src={backButtonImage} alt="Back" className="backk-image" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
