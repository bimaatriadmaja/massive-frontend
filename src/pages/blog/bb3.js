import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";

function BB3() {
  return (
    <div id="wrapper" style={{ backgroundColor: "#D2D5C6" }}>
      <main id="content">
        <section class="berry-page-container">
          <div class="berry-content-section">
          <div className="isi-2" style={{marginTop:'20px', marginLeft:'-10px'}}>
                <button className="button-back" data-el="button-1" >
                  <div _text=""></div>
                </button>
                <Link className="isi-3" to="/blogB">
                  Back
                </Link>
              </div>
            <h1 class="berry-title">
              The Health Benefits of Tennis:
              <br />A Comprehensive Guide
            </h1>
            <div class="berry-author">By Wavi</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/27fef55ef4c9cab921e8944b3493e3e10f189a2768576f46a347a63a69b3dcb6?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              alt="A collection of healthy berries"
              class="berry-main-image"
            />
          </div>
          <div class="berry-meta-info">
            <time datetime="2024-02-19" class="berry-date">
              14 February 2024
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
            One of the most prominent benefits of playing tennis is its positive
            impact on cardiovascular health. The fast-paced nature of the game
            requires constant movement, engaging large muscle groups and
            elevating the heart rate. Regular participation in tennis helps
            strengthen the heart and lungs, improving their efficiency in
            delivering oxygen-rich blood to the body's tissues. By promoting
            cardiovascular fitness, tennis reduces the risk of heart disease,
            stroke, and other cardiovascular conditions, contributing to a
            longer, healthier life.
            <br />
            <br />
            Tennis is a physically demanding sport that challenges the body's
            strength and endurance. The dynamic movements involved in hitting
            the ball, sprinting across the court, and changing direction require
            muscular strength and power. Additionally, the length of tennis
            matches can test one's endurance, enhancing stamina and resilience
            over time. Through consistent practice and gameplay, tennis players
            develop stronger muscles, particularly in the legs, arms, and core,
            which support overall physical health and performance.
            <br />
            <br />
            Flexibility and agility are essential components of tennis that
            contribute to improved performance and injury prevention. The wide
            range of motions involved in swinging the racket, reaching for
            shots, and maneuvering around the court requires flexibility in the
            muscles and joints. Tennis players develop greater flexibility
            through regular stretching and dynamic movements, which not only
            enhances performance but also reduces the risk of muscle strains and
            injuries. Moreover, the quick footwork and rapid changes in
            direction during gameplay promote agility, coordination, and
            balance, further enhancing overall athleticism.
            <br />
            <br />
            Beyond its physical benefits, tennis offers significant advantages
            for mental health and well-being. Engaging in regular physical
            activity, such as playing tennis, stimulates the release of
            endorphins, neurotransmitters in the brain that promote feelings of
            happiness and relaxation. The immersive nature of the game also
            serves as a form of mindfulness, as players focus their attention on
            the present moment, diverting their thoughts from stressors and
            worries. Furthermore, the social aspect of tennis, whether playing
            with friends or joining a local club, fosters social connections and
            a sense of belonging, which are crucial for mental and emotional
            well-being.
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
                  <Link to="/bb5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/43c6fcc984b36491070196f481383fcb6f851fb1b666c1091699793a69f1288c?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      className="img-column"
                      alt="Seaweed"
                    />
                  </Link>
                </div>
                <div className="column-2">
                  <Link to="/bb6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a571dcf9f3f085d82c7b9248138487c044cecb8ab41847479a57b088d9c78108?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                      className="img-column-2"
                      alt="Berries"
                    />
                  </Link>
                </div>
                <div className="column-2">
                <Link to='/bb7'>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/997f298081df340db6a10917c1e0b81e5e66df146ba4427595dff6b179ef78c0?apiKey=828441a8e65f4aacaee2ce94caf37306&"
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
                        <div className="div-text-5">4 January 2024</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-6">By Wavi</div>
                      </div>
                      <div className="div-text-7">
                        The Gym in the Early Years:
                        <br />
                        Starting Your Health and Fitness Journey on the Right
                        Point
                      </div>
                    </div>
                  </div>
                  <div className="column-text-2">
                    <div className="div-text-8">
                      <div className="div-text-9">
                        <div className="div-text-10">25 November 2023</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-11">By Wavi</div>
                      </div>
                      <div className="div-text-12">
                        Cycling: The Key to Optimal Heart Health
                      </div>
                    </div>
                  </div>
                  <div className="column-text-3">
                    <div className="div-text-13">
                      <div className="div-text-14">
                        <div className="div-text-15">19 September 2023</div>
                        <button className="button-articles" data-el="button-1">
                          <div _text=""></div>
                        </button>
                        <div className="div-text-16">By Wavi</div>
                      </div>
                      <div className="div-text-17">
                        Billiards: Having Fun and Challenging Brain Stimulation
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

export default BB3;
