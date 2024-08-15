import React, { useState, useEffect } from "react";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
import { Helmet } from "react-helmet";
const backgroundImage = require("../../assets/images/img/blogbbg.png");

function BlogB() {
  // State and Effects can be added here

  return (
    <div id="wrapper">
      <div
        id="banner-content"
        className="row clearfix animate__animated animate__fadeInRight animate__delay-0.5s"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "700px",
        }}
      ></div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Healthy - Blog</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <link rel="shortcut icon" href="/images/icon.ico" title="Favicon" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>

      <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
        <div>
          <div>
            <div className="div-3-ba">
              <Link to="/blogA">
                <button className="button-nut-b" data-el="button-1">
                  Nutritional Food
                </button>
              </Link>
              <button className="button-top-b" data-el="button-2">
                Physical Health
              </button>
              <div className="div-4">
                <div className="wrap">
                  <div className="search">
                    <input
                      type="text"
                      className="searchTerm"
                      placeholder="search"
                    />
                    <button type="submit" className="searchButton"></button>
                  </div>
                </div>
              </div>
            </div>
            <div id="banner-content" className="banner-content row clearfix">
              <div className="div-5">
                Morning Running: <br />
                The Key to Optimal Health
              </div>
              <Link to="/bb1">
                <div className="div-6-ba">
                  Every day, when the sun has just risen and the air is still
                  fresh, there is an opportunity for us to start the day with
                  steps that are beneficial for health. One habit ...
                </div>
              </Link>
              <div className="div-7">By Wavi</div>
            </div>
          </div>
        </div>
      </header>

      <main id="content">
        <h2 className="blog" style={{ marginTop: "9%" }}>
          <b>TRENDING ARTICLES</b>
        </h2>
        <div
          id="banner-content"
          className="row clearfix"
          style={{ backgroundColor: "#D2D5C6" }}
        >
          <div
            id="banner-content"
            className="row clearfix"
            style={{ backgroundColor: "#D2D5C6" }}
          >
            <div
              id="banner-content"
              className="row clearfix"
              style={{ marginTop: "-43%" }}
            >
              <div className="articles10">
                <div className="articles-20" data-aos="fade-up">
                  <div className="articles-30">
                    <div
                      className="column-articles10"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <Link to="/bb2">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aa97b48a4190e2d26097507b17cde42db8d7474f56eb44ab4687f3f3f29e6b1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                          className="img-column"
                          alt="Seaweed"
                        />
                      </Link>
                    </div>
                    <div
                      className="column-articles-20"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <Link to="/bb3">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/625145dd311670ac9b06995be93e4583f274c261de703da11196d254483c1734?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                          className="img-column-2"
                          alt="Berries"
                        />
                      </Link>
                    </div>
                    <div
                      className="column-articles-30"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <Link to="/bb4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3d5af24908b7070645529e8ebb943c48c689759fe769d56fcc9f1dc7894b085?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                          className="img-column3"
                          alt="Eggs"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="articles10" data-aos="fade-up">
                  <div className="articles-40">
                    <div
                      className="column-articles10"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    >
                      <div className="articles-5">
                        <div className="articles-6">22 December 2023</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="articles-7">By Bima</div>
                      </div>
                      <div className="articles-8">
                        Yoga: A Holistic Path to Physical and Mental Well-being
                      </div>
                    </div>
                    <div
                      className="column-articles-40"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      <div className="articles-9">
                        <div className="articles-10">7 September 2023</div>
                        <button className="button-articles" data-el="button-2">
                          <div _text=""></div>
                        </button>
                        <div className="articles-11">By Ginta</div>
                      </div>
                      <div className="articles-12">
                        The Health Benefits of Tennis:
                        <br />A Comprehensive Guide
                      </div>
                    </div>
                    <div
                      className="column-articles-5"
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      <div className="articles-13">
                        <div className="articles-14">2 September 2023</div>
                        <button className="button-articles" data-el="button-2">
                          <div _text=""></div>
                        </button>
                        <div className="articles-15">By Bima</div>
                      </div>
                      <div className="articles-16">
                        Unlocking the Thrill:
                        <br />
                        Football for Teenagers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="banner-content"
            className="row clearfix"
            style={{ marginTop: "-15%" }}
          >
            <div className="articles10">
              <div className="articles-20" data-aos="fade-up">
                <div className="articles-30">
                  <div className="column-articles10">
                    <Link to="/bb5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43c6fcc984b36491070196f481383fcb6f851fb1b666c1091699793a69f1288c?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                        className="img-articles10"
                        alt="Spinach"
                      />
                    </Link>
                  </div>
                  <div className="column-articles-20">
                    <Link to="/bb6">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a571dcf9f3f085d82c7b9248138487c044cecb8ab41847479a57b088d9c78108?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                        className="img-articles10"
                        alt="Spinach"
                      />
                    </Link>
                  </div>
                  <div className="column-articles-30">
                    <Link to="/bb7">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/997f298081df340db6a10917c1e0b81e5e66df146ba4427595dff6b179ef78c0?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                        className="img-articles-20"
                        alt="Spinach"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="articles10" data-aos="fade-up">
                <div className="articles-40">
                  <div className="column-articles10">
                    <div className="articles-5">
                      <div className="articles-6">4 January 2024</div>
                      <button className="button-articles" data-el="button-1">
                        <div _text=""></div>
                      </button>
                      <div className="articles-7">By Wavi</div>
                    </div>
                    <div className="articles-8">
                      The Gym in the Early Years:
                      <br />
                      Starting Your Health and Fitness
                      <br /> Journey on the Right Point
                    </div>
                  </div>
                  <div className="column-articles-40">
                    <div className="articles-9">
                      <div className="articles-10">25 November 2023</div>
                      <button className="button-articles" data-el="button-2">
                        <div _text=""></div>
                      </button>
                      <div className="articles-11">By Wavi</div>
                    </div>
                    <div className="articles-12">
                      Cycling: The Key to
                      <br />
                      Optimal Heart Health
                    </div>
                  </div>
                  <div className="column-articles-5">
                    <div className="articles-13">
                      <div className="articles-14">19 September 2023</div>
                      <button className="button-articles" data-el="button-2">
                        <div _text=""></div>
                      </button>
                      <div className="articles-15">By Wavi</div>
                    </div>
                    <div className="articles-16">
                      Billiards: Having Fun and
                      <br /> Challenging Brain Stimulation
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-container-b">
                <div className="absolute-b">
                  <h5>
                    <b style={{ color: "#fff" }}>
                      Conquering the Sky:
                      <br /> Skydiving for our Health
                    </b>
                  </h5>
                  <p>
                    Skydiving also requires high focus and good breathing
                    control. When you jump, your body reacts instantly, and your
                    nervous system works in optimal condition. Additionally, you
                    will learn to regulate your breathing in intense situations,
                    which can help increase your lung capacity.
                  </p>
                  <p>
                    By Wavi{" "}
                    <a href="#">
                      <Link to="/bb8">
                        <button className="btn-readmore">READ MORE</button>
                      </Link>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <br></br>
      <br></br>
      <section className="articles-section">
        <div className="articles">
          <div className="article-column wide">
            <div className="article article-images">
              <Link to="/bb9">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fcce131d340771dab803fd4212566539bc9f18345438cc957666ef833e08917?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Image description"
                />
              </Link>
              <Link to="/bb10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b27ac232d4f600aa2588f5844de31ff2c985b02836ed551cecfcd2d0167b145?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Image description"
                />
              </Link>
              <Link to="/bb11">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5b4d64bd0b109710872de0fa229227a34d57876c4d785b63fe51635ef8bb218?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Image description"
                />
              </Link>
            </div>
          </div>
          <div className="article-column narrow">
            <article className="article article-mood">
              <time className="article-date1">9 February 2024 </time>
              <header className="article-title1">
                <h3>What Swimming Can Do To Your Body</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text1">
                Swimming can help a person manage or lose weight, build
                strength, and improve breathing control. The benefits of
                swimming may also extend to mental health...
              </p>
              <p className="article-author1">By Ginta</p>
              <br></br>
              <br></br>
            </article>
            <article className="article article-vision">
              <time className="article-date2">21 November 2023</time>
              <header className="article-title2">
                <h3>Helping Height Growth Through Basketball</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text2">
                Basketball involves many movements such as jumping, running, and
                stretching the body's muscles. These exercises help in
                establishing good body posture...
              </p>
              <p className="article-author2">By Wavi</p>
              <br></br>
              <br />
            </article>
            <article className="article article-candles">
              <time className="article-date3">10 Oktober 2023</time>
              <header className="article-title3">
                <h3>Your Mood Depends On Your Music</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text3">
                How does music affect your well-being, learning, and happiness?
                A survey by AARP suggests that music listeners have
                higher mental well-being and lower anxiety and depression...
              </p>
              <p className="article-author3">By Ginta</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogB;
