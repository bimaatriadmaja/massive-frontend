import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/seaweed.png";

function BA2() {
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
              The Delights and Benefits of Seaweed: <br />
              Introducing the Ocean on Your Plate
            </div>
            <div className="isi-6">By Wavi</div>
          </div>
          <div className="div-border">
            <div className="border-2">7 February 2022</div>
            <div className="border-3" style={{ color: "#fff" }}>
              Seaweed, which is often found in the depths of the sea, has been
              an integral part of the diet in many cultures around the world.
              Apart from providing a delicious taste to dishes, seaweed also has
              a number of amazing health benefits. Let's explore the
              deliciousness and extraordinary benefits of this seaweed.
              <br />
              <br />
              Seaweed has a unique taste, ranging from savory to mildly sweet,
              depending on the type. Some of the most commonly consumed types of
              seaweed are nori, wakame, hijiki, and kombu. Here are some ways to
              enjoy delicious seaweed:
              <br />
              <br />
              1. Nori for Sushi Nori is a type of seaweed best known for its use
              as a sushi wrapper. Soft and crumbly, nori gives sushi its
              distinctive savory flavor, making it an essential ingredient in
              this popular Japanese dish.
              <br />
              <br />
              2. Wakame in Miso Soup Wakame is a seaweed often used in Japanese
              cooking, especially in miso soup. Wakame adds a fresh sea flavor
              and creamy texture to the soup, making it a dish that is great to
              enjoy in both cold and hot weather.
              <br />
              <br />
              3. Hijiki as a Salad Hijiki is a type of seaweed that is darker in
              color and has a slightly sweet taste. Usually soaked and cooked,
              hijiki is often used in Japanese and Korean cooking. In salad
              form, hijiki adds a unique flavor and texture
              <br />
              Dhyana (Concentration) refers to the practice of concentration,
              often achieved through focused meditation or mindfulness
              techniques. Cultivating concentration enhances mental clarity,
              emotional stability, and spiritual insight.
              <br />
              <br />
              In addition to their deliciousness, seaweeds are also rich in
              nutrients and have a number of amazing health benefits:
              <br />
              <br />
              1. Rich in Minerals Seaweed is rich in minerals like iodine,
              calcium, magnesium and iron. These minerals are important for bone
              health, thyroid function, and the immune system.
              <br />
              <br />
              2. Source of Fiber Seaweed contains dietary fiber which is
              important for healthy digestion and regulating blood sugar.
              <br />
              <br />
              3. Healthy Fatty Acids Some types of seaweed, such as nori,
              contain omega-3 fatty acids which are beneficial for heart and
              brain health.
              <br />
              <br />
              4. Antioxidants Seaweed contains antioxidants such as flavonoids
              and carotenoids which help fight free radicals and reduce the risk
              of chronic diseases.
              <br />
              <br />
              5. Improved Metabolism The iodine in seaweed helps regulate the
              body's metabolism, which can support weight loss and better
              energy.
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
                  <Link to="/ba5">
                    <img
                      loading="lazy"
                      src="/images/Mask group.png"
                      className="img-column"
                      alt="Seaweed"
                    />
                  </Link>
                </div>
                <div className="column-2">
                <Link to='/ba6'>
                  <img
                    loading="lazy"
                    src="/images/Rectangle 23917.png"
                    className="img-column-2"
                    alt="Berries"
                  />
                  </Link>
                </div>
                <div className="column-2">
                <Link to='/ba7'>
                  <img
                    loading="lazy"
                    src="/images/image 38.png"
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

export default BA2;
