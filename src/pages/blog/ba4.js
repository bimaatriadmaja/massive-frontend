import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";

function BA4() {
  return (
    <div id="wrapper" style={{ backgroundColor: "#D2D5C6" }}>
      <main id="content">
        <section class="berry-page-container">
          <div class="berry-content-section">
          <div className="isi-2" style={{marginTop:'20px', marginLeft:'-10px'}}>
                <button className="button-back" data-el="button-1" >
                  <div _text=""></div>
                </button>
                <Link className="isi-3" to="/blogA">
                  Back
                </Link>
              </div>
            <h1 class="berry-title">The Natural Protein You Need</h1>
            <div class="berry-author">By Ginta</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e69cd08e98fc3b7ad018fc121be6e6143316e185ff2e050d5a9a88979274e38?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              alt="A collection of healthy berries"
              class="berry-main-image"
            />
          </div>
          <div class="berry-meta-info">
            <time datetime="2024-02-19" class="berry-date">
              19 February 2024
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
            Protein helps repair and build your body's tissues. It drives
            metabolic reactions, maintains pH and fluid balance, and keeps the
            immune. Natural protein sources are essential for maintaining
            optimal health and supporting various bodily functions. One of the
            most well-known sources of natural protein is lean meats, such as
            chicken, turkey, beef, and pork. These meats are rich in
            high-quality protein, as well as essential nutrients like iron,
            zinc, and vitamin B12, which are important for energy production,
            immune function, and overall well-being. Additionally, fish and
            seafood are excellent sources of protein, particularly fatty fish
            like salmon, tuna, and mackerel, which also provide heart-healthy
            omega-3 fatty acids. Incorporating a variety of lean meats, fish,
            and seafood into your diet can help meet your protein needs while
            also providing essential nutrients for optimal health.
            <br />
            <br />
            Furthermore, plant-based sources of protein are becoming
            increasingly popular due to their health and environmental benefits.
            Legumes, including beans, lentils, and chickpeas, are excellent
            sources of plant-based protein, fiber, and various vitamins and
            minerals. They are also low in fat and cholesterol, making them a
            heart-healthy alternative to animal proteins. Additionally, nuts and
            seeds, such as almonds, walnuts, chia seeds, and hemp seeds, are
            rich in protein, healthy fats, and antioxidants. Incorporating a
            variety of plant-based protein sources into your diet can help
            improve overall health, support weight management, and reduce the
            environmental impact of food production.
            <br />
            <br />
            In summary, natural protein sources, including lean meats, fish,
            seafood, legumes, nuts, and seeds, play a crucial role in
            maintaining a balanced and nutritious diet. Whether you prefer
            animal or plant-based proteins, incorporating a variety of
            protein-rich foods into your meals can help ensure that you meet
            your daily protein needs while also providing essential nutrients
            for optimal health and well-being.
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
                <Link to='/bb11'>
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

export default BA4;
