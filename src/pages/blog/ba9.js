import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/ba9bg.png";

function BA9() {
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
                <Link className="isi-3" to="/blogA">
                  Back
                </Link>
              </div>
              <div className="isi-4">
                <div className="isi-5">
                Coffee: Benefits of Drinking<br />
Coffee in The Morning?
                </div>
                <div className="isi-6">By Bima</div>
              </div>
              <div className="div-border">
                <div className="border-2">17 March 2024</div>
                <div className="border-3" style={{ color: "#fff" }}>
                Coffee has become a very popular drink around the world, especially in the morning when many of us need an energy boost to start the day. However, apart from being an encouragement, does drinking coffee in the morning have health benefits?
                  <br />
                  <br />
                  1. Improves Concentration and Focus, coffee contains caffeine, which is known to have a stimulant effect on the central nervous system. Drinking coffee in the morning can help improve concentration and focus, preparing you to face challenging tasks.

                  <br />
                  <br />
                  2. Refreshes the Mind, the fragrant aroma of coffee and distinctive taste can help refresh the mind and improve your mood. This can make you feel more prepared and motivated to start the day with enthusiasm.

                  <br />
                  <br />
                  3. Increases Physical Endurance, the caffeine in coffee can also increase physical endurance by increasing metabolism and increasing adrenaline production. This can help you feel more energetic and ready to face energy-intensive physical activities.
                  <br />
                  <br />
                  4. Source of Antioxidants, coffee also contains antioxidants that are beneficial for health, such as chlorogenic acid. These antioxidants help fight free radicals in the body, which can reduce the risk of chronic diseases such as heart disease and cancer.

                    <br />
                  <br />
                  5. Improves Digestion Process, drinking coffee in the morning can also stimulate stomach acid production and increase bowel movements, which can help in the digestion process. This may help you feel more comfortable after breakfast.
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
                      <Link to="/ba1">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c72eb211bc68ed9bc5631a718b7af9d364490be12661b64707e5cbc96fea1d28?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                          className="img-column"
                          alt="Seaweed"
                        />
                      </Link>
                    </div>
                    <div className="column-2">
                    <Link to="/ba10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/227f635dac74fb4d4f251015d53ded1fe92449e59ea5740263205bb32da104c9?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                        className="img-column-2"
                        alt="Berries"
                      />
                      </Link>
                    </div>
                    <div className="column-3">
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
                          Healthy Menus for a Quality Lifestyle: Food Choices for Your Well-Being
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
                          Pepaya : The Nutrition,  The Benefits, Weight Loss?
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

export default BA9;
