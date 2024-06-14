import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";

function BB11() {
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
            <h1 class="berry-title">Your Mood Depends On Your Music</h1>
            <div class="berry-author">By Ginta</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2712ea7874e1a3be2e276025ab00c7dc37c6c0a54c04007013695b66c5959677?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              alt="A collection of healthy berries"
              class="berry-main-image"
            />
          </div>
          <div class="berry-meta-info">
            <time datetime="2024-02-19" class="berry-date">
              10 Oktober 2023
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
            How does music affect your well-being, learning, and happiness? A
            survey by AARP suggests that music listeners have
            higher mental well-being and lower anxiety and depression. Music has
            a remarkable ability to influence mood positively. By activating
            various regions of the brain associated with pleasure and emotion,
            listening to music can lead to the release of neurotransmitters like
            dopamine, resulting in feelings of happiness and pleasure.
            Additionally, music can evoke strong emotional responses based on
            its tempo, rhythm, melody, and lyrics, with upbeat and lively music
            inducing excitement and joy, while slow-tempo music promotes
            relaxation.
            <br />
            <br />
            Furthermore, certain songs may be associated with positive memories
            or experiences, eliciting feelings of nostalgia and happiness. Music
            also serves as a distraction from negative thoughts and stressors,
            offering relief and comfort during difficult times. Upbeat and
            motivational music can boost energy levels, increase motivation, and
            enhance performance, while sharing music with others fosters social
            connection and camaraderie. Ultimately, music provides a means of
            self-expression and emotional release, promoting self-awareness,
            validation, and catharsis. Incorporating music into daily life can
            have a profound effect on mood, enhancing happiness, relaxation,
            motivation, and overall emotional well-being.
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
                <div className="column-3">
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

export default BB11;
