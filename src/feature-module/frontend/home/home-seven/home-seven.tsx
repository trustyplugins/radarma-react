import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Icon from 'react-feather';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FooterSeven from './footer-seven';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import HomeHeader from '../header/home-header';

const HomeSeven = () => {
  const routes = all_routes;

  AOS.init();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const handleScroll = () => {
    AOS.refresh();
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  const categoriesSlider = {
    dots: true,
    autoplay: false,
    slidesToShow: 5,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
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
  const popularService = {
    dots: true,
    autoplay: false,
    arrows:false,
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
  const recentProject = {
    dots: true,
    autoplay: false,
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
  const topProjects = {
    dots: true,
    autoplay: false,
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
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
  const testimonialSlider = {
    autoplay: false,
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
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
  const recentBlog = {
    dots: true,
    autoplay: false,
    slidesToShow: 3,
    arrows:false,
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
  const partnersSlider = {
    autoplay: true,
    slidesToShow: 5,
    speed: 500,
    arrows:false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
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
    <>
      <HomeHeader type={8} />
      <div className='home-seven-wrapper'>
      {/* Hero Section */}
      <section className="hero-section-seven">
        <div className="hero-sectionseven-top pt-5 pt-lg-0 pb-5 pb-lg-0">
          <div className="container">
            <div className="home-banner homer-banner-seven">
              <div className="row align-items-center w-100">
                <div className="col-lg-6 col-12">
                  <div className="section-search aos" data-aos="fade-up">
                    <p>Search From 150 Awesome Verified Ads!</p>
                    <h1>
                      Best Solution for Every
                      <span>House Problems</span>
                    </h1>
                    <div className="solution-seven">
                      <h6>2M+ Professionals registered</h6>
                      <ul className="total-client-avatar total-client-avatar-seven d-flex align-items-center mt-2">
                        <li>
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-06.jpg"
                              alt="User"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-07.jpg"
                              alt="image"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-08.jpg"
                              alt="image"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-09.jpg"
                              alt="User"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-10.jpg"
                              alt="User"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="hero-banner-ryt">
                    <ImageWithBasePath
                      src="assets/img/hero-section-seven-ryt.png"
                      alt="image"
                      className="img-fluid"
                    />
                    <div className="hero-banner-ryt-content">
                      <div className="hero-banner-ryt-top">
                        <h5>+21 k</h5>
                        <p>Services Completed</p>
                      </div>
                      <span>
                        <ImageWithBasePath src="assets/img/icons/suitcase.svg" alt="image" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
      {/* Service Section */}
      <section className="service-section-seven">
        <div className="search-box-two search-box-seven">
          <form action={routes.search}>
            <div className="search-input-new line">
              <i className="fas fa-tv bficon" />
              <div className="form-group mb-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What are you looking for?"
                />
              </div>
            </div>
            <div className="search-input-new">
              <i className="fas fa-location-arrow bficon" />
              <div className="form-group mb-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Location"
                />
                <Link
                  className="current-loc-icon current_location"
                  to="#"
                />
              </div>
            </div>
            <div className="search-btn">
              <button className="btn btn-primary rounded-pill" type="submit">
                <i className="feather icon-search" /> Search
              </button>
            </div>
          </form>
        </div>
        <div className="popularsearch-top">
          <h6>Popular Searches</h6>
          <ul>
            <li>
              <Link to={routes.search}>Electrical Works</Link>
            </li>
            <li>
              <Link to={routes.search}>Cleaning</Link>
            </li>
            <li>
              <Link to={routes.search}>AC Repair</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="section-heading section-heading-seven">
            <div className="row">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Featured Categories</h2>
                <p>What do you need to find?</p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <div className="owl-nav mynav mynav-seven" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...categoriesSlider} className="owl-carousel categories-slider-seven">
                <Link
                  to={routes.categories}
                  className="feature-box feature-box-seven aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon feature-icon-seven">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/car-wash.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <h5>Painting</h5>
                </Link>
                <Link
                  to={routes.categories}
                  className="feature-box feature-box-seven aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon feature-icon-seven">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/computer.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <h5>Construction</h5>
                </Link>
                <Link
                  to={routes.categories}
                  className="feature-box feature-box-seven aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon feature-icon-seven">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/construction.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <h5>Computer</h5>
                </Link>
                <Link
                  to={routes.categories}
                  className="feature-box feature-box-seven aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon feature-icon-seven">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/painting.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <h5>Car Wash</h5>
                </Link>
                <Link
                  to={routes.categories}
                  className="feature-box feature-box-seven aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon feature-icon-seven">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/computer.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <h5>Computer</h5>
                </Link>
                <Link
                  to={routes.categories}
                  className="feature-box feature-box-seven aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon feature-icon-seven">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/car-wash.svg"
                        alt="img"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <h5>Painting</h5>
                </Link>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Section */}
        {/* popular service */}
        <section className="popular-service-seven-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div
                  className="section-heading section-heading-seven aos"
                  data-aos="fade-up"
                >
                  <h2>Most Popular Services</h2>
                  <p>What do you need to find?</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider {...popularService} className="popular-service-seven">
                  <div
                    className="service-widget service-two service-seven aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-64.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to={routes.categories}>
                          <span className="item-cat">Glass Fitting</span>
                        </Link>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              className="avatar"
                              alt="image"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-content-seven">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Toughened Glass Fitting Service</Link>
                      </h3>
                      <p>
                        <span className="rate">
                          <i className="feather icon-phone" />
                          28-62-76-32
                        </span>
                        <i className="feather icon-map-pin me-2" />
                        New Jersey, USA
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(234)</span>
                        </div>
                        <h6>$25.00</h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two service-seven aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-65.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to={routes.categories}>
                          <span className="item-cat">Car Repair</span>
                        </Link>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-06.jpg"
                              className="avatar"
                              alt="image"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-content-seven">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Car Repair Service</Link>
                      </h3>
                      <p>
                        <span className="rate">
                          <i className="feather icon-phone" />
                          28-62-76-32
                        </span>
                        <i className="feather icon-map-pin me-2" />
                        New Jersey, USA
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(234)</span>
                        </div>
                        <h6>$25.00</h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two service-seven aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-66.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to={routes.categories}>
                          <span className="item-cat">Computer Repair</span>
                        </Link>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-11.jpg"
                              className="avatar"
                              alt="image"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-content-seven">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Computer Repairing &amp; Spares</Link>
                      </h3>
                      <p>
                        <span className="rate">
                          <i className="feather icon-phone" />
                          28-62-76-32
                        </span>
                        <i className="feather icon-map-pin me-2" />
                        New Jersey, USA
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(234)</span>
                        </div>
                        <h6>
                          $25.00<span className="old-price">$35.00</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two service-seven aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-65.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to={routes.categories}>
                          <span className="item-cat">Car Repair</span>
                        </Link>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-06.jpg"
                              className="avatar"
                              alt="image"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-content-seven">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Car Repair Service</Link>
                      </h3>
                      <p>
                        <span className="rate">
                          <i className="feather icon-phone" />
                          28-62-76-32
                        </span>
                        <i className="feather icon-map-pin me-2" />
                        New Jersey, USA
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(234)</span>
                        </div>
                        <h6>$86.00</h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* /popular service */}
        {/* Work Section */}
        <section className="work-section-seven">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div
                  className="section-heading section-heading-seven aos"
                  data-aos="fade-up"
                >
                  <h2>How It Works</h2>
                  <p>Aliquam lorem ante, dapibus in, viverra quis</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box-seven aos" data-aos="fade-up">
                  <div className="work-icon-seven">
                    <span>
                      <ImageWithBasePath src="assets/img/icons/work-seven-3.svg" alt="img" />
                    </span>
                  </div>
                  <h5 className="mb-2">Choose What To Do</h5>
                  <p>
                    Customers can browse or search for specific products or services
                    using categories, filters, or search bars.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box-seven aos" data-aos="fade-up">
                  <div className="work-icon-seven">
                    <span>
                      <ImageWithBasePath src="assets/img/icons/work-seven-2.svg" alt="img" />
                    </span>
                  </div>
                  <h5 className="mb-2">Find What You Want</h5>
                  <p>
                    Customers can add items to their shopping cart. For services, they
                    may select a service and proceed to book.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box-seven aos" data-aos="fade-up">
                  <div className="work-icon-seven">
                    <span>
                      <ImageWithBasePath src="assets/img/icons/work-seven-1.svg" alt="img" />
                    </span>
                  </div>
                  <h5 className="mb-2">Amazing Places</h5>
                  <p>
                    The Customer fulfills the order by either providing the service to
                    the Customers &amp; Get leads from the local Persons
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /Work Section */}
        {/* popular service */}
        <section className="popular-service-seven-section">
          <div className="container">
            <div className="section-heading section-heading-seven">
              <div className="row">
                <div className="col-md-6 aos" data-aos="fade-up">
                  <h2>Featured Categories</h2>
                  <p>What do you need to find?</p>
                </div>
                <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                  <div className="owl-nav mynav-seven-two" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider {...recentProject} className="recent-projects-seven">
                  <div
                    className="service-widget service-two service-seven aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-107.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to={routes.categories}>
                          <span className="item-cat">Plumbing</span>
                        </Link>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-06.jpg"
                              className="avatar"
                              alt="image"
                            />{" "}
                            Jeny Doe
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-content-seven">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Repairing Pipes by latest Machines</Link>
                      </h3>
                      <p>
                        <span className="rate">
                          <i className="feather icon-phone" />
                          28-62-76-32
                        </span>
                        <i className="feather icon-map-pin me-2" />
                        New Jersey, USA
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(234)</span>
                        </div>
                        <h6>
                          $25.00<span className="old-price">$35.00</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two service-seven aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-108.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to={routes.categories}>
                          <span className="item-cat">Interior Design</span>
                        </Link>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-11.jpg"
                              className="avatar"
                              alt="image"
                            />{" "}
                            Jeny Doe
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-content-seven">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Grinding Steel Metal</Link>
                      </h3>
                      <p>
                        <span className="rate">
                          <i className="feather icon-phone" />
                          28-62-76-32
                        </span>
                        <i className="feather icon-map-pin me-2" />
                        New Jersey, USA
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(234)</span>
                        </div>
                        <h6>$25.00</h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two service-seven aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-109.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to={routes.categories}>
                          <span className="item-cat">Pipe Installation</span>
                        </Link>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-19.jpg"
                              className="avatar"
                              alt="image"
                            />{" "}
                            Jeny Doe
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-content-seven">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Installing Pipes &amp; Water Supply</Link>
                      </h3>
                      <p>
                        <span className="rate">
                          <i className="feather icon-phone" />
                          28-62-76-32
                        </span>
                        <i className="feather icon-map-pin me-2" />
                        New Jersey, USA
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(234)</span>
                        </div>
                        <h6>$35.00</h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two service-seven aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-107.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to={routes.categories}>
                          <span className="item-cat">Car Repair</span>
                        </Link>
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providersList}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-06.jpg"
                              className="avatar"
                              alt="image"
                            />{" "}
                            Jeny Doe
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-content-seven">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Repairing Pipes by latest Machines</Link>
                      </h3>
                      <p>
                        <span className="rate">
                          <i className="feather icon-phone" />
                          28-62-76-32
                        </span>
                        <i className="feather icon-map-pin me-2" />
                        New Jersey, USA
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(234)</span>
                        </div>
                        <h6>
                          $25.00<span className="old-price">$35.00</span>
                        </h6>
                      </div>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* /popular service */}
        {/* Providers Section */}
        <section className="providers-section-seven">
          <div className="container">
            <div className="section-heading section-heading-seven">
              <div className="row">
                <div className="col-md-6 aos" data-aos="fade-up">
                  <h2>Top Providers</h2>
                  <p>What do you need to find?</p>
                </div>
                <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                  <div className="owl-nav mynav-seven-three" />
                </div>
              </div>
            </div>
            <div className="row  aos" data-aos="fade-up">
              <div className="col-md-12">
                <Slider {...topProjects} className="top-projects-seven">
                  <div className="providerset">
                    <div className="providerset-img providerset-img-seven ">
                      <Link to={routes.providerDetails}>
                        <ImageWithBasePath src="assets/img/providers/provider-35.jpg" alt="img" />
                      </Link>
                      <div className="fav-item d-flex align-items-center justify-content-between">
                        <i className="fa fa-check-circle fav-icons" aria-hidden="true" />
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="providerset-content providerset-content-seven">
                      <div className="providerset-price">
                        <div className="providerset-name">
                          <h4>
                            <Link to={routes.providerDetails}>John Smith</Link>
                          </h4>
                          <span className="text-primary">Electrician</span>
                        </div>
                        <div className="rate">
                          <i className="fas fa-star filled" />
                          <span>4.8</span>
                        </div>
                      </div>
                      <div className="provider-rating-seven">
                        <div className="providerset-prices">
                          <h6>
                            $20.00<span>/hr</span>
                          </h6>
                        </div>
                        <Link to={routes.providerDetails} className="btn btn-primary">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="providerset">
                    <div className="providerset-img providerset-img-seven ">
                      <Link to={routes.providerDetails}>
                        <ImageWithBasePath src="assets/img/providers/provider-36.jpg" alt="img" />
                      </Link>
                      <div className="fav-item d-flex align-items-center justify-content-between">
                        <i className="fa fa-check-circle fav-icons" aria-hidden="true" />
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="providerset-content providerset-content-seven">
                      <div className="providerset-price">
                        <div className="providerset-name">
                          <h4>
                            <Link to={routes.providerDetails}>George Smith</Link>
                          </h4>
                          <span className="text-primary">Construction</span>
                        </div>
                        <div className="rate">
                          <i className="fas fa-star filled" />
                          <span>4.8</span>
                        </div>
                      </div>
                      <div className="provider-rating-seven">
                        <div className="providerset-prices">
                          <h6>
                            $20.00<span>/hr</span>
                          </h6>
                        </div>
                        <Link to={routes.providerDetails} className="btn btn-primary">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="providerset">
                    <div className="providerset-img providerset-img-seven ">
                      <Link to={routes.providerDetails}>
                        <ImageWithBasePath src="assets/img/providers/provider-33.jpg" alt="img" />
                      </Link>
                      <div className="fav-item d-flex align-items-center justify-content-between">
                        <i className="fa fa-check-circle fav-icons" aria-hidden="true" />
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="providerset-content providerset-content-seven">
                      <div className="providerset-price">
                        <div className="providerset-name">
                          <h4>
                            <Link to={routes.providerDetails}>Matthew Thomas</Link>
                          </h4>
                          <span className="text-primary">Computer</span>
                        </div>
                        <div className="rate">
                          <i className="fas fa-star filled" />
                          <span>4.9</span>
                        </div>
                      </div>
                      <div className="provider-rating-seven">
                        <div className="providerset-prices">
                          <h6>
                            $60.00<span>/hr</span>
                          </h6>
                        </div>
                        <Link to={routes.providerDetails} className="btn btn-primary">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="providerset">
                    <div className="providerset-img providerset-img-seven ">
                      <Link to={routes.providerDetails}>
                        <ImageWithBasePath src="assets/img/providers/provider-34.jpg" alt="img" />
                      </Link>
                      <div className="fav-item d-flex align-items-center justify-content-between">
                        <i className="fa fa-check-circle fav-icons" aria-hidden="true" />
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="providerset-content providerset-content-seven">
                      <div className="providerset-price">
                        <div className="providerset-name">
                          <h4>
                            <Link to={routes.providerDetails}>John Smith</Link>
                          </h4>
                          <span className="text-primary">Electrician</span>
                        </div>
                        <div className="rate">
                          <i className="fas fa-star filled" />
                          <span>4.8</span>
                        </div>
                      </div>
                      <div className="provider-rating-seven">
                        <div className="providerset-prices">
                          <h6>
                            $20.00<span>/hr</span>
                          </h6>
                        </div>
                        <Link to={routes.providerDetails} className="btn btn-primary">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="providerset">
                    <div className="providerset-img providerset-img-seven ">
                      <Link to={routes.providerDetails}>
                        <ImageWithBasePath src="assets/img/providers/provider-33.jpg" alt="img" />
                      </Link>
                      <div className="fav-item d-flex align-items-center justify-content-between">
                        <i className="fa fa-check-circle fav-icons" aria-hidden="true" />
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="providerset-content providerset-content-seven">
                      <div className="providerset-price">
                        <div className="providerset-name">
                          <h4>
                            <Link to={routes.providerDetails}>John Smith</Link>
                          </h4>
                          <span className="text-primary">Electrician</span>
                        </div>
                        <div className="rate">
                          <i className="fas fa-star filled" />
                          <span>4.8</span>
                        </div>
                      </div>
                      <div className="provider-rating-seven">
                        <div className="providerset-prices">
                          <h6>
                            $20.00<span>/hr</span>
                          </h6>
                        </div>
                        <Link to={routes.providerDetails} className="btn btn-primary">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="providerset">
                    <div className="providerset-img providerset-img-seven ">
                      <Link to={routes.providerDetails}>
                        <ImageWithBasePath src="assets/img/providers/provider-34.jpg" alt="img" />
                      </Link>
                      <div className="fav-item d-flex align-items-center justify-content-between">
                        <i className="fa fa-check-circle fav-icons" aria-hidden="true" />
                        <Link to="javascript:void(0)" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="providerset-content providerset-content-seven">
                      <div className="providerset-price">
                        <div className="providerset-name">
                          <h4>
                            <Link to={routes.providerDetails}>John Smith</Link>
                          </h4>
                          <span className="text-primary">Electrician</span>
                        </div>
                        <div className="rate">
                          <i className="fas fa-star filled" />
                          <span>4.8</span>
                        </div>
                      </div>
                      <div className="provider-rating-seven">
                        <div className="providerset-prices">
                          <h6>
                            $20.00<span>/hr</span>
                          </h6>
                        </div>
                        <Link to={routes.providerDetails} className="btn btn-primary">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* Providers Section */}
        {/* pricing Section */}
        <section className="price-sections-seven">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div
                  className="section-heading section-heading-seven aos"
                  data-aos="fade-up"
                >
                  <h2>Pricing Plan</h2>
                  <p>
                    Designed to effectively communicate your service offerings and their
                    associated costs
                  </p>
                </div>
              </div>
            </div>
            <div className="price-toggle price-toggle-seven text-center mb-0">
              <div className="status-toggle toggle-pink d-inline-flex align-items-center">
                Bill Monthly
                <input type="checkbox" id="status_1" className="check" />
                <label htmlFor="status_1" className="checktoggle mx-3">
                  checkbox
                </label>
                Bill Annualy
              </div>
            </div>
            <div className="row aos" data-aos="fade-up">
              <div className="col-lg-4 col-sm-12">
                <div className="pricing-plans price-new pricing-plans-seven">
                  <div className="pricing-plans-img">
                    <ImageWithBasePath src="assets/img/icons/pricing-seven-3.svg" alt="image" />
                  </div>
                  <div className="pricing-planshead">
                    <h5>Basic</h5>
                    <h6>
                      <span>$</span>10.00
                    </h6>
                  </div>
                  <div className="pricing-planscontent pricing-planscontent-seven">
                    <ul>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>1 Bathroom cleaning</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Up to 3 bedrooms cleaning</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Full Furnished Room Cleaning</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Additional 05 Rooms</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Small kitchen (0 - 150 ft2)</span>
                      </li>
                    </ul>
                    <div className="pricing-btn">
                      <Link to={routes.search} className="btn btn-view w-100">
                        Choose Plan
                      </Link>
                    </div>
                    <div className="price-bg">
                      <ImageWithBasePath src="assets/img/bg/price-bg-vector.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="pricing-plans price-new pricing-plans-seven active-seven">
                  <div className="price-block">
                    <span className="popular">MOST POPULAR</span>
                  </div>
                  <div className="pricing-plans-img">
                    <ImageWithBasePath src="assets/img/icons/pricing-seven-2.svg" alt="image" />
                  </div>
                  <div className="pricing-planshead">
                    <h5>Standard </h5>
                    <h6>
                      <span>$</span>90.99
                    </h6>
                  </div>
                  <div className="pricing-planscontent pricing-planscontent-seven">
                    <ul>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>1 Bathroom cleaning</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Up to 3 bedrooms cleaning</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Full Furnished Room Cleaning</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Additional 05 Rooms</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Small kitchen (0 - 150 ft2)</span>
                      </li>
                    </ul>
                    <div className="pricing-btn">
                      <Link to={routes.search} className="btn btn-view w-100">
                        Choose Plan
                      </Link>
                    </div>
                    <div className="price-bg">
                      <ImageWithBasePath src="assets/img/bg/price-bg-vector.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="pricing-plans price-new pricing-plans-seven">
                  <div className="pricing-plans-img">
                    <ImageWithBasePath src="assets/img/icons/pricing-seven-1.svg" alt="image" />
                  </div>
                  <div className="pricing-planshead">
                    <h5>Basic</h5>
                    <h6>
                      <span>$</span>150.99
                    </h6>
                  </div>
                  <div className="pricing-planscontent pricing-planscontent-seven">
                    <ul>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Upto 5 Bathroom Cleaning</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Upto 10 bedrooms Cleaning</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Full Furnished Rooms 15 sqft Cleaning</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Additional 16 Rooms</span>
                      </li>
                      <li>
                        <i className="fa fa-check me-2" />
                        <span>Small kitchen (0 - 150 ft2)</span>
                      </li>
                    </ul>
                    <div className="pricing-btn">
                      <Link to={routes.search} className="btn btn-view w-100">
                        Choose Plan
                      </Link>
                    </div>
                    <div className="price-bg">
                      <ImageWithBasePath src="assets/img/bg/price-bg-vector.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /pricing Section */}
        {/* Testimonials Section */}
        <section className="testimonals-seven-section pt-0">
          <div className="container">
            <div className="section-heading section-heading-seven">
              <div className="row">
                <div className="col-md-6 aos" data-aos="fade-up">
                  <h2>Top Providers</h2>
                  <p>Description highlights the value of client feedback, showcases real testimonials</p>
                </div>
                <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                  <div className="owl-nav mynav-test" />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <div className="testimonals-top-seven">
                  <ImageWithBasePath
                    src="assets/img/testimonials-seven.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <Slider
                  {...testimonialSlider}
                  className="testimonals-seven-slider"
                >
                  <div className="testimonials-main-ryt">
                    <div className="testimonials-content-seven">
                      <div className="testimonials-seven-img">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-17.jpg"
                          alt="User"
                        />
                        <div className="testimonials-img-content">
                          <h6>James Williams</h6>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                          </div>
                        </div>
                      </div>
                      <ImageWithBasePath
                        src="assets/img/icons/test-quote.svg"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don
                    </p>
                  </div>
                  <div className="testimonials-main-ryt">
                    <div className="testimonials-content-seven">
                      <div className="testimonials-seven-img">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-19.jpg"
                          alt="User"
                        />
                        <div className="testimonials-img-content">
                          <h6>James Williams</h6>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                          </div>
                        </div>
                      </div>
                      <ImageWithBasePath
                        src="assets/img/icons/test-quote.svg"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don
                    </p>
                  </div>
                  <div className="testimonials-main-ryt">
                    <div className="testimonials-content-seven">
                      <div className="testimonials-seven-img">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-11.jpg"
                          alt="User"
                        />
                        <div className="testimonials-img-content">
                          <h6>James Williams</h6>
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                          </div>
                        </div>
                      </div>
                      <ImageWithBasePath
                        src="assets/img/icons/test-quote.svg"
                        alt="image"
                        className="img-fluid"
                      />
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* /Testimonials Section */}
        {/* pricing Section */}
        <section className="price-sections-seven  blog-sec-seven">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div
                  className="section-heading section-heading-seven aos"
                  data-aos="fade-up"
                >
                  <h2>Our Recent Blog</h2>
                  <p>
                  Here’s a compelling blog description designed to attract readers and provide a clear idea of what they can expect from your blog:
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider {...recentBlog} className="our-recent-blog">
                  <div className="blog blog-new flex-fill aos" data-aos="fade-up">
                    <div className="blog-image">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath
                          className="img-fluid"
                          src="assets/img/blog/house-blog-03.jpg"
                          alt="Post Image"
                        />
                      </Link>
                      <div className="date">
                        25<span>Dec</span>
                      </div>
                      <ul className="blog-item">
                        <li>
                          <div className="post-author">
                            <Link to="#">
                              <i className="feather-user" />
                              <span>Hal Lewis</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="feather-message-square" />
                          Comments (5)
                        </li>
                      </ul>
                    </div>
                    <div className="blog-content mb-0">
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
                  <div className="blog blog-new flex-fill  aos" data-aos="fade-up">
                    <div className="blog-image">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath
                          className="img-fluid"
                          src="assets/img/blog/house-blog-01.jpg"
                          alt="Post Image"
                        />
                      </Link>
                      <div className="date">
                        25<span>Dec</span>
                      </div>
                      <ul className="blog-item">
                        <li>
                          <div className="post-author">
                            <Link to="#">
                              <i className="feather-user" />
                              <span>JohnDoe</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="feather-message-square" />
                          Comments (5)
                        </li>
                      </ul>
                    </div>
                    <div className="blog-content mb-0">
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
                  <div className="blog blog-new flex-fill aos" data-aos="fade-up">
                    <div className="blog-image">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath
                          className="img-fluid"
                          src="assets/img/blog/house-blog-02.jpg"
                          alt="Post Image"
                        />
                      </Link>
                      <div className="date">
                        25<span>Dec</span>
                      </div>
                      <ul className="blog-item">
                        <li>
                          <div className="post-author">
                            <Link to="#">
                              <i className="feather-user" />
                              <span>Greg Avery</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="feather-message-square" />
                          Comments (5)
                        </li>
                      </ul>
                    </div>
                    <div className="blog-content mb-0">
                      <h3 className="blog-title">
                        <Link to={routes.blogDetails}>
                          Specific features and benefits of your service marketplace.
                        </Link>
                      </h3>
                      <p>
                        Before hiring a service provider, check their reviews and ratings on the
                        marketplace...
                      </p>
                    </div>
                  </div>
                  <div className="blog blog-new flex-fill  aos" data-aos="fade-up">
                    <div className="blog-image">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath
                          className="img-fluid"
                          src="assets/img/blog/house-blog-03.jpg"
                          alt="Post Image"
                        />
                      </Link>
                      <div className="date">
                        25<span>Dec</span>
                      </div>
                      <ul className="blog-item">
                        <li>
                          <div className="post-author">
                            <Link to="#">
                              <i className="feather-user" />
                              <span>JohnDoe</span>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <i className="feather-message-square" />
                          Comments (5)
                        </li>
                      </ul>
                    </div>
                    <div className="blog-content mb-0">
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

                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* /pricing Section */}
        {/* Partners Section */}
        <section className="our-partners-seven">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div
                  className="section-heading section-heading-seven aos"
                  data-aos="fade-up"
                >
                  <h2>Our Partners</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              </div>
              <Slider {...partnersSlider} className="partners-slider-seven aos">
                <div className="partner-img">
                  <ImageWithBasePath
                    src="assets/img/partner/partner1.svg"
                    alt="img"
                  />
                </div>
                <div className="partner-img">
                  <ImageWithBasePath
                    src="assets/img/partner/partner2.svg"
                    alt="img"
                  />
                </div>
                <div className="partner-img">
                  <ImageWithBasePath
                    src="assets/img/partner/partner3.svg"
                    alt="img"
                  />
                </div>
                <div className="partner-img">
                  <ImageWithBasePath
                    src="assets/img/partner/partner4.svg"
                    alt="img"
                  />
                </div>
                <div className="partner-img">
                  <ImageWithBasePath
                    src="assets/img/partner/partner5.svg"
                    alt="img"
                  />
                </div>
                <div className="partner-img">
                  <ImageWithBasePath
                    src="assets/img/partner/partner6.svg"
                    alt="img"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/* Partners Section */}
      </div>
      <FooterSeven />
    </>
  );
};

export default HomeSeven;
