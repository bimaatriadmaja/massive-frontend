import React, { useState, useEffect } from "react";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
import { Helmet } from "react-helmet";
const backgroundImage = require("../../assets/images/img/blogabg.png");

function BlogA() {
  // State and Effects can be added here

  return (
    <div id="wrapper">
      <div
        id="banner-content"
        className="row clearfix"
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
              <button className="button-nut" data-el="button-1">
                Nutritional Food
              </button>
              <Link to="/blogB">
              <button className="button-top" data-el="button-2">
                Physical Health
              </button>
              </Link>
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
            <Link to="/ba1">
              <div className="div-5">
                Healthy Menus for a Quality Lifestyle: Food Choices for Your
                Well-Being
              </div>
              </Link>
              <div className="div-6-ba">
                Food is fuel for our body. By choosing the right foods, you can
                give your body the energy and nutrients it needs to live a
                healthy lifestyle. In this article, we will ...
              </div>
              <div className="div-7">By Bima</div>
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
          <div className="div-img-ba">
            <div className="div-img-2">
              <div className="column">
                <Link to="/ba2">
                  <img
                    loading="lazy"
                    src="/images/Rectangle 23892 (1).png"
                    className="img-column"
                    alt="Seaweed"
                  />
                </Link>
              </div>
              <div className="column-2">
              <Link to="/ba3">
                <img
                  loading="lazy"
                  src="/images/Rectangle 23909.png"
                  className="img-column-2"
                  alt="Berries"
                />
                </Link>
              </div>
              <div className="column-3">
              <Link to="/ba4">
                <img
                  loading="lazy"
                  src="/images/Rectangle 23910.png"
                  className="img-column3"
                  alt="Eggs"
                />
                </Link>
              </div>
            </div>
            <div className="div-text">
              <div className="div-text-2">
                <div className="column-text">
                  <div className="div-text-3">
                    <div className="div-text-4">
                      <div className="div-text-5">14 March 2024</div>
                      <button className="button-articles" data-el="button-1">
                        <div _text=""></div>
                      </button>
                      <div className="div-text-6">By Wavi</div>
                    </div>
                    <div className="div-text-7">
                      The Delights and Benefits of Seaweed: Introducing the
                      Ocean on Your Plate
                    </div>
                  </div>
                </div>
                <div className="column-text-2">
                  <div className="div-text-8">
                    <div className="div-text-9">
                      <div className="div-text-10">19 February 2024</div>
                      <button className="button-articles" data-el="button-1">
                        <div _text=""></div>
                      </button>
                      <div className="div-text-11">By Ginta</div>
                    </div>
                    <div className="div-text-12">
                      Why Berries Improve Your Heart Health?
                    </div>
                  </div>
                </div>
                <div className="column-text-3">
                  <div className="div-text-13">
                    <div className="div-text-14">
                      <div className="div-text-15">9 January 2024</div>
                      <button className="button-articles" data-el="button-1">
                        <div _text=""></div>
                      </button>
                      <div className="div-text-16">By Ginta</div>
                    </div>
                    <div className="div-text-17">
                    The Natural Proteins You Need
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
              <div className="articles-20">
                <div className="articles-30">
                  <div className="column-articles10">
                  <Link to="/ba5">
                    <img
                      loading="lazy"
                      src="/images/Mask group.png"
                      className="img-articles10"
                      alt="Spinach"
                    />
                    </Link>
                  </div>
                  <div className="column-articles-20">
                  <Link to="/ba6">
                    <img
                      loading="lazy"
                      src="/images/Rectangle 23917.png"
                      className="img-articles10"
                      alt="Spinach"
                    />
                    </Link>
                  </div>
                  <div className="column-articles-30">
                  <Link to="/ba7">
                    <img
                      loading="lazy"
                      src="/images/image 38.png"
                      className="img-articles-20"
                      alt="Spinach"
                    />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="articles10">
                <div className="articles-40">
                  <div className="column-articles10">
                    <div className="articles-5">
                      <div className="articles-6">22 December 2023</div>
                      <button className="button-articles" data-el="button-1">
                        <div _text=""></div>
                      </button>
                      <div className="articles-7">By Wavi</div>
                    </div>
                    <div className="articles-8">
                      Healthy Diet with Eggs: Nutritious for health
                    </div>
                  </div>
                  <div className="column-articles-40">
                    <div className="articles-9">
                      <div className="articles-10">7 September 2023</div>
                      <button className="button-articles" data-el="button-2">
                        <div _text=""></div>
                      </button>
                      <div className="articles-11">By Wavi</div>
                    </div>
                    <div className="articles-12">
                      The Power of Spinach: Nutrient-Rich Superfood
                    </div>
                  </div>
                  <div className="column-articles-5">
                    <div className="articles-13">
                      <div className="articles-14">2 September 2023</div>
                      <button className="button-articles" data-el="button-2">
                        <div _text=""></div>
                      </button>
                      <div className="articles-15">By Wavi</div>
                    </div>
                    <div className="articles-16">
                      The Power of Spinach: Nutrient-Rich Superfood
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-container">
                <div className="absolute">
                  <h5>
                    <b style={{ color: "#fff" }}>The Safe Sunbathing Effect</b>
                  </h5>
                  
                  <p>
                    Research shows there can be benefits to sunbathing and
                    spending time in the sun. Exposure to sunlight can boost
                    mood, result in better sleep, and helps vitamin D
                    production, which strengthens bones and may help fight
                    certain diseases.
                  </p>
                  
                  <p>
                    By Ginta{" "}
                    <Link to="/ba8">
                      <button className="btn-readmore">READ MORE</button>
                      </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="articles-section">
        <div className="articles">
          <div className="article-column wide">
            <div className="article article-images">
            <Link to="/ba9">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/525f0ea8af899c3c554dabe27c5f116ac042eca460cfc9e5224e8e746a00516e?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
              <Link to="/ba10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/800db07f4a7e1e847de9294bf98d2149f5222cb0fd4bcbb56894d35a6ff512b7?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
              <Link to="/ba11">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a24f10a37924a5ec8ea15c41ab2aa33b0fd5b876e045619a7c220a0b5242d0?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Image description"
              />
              </Link>
            </div>
          </div>
          <div className="article-column narrow">
            <article className="article article-mood">
              <time className="article-date1">17 March 2024 </time>
              <header className="article-title1">
                <h3>Coffee: Benefits of Drinking Coffee in The Morning</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text1">
                Coffee has become a very popular drink around the world,
                especially in the morning when many of us need an energy boost
                to start the day...
              </p>
              <p className="article-author1">By Wavi</p>
              <br></br>
            </article>
            <article className="article article-vision">
              <time className="article-date2">29 January 2024</time>
              <header className="article-title2">
                <h3>Papaya : The Nutrition, The Benefits, Weight Loss?</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text2">
                Papaya is a soft tropical fruit with a yellowish-orange color.
                This species of fruit — which belongs to the Caricaceae family —
                is round and plump and comes in larger and smaller sizes...
              </p>
              <p className="article-author2">By Ubai</p>
              <br></br>
            </article>
            <article className="article article-candles">
              <time className="article-date3">9 January 2024</time>
              <header className="article-title3">
                <h3>Dangers of Eating Fast Food for Health</h3>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/447798de7fe68523fc290c54aa0a4870de3c6b4136480f6a2faaaefa11ee10d1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Music icon"
                />
              </header>
              <p className="article-text3">
                Fast food has become an integral part of the modern lifestyle,
                but behind its convenience, serious dangers to health are
                hidden. Fast food is often high in saturated fat, salt, and
                added sugar, and low in fiber, vitamins, and minerals...
              </p>
              <p className="article-author3">By Bima</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogA;
