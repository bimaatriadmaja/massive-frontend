import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inisialisasi AOS dengan durasi animasi 1 detik
  }, []);

  return (
    <div className="Home">
      <div style={{ backgroundColor: '#D2D5C6' }}>
        <div id="wrapper">
          <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
            <div id="banner-content" className="row clearfix animate__animated animate__fadeInDown animate__delay-0.5s" style={{ backgroundColor: '#99A285' }}>
              <div>
                <div className="main animate__animated animate__fadeInDown animate__delay-1s">
                  <h1>A <span style={{ color: '#fff' }}>Healthy</span> Mind <br /> is an Asset</h1>
                </div>
                <div className="menu">
                  <img src="images/homeimage.png" alt="" className="imgs;" />
                </div>
              </div>
            </div>
          </header>
        </div>

        <main id="content">
          <div className="container-fluid">
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
              <div
                className="col-md-3 group-image"
                style={{ backgroundImage: 'url("images/Group 1000004344.png")' }}
                data-aos="zoom-in"
              >
                <a href='./evaluate'><span style={{ color: '#fff' }}>Evaluate</span></a>
              </div>
              <div
                className="col-md-3 group-image"
                style={{ backgroundImage: 'url("images/Group 1000004343.png")' }}
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <a href='./nutrition'><span style={{ color: '#fff' }}>Nutrition</span></a>
              </div>
              <div
                className="col-md-3 group-image"
                style={{ backgroundImage: 'url("images/Group 1000004284.png")' }}
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <a href='./workout'><span style={{ color: '#fff' }}>Workout</span></a>
              </div>
              <div
                className="col-md-3 group-image"
                style={{ backgroundImage: 'url("images/Group 1000004341.png")' }}
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <a href='./rest'><span style={{ color: '#fff' }}>Rest</span></a>
              </div>
              <div
                className="col-md-3 group-image"
                style={{ backgroundImage: 'url("images/Group 1000004342.png")' }}
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <a href='./selfcare'><span style={{ color: '#fff' }}>Selfcare</span></a>
              </div>
            </div>
          </div>

          <div
            id="banner-content"
            className="row clearfix"
            style={{ backgroundImage: 'url("images/Rectangle 23889.png")', backgroundSize: 'cover', minHeight: '100vh' }}
            data-aos="fade-right"
          >
            <div className="absolute" style={{ marginLeft: "700px" }}>
              <h5><b style={{ color: '#fff' }}>Best Healthy Delicious Meal</b></h5>
              <p>
                Find easy and flavorful recipes for&nbsp;healthy&nbsp;dinners that are ready in just 20 minutes. From pasta and
                chicken to fish and rice, these dishes are satisfying and quick to make with fresh or...
              </p>
              <p>By Ginta <a href="/nutrition2"><button className="btn-readmore" style={{ color: 'black' }}>READ MORE</button></a></p>
            </div>
            <p />
          </div>

          <div
            id="banner-content-wtr"
            className="row clearfix"
            style={{ backgroundColor: '#BEC9AB', marginTop: '3%' }}
            data-aos="fade-left"
          >
            <div className="main-2" style={{ backgroundImage: 'url("images/Rectangle 23886.png")', backgroundSize: 'cover' }}>
              <div className="menu-2">
                <div className="absolute" style={{ marginLeft: "700px" }}>
                  <h5><b style={{ color: '#000' }}>Why Water?</b></h5>
                  <p style={{ color: '#000' }}>
                    Water brings nutrients to all the cells and oxygen to our brain. Water enables nutrients, proteins, amino
                    acids, glucose and other compounds to be consumed and assimilated by the body.
                  </p>
                  <a href="/bloghome2"><button className="btn-readmore-wtr">READ MORE</button></a>
                  <p style={{ color: '#000', display: 'flex', justifyContent: 'flex-end' }}>By Ginta
                  </p></div>
              </div>
            </div>
          </div>

          <div
            id="banner-content-wtr"
            className="row clearfix"
            style={{ backgroundColor: '#BEC9AB', marginTop: '3%' }}
            data-aos="fade-right"
          >
            <div className="menu-3">
              <div className="relative">
                <h5><b style={{ color: '#000' }}>What is The “Eat Your Retinol” Trend?</b></h5>
                <p style={{ color: '#000' }}>
                  There are many carotenoids including lutein, lycopene, alpha-carotene and beta-carotene. Beta-carotene is
                  the carotenoid responsible for a carrot’s vibrant orange colour. Once a beta-carotene containing food is
                  digested, special cells in the gut break it into two molecules of retinol (also known as&nbsp;vitamin A)
                </p>
                <a href="/bloghome3"><button className="btn-readmore-wtr"><p style={{ marginTop: '-10px' }}>READ MORE</p></button></a>
                <p style={{ color: '#000', display: 'flex', justifyContent: 'flex-start' }}>By Ginta
                </p></div>
            </div>
            <div className="main-3" style={{ backgroundImage: 'url("images/Rectangle 23888.png")', backgroundSize: 'cover' }}>
            </div>
          </div>

          <div
            id="banner-content"
            className="row clearfix"
            style={{ backgroundImage: 'url("images/Rectangle 23879.png")', backgroundSize: 'cover', minHeight: '100vh', marginTop: '3%' }}
            data-aos="fade-up"
          >
            <div className="absolute" style={{ marginLeft: "700px" }}>
              <h5><b style={{ color: '#fff' }}>Running For Longevity</b></h5>
              <p>
                Running can undoubtedly contribute to life span by advancing by and large wellbeing and well-being.
                Here's how running can bolster life span...
              </p>
              <p>By Ginta <a href="/bb1"><button className="btn-readmore" style={{ color: 'black' }}>READ MORE</button></a>
              </p></div><p />
          </div>

          <section id="about" className="introduction scrollto">
            <div className="row clearfix">
              <h1 className="blog"><b>Blog Us</b></h1>
              <p className="blog-2">Our blog is a repository of informative and interesting articles written by our team of <br />
                nutritionists, dietitians and health experts. Here's what you can expect from our blog.</p>
              <div className="container-fluid" style={{ marginBottom: '-15%' }}>
                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="col-md-6" data-aos="flip-left">
                    <div className="card">
                      <div className="card-header">
                        <a href><img src="images/potoprofil.png" className="card-profil" alt="" />
                          <span className="card-text">Bima Triadmaja</span></a>
                      </div>
                      <div className="card-body">
                        <Link to="/bloghome5">
                          <p className="card-img" style={{ backgroundImage: 'url("images/Rectangle 23893.png")', backgroundSize: 'cover' }}>
                          </p>
                        </Link>
                      </div>
                      <div className="card-footer">
                        Why is Yoga Good for Flexibility &amp; Strength? <br /> Here is Top Yoga Poses To Flexibility
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="flip-right">
                    <div className="card">
                      <div className="card-header">
                        <a href><img src="images/potoprofil.png" className="card-profil" alt="" />
                          <span className="card-text">Noval Ilham</span></a>
                      </div>
                      <div className="card-body">
                        <Link to="/bloghome6">
                          <p className="card-img" style={{ backgroundImage: 'url("images/Rectangle 23892.png")', backgroundSize: 'cover' }}>
                          </p>
                        </Link>
                      </div>
                      <div className="card-footer">
                        Do You Know Green Apple’s Benefits? <br />Top Health Benefits Of Green Apples
                        <br/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
