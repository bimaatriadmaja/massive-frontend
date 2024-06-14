import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/bb2bg.png";

function BB2() {
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
            <Link className="isi-3" to="/blogB">
              Back
            </Link>
          </div>
          <div className="isi-4">
            <div className="isi-5">Does Book Affect Your Vision?</div>
            <div className="isi-6">By Wavi</div>
          </div>
          <div className="div-border">
            <div className="border-2">7 February 2022</div>
            <div className="border-3" style={{ color: "#fff" }}>
              Yoga comprises various components, each contributing to its
              holistic benefits:
              <br />
              1. Asanas (Physical Postures) are the physical postures practiced
              in yoga. They not only improve flexibility, strength, and balance
              but also promote relaxation and stress relief. Common asanas
              include downward-facing dog (Adho Mukha Svanasana), tree pose
              (Vrksasana), and cobra pose (Bhujangasana).
              <br />
              2. Pranayama (Breath Control) consists of breathing exercises that
              focus on controlling the breath. By regulating the breath,
              practitioners learn to calm the mind, increase energy levels, and
              improve respiratory function. <br />
              3. Meditation is a fundamental aspect of yoga that involves
              training the mind to achieve a state of focused awareness and
              inner peace. Regular meditation practice can reduce stress,
              enhance concentration, and cultivate mindfulness.
              <br />
              4. Yamas and Niyamas (Ethical Guidelines), these are moral and
              ethical principles that guide yogic living. Yamas include
              principles such as non-violence (ahimsa), truthfulness (satya),
              and non-attachment (aparigraha), while niyamas encompass practices
              like self-discipline (tapas), contentment (santosha), and
              self-study (svadhyaya). <br />
              5. Dhyana (Concentration) refers to the practice of concentration,
              often achieved through focused meditation or mindfulness
              techniques. Cultivating concentration enhances mental clarity,
              emotional stability, and spiritual insight. <br />
              6. Mantra (Chanting) involves the repetition of sacred sounds,
              words, or phrases to induce a meditative state and evoke specific
              qualities or energies. Chanting mantras can quiet the mind, uplift
              the spirit, and deepen one's connection to the divine.
              <br />
              <br />
              The regular practice of yoga offers a multitude of physical,
              mental, and emotional benefits:<br/> 
              1. Improved Flexibility and Strength,
              yoga asanas help increase flexibility and strength in the muscles
              and joints, reducing the risk of injury and enhancing overall
              mobility. <br/>
              2. Stress Reduction, The combination of physical movement,
              breathwork, and meditation in yoga promotes relaxation and reduces
              stress levels, leading to a greater sense of calm and well-being.<br/>
              3. Enhanced Mental Clarity, yoga cultivates mental clarity and focus
              by calming the fluctuations of the mind. This increased awareness
              can improve cognitive function, memory, and decision-making
              skills. <br/>
              4. Emotional Balance, through practices like meditation and
              pranayama, yoga fosters emotional resilience and equanimity,
              allowing practitioners to navigate life's challenges with greater
              ease and grace. <br/>
              5. Better Sleep, yoga promotes relaxation and
              relieves tension, making it easier to fall asleep and experience
              deeper, more restorative rest. <br/>
              6. Increased Mindfulness, by
              emphasizing present-moment awareness, yoga helps individuals
              become more mindful in their daily lives, leading to greater
              appreciation of life's experiences and improved overall happiness.
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
                <div className="column-3">
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

export default BB2;
