import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/rest2bg.png";

function Rest2() {
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
            <Link className="isi-3" to="/rest">
              Back
            </Link>
          </div>
          <div className="isi-4-rest1">
            <div className="isi-5">
              How Does Sleep Affect Your
              <br /> Blood Pressure?
            </div>
            <div className="isi-6">By Bima</div>
          </div>
          <div className="div-border-rest2">
            <div className="border-2-rest1">1 February 2024</div>
            <div className="border-3-rest1" style={{ color: "#000000" }}>
              People who sleep six hours or less may have steeper increases in
              blood pressure. If you already have high blood pressure.
              Sufficient sleep is essential for maintaining overall health,
              including cardiovascular health and blood pressure regulation. The
              relationship between sleep duration and blood pressure is complex,
              but research suggests that inadequate sleep, particularly
              consistently getting less than six hours per night, may contribute
              to higher blood pressure levels.<br /><br />
               Here are some reasons why
              inadequate sleep may lead to steeper increases in blood pressure:<br /><br />
              1. Inadequate sleep can lead to overactivity of the sympathetic
              nervous system, which controls the body's "fight or flight"
              response. This can result in increased heart rate,
              vasoconstriction (narrowing of blood vessels), and elevated blood
              pressure.<br /><br /> 2. Sleep deprivation can disrupt the balance of hormones
              involved in blood pressure regulation, such as cortisol, which is
              released in response to stress and can increase blood pressure
              levels.<br /><br /> 3. Chronic sleep deprivation may lead to increased
              inflammation and oxidative stress in the body, both of which are
              associated with higher blood pressure levels and cardiovascular
              disease risk.<br /><br /> 4. Sleep plays a crucial role in regulating
              circadian rhythms, which influence various physiological
              processes, including blood pressure fluctuations throughout the
              day and night. Disruption of these rhythms due to inadequate sleep
              can impact blood pressure regulation. <br /><br />ess your individual risk
              factors and develop a comprehensive plan to improve both sleep
              quality and blood pressure management.
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
                  /></Link>
                </div>
                <div className="column-3">
                <Link to='/ba11'>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91eeb24296f2028c015c4759727ebec6a932bfb7405251a9e2f830feb567495?apiKey=828441a8e65f4aacaee2ce94caf37306&"
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

export default Rest2;
