import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";

function BlogHome3() {
  return (
    <div id="wrapper" style={{ backgroundColor: "#D2D5C6" }}>
      <main id="content">
        <section class="berry-page-container">
          <div class="berry-content-section">
          <div className="isi-2" style={{marginTop:'20px', marginLeft:'-10px'}}>
                <button className="button-back" data-el="button-1" >
                  <div _text=""></div>
                </button>
                <Link className="isi-3" to="/">
                  Back
                </Link>
              </div>
            <h1 class="berry-title">What is The “Eat Your Retinol” Trend?</h1>
            <div class="berry-author">By Ginta</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73b503e0a93bab6f1f949ad73fce7bba871121e7073151e6851df19aab7c4064?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              alt="A collection of healthy berries"
              class="berry-main-image"
            />
          </div>
          <div class="berry-meta-info">
            <time datetime="2024-02-19" class="berry-date">
              31 January 2024
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
            There are many carotenoids including lutein, lycopene,
            alpha-carotene and beta-carotene. Beta-carotene is the carotenoid
            responsible for a carrot’s vibrant orange colour. Once a
            beta-carotene containing food is digested, special cells in the gut
            break it into two molecules of retinol (also known as vitamin A).
            <br />
            <br />
            The Tiktok carrot retinol things refers to the benefits of carrots
            for the skin, particularly in relation to retinol. While carrots
            don't contain retinol itself (which is a form of vitamin A found in
            animal products), they contain beta-carotene, a precursor to vitamin
            A. When consumed, beta-carotene is converted into vitamin A in the
            body, which is essential for healthy skin.
            <br />
            <br />
            Vitamin A plays a crucial
            role in skin health and is often used in skincare products in the
            form of retinol. Retinol is known for its anti-aging properties,
            helping to reduce the appearance of wrinkles, improve skin texture,
            and promote cellular turnover.
            <br />
            <br />Carrots, being rich in beta-carotene,
            can contribute to healthy skin by providing the necessary building
            blocks for vitamin A production. Additionally, carrots contain
            antioxidants that help protect the skin from damage caused by free
            radicals, which can contribute to premature aging.
            <br />
            <br />Incorporating
            carrots into your diet can promote overall skin health, but it's
            important to note that while carrots can provide some benefits, they
            may not be as potent as topical retinol treatments for addressing
            specific skin concerns. However, including a variety of fruits and
            vegetables, including carrots, in your diet can contribute to
            overall skin health and radiance.
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
                  <Link to="/ba9">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/525f0ea8af899c3c554dabe27c5f116ac042eca460cfc9e5224e8e746a00516e?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      alt="Image description"
                    />
                  </Link>
                </div>
                <div className="column-2">
                  <Link to="/ba10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/800db07f4a7e1e847de9294bf98d2149f5222cb0fd4bcbb56894d35a6ff512b7?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      alt="Image description"
                    />
                  </Link>
                </div>
                <div className="column-3">
                <Link to='/ba11'>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a24f10a37924a5ec8ea15c41ab2aa33b0fd5b876e045619a7c220a0b5242d0?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                    alt="Image description"
                  />
                  </Link>
                </div>
              </div>
              <div className="div-text">
                <div className="div-text-2">
                  <div className="column-text">
                    <div className="div-text-3">
                      <div className="div-text-4">
                        <div className="div-text-5">17 March 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-6">By Wavi</div>
                      </div>
                      <div className="div-text-7">
                        Coffee: Benefits of Drinking Coffee in The Morning
                      </div>
                    </div>
                  </div>
                  <div className="column-text-2">
                    <div className="div-text-8">
                      <div className="div-text-9">
                        <div className="div-text-10">29 January 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-11">By Ginta</div>
                      </div>
                      <div className="div-text-12">
                        Pepaya : The Nutrition, The Benefits, Weight Loss?
                      </div>
                    </div>
                  </div>
                  <div className="column-text-3">
                    <div className="div-text-13">
                      <div className="div-text-14">
                        <div className="div-text-15">5 November 2023</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-16">By Wavi</div>
                      </div>
                      <div className="div-text-17">
                        Dangers of Eating Fast Food for Health
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

export default BlogHome3;
