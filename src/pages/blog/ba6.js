import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/ba6bg.png";

function blogisiA6() {
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
              Spinach: The Nutritional Secret <br />
              to Increase Energy and Health
            </div>
            <div className="isi-6">By Wavi</div>
          </div>
          <div className="div-border">
            <div className="border-2">7 September 2023</div>
            <div className="border-3" style={{ color: "#fff" }}>
              Spinach, a leafy green vegetable that is low in calories but rich
              in nutrients, has been known as one of the best superfoods that
              can provide an extraordinary energy boost. With its abundant
              nutritional content, spinach not only provides energy, but also
              provides various significant health benefits. Let's explore more
              about the nutrients contained in spinach and how they can help
              increase your energy.
              <br />
              <br />
              Rich in Nutritional Iron<br />
1. One of the main nutrients in spinach is iron, which is an important component in the production of hemoglobin in the blood. Hemoglobin is responsible for transporting oxygen from the lungs to the rest of the body, ensuring that your body's cells get enough oxygen to produce energy. Iron deficiency can cause fatigue and lack of energy, so including spinach in your diet may help prevent these conditions
              <br />
              <br />
              2. Good Sources of Fiber<br />
Fiber is an important nutrient in the diet that helps maintain healthy digestion and increases satiety. Spinach contains both soluble and insoluble fiber, which helps maintain gut health and prevent constipation. By having smooth digestion, your body can absorb nutrients more efficiently, which in turn can increase your energy levels
              <br />
              <br />
              3. High Antioxidant:<br />
Spinach contains a number of powerful antioxidants, including vitamin C, vitamin E, and beta-carotene. Antioxidants help fight oxidative damage caused by free radicals in the body, which can cause stress and fatigue. By consuming spinach regularly, you can improve your body's defenses against free radicals, keeping your energy levels stable.
              <br />
              <br />
              4. Important Vitamin B:<br />
Spinach is also a good source of a number of B vitamins, including vitamin B2 (riboflavin), vitamin B6, and folic acid. B vitamins play an important role in energy metabolism, helping your body convert food into fuel that is used to produce energy. By consuming spinach, you can ensure that your body has sufficient intake of these vitamins to maintain optimal energy levels.
              <br />
              Spinach is a great food choice for increasing energy and overall health. With an abundance of iron, antioxidants, fiber and B vitamins, spinach can help keep your energy levels stable throughout the day. Be sure to integrate spinach into your balanced diet to get the maximum benefits from this nutrient. In this way, you can feel an extraordinary boost of energy and maintain your body's health optimally.
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

export default blogisiA6;
