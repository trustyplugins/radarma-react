import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Icon from 'react-feather';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FooterOne from './footer-one';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import HomeHeader from '../header/home-header';
import QuoteModal from '../../common/modals/quote-modal';

const HomeOne = () => {
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

  const settings = {
    dots: false,
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
  const clientSlider = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
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
  const partnerSlider = {
    dots: false,
    autoplay: false,
    arrows:false,
    slidesToShow: 5,
    speed: 500,
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
          slidesToShow: 5,
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
      <HomeHeader type={2} />
      {/* Hero Section */}
      <section className="hero-section">
          <div className="bg-wave d-none d-md-block">
            <ImageWithBasePath src="assets/img/bg/bg-wave.png" className="img-fluid" alt="bg" />
          </div>
          <div className="corner-large d-none d-md-block">
            <ImageWithBasePath src="assets/img/bg/corner-large.png" className="img-fluid" alt="bg" />
          </div>
          <div className="corner-small d-none d-md-block">
            <ImageWithBasePath src="assets/img/bg/corner-small.png" className="img-fluid" alt="bg" />
          </div>

        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center w-100">
              <div className="col-lg-7 col-md-10 mx-auto">
                <div className="section-search aos" data-aos="fade-up">
                  <h1>Professional Services For Your Home &amp; Commercial </h1>
                  <p>Search From 100 Awesome Verified Ads!</p>
                  <div className="search-box">
                    <form>
                      <div className="search-input line">
                        <div className="search-group-icon">
                          <Icon.MapPin className="standard-feather" />
                        </div>
                        <div className="form-group mb-0">
                          <label>Your Location</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="America"
                          />
                        </div>
                      </div>
                      <div className="search-input">
                        <div className="search-group-icon search-icon">
                          <Icon.Search className="react-feather icon-custom" />
                        </div>
                        <div className="form-group mb-0">
                          <label>What are you looking for?</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Car Repair Services"
                          />
                        </div>
                      </div>
                      <div className="search-btn">
                        
                        <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal"
											data-bs-target="#quote_modal">Get a Quate</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-imgs">
                  <div className="banner-1 shape-1">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="banner"
                      src="assets/img/services/banner1.png"
                    />
                  </div>
                  <div className="banner-2 shape-3">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="banner"
                      src="assets/img/services/banner2.png"
                    />
                  </div>
                  <div className="banner-3 shape-3">
                    <ImageWithBasePath
                      className="img-fluid"
                      alt="banner"
                      src="assets/img/services/banner3.png"
                    />
                  </div>
                  <div className="banner-4 shape-2">
                    <ImageWithBasePath
                      className="img-responsive"
                      alt="banner"
                      src="assets/img/services/banner4.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
      {/* Feature Section */}
      <section className="feature-section">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Featured Categories</h2>
                <p>What do you need to find?</p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <Link
                  to={routes.categories}
                  className="btn btn-primary btn-view"
                >
                  View All
                  <Icon.ArrowRightCircle className="standard-feather ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <Link
                to={routes.serviceDetails1}
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/feature-icon-01.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Construction</h5>
                <div className="feature-overlay">
                  <ImageWithBasePath
                    src="assets/img/services/service-02.jpg"
                    alt="img"
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link
                to={routes.serviceDetails1}
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/feature-icon-02.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Car Wash</h5>
                <div className="feature-overlay">
                  <ImageWithBasePath src="assets/img/feature.jpg" alt="img" />
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link
                to={routes.serviceDetails1}
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/feature-icon-03.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Electrical</h5>
                <div className="feature-overlay">
                  <ImageWithBasePath
                    src="assets/img/services/service-01.jpg"
                    alt="img"
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link
                to={routes.serviceDetails1}
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/feature-icon-04.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Cleaning</h5>
                <div className="feature-overlay">
                  <ImageWithBasePath
                    src="assets/img/services/service-09.jpg"
                    alt="img"
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link
                to={routes.serviceDetails1}
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/feature-icon-05.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Interior</h5>
                <div className="feature-overlay">
                  <ImageWithBasePath
                    src="assets/img/services/service-07.jpg"
                    alt="img"
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link
                to={routes.serviceDetails1}
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/feature-icon-06.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Carpentry</h5>
                <div className="feature-overlay">
                  <ImageWithBasePath
                    src="assets/img/services/service-03.jpg"
                    alt="img"
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link
                to={routes.serviceDetails1}
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/feature-icon-07.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Computer</h5>
                <div className="feature-overlay">
                  <ImageWithBasePath
                    src="assets/img/services/service-06.jpg"
                    alt="img"
                  />
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-3">
              <Link
                to={routes.serviceDetails1}
                className="feature-box aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/feature-icon-08.svg"
                      alt="img"
                    />
                  </span>
                </div>
                <h5>Plumbing</h5>
                <div className="feature-overlay">
                  <ImageWithBasePath
                    src="assets/img/services/service-11.jpg"
                    alt="img"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /Feature Section */}
      {/* Service Section */}
      <section className="service-section upnav service-sec-two">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Featured Services</h2>
                <p>
                  Explore the greates our services. You won’t be disappointed
                </p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <div className="owl-nav mynav" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings} className="service-slider">
                <div className="service-widget aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/providers/provider-18.jpg"
                      />
                    </Link>
                    <div
                      className="fav-item"
                      key={1}
                      onClick={() => handleItemClick(1)}
                    >
                      <Link to={routes.categories}>
                        <span className="item-cat">Cleaning</span>
                      </Link>
                      <Link
                        to="#"
                        className={`fav-icon ${
                          selectedItems[1] ? 'selected' : ''
                        }`}
                      >
                        <Icon.Heart size={15} />
                      </Link>
                    </div>
                    <div className="item-info">
                      <Link to={routes.provider}>
                        <span className="item-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="avatar"
                            alt="User"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <Link to={routes.serviceDetails1}>
                        Electric Panel Repairing Service
                      </Link>
                    </h3>
                    <p>
                      {' '}
                      <Icon.MapPin className="standard-feather" />
                      New Jersey, USA
                      <span className="rate">
                        <i className="fas fa-star filled" />
                        4.9
                      </span>
                    </p>
                    <div className="serv-info">
                      <h6>
                        $25.00<span className="old-price">$35.00</span>
                      </h6>
                      <Link
                        to={routes.serviceDetails1}
                        className="btn btn-book"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="service-widget aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/providers/provider-14.jpg"
                      />
                    </Link>
                    <div
                      className="fav-item"
                      key={2}
                      onClick={() => handleItemClick(2)}
                    >
                      <Link to={routes.categories}>
                        <span className="item-cat">Construction</span>
                      </Link>
                      <Link
                        to="#"
                        className={`fav-icon ${
                          selectedItems[2] ? 'selected' : ''
                        }`}
                      >
                        <Icon.Heart size={15} />
                      </Link>
                    </div>
                    <div className="item-info">
                      <Link to={routes.provider}>
                        <span className="item-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="avatar"
                            alt="User"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <Link to={routes.serviceDetails1}>
                        Toughened Glass Fitting Services
                      </Link>
                    </h3>
                    <p>
                      {' '}
                      <Icon.MapPin className="standard-feather" />
                      Montana, USA
                      <span className="rate">
                        <i className="fas fa-star filled" />
                        4.9
                      </span>
                    </p>
                    <div className="serv-info">
                      <h6>$45.00</h6>
                      <Link
                        to={routes.serviceDetails1}
                        className="btn btn-book"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="service-widget aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/providers/provider-24.jpg"
                      />
                    </Link>
                    <div
                      className="fav-item"
                      key={3}
                      onClick={() => handleItemClick(3)}
                    >
                      <Link to={routes.categories}>
                        <span className="item-cat">Carpentry</span>
                      </Link>
                      <Link
                        to="#"
                        className={`fav-icon ${
                          selectedItems[3] ? 'selected' : ''
                        }`}
                      >
                        <Icon.Heart size={15} />
                      </Link>
                    </div>
                    <div className="item-info">
                      <Link to={routes.provider}>
                        <span className="item-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="avatar"
                            alt="User"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <Link to={routes.serviceDetails1}>
                        Wooden Carpentry Work
                      </Link>
                    </h3>
                    <p>
                      {' '}
                      <Icon.MapPin className="standard-feather" />
                      Montana, USA
                      <span className="rate">
                        <i className="fas fa-star filled" />
                        4.9
                      </span>
                    </p>
                    <div className="serv-info">
                      <h6>$45.00</h6>
                      <Link
                        to={routes.serviceDetails1}
                        className="btn btn-book"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="service-widget aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/providers/provider-23.jpg"
                      />
                    </Link>
                    <div
                      className="fav-item"
                      key={4}
                      onClick={() => handleItemClick(4)}
                    >
                      <Link to={routes.categories}>
                        <span className="item-cat">Construction</span>
                      </Link>
                      <Link
                        to="#"
                        className={`fav-icon ${
                          selectedItems[4] ? 'selected' : ''
                        }`}
                      >
                        <Icon.Heart size={15} />
                      </Link>
                    </div>
                    <div className="item-info">
                      <Link to={routes.provider}>
                        <span className="item-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            className="avatar"
                            alt="User"
                          />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <Link to={routes.serviceDetails1}>Plumbing Services</Link>
                    </h3>
                    <p>
                      {' '}
                      <Icon.MapPin className="standard-feather" />
                      Georgia, USA
                      <span className="rate">
                        <i className="fas fa-star filled" />
                        4.9
                      </span>
                    </p>
                    <div className="serv-info">
                      <h6>$45.00</h6>
                      <Link
                        to={routes.serviceDetails1}
                        className="btn btn-book"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className="btn-sec d-flex justify-content-center aos" data-aos="fade-up">
              <Link to={routes.search} className="btn btn-dark  d-flex align-items-center justify-content-center">
                View All
                <i className="ti ti-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Section */}
      {/* Providers Section */}
      <section className="providers-section">
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Top Providers</h2>
                <p>Meet Our Experts</p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <Link to={routes.provider} className="btn btn-dark">
                  View All
                  <i className="ti ti-arrow-right ms-1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row  aos" data-aos="fade-up">
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <Link to={routes.providerDetails}>
                    <ImageWithBasePath
                      src="assets/img/provider/provider-11.jpg"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <Link to={routes.providerDetails}>John Smith</Link>
                        <i className="fa fa-check-circle" aria-hidden="true" />
                      </h4>
                      <span>Electrician</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $20.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span>(320)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <Link to={routes.providerDetails}>
                    <ImageWithBasePath
                      src="assets/img/provider/provider-12.jpg"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <Link to={routes.providerDetails}>Michael</Link>
                        <i className="fa fa-check-circle" aria-hidden="true" />
                      </h4>
                      <span>Carpenter</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $50.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span>(228)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <Link to={routes.providerDetails}>
                    <ImageWithBasePath
                      src="assets/img/provider/provider-13.jpg"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <Link to={routes.providerDetails}>Antoinette</Link>
                        <i className="fa fa-check-circle" aria-hidden="true" />
                      </h4>
                      <span>Cleaner</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $25.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span>(130)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="providerset">
                <div className="providerset-img">
                  <Link to={routes.providerDetails}>
                    <ImageWithBasePath
                      src="assets/img/provider/provider-14.jpg"
                      alt="img"
                    />
                  </Link>
                </div>
                <div className="providerset-content">
                  <div className="providerset-price">
                    <div className="providerset-name">
                      <h4>
                        <Link to={routes.providerDetails}>Thompson</Link>
                        <i className="fa fa-check-circle" aria-hidden="true" />
                      </h4>
                      <span>Mechanic</span>
                    </div>
                    <div className="providerset-prices">
                      <h6>
                        $25.00<span>/hr</span>
                      </h6>
                    </div>
                  </div>
                  <div className="provider-rating">
                    <div className="rating">
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled me-1" />
                      <i className="fas fa-star filled" />
                      <i className="fa-solid fa-star-half-stroke filled" />
                      <span>(95)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Providers Section */}
      {/* Work Section */}
      <section className="work-section pt-0 mb-0">
        <div className="container">
          <div className="row  aos" data-aos="fade-up">
            <div className="col-md-12">
              <div className="offer-paths card">
                <div className="offer-bg d-none d-md-block">
                  <ImageWithBasePath src="assets/img/bg/dot-white-2.png" alt="img" />
                </div>
                <div className="card-body pb-0">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6">
                      <div className="offers-person-image d-none d-lg-block">
                        <ImageWithBasePath src="assets/img/bg/open-work-1.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content">
                        <h2 className="mb-2">We Are Offering 14 Days Free Trial</h2>
                        <p className="fs-14">
                          {" "}
                          Each service provider will have a listing that typically includes a
                          description of their services, pricing, availability, and any special
                          offers or packages.
                        </p>
                      </div>
                      <div className="offers-btn">
                        <Link to={routes.freeTrail} className="btn btn-white">
                          Try 14 Days Free Trial <i className="ti ti-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="section-heading aos" data-aos="fade-up">
              <h2>How It Works</h2>
              <p>
                Straightforward process designed to make your experience seamless and
                hassle-free.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex ">
            <div className="work-box card flex-fill aos" data-aos="fade-up">
              <div className="card-body">
                <div className="work-icon ">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/work-icon-hand.svg" alt="img" />
                  </span>
                </div>
                <h5>1. Search and Browse</h5>
                <p>
                  Customers can browse or search for specific products or services
                  using categories, filters, or search bars.
                </p>
                <h4>01</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="work-box flex-fill card aos" data-aos="fade-up">
              <div className="card-body">
                <div className="work-icon">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/find-icon.svg" alt="img" />
                  </span>
                </div>
                <h5>Add to Cart or Book Now</h5>
                <p>
                  Customers can add items to their shopping cart. For services, they
                  may select a service and proceed to book.
                </p>
                <h4>02</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="work-box card flex-fill aos" data-aos="fade-up">
              <div className="card-body">
                <div className="work-icon">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/place-icon.svg" alt="img" />
                  </span>
                </div>
                <h5>Order Fulfillment</h5>
                <p>
                  The Customer fulfills the order by either providing the service to
                  the buyer.{" "}
                </p>
                <h4>03</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>
      {/* /Work Section */}
      {/* Service Section */}
      <section className="service-section bg-white upnav">
      <div className="service-bg d-none d-md-block">
				<ImageWithBasePath src="assets/img/bg/square-sm.png" className="img-fluid" alt="bg" />
			</div>
        <div className="container">
          <div className="section-heading">
            <div className="row align-items-center">
              <div className="col-md-6 aos" data-aos="fade-up">
                <h2>Most Popular Services</h2>
                <p>
                  Explore the greates our services. You won’t be disappointed
                </p>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <div className="owl-nav mynav1" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
                <Slider {...settings} className='service-slider'>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/providers/provider-13.jpg"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={5}
                        onClick={() => handleItemClick(5)}
                      >
                        <Link to={routes.categories}>
                          <span className="item-cat">Car Repair</span>
                        </Link>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[5] ? 'selected' : ''
                          }`}
                        >
                          <Icon.Heart size={15} />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.provider}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              className="avatar"
                              alt="User"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Car Repair Services
                        </Link>
                      </h3>
                      <p>
                        {' '}
                        <Icon.MapPin className="standard-feather" />
                        Maryland City, MD, USA
                        <span className="rate">
                          <i className="fas fa-star filled" />
                          4.9
                        </span>
                      </p>
                      <div className="serv-info">
                        <h6>
                          $20.00<span className="old-price">$35.00</span>
                        </h6>
                        <Link
                          to={routes.serviceDetails1}
                          className="btn btn-light"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/providers/provider-20.jpg"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={6}
                        onClick={() => handleItemClick(6)}
                      >
                        <Link to={routes.categories}>
                          <span className="item-cat">Construction</span>
                        </Link>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[6] ? 'selected' : ''
                          }`}
                        >
                          <Icon.Heart size={15} />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.provider}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-02.jpg"
                              className="avatar"
                              alt="User"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Commercial Painting Services
                        </Link>
                      </h3>
                      <p>
                        {' '}
                        <Icon.MapPin className="standard-feather" />
                        Alabama, USA
                        <span className="rate">
                          <i className="fas fa-star filled" />
                          4.9
                        </span>
                      </p>
                      <div className="serv-info">
                        <h6>$500.00</h6>
                        <Link
                          to={routes.serviceDetails1}
                          className="btn btn-light"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/providers/provider-15.jpg"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={7}
                        onClick={() => handleItemClick(7)}
                      >
                        <Link to={routes.categories}>
                          <span className="item-cat">Computer</span>
                        </Link>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[7] ? 'selected' : ''
                          }`}
                        >
                          <Icon.Heart size={15} />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.provider}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-03.jpg"
                              className="avatar"
                              alt="User"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Computer &amp; Server AMC Service
                        </Link>
                      </h3>
                      <p>
                        {' '}
                        <Icon.MapPin className="standard-feather" />
                        California, USA
                        <span className="rate">
                          <i className="fas fa-star filled" />
                          4.9
                        </span>
                      </p>
                      <div className="serv-info">
                        <h6>
                          $80.00<span className="old-price">$96.00</span>
                        </h6>
                        <Link
                          to={routes.serviceDetails1}
                          className="btn btn-light"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/providers/provider-19.jpg"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={8}
                        onClick={() => handleItemClick(8)}
                      >
                        <Link to={routes.categories}>
                          <span className="item-cat">Cleaning</span>
                        </Link>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[8] ? 'selected' : ''
                          }`}
                        >
                          <Icon.Heart size={15} />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.provider}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-04.jpg"
                              className="avatar"
                              alt="User"
                            />
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Steam Car Wash</Link>
                      </h3>
                      <p>
                        {' '}
                        <Icon.MapPin className="standard-feather" />
                        Texas, USA
                        <span className="rate">
                          <i className="fas fa-star filled" />
                          4.9
                        </span>
                      </p>
                      <div className="serv-info">
                        <h6>$500.00</h6>
                        <Link
                          to={routes.serviceDetails1}
                          className="btn btn-light"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </Slider>
            </div>
            <div className="d-flex btn-sec justify-content-center aos" data-aos="fade-up">
              <Link to={routes.search} className="btn btn-dark d-flex align-items-center">
                View All
                <i className="ti ti-arrow-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Section */}
      {/* pricing Section */}
      <section className=" pricing-sections">
        <div className="price-bg d-none d-md-block">
          <ImageWithBasePath src="assets/img/bg/dot-blue.png" className="img-fluid" alt="bg" />
        </div>
        <div className="container">
          <div className="section-heading">
            <div className="row">
              <div className="col-md-12 text-center aos" data-aos="fade-up">
                <h2>Pricing Plans</h2>
                <p>
                  Designed to effectively communicate your service offerings and their
                  associated costs
                </p>
              </div>
            </div>
          </div>
          <div className="row aos" data-aos="fade-up">
            <div className="col-lg-4 col-sm-12 d-flex">
              <div className="pricing-plans card flex-fill">
                <div className="card-header">
                  <div>
                    <div className="pricing-header mb-3 text-center">
                      <h4>Basic</h4>
                      <p className="fs-14 ">
                        Basic service description and up to 3 images
                      </p>
                    </div>
                    <div className="pricing-header-dollar text-center">
                      <h3>
                        $50 <span className="fs-14 text-gray">/month</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="body-content mt-3">
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">
                        Ability to list up to 3 services
                      </p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">Access to buyer inquiries</p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">Basic customer support</p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-light-500 me-2" />
                      <p className="text-dark fs-14">5% transaction fee on sales</p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-light-500 me-2" />
                      <p className="text-dark fs-14">
                        New service providers can test the platform.
                      </p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-light-500 me-2" />
                      <p className="text-dark fs-14">
                        Custom pricing for enterprise-level service
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-0">
                  <div className="pricing-btn d-flex">
                    <Link
                      to="#"
                      className="btn btn-dark d-flex align-items-center justify-content-center w-100"
                    >
                      Get Started <i className="ti ti-circle-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 d-flex">
              <div className="pricing-plans card active position-relative flex-fill">
                <span className="position-absolute popular-badge">Popular</span>
                <div className="card-header">
                  <div>
                    <div className="pricing-header mb-3 text-center">
                      <h4>Standard</h4>
                      <p className="fs-14 ">
                        Enhanced service description with video support
                      </p>
                    </div>
                    <div className="pricing-header-dollar text-center">
                      <h3>
                        $100 <span className="fs-14 text-gray">/month</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="body-content mt-3">
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">
                        Ability to list up to 3 services
                      </p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">Access to buyer inquiries</p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">Basic customer support</p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">3% transaction fee on sales</p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">
                        New service providers can test the platform.
                      </p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-light-500 me-2" />
                      <p className="text-dark fs-14">
                        Custom pricing for enterprise-level service
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-0">
                  <div className="pricing-btn d-flex">
                    <Link
                      to="#"
                      className="btn btn-dark d-flex align-items-center justify-content-center w-100"
                    >
                      Get Started <i className="ti ti-circle-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 d-flex">
              <div className="pricing-plans card flex-fill">
                <div className="card-header">
                  <div>
                    <div className="pricing-header mb-3 text-center">
                      <h4>Premium</h4>
                      <p className="fs-14 ">
                        Advanced service with multiple media types
                      </p>
                    </div>
                    <div className="pricing-header-dollar text-center">
                      <h3>
                        $150 <span className="fs-14 text-gray">/month</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="body-content mt-3">
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">Unlimited service listings</p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">Unlimited images per service</p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">
                        Access to advanced marketing tools&nbsp;
                      </p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">2% transaction fee on sales</p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">Dedicated account manager</p>
                    </div>
                    <div className="d-flex align-items-center content-list">
                      <span className="ti ti-circle-check-filled text-success me-2" />
                      <p className="text-dark fs-14">
                        Analytics dashboard to track performance
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-0">
                  <div className="pricing-btn d-flex">
                    <Link
                      to="#"
                      className="btn btn-dark d-flex align-items-center justify-content-center w-100"
                    >
                      Get Started <i className="ti ti-circle-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /pricing Section */}
      {/* Client Section */}
      <section className="client-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-heading aos" data-aos="fade-up">
                <h2>What our client says</h2>
                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...clientSlider} className='testimonial-slider'>
              <div className="client-widget card aos" data-aos="fade-up">
                <div className="card-body">
                  <div className="client-img">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Image"
                        src="assets/img/profiles/avatar-01.jpg"
                      />
                    </Link>
                  </div>
                  <div className="client-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <p>
                      Versatile and user-friendly platform for freelancers and businesses
                      alike. Its interface is clean and intuitive, making it easy to post
                      jobs, browse profiles, and manage projects. The range of services is
                      impressive,{" "}
                    </p>
                    <h5>Hendriques Joy</h5>
                    <h6>Director</h6>
                  </div>
                </div>
              </div>
              <div className="client-widget card aos" data-aos="fade-up">
                <div className="card-body">
                  <div className="client-img">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Image"
                        src="assets/img/profiles/avatar-02.jpg"
                      />
                    </Link>
                  </div>
                  <div className="client-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <p>
                      Excels in providing a quick and easy way to find help for everyday
                      tasks and home repairs. The platform is straightforward, allowing
                      users to post tasks and receive from local{" "}
                    </p>
                    <h5>Norman David</h5>
                    <h6>CEO</h6>
                  </div>
                </div>
              </div>
              <div className="client-widget card aos" data-aos="fade-up">
                <div className="card-body">
                  <div className="client-img">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Image"
                        src="assets/img/profiles/avatar-03.jpg"
                      />
                    </Link>
                  </div>
                  <div className="client-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <p>
                      Offers a comprehensive marketplace for finding local service
                      professionals across a wide range of categories, including home
                      improvement, events, and personal services. The platform is
                      user-friendly,{" "}
                    </p>
                    <h5>Adrian Janet</h5>
                    <h6>Director</h6>
                  </div>
                </div>
              </div>
              <div className="client-widget card aos" data-aos="fade-up">
                <div className="card-body">
                  <div className="client-img">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Image"
                        src="assets/img/profiles/avatar-03.jpg"
                      />
                    </Link>
                  </div>
                  <div className="client-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <p>
                      Offers a comprehensive marketplace for finding local service
                      professionals across a wide range of categories, including home
                      improvement, events, and personal services. The platform is
                      user-friendly,{" "}
                    </p>
                    <h5>Adrian Janet</h5>
                    <h6>Director</h6>
                  </div>
                </div>
              </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* /Client Section */}
      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center aos " data-aos="fade-up">
              <div className="section-heading">
                <h2>Our Partners</h2>
                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
              </div>
            </div>
            <div className="aos" data-aos="fade-up">
              <Slider {...partnerSlider} className='partners-slider'>
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
        </div>
      </section>
      {/* Partners Section */}
      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center aos" data-aos="fade-up">
              <div className="section-heading">
                <h2>Latest Blog</h2>
                <p>Lorem ipsum dolor sit amet, consectetur elit</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="blog flex-fill aos" data-aos="fade-up">
              <div className="blog-image">
                <Link to={routes.blogDetails}>
                  <ImageWithBasePath
                    className="img-fluid"
                    src="assets/img/providers/provider-23.jpg"
                    alt="Post Image"
                  />
                </Link>
              </div>
              <div className="blog-content mb-0">
                <ul className="blog-items">
                  <li>
                    <i className="feather icon-calendar" />
                    09 Aug 2025
                  </li>
                  <li>
                    <div className="post-author">
                      <Link to="#">
                        <i className="feather icon-user" />
                        <span>Adrian</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <h3 className="blog-title">
                  <Link to={routes.blogDetails}>
                    Maximize Your Business Potential with the Right Service
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="blog flex-fill aos" data-aos="fade-up">
              <div className="blog-image">
                <Link to={routes.blogDetails}>
                  <ImageWithBasePath
                    className="img-fluid"
                    src="assets/img/providers/provider-19.jpg"
                    alt="Post Image"
                  />
                </Link>
              </div>
              <div className="blog-content mb-0">
                <ul className="blog-items">
                  <li>
                    <i className="feather icon-calendar" />
                    05 Aug 2025
                  </li>
                  <li>
                    <div className="post-author">
                      <Link to="#">
                        <i className="feather icon-user" />
                        <span>JohnDoe</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <h3 className="blog-title">
                  <Link to={routes.blogDetails}>
                    Take Advantage of Trial Periods or Consultations
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="blog flex-fill aos" data-aos="fade-up">
              <div className="blog-image">
                <Link to={routes.blogDetails}>
                  <ImageWithBasePath
                    className="img-fluid"
                    src="assets/img/providers/provider-31.jpg"
                    alt="Post Image"
                  />
                </Link>
              </div>
              <div className="blog-content mb-0">
                <ul className="blog-items">
                  <li>
                    <i className="feather icon-calendar" />
                    01 July 2025
                  </li>
                  <li>
                    <div className="post-author">
                      <Link to="#">
                        <i className="feather icon-user" />
                        <span>Josuva</span>
                      </Link>
                    </div>
                  </li>
                </ul>
                <h3 className="blog-title">
                  <Link to={routes.blogDetails}>
                    Specific features and benefits of your service marketplace.
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>
      {/* /Blog Section */}

      {/* App Section */}
      <section className="app-section">
        <div className="app-out-bg d-none d-md-block">
          <ImageWithBasePath src="assets/img/bg/spring-01.png" className="img-fluid" alt="bg" />
        </div>
        <div className="container">
          <div className="app-sec pb-lg-0">
            <div className="app-bg-1 d-none d-lg-block">
              <ImageWithBasePath
                src="assets/img/bg/ellipse-01.png"
                className="img-fluid"
                alt="bg"
              />
            </div>
            <div className="app-bg-2 d-none d-lg-block">
              <ImageWithBasePath
                src="assets/img/bg/ellipse-02.png"
                className="img-fluid"
                alt="bg"
              />
            </div>
            <div className="app-bg-3 d-none d-md-block">
              <ImageWithBasePath src="assets/img/bg/dot-white.png" className="img-fluid" alt="bg" />
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="col-md-12">
                  <div className="heading aos" data-aos="fade-up">
                    <h2>Download Our App</h2>
                    <p>
                      Whether youre looking to our app brings everything you need
                      right to your fingertips. Enjoy a smooth and intuitive
                      experience designed with you in mind.
                    </p>
                    <h6>Scan the QR code to get the app now</h6>
                    <div className="scan-img">
                      <ImageWithBasePath
                        src="assets/img/scan-img.png"
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
                <div className="downlaod-btn aos" data-aos="fade-up">
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/icons/goolge-play.svg" alt="img" />
                  </Link>
                  <Link to="#">
                    <ImageWithBasePath src="assets/img/icons/app-store.svg" alt="img" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="appimg-set aos d-none d-lg-block" data-aos="fade-up">
                  <ImageWithBasePath
                    src="assets/img/bg/phone.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /App Section */}
      <FooterOne />
      <QuoteModal/>
    </>
  );
};
export default HomeOne;
