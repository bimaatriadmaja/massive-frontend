// src/pages/home.js
import React from 'react';
import AboutUs from '../aboutus/aboutus';
import SignIn from '../SignIn';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
        <div style={{backgroundColor: '#D2D5C6'}}>
          <div id="wrapper">
            <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
              
              <div id="banner-content" className="row clearfix" style={{backgroundColor: '#99A285'}}>
                <div>
                  <div className="main">
                    <h1>A <span style={{color: '#fff'}}>Healthy</span> Mind <br /> is an Asset</h1>
                  </div>
                  <div className="menu">
                    <img src="images/homeimage.png" alt="" className="imgs;" />
                  </div>
                </div>
              </div>
            </header></div>
          <main id="content">
            <div className="container-fluid">
              <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                <div className="col-md-3 group-image" style={{backgroundImage: 'url("images/Group\ 1000004344.png")'}}>
                  <a href='./evaluate'><span style={{color: '#fff'}}>Evaluate</span></a>
                </div>
                <div className="col-md-3 group-image" style={{backgroundImage: 'url("images/Group\ 1000004343.png")'}}>
                  <a href='./nutrition'><span style={{color: '#fff'}}>Nutrition</span></a>
                </div>
                <div className="col-md-3 group-image" style={{backgroundImage: 'url("images/Group\ 1000004284.png")'}}>
                  <a href='./workout'><span style={{color: '#fff'}}>Workout</span></a>
                </div>
                <div className="col-md-3 group-image" style={{backgroundImage: 'url("images/Group\ 1000004341.png")'}}>
                  <a href='./rest'><span style={{color: '#fff'}}>Rest</span></a>
                </div>
                <div className="col-md-3 group-image" style={{backgroundImage: 'url("images/Group\ 1000004342.png")'}}>
                  <a href='./selfcare'><span style={{color: '#fff'}}>Selfcare</span></a>
                </div>
              </div>
            </div>
            <div id="banner-content" className="row clearfix" style={{backgroundImage: 'url("images/Rectangle\ 23889.png")', backgroundSize: 'cover', minHeight: '100vh'}}>
            <div className="absolute" style={{marginLeft:"700px"}}>
    <h5><b style={{color: '#fff'}}>Best Healthy Delicious Meal</b></h5>
    <p>
      Find easy and flavorful recipes for&nbsp;healthy&nbsp;dinners that are ready in just 20 minutes. From pasta and
      chicken to fish and rice, these dishes are satisfying and quick to make with fresh or...
    </p>
    <p>By Ginta <a href="/nutrition2"><button className="btn-readmore" style={{color: 'black'}}>READ MORE</button></a></p>
