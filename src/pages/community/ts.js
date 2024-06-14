import React from "react";
import "../succes.css";
import { Link } from "react-router-dom";
import buttonSignin from "../../assets/images/backtohome.png";

function TransaksiSuccess() {
    return (
        <div className="container-ts">
            <Link to="/" className="back-link-yey">
                <img src={buttonSignin} alt="Back" className="back-image-yey" />
            </Link>
        </div>
        
    );
}

export default TransaksiSuccess;
