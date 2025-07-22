import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FooterNine from './footer-nine';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import HomeHeader from '../header/home-header';
import { all_routes } from '../../../../core/data/routes/all_routes';

const HomeNine = () => {
  const routes = all_routes
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const settings = {
    dots: true,
    autoplay: false,
    arrows: false,
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const reviewSettings = {
    dots: true,
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const blogSettings = {
    dots: true,
    autoplay: false,
    arrows: false,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const parterSettings = {
    dots: false,
    autoplay: true,
    slidesToShow: 5,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="main-wrapper">
      <div className="top-bar-nine">
        <div className="container">
          <div className="top-bar-nine-all">
            <div className="navbar-header">
              <Link className="navbar-brand logo" to="#">
                <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="top-bar-ryt">
              <div className="top-address">
                <span><i className="feather icon-phone-call"></i></span>
                <div>
                  <h6>Get Support</h6>
                  <p>310-437-2766</p>
                </div>
              </div>
              <div className="top-address">
                <span><ImageWithBasePath src="assets/img/icons/global-nine.svg" alt="image" /></span>
                <div className="top-addres-nine">
                  <h6>Language</h6>
                  <p>
                    <ImageWithBasePath src="assets/img/icons/dropdown-nine.svg" className="footer-dropdown" alt="img" />
                    <select className="top-select">
                      <option>English</option>
                      <option>Mexico</option>
                      <option>American</option>
                    </select>
                  </p>
                </div>
              </div>
              <div className="top-btn">
                <Link to={routes.login} className="btn btn-primary"><i className="feather icon-user"></i> Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header */}
      <HomeHeader type={10}/>
      {/* /Header */}
      {/* Hero Section */}
      <section className="hero-section-nine">
        <div className="container">
          <div className="home-banner home-banner-nine">
            <div className="row align-items-center w-100">
              <div className="col-lg-6">
                <div className="banner-imgs banner-imgs-nine">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="banner-img-01">
                        <div className="banner-1 shape-1">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="banner"
                            src="assets/img/banner-img-04.jpg"
                          />
                        </div>
                        <div className="banners-3 shape-3">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="banner"
                            src="assets/img/banner-img-02.jpg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="banner-img-02">
                        <div className="banner-2 shape-3">
                          <ImageWithBasePath
                            className="img-fluid"
                            alt="banner"
                            src="assets/img/banner-img-03.jpg"
                          />
                        </div>
                        <div className="banner-4 shape-2">
                          <ImageWithBasePath
                            className="img-responsive"
                            alt="banner"
                            src="assets/img/banner-img-01.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10 mx-auto">
                <div
                  className="section-search section-search-nine aos"
                  data-aos="fade-up"
                >
                  <span className="badge badge-primary-transparent">
                    Welcome to TruelySell Mechanic
                  </span>
                  <h1 className="display-5">
                    Providing A Professional Reliable service
                  </h1>
                  <p>
                    Our professional cleaning service comes up with a complete
                    solution that makes your space sparkle!
                  </p>
                  <Link to={routes.booking} className="btn btn-dark">
                    <i className="feather icon-lock me-2" />
                    Book Appointment
                  </Link>
                  <div className="banner-appointment">
                    <ImageWithBasePath src="assets/img/profiles/avatar-15.jpg" alt="User" />
                    <div>
                      <p className="mb-1">Got a question about our service?</p>
                      <h4>Call us: 092837644</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /Hero Section */}
      {/* Safety is out first Priority */}
      <section className="safety-section section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="safety-first-all aos" data-aos="fade-up">
                <div
                  className="section-heading section-heading-nine safety-heading-nine mb-2 aos"
                  data-aos="fade-up"
                >
                  <h2 className="display-5 mb-0">
                    Safety is Out first Priority For <span>Us</span>
                  </h2>
                </div>
                <p className="safety-para">
                  We stay ahead of industry trends and continuously seek innovative
                  solutions to better serve our clients.{" "}
                </p>
                <p>
                  Our forward-thinking approach ensures that you benefit from the
                  latest advancements and strategies.We operate with the highest level
                  of integrity and ethical standards. Our business practices are
                  designed to build long-term relationships based on trust, respect,
                  and mutual success. If you are going to use a passage of Lorem
                  Ipsum,
                </p>
                <p>
                  We adhere to rigorous quality standards to ensure that every service
                  we provide meets the highest levels of excellence. Our commitment to
                  quality is reflected in the results we deliver and the satisfaction
                  of our clients.Our team consists of highly qualified professionals
                  who are experts in their fields. We conduct thorough vetting and
                  ongoing training to ensure that our team remains at the forefront of
                  industry trends and best practices.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="safety-list aos" data-aos="fade-up">
                    <ImageWithBasePath
                      src="assets/img/blog/blog-13.jpg"
                      alt="image"
                      className="img-fluid"
                    />
                    <ul>
                      <li>
                        <span>
                          <i className="feather icon-check" />
                        </span>
                        Highly Professional Staff
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-check" />
                        </span>
                        100% Satisfaction Guarantee
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-check" />
                        </span>
                        Quality Control System
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="safety-list safety-ryt-two aos" data-aos="fade-up">
                    <ImageWithBasePath
                      src="assets/img/blog/blog-12.jpg"
                      alt="image"
                      className="img-fluid"
                    />
                    <ul>
                      <li>
                        <span>
                          <i className="feather icon-check" />
                        </span>
                        Accurate Testing Process
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-check" />
                        </span>
                        Unrivalled Workmanship
                      </li>
                      <li>
                        <span>
                          <i className="feather icon-check" />
                        </span>
                        Timely Delivery
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /Safety is out first Priority */}
      {/* Our Services */}
      <section className="service-nine-section section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-nine aos"
                data-aos="fade-up"
              >
                <span className="title-badge">Trusted &amp; Quality Services</span>
                <h2>Our <span>Services</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider
                {...settings}
                className="owl-carousel service-nine-slider custom-slick"
              >
                <div className="service-widget service-widget-nine aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/mechanic-service-01.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content service-feature-nine">
                    <div className="shop-content-logo">
                      <ImageWithBasePath src="assets/img/icons/car-service-icon-1.svg" alt="image" />
                    </div>
                    <span>25 Mechanics</span>
                    <h5>
                      <Link to={routes.serviceDetails1}>
                        Car Engine Service &amp; Repair Maintenance
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="service-widget service-widget-nine aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/mechanic-service-02.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content service-feature-nine">
                    <div className="shop-content-logo">
                      <ImageWithBasePath src="assets/img/icons/car-service-icon-2.svg" alt="image" />
                    </div>
                    <span>15 Mechanics</span>
                    <h5>
                      <Link to={routes.serviceDetails1}>
                        Car Audio Repair and Maintenance customers
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="service-widget service-widget-nine aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/mechanic-service-03.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content service-feature-nine">
                    <div className="shop-content-logo">
                      <ImageWithBasePath src="assets/img/icons/car-service-icon-1.svg" alt="image" />
                    </div>
                    <span>30 Mechanics</span>
                    <h5>
                      <Link to={routes.serviceDetails1}>Car Audio Repair and Maintenance</Link>
                    </h5>
                  </div>
                </div>
                <div className="service-widget service-widget-nine aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/mechanic-service-04.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content service-feature-nine">
                    <div className="shop-content-logo">
                      <ImageWithBasePath src="assets/img/icons/car-service-icon-3.svg" alt="image" />
                    </div>
                    <span>17 Mechanics</span>
                    <h5>
                      <Link to={routes.serviceDetails1}>Engine Service and repair Maintenance</Link>
                    </h5>
                  </div>
                </div>
                <div className="service-widget service-widget-nine aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/mechanic-service-02.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content service-feature-nine">
                    <div className="shop-content-logo">
                      <ImageWithBasePath src="assets/img/icons/car-service-icon-1.svg" alt="image" />
                    </div>
                    <span>25 Mechanics</span>
                    <h5>
                      <Link to={routes.serviceDetails1}>Performance Upgrade and Customization</Link>
                    </h5>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="slidernav dots-bottom owl-dots text-center text-md-start" />
            </div>
            <div className="col-sm-6">
              <div
                className="btn-service-nine text-center text-md-end aos"
                data-aos="fade-up"
              >
                <Link to={routes.serviceGrid} className="btn btn-primary btn-view">
                  View all 255 Services
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* /Our Services */}
      {/* Featured Services */}
      <section className="feature-service-nine section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-nine aos"
                data-aos="fade-up"
              >
                <span className="title-badge">Most Booked Services</span>
                <h2>
                  Featured <span>Services</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="service-widget service-widget-nine">
                <div className="service-img">
                  <Link to={routes.serviceDetails1} className="service-image">
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/services/mechanic-feature-01.jpg"
                    />
                  </Link>
                  <div className="item-info items-nine justify-content-between">
                    <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="user" />
                    <div className="rating">
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <span>(198)</span>
                    </div>
                  </div>
                </div>
                <div className="service-content service-content-nine">
                  <span className="sub-title">Two-Wheeler service</span>
                  <h3 className="title">
                    <Link to={routes.serviceDetails1}>
                      Wheel Alignment and Installation
                    </Link>
                  </h3>
                  <div className="feature-content d-flex align-items-center justify-content-between">
                    <div className="feature-address">
                      <p>
                        <i className="feather icon-clock me-2" />
                        07:00 AM - 11:00 PM
                      </p>
                      <p>
                        <i className="feather icon-map-pin me-2" />
                        Burnside Court, Phoenix
                      </p>
                    </div>
                    <h5 className="text-primary">$68.00</h5>
                  </div>
                  <div className="service-link">
                    <Link to={routes.booking} className="btn btn-light w-100">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="service-widget service-widget-nine">
                <div className="service-img">
                  <Link to={routes.serviceDetails1} className="service-image">
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/services/mechanic-feature-02.jpg"
                    />
                  </Link>
                  <div className="item-info items-nine justify-content-between">
                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="User" />
                    <div className="rating">
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <span>(198)</span>
                    </div>
                  </div>
                </div>
                <div className="service-content service-content-nine">
                  <span className="sub-title">Four-Wheeler service</span>
                  <h3 className="title">
                    <Link to={routes.serviceDetails1}>Routine Maintenance</Link>
                  </h3>
                  <div className="feature-content d-flex align-items-center justify-content-between">
                    <div className="feature-address">
                      <p>
                        <i className="feather icon-clock me-2" />
                        08:00 AM - 09:00 PM
                      </p>
                      <p>
                        <i className="feather icon-map-pin me-2" />
                        Crosswind Drive, Folsomdale
                      </p>
                    </div>
                    <h5 className="text-primary">$56.00</h5>
                  </div>
                  <div className="service-link">
                    <Link to={routes.booking} className="btn btn-light w-100">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="service-widget service-widget-nine">
                <div className="service-img">
                  <Link to={routes.serviceDetails1} className="service-image">
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/services/mechanic-feature-03.jpg"
                    />
                  </Link>
                  <div className="item-info items-nine justify-content-between">
                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="image" />
                    <div className="rating">
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <span>(198)</span>
                    </div>
                  </div>
                </div>
                <div className="service-content service-content-nine">
                  <span className="sub-title">Engine Service</span>
                  <h3 className="title">
                    <Link to={routes.serviceDetails1}>Engine Repair and Diagnostics</Link>
                  </h3>
                  <div className="feature-content d-flex align-items-center justify-content-between">
                    <div className="feature-address">
                      <p>
                        <i className="feather icon-clock me-2" />
                        07:00 AM - 11:00 PM
                      </p>
                      <p>
                        <i className="feather icon-map-pin me-2" />
                        Main Boulevard, Texas
                      </p>
                    </div>
                    <h5 className="text-primary">$68.00</h5>
                  </div>
                  <div className="service-link">
                    <Link to={routes.booking} className="btn btn-light w-100">
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-service-nine text-center aos" data-aos="fade-up">
              <Link to={routes.search} className="btn btn-primary btn-view">
                View all 255 Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* /Featured Services */}
      <section className="journey-nine-section section">
        <div className="container">
          <div className="row justify-content-between g-4">
            <div className="col-lg-4">
              <div
                className="section-heading section-heading-nine journey-heading-nine aos"
                data-aos="fade-up"
              >
                <span className="title-badge">Activity</span>
                <h2 className="text-white">
                  It’s Our <span>journey</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex">
              <div className="journey-client-all aos" data-aos="fade-up">
                <div className="journey-counter">
                  <h2>
                  
                    <span className="counter"><CountUp end={644} duration={5} /></span> +
                  </h2>
                  <p>Active Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex">
              <div className="journey-client-all aos" data-aos="fade-up">
                <div className="journey-counter">
                  <h2>
                    <span className="counter"><CountUp end={290} duration={5} /></span> +
                  </h2>
                  <p>Expert Mechanics</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex">
              <div className="journey-client-all aos" data-aos="fade-up">
                <div className="journey-counter">
                  <h2>
                    <span className="counter"><CountUp end={100} duration={5} /></span> +
                  </h2>
                  <p>Total Rewards</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex">
              <div className="journey-client-all aos" data-aos="fade-up">
                <div className="journey-counter">
                  <h2>
                    <span className="counter"><CountUp end={24} duration={5} /></span> +
                  </h2>
                  <p>Years Reputation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="choose-nine-section section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-nine aos"
                data-aos="fade-up"
              >
                <span className="title-badge">Trusted &amp; Quality Services</span>
                <h2>
                  Why Choose <span>Us?</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-4 aos" data-aos="fade-up">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex">
              <div className="reasonable-wrap bg-primary w-100">
                <ImageWithBasePath src="assets/img/icons/choose-icon-3.svg" alt="image" />
                <h5>Expert Mechanics</h5>
                <p>
                  Our expertise spans across ensuring that we have the skills insights
                  to deliver results.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex">
              <div className="reasonable-wrap bg-secondary w-100">
                <ImageWithBasePath src="assets/img/icons/choose-icon-4.svg" alt="image" />
                <h5>Reasonable Price</h5>
                <p>
                  Your satisfaction is our priority. We listen to needs, provide
                  personalized solutions
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex">
              <div className="reasonable-wrap bg-dark w-100">
                <ImageWithBasePath src="assets/img/icons/choose-icon-2.svg" alt="image" />
                <h5>fast feature</h5>
                <p>
                  Our commitment to a customer-first approach means we go above beyond
                  to ensure
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex">
              <div className="reasonable-wrap w-100">
                <ImageWithBasePath src="assets/img/icons/choose-icon-1.svg" alt="image" />
                <h5 className="text-gray-9">Awarded Workshop</h5>
                <p className="text-default">
                  From upfront pricing and detailed service descriptions to
                  transparent processes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /Why Choose Us? */}
      {/* our Mechanics */}
      <section className="mechanics-section section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-nine aos"
                data-aos="fade-up"
              >
                <span className="title-badge">Our Team</span>
                <h2>Our <span>Mechanics</span></h2>
              </div>
            </div>
          </div>
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Car Mechanic
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Commercial Mechanic
              </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row aos" data-aos="fade-up">
                <div className="col-md-12">
                  <Slider
                    {...settings}
                    className="owl-carousel provider-nine-slider custom-slick"
                  >
                    <div className="providerset providerset-nine">
                      <div className="providerset-img ">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/mechanic/mechanic-01.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="providerset-content">
                        <h6 className="mb-2">Hatchback mechanic</h6>
                        <h5>
                          <Link to={routes.providerDetails}>Eduardo Halstead</Link>
                        </h5>
                        <div className="provider-rating provider-rating-nine">
                          <div className="rating">
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <span>(320)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="providerset providerset-nine">
                      <div className="providerset-img ">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/mechanic/mechanic-02.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="providerset-content">
                        <h6 className="mb-2">Mechanic</h6>
                        <h5>
                          <Link to={routes.providerDetails}>Melanie Vincent</Link>
                        </h5>
                        <div className="provider-rating provider-rating-nine">
                          <div className="rating">
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <span>(147)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="providerset providerset-nine">
                      <div className="providerset-img ">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/mechanic/mechanic-03.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="providerset-content">
                        <h6 className="mb-2">Wheel Alignment Specialist</h6>
                        <h5>
                          <Link to={routes.providerDetails}>Raymond Erwin</Link>
                        </h5>
                        <div className="provider-rating provider-rating-nine">
                          <div className="rating">
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <span>(452)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="providerset providerset-nine">
                      <div className="providerset-img ">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/mechanic/mechanic-04.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="providerset-content">
                        <h6 className="mb-2">SUV Mechanic</h6>
                        <h5>
                          <Link to={routes.providerDetails}>Matthew Humphrey</Link>
                        </h5>
                        <div className="provider-rating provider-rating-nine">
                          <div className="rating">
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <span>(66)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="providerset providerset-nine">
                      <div className="providerset-img ">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/mechanic/mechanic-05.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="providerset-content">
                        <h6>Wheel Alignment Specialist</h6>
                        <h5>
                          <Link to={routes.providerDetails}>John Smith</Link>
                        </h5>
                        <div className="provider-rating provider-rating-nine">
                          <div className="rating">
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <span>(320)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="slidernav3 dots-bottom owl-dots text-center text-md-start" />
                </div>
                <div className="col-sm-6">
                  <div
                    className="btn-service-nine text-center text-md-end aos"
                    data-aos="fade-up"
                  >
                    <Link to={routes.providersList} className="btn btn-primary btn-view">
                      View all
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row aos" data-aos="fade-up">
                <div className="col-md-12">
                  <Slider
                    {...settings}
                    className="owl-carousel provider-nine-slider custom-slick"
                  >
                    <div className="providerset providerset-nine">
                      <div className="providerset-img ">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/mechanic/mechanic-05.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="providerset-content">
                        <h6>Wheel Alignment Specialist</h6>
                        <h5>
                          <Link to={routes.providerDetails}>John Smith</Link>
                        </h5>
                        <div className="provider-rating provider-rating-nine">
                          <div className="rating">
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <span>(320)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="providerset providerset-nine">
                      <div className="providerset-img ">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/mechanic/mechanic-01.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="providerset-content">
                        <h6>Hatchback mechanic</h6>
                        <h5>
                          <Link to={routes.providerDetails}>Eduardo Halstead</Link>
                        </h5>
                        <div className="provider-rating provider-rating-nine">
                          <div className="rating">
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <span>(320)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="providerset providerset-nine">
                      <div className="providerset-img ">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/mechanic/mechanic-04.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="providerset-content">
                        <h6>SUV Mechanic</h6>
                        <h5>
                          <Link to={routes.providerDetails}>Matthew Humphrey</Link>
                        </h5>
                        <div className="provider-rating provider-rating-nine">
                          <div className="rating">
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <span>(66)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="providerset providerset-nine">
                      <div className="providerset-img ">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/mechanic/mechanic-02.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="providerset-content">
                        <h6>Mechanic</h6>
                        <h5>
                          <Link to={routes.providerDetails}>Melanie Vincent</Link>
                        </h5>
                        <div className="provider-rating provider-rating-nine">
                          <div className="rating">
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <span>(147)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="providerset providerset-nine">
                      <div className="providerset-img ">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/mechanic/mechanic-03.jpg" alt="img" />
                        </Link>
                      </div>
                      <div className="providerset-content">
                        <h6>Wheel Alignment Specialist</h6>
                        <h5>
                          <Link to={routes.providerDetails}>Raymond Erwin</Link>
                        </h5>
                        <div className="provider-rating provider-rating-nine">
                          <div className="rating">
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <i className="fa-solid fa-star filled" />
                            <span>(452)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </Slider>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="slidernav3 dots-bottom owl-dots text-center text-md-start" />
                </div>
                <div className="col-sm-6">
                  <div
                    className="btn-service-nine text-center text-md-end aos"
                    data-aos="fade-up"
                  >
                    <Link to={routes.providersList} className="btn btn-primary btn-view">
                      View all
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* /our Mechanics */}
      {/* Customer Reviews */}
      <section className="customer-review-section section">
        <div className="customer-side-main-all">
          <div className="customer-side-left-img">
            <ImageWithBasePath src="assets/img/customer-review-after.png" alt="image" />
          </div>
          <div className="customer-side-right-img">
            <ImageWithBasePath src="assets/img/customer-review-before.png" alt="image" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-nine aos"
                data-aos="fade-up"
              >
               <span className="title-badge">Testimonials</span>
               <h2>What Our Client <span>Say’s</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider
                {...reviewSettings}
                className="owl-carousel customer-review-slider custom-slick"
              >
                <div className="customer-reviews-all aos" data-aos="fade-up">
                  <div className="customer-reviews-main">
                    <ImageWithBasePath src="assets/img/client/client-01.jpg" alt="image" />
                    <div className="customer-quote">
                      <ImageWithBasePath src="assets/img/icons/customer-quote.svg" alt="image" />
                    </div>
                  </div>
                  <h5>Vincent Cooper</h5>
                  <p className="fs-14 fw-medium mb-3">Alaska, USA</p>
                  <div className="rating">
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <span className="ms-1">5.0</span>
                  </div>
                  <p>
                    Versatile and user-friendly platform for freelancers and businesses alike.
                    Its interface is clean and intuitive, making it easy to post jobs, browse
                    profiles, and manage projects. The range of services is impressive,
                  </p>
                </div>
                <div className="customer-reviews-all">
                  <div className="customer-reviews-main">
                    <ImageWithBasePath src="assets/img/client/client-02.jpg" alt="image" />
                    <div className="customer-quote">
                      <ImageWithBasePath src="assets/img/icons/customer-quote.svg" alt="image" />
                    </div>
                  </div>
                  <h5>Melanie Vincent</h5>
                  <p className="fs-14 fw-medium mb-3">Losvegas, USA</p>
                  <div className="rating">
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <i className="fa-solid fa-star filled" />
                    <span className="ms-1">5.0</span>
                  </div>
                  <p>
                    Versatile and user-friendly platform for freelancers and businesses alike.
                    Its interface is clean and intuitive, making it easy to post jobs, browse
                    profiles, and manage projects. The range of services is impressive,
                  </p>
                </div>

              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* /Customer Reviews */}
      {/* Additional Services */}
      <section className="additional-service-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-nine aos"
                data-aos="fade-up"
              >
                <span className="title-badge">Additional Serrvices</span>
                <h2>Our Added <span>Services</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider
                {...settings}
                className="owl-carousel service-nine-slider custom-slick"
              >
              <div
                className="service-widget service-widget-nine service-widget-nine-two aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/services/add-service-01.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-feature-nine">
                  <span>29 Mechanics</span>
                  <h5 className="title">
                    <Link to={routes.serviceDetails1}>General Sevice</Link>
                  </h5>
                </div>
              </div>
              <div
                className="service-widget service-widget-nine service-widget-nine-two aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/services/add-service-02.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-feature-nine">
                  <span>10 Mechanics</span>
                  <h5 className="title">
                    <Link to={routes.serviceDetails1}>Transmission &amp; Replace</Link>
                  </h5>
                </div>
              </div>
              <div
                className="service-widget service-widget-nine service-widget-nine-two aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/services/add-service-03.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-feature-nine">
                  <span>67 Mechanics</span>
                  <h5 className="title">
                    <Link to={routes.serviceDetails1}>Emission Repair Facility</Link>
                  </h5>
                </div>
              </div>
              <div
                className="service-widget service-widget-nine service-widget-nine-two aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/services/add-service-04.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-feature-nine">
                  <span>28 Mechanics</span>
                  <h5 className="title">
                    <Link to={routes.serviceDetails1}>Break Job / Break </Link>
                  </h5>
                </div>
              </div>
              <div
                className="service-widget service-widget-nine service-widget-nine-two aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/services/add-service-05.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-feature-nine">
                  <span>25 Mechanics</span>
                  <h5 className="title">
                    <Link to={routes.serviceDetails1}>Performance Upgrade</Link>
                  </h5>
                </div>
              </div>
              </Slider>
            </div>
          </div>
          <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="slidernav1 dots-bottom owl-dots text-center text-md-start" />
          </div>
          <div className="col-sm-6">
            <div
              className="btn-service-nine text-center text-md-end aos"
              data-aos="fade-up"
            >
              <Link to={routes.serviceGrid} className="btn btn-primary btn-view">
                View all 255 Services
              </Link>
            </div>
          </div>
        </div>

        </div>
      </section>
      {/* /Additional Services */}
      {/* Our Blogs */}
      <section className="blogs-nine-section section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-nine aos"
                data-aos="fade-up"
              >
                <span className="title-badge">Latest Articles</span>
                <h2>Our <span>Blogs</span></h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider
                {...blogSettings}
                className="blogs-nine-slider custom-slick"
              >
              <div className="blog blog-new flex-fill">
                <div className="blog-image">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/mechanic-blog-01.jpg"
                      alt="Post Image"
                    />
                  </Link>
                  <div className="date">
                    25<span>Dec</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-user-info d-flex align-items-center justify-content-between">
                    <div className="blog-user d-flex align-items-center">
                      <ImageWithBasePath src="assets/img/profiles/avatar-15.jpg" alt="User" />
                      <span>Cynthia Tyree</span>
                    </div>
                    <h6>
                      <i className="feather-tag me-1" />
                      Services
                    </h6>
                  </div>
                  <h3 className="blog-title">
                    <Link to={routes.blogDetails}>
                      Take Advantage of Trial Periods or Consultations
                    </Link>
                  </h3>
                  <p>
                    In today’s fast-paced business world, finding the right services to
                    support your growth can be a game...
                  </p>
                </div>
              </div>
              <div className="blog blog-new flex-fill">
                <div className="blog-image">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/mechanic-blog-02.jpg"
                      alt="Post Image"
                    />
                  </Link>
                  <div className="date">
                    22<span>Dec</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-user-info d-flex align-items-center justify-content-between">
                    <div className="blog-user d-flex align-items-center">
                      <ImageWithBasePath src="assets/img/profiles/avatar-10.jpg" alt="User" />
                      <span>Adrian Lessli</span>
                    </div>
                    <h6>
                      <i className="feather-tag me-1" />
                      Services
                    </h6>
                  </div>
                  <h3 className="blog-title">
                    <Link to={routes.blogDetails}>
                      Maximize Your Business Potential with the Right Service
                    </Link>
                  </h3>
                  <p>
                    One of the biggest advantages of using a service marketplace is the
                    access to a wide range of services.
                  </p>
                </div>
              </div>
              <div className="blog blog-new flex-fill">
                <div className="blog-image">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/mechanic-blog-03.jpg"
                      alt="Post Image"
                    />
                  </Link>
                  <div className="date">
                    20<span>Dec</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-user-info d-flex align-items-center justify-content-between">
                    <div className="blog-user d-flex align-items-center">
                      <ImageWithBasePath src="assets/img/profiles/avatar-25.jpg" alt="User" />
                      <span>Madeline Hilli</span>
                    </div>
                    <h6>
                      <i className="feather-tag me-1" />
                      Services
                    </h6>
                  </div>
                  <h3 className="blog-title">
                    <Link to={routes.blogDetails}>
                      Specific features and benefits of your service marketplace
                    </Link>
                  </h3>
                  <p>
                    Before hiring a service provider, check their reviews and ratings on the
                    marketplace...
                  </p>
                </div>
              </div>
              <div className="blog blog-new flex-fill">
                <div className="blog-image">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      className="img-fluid"
                      src="assets/img/blog/mechanic-blog-04.jpg"
                      alt="Post Image"
                    />
                  </Link>
                  <div className="date">
                    15<span>Dec</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-user-info d-flex align-items-center justify-content-between">
                    <div className="blog-user d-flex align-items-center">
                      <ImageWithBasePath src="assets/img/profiles/avatar-10.jpg" alt="User" />
                      <span>Admin</span>
                    </div>
                    <h6>
                      <i className="feather-tag me-1" />
                      Services
                    </h6>
                  </div>
                  <h3 className="blog-title">
                    <Link to={routes.blogDetails}>
                      Maximize Your Business Potential with the Right Service
                    </Link>
                  </h3>
                  <p>
                    In today’s fast-paced business world, finding the right services to
                    support your growth can be a game...
                  </p>
                </div>
              </div>

              </Slider>
            </div>
            <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="slidernav2 dots-bottom owl-dots text-center text-md-start" />
            </div>
            <div className="col-sm-6">
              <div
                className="btn-service-nine text-center text-md-end aos"
                data-aos="fade-up"
              >
                <Link to={routes.blogList} className="btn btn-primary btn-view">
                  View all Blogs
                </Link>
              </div>
            </div>
          </div>

          </div>
          <div className="free-service-all">
            <div className="row align-items-center aos" data-aos="fade-up">
              <div className="col-lg-6 col-12">
                <div className="free-service-nine">
                  <div className="free-service-img-one">
                    <ImageWithBasePath src="assets/img/service-img-9.jpg" alt="image" />
                    <ImageWithBasePath
                      src="assets/img/icons/offer-icon.svg"
                      alt="image"
                      className="icon-01"
                    />
                  </div>
                  <div className="free-service-img-two">
                    <ImageWithBasePath src="assets/img/service-img-10.jpg" alt="image" />
                  </div>
                  <ImageWithBasePath
                    src="assets/img/icons/offer-icon-01.png"
                    alt="image"
                    className="offer-icon"
                  />
                  <ImageWithBasePath
                    src="assets/img/icons/choose-icon-01.svg"
                    alt="image"
                    className="choose-icon"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="free-service-bottom-content">
                  <div
                    className="section-heading section-heading-nine free-heading-nine aos"
                    data-aos="fade-up"
                  >
                    <h2 className="mb-2">
                      Get Offer on Premium <span>Services</span>
                    </h2>
                  </div>
                  <p>
                    Whether you&apos;re looking to our app brings everything you need right to
                    your fingertips.
                  </p>
                  <Link to={routes.booking} className="btn btn-primary">
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* /Our Blogs */}
      <div className="blog-section partner-section-nine">
        <div className="container">
          <div className="row">
            <Slider
              {...parterSettings}
              className="owl-carousel quote-slider aos custom-slick"
              data-aos="fade-up"
            >
            <div className="partner-img">
              <ImageWithBasePath src="assets/img/partner/partner-01.svg" alt="img" />
            </div>
            <div className="partner-img">
              <ImageWithBasePath src="assets/img/partner/partner-02.svg" alt="img" />
            </div>
            <div className="partner-img">
              <ImageWithBasePath src="assets/img/partner/partner-03.svg" alt="img" />
            </div>
            <div className="partner-img">
              <ImageWithBasePath src="assets/img/partner/partner-04.svg" alt="img" />
            </div>
            <div className="partner-img">
              <ImageWithBasePath src="assets/img/partner/partner-05.svg" alt="img" />
            </div>
            <div className="partner-img">
              <ImageWithBasePath src="assets/img/partner/partner-03.svg" alt="img" />
            </div>

            </Slider>
          </div>
        </div>
      </div>
      {/* Footer */}
      <FooterNine />
      {/* /Footer */}
    </div>
  );
};

export default HomeNine;
