import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/mat.png";

function Mat() {
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
            <Link className="isi-3" to="/trend">
              Back
            </Link>
          </div>
          <div className="isi-4-rest1">
            <div className="isi-5">Yoga Mat</div>
            <div className="isi-6">By Wavi</div>
          </div>
          <div className="div-border-bh5">
            <div className="border-2">27 February 2023</div>
            <div className="border-3-rest1" style={{ color: "#fff" }}>
              <br />
              Yoga mats are an important tool in yoga practice that provide
              various benefits to yoga practitioners. <br /><br />
              1. Provides Comfort<br /> Yoga mat
              provides soft and comfortable support to maintain comfort while
              performing yoga movements. A soft mat helps protect the body from
              harsh pressure when holding poses that require contact with the
              floor. This helps maintain stability and balance when executing
              poses that require different body positions.<br /><br />
              2. Absorbs Sweat<br /> While
              doing yoga exercises, the body can produce a lot of sweat. Yoga
              mats are designed to absorb sweat so that there are no puddles
              that make the surface slippery and uncomfortable. This helps
              maintain safety and comfort during yoga practice.<br /><br />
              3. Portability<br /> Yoga
              mats are generally light and easy to carry. This makes it easy to
              take anywhere, whether for practice in the yoga studio, at home,
              or even outdoors. <br /><br />
              4. Facilitates Achieving Proper Posture<br /> The lines
              and markings on the yoga mat help practitioners to maintain body
              posture more precisely. This allows the practitioner to maintain
              correct posture and better control movements. <br /><br />Therefore yoga mats
              are not only an important tool in yoga practice for comfort and
              safety, but also help practitioners to deepen their yoga practice
              by facilitating proper posture and better concentration.
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
                <Link to='/bb10'>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b27ac232d4f600aa2588f5844de31ff2c985b02836ed551cecfcd2d0167b145?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                    className="img-column-2"
                    alt="Berries"
                  /></Link>
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

export default Mat;
