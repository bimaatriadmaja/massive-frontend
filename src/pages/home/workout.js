import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./evaluate.css";
import Home from "./home";

function Workout() {
  const handleBackClick = () => {
    // Your code to handle the back button click event
    console.log("Back button clicked");
  };

  return (
    <div className="div">
      <div className="div-11">
        <img
          loading="lazy"
          src="images/workout.png"
          className="img-4-work"
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
          <div className="div-15-wrk">Workout</div>
        </div>
        <div className="div-16-workout">
          “Exercise should be a form of self-care not self-punishment.” - Taylor
          Wolfram
        </div>
      </div>

      <section className="articles-section-work">
        <div className="articles">
          <div className="article-column wide">
            <div className="article article-images">
            <Link to="/workout1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef9e635213637d3c3ede8ce70ce24cc7ed7e4387696d68583ad1e7ed109bad5?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
              <Link to="/workout2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c0add64970aa7320587d7c47a71304333d4032e0bdad241428876d9645845ea?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
              <Link to="/workout3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c9ae42376c4f14c75bb35e5212817f49d262195efe2b438356bbf47ed4542e2?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
            </div>
          </div>
          <div className="article-column narrow">
            <article className="article article-mood">
              <time className="article-date">9 February 2024 </time>
              <header className="article-title">
                <h3>What Swimming Can Do To Your Body</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                Swimming can help a person manage or lose weight, build
                strength, and improve breathing control. The benefits of
                swimming may also extend to mental health...
              </p>
              <p className="article-author">By Ginta</p>
              <br></br>
            </article>
            <article className="article article-vision">
              <time className="article-date">21 November 2023</time>
              <header className="article-title">
                <h3>Helping Height Growth Through Basketball</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                Basketball involves many movements such as jumping, running, and
                stretching the body's muscles. These exercises help in
                establishing good body posture...
              </p>
              <p className="article-author">By Noval</p>
              <br></br>
            </article>
            <article className="article article-candles">
              <time className="article-date">12 January 2024</time>
              <header className="article-title">
                <h3>What is The Best Gym Equipment for Gym Beginners?</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text">
                The toughest part about going to a gym for the first time is
                just walking through the door. If you do that, you’ve gone
                farther...
              </p>
              <p className="article-author">By Bima</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Workout;
