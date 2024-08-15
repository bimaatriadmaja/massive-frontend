import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/ba5bg.png";

function BA5() {
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
                  Healthy Diet with Eggs: <br />
                  Nutritious for Health
                </div>
                <div className="isi-6">By Wavi</div>
              </div>
              <div className="div-border">
                <div className="border-2">20 Desember 2023</div>
                <div className="border-3" style={{ color: "#fff" }}>
                Eggs have long been considered a source of high-quality protein and an important nutrient in the human diet. Apart from being rich in protein, eggs also contain a number of other important nutrients, making them the perfect choice to enrich your healthy diet. Let's explore the nutritional benefits of eggs and how you can integrate them into your daily diet.

                  <br />
                  <br />
                  
Nutritional Benefits of Eggs:<br />
1. Source of High Quality Protein, eggs contain complete protein containing all the essential amino acids required by the body for the growth and maintenance of body tissues.
                  <br />
                  <br />
                  2. Rich in Micronutrients, apart from protein, eggs also contain a number of other important nutrients, including vitamin B12, riboflavin (vitamin B2), selenium, phosphorus, and iron.
                  <br />
                  <br />
                  3. Healthy Fat Content, although eggs contain fat, most of the fat in eggs is monounsaturated and polyunsaturated fats, which are known to be good for heart health.
                  <br />
                  <br />
                  4. Source of Vitamin D, eggs are one of the few natural food sources of vitamin D, which is important for healthy bones, the immune system, and optimal muscle function.

                  <br />
                  5. Increases Satiety, the protein and healthy fat content in eggs can help increase satiety and reduce the desire to snack between meals.
                  <br />
                  <br />
                  Tips:
                  <br />
                  <br />
                  1. Choose High Quality Eggs, choose eggs from trusted sources, such as organic farms or farms that comply with animal welfare standards.

                  <br />
                  <br />
                  2. Variations in Preparation, eggs can be cooked in a variety of ways, including boiled, fried, or made into omelets. Try different cooking methods to maintain diversity in your diet.

                  <br />
                  <br />
                  3. Combination with Vegetables, add eggs to salads, soups or stir-fried vegetables to increase the protein and nutrient intake in your dishes.

                  <br />
                  <br />
                  4. Limit Consumption of High Fat Eggs, even though eggs contain healthy fats, avoid excessive consumption of eggs fried in oil or cooked with added fat.

                  <br />
                  <br />
                  5. Watch Portions, while eggs are a nutritious source of protein, watch your overall consumption and be sure to balance them with other protein sources in your diet.
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
                      <Link to="/ba2">
                        <img
                          loading="lazy"
                          src="/images/Rectangle 23892 (1).png"
                          className="img-column"
                          alt="Seaweed"
                        />
                      </Link>
                    </div>
                    <div className="column-2">
                    <Link to='/ba3'>
                      <img
                        loading="lazy"
                        src="/images/Rectangle 23909.png"
                        className="img-column-2"
                        alt="Berries"
                      />
                      </Link>
                    </div>
                    <div className="column-2">
                    <Link to='/ba4'>
                      <img
                        loading="lazy"
                        src="/images/Rectangle 23910.png"
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
                            <div className="div-text-5">14 March 2024</div>
                            <button className="button-articles" data-el="button-1">
                              <div _text=""></div>
                            </button>
                            <div className="div-text-6">By Wavi</div>
                          </div>
                          <div className="div-text-7">
                            The Delights and Benefits of Seaweed: Introducing the
                            Ocean on Your Plate
                          </div>
                        </div>
                      </div>
                      <div className="column-text-2">
                        <div className="div-text-8">
                          <div className="div-text-9">
                            <div className="div-text-10">19 February 2024</div>
                            <button className="button-articles" data-el="button-1">
                              <div _text=""></div>
                            </button>
                            <div className="div-text-11">By Ginta</div>
                          </div>
                          <div className="div-text-12">
                            Why Berries Improve Your Heart Health?
                          </div>
                        </div>
                      </div>
                      <div className="column-text-3">
                        <div className="div-text-13">
                          <div className="div-text-14">
                            <div className="div-text-15">9 January 2024</div>
                            <button className="button-articles" data-el="button-1">
                              <div _text=""></div>
                            </button>
                            <div className="div-text-16">By Ginta</div>
                          </div>
                          <div className="div-text-17">
                            The Natural Proteins You Need
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

export default BA5;
