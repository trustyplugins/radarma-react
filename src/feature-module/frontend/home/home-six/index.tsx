import React, { useEffect, useState } from 'react';
import { Calendar } from 'primereact/calendar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Icon from 'react-feather';
import FooterSix from './footer-six';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import HomeHeader from '../header/home-header';
import { all_routes } from '../../../../core/data/routes/all_routes';

const HomeSix = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [date, setDate] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const routes = all_routes
  const language = [{ name: 'Tornoto' }, { name: 'Texas' }];
  return (
    <div className="main-wrapper">
      {/* Header */}
      <section className="hero-section-six  p-0">
      <div className="hero-section-overlay-img d-none d-lg-block">
				<div className="gradient-img">
					<ImageWithBasePath src="assets/img/bg/index-g-overlay-gradient.png" alt="img" className="img-fluid" />
				</div>
				<div className="white-circle">
					<ImageWithBasePath src="assets/img/bg/index-6-left-circle.png" alt="img" className="img-fluid" />
				</div>
				<div className="main-bg">
					<ImageWithBasePath src="assets/img/bg/index-6-bg.png" alt="img" className="img-fluid" />
				</div>
				<div className="top-circle">
					<ImageWithBasePath src="assets/img/bg/index-6-top-circle.png" alt="img" className="img-fluid" />
				</div>
				<div className="right-img">
					<ImageWithBasePath src="assets/img/bg/index-6-right-img.png" alt="img" className="img-fluid" />
				</div>
				<div className="oval-img">
					<ImageWithBasePath src="assets/img/bg/index-6-oval-img.png" alt="img" className="img-fluid" />
				</div>
			</div>
        <HomeHeader type={7} />
        <div className="container">
          <div className="home-banner home-banner-six">
            <div className="row w-100 justify-content-center ">
              <div className="col-lg-6 col-12">
                <div className="home-banner-main d-none  d-lg-block">
                  <ImageWithBasePath
                    src="assets/img/services/service-82.png"
                    alt="Image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="home-banner-six-bottom">
                  <div className="home-banner-six-detergent">
                    <span className="rounded-circle">
                      <ImageWithBasePath src="assets/img/icons/window-cleaner.svg" alt="icon" />
                    </span>
                    <p className="fs-16">Affordable &amp; Reliable </p>
                  </div>
                  <h1 className="mb-2 display-5">
                    Professional Cleaning Service{" "}
                    <span className="text-primary">You Can Trust</span>
                  </h1>
                  <p>
                    Our professional cleaning service comes up with a complete solution
                    that makes your space sparkle!
                  </p>
                  <div className="search-box-two search-box-six">
                    <form action={routes.search}>
                      <div className="search-input-new line-six">
                        <div className="form-group mb-0">
                        <Dropdown
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.value)}
                            options={language}
                            optionLabel="name"
                            placeholder="Service Type"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="search-input-new line-two-six">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Location"
                          />
                        </div>
                      </div>
                      <div className="search-btn">
                        <Link
                          to={routes.bookingDetails}
                          className="btn search_service"
                          type="submit"
                        >
                          Book Now
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* /Banner Section */}
      {/* Choose Us */}
      <section className="reason-choose-us">
        <div className="container">
          <div className="section-heading section-heading-six">
            <div className="row">
              <div className="col-md-12 col-12 aos" data-aos="fade-up">
                <div className="reason-six">
                  <ImageWithBasePath
                    src="assets/img/icons/cleaner-svgrepo-com.svg"
                    alt="image"
                    className="rounded-circle"
                  />
                  <p>WHY TRUELY SELL?</p>
                </div>
                <h2>
                  Reasons to <span>Choose Us</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="total-client-all">
                <ul className="total-client-half">
                  <li className="total-client-mini">
                    <div className="total-experts-main">
                      <h3>540</h3>
                      <p>
                        Total<span>Experts</span>
                      </p>
                    </div>
                  </li>
                  <li className="total-client-mini">
                    <div className="total-experts-main">
                      <h3>215</h3>
                      <p>
                        Total<span>Clients</span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <ul className="total-client-avatar">
                      <li>
                        <Link to="#">
                          <ImageWithBasePath src="assets/img/profiles/avatar-06.jpg" alt="User" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <ImageWithBasePath src="assets/img/profiles/avatar-07.jpg" alt="image" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <ImageWithBasePath src="assets/img/profiles/avatar-08.jpg" alt="image" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <ImageWithBasePath src="assets/img/profiles/avatar-09.jpg" alt="User" />
                        </Link>
                      </li>
                      <li className="more-set">
                        <Link to="#">
                          <i className="feather icon-plus" />
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div>
                  <p className="total-client-content">
                    Informed decisions and contributes to the overall quality of the
                    marketplace. It also provides valuable insights to the provider
                    for future improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-4 col-12 ">
              <div className="professional-cleaning-main ">
                <ImageWithBasePath
                  src="assets/img/icons/quality-svgrepo-com.svg"
                  alt="image"
                  className="rounded-circle"
                />
                <h5 className="text-truncate">High Quality Cleaning</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-12">
              <div className="professional-cleaning-main">
                <ImageWithBasePath
                  src="assets/img/icons/cdn-globe-locations-svgrepo-com.svg"
                  alt="image"
                  className="rounded-circle"
                />
                <h5>Global Locations</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-12">
              <div className="professional-cleaning-main">
                <ImageWithBasePath
                  src="assets/img/icons/support.svg"
                  alt="image"
                  className="rounded-circle"
                />
                <h5>Anytime Support</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-12">
              <div className="professional-cleaning-main">
                <ImageWithBasePath
                  src="assets/img/icons/money-cash-svgrepo-com.svg"
                  alt="image"
                  className="rounded-circle"
                />
                <h5>Spend Efficiently</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /Choose Us */}
      {/* About Our Company */}
      <section className="about-our-company">
        <div className="our-company-img">
          <ImageWithBasePath src="assets/img/bg/wave.png" alt="image" className="img-fluid" />
        </div>
        <div className="container">
          <div className="section-heading section-heading-six">
            <div className="row">
              <div className="col-md-9 col-12 aos" data-aos="fade-up">
                <div className="reason-six">
                  <ImageWithBasePath
                    src="assets/img/icons/window-cleaner-detergent-svgrepo-com.svg"
                    alt="image"
                    className="rounded-circle"
                  />
                  <p>BEST CLEANING SERVICE</p>
                </div>
                <h2>
                  <span>About </span>Our Company
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="our-company-six">
                <p>
                  A service marketplace can be a powerful tool for entrepreneurs
                  looking to access specialized skills and support. By following these
                  tips, you can navigate the marketplace effectively, find the right
                  service providers, and enhance your business operations. Ready to
                  get started?
                </p>
              </div>
              <div className="aboutus-companyimg">
                <div className="our-company-overlay-img d-none d-lg-block">
                  <ImageWithBasePath src="assets/img/bg/buttom-wave.png" alt="img" />
                </div>
                <Link to="#">
                  <ImageWithBasePath src="assets/img/services/service-84.png" alt="img" />
                </Link>
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#video"
                >
                  <div className="playicon">
                    <span>
                      <i className="feather icon-play" />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="our-company-ryt d-none d-lg-block">
                <div className="bg-overlay-img d-none d-lg-block">
                  <ImageWithBasePath
                    src="assets/img/bg/our-company-bg.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="our-company-bg">
                  <ImageWithBasePath
                    src="assets/img/bg/our-company-six.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="our-company-first-content">
                  <Link to={routes.contactUs} className="me-2">
                    <i className="ti ti-device-mobile-filled" />
                  </Link>
                  <div className="company-top-content">
                    <p>Call us Today!</p>
                    <h3 className="text-dark">+012 345678</h3>
                  </div>
                </div>
                <div className="our-company-two-content">
                  <div className="company-two-top-content">
                    <ImageWithBasePath
                      src="assets/img/icons/trophy-svgrepo-com.svg"
                      alt="image"
                      className="me-2"
                    />
                    <h4 className="text-dark">12+</h4>
                  </div>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /About Our Company */}
      {/* Get Satisfied with the services Explore All */}
      <section className="satisfied-service-section">
        <div className="container">
          <div className="section-heading section-heading-six">
            <div className="row align-items-end">
              <div className="col-md-9 aos" data-aos="fade-up">
                <div className="reason-six">
                  <ImageWithBasePath
                    src="assets/img/icons/cleaning-mop.svg"
                    alt="image"
                    className="rounded-circle"
                  />
                  <p>AFFORDABLE &amp; RELIABLE</p>
                </div>
                <h2>
                  Get Satisfied with the <span>services</span>
                </h2>
              </div>
              <div className="col-md-3 aos" data-aos="fade-up">
                <Link to={routes.serviceDetails1} className="afford-btn">
                  Explore All
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
              <div className="get-service-main w-100">
                <span>
                  <ImageWithBasePath src="assets/img/icons/sofa.svg" alt="image" />
                </span>
                <Link to={routes.serviceDetails1}>
                  <h5>Upholstery Cleaning</h5>
                </Link>
                <div className="get-service-btn">
                  <Link to={routes.serviceDetails1}>
                    View More <i className="ms-2 feather icon-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
              <div className="get-service-main w-100">
                <span>
                  <ImageWithBasePath src="assets/img/icons/apporment-cleaning.svg" alt="image" />
                </span>
                <Link to={routes.serviceDetails1}>
                  <h5>Apartment Cleaning</h5>
                </Link>
                <div className="get-service-btn">
                  <Link to={routes.serviceDetails1}>
                    View More <i className="ms-2 feather icon-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
              <div className="get-service-main w-100">
                <span>
                  <ImageWithBasePath src="assets/img/icons/covid-cleaning.svg" alt="image" />
                </span>
                <Link to={routes.serviceDetails1}>
                  <h5>Covid Clean-Up</h5>
                </Link>
                <div className="get-service-btn">
                  <Link to={routes.serviceDetails1}>
                    View More <i className="ms-2 feather icon-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
              <div className="get-service-main w-100">
                <span>
                  <ImageWithBasePath src="assets/img/icons/office-cleaning.svg" alt="image" />
                </span>
                <Link to={routes.serviceDetails1}>
                  <h5>Office Cleaning</h5>
                </Link>
                <div className="get-service-btn">
                  <Link to={routes.serviceDetails1}>
                    View More <i className="ms-2 feather icon-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
              <div className="get-service-main w-100">
                <span>
                  <ImageWithBasePath src="assets/img/icons/move-in.svg" alt="image" />
                </span>
                <Link to={routes.serviceDetails1}>
                  <h5>Move In/ Out Cleaning</h5>
                </Link>
                <div className="get-service-btn">
                  <Link to={routes.serviceDetails1}>
                    View More <i className="ms-2 feather icon-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
              <div className="get-service-main w-100">
                <span>
                  <ImageWithBasePath src="assets/img/icons/commercial-cleaning.svg" alt="image" />
                </span>
                <Link to={routes.serviceDetails1}>
                  <h5>Commercial Cleaning</h5>
                </Link>
                <div className="get-service-btn">
                  <Link to={routes.serviceDetails1}>
                    View More <i className="ms-2 feather icon-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
              <div className="get-service-main w-100">
                <span>
                  <ImageWithBasePath src="assets/img/icons/window-cleaning.svg" alt="image" />
                </span>
                <Link to={routes.serviceDetails1}>
                  <h5>Window Cleaning</h5>
                </Link>
                <div className="get-service-btn">
                  <Link to={routes.serviceDetails1}>
                    View More <i className="ms-2 feather icon-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
              <div className="get-service-main w-100">
                <span>
                  <ImageWithBasePath src="assets/img/icons/carpet-cleaning.svg" alt="image" />
                </span>
                <Link to={routes.serviceDetails1}>
                  <h5>Carpet Cleaning</h5>
                </Link>
                <div className="get-service-btn">
                  <Link to={routes.serviceDetails1}>
                    View More <i className="ms-2 feather icon-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /Get Satisfied with the services Explore All */}
      {/* See How It Works */}
      <section className="see-works-six-section">
        <div className="container">
          <div className="section-heading section-heading-six">
            <div className="row">
              <div className="col-md-9 aos" data-aos="fade-up">
                <div className="reason-six">
                  <ImageWithBasePath
                    src="assets/img/icons/cleaner-clean-svgrepo-com.svg"
                    alt="image"
                    className="rounded-circle"
                  />
                  <p>HOW WE ARE WORKING?</p>
                </div>
                <h2>
                  See How It <span>Works</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="how-it-works-six">
                <div className="works-six-num">
                  <h2>01</h2>
                </div>
                <div className="work-online-schedule">
                  <div className="work-online-img">
                    <ImageWithBasePath
                      src="assets/img/works-six-1.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-online-bottom">
                    <ImageWithBasePath
                      src="assets/img/icons/gui-calendar-planner.svg"
                      alt="image"
                    />
                    <h4>Easy Online Scheduling</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="how-it-works-six">
                <div className="works-six-num works-six-num-two">
                  <h2>02</h2>
                </div>
                <div className="work-online-schedule">
                  <div className="work-online-img">
                    <ImageWithBasePath
                      src="assets/img/works-six-2.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-online-bottom work-online-bottom-two">
                    <h4>Get A Certified Cleaner</h4>
                    <ImageWithBasePath src="assets/img/icons/carpet.svg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="how-it-works-six">
                <div className="works-six-num works-six-num-three">
                  <h2>03</h2>
                </div>
                <div className="work-online-schedule">
                  <div className="work-online-img">
                    <ImageWithBasePath
                      src="assets/img/works-six-3.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-online-bottom">
                    <ImageWithBasePath src="assets/img/icons/like-svg.svg" alt="image" />
                    <h4>Enjoy Cleanliness!</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /See How It Works */}
      {/* Latest Blog */}
      <section className="blogs-service-section bg-white">
        <div className="container">
          <div className="section-heading section-heading-six">
            <div className="row align-items-end">
              <div className="col-md-9 aos" data-aos="fade-up">
                <div className="reason-six">
                  <ImageWithBasePath
                    src="assets/img/icons/cleaning-mop.svg"
                    alt="image"
                    className="rounded-circle"
                  />
                  <p>AFFORDABLE &amp; RELIABLE</p>
                </div>
                <h2>
                  Latest <span>Blog</span>
                </h2>
              </div>
              <div className="col-md-3 aos" data-aos="fade-up">
                <Link to={routes.blogDetails} className="afford-btn">
                  Explore All
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 d-flex">
              <div
                className="service-widget service-six flex-fill aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/blog/celaning-blog-01.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-content-six">
                  <h5 className="blog-import-service">
                    How to effectively evaluate offers from commercial cleaning
                    companies
                  </h5>
                  <p>
                    In today’s fast-paced business world, finding the right services
                    to support your growth can be a game...
                  </p>
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex">
              <div
                className="service-widget service-six flex-fill aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/blog/celaning-blog-02.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-content-six">
                  <h5 className="blog-import-service">
                    Commercial Moving Solutions By Three Movers
                  </h5>
                  <p>
                    One of the biggest advantages of using a service marketplace is
                    the access to a wide range of services.
                  </p>
                  <Link to={routes.blogDetails}>Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex">
              <div
                className="service-widget service-six flex-fill aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/blog/celaning-blog-03.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-content-six">
                  <h5 className="blog-import-service">
                    Importance Of Professional Cleaning Services
                  </h5>
                  <p>
                    Before hiring a service provider, check their reviews and ratings
                    on the marketplace...
                  </p>
                  <Link to={routes.blogDetails}>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /Latest Blog */}
      {/* serve you the best cleaning service! */}
      <section className="our-expert-six-section">
        <div className="container">
          <div className="section-heading section-heading-six">
            <div className="row align-items-end">
              <div className="col-md-9 aos" data-aos="fade-up">
                <div className="reason-six">
                  <ImageWithBasePath
                    src="assets/img/icons/window-cleaner-detergent-svgrepo-com.svg"
                    alt="image"
                    className="rounded-circle"
                  />
                  <p>SERVE YOU THE BEST CLEANING SERVICE</p>
                </div>
                <h2>
                  Our Expert <span>Team</span>
                </h2>
              </div>
              <div className="col-md-3 aos" data-aos="fade-up">
                <Link to={routes.providersList} className="afford-btn">
                  Explore All
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="our-expert-six">
                <div className="our-expert-img">
                  <ImageWithBasePath
                    src="assets/img/services/service-88.jpg"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="our-expert-six-content">
                  <h6>William James</h6>
                  <p>Head In Industrial Cleaning</p>
                  <Link className="btn btn-primary rounded" to="#">
                    $30.00<span>/hr</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="our-expert-six">
                <div className="our-expert-img">
                  <ImageWithBasePath
                    src="assets/img/services/service-89.jpg"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="our-expert-six-content">
                  <h6>William James</h6>
                  <p>Head In Industrial Cleaning</p>
                  <Link className="btn btn-primary rounded" to="#">
                    $30.00<span>/hr</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="our-expert-six">
                <div className="our-expert-img">
                  <ImageWithBasePath
                    src="assets/img/services/service-90.jpg"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="our-expert-six-content">
                  <h6>William James</h6>
                  <p>Head In Industrial Cleaning</p>
                  <Link className="btn btn-primary rounded" to="#">
                    $30.00<span>/hr</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="our-expert-six">
                <div className="our-expert-img">
                  <ImageWithBasePath
                    src="assets/img/services/service-91.jpg"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="our-expert-six-content">
                  <h6>William James</h6>
                  <p>Head In Industrial Cleaning</p>
                  <Link className="btn btn-primary rounded" to="#">
                    $30.00<span>/hr</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /serve you the best cleaning service! */}
      {/* Customer Reviews */}
      <section className="customer-reviews-six-section">
        <div className="container">
          <div className="section-heading section-heading-six">
            <div className="row align-items-end">
              <div className="col-md-9 aos" data-aos="fade-up">
                <div className="reason-six">
                  <ImageWithBasePath
                    src="assets/img/icons/cleaning-mop.svg"
                    alt="image"
                    className="rounded-circle"
                  />
                  <p>AFFORDABLE &amp; RELIABLE</p>
                </div>
                <h2>
                  Customer <span>Reviews</span>
                </h2>
              </div>
              <div className="col-md-3 aos" data-aos="fade-up">
                <Link to={routes.customerReviews} className="afford-btn">
                  Explore All
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="customer-review-main-six">
                <div className="customer-review-top">
                  <ImageWithBasePath src="assets/img/profiles/avatar-20.jpg" alt="User" />
                  <h5 className="mb-1">Maria Williams</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered.
                  </p>
                </div>
                <div className="customer-review-bottom">
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="customer-review-quote">
                  <ImageWithBasePath src="assets/img/icons/reviews-quote.svg" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="customer-review-main-six">
                <div className="customer-review-top">
                  <ImageWithBasePath src="assets/img/profiles/avatar-18.jpg" alt="User" />
                  <h5 className="mb-1">Bella Williams</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered.
                  </p>
                </div>
                <div className="customer-review-bottom">
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="customer-review-quote">
                  <ImageWithBasePath src="assets/img/icons/reviews-quote.svg" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="customer-review-main-six">
                <div className="customer-review-top">
                  <ImageWithBasePath src="assets/img/profiles/avatar-11.jpg" alt="User" />
                  <h5 className="mb-1">Cristina Williams</h5>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered.
                  </p>
                </div>
                <div className="customer-review-bottom">
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="customer-review-quote">
                  <ImageWithBasePath src="assets/img/icons/reviews-quote.svg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /Customer Reviews */}
      {/* See How It Works */}
      <section className="hidden-charge-section">
        <div className="container">
          <div className="section-heading section-heading-six">
            <div className="row justify-content-center text-center">
              <div className="col-md-9 aos" data-aos="fade-up">
                <div className="reason-six justify-content-center">
                  <ImageWithBasePath
                    src="assets/img/icons/vacuum-cleaner.svg"
                    alt="image"
                    className="rounded-circle"
                  />
                  <p>NO EXTRA HIDDEN CHARGES!</p>
                </div>
                <h2>
                  Choose Your <span>Plan</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="hidden-charge-main">
                <div className="hidden-charge-img">
                  <ImageWithBasePath src="assets/img/icons/charges-3.svg" alt="image" />
                </div>
                <h4>Standard</h4>
                <ul>
                  <li>Ability to list up to 3 services</li>
                  <li>Access to buyer inquiries</li>
                  <li>Basic customer support</li>
                  <li>5% transaction fee on sales</li>
                  <li>Experienced &amp; Trained Cleaner</li>
                </ul>
                <div className="hidden-charges-bottom-mark">
                  <h1>
                    $15 <span>/hr</span>
                  </h1>
                  <h6>PER MONTH</h6>
                </div>
                <Link to="#" className="btn btn-dark btn-charges w-100">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="hidden-charge-main hidden-charge-main-two">
                <div className="hidden-charge-img">
                  <ImageWithBasePath src="assets/img/icons/charges-2.svg" alt="image" />
                </div>
                <h4>Premium</h4>
                <ul>
                  <li>Ability to list up to 10 services</li>
                  <li>Priority customer support</li>
                  <li>Insured Liability ans Cleaning</li>
                  <li>You choose leaning Day</li>
                </ul>
                <div className="hidden-charges-bottom-mark">
                  <h1>
                    $29 <span>/hr</span>
                  </h1>
                  <h6>PER MONTH</h6>
                </div>
                <Link to="#" className="btn btn-primary btn-charges btn-plan w-100">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="hidden-charge-main">
                <div className="hidden-charge-img">
                  <ImageWithBasePath src="assets/img/icons/charges-1.svg" alt="image" />
                </div>
                <h4>Enterprise</h4>
                <ul>
                  <li>Experienced &amp; Trained Cleaner</li>
                  <li>Maintenance Cleaning</li>
                  <li>Insured Liability ans Cleaning</li>
                  <li>Planed Holiday Cover</li>
                </ul>
                <div className="hidden-charges-bottom-mark">
                  <h1>
                    $59 <span>/hr</span>
                  </h1>
                  <h6>PER MONTH</h6>
                </div>
                <Link to="#" className="btn btn-dark btn-charges w-100">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section className="app-six-section">
        <div className="container">
          <div className="app-sec app-sec-six">
            <div className="app-sec-main">
              <div className="app-imgs-six-bg">
                <ImageWithBasePath
                  src="assets/img/new-app-six-bg.png"
                  alt="image"
                />
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6 col-12">
                  <div className="appimg-six aos" data-aos="fade-up">
                    <ImageWithBasePath
                      src="assets/img/new-app-img.png"
                      className="img-fluid"
                      alt="img"
                    />
                    <div className="app-img-sec">
                      <ImageWithBasePath
                        src="assets/img/new-app-sec-ng.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="new-app-six-middle">
                    <div className="heading aos" data-aos="fade-up">
                      <h2>
                        Download <span>Our New App</span>
                      </h2>
                      <p>
                        Aliquam lorem ante, dapibus in, viverra quis, feugiat
                        Phasellus viverra nulla ut metus varius laoreet.Aliquam
                        lorem ante.
                      </p>
                    </div>
                    <div className="new-app-six-bottom aos" data-aos="fade-up">
                      <div className="new-app-six-content">
                        <Link to="#;">
                          <ImageWithBasePath
                            src="assets/img/icons/googleplay-six.svg"
                            className="img-fluid new-six-img"
                            alt="img"
                          />
                        </Link>
                        <Link to="#;">
                          <ImageWithBasePath
                            src="assets/img/icons/appstore-six.svg"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <Link to="#;">
                        <ImageWithBasePath
                          src="assets/img/icons/scan-six.svg"
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /App Section */}
      {/* Footer */}
      <FooterSix />
      {/* /Footer */}
      {/* Modal */}
      <div className="modal fade modal-content-video" id="video" tabIndex={-1}>
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa fa-times" aria-hidden="true" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="video-home">
                <video controls={true} id="promovideo">
                  <iframe src="https://www.youtube.com/embed/ExJZAegsOis" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSix;
