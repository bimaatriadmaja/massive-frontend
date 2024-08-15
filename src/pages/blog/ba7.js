import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/ba7bg.png";

function BA7() {
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
                Getting to Know Anti-Inflammatory <br />
                Nutrition: Foods to Relieve <br />
                Inflammation in Your Body
                </div>
                <div className="isi-6">By Bima</div>
              </div>
              <div className="div-border">
                <div className="border-2">3 August 2023</div>
                <div className="border-3" style={{ color: "#fff" }}>
                Inflammation is the body's natural response to injury or infection, but when it becomes chronic, it can contribute to various health issues, including heart disease, diabetes, and arthritis. Fortunately, adopting an anti-inflammatory diet can help mitigate inflammation and promote overall health and well-being. Let's delve into the world of anti-inflammatory nutrition and explore foods that can help alleviate inflammation in your body.

                  <br />
                  <br />
                  Understanding Anti-Inflammatory Foods
Anti-inflammatory foods are those that contain compounds known to reduce inflammation in the body. These foods often contain antioxidants, vitamins, minerals, and healthy fats that help combat oxidative stress and modulate the body's inflammatory response.
                  <br />
                  <br />
                  
                  Key Anti-Inflammatory Foods<br />
                1. Fatty Fish, rich in omega-3 fatty acids, fatty fish such as salmon, mackerel, and sardines have potent anti-inflammatory properties. Omega-3s help reduce inflammation by suppressing the production of inflammatory compounds in the body.
                  <br />
                  <br />
                  2. Berries, berries like strawberries, blueberries, and raspberries are packed with antioxidants called flavonoids, which have been shown to reduce inflammation and oxidative stress. They're also low in calories and high in fiber, making them an excellent addition to an anti-inflammatory diet.
                  <br />
                  <br />
                  3. Leafy Greens, dark, leafy greens such as spinach, kale, and Swiss chard are loaded with vitamins, minerals, and antioxidants that combat inflammation. They're also rich in fiber, which supports digestive health and reduces inflammation in the gut.
                  <br />
                  <br />
                  4. Nuts and Seeds, almonds, walnuts, flaxseeds, and chia seeds are all rich sources of healthy fats, fiber, and antioxidants. These nutrients help reduce inflammation and promote heart health when incorporated into your diet.
                    <br />
                  <br />
                  5. Olive Oil, extra virgin olive oil is a staple of the Mediterranean diet and is renowned for its anti-inflammatory properties. It contains oleocanthal, a compound that functions similarly to nonsteroidal anti-inflammatory drugs (NSAIDs) in reducing inflammation.
                  <br />
                  <br />
                  6. Turmeric and Ginger, these spices have been used for centuries in traditional medicine for their potent anti-inflammatory effects. Curcumin, the active compound in turmeric, and gingerol in ginger both help reduce inflammation and may alleviate symptoms of inflammatory conditions like arthritis.
                  <br />
                  <br />
                  7. Tomatoes, tomatoes are rich in lycopene, a powerful antioxidant with anti-inflammatory properties. Cooking tomatoes increases the bioavailability of lycopene, so enjoy them in sauces, soups, or roasted dishes.
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

export default BA7;
