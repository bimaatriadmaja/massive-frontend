// src/App.js
import React from 'react';
import './feeds.css';
import profileImage from '../../assets/images/Ellipse 46 (1).png';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/add.png';
import { Link } from 'react-router-dom';

const Feeds = () => {
  return (
    <div className="Container">

      <section className="ProfileSection">
        <img className="ProfileImage" src={profileImage} alt="Profile" />
        <h2 className="ProfileName">Wavi Krisdiar Hidayat</h2>
        <p className="Location">Jakarta</p>
      </section>
      <section className="ImagesSection">
        <div className="ImageWrapper">
          <img className="Image" src={image1} alt="Image 1" />
        </div>
        <div className="ImageWrapper">
          <img className="Image" src={image2} alt="Image 2" />
        </div>
        <div className="ImageWrapper">
          <img className="Image" src={image3} alt="Image 3" />
        </div>
        <div className="ImageWrapper">
         <img className="Image" src={image4} alt="Image 4" />
        </div>
        <div>
        <Link to='/formaddfeed'><img style={{width:'825px', marginLeft:'5px'}} src={image5}/></Link> 
        </div>
      </section>
    </div>
  );
};

export default Feeds;
