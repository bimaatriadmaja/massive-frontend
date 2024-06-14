import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Hide the navbar
    setShowNavbar(false);
  };

  const handleCommunityClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Hapus token sesi dari penyimpanan
    sessionStorage.removeItem('token');
    // Navigasi kembali ke halaman login atau halaman beranda
    navigate('/'); // atau '/home' tergantung pada kebutuhan Anda
  };

  // Determine if we are on the login or signup page
  const isAuthPage =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/forgotpw" ||
    location.pathname === "/verif" ||
    location.pathname === "/newpw" ||
    location.pathname === "/signupyey" ||
    location.pathname === "/newpwyey" ||
    location.pathname === "/ts" ||
    location.pathname === "/userlist" ||
    location.pathname === "/add" ||
    location.pathname === "/edit/:id" ||
    location.pathname === "/feedlist" ||
    location.pathname === "/addfeed" ||
    location.pathname === "/editfeed/:id" ||
    location.pathname === "/paymentlist" ||
    location.pathname === "/addpayment" ||
    location.pathname === "/editpayment";

  return (
    <>
      {!isAuthPage && (
        <header
          className={
            showNavbar ? "header-container" : "header-container hidden"
          }
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdaf3d6c7be8503842c3669bf5304cf99232f4799b8e3691230cc657f6c96802?apiKey=828441a8e65f4aacaee2ce94caf37306&"
            alt="Company Logo"
            className="logo"
          />
          <nav className="nav-container">
            <Link className="nav-item" to="./">
              HOME
            </Link>
            <Link className="nav-item" to="./blogA">
              BLOG
            </Link>
            <Link className="nav-item" to="./trend">
              TREND
            </Link>
            <Link className="nav-item" to="./bmi">
              CHECK UP
            </Link>
            <div className="community-container" onClick={handleCommunityClick}>
              <span className="community-item">COMMUNITY</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/216874282f5467ab33e3170c432c4b6cf06eeaa3ae798c6599f831e243072d88?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Arrow Indicator"
                className="arrow-icon"
              />
              {showDropdown && (
                <div className="dropdown-menu">
                  <Link className="dropdown-item" to="/feeds">
                    FEEDS
                  </Link>
                  <Link className="dropdown-item" to="/event">
                    EVENT
                  </Link>
                </div>
              )}
            </div>
            <Link className="nav-item" to="/about">
              ABOUT US
            </Link>
          </nav>
          {
            sessionStorage.getItem('token') ?
            <div>
            <Link to = '/account'><img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0aa41510578156ea0334e58516c6399429a21114fa99bab4ed822cc08856ad3?apiKey=828441a8e65f4aacaee2ce94caf37306&"
            alt="Company Logo"
            className="icon-user"
          /></Link>
          </div>:
              <div className="auth-container">
            <Link
              to="/signup"
              className="register-btn"
              onClick={handleButtonClick}
            >
              Register
            </Link>
            <Link
              to="/signin"
              className="login-btn"
              onClick={handleButtonClick}
            >
              Log In
            </Link>
          </div>
          }
          
        </header>
      )}
    </>
  );
}

export default Navbar;


