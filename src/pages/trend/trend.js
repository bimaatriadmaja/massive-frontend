import React from "react";
import { Link } from "react-router-dom";
// import 'font-awesome/css/font-awesome.min.css';
import "../../assets/csss/trend.css";
// import "../../assets/csss/animates.css";

function Trend() {
  return (
    <section class="custom-content-section">
      <article class="custom-content-container">
        <div class="custom-content-row animate__animated animate__fadeInDown">
          <div class="custom-text-column">
            <div class="custom-text-content">
              <h2 class="custom-title animate__animated animate__fadeInDown animate__delay-1s">
                Why Berries Improve Your Heart Health?
              </h2>
              <p class="custom-description animate__animated animate__fadeInDown animate__delay-2s">
                Berries are a good source of polyphenols, especially
                anthocyanins, micronutrients, and fiber. In epidemiological and
                clinical studies, these constituents have ...
              </p>
              <a
                href="/trend1"
                class="custom-read-more-btn animate__animated animate__fadeInDown animate__delay-3s"
                tabindex="0"
              >
                READ MORE
              </a>
            </div>
          </div>
          <div class="custom-image-column">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a92c993ab699704d72ce86a57ff79e1d2735e083851e3ba4b5f66b9f2f2b9e6a?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              alt="Berries and Heart Health"
              class="custom-image"
            />
          </div>
        </div>
      </article>
      <article class="custom-content-container">
        <div class="custom-content-row-2" data-aos="fade-up">
          <div class="custom-image-column-2" data-aos="zoom-in">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/97dbec26b86c1cc7237dfcedef91fd0db4057a78a9bc64a308ee8e64d38f22fe?apiKey=828441a8e65f4aacaee2ce94caf37306&"
              alt="Skincare products"
              class="custom-image"
            />
          </div>
          <div class="custom-text-column" data-aos="fade-left">
            <div class="custom-text-column-2">
              <h2 class="custom-title-2">Give A Drink To Your Skin!</h2>
              <p class="custom-description-2">
                Moisturizers improves skin hydration and increases stratum
                corneum water content by directly providing water to the skin
                from their water phase and increasing occlusion to reduce
                trans-epidermal water loss.
              </p>
              <a href="/trend2" class="custom-read-more-btn-2" tabindex="0">
                READ MORE
              </a>
            </div>
          </div>
        </div>

        <div class="gallery-image-row" data-aos="fade-up">
          <div
            class="gallery-image-column"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Link to="/milk">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04c2c4043fb0d5ad6fff6d4d6b0ddc7b30298ffcc3f3eb64ff4678525e19d672?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt=""
                class="gallery-image-item"
              />
            </Link>
          </div>
          <div
            class="gallery-image-column"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <Link to="/mat">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3474e24f0e73e65bd5339f46b2a7f7683d45825a8e8b370124594963fcb46eb5?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt=""
                class="gallery-image-item"
              />
            </Link>
          </div>
          <div
            class="gallery-image-column"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <Link to="/bread">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/be207e1510cd37aae0764a11e3ae9d766130b57f8892ce781e2a0b86e548de58?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt=""
                class="gallery-image-item"
              />
            </Link>
          </div>
          <div
            class="gallery-image-column"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Link to="/scrub">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e49647cab747cdca7e6675ad208be29ad0e1e19dfc1c4a7b99fa35745ab39d19?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt=""
                class="gallery-image-item"
              />
            </Link>
          </div>
        </div>

        <article class="peach-article-container">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f959a111b6de1dffeb0e494ee0732e89ab04740895fcce56ca718ce7b7d59d55?apiKey=828441a8e65f4aacaee2ce94caf37306&"
            class="peach-article-image"
            alt="Peach skin care product"
          />
          <h2 class="peach-article-title">Peach : Your Natural Skinfood</h2>
          <p class="peach-article-content">
            Peach helps repair and regenerate skin tissue and protects the skin
            against external influences. It is often a part of anti-aging
            cosmetics because of its ability to tighten the skin and{" "}
          </p>
          <p class="peach-article-author">By Ginta</p>
          <Link to="/trend3">
            <button class="peach-read-more-button" tabindex="0">
              READ MORE
            </button>
          </Link>
        </article>
        <section class="content-columns" data-aos="fade-up">
          <div class="content-column" data-aos="zoom-in" data-aos-delay="100">
            <div class="content-group">
              <Link to="/trend4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f8cc0cbde0f60dbe4903f9df530f70a9be6893968476803b1928205b577c756?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  class="content-image-1"
                  alt=""
                />
              </Link>
              <Link to="/trend5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a16e134cd688486bf50a51da3ca216002420c526bfeb8a6de16c3b0f9246bbf?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  class="content-image-2"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div class="content-column" data-aos="zoom-in" data-aos-delay="200">
            <div class="content-group">
              <Link to="/trend6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/422f71dd847f0287ab165e4be0fcaa179cc4685e57b5eac344c3328be0a56f38?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  class="content-image-3"
                  alt=""
                />
              </Link>
              <Link to="/trend7">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/068dba989720dc86799a16e6ec67852894b98bb556a3069b4eeece60e7c04a34?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  class="content-image-4"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div class="content-column" data-aos="zoom-in" data-aos-delay="300">
            <div class="content-group">
              <Link to="/trend8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a18b643bcf8bb537a10bd581aec9b7097a033d29fb849001880cd5ed0c0e261?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  class="content-image-5"
                  alt=""
                />
              </Link>
              <Link to="/trend9">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ecd8788fea51cd8f7918336ca6a64028d7d4ea95545732c10103eecc470d098?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                  class="content-image-6"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </section>

        <section class="trend-image-text-section" data-aos="zoom-in">
          <article class="trend-image-text-wrapper">
            <div class="trend-image-column">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a8ace46c0b269dbdb9c5954c79bc5b352415ca53c3627fd001cde6d6d3a1c2e?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="A depiction of natural proteins"
                class="trend-responsive-image"
              />
            </div>
            <div class="trend-text-column">
              <div class="trend-text-box">
                <h2 class="trend-main-title">The Natural Proteins You Need</h2>
                <p class="trend-text-content">
                  Protein helps repair and build your body's tissues. It drives
                  metabolic reactions, maintains pH and fluid balance, and keeps
                  the immune ...
                </p>
                <Link to="/trend10">
                  <button class="trend-read-more-button" tabindex="0">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          </article>
        </section>

        <section class="trend-content-section" data-aos="zoom-in">
          <article class="trend-content-wrapper">
            <div class="trend-text-column">
              <div class="trend-content-box">
                <h2 class="trend-content-title">
                  Everything You Need To Know About Fish For Your Kiddo
                </h2>
                <p class="trend-content-description">
                  In addition, oily fish (salmon, trout, mackerel, herring and
                  sardines) are rich in vitamins A and D. Vitamin A is essential
                  for healthy skin and eyes...
                </p>
                <Link to="/trend11">
                  <button class="trend-action-button" tabindex="0">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
            <div class="trend-image-column">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/522651a80538ede3c2072d19a651e85272912ca41f882a432e72a734794faeae?apiKey=828441a8e65f4aacaee2ce94caf37306&"
                alt="Oily fish variety for kids"
                class="trend-responsive-image"
              />
            </div>
          </article>
        </section>
      </article>
    </section>
  );
}

export default Trend;
