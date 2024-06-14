import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";

function Trend11() {
  return (
    <div id="wrapper" style={{ backgroundColor: "#D2D5C6" }}>
      <main id="content">
        <section class="berry-page-container">
          <div class="berry-content-section">
          <div className="isi-2" style={{marginTop:'20px', marginLeft:'-10px'}}>
                <button className="button-back" data-el="button-1" >
                  <div _text=""></div>
                </button>
                <Link className="isi-3" to="/trend">
                  Back
                </Link>
              </div>
            <h1 class="berry-title">
              Everything You Need To Know About
              <br /> Fish For Your Kiddo
            </h1>
            <div class="berry-author">By Ginta</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/640a602f72638aefa1f4759b3b03e3f2aadeedd548ff01387b49e5cc3882aaec?apiKey=828441a8e65f4aacaee2ce94caf37306&"
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
            In addition, oily fish (salmon, trout, mackerel, herring and
            sardines) are rich in vitamins A and D. Vitamin A is essential for
            healthy skin and eyes. And for kids fish offers several health
            benefits for kids, making it a valuable addition to their diet.
            Firstly, fish, especially fatty varieties like salmon, mackerel, and
            trout, are rich sources of omega-3 fatty acids, particularly EPA and
            DHA. These essential fatty acids are crucial for brain development
            and cognitive function in children, with studies linking omega-3
            consumption to improved attention, memory, and behavior.
            Additionally, omega-3s support heart health by reducing
            inflammation, lowering blood pressure, and improving blood vessel
            function, potentially decreasing the risk of heart disease later in
            life.<br /><br /> Furthermore, fish is an excellent source of high-quality
            protein, essential for growth, development, and muscle repair in
            children. Protein from fish is easily digestible and contains all
            the essential amino acids needed for optimal growth. Alongside
            protein, fish is packed with essential nutrients such as vitamin D,
            vitamin B12, iodine, and selenium, all vital for overall health and
            development. Vitamin D supports bone health and immune function,
            while vitamin B12 is crucial for nervous system function and red
            blood cell production. Iodine supports thyroid function, and
            selenium acts as an antioxidant, protecting cells from damage.<br /><br />
            Moreover, introducing fish into children's diets at an early age may
            help reduce the risk of developing allergies, including allergic
            reactions to other foods. Early exposure to allergenic foods like
            fish may help desensitize the immune system and decrease the
            likelihood of food allergies later in life. Lastly, fish promotes
            healthy growth and development, providing essential nutrients to
            support healthy weight gain, strong bones, and optimal cognitive and
            physical development in children. Therefore, incorporating fish into
            kids' diets can offer numerous health benefits, contributing to
            their overall well-being and development.
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
                <div className="column-3">
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

export default Trend11;
