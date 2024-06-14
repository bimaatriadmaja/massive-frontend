import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";

function BB6() {
  return (
    <div id="wrapper" style={{ backgroundColor: "#D2D5C6" }}>
      <main id="content">
        <section class="berry-page-container">
          <div class="berry-content-section">
          <div className="isi-2" style={{marginTop:'20px', marginLeft:'-10px'}}>
                <button className="button-back" data-el="button-1" >
                  <div _text=""></div>
                </button>
                <Link className="isi-3" to="/blogB">
                  Back
                </Link>
              </div>
            <h1 class="berry-title">
              Cycling: The Key to Optimal Heart Health
            </h1>
            <div class="berry-author">By Wavi</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e57151e455556fb209ba91ee165b4a35dfacf8cfc58b8fb73460c077eacd4022?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              alt="A collection of healthy berries"
              class="berry-main-image"
            />
          </div>
          <div class="berry-meta-info">
            <time datetime="2024-02-19" class="berry-date">
              25 November 2023
            </time>
            <div class="berry-social-icons">
              <Link to="#">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef61f379bb1033ba64993b88d5c2dfdb1a00a3b317c5331eadb9efd72c9feb53?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Share on Social Media"
                  class="berry-icon"
                />
              </Link>
              <Link to="#">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f1bcb12d740f4a489625dbe456213613a2c3d265177081e2c93a9cbd627fbf5?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Bookmark"
                  class="berry-icon-large"
                />
              </Link>
            </div>
          </div>
          <article class="berry-article-content">
            Heart health is an important aspect in maintaining our overall
            well-being. One way that has been proven effective for maintaining
            heart health is by cycling regularly. Cycling is not only fun, but
            it also has a number of incredible benefits for our heart health.
            Regular cycling has been shown to reduce the risk of heart disease.
            Research shows that people who cycle regularly have a lower risk of
            experiencing coronary heart disease, heart attack and stroke
            compared to people who are less physically active. By cycling, we
            can help maintain the elasticity of blood vessels and clean plaque
            in blood vessels, which can reduce the risk of blocked arteries.
            <br />
            <br />
            Cycling also helps stimulate blood circulation, which is very
            important for heart health. When we cycle, the movement of our legs
            helps pump blood back to the heart, which can help keep blood
            vessels elastic and help prevent potentially dangerous blood clots.
            <br />
            <br />
            Cycling is a very effective form of cardiovascular exercise. When we
            cycle, our heart works harder to pump blood throughout the body,
            thereby helping to strengthen the heart and improve our overall
            cardiovascular condition. Regular cardiovascular exercise can reduce
            the risk of coronary heart disease, stroke and high blood pressure.
            Cycling also helps improve our aerobic condition. When we cycle, we
            increase our heart rate and breathing, which helps increase lung
            capacity and the heart's efficiency in pumping blood. The better our
            aerobic condition, the better our body's ability to handle intense
            physical activity and maintain our heart health.
            <br />
            <br />
          </article>
        </section>
        <div
          id="banner-content"
          className="row clearfix"
          style={{
            marginTop: "1px",
            marginBottom: "-70px",
            backgroundColor: "#BEC9AB",
          }}
        >
          <h2 className="more-artic">
            <b>More Articles</b>
          </h2>
          <div
            className="articles"
            style={{
              marginLeft: "3%",
              marginRight: "3%",
              marginBottom: "3%",
              marginTop: "-1%",
            }}
          >
            <div className="div-img">
              <div className="div-img-2">
                <div className="column">
                  <Link to="/bb2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8aa97b48a4190e2d26097507b17cde42db8d7474f56eb44ab4687f3f3f29e6b1?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      className="img-column"
                      alt="Seaweed"
                    />
                  </Link>
                </div>
                <div className="column-2">
                  <Link to="/bb3">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/625145dd311670ac9b06995be93e4583f274c261de703da11196d254483c1734?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      className="img-column-2"
                      alt="Berries"
                    />
                  </Link>
                </div>
                <div className="column-3">
                <Link to='/bb4'>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3d5af24908b7070645529e8ebb943c48c689759fe769d56fcc9f1dc7894b085?apiKey=828441a8e65f4aacaee2ce94caf37306&"
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
                        <div className="div-text-5">8 March 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-6">By Wavi</div>
                      </div>
                      <div className="div-text-7">
                        Yoga: A Holistic Path to Physical and Mental Well-being
                      </div>
                    </div>
                  </div>
                  <div className="column-text-2">
                    <div className="div-text-8">
                      <div className="div-text-9">
                        <div className="div-text-10">14 February 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-11">By Wavi</div>
                      </div>
                      <div className="div-text-12">
                        The Health Benefits of Tennis:
                        <br />A Comprehensive Guide
                      </div>
                    </div>
                  </div>
                  <div className="column-text-3">
                    <div className="div-text-13">
                      <div className="div-text-14">
                        <div className="div-text-15">30 January 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-16">By Wavi</div>
                      </div>
                      <div className="div-text-17">
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
        </div>
      </main>
    </div>
  );
}

export default BB6;
