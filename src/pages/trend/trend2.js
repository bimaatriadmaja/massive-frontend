import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/trend2.png";

function Trend2() {
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
            <div className="isi-5">
              Learn About Basic Skincare
              <br /> Is a Life Changing
            </div>
            <div className="isi-6">By Ginta</div>
          </div>
          <div className="div-border-t2">
            <div className="border-2-rest1">7 February 2023</div>
            <div className="border-3-rest1" style={{ color: "#000000" }}>
              <br />
              Basic skincare involves a simple yet effective routine to maintain
              healthy, clean, and well-nourished skin. Here are the key steps in
              a basic skincare routine:<br /><br />1. Cleansing<br /> Start by cleansing your skin
              to remove dirt, oil, makeup, and other impurities that accumulate
              throughout the day. Choose a gentle cleanser suitable for your
              skin type (such as gel, cream, or foaming cleanser) and use it
              morning and night to cleanse your face thoroughly. <br /><br />2. Toning<br /> After
              cleansing, use a toner to balance the skin's pH levels, remove any
              remaining traces of dirt or cleanser, and prepare the skin for the
              next steps in your skincare routine. Apply toner to a cotton pad
              and gently swipe it across your face and neck, avoiding the
              delicate eye area. <br /><br />3. Moisturizing <br />Moisturizer is essential for
              hydrating the skin, maintaining its moisture barrier, and
              protecting it from environmental stressors. Choose a moisturizer
              appropriate for your skin type (such as lightweight for oily skin
              or rich for dry skin) and apply it to your face and neck after
              cleansing and toning. Don't forget to apply moisturizer to other
              areas of your body that may need hydration, such as hands and
              elbows.<br /><br />4. Sun Protection Protecting your skin from the sun's harmful
              UV rays is crucial for preventing premature aging, sun damage, and
              skin cancer. Apply a broad-spectrum sunscreen with SPF 30 or
              higher to your face and any exposed skin daily, even on cloudy
              days and during winter months.<br /><br />5. Optional Steps<br /> Depending on your
              skincare needs and concerns, you may choose to incorporate
              additional steps into your routine, such as exfoliation, serums,
              masks, or treatments. Exfoliating 1-3 times per week can help
              remove dead skin cells and promote cell turnover, while serums and
              treatments can target specific concerns such as acne,
              hyperpigmentation, or aging.<br /><br />6. Healthy Lifestyle Habits<br /> In addition
              to a regular skincare routine, maintaining a healthy lifestyle can
              contribute to overall skin health. This includes staying hydrated
              by drinking plenty of water, eating a balanced diet rich in
              fruits, vegetables, and antioxidants, getting enough sleep,
              managing stress, and avoiding habits like smoking and excessive
              alcohol consumption that can negatively impact skin health.<br /><br /> By
              following these basic skincare steps and incorporating healthy
              lifestyle habits, you can achieve clean, clear, and radiant skin.
              Remember to be consistent with your skincare routine and listen to
              your skin's needs to determine the products and practices that
              work best for you
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
                <div className="column-2">
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

export default Trend2;
