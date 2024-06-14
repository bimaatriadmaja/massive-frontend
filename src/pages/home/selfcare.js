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
          src="images/selfcare.png"
          className='img-4-self'
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
          <div className="div-15">Selfcare</div>
        </div>
        
        <div className="div-16-self">
        “Self-care is ongoing. It’s a necessity, not  a reward, and it should  be intertwined into everything you do.” - Jasmine Irven 
        </div>
      </div>

      <section className="articles-section-self">
        <div className="articles">
          <div className="article-column wide">
            <div className="article article-images">
            <Link to="/selfcare1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff661171a4d4d15c57e043b00395156fd601119f6db8f4186eb26d6ae0a07859?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              />
              </Link>
              <Link to="/selfcare2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e31bde98b0030a5728e55822bf6c9d80aabe8ccf89a10c37c1a9f5dcf8fb53c1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
              <Link to="selfcare3">
              <img className="img-self"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6041f402a15be7fe431cd47d47a03dddb7227873ce577c7500e47abebe1afe6?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
            </div>
          </div>
          <div className="article-column narrow">
            <article className="article article-mood">
              <time className="article-date">11 September 2023</time>
              <header className="article-title">
                <h3>The Skincare Effect: How Skincare Take Care Your Skin & Mental Health.</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
              Skincare can also give you a well-deserved serotonin boost. Having a routine can make you happier, as it's all about the ritual and putting time ...
              </p>
              <p className="article-author">By Ginta</p>
              <br></br>
            </article>
            <article className="article article-vision">
              <time className="article-date">9 February 2024</time>
              <header className="article-title">
                <h3>The Benefits Of Body Scrub : How To Scrub Your Skin Right</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
               Body scrubs remove dead skin cells, and so provide several benefits: They allow your skin to absorb moisturizer better. By doing dead skin cell buildup, any moisturizer applied...
              </p>
              <p className="article-author">By Noval</p>
              <br></br>
            </article>
            <article className="article article-candles">
              <time className="article-date">17 February 2024</time>
              <header className="article-title">
                <h3>Reason Why You Need Gentle Face Cleanser</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
              A common benefit of facial cleansing is the removal of dirt, oil, and other unwanted debris. Throughout the day the skin on your face is continually covered with bacteria, pollutants,...
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
