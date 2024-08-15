import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";

function BB8() {
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
              Conquering the Sky:
              <br /> Skydiving for our Health
            </h1>
            <div class="berry-author">By Wavi</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/141d937c297a925ce75ecb5bd35d1119adf252d4c07a9a9e0982cf97d8b8dabb?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              alt="A collection of healthy berries"
              class="berry-main-image"
            />
          </div>
          <div class="berry-meta-info">
            <time datetime="2024-02-19" class="berry-date">
              12 Desember 2023
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
            Skydiving also requires high focus and good breathing control. When
            you jump, your body reacts instantly, and your nervous system works
            in optimal condition. Additionally, you will learn to regulate your
            breathing in intense situations, which can help increase your lung
            capacity.
            <br />
            <br />
            When you jump from a plane and feel the sensation of being free to
            fly through the air, your body releases adrenaline and endorphins.
            It is a natural hormone that improves mood, reduces stress, and
            increases feelings of happiness. The adrenaline-filled sensation
            experienced during skydiving can provide a powerful mental boost and
            reduce the risk of depression.
            <br />
            <br />
            Skydiving involves a high level of mental stress, from overcoming a
            fear of heights to facing the challenges of jumping from a plane.
            This requires courage, calmness of mind and great concentration.
            Through skydiving, a person can develop psychological skills such as
            self-control, perseverance, and the ability to face challenges with
            confidence.
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
                  <Link to="/bb9">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fcce131d340771dab803fd4212566539bc9f18345438cc957666ef833e08917?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      className="img-column"
                      alt="Seaweed"
                    />
                  </Link>
                </div>
                <div className="column-2">
                  <Link to="/bb10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b27ac232d4f600aa2588f5844de31ff2c985b02836ed551cecfcd2d0167b145?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      className="img-column-2"
                      alt="Berries"
                    />
                  </Link>
                </div>
                <div className="column-2">
                <Link to="/bb11">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5b4d64bd0b109710872de0fa229227a34d57876c4d785b63fe51635ef8bb218?apiKey=828441a8e65f4aacaee2ce94caf37306&"
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
                        <div className="div-text-5">9 February 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-6">By Ginta</div>
                      </div>
                      <div className="div-text-7">
                        What Swimming Can Do To Your Body
                      </div>
                    </div>
                  </div>
                  <div className="column-text-2">
                    <div className="div-text-8">
                      <div className="div-text-9">
                        <div className="div-text-10">21 November 2023</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-11">By Wavi</div>
                      </div>
                      <div className="div-text-12">
                        Helping Height Growth Through Basketball
                      </div>
                    </div>
                  </div>
                  <div className="column-text-3">
                    <div className="div-text-13">
                      <div className="div-text-14">
                        <div className="div-text-15">10 Oktober 2023</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-16">By Ginta</div>
                      </div>
                      <div className="div-text-17">
                        Your Mood Depends On Your Music
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

export default BB8;
