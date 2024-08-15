import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./result.css";

function ResultCewe() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bmi, klasifikasi, warnaKlasifikasi } = location.state;

   // Fungsi untuk mengembalikan warna latar belakang sesuai dengan klasifikasi BMI
   const getBackgroundColor = () => {
    switch (klasifikasi) {
      case 'Underweight':
        return '#81B1F1';
      case 'Normal':
        return '#90CF46';
      case 'Overweight':
        return '#F1DF3E';
      case 'Obesity':
        return '#DF4141';
      default:
        return 'transparent';
    }
  };

  return (
    <div className="Result" data-aos="fade-in" data-aos-duration="1000">
  <section className="result-container" data-aos="fade-up" data-aos-duration="1200">
    <section className="result-content-wrapper">
      <nav className="result-navigation-bar" data-aos="fade-right" data-aos-duration="1000">
        <Link to="/bmi">
          <span className="result-back-text">Back</span>
        </Link>
      </nav>
      <h1 className="result-bmi-result-title" data-aos="zoom-in" data-aos-duration="1200">Your BMI Result</h1>
      <br/>
      <div className="result-bmi-result-container" data-aos="fade-up" data-aos-duration="1500">
        <div style={{ backgroundColor: getBackgroundColor(), padding: '10px', display: 'inline-block', borderRadius: '74px' }}>
          <h3>{bmi} ({klasifikasi})</h3>
        </div>
      </div>
      <section className="result-metrics-wrapper" data-aos="fade-up" data-aos-duration="1500">
        <div className="result-metrics-dots-wrapper" data-aos="zoom-in" data-aos-duration="1500">
          <div className="result-dot result-dot-blue"></div>
          <div className="result-dot result-dot-green"></div>
          <div className="result-dot result-dot-yellow"></div>
          <div className="result-dot result-dot-red"></div>
        </div>
        <div className="result-metrics-content">
          <div className="result-metrics-columns">
            <div className="result-column-left" data-aos="fade-right" data-aos-duration="1200">
              <div className="result-metrics-details">
                <div className="result-metrics-info">
                  <div className="result-metrics-info-left">
                    <div className="result-metrics-values">
                      <h3>BMI</h3>
                      <p className='result-title'><b>BMI</b></p>
                      <p className="result-first">Under 18,5</p>
                      <p>18,5 - 24,9</p>
                      <p>25 - 29,9</p>
                      <p className="result-last-p">Over 30</p>
                    </div>
                  </div>
                  <div className="result-metrics-info-right">
                    <div className="result-metrics-classification">
                      <h3>Classification</h3>
                      <p className='result-title'><b>Classification</b></p>
                      <p className="result-first">Underweight</p>
                      <p>Normal</p>
                      <p>Overweight</p>
                      <p className="result-last-p">Obesity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="result-column-image" data-aos="fade-left" data-aos-duration="1200">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3520adaecb006c07fe13e48f3a73ce0fe0985791aab5148eca3dd7fe0cfa7ca2?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="BMI Chart"
                className="result-image"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
  
  <article data-aos="fade-up" data-aos-duration="1000">
    <h2 className="bmi-bmi-title-result">Body Mass Index</h2>
    <p className="bmi-description-result">
      Body Mass Index is a method used to evaluate a person's weight status based on their height and weight.
      This is a simple measurement often used by medical professionals to classify a person as underweight,
      normal, overweight, or obese.
    </p>
  </article>
</div>

  );
}

export default ResultCewe;
