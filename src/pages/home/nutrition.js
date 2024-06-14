import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./evaluate.css";
import Home from "./home";

function Nutrition() {
  const handleBackClick = () => {
    // Your code to handle the back button click event
    console.log("Back button clicked");
  };

  return (
    <div className="div">
      <div className="div-11">
        <img
          loading="lazy"
          src="images/nutrition.png"
          className="img-4"
          alt="Evaluate"
        />
        <div className="div-12">
          <div className="div-13">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a376e859a14d72cdebc3c2996315fe3363cdccb8f49d1f5f1026989f44b161?"
              className="img-5"
              alt="Back"
            />
            <Link to="../" className="back-button">
              Back
            </Link>
          </div>
          <div className="div-15">Nutrition</div>
        </div>
        <div className="div-16">
          “The food you eat can be either the safest & most powerful form of
          medicine, or the slowest form of poison.” - Ann Wigmore
        </div>
      </div>

      <section className="articles-section">
        <div className="articles">
          <div className="article-column wide">
            <div className="article article-images">
            <Link to="/nutrition1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9001dd06d3f40404ab26873959186ee00c118f135bcfa3f2ae1412a052d7ed8?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
              <Link to="/nutrition2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc3576f73e7baf95447ce3261913ecc46ee5547583613a018e19dc7410231381?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
              <Link to="/nutrition3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf5b3f368fc0410ad12f97d8f69921a0ce2134dac5ec16b02b4ff41e4699e9f?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
            </div>
          </div>
          <div className="article-column narrow">
            <article className="article article-mood">
              <time className="article-date">19 February 2024 </time>
              <header className="article-title">
                <h3>Why Berries Improve Your Heart Health?</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                Berries are a good source of polyphenols, especially
                anthocyanins, micronutrients, and fiber. In epidemiological and
                clinical studies, these compounds...
              </p>
              <p className="article-author">By Ginta</p>
              <br></br>
            </article>
            <article className="article article-vision">
              <time className="article-date">31 January 2024</time>
              <header className="article-title">
                <h3>What is The “Eat Your Retinol” Trend?</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                There are many carotenoids including lutein, lycopene,
                alpha-carotene and beta-carotene. Beta-carotene is the
                carotenoid responsible for a carrot’s vibrant orange colour...
              </p>
              <p className="article-author">By Noval</p>
              <br></br>
            </article>
            <article className="article article-candles">
              <time className="article-date">9 January 2024</time>
              <header className="article-title">
                <h3>The Natural Proteins You Need</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                Protein helps repair and build your body's tissues. It drives
                metabolic reactions, maintains pH and fluid balance, and keeps
                the immune ...
              </p>
              <p className="article-author">By Bima</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nutrition;