</div>
                <p />     
            </div>
            <div id="banner-content-wtr" className="row clearfix" style={{backgroundColor: '#BEC9AB', marginTop: '3%'}}>
              <div className="main-2" style={{backgroundImage: 'url("images/Rectangle\ 23886.png")', backgroundSize: 'cover'}}>
                <div className="menu-2">
                  <div className="absolute" style={{marginLeft:"700px"}}>
                    <h5><b style={{color: '#000'}}>Why Water?</b></h5>
                    <p style={{color: '#000'}}>
                      Water brings nutrients to all the cells and oxygen to our brain. Water enables nutrients, proteins, amino
                      acids, glucose and other compounds to be consumed and assimilated by the body.
                    </p>
                    <a href="/bloghome2"><button className="btn-readmore-wtr">READ MORE</button></a>
                    <p style={{color: '#000', display: 'flex', justifyContent: 'flex-end'}}>By Ginta 
                    </p></div>
                </div>
              </div>
            </div>
            <div id="banner-content-wtr" className="row clearfix" style={{backgroundColor: '#BEC9AB', marginTop: '3%'}}>
              <div className="menu-3">
                <div className="relative">
                  <h5><b style={{color: '#000'}}>What is The “Eat Your Retinol” Trend?</b></h5>
                  <p style={{color: '#000'}}>
                    There are many carotenoids including lutein, lycopene, alpha-carotene and beta-carotene. Beta-carotene is
                    the carotenoid responsible for a carrot’s vibrant orange colour. Once a beta-carotene containing food is
                    digested, special cells in the gut break it into two molecules of retinol (also known as&nbsp;vitamin A)
                  </p>
                  <a href="/bloghome3"><button className="btn-readmore-wtr"><p style={{marginTop:'-10px'}}>READ MORE</p></button></a>
                  <p style={{color: '#000', display: 'flex', justifyContent: 'flex-start'}}>By Ginta
                  </p></div>
              </div>
              <div className="main-3" style={{backgroundImage: 'url("images/Rectangle\ 23888.png")', backgroundSize: 'cover'}}>
              </div>
            </div>
            <div id="banner-content" className="row clearfix" style={{backgroundImage: 'url("images/Rectangle\ 23879.png")', backgroundSize: 'cover', minHeight: '100vh', marginTop: '3%'}}>
              <div className="absolute" style={{marginLeft:"700px"}}>
                <h5><b style={{color: '#fff'}}>Running For Longevity</b></h5>
                <p>
                  Running can undoubtedly contribute to life span by advancing by and large wellbeing and well-being.
                  Here's how running can bolster life span...
                </p>
                <p>By Ginta <a href="/bb1"><button className="btn-readmore" style={{color:'black'}}>READ MORE</button></a>
                </p></div><p />     
            </div>
            <section id="about" className="introduction scrollto">
              <div className="row clearfix">
                <h1 className="blog"><b>Blog Us</b></h1>
                <p className="blog-2">Our blog is a repository of informative and interesting articles written by our team of <br /> 
                  nutritionists, dietitians and health experts. Here's what you can expect from our blog.</p>
                <div className="container-fluid" style={{marginBottom: '-15%'}}>
                  <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header">
                          <a href><img src="images/potoprofil.png" className="card-profil" alt="" />
                            <span className="card-text">ANDI</span></a>
                        </div>
                        <div className="card-body">
                        <Link to="/bloghome5">
                          <p className="card-img" style={{backgroundImage: 'url("images/Rectangle\ 23893.png")', backgroundSize: 'cover'}}>
                          </p>
                          </Link>
                        </div>
                        <div className="card-footer">
                          Why is Yoga Good for Flexibility &amp;  Strength? <br /> Here is Top Yoga Poses To Flexibility
                        </div>
                        <div className="card-footer-text">
                          <span style={{fontSize: '12px'}}>Best yoga poses for flexibility · 1. Intense Side Stretch (Parsvottanasana) · 2. Head to Knee (Janu
                            Sirsasana) · 3. Cat-Cow&nbsp;(Bitilasana&nbsp;...<a href style={{color: 'blue'}}>see more</a></span> 
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header">
                          <a href><img src="images/Group 1000004295.png" className="card-profil" alt="" />
                            <span className="card-text">BUDI</span></a>
                        </div>
                        <div className="card-body">
                        <Link to="/bloghome6">
                          <p className="card-img" style={{backgroundImage: 'url("images/Rectangle\ 23892.png")', backgroundSize: 'cover'}}>
                          </p>
                          </Link>
                        </div>
                        <div className="card-footer">
                          How Does Sleep Affect Your Blood <br /> Pressure?
                        </div>
                        <div className="card-footer-text">
                          <span style={{fontSize: '12px'}}>People who sleep six hours or less may have steeper increases in blood <br /> pressure. If you already have high
                            blood pressure, not sleeping ...<a href style={{color: 'blue'}}>see more</a></span> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid" style={{marginBottom: '-5%'}}>
                <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <a href><img src="images/Group 1000004297.png" className="card-profil" alt="" />
                          <span className="card-text">CACA</span></a>
                      </div>
                      <div className="card-body">
                      <Link to="/bloghome7">
                        <p className="card-img" style={{backgroundImage: 'url("images/Rectangle\ 23891.png")', backgroundSize: 'cover'}}>
                        </p>
                        </Link>
                      </div>
                      <div className="card-footer">
                        What is The Best Gym Equipment for Gym <br /> Beginners?
                      </div>
                      <div className="card-footer-text">
                        <span style={{fontSize: '12px'}}> The toughest part about going to a gym for the first time is just walking through the door. If you do
                          that, you’ve&nbsp;&nbsp;gone farther...<a href style={{color: 'blue'}}>see more</a></span> 
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header">
                        <a href><img src="images/Group 1000004297.png" className="card-profil" alt="" />
                          <span className="card-text">DINA</span></a>
                      </div>
                      <div className="card-body">
                      <Link to="/bloghome8">
                        <p className="card-img" style={{backgroundImage: 'url("images/Rectangle\ 23894.png")', backgroundSize: 'cover'}}>
                        </p>
                        </Link>
                      </div>
                      <div className="card-footer">
                        The Skincare Effect: How Skincare Take <br /> Care Your Skin &amp; Mental Health.
                      </div>
                      <div className="card-footer-text">
                        <span style={{fontSize: '12px'}}>Skincare can also give you a well-deserved serotonin boost. Having a routine can make you happier, as
                          it's all about the ritual and putting&nbsp;time&nbsp;...<a href style={{color: 'blue'}}>see more</a></span> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="banner-content" className="row clearfix" style={{backgroundImage: 'url("images/Rectangle\ 23890.png")', backgroundSize: 'cover', width: '100%', height: '700px'}}> 
              </div>
              <div id="banner-content-wtr" className="row clearfix" style={{backgroundColor: '#D2D5C6', marginTop: '3%'}}>
              <h1 className="blog-3"><b>Benefits of Healthy Lifestyle</b></h1>
              <p className="blog-2">A healthy lifestyle has various significant 
                benefits for a person's physical, mental and emotional well-being</p>
              <div style={{display: 'flex', justifyContent: 'center', marginTop: '4%'}}>
                <img src="images/Group 1000004197.png" className="img-benefits" alt="" />
              </div>
              <div style={{display: 'flex', justifyContent: 'center', marginTop: '4%'}}>
                <img src="images/logohealty.png" className="img-logo-benefits" alt="" />
              </div>
              </div>
            </section>
          </main>

        </div>
    </div>
  );
}

export default Home;
