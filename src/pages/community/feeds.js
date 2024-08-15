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
  <section className="ProfileSection" data-aos="fade-down">
    <img className="ProfileImage" src={profileImage} alt="Profile" />
    <h2 className="ProfileName">Bima Triadmaja</h2>
    <p className="Location">Klaten, Jawa Tengah</p>
  </section>
  
  <section className="ImagesSection">
    <div className="ImageWrapper" data-aos="fade-up" data-aos-delay="100">
      <img className="Image" src={image1} alt="Image 1" />
    </div>
    <div className="ImageWrapper" data-aos="fade-up" data-aos-delay="200">
      <img className="Image" src={image2} alt="Image 2" />
    </div>
    <div className="ImageWrapper" data-aos="fade-up" data-aos-delay="300">
      <img className="Image" src={image3} alt="Image 3" />
    </div>
    <div className="ImageWrapper" data-aos="fade-up" data-aos-delay="400">
      <img className="Image" src={image4} alt="Image 4" />
    </div>
    <div data-aos="fade-up" data-aos-delay="500">
      <Link to='/formaddfeed'>
        <img style={{ width: '825px', marginLeft: '5px' }} src={image5} alt="Image 5"/>
      </Link>
    </div>
  </section>
</div>

  );
};

export default Feeds;
