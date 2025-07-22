import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Icon from 'react-feather';
import FooterTwo from './footer-two';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import HomeHeader from '../header/home-header';

const HomeTwo = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: true,
  };
  const one = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const two = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const three = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nav: false,
  };
  const four = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  return (
    <>
      {/* <HeaderTwo /> */}
      <div className="home-two-wrapper">
        <HomeHeader type={3} />
        <section className="hero-section-two py-0">
          <div>
            <Slider {...settings} className="banner-slider slider">
              <div className="banner">
                <ImageWithBasePath
                  className="img-fluid"
                  src="assets/img/banner.jpg"
                  alt="img"
                />
              </div>
              <div className="banner">
                <ImageWithBasePath
                  className="img-fluid"
                  src="assets/img/banner-02.jpg"
                  alt="img"
                />
              </div>
              <div className="banner">
                <ImageWithBasePath
                  className="img-fluid"
                  src="assets/img/banner-03.jpg"
                  alt="img"
                />
              </div>
            </Slider>
          </div>
          <div className="banner-search aos" data-aos="fade-up">
            <div className="container">
              <div className="row">
                <div className="col-l-10 col-md-11 mx-auto">
                  <h1>
                    Worlds Largest <span>Marketplace</span>
                  </h1>
                  <p>Search From 150 Awesome Verified Ads!</p>
                  <div className="search-box-two">
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
                          >
                            <i className="fas fa-crosshairs" />
                          </Link>
                        </div>
                      </div>
                      <div className="search-btn">
                        <button className="btn search_service" type="submit">
                          <Icon.Search className="feather icon-search me-2" />
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section-two">
          <div className="container">
            <div className="row">
              <div className="col-md-6 aos" data-aos="fade-up">
                <div className="section-heading-two">
                  <h2>Featured Categories</h2>
                  <p>What do you need to find?</p>
                </div>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <Link
                  to={routes.categories}
                  className="btn btn-primary btn-view rounded-pill"
                >
                  View All
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="feature-widget">
                  <div className="feature-img">
                    <Link to={routes.search}>
                      <ImageWithBasePath
                        src="assets/img/categories/categories-01.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="feature-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/feature-icon-09.svg"
                        alt="img"
                      />
                    </span>
                    <div className="feature-title">
                      <h5>Construction</h5>
                      <p>10 Services</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-widget">
                  <div className="feature-img">
                    <Link to={routes.search}>
                      <ImageWithBasePath
                        src="assets/img/categories/categories-02.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="feature-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/feature-icon-10.svg"
                        alt="img"
                      />
                    </span>
                    <div className="feature-title">
                      <h5>Interior</h5>
                      <p>08 Services</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-widget">
                  <div className="feature-img">
                    <Link to={routes.search}>
                      <ImageWithBasePath
                        src="assets/img/categories/categories-03.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="feature-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/feature-icon-11.svg"
                        alt="img"
                      />
                    </span>
                    <div className="feature-title">
                      <h5>Car Wash</h5>
                      <p>15 Services</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-widget">
                  <div className="feature-img">
                    <Link to={routes.search}>
                      <ImageWithBasePath
                        src="assets/img/categories/categories-04.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="feature-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/feature-icon-12.svg"
                        alt="img"
                      />
                    </span>
                    <div className="feature-title">
                      <h5>Cleaning</h5>
                      <p>20 Services</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-widget">
                  <div className="feature-img">
                    <Link to={routes.search}>
                      <ImageWithBasePath
                        src="assets/img/categories/categories-05.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="feature-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/feature-icon-13.svg"
                        alt="img"
                      />
                    </span>
                    <div className="feature-title">
                      <h5>Electrical</h5>
                      <p>17 Services</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="feature-widget">
                  <div className="feature-img">
                    <Link to={routes.search}>
                      <ImageWithBasePath
                        src="assets/img/categories/categories-06.jpg"
                        className="img-fluid"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="feature-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/feature-icon-14.svg"
                        alt="img"
                      />
                    </span>
                    <div className="feature-title">
                      <h5>Construction</h5>
                      <p>13 Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 aos" data-aos="fade-up">
                <div className="section-heading-two">
                  <h2>Featured Services</h2>
                  <p>
                    Explore the greates our services. You won’t be disappointed
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <Link to={routes.categories} className="btn btn-primary btn-view rounded-pill">View All</Link>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="service-widget service-two aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/categories/categories-07.jpg"
                      />
                    </Link>
                    <div className="fav-item">
                      <Link to={routes.categories}>
                        <span className="item-cat">Cleaning</span>
                      </Link>
                      <Link to="#" 
                       onClick={() => handleItemClick(1)}
                      className={`fav-icon ${
                            selectedItems[1] ? 'selected' : ''
                          }`}>
                        <i className="feather icon-heart" />
                      </Link>
                    </div>
                    <div className="item-info">
                      <Link to={routes.providersList}>
                        <span className="item-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="avatar"
                            alt="User"
                          />{" "}
                          Jeny Doe
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <Link to={routes.serviceDetails1}>Toughened Glass Fitting Services</Link>
                    </h3>
                    <p>
                      <i className="feather icon-map-pin me-2" />
                      Chicago, USA
                      <span className="rate">
                        <i className="feather icon-phone me-2" />
                        301-591-8194
                      </span>
                    </p>
                    <div className="serv-info">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span>(10)</span>
                      </div>
                      <h6>
                        $25.00<span className="old-price">$35.00</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-widget service-two aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/categories/categories-08.jpg"
                      />
                    </Link>
                    <div className="fav-item">
                      <Link to={routes.categories}>
                        <span className="item-cat">Construction</span>
                      </Link>
                      <Link to="#" onClick={() => handleItemClick(2)}
                      className={`fav-icon ${
                            selectedItems[2] ? 'selected' : ''
                          }`}>
                        <i className="feather icon-heart" />
                      </Link>
                    </div>
                    <div className="item-info">
                      <Link to={routes.providersList}>
                        <span className="item-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="avatar"
                            alt="User"
                          />{" "}
                          Nick John
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <Link to={routes.serviceDetails1}>Car Repair Services</Link>
                    </h3>
                    <p>
                      <i className="feather icon-map-pin me-2" />
                      Montana, USA
                      <span className="rate">
                        <i className="feather icon-phone me-2" />
                        615-325-1630
                      </span>
                    </p>
                    <div className="serv-info">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span>(10)</span>
                      </div>
                      <h6>$45.00</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-widget service-two aos" data-aos="fade-up">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/categories/categories-09.jpg"
                      />
                    </Link>
                    <div className="fav-item">
                      <Link to={routes.categories}>
                        <span className="item-cat">Carpentry</span>
                      </Link>
                      <Link to="#" onClick={() => handleItemClick(3)}
                      className={`fav-icon ${
                            selectedItems[3] ? 'selected' : ''
                          }`}>
                        <i className="feather icon-heart" />
                      </Link>
                    </div>
                    <div className="item-info">
                      <Link to={routes.providersList}>
                        <span className="item-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="avatar"
                            alt="User"
                          />{" "}
                          james
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="title">
                      <Link to={routes.serviceDetails1}>Electric Panel Repairing Service</Link>
                    </h3>
                    <p>
                      <i className="feather icon-map-pin me-2" />
                      Montana, USA
                      <span className="rate">
                        <i className="feather icon-phone me-2" />
                        901-489-4357
                      </span>
                    </p>
                    <div className="serv-info">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span>(10)</span>
                      </div>
                      <h6>$45.00</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </section>

        <section className="work-section-two">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div
                  className="section-heading sec-header aos"
                  data-aos="fade-up"
                >
                  <h2>How It Works</h2>
                  <p>Straightforward process designed to make your experience seamless and hassle-free.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="work-wrap-box work-first aos"
                  data-aos="fade-up"
                >
                  <div className="work-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/work-icon-01.svg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <h5>Search and Browse</h5>
                  <p>Customers can browse or search for specific products or services using categories, filters, or search bars.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="work-wrap-box work-last aos" data-aos="fade-up">
                  <div className="work-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/work-icon-02.svg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <h5>Find What You Want</h5>
                  <p>
                  Customers can add items to their cart. For services, they may select a service and proceed to book.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="work-wrap-box aos" data-aos="fade-up">
                  <div className="work-flex">
                    <div className="work-icon">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/work-icon-03.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <h5>Order Fulfillment</h5>
                    <p>
                      The Customer fulfills the order by either providing the service to the customer & Get Leads from locals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section upnav">
          <div className="container">
            <div className="row">
              <div className="col-md-6 aos" data-aos="fade-up">
                <div className="section-heading-two">
                  <h2>Most Popular Services</h2>
                  <p>
                    Explore the greates our services. You won’t be disappointed
                  </p>
                </div>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <div className="owl-nav mynav1" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider {...two} className="service-slider">
                  <div
                    className="service-widget service-two aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="img"
                          src="assets/img/categories/categories-10.jpg"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={5}
                        onClick={() => handleItemClick(5)}
                      >
                        <Link to={routes.categories}>
                          <span className="item-cat">Construction</span>
                        </Link>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[5] ? 'selected' : ''
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providerDetails}>
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
                        Commercial Painting Services
                        </Link>
                      </h3>
                      <p>
                        <i className="feather icon-map-pin me-1" />
                        Maryland City, MD, USA
                        <span className="rate">
                          <i className="feather icon-phone" />
                          870-893-9351
                        </span>
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(10)</span>
                        </div>
                        <h6>
                          $20.00<span className="old-price">$35.00</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt=""
                          src="assets/img/categories/categories-11.jpg"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={3}
                        onClick={() => handleItemClick(6)}
                      >
                        <Link to={routes.categories}>
                          <span className="item-cat">Carpentry</span>
                        </Link>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[6] ? 'selected' : ''
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providerDetails}>
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
                        Wooden Carpentry Work
                        </Link>
                      </h3>
                      <p>
                        <i className="feather icon-map-pin me-1" />
                        Alabama, USA
                        <span className="rate">
                          <i className="feather icon-phone" />
                          248-905-6719
                        </span>
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(10)</span>
                        </div>
                        <h6>$500.00</h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt=""
                          src="assets/img/categories/categories-12.jpg"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={4}
                        onClick={() => handleItemClick(7)}
                      >
                        <Link to={routes.categories}>
                          <span className="item-cat">Cleaning</span>
                        </Link>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[7] ? 'selected' : ''
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providerDetails}>
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
                        House Cleaning Services
                        </Link>
                      </h3>
                      <p>
                        <i className="feather icon-map-pin me-1" />
                        California, USA
                        <span className="rate">
                          <i className="feather icon-phone" />
                          636-527-0374
                        </span>
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(10)</span>
                        </div>
                        <h6>
                          $80.00<span className="old-price">$96.00</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt=""
                          src="assets/img/categories/categories-03.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to={routes.categories}>
                          <span className="item-cat">Cleaning</span>
                        </Link>
                        <Link to="#" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                      <div className="item-info">
                        <Link to={routes.providerDetails}>
                          <span className="item-img">
                            <ImageWithBasePath
                              src="assets/img/categories/categories-03.jpg"
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
                        <i className="feather icon-map-pin me-1" />
                        Texas, USA
                        <span className="rate">
                          <i className="feather icon-phone" />
                          908-734-7033
                        </span>
                      </p>
                      <div className="serv-info">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(10)</span>
                        </div>
                        <h6>$500.00</h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>

        <section className="providers-section-two">
          <div className="container">
            <div className="row">
              <div className="col-md-6 aos" data-aos="fade-up">
                <div className="section-heading-two white-text">
                  <h2>Top Providers</h2>
                  <p>Sed ut perspiciatis unde omnis iste natus error</p>
                </div>
              </div>
              <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                <Link
                  to={routes.providerDetails}
                  className="btn btn-primary btn-view rounded-pill"
                >
                  View All
                  <i className="feather icon-arrow-right-circle" />
                </Link>
              </div>
            </div>
            <div className="row  aos" data-aos="fade-up">
              <div className="col-lg-3 col-sm-6">
                <div className="providerset provider-box">
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
                          <i
                            className="fa fa-check-circle"
                            aria-hidden="true"
                          />
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
                      <div className="rate">
                        <i className="fas fa-star filled" />
                        <span>4.8</span>
                      </div>
                      <Link
                        to={routes.providerDetails}
                        className="btn btn-pink"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="providerset provider-box">
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
                          <i
                            className="fa fa-check-circle"
                            aria-hidden="true"
                          />
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
                      <div className="rate">
                        <i className="fas fa-star filled" />
                        <span>4.8</span>
                      </div>
                      <Link
                        to={routes.providerDetails}
                        className="btn btn-pink"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="providerset provider-box">
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
                          <i
                            className="fa fa-check-circle"
                            aria-hidden="true"
                          />
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
                      <div className="rate">
                        <i className="fas fa-star filled" />
                        <span>4.8</span>
                      </div>
                      <Link
                        to={routes.providerDetails}
                        className="btn btn-pink"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="providerset provider-box">
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
                          <i
                            className="fa fa-check-circle"
                            aria-hidden="true"
                          />
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
                      <div className="rate">
                        <i className="fas fa-star filled" />
                        <span>4.8</span>
                      </div>
                      <Link
                        to={routes.providerDetails}
                        className="btn btn-pink"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="price-sections">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center aos" data-aos="fade-up">
                <div className="section-heading sec-header">
                  <h2>Pricing Plans</h2>
                  <p>New service providers can test the platform. </p>
                </div>
              </div>
            </div>
            <div className="price-toggle mb-0 text-center">
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
                <div className="pricing-plans price-new">
                  <div className="pricing-planshead">
                    <h6>
                      $19<span>/month</span>
                    </h6>
                    <h4>Starter</h4>
                    <h5>Basic service description and up to 3 images</h5>
                  </div>
                  <div className="pricing-planscontent">
                    <ul>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>Ability to list up to 3 services</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>Access to buyer inquiries</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>3% transaction fee on sales</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>New service providers can test platform.</span>
                      </li>
                    </ul>
                    <div className="pricing-btn">
                      <Link to={routes.search} className="btn btn-view">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="pricing-plans price-new active">
                  <div className="pricing-planshead">
                    <div className="price-block">
                      <span className="popular">MOST POPULAR</span>
                    </div>
                    <h6>
                      $89<span>/month</span>
                    </h6>
                    <h4>Company</h4>
                    <h5>Enhanced service description with video support</h5>
                  </div>
                  <div className="pricing-planscontent">
                    <ul>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>Ability to list up to 10 services</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>Up to 10 images per service</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>Custom pricing for enterprise-level service</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>3% transaction fee on sales</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>New service providers can test the platform.</span>
                      </li>
                    </ul>
                    <div className="pricing-btn">
                      <Link to={routes.search} className="btn btn-view">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="pricing-plans price-new">
                  <div className="pricing-planshead">
                    <h6>
                      $150<span>/month</span>
                    </h6>
                    <h4>Professional</h4>
                    <h5>Advanced service with multiple media types</h5>
                  </div>
                  <div className="pricing-planscontent">
                    <ul>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>Unlimited service listings</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>Unlimited images per service</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>Custom pricing for enterprise-level service</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle me-2" />
                        <span>2% transaction fee on sales</span>
                      </li>
                    </ul>
                    <div className="pricing-btn">
                      <Link to={routes.search} className="btn btn-view">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="app-section-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12">
                <div className="appimg aos" data-aos="fade-up">
                  <ImageWithBasePath
                    src="assets/img/mobile.png"
                    className="img-fluid"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="download-sec">
                  <div className="section-heading-two">
                    <p>Download App</p>
                    <h2>Were available on mobile Just download it!</h2>
                  </div>
                  <div className="heading aos" data-aos="fade-up">
                    <p>
                    Whether youre looking to our app brings everything you need right to your fingertips. Enjoy a smooth and intuitive experience designed with you in mind.
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
                  <div className="downlaod-btn aos" data-aos="fade-up">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/appstore.svg"
                        alt="img"
                      />
                    </Link>
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/googleplay.svg"
                        alt="img"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="client-section-two">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="section-heading sec-header aos" data-aos="fade-up">
                  <h2>Testimonials</h2>
                  <p>
                    Description highlights the value of client feedback, showcases real
                    testimonials
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="client-box w-100 aos" data-aos="fade-up">
                  <div className="client-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <h6>“The best service”</h6>
                    <p>
                      Versatile and user-friendly platform for freelancers and
                      businesses alike. Its interface is clean and intuitive, making it
                      easy to post jobs, browse profiles, and manage projects. The range
                      of services is impressive,
                    </p>
                  </div>
                  <div className="client-img">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Image"
                        src="assets/img/profiles/avatar-01.jpg"
                      />
                    </Link>
                    <div className="client-name">
                      <h5>Sophie Moore</h5>
                      <h6>Head of Design at Google</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="client-box w-100 aos" data-aos="fade-up">
                  <div className="client-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <h6>“Awesome Works”</h6>
                    <p>
                      Excels in providing a quick and easy way to find help for everyday
                      tasks and home repairs. The platform is straightforward, allowing
                      users to post tasks and receive from local
                    </p>
                  </div>
                  <div className="client-img">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Image"
                        src="assets/img/profiles/avatar-02.jpg"
                      />
                    </Link>
                    <div className="client-name">
                      <h5>Mike Hussy</h5>
                      <h6>Tech Lead</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="client-box w-100 aos" data-aos="fade-up">
                  <div className="client-content">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                    <h6>“Brilliant Work”</h6>
                    <p>
                      Offers a comprehensive marketplace for finding local service
                      professionals across a wide range of categories, including home
                      improvement, events, and personal services. The platform is
                      user-friendly,
                    </p>
                  </div>
                  <div className="client-img">
                    <Link to="#">
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Image"
                        src="assets/img/profiles/avatar-03.jpg"
                      />
                    </Link>
                    <div className="client-name">
                      <h5>Tom Beker</h5>
                      <h6>Ads Chairman</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="blog-section blog-section-two">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center aos" data-aos="fade-up">
                <div className="section-heading sec-header">
                  <h2>Our Recent News &amp; Blog</h2>
                  <p>
                    Here’s a compelling blog description designed to attract readers and
                    provide a clear idea of what they can expect from your blog:
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="blog blog-new flex-fill aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/blog/blog-15.jpg"
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
                            <i className="feather icon-user" />
                            <span>Hal Lewis</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="feather icon-message-square" />
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
                      In today’s fast-paced business world, finding the right services
                      to support your growth can be a game...
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="blog blog-new flex-fill  aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/blog/blog-16.jpg"
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
                            <i className="feather icon-user" />
                            <span>JohnDoe</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="feather icon-message-square" />
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
                      One of the biggest advantages of using a service marketplace is
                      the access to a wide range of services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="blog blog-new flex-fill aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/blog/blog-17.jpg"
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
                            <i className="feather icon-user" />
                            <span>Greg Avery</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="feather icon-message-square" />
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
                      Before hiring a service provider, check their reviews and ratings
                      on the marketplace...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <Link to={routes.blogGrid} className="btn btn-primary rounded-pill">
                View All Blogs
              </Link>
            </div>
          </div>
        </section>


        <section className="blog-section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center aos " data-aos="fade-up">
                <div className="section-heading sec-header">
                  <h2>Our Partners</h2>
                  <p>Discover how our marketplace can support your business growth.</p>
                </div>
                <Slider {...four} className="partners-slider aos ">
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

        <section className="section-offer">
          <div className="container">
            <div className="row  aos" data-aos="fade-up">
              <div className="col-md-12">
                <div className="offer-paths offer-sec">
                  <div className="offer-path-content">
                    <div className="section-heading-two">
                      <p>14 Days Free Trial</p>
                      <h3 className="mb-0">
                        We Are Offering 14 Days Free Trial
                      </h3>
                    </div>
                    <p>
                    Whether you&apos;re looking to our app brings everything you need right
									to your fingertips. Enjoy a smooth and intuitive experience designed
									with you in mind.
                    </p>
                    <Link to={routes.freeTrail} className="btn btn-dark rounded-pill">
                      Try 14 Days Free Trial
                      <i className="feather icon-arrow-right-circle ms-2" />
                    </Link>
                  </div>
                  <div className="offer-pathimg">
                    <ImageWithBasePath
                      src="assets/img/offer-img.png"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterTwo />
    </>
  );
};

export default HomeTwo;
