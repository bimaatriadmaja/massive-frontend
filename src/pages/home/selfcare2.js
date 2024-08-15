import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";

function Selfcare2() {
  return (
    <div id="wrapper" style={{ backgroundColor: "#D2D5C6" }}>
      <main id="content">
        <section class="berry-page-container">
          <div class="berry-content-section">
          <div className="isi-2" style={{marginTop:'20px', marginLeft:'-10px'}}>
                <button className="button-back" data-el="button-1" >
                  <div _text=""></div>
                </button>
                <Link className="isi-3" to="/selfcare">
                  Back
                </Link>
              </div>
            <h1 class="berry-title">
              The Benefits Of Body Scrub : How To
              <br /> Scrub Your Skin Right
            </h1>
            <div class="berry-author">By Ginta</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1efed49d08a7ccee5de5d7cd7f498b146b199909f6d189327ed351cb0c987223?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              alt="A collection of healthy berries"
              class="berry-main-image"
            />
          </div>
          <div class="berry-meta-info">
            <time datetime="2024-02-19" class="berry-date">
              9 January 2024
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
            Body scrubs remove dead skin cells, and so provide several benefits:
            They allow your skin to absorb moisturizer better. By doing
            dead skin cell buildup, any moisturizer applied to hydrate the skin
            more effectively, leaving it feeling softer, smoother, and more
            supple. Additionally, by sloughing off dead skin cell buildup, body
            scrubs promote cell turnover and renewal, which can contribute to a
            brighter, more radiant complexion. Body scrubs offer several
            benefits for skin health and appearance. <br />
            <br />Firstly, they effectively
            remove dead skin cells from the skin's surface, promoting smoother,
            brighter, and healthier-looking skin. By sloughing away dead cells,
            scrubs stimulate cell turnover and renewal, enhancing overall skin
            texture and tone. Additionally, regular use of body scrubs helps
            soften rough, dry areas such as elbows, knees, and heels, leaving
            the skin feeling smoother and more supple. <br />
            <br />Moreover, body scrubs
            improve the absorption of skincare products by removing the layer of
            dead skin cells, allowing moisturizers, serums, and other products
            to penetrate more deeply into the skin. This maximizes their
            benefits and promotes better hydration and nourishment. Furthermore,
            the massaging action of applying a body scrub stimulates
            circulation, promoting healthier-looking skin and a natural glow by
            delivering oxygen and nutrients to the skin cells.<br />
            <br /> Additionally,
            body scrubs can help prevent and reduce the occurrence of ingrown
            hairs by exfoliating the skin and removing trapped dead skin cells
            and debris. This contributes to smoother, clearer skin and reduces
            the likelihood of irritation. Lastly, the act of applying a body
            scrub can be a relaxing and indulgent self-care ritual, providing
            stress relief and promoting a sense of well-being. Overall,
            incorporating a body scrub into your skincare routine can lead to
            smoother, softer, and more radiant skin while providing relaxation
            and stress relief.
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
                  /></Link>
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

export default Selfcare2;
