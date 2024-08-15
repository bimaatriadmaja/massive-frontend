import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./event.css";

function Event() {
  return (
    <section className="event-content-section">
  <section className="event-feed-section" data-aos="fade-in">
    <Link to='/payment'>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8bf51e9be6432454ec789dc14ee4b2c6233f39d980c59e3fd145f78abe1fe0c?apiKey=828441a8e65f4aacaee2ce94caf37306&"
        className="event-cover-image"
        alt=""
      />
    </Link>
    <div className="event-feed-content">
      <div className="event-tab-menu" data-aos="fade-up" data-aos-delay="100">
        <Link to='/event'><div className="event-tab-event" style={{ color: '#fff' }}>EVENTS</div></Link>
        <Link to='/feeds'><div className="event-tab-feed" style={{ color: '#fff' }}>FEEDS</div></Link>
      </div>
      <div className="event-see-other-events" tabIndex="0" role="button" data-aos="fade-up" data-aos-delay="200">
        SEE OTHER EVENTS
      </div>
    </div>
  </section>
  
  <section className="event-title-wrapper" data-aos="fade-up" data-aos-delay="300">
    <div className="event-half-width">
      <div className="event-full-width-title">MHY Marathon 2024</div>
    </div>
    <div className="event-half-width">
      <div className="event-full-width-title">Easy Way to Relax Yourself</div>
    </div>
  </section>
  
  <section className="event-image-section" data-aos="fade-up" data-aos-delay="400">
    <div className="event-image-row">
      <div className="event-half-width">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/de1ace00e1088bbf8764c51d61f32401c9c38750df4f5080e6b63484e60b1df2?apiKey=828441a8e65f4aacaee2ce94caf37306&"
          className="event-image-half-width"
          alt=""
        />
      </div>
      <div className="event-half-width">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/219d1c5a801dca0a3caf1123ea576ecb3d299f09b5a66c3f37286c85bd58ee69?apiKey=828441a8e65f4aacaee2ce94caf37306&"
          className="event-image-half-width"
          alt=""
        />
      </div>
    </div>
  </section>
  
  <section className="event-action-wrapper" data-aos="fade-up" data-aos-delay="500">
    <div className="event-half-width">
      <div className="event-action" tabIndex="0" role="button">
        SEE EVENT
      </div>
    </div>
    <div className="event-half-width">
      <div className="event-action" tabIndex="0" role="button">
        SEE EVENT
      </div>
    </div>
  </section>
  
  <section className="event-additional-event-wrapper" data-aos="fade-up" data-aos-delay="600">
    <div className="event-half-width">
      <div className="event-additional-title">Set Your Goals</div>
    </div>
    <div className="event-half-width">
      <div className="event-additional-title">Foods for Aging</div>
    </div>
  </section>
  
  <section className="event-additional-image-section" data-aos="fade-up" data-aos-delay="700">
    <div className="event-additional-image-row">
      <div className="event-half-width">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/138f7cf893d7f9a6932cf19bb75748b20177253ce505e43e7120c87c1f732ccb?apiKey=828441a8e65f4aacaee2ce94caf37306&"
          className="event-additional-image-half-width"
          alt=""
        />
      </div>
      <div className="event-half-width">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/246c0c21604b693df405e7f61d2ef2fd2f78c149e743e44649fd82fc07e69fce?apiKey=828441a8e65f4aacaee2ce94caf37306&"
          className="event-additional-image-half-width"
          alt=""
        />
      </div>
    </div>
  </section>
  
  <section className="event-additional-action-wrapper" data-aos="fade-up" data-aos-delay="800">
    <div className="event-half-width">
      <div className="event-additional-action" tabIndex="0" role="button">
        SEE EVENT
      </div>
    </div>
    <div className="event-half-width">
      <div className="event-additional-action" tabIndex="0" role="button">
        SEE EVENT
      </div>
    </div>
  </section>
</section>

  );
};

export default Event;
