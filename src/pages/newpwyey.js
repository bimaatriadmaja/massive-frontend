import React from "react";
import "./succes.css";
import { Link } from "react-router-dom";
import buttonSignin from "../assets/images/signin.png";

function NewPWyey() {
    return (
        <div className="container-newpwyey">
            <Link to="/signin" className="back-link-yey">
                <img src={buttonSignin} alt="Back" className="back-image-yey" />
            </Link>
        </div>
        
    );
}

export default NewPWyey;
