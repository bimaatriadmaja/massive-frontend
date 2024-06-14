import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/bread.png";

function Bread() {
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
            <div className="isi-5">Why Bread for Breakfast?</div>
            <div className="isi-6">By Wavi</div>
          </div>
          <div className="div-border">
            <div className="border-2">7 April 2023</div>
            <div className="border-3" style={{ color: "#fff" }}>
              Breakfast is one of the most important meals of the day. It
              provides the energy necessary to begin daily activities and
              prepares the body for the tasks that await. Among the various
              breakfast options available, bread is often a favorite choice for
              many people. <br /><br />
              1. Healthy Source of Carbohydrates<br /> Bread is a healthy
              source of carbohydrates, which provide the energy necessary for
              physical and mental activity. The complex carbohydrates in bread
              provide energy gradually, helping to keep blood sugar levels
              stable and avoiding sudden hunger pangs. <br /><br />2. Rich in Fiber <br />Many
              types of bread, especially whole wheat bread, contain fiber which
              is important for healthy digestion. Fiber helps keep your stomach
              full longer, prevents constipation, and supports heart health.<br /><br /> 3.
              Provides Essential Nutrients<br /> Bread is also a source of important
              nutrients such as B vitamins, iron and magnesium. B vitamins are
              necessary for the conversion of food into energy, iron helps
              transport oxygen in the blood, and magnesium supports healthy
              nerve and muscle function. <br /><br />4. Flexibility in Topping Choices<br /> One
              of the great advantages of breakfast bread is the flexibility in
              choosing toppings according to taste and nutritional needs. You
              can choose from a variety of toppings such as peanut butter,
              cheese, eggs, avocado, or even fresh fruit to add flavor and
              nutrition to your breakfast. <br /><br />5. Suitable for Busy Lifestyles <br />Bread
              is a quick and easy to prepare breakfast option, perfect for busy
              lifestyles. Even with limited time, you can make a nutritious and
              satisfying breakfast with just a few simple steps.<br /><br /> With so many
              benefits on offer, it is no surprise that breakfast bread is a
              popular choice and appreciated by many people around the world.
              Get ready to start your day with energy and enjoyment by choosing
              breakfast bread as the main menu
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

export default Bread;
