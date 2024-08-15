import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import './evaluate.css';
import Home from "./home";

function Rest() {
  const handleBackClick = () => {
    // Your code to handle the back button click event
    console.log("Back button clicked");
  };

  return (
    <div className="div">
      <div className="div-11">
        <img
          loading="lazy"
          src="images/rest.png"
          className="img-4-rest"
          alt="Evaluate"
        />
        <div className="div-12">
          <div className="div-13">
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a376e859a14d72cdebc3c2996315fe3363cdccb8f49d1f5f1026989f44b161?"
              className="img-5"
              alt="Back"
            /> */}
            <Link to="../" className="back-button">
              Back
            </Link>
          </div>
          <div className="div-15">Rest</div>
        </div>
        <div className="div-16-rest">
          “While in the midst od serious internal growth, respect your need to
          rest.” - Yung Pueblo
        </div>
      </div>

      <section className="articles-section-rest">
        <div className="articles">
          <div className="article-column wide">
            <div className="article article-images">
            <Link to="/rest1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6abca9f14d8424adc5b602f7a7add3c2c6422800adea2d9512af72d007f49bad?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
              <Link to="/rest2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8a43267ea2bcab3c1ffabb7ded9de41d4d8c14b0c9d4af09a1b0497c1803a81?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
              <Link to="/rest3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b44c3f0f3f58a0e59e6db3e193532769f5dc3ee5403caccd6f1da650f37c3c2?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
            </div>
          </div>
          <div className="article-column narrow">
            <article className="article article-mood">
              <time className="article-date">10 February 2024</time>
              <header className="article-title">
                <h3>5 Things That Can Boost Your Sleep</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                1. Increase bright light exposure during the day. Your body has
                a natural time-keeping clock known as your circadian rhythm. It
                affects your brain, body, and hormones, helping you stay...
              </p>
              <p className="article-author">By Ginta</p>
              <br></br>
            </article>
            <article className="article article-vision">
              <time className="article-date">1 February 2024</time>
              <header className="article-title">
                <h3>How Does Sleep Affect Your Blood Pressure?</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                People who sleep six hours or less may have steeper increases in
                blood pressure. If you already have high blood pressure, not
                sleeping ...
              </p>
              <p className="article-author">By Noval</p>
              <br></br>
              <br></br>
              <br></br>
            </article>
            <article className="article article-candles">
              <time className="article-date">17 February 2024</time>
              <header className="article-title">
                <h3>Streching That You Can Do For Better Sleep</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                Stretching is a natural, effective strategy for relaxing the
                muscles. Stretching not only helps maintain physical health but
                also supports mental health and relieves stress. Practices
                such...
              </p>
              <p className="article-author">By Bima</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rest;
