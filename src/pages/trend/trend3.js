import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/trend3.png";

function Trend3() {
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
          <div className="isi-4">
            <div className="isi-5">Peach : Your Natural Skin Food </div>
            <div className="isi-6">By Ginta</div>
          </div>
          <div className="div-border-t3">
            <div className="border-2-rest1">7 February 2022</div>
            <div className="border-3-rest1" style={{ color: "#000000" }}>
              <br />
              Peaches offer several benefits for skin health due to their rich
              nutritional profile and natural properties. Peach helps repair and
              regenerate skin tissue and protects the skin against external
              influences. It is often a part of anti-aging cosmetics because of
              its ability to tighten the skin and make them less wrinkles. Here
              are some ways in which peaches can contribute to healthy skin:<br /><br />
              1. Hydration <br />Peaches are high in water content, which helps keep the
              skin hydrated and moisturized. Proper hydration is essential for
              maintaining soft, supple skin and preventing dryness and
              flakiness.<br /><br />
              2. Vitamins and Antioxidants <br />Peaches are rich in vitamins
              A and C, both of which are potent antioxidants that help protect
              the skin from damage caused by free radicals and environmental
              stressors. Vitamin C also plays a key role in collagen production,
              promoting firmness and elasticity in the skin.<br /><br />
              3. Anti-Aging
              Properties<br /> The antioxidants found in peaches, particularly vitamin
              C, help combat signs of aging such as fine lines, wrinkles, and
              age spots. Regular consumption of peaches or application of
              peach-derived skincare products may help improve skin texture and
              tone, resulting in a more youthful appearance.<br /><br />
              4. Exfoliation <br />The
              natural acids found in peaches, such as alpha hydroxy acids (AHAs)
              and beta hydroxy acids (BHAs), have exfoliating properties that
              help remove dead skin cells, unclog pores, and promote cell
              turnover. This can result in smoother, clearer skin and may help
              prevent acne breakouts. <br /><br />
              5. Anti-Inflammatory Effects<br /> Peaches contain
              compounds with anti-inflammatory properties that can help soothe
              irritated or inflamed skin conditions such as acne, eczema, or
              sunburn. Applying peach pulp or juice topically may help reduce
              redness and inflammation and promote healing. <br /><br />
              6. Brightening and
              Even-Toning <br />The natural acids and vitamins in peaches can help
              brighten the skin's complexion and promote a more even skin tone.
              Regular use of peach-derived skincare products or homemade masks
              may help fade dark spots, hyperpigmentation, and blemishes,
              resulting in a radiant and glowing complexion. <br /><br />Overall,
              incorporating peaches into your diet or skincare routine can offer
              various benefits for skin health, including hydration, antioxidant
              protection, anti-aging effects, exfoliation, anti-inflammatory
              properties, and brightening effects. Whether consumed as a
              delicious fruit or used in skincare products, peaches can help
              promote healthy, glowing skin.
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
                  <Link to="/bloghome6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/988b6366d5e7cef7cc373c09518ab42b507e8d7ee3f72760d578a050e949c9d2?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      className="img-column"
                      alt="Seaweed"
                    />
                  </Link>
                </div>
                <div className="column-2">
                <Link to='/bloghome8'>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/337ad4c98e9e0f2b407a01c448526149ca688e44ac85cfdc7369b9005826fbbe?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                    className="img-column-2"
                    alt="Berries"
                  /></Link>
                </div>
                <div className="column-3">
                <Link to="/bloghome5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/77fb8fb409a935da8565e13b8c29108a6facb890ea9cf870317fe0da7a6ab583?apiKey=828441a8e65f4aacaee2ce94caf37306&"
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
                        <div className="div-text-5">1 February 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-6">By Bima</div>
                      </div>
                      <div className="div-text-7">
                        How Does Sleep Affect Your Blood Pressure?
                      </div>
                    </div>
                  </div>
                  <div className="column-text-2">
                    <div className="div-text-8">
                      <div className="div-text-9">
                        <div className="div-text-10">2 February 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-11">By Ginta</div>
                      </div>
                      <div className="div-text-12">
                        The Skincare Effect: How Skincare Take Care Your Skin &
                        Mental Health.
                      </div>
                    </div>
                  </div>
                  <div className="column-text-3">
                    <div className="div-text-13">
                      <div className="div-text-14">
                        <div className="div-text-15">3 February 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-16">By Ubay</div>
                      </div>
                      <div className="div-text-17">
                        Why is Yoga Good for Flexibility & Strength? Here is Top
                        Yoga Poses To Flexibility
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

export default Trend3;
