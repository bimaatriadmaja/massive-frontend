import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/bh2bg.png";

function BlogHome2() {
  return (
    <div id="wrapper" style={{ backgroundColor: "#D2D5C6" }}>
      <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
        <div
          className="isi"
          style={{
            backgroundImage: `url(${seaweedImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="isi-2">
            <button className="button-back" data-el="button-1">
              <div _text=""></div>
            </button>
            <Link className="isi-3" to="/">
              Back
            </Link>
          </div>
          <div className="isi-4">
            <div className="isi-5">Why Water?</div>
            <div className="isi-6">By Ginta</div>
          </div>
          <div className="div-border">
            <div className="border-2">7 February 2022</div>
            <div className="border-3" style={{ color: "#fff" }}>
              Water is one of the most important resources on the planet.
              Without water, life cannot exist. But what makes water so
              important? Water has several unique characteristics that make it
              an extremely valuable resource. Some such properties of water are
              listed below.<br /><br />
              - Water is a very good solvent – it has the ability to
              dissolve many substances. <br />
              - The boiling point and freezing point of
              water make it easily available in all three states (solid, liquid,
              and gaseous).<br />
              - The specific heat of water is quite high. This
              enables water to absorb and release heat slowly, thereby
              regulating the temperature of its environment. <br />
              - Owing to its
              transparency, water can allow light to reach the life forms that
              are submerged in it. This is crucial for the survival of plant
              life in the oceans, lakes, and rivers. <br />
              - Water is neither acidic nor
              basic in nature. It has a pH of 7, making it a neutral substance.
              <br /><br />These unique qualities of water, along with its abundance on the
              planet (approximately 71% of the Earth’s surface is made up of
              water), make it a crucial resource for plants, animals, and human
              beings.
              <br />
              <br />
            </div>
            <div className="boxbutton">
              <button className="button-border" data-el="button-1">
                <div _text=""></div>
              </button>
              <button className="button-border-2" data-el="button-2">
                <div _text=""></div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main id="content">
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
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac07d77ec31897887f6607594931f04fd70e9c0af9bc1cd35e95d6ddec72e582?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      className="img-column"
                      alt="Seaweed"
                    />
                  </Link>
                </div>
                <div className="column-2">
                <Link to='/ba10'>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/227f635dac74fb4d4f251015d53ded1fe92449e59ea5740263205bb32da104c9?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                    className="img-column-2"
                    alt="Berries"
                  />
                  </Link>
                </div>
                <div className="column-2">
                <Link to='/ba11'>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91eeb24296f2028c015c4759727ebec6a932bfb7405251a9e2f830feb567495?apiKey=828441a8e65f4aacaee2ce94caf37306&"
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
                        <div className="div-text-5">17 March 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-6">By Bima</div>
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

export default BlogHome2;
