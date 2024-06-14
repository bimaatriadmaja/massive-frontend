import React from "react";
import { Link } from "react-router-dom";
import "../../assets/csss/styless.css";
import "../../assets/csss/animates.css";
import seaweedImage from "../../assets/images/img/rest3bg.png";

function Rest3() {
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
            <Link className="isi-3" to="/rest">
              Back
            </Link>
          </div>
          <div className="isi-4-rest1">
            <div className="isi-5">
              Streching That You Can Do For <br />
              Better Sleep
            </div>
            <div className="isi-6">By Ginta</div>
          </div>
          <div className="div-border-rest3">
            <div className="border-2-rest1">11 Desember 2023</div>
            <div className="border-3-rest1" style={{ color: "#000000" }}>
              Stretching before bedtime can help relax your muscles, relieve
              tension, and prepare your body for sleep. Here's a gentle
              stretching routine that you can try before bedtime:<br /><br />
              1. Neck Stretch:<br />
              Sit or stand tall and slowly tilt your head to one side, bringing
              your ear towards your shoulder. Hold the stretch for 15-30
              seconds, then switch sides. Repeat 2-3 times on each side to
              release tension in the neck and shoulders. <br /><br />
              2. Shoulder Stretch: <br />Bring
              your arms behind your back and clasp your hands together. Gently
              straighten your arms and lift them away from your body, feeling a
              stretch across your chest and shoulders. Hold for 15-30 seconds,
              then release. Repeat a few times to relieve upper body tension<br /><br />
              3. Upper Back Stretch <br />Sit or stand tall and interlace your fingers in
              front of you. Extend your arms straight out in front of your
              chest, rounding your upper back and shoulders as you reach
              forward. Hold for 15-30 seconds, then release. Repeat a few times
              to stretch the upper back and shoulders. <br /><br />
              4. Spinal Twist <br />Lie on your
              back with your knees bent and feet flat on the floor. Extend your
              arms out to the sides in a T position. Gently lower your knees to
              one side, keeping your shoulders grounded on the floor. Hold for
              15-30 seconds, then switch sides. Repeat 2-3 times on each side to
              release tension in the spine and lower back.<br /><br />
              5. Hamstring Stretch <br />Sit
              on the floor with one leg extended straight out in front of you
              and the other leg bent. Reach forward towards your toes, keeping
              your back straight. Hold for 15-30 seconds, then switch legs.
              Repeat a few times on each side to stretch the hamstrings and
              lower back.<br /><br />
              6. Child's Pose <br />Kneel on the floor with your knees spread
              apart and toes touching. Sit back on your heels and reach your
              arms forward, lowering your chest towards the floor. Rest your
              forehead on the ground and hold for 15-30 seconds, breathing
              deeply into your lower back.
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

export default Rest3;
