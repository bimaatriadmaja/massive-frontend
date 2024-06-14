import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./footer.css";

function Footer() {
    const location = useLocation();

  // Paths where the footer should be hidden
  const hiddenFooterPaths = [
    "/signin",
    "/signup",
    "/forgotpw",
    "/verif",
    "/newpw",
    "/signupyey",
    "/newpwyey",
    "/ts",
    "/userlist",
    "/add",
    "/edit/:id",
    "/feedlist",
    "/addfeed",
    "/editfeed/:id",
    "/paymentlist",
    "/addpayment",
    "/editpayment/:id",
  ];

  // Check if the current path is in the list of paths where the footer should be hidden
  const isFooterHidden = hiddenFooterPaths.includes(location.pathname);

  // If the footer should be hidden, return null
  if (isFooterHidden) {
    return null;
  }

  return (
    <>
         <footer id="landing-footer" className="clearfix" >
            <div className="row clearfix">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4 div-footer">
                    <img alt="" src="images/logo (1).png" style={{width: '20%'}} />
                    <p style={{color: '#fff', marginTop: '2%', marginBottom: '2%'}}>
                      We are committed to providing informative, up to date and easy to understand content to help you and your family maintain your health and well-being.
                    </p>
                    <a target="_blank" title="user" href="#!">
                      <i className="fa-solid fa-envelope fa-2x" style={{color: '#000000', marginRight: '2%'}} />
                    </a>
                    <Link target="_blank" title="user" to="https://www.instagram.com/bimaatriadmaja_">
                      <i className="fa-brands fa-square-instagram fa-2x" style={{color: '#000000', marginRight: '2%'}} />
                    </Link>
                    <Link target="_blank" title="user" to="https://www.linkedin.com/in/bimatriadmaja/">
                      <i className="fa-brands fa-linkedin fa-2x" style={{color: '#000000', marginRight: '2%'}} />
                    </Link>
                    <Link target="_blank" title="user" to="https://wa.me/62895422615117">
                      <i className="fa-brands fa-square-whatsapp fa-2x" style={{color: '#000000', marginRight: '2%'}} />
                    </Link>
                  </div>
                  <div className="col-md-4 div-footer" style={{marginTop: '1%'}}>
                    Quick Link
                    <ul style={{marginTop: '5%'}}>
                      <Link title="user" to="/">
                        <i className="fa-solid fa-chevron-right" style={{color: '#fff', marginRight: '2%'}}>
                        </i><span style={{color: '#fff', marginRight: '8%', fontSize: '12px'}}>Home</span>
                      </Link>
                      <a title="user" href="/blogA">
                        <i className="fa-solid fa-chevron-right" style={{color: '#fff', marginRight: '2%'}}>
                        </i><span style={{color: '#fff', marginRight: '8%', fontSize: '12px'}}>Blog</span>
                      </a>
                      <a title="user" href="/trend">
                        <i className="fa-solid fa-chevron-right" style={{color: '#fff', marginRight: '2%'}}>
                        </i><span style={{color: '#fff', marginRight: '8%', fontSize: '12px'}}>Trend</span>
                      </a>
                      <a title="user" href="/bmi">
                        <i className="fa-solid fa-chevron-right" style={{color: '#fff', marginRight: '2%'}}>
                        </i><span style={{color: '#fff', marginRight: '8%', fontSize: '12px'}}>CheckUp</span>
                      </a>
                      <p style={{marginTop: '5%'}}>
                        <a target="_blank" title="user" href="/feeds">
                          <i className="fa-solid fa-chevron-right" style={{color: '#fff', marginRight: '2%'}}>
                          </i><span style={{color: '#fff', marginRight: '8%', fontSize: '12px'}}>Feed</span>
                        </a>
                        <a target="_blank" title="user" href="/event">
                          <i className="fa-solid fa-chevron-right" style={{color: '#fff', marginRight: '2%'}}>
                          </i><span style={{color: '#fff', marginRight: '8%', fontSize: '12px'}}>Event</span>
                        </a>
                        <a target title="user" href="/about">
                          <i className="fa-solid fa-chevron-right" style={{color: '#fff', marginRight: '2%'}}>
                          </i><span style={{color: '#fff', marginRight: '8%', fontSize: '12px'}}>About Us</span>
                        </a>
                      </p>
                      <p style={{marginTop: '5%'}}>
                        <a target="_blank" title="user" href="#!">
                          <i className="fa-solid fa-chevron-right" style={{color: '#fff', marginRight: '2%'}}>
                          </i><span style={{color: '#fff', fontSize: '12px'}}>Account</span>
                        </a>
                      </p>
                    </ul>
                  </div>
                  <div className="col-md-4 div-footer" style={{marginTop: '1%'}}>
                    Blog
                    <ul style={{marginTop: '5%'}}>
                      <a title="user" href="/ba4">
                        <i className="fa-solid fa-chevron-right" style={{color: '#fff', marginRight: '2%'}}>
                        </i><span style={{color: '#fff', marginRight: '8%', fontSize: '12px'}}>The Natural Proteins You Need</span>
                        <p style={{marginLeft: '5%'}}>9 January 2024</p>
                      </a>
                      <a title="user" href="/bb2">
                        <i className="fa-solid fa-chevron-right" style={{color: '#fff', marginRight: '2%'}}>
                        </i><span style={{color: '#fff', marginRight: '8%', fontSize: '12px'}}>Yoga: A Holistic Path to Physical and 
                          Mental</span> <p style={{marginLeft: '5%'}}>8 March 2024</p>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    </>
  );
}

export default Footer;