import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";

function BA1() {
  return (
    <div id="wrapper" style={{ backgroundColor: "#D2D5C6" }}>
      <main id="content">
        <section class="berry-page-container">
          <div class="berry-content-section">
          <div className="isi-2" style={{marginTop:'20px', marginLeft:'-10px'}}>
                <button className="button-back" data-el="button-1" >
                  <div _text=""></div>
                </button>
                <Link className="isi-3" to="/blogA">
                  Back
                </Link>
              </div>
            <h1 class="berry-title">
              Healthy Menus for a Quality Lifestyle: <br />
              Food Choices for Your Well-Being
            </h1>
            <div class="berry-author">By Bima</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e820d087b5e932ec6a023e218d8fe2bfdb34312164923c39eca13b5305a14c8?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              alt="A collection of healthy berries"
              class="berry-main-image"
            />
          </div>
          <div class="berry-meta-info">
            <time datetime="2024-02-19" class="berry-date">
              5 November 2023
            </time>
            <div class="berry-social-icons">
              <Link to="#">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef61f379bb1033ba64993b88d5c2dfdb1a00a3b317c5331eadb9efd72c9feb53?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Share on Social Media"
                  class="berry-icon"
                />
              </Link>
              <Link to="#">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f1bcb12d740f4a489625dbe456213613a2c3d265177081e2c93a9cbd627fbf5?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  alt="Bookmark"
                  class="berry-icon-large"
                />
              </Link>
            </div>
          </div>
          <article class="berry-article-content">
            Living a healthy lifestyle begins with what you put on your plate.
            Starting your day with a nutritious breakfast sets the tone for the
            rest of the day. Overnight oats, made by combining rolled oats,
            almond milk, chia seeds, Greek yogurt, mixed berries, and honey, are
            high in fiber, protein, and antioxidants. A veggie omelette with
            eggs, spinach, bell peppers, onions, tomatoes, and feta cheese
            offers a nutrient boost from the veggies and protein from the eggs.
            <br />
            <br />
            For lunch, a balanced meal keeps you focused and prevents afternoon
            slumps. Quinoa salad with chickpeas, cucumber, cherry tomatoes, red
            onion, parsley, olive oil, and lemon juice is a powerhouse of
            nutrients. A turkey and avocado wrap on a whole grain wrap with
            hummus, spinach, and tomato provides lean protein, healthy fats, and
            fiber. Dinner should be satisfying but not overly heavy. Grilled
            salmon with steamed vegetables like broccoli, carrots, and zucchini
            is high in heart-healthy omega-3 fatty acids. Stir-fried tofu with
            bell peppers, broccoli, and snap peas offers plant-based protein and
            a variety of vitamins and minerals. Healthy snacks, like Greek
            yogurt topped with honey and nuts or apple slices with almond
            butter, keep your energy levels stable throughout the day by
            combining protein, healthy fats, and fiber.
            <br />
            <br /> Staying hydrated is crucial for overall health, so aim to
            drink at least eight glasses of water daily, and consider herbal
            teas or infused water with lemon, cucumber, or berries for added
            flavor. Incorporating these healthy meal ideas into your daily
            routine ensures you get the nutrients your body needs to thrive.
            Remember, balance and variety are key to a healthy diet. Happy
            eating! Feel free to share your favorite healthy recipes or meal
            ideas in the comments below. Together, we can inspire each other to
            live healthier and happier lives!
            <br />
            <br />
          </article>
        </section>
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
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/525f0ea8af899c3c554dabe27c5f116ac042eca460cfc9e5224e8e746a00516e?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      alt="Image description"
                    />
                  </Link>
                </div>
                <div className="column-2">
                  <Link to="/ba10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/800db07f4a7e1e847de9294bf98d2149f5222cb0fd4bcbb56894d35a6ff512b7?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      alt="Image description"
                    />
                  </Link>
                </div>
                <div className="column-2">
                <Link to='/ba11'>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1a24f10a37924a5ec8ea15c41ab2aa33b0fd5b876e045619a7c220a0b5242d0?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                    alt="Image description"
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
                        <div className="div-text-6">By Wavi</div>
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

export default BA1;
