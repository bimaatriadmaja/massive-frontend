import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./evaluate.css";
import Home from "./home";

function Evaluate() {
  const handleBackClick = () => {
    // Your code to handle the back button click event
    console.log("Back button clicked");
  };

  return (
    <div className="div">
      <div className="div-11">
        <img
          loading="lazy"
          src="images/evaluate.png"
          className="img-4"
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
          <div className="div-15">Evaluate</div>
        </div>
        <div className="div-16">
          “Personal style is about having a sense of yourself and what you
          believe in.” - David Obadia
        </div>
      </div>

      <section className="articles-section">
        <div className="articles">
          <div className="article-column wide">
            <div className="article article-images">
              <Link to="/evaluate1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5b4d64bd0b109710872de0fa229227a34d57876c4d785b63fe51635ef8bb218?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Image description"
                />
              </Link>
              <Link to="/evaluate2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b91db8eaffcb0136a140bd60693c26756ce52eb1bb97898ecfd484fd651de33a?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
              <Link to="/evaluate3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6b471ca513cff8ea4faa876da9b6bf839882342d8bba1b7e23d7a9579027908?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
            </div>
          </div>
          <div className="article-column narrow">
            <article className="article article-mood">
              <time className="article-date">10 October 2023</time>
              <header className="article-title">
                <h3>Your Mood Depends On Your Music</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                How does music affect your well-being, learning, and happiness?
                A survey by AARP suggests that music listeners have higher
                mental well-being and lower anxiety and depression.
              </p>
              <p className="article-author">By Ginta</p>
              <br></br>
            </article>
            <article className="article article-vision">
              <time className="article-date">3 March 2024</time>
              <header className="article-title">
                <h3>Does Book Affect Your Vision?</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                Books have the power to significantly influence mindset in
                various ways. Books have a significant impact on...
              </p>
              <p className="article-author">By Noval</p>
              <br></br>
              <br></br>
              <br></br>
            </article>
            <article className="article article-candles">
              <time className="article-date">17 June 2024</time>
              <header className="article-title">
                <h3>How Do Candles Help You Relax?</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                Candles have been used for centuries as a source of light, but
                they also possess a remarkable ability to create a soothing and
                relaxing atmosphere.
              </p>
              <p className="article-author">By Bima</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Evaluate;
