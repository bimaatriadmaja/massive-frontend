import react from "react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./account.css";
import "../assets/csss/trend.css";
import "../components/navbar.css";
// import prof from  "../assets/images/img/prof.png";
// import water from  "../assets/images/img/bh2bg.png";
// import frame from  "../assets/images/img/Frame 2.png";
// import daging from  "../assets/images/img/Rectangle 23910.png";
// import biji from  "../assets/images/img/Rectangle 23909.png";
// import retin from  "../assets/images/img/Rectangle 23888.png";

function Account() {
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

 return (

      <div className="account-wrapper">
        <div className="bg">
        <div className="auth-container" style={{display: "flex", justifyContent:"flex-end"}}>
           <Link
             to="/#"
             className="register-btn"
             style={{backgroundColor: "#99a285", color: "#fff"}}
             onClick={handleButtonClick}
           >
             Edit Profile
           </Link>
           <button className="login-btn" onClick={handleLogout}>Logout</button>
         </div>
        </div>
        <div className="prof">
          {/* <img
            src={prof} style={{width:"70%",}}
          /> */}
        </div>
        <div className="nama-prof">Bima Triadmaja</div>
        <div className="loc">
          <div className="jakarta"><i className="fa-solid fa-location-dot fa-xs" style={{color: "#000", marginRight:"2px"}}></i>Klaten, Jawa Tengah</div>
          <div className="join"><i className="fa-solid fa-calendar-days" style={{color: "#000000", marginRight:"2px"}}></i>joined Mei 2024</div>
        </div>
        <div className="biodata">
          <div className="biodata-2">
            <div className="nama">
              <div className="nama-1">Name</div>
              <div className="nama-2">
                Bima Triadmaja
                <br/>
              </div>
            </div>
            <div className="number">
              <div className="number-1">Phone Number</div>
              <div className="number-2">0895422615117</div>
            </div>
            <div className="bio">
              <div className="bio-1">Bio</div>
              <div className="bio-2">Hidup untuk beribadah kepada Allah</div>
            </div>
          </div>
          <div className="biodata-3">
            <div className="username">
              <div className="username-1">Username</div>
              <div className="username-2">bimaatriadmaja_</div>
            </div>
            <div className="email">
              <div className="email-1">Email</div>
              <div className="email-2">
                bimatriadmaja@gmail.com
                <br />
              </div>
            </div>
            <div className="birth">
              <div className="birth-1">Date of Birth</div>
              <div className="birth-2">17 Juni 2003</div>
            </div>
          </div>
        </div>
        <div className="btn-heart">
          <button className="button" openLinkInNewTab={false}>
            <div _text="" />
          </button>
        </div>
        <section class="content-columns">
 <div class="content-column">
   <div class="content-group">
   
    {/* <Link to='/trend4'> <img  src={water} class="content-image-1" alt="" style={{borderRadius:"20px"}} /></Link> */}
    <div style={{backgroundColor:"#99a285", height:"100px", 
     borderRadius:"20px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"-50px"}}>
     <Link to='/trend4' style={{marginTop:"50px", color:"#fff", }}>why water?</Link> </div>
     
     {/* <Link to='/trend5'><img src={frame} class="content-image-2" alt="" style={{borderRadius:"20px"}} /></Link> */}
     <div style={{backgroundColor:"#99a285", height:"100px", 
     borderRadius:"20px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"-50px"}}>
     <Link to='/trend4' style={{marginTop:"50px", color:"#fff", }}>Give A Drink To Your Skin</Link> </div>
 
   </div>
 </div>
 <div class="content-column">
   <div class="content-group">
     
     {/* <Link to='/trend6'><img  src={daging} class="content-image-3" alt="" style={{borderRadius:"20px"}} /></Link> */}
     <div style={{backgroundColor:"#99a285", height:"100px", 
     borderRadius:"20px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"-50px"}}>
     <Link to='/trend4' style={{marginTop:"50px", color:"#fff", }}>The Natural Proteins You Need</Link> </div>

     <Link to='/trend7'><img src={"https://cdn.builder.io/api/v1/image/assets/TEMP/068dba989720dc86799a16e6ec67852894b98bb556a3069b4eeece60e7c04a34?apiKey=828441a8e65f4aacaee2ce94caf37306&"} class="content-image-4" alt="" /></Link>
     <div style={{backgroundColor:"#99a285", height:"100px", 
     borderRadius:"20px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"-50px"}}>
     <Link to='/trend4' style={{marginTop:"50px", color:"#fff", }}>How Does Sleep Affect Your Blood Pressure?</Link> </div>
   
   </div>
 </div>
 <div class="content-column">
   <div class="content-group">
     
     {/* <Link to='/trend8'><img  src={biji} class="content-image-5" alt="" style={{borderRadius:"20px"}} /></Link> */}
     <div style={{backgroundColor:"#99a285", height:"100px", 
     borderRadius:"20px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"-50px"}}>
     <Link to='/trend4' style={{marginTop:"50px", color:"#fff", }}>Why Berries Improve Your Heart Health</Link> </div>
     
     {/* <Link to='/trend9'><img  src={retin} class="content-image-6" alt="" style={{borderRadius:"20px"}} /></Link> */}
     <div style={{backgroundColor:"#99a285", height:"100px", 
     borderRadius:"20px", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"-50px"}}>
     <Link to='/trend4' style={{marginTop:"50px", color:"#fff", }}>What Is The "Eat Your Retinol" Trend?</Link> </div>
   
   </div>
 </div>
</section>
      </div>
     
  );
}




export default Account;