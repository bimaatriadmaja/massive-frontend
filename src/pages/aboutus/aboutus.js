import React from 'react';
// import logo from './logo.svg';
// import './myhealthy/style.css';

function AboutUs() {
  return (
    <div className="AboutUs">
        <div>
          <div id="wrapper">
            <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
              
              <div id="banner-content" className="row clearfix" style={{backgroundColor: '#D2D5C5'}}>
                <div className="main-about">
                  <img src="images/logohealty.png" alt="" className="logo-about" />
                  <div className="menu-about">
                    <div className="absolute-about">
                      <h3><b style={{color: '#000'}}>About Us</b></h3>
                      <p style={{color: '#000'}}>
                        My Health is one of the best websites that provides relevant and reliable health information. We are committed to providing informative, up to date and easy to understand content to help you and your family maintain your health and well-being. 
                        Starting from eating nutritious food to consistently exercising. 
                      </p>
                      <p style={{color: '#000'}}>We understand that each individual has unique needs in caring for themselves and their loved ones. Therefore, we present a wide range of articles, guides, and practical advice on diverse health and exercise topics.</p>
                      <a href><button className="btn-readmore-about">VISSION &amp; MISSION</button></a>
                      <a href><button className="btn-readmore-about">DEVELOPER TEAM</button></a>
                      <a href><button className="btn-readmore-about">CONTACT</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <main id="content">
              <div id="banner-content" className="row clearfix" style={{backgroundImage: 'url(images/cream.png)', backgroundSize: 'cover', minHeight: '50vh'}}>
                <div><img src="images/gelombang.png" style={{marginTop: '-20%'}} alt="" /></div>
                <h1 className="blog" style={{marginTop: '5%'}}>Vission &amp; Mission</h1>
                <div className="container-fluid" style={{marginBottom: '-15%'}}>
                  <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header-vission">
                          <a href>
                            <span className="card-text-vission">VISSION</span></a>
                        </div>
                        <div className="vission-body">
                          To be the primary and trusted resource for individuals who want to adopt a 
                          healthy lifestyle through information, resources, and a supportive community.
                          <p />
                        </div>
                        <div className="vission-footer">
                          Vission
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <div className="card-header-vission">
                          <a href>
                            <span className="card-text-vission">MISSION</span></a>
                        </div>
                        <div className="mission-footer">
                          Mission
                        </div>
                        <div className="mission-body">
                          - Provides accurate, up to date and easy to understand information on various aspects of a healthy lifestyle, including nutrition, exercise, mental health and sleep patterns. <br />
                          - Provides useful resources, such as healthy food recipes, physical exercise routines, and mental health strategies, to help individuals achieve their health goals. <br />
                          - Inspire and motivate individuals to take small steps towards positive change in their lives by sharing success stories, practical tips and sources of inspiration.
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div><img src="images/Rectangle 23942.png" style={{marginBottom: '-20%'}} alt="" /></div>  
              </div>
              <section id="about" className style={{backgroundColor: '#99A285'}}>
                <div className="row clearfix" style={{marginTop: '-5%'}}>
                  <div className="container-fluid">
                  <h2 style={{display: 'flex', justifyContent: 'center'}}>
                          <b> Developer Team </b>
                        </h2>
                    <div className="row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <div className="col-md-12">
                     
                        <img alt="" className="img-profil" src="images/potoprofil.png" />
                        <h5 style={{display: 'flex', justifyContent: 'center'}}>
                          <b> Bima Triadmaja </b>
                        </h5>
                        <span style={{display: 'flex', justifyContent: 'center'}}>
                          Project Manager
                        </span>
                      </div>
                    </div>
                  </div>  
                  <div className="container-fluid" style={{marginTop: '-10%'}}>
                    <div className="row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <div className="col-md-6">
                        <img alt="" className="img-profil" src="images/Group 1000004295.png" />
                        <h4 style={{display: 'flex', justifyContent: 'center'}}>
                          <b>  Wavi krisdiar Hidayat </b>
                        </h4>
                        <span style={{display: 'flex', justifyContent: 'center'}}>
                          Designer
                        </span>
                      </div>
                      <div className="col-md-6">
                        <img alt="" className="img-profil" src="images/Group 1000004296.png" />
                        <h4 style={{display: 'flex', justifyContent: 'center'}}>
                          <b> Salsabila Rafa Ginta </b>
                        </h4>
                        <span style={{display: 'flex', justifyContent: 'center'}}>
                          Designer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid" style={{marginTop: '-10%'}}>
                    <div className="row" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <div className="col-md-4">
                        <img alt="" className="img-profil" src="images/Group 1000004297.png" />
                        <h4 style={{display: 'flex', justifyContent: 'center'}}>
                          <b> Ubaidillah Ali Masyhur </b>
                        </h4>
                        <span style={{display: 'flex', justifyContent: 'center'}}>
                          Programmer
                        </span>
                      </div>
                      <div className="col-md-4">
                        <img alt="" className="img-profil" src="images/Group 1000004298.png" />
                        <h4 style={{display: 'flex', justifyContent: 'center'}}>
                          <b>  Mochamad Noval Ilham Maliki </b>
                        </h4>
                        <span style={{display: 'flex', justifyContent: 'center'}}>
                          Programmer
                        </span>
                      </div>
                      <div className="col-md-4">
                        <img alt="" className="img-profil" src="images/potoprofil.png" />
                        <h4 style={{display: 'flex', justifyContent: 'center'}}>
                          <b> Zulian Aditya Saputra </b> 
                        </h4>
                        <span style={{display: 'flex', justifyContent: 'center'}}>
                          Programmer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section></main></div>
          <h2 className="contact" style={{color: '#4C4C4C'}}><b>Contact US</b></h2>
          <div style={{marginTop: '-2%'}}>
            <a target="_blank" title="user" href="#!">
              <i className="fa-solid fa-envelope fa-1x contact" style={{color: '#6D805D', marginRight: '1%'}}>
              </i><span style={{color: '#6D805D', marginRight: '8%', fontSize: '12px'}}>myhealthcontact@gmail.com</span>
            </a></div><a target="_blank" title="user" href="#!">
          </a><div style={{marginTop: '-2%'}}><a target="_blank" title="user" href="#!">
            </a><a target="_blank" title="user" href="#!">
              <i className="fa-brands fa-linkedin fa-1x contact" style={{color: '#6D805D', marginRight: '1%'}}>
              </i><span style={{color: '#6D805D', marginRight: '8%', fontSize: '12px'}}>myhealth.indonesia</span>
            </a></div><a target="_blank" title="user" href="#!">
          </a><div style={{marginTop: '-2%'}}><a target="_blank" title="user" href="#!">
            </a><a target="_blank" title="user" href="#!">
              <i className="fa-brands fa-square-instagram fa-1x contact" style={{color: '#6D805D', marginRight: '1%'}}>
              </i><span style={{color: '#6D805D', marginRight: '8%', fontSize: '12px'}}>@myhealth.indonesia</span>
            </a></div><a target="_blank" title="user" href="#!">
          </a><div style={{marginTop: '-2%'}}><a target="_blank" title="user" href="#!">
            </a><a target="_blank" title="user" href="#!">
              <i className="fa-brands fa-square-whatsapp fa-1x contact" style={{color: '#6D805D', marginRight: '1%'}}>
              </i><span style={{color: '#6D805D', marginRight: '8%', fontSize: '12px'}}>+62 812 3456 7890</span>
            </a></div><a target="_blank" title="user" href="#!">
          </a>
        </div>
    </div>
  );
}

export default AboutUs;