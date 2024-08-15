import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/bh1.png";

function BlogHome1() {
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
            <div className="isi-5">Best Healthy Delicious Meal</div>
            <div className="isi-6">By Ginta</div>
          </div>
          <div className="div-border-bh1">
            <div className="border-2-rest1">6 May 2023</div>
            <div className="border-3-rest1" style={{ color: "#000000" }}>
            <br/>
              Find easy and flavorful recipes for healthy dinners that are ready
              in just 20 minutes. From pasta and chicken to fish and rice, these
              dishes are satisfying and quick. <br /><br />
              1. Lemon Garlic Shrimp Pasta Cook<br />
              - whole wheat spaghetti according to package instructions. <br />
              -In a skillet, heat olive oil over medium heat and add minced garlic.
              Cook for 1-2 minutes until fragrant.<br />
              - Add raw shrimp to the skillet
              and cook until pink, about 3-4 minutes.<br />
              - Toss cooked pasta with
              shrimp, lemon zest, lemon juice, salt, pepper, and chopped
              parsley. <br /><br />2. Stir-Fried Chicken and Vegetables <br />
              - Slice chicken breast
              into thin strips and season with salt and pepper. <br />- In a wok or
              large skillet, heat sesame oil over high heat.<br />- Add chicken and
              stir-fry until cooked through, about 5-6 minutes. Add thinly
              sliced bell peppers, broccoli florets, and snap peas to the
              skillet. Stir-fry for an additional 3-4 minutes.<br />- Drizzle with soy
              sauce and sprinkle with sesame seeds. Serve over brown rice or
              quinoa. <br /><br />3. Caprese Salad with Grilled Chicken <br />- Season chicken breast
              with salt, pepper, and Italian seasoning. Grill or pan-sear until
              cooked through, about 5-6 minutes per side.<br />- Slice fresh tomatoes
              and mozzarella cheese. Arrange on a plate with fresh basil leaves.
              <br />- Drizzle with balsamic glaze and olive oil. Serve alongside the
              grilled chicken. <br /><br />4. Quick Veggie Fried Rice <br />- In a large skillet, heat
              sesame oil over medium heat. Add diced carrots, bell peppers,
              peas, and corn. Stir-fry for 3-4 minutes. <br />- Push vegetables to the
              side of the skillet and add beaten eggs to the empty space.
              Scramble until cooked through, then mix with the vegetables.<br />- Add
              cooked brown rice to the skillet along with soy sauce, garlic
              powder, and a pinch of red pepper flakes. Stir until well combined
              and heated through.<br /><br />5. Salmon with Asparagus <br />- Preheat the oven to
              400°F (200°C). Place salmon fillets on a baking sheet lined with
              parchment paper. <br />- Drizzle with olive oil and season with salt,
              pepper, and lemon zest. Arrange asparagus spears around the
              salmon. <br />- Bake for 12-15 minutes, or until salmon is cooked through
              and flakes easily with a fork. Serve with lemon wedges<br /><br /> These
              recipes are not only quick and easy to make but also packed with
              flavor and nutritious ingredients. Enjoy your healthy dinners!
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
                  />
                  </Link>
                </div>
                <div className="column-2">
                <Link to='/bloghome5'>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/77fb8fb409a935da8565e13b8c29108a6facb890ea9cf870317fe0da7a6ab583?apiKey=828441a8e65f4aacaee2ce94caf37306&"
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
                      The Skincare Effect: How Skincare Take Care Your Skin & Mental Health.
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
                      Why is Yoga Good for Flexibility & Strength? Here is Top Yoga Poses To Flexibility
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

export default BlogHome1;
