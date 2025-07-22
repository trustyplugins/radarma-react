import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FooterFour from './footer-four';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import HomeHeader from '../header/home-header';

const homeFour = () => {
  const routes = all_routes;
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [
    { name: 'Select Category' },
    { name: 'Tornoto' },
    { name: 'Texas' },
  ];
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
  const cateringSlider = {
    dots: true,
    autoplay: false,
    arrows:false,
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
  const featuresSlider = {
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
  const worldSlider = {
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
  const clientSlider = {
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
  const companySlider = {
    dots: false,
    autoplay: true,
    arrows:false,
    slidesToShow: 6,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
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
  const usefulSlider = {
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
  return (
    <>
      <HomeHeader type={5} />
      <div className='home-four-wrapper'>
        {/* Hero Section */}
        <section className="catering-banner-section">
          <div className="container">
            <div className="home-banner slider-service">
              <div className="row align-items-center justify-content-center w-100">
                <div className="col-lg-7 col-md-10 mx-auto">
                  <div className="section-search section-search-four">
                    <h1>
                      Reviews &amp; Ratings of Best <span>Catering Service</span>{" "}
                      Providers Near You
                    </h1>
                    <p>
                      Helped 10,000+ Customers to find the right caterers for their
                      functions and events around the world.
                    </p>
                    <div className="search-box search-box-four">
                      <form action={routes.search} className="search-three-form">
                        <div className="search-input search-input-three search-input-four">
                          <i className="feather icon-check-square me-2" />
                          <div className="form-group m-0 ">
                          <Dropdown
                              value={selectedValue}
                              onChange={(e) => setSelectedValue(e.value)}
                              options={value}
                              optionLabel="name"
                              placeholder="Select Category"
                              className="select border-none"
                            />
                          </div>
                        </div>
                        <div className="search-input search-input-three search-input-four">
                          <i className="feather icon-map-pin me-2" />
                          <div className="form-group mb-0">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Location"
                            />
                          </div>
                        </div>
                        <div className="search-btn">
                          <button className="btn btn-primary" type="submit">
                            <i className="feather icon-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="catering-banner-botton d-flex flex-wrap row-gap-3">
                      <div className="catering-btn-services d-flex align-items-center">
                        <div className="catering-btn-icon d-flex justify-content-center align-items-center rounded me-2 mb-0">
                          <ImageWithBasePath src="assets/img/icons/server-icon.svg" alt="Icon" />
                        </div>
                        <div>
                          <h5 className="mb-0">3000+</h5>
                          <h6>Services</h6>
                        </div>
                      </div>
                      <div className="catering-btn-services d-flex align-items-center">
                        <div className="catering-btn-icon d-flex justify-content-center align-items-center rounded me-2 mb-0">
                          <ImageWithBasePath src="assets/img/icons/Fries-icon.svg" alt="Icon" />
                        </div>
                        <div>
                          <h5 className="mb-0">900+</h5>
                          <h6>Food Items</h6>
                        </div>
                      </div>
                      <div className="catering-btn-services d-flex align-items-center">
                        <div className="catering-btn-icon d-flex justify-content-center align-items-center rounded me-2 mb-0">
                          <ImageWithBasePath src="assets/img/icons/star-icon.svg" alt="Icon" />
                        </div>
                        <div>
                          <h5 className="mb-0">Review</h5>
                          <h6>15k (4.8)</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="catering-banner-img d-none d-lg-block">
                    <ImageWithBasePath
                      src="assets/img/catering/catering-banner.jpg"
                      className="img-fluid h-100"
                      alt="Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /Hero Section */}
        {/* Feature Section */}
        <section className="nearby-section">
          <div className="container">
            <div className="section-heading section-heading-four">
              <div className="row align-items-center">
                <div className="col-md-6 aos" data-aos="fade-up">
                  <h2>Nearby Cateres For You</h2>
                  <p>Here’s a list of popular locations around the world, categorized by region, that are often sought after for various reasons.</p>
                </div>
                <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                  <Link
                    to={routes.serviceDetails1}
                    className="btn btn-primary btn-view"
                  >
                    view All
                    <i className="feather icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider
                  {...cateringSlider}
                  className="catering-slider common-four-slider"
                >
                  <div
                    className="service-widget service-two service-four aos"
                    data-aos="fade-up"
                  >
                    <div className="service-common-four">
                      <div className="service-img">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/catering/catring-01.jpg"
                            className="img-fluid serv-img"
                            alt="catering Image"
                          />
                        </Link>
                      </div>
                      <div className="service-content">
                        <div className="catering-main-bottom">
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(3800 Reviews)</span>
                          </div>
                          <h3 className="title">
                            <Link to={routes.serviceDetails1}>Food Chef Caterings</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="service-content-bottom">
                      <div className="service-cater-img">
                        <ImageWithBasePath src="assets/img/profiles//avatar-03.jpg" alt="User" />
                        <p>Harling Shaw</p>
                      </div>
                      <h6>4.5 KM</h6>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two service-four aos"
                    data-aos="fade-up"
                  >
                    <div className="service-common-four">
                      <div className="service-img">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/catering/catring-02.jpg"
                            className="img-fluid serv-img"
                            alt="catering Image"
                          />
                        </Link>
                      </div>
                      <div className="service-content">
                        <div className="catering-main-bottom">
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(1654 Reviews)</span>
                          </div>
                          <h3 className="title">
                            <Link to={routes.serviceDetails1}>Magnificent Caterers</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="service-content-bottom">
                      <div className="service-cater-img">
                        <ImageWithBasePath src="assets/img/profiles//avatar-04.jpg" alt="User" />
                        <p>Daniel Mathew</p>
                      </div>
                      <h6>6.5 KM</h6>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two service-four aos"
                    data-aos="fade-up"
                  >
                    <div className="service-common-four">
                      <div className="service-img">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/catering/catring-03.jpg"
                            className="img-fluid serv-img"
                            alt="catering Image"
                          />
                        </Link>
                      </div>
                      <div className="service-content">
                        <div className="catering-main-bottom">
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(4577 Reviews)</span>
                          </div>
                          <h3 className="title">
                            <Link to={routes.serviceDetails1}>Food Chef Caterings</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="service-content-bottom">
                      <div className="service-cater-img">
                        <ImageWithBasePath src="assets/img/profiles//avatar-05.jpg" alt="User" />
                        <p>Karen Risb</p>
                      </div>
                      <h6>2.5 KM</h6>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two service-four aos"
                    data-aos="fade-up"
                  >
                    <div className="service-common-four">
                      <div className="service-img">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            src="assets/img/catering/catring-04.jpg"
                            className="img-fluid serv-img"
                            alt="catering Image"
                          />
                        </Link>
                      </div>
                      <div className="service-content">
                        <div className="catering-main-bottom">
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(1571 Reviews)</span>
                          </div>
                          <h3 className="title">
                            <Link to={routes.serviceDetails1}>Posh Caterers</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="service-content-bottom">
                      <div className="service-cater-img">
                        <ImageWithBasePath src="assets/img/profiles//avatar-06.jpg" alt="User" />
                        <p>Habibul Akbar</p>
                      </div>
                      <h6>6.5 KM</h6>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two service-four aos"
                    data-aos="fade-up"
                  >
                    <div className="service-common-four">
                      <div className="service-img">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            className="img-fluid serv-img"
                            alt="Service Image"
                            src="assets/img/catering/catring-03.jpg"
                          />
                        </Link>
                      </div>
                      <div className="service-content">
                        <div className="catering-main-bottom">
                          <div className="rating">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <span>(3800 Reviews)</span>
                          </div>
                          <h3 className="title">
                            <Link to={routes.serviceDetails1}>Food Chef Caterings</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="service-content-bottom">
                      <div className="service-cater-img">
                        <ImageWithBasePath src="assets/img/profiles//avatar-03.jpg" alt="User" />
                        <p>Harling Shaw</p>
                      </div>
                      <h6>4.5 KM</h6>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* /Feature Section */}
        {/* Categories Section */}
        <section className="categories-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div
                  className="section-heading section-heading-four category-heading aos"
                  data-aos="fade-up"
                >
                  <h2>Catering Service Categories</h2>
                  <p>
                    A featured services marketplace typically offers a platform where
                    various service providers
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-3 col-md-3 d-flex ">
                <Link to={routes.serviceDetails1} className="w-100">
                  <div className="categories-main-all flex-fill">
                    <div className="categories-img">
                      <span className="active">
                        <ImageWithBasePath src="assets/img/icons/catering-07.svg" alt="Category" />
                      </span>
                    </div>
                    <h5>Event</h5>
                    <span className="category-bottom">
                      <i className="feather icon-chevron-right " />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 d-flex ">
                <Link to={routes.serviceDetails1} className="w-100">
                  <div className="categories-main-all flex-fill">
                    <div className="categories-img">
                      <span>
                        <ImageWithBasePath src="assets/img/icons/catering-01.svg" alt="Category" />
                      </span>
                    </div>
                    <h5>Birthday Party</h5>
                    <span className="category-bottom">
                      <i className="feather icon-chevron-right " />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 d-flex ">
                <Link to={routes.serviceDetails1} className="w-100 h-100">
                  <div className="categories-main-all flex-fill">
                    <div className="categories-img">
                      <span>
                        <ImageWithBasePath src="assets/img/icons/catering-02.svg" alt="Category" />
                      </span>
                    </div>
                    <h5>Indoor </h5>
                    <span className="category-bottom">
                      <i className="feather icon-chevron-right " />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 d-flex ">
                <Link to={routes.serviceDetails1} className="w-100">
                  <div className="categories-main-all ">
                    <div className="categories-img">
                      <span>
                        <ImageWithBasePath src="assets/img/icons/catering-03.svg" alt="Category" />
                      </span>
                    </div>
                    <h5>Outdoor</h5>
                    <span className="category-bottom">
                      <i className="feather icon-chevron-right " />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 d-flex ">
                <Link to={routes.serviceDetails1} className="w-100">
                  <div className="categories-main-all ">
                    <div className="categories-img">
                      <span>
                        <ImageWithBasePath src="assets/img/icons/catering-04.svg" alt="Category" />
                      </span>
                    </div>
                    <h5>International</h5>
                    <span className="category-bottom">
                      <i className="feather icon-chevron-right " />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 d-flex ">
                <Link to={routes.serviceDetails1} className="w-100">
                  <div className="categories-main-all ">
                    <div className="categories-img">
                      <span>
                        <ImageWithBasePath src="assets/img/icons/catering-08.svg" alt="Category" />
                      </span>
                    </div>
                    <h5>Buffet</h5>
                    <span className="category-bottom">
                      <i className="feather icon-chevron-right " />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 d-flex ">
                <Link to={routes.serviceDetails1} className="w-100">
                  <div className="categories-main-all ">
                    <div className="categories-img">
                      <span>
                        <ImageWithBasePath src="assets/img/icons/catering-05.svg" alt="Category" />
                      </span>
                    </div>
                    <h5>Kitty Party</h5>
                    <span className="category-bottom">
                      <i className="feather icon-chevron-right " />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 d-flex ">
                <Link to={routes.serviceDetails1} className="w-100">
                  <div className="categories-main-all ">
                    <div className="categories-img">
                      <span>
                        <ImageWithBasePath src="assets/img/icons/catering-06.svg" alt="Category" />
                      </span>
                    </div>
                    <h5>Party </h5>
                    <span className="category-bottom">
                      <i className="feather icon-chevron-right " />
                    </span>
                  </div>
                </Link>
              </div>
              <div className="btn-sec btn-catering aos" data-aos="fade-up">
                <Link to={routes.categories} className="btn btn-primary btn-view">
                  View all Categories
                  <i className="feather icon-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* /Categories Section */}
        {/* Features Services */}
        <section className="features-four-section">
          <div className="container">
            <div className="section-heading section-heading-four">
              <div className="row align-items-center">
                <div className="col-md-6 aos" data-aos="fade-up">
                  <h2>Featured Cateres</h2>
                  <p>Explore the greatest our services. You won’t be disappointed
                  </p>
                </div>
                <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                  <Link
                    to={routes.serviceDetails1}
                    className="btn btn-prim ary btn-view"
                  >
                    View all Caterers
                    <i className="feather icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider
                  {...featuresSlider}
                  className=" features-four-slider common-four-slider"
                >
                  <div
                    className="service-widget service-two aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img service-four-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service-img"
                          src="assets/img/catering/catering-05.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <div className="rate-four">
                          <i className="fas fa-star filled" />
                          <span>4.8</span>
                        </div>
                      </div>
                    </div>
                    <div className="service-content service-four-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Swagatham Caters
                        </Link>
                      </h3>
                      <p className="service-cater-bottom">
                        <i className="feather icon-map-pin me-2"></i>
                        New Jersey, USA
                      </p>
                      <p>
                        we are also engage in offering catering services and
                        decoration services where vision...
                      </p>
                      <ul>
                        <li>Buffet Caterings</li>
                        <li>Engagement</li>
                      </ul>
                      <div className="category-feature-bottom">
                        <p>Starting from $500</p>
                        <Link to={''}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img service-four-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service-img"
                          src="assets/img/catering/catering-06.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <div className="rate-four">
                          <i className="fas fa-star filled" />
                          <span>4.9</span>
                        </div>
                      </div>
                    </div>
                    <div className="service-content service-four-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Delight Catering
                        </Link>
                      </h3>
                      <p className="service-cater-bottom">
                        <i className="feather icon-map-pin me-2"></i>
                        Nevada, USA
                      </p>
                      <p>
                        we are also engage in offering catering services and
                        decoration services where vision...
                      </p>
                      <ul>
                        <li>Indoor</li>
                        <li>Engagement</li>
                        <li>Kitty Partying</li>
                      </ul>
                      <div className="category-feature-bottom">
                        <p>Starting from $255</p>
                        <Link to={''}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img service-four-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service-img"
                          src="assets/img/catering/catering-06.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <div className="rate-four">
                          <i className="fas fa-star filled" />
                          <span>3.8</span>
                        </div>
                      </div>
                    </div>
                    <div className="service-content service-four-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Homemade Foods Caters
                        </Link>
                      </h3>
                      <p className="service-cater-bottom">
                        <i className="feather icon-map-pin me-2"></i>
                        Chicago, USA
                      </p>
                      <p>
                        we are also engage in offering catering services and
                        decoration services where vision...
                      </p>
                      <ul>
                        <li>Buffet Caterings</li>
                        <li>Engagement</li>
                      </ul>
                      <div className="category-feature-bottom">
                        <p>Starting from $500</p>
                        <Link to={''}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="service-widget service-two aos"
                    data-aos="fade-up"
                  >
                    <div className="service-img service-four-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service-img"
                          src="assets/img/catering/catering-06.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <div className="rate-four">
                          <i className="fas fa-star filled" />
                          <span>4.8</span>
                        </div>
                      </div>
                    </div>
                    <div className="service-content service-four-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Swagatham Caters
                        </Link>
                      </h3>
                      <p className="service-cater-bottom">
                        <i className="feather icon-map-pin me-2"></i>
                        New Jersey, USA
                      </p>
                      <p>
                        we are also engage in offering catering services and
                        decoration services where vision...
                      </p>
                      <ul>
                        <li>Indoor</li>
                        <li>Engagement</li>
                        <li>Kitty Partying</li>
                        <li>international</li>
                      </ul>
                      <div className="category-feature-bottom">
                        <p>Starting from $500</p>
                        <Link to={''}>Book Now</Link>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* /Features Services */}
        {/* Categories Section */}
        <section className="trust-us-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div
                  className="section-heading section-heading-four category-heading aos"
                  data-aos="fade-up"
                >
                  <h2>Why Trust us</h2>
                  <p>
                    We are growing day by day in terms of catering service providers
                    listing,
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center row-gap-3">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
                <div className="trust-us-main flex-fill">
                  <div className="trust-us-img">
                    <i className="feather icon-star" />
                  </div>
                  <h6 className="text-truncate">Verified Reviews</h6>
                  <p>
                    We has more than 4000 Caterers &amp; catering service companies (and
                    counting) listed with detailed information
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
                <div className="trust-us-main flex-fill">
                  <div className="trust-us-img">
                    <i className="ti ti-coffee" />
                  </div>
                  <h6 className="text-truncate">Catering Services</h6>
                  <p>
                    We has more than 4000 Caterers &amp; catering service companies (and
                    counting) listed with detailed information
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
                <div className="trust-us-main flex-fill">
                  <div className="trust-us-img">
                    <i className="feather icon-file-text" />
                  </div>
                  <h6 className="text-truncate">Research &amp; Surveys</h6>
                  <p>
                    We has more than 4000 Caterers &amp; catering service companies (and
                    counting) listed with detailed information
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
                <div className="trust-us-main flex-fill">
                  <div className="trust-us-img">
                    <i className="feather icon-briefcase" />
                  </div>
                  <h6 className="text-truncate">Experience In Business</h6>
                  <p>
                    We has more than 4000 Caterers &amp; catering service companies (and
                    counting) listed with detailed information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /Categories Section */}
        {/* Popular Services */}
        <section className="popular-four-section">
          <div className="container">
            <div className="section-heading section-heading-four">
              <div className="row align-items-center row-gap-3">
                <div className="col-md-6 aos" data-aos="fade-up">
                  <h2>Popular Locations</h2>
                  <p>
                    One of the biggest advantages of using a service marketplace is the
                    access to a wide range of services.
                  </p>
                </div>
                <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                  <Link to={routes.categories} className="btn btn-primary btn-view">
                    View all Locations
                    <i className="feather icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="popular-four-main">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="popular-portfolio">
                    <Link to={routes.categories}>
                      <div className="popular-portfolio-img">
                        <ImageWithBasePath src="assets/img/gallery/gallery-img-5.jpg" alt="image" />
                        <div className="popular-portfolio-overlay">
                          <h6>NewYork</h6>
                          <p>165 Caterings</p>
                        </div>
                      </div>
                    </Link>
                    <Link to={routes.categories}>
                      <div className="popular-portfolio-img">
                        <ImageWithBasePath src="assets/img/gallery/gallery-img-6.jpg" alt="image" />
                        <div className="popular-portfolio-overlay">
                          <h6>Los Angels</h6>
                          <p>45 Caterings</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="popular-portfolio">
                    <Link to={routes.categories2}>
                      <div className="popular-portfolio-img">
                        <ImageWithBasePath src="assets/img/gallery/gallery-img-4.jpg" alt="image" />
                        <div className="popular-portfolio-overlay">
                          <h6>Istanbul</h6>
                          <p>30 Caterings</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="popular-portfolio">
                    <Link to={routes.categories}>
                      <div className="popular-portfolio-img">
                        <ImageWithBasePath src="assets/img/gallery/gallery-img-7.jpg" alt="image" />
                        <div className="popular-portfolio-overlay">
                          <h6>Paris</h6>
                          <p>47 Caterings</p>
                        </div>
                      </div>
                    </Link>
                    <Link to={routes.categories}>
                      <div className="popular-portfolio-img">
                        <ImageWithBasePath src="assets/img/gallery/gallery-img-8.jpg" alt="image" />
                        <div className="popular-portfolio-overlay">
                          <h6>London</h6>
                          <p>78 Caterings</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="popular-portfolio">
                    <Link to={routes.categories}>
                      <div className="popular-portfolio-img">
                        <ImageWithBasePath src="assets/img/gallery/gallery-img-9.jpg" alt="image" />
                        <div className="popular-portfolio-overlay">
                          <h6>Florida</h6>
                          <p>14 Caterings</p>
                        </div>
                      </div>
                    </Link>
                    <Link to={routes.categories}>
                      <div className="popular-portfolio-img">
                        <ImageWithBasePath src="assets/img/gallery/gallery-img-10.jpg" alt="image" />
                        <div className="popular-portfolio-overlay">
                          <h6>Miami</h6>
                          <p>54 Caterings</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /Popular Services */}
        {/* Working Section */}
        <section className="Working-four-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div
                  className="section-heading working-four-heading section-heading-four aos"
                  data-aos="fade-up"
                >
                  <p>Working Steps</p>
                  <h2 className="mb-0">How we are working</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center row-gap-3">
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
                <div className="working-four-main flex-fill">
                  <h6>Step 1</h6>
                  <div className="working-four-img">
                    <ImageWithBasePath src="assets/img/icons/working-1.svg" alt="Work" />
                  </div>
                  <h4 className="mb-2 text-truncate">Choose a Service Category</h4>
                  <p>Select the type of catering service you are looking for </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
                <div className="working-four-main flex-fill">
                  <h6>Step 2</h6>
                  <div className="working-four-img">
                    <ImageWithBasePath src="assets/img/icons/working-2.svg" alt="Work" />
                  </div>
                  <h4 className="mb-2 text-truncate">Choose a Service Category</h4>
                  <p>Select the type of catering service you are looking for </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
                <div className="working-four-main flex-fill">
                  <h6>Step 3</h6>
                  <div className="working-four-img">
                    <ImageWithBasePath src="assets/img/icons/working-3.svg" alt="Work" />
                  </div>
                  <h4 className="mb-2 text-truncate">Check Catererings Details</h4>
                  <p>Select the type of catering service you are looking for </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
                <div className="working-four-main flex-fill">
                  <h6>Step 4</h6>
                  <div className="working-four-img">
                    <ImageWithBasePath src="assets/img/icons/working-4.svg" alt="Work" />
                  </div>
                  <h4 className="mb-2 text-truncate">Book the best catererings</h4>
                  <p>Select the type of catering service you are looking for </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ Working Section */}
        {/* Around the world  Services */}
        <section className="around-world-section">
          <div className="container">
            <div className="section-heading section-heading-four">
              <div className="row align-items-center row-gap-3">
                <div className="col-md-6 aos" data-aos="fade-up">
                  <h2>Top Caterers Around the World</h2>
                  <p>
                    Here’s a list of popular locations around the world, categorized by
                    region
                  </p>
                </div>
                <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                  <Link to={routes.categories} className="btn btn-primary btn-view">
                    View all Caterings
                    <i className="feather icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider {...worldSlider} className="world-four-slider common-four-slider">
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          src="assets/img/catering/catering-08.jpg"
                          className="img-fluid serv-img"
                          alt="Service Image"
                        />
                      </Link>
                      <div className="fav-item fav-item-four w-100">
                        <div className="rating mb-0">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                        <Link to="#" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-four-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>MealMenu Caterings</Link>
                      </h3>
                      <p>
                        we are also engage in offering catering services and decoration
                        services where vision...
                      </p>
                      <ul>
                        <li>Buffet Caterings</li>
                        <li>Engagement</li>
                      </ul>
                      <p>
                        <span className="mini-mealmenu">$900</span>
                        <span className="mealmenu">$200</span>
                      </p>
                    </div>
                    <div className="service-content-bottom">
                      <div className="service-cater-img service-world-img">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/profiles//avatar-03.jpg" alt="User" />
                        </Link>
                        <p className="service-cater-bottom">
                          <i className="feather icon-map-pin" />
                          New Jersey, USA
                        </p>
                      </div>
                      <span>
                        <i className="feather icon-calendar" />
                      </span>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          src="assets/img/catering/catering-09.jpg"
                          className="img-fluid serv-img"
                          alt="Service Image"
                        />
                      </Link>
                      <div className="fav-item fav-item-four w-100">
                        <div className="rating mb-0">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                        <Link to="#" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-four-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Blue Sea Catering &amp; Banquets
                        </Link>
                      </h3>
                      <p>
                        we are also engage in offering catering services and decoration
                        services where vision...
                      </p>
                      <ul>
                        <li>Buffet Caterings</li>
                        <li>Engagement</li>
                      </ul>
                      <p>
                        <span className="mini-mealmenu">$600</span>
                        <span className="mealmenu">$450</span>
                      </p>
                    </div>
                    <div className="service-content-bottom">
                      <div className="service-cater-img service-world-img">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/profiles//avatar-06.jpg" alt="User" />
                        </Link>
                        <p className="service-cater-bottom">
                          <i className="feather icon-map-pin" />
                          Main Boulevard, Lahore,
                        </p>
                      </div>
                      <span>
                        <i className="feather icon-calendar" />
                      </span>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          src="assets/img/catering/catering-10.jpg"
                          className="img-fluid serv-img"
                          alt="Service Image"
                        />
                      </Link>
                      <div className="fav-item fav-item-four w-100">
                        <div className="rating mb-0">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                        <Link to="#" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-four-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Popular Hospitality</Link>
                      </h3>
                      <p>
                        we are also engage in offering catering services and decoration
                        services where vision...
                      </p>
                      <ul>
                        <li>Buffet Caterings</li>
                        <li>Engagement</li>
                      </ul>
                      <p>
                        <span className="mini-mealmenu">$700</span>
                        <span className="mealmenu">$100</span>
                      </p>
                    </div>
                    <div className="service-content-bottom">
                      <div className="service-cater-img service-world-img">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/profiles//avatar-08.jpg" alt="User" />
                        </Link>
                        <p className="service-cater-bottom">
                          <i className="feather icon-map-pin" />
                          USA Peachfield Road, Uk
                        </p>
                      </div>
                      <span>
                        <i className="feather icon-calendar" />
                      </span>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          src="assets/img/catering/catering-09.jpg"
                          className="img-fluid serv-img"
                          alt="Service Image"
                        />
                      </Link>
                      <div className="fav-item fav-item-four w-100">
                        <div className="rating mb-0">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                        <Link to="#" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-content service-four-content">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Blue Sea Catering &amp; Banquets
                        </Link>
                      </h3>
                      <p>
                        we are also engage in offering catering services and decoration
                        services where vision...
                      </p>
                      <ul>
                        <li>Buffet Caterings</li>
                        <li>Engagement</li>
                      </ul>
                      <p>
                        <span className="mini-mealmenu">$600</span>
                        <span className="mealmenu">$450</span>
                      </p>
                    </div>
                    <div className="service-content-bottom">
                      <div className="service-cater-img service-world-img">
                        <Link to={routes.providerDetails}>
                          <ImageWithBasePath src="assets/img/profiles//avatar-09.jpg" alt="User" />
                        </Link>
                        <p className="service-cater-bottom">
                          <i className="feather icon-map-pin" />
                          Main Boulevard, Lahore,
                        </p>
                      </div>
                      <span>
                        <i className="feather icon-calendar" />
                      </span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>

        {/* /Around the world  Services */}
        <section className="review-client-section">
          <div className="container">
            <div className="section-heading section-heading-four">
              <div className="row align-items-center row-gap-3">
                <div className="col-md-6 aos" data-aos="fade-up">
                  <h2>Reviews from our Clients</h2>
                  <p>
                    Description highlights the value of client feedback, showcases real
                    testimonials
                  </p>
                </div>
                <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                  <Link to={routes.customerReviews} className="btn btn-primary btn-view">
                    View all Reviews
                    <i className="feather icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider {...clientSlider}  className="owl-carousel popular-slider-2 client-four-slider common-four-slider mb-0">
                  <div className="client-review-main">
                    <div className="client-review-top">
                      <div className="client-review-name mb-2">
                        <h6>Daniela Fransis</h6>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                      <p>
                        Versatile and user-friendly platform for freelancers and
                        businesses alike. Its interface is clean and intuitive, making
                        it easy to post jobs, browse profiles, and manage projects.
                      </p>
                    </div>
                    <span className="client-review-img avatar avatar-xl p-1 bg-white rounded-circle">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-15.jpg"
                        className="rounded-circle"
                        alt="User"
                      />
                    </span>
                  </div>
                  <div className="client-review-main">
                    <div className="client-review-top">
                      <div className="client-review-name mb-2">
                        <h6>Hashimoda Reena</h6>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                      <p>
                        Offers a comprehensive marketplace for finding local service
                        professionals across a wide range of categories, including home
                        improvement, events, and personal services. The platform is
                        user-friendly,
                      </p>
                    </div>
                    <span className="client-review-img avatar avatar-xl p-1 bg-white rounded-circle">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-19.jpg"
                        className="rounded-circle"
                        alt="User"
                      />
                    </span>
                  </div>
                  <div className="client-review-main">
                    <div className="client-review-top">
                      <div className="client-review-name mb-2">
                        <h6>Jake Sulaine</h6>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                      <p>
                        Offers a comprehensive marketplace for finding local service
                        professionals across a wide range of categories, including home
                        improvement, events, and personal services. The platform is
                        user-friendly,
                      </p>
                    </div>
                    <span className="client-review-img avatar avatar-xl p-1 bg-white rounded-circle">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-18.jpg"
                        className="rounded-circle"
                        alt="User"
                      />
                    </span>
                  </div>
                  <div className="client-review-main">
                    <div className="client-review-top">
                      <div className="client-review-name mb-2">
                        <h6>Daniela Fransis</h6>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                      <p>
                        Versatile and user-friendly platform for freelancers and
                        businesses alike. Its interface is clean and intuitive, making
                        it easy to post jobs, browse profiles, and manage projects.
                      </p>
                    </div>
                    <span className="client-review-img avatar avatar-xl p-1 bg-white rounded-circle">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-21.jpg"
                        className="rounded-circle"
                        alt="User"
                      />
                    </span>
                  </div>
                </Slider>
              </div>
            </div>
            <Slider {...companySlider} 
              className="testimonial-slider aos"
              data-aos="fade-up"
            >
              <div className="company-logos">
                <ImageWithBasePath
                  src="assets/img/catering/logo-01.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="company-logos">
                <ImageWithBasePath
                  src="assets/img/catering//logo-02.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="company-logos">
                <ImageWithBasePath
                  src="assets/img/catering//logo-03.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="company-logos">
                <ImageWithBasePath
                  src="assets/img/catering//logo-06.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="company-logos">
                <ImageWithBasePath
                  src="assets/img/catering//logo-04.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="company-logos">
                <ImageWithBasePath
                  src="assets/img/catering//logo-05.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="company-logos">
                <ImageWithBasePath
                  src="assets/img/catering/logo-03.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
              <div className="company-logos">
                <ImageWithBasePath
                  src="assets/img/catering//logo-06.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </div>
            </Slider>
          </div>
        </section>

        {/* /Reviews from our Clients */}
        {/* Interesting & Useful Blogs section */}
        <section className="useful-blog-section">
          <div className="container">
            <div className="section-heading section-heading-four">
              <div className="row">
                <div className="col-md-6 aos" data-aos="fade-up">
                  <h2>Interesting &amp; Useful Blogs</h2>
                  <p>Here’s a compelling blog description designed to provide a clear idea
                  </p>
                </div>
                <div className="col-md-6 text-md-end aos" data-aos="fade-up">
                  <Link
                    to={routes.blogDetails}
                    className="btn btn-primary btn-view"
                  >
                    View all Blogs
                    <i className="feather icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Slider
                  {...usefulSlider}
                  className="useful-four-slider common-four-slider"
                >
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath
                          src="assets/img/catering/catering-11.jpg"
                          className="img-fluid serv-img"
                          alt="Service Image"
                        />
                      </Link>
                    </div>
                    <div className="service-content service-four-blogs">
                      <div className=" border-bottom mb-3">
                        <h3 className="title mb-1">
                          <Link to={routes.blogDetails} className="text-truncate">
                            Take Advantage of Trial Periods
                          </Link>
                        </h3>
                        <p className="mb-3">
                          Specific features and benefits of your service marketplace.
                        </p>
                      </div>
                      <div className="usefull-bottom">
                        <div className="d-flex align-items-center">
                          <span className="useful-img avatar avatar-lg me-2">
                            <Link to={routes.customerProfile} className="text-truncate">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-10.jpg"
                                className="rounded-circle"
                                alt="User"
                              />
                            </Link>
                          </span>
                          <span className="fs-14">by Reni Sarow</span>
                        </div>
                        <div>
                          <span className="fs-14">
                            <i className="ti ti-calendar me-1" />
                            09 Aug 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath
                          src="assets/img/catering/catering-12.jpg"
                          className="img-fluid serv-img"
                          alt="Service Image"
                        />
                      </Link>
                    </div>
                    <div className="service-content service-four-blogs">
                      <div className=" border-bottom mb-3">
                        <h3 className="title mb-1">
                          <Link to={routes.blogDetails} className="text-truncate">
                            Maximize Your Business Potential
                          </Link>
                        </h3>
                        <p className="mb-3">
                          One of the biggest advantages of using a service marketplace
                        </p>
                      </div>
                      <div className="usefull-bottom">
                        <div className="d-flex align-items-center">
                          <span className="useful-img avatar avatar-lg me-2">
                            <Link to={routes.customerProfile}>
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-25.jpg"
                                className="rounded-circle"
                                alt="User"
                              />
                            </Link>
                          </span>
                          <span className="fs-14">by Andrew Jermi</span>
                        </div>
                        <div>
                          <span className="fs-14">
                            <i className="ti ti-calendar me-1" />
                            09 Aug 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.blogDetails} className="text-truncate">
                        <ImageWithBasePath
                          src="assets/img/catering/catering-13.jpg"
                          className="img-fluid serv-img"
                          alt="Service Image"
                        />
                      </Link>
                    </div>
                    <div className="service-content service-four-blogs">
                      <div className=" border-bottom mb-3">
                        <h3 className="title mb-1 ">
                          <Link to={routes.blogDetails} className="text-truncate">
                            Specific features and benefits of you
                          </Link>
                        </h3>
                        <p className="mb-3">
                          Before hiring a service provider, check their reviews and ratings on
                          the marketplace...
                        </p>
                      </div>
                      <div className="usefull-bottom">
                        <div className="d-flex align-items-center">
                          <span className="useful-img avatar avatar-lg me-2">
                            <Link to={routes.customerProfile}>
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-07.jpg"
                                className="rounded-circle"
                                alt="User"
                              />
                            </Link>
                          </span>
                          <span className="fs-14">by Christoper Daniel</span>
                        </div>
                        <div>
                          <span className="fs-14">
                            <i className="ti ti-calendar me-1" />
                            09 Aug 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-widget aos" data-aos="fade-up">
                    <div className="service-img">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath
                          src="assets/img/catering/catering-12.jpg"
                          className="img-fluid serv-img"
                          alt="Service Image"
                        />
                      </Link>
                    </div>
                    <div className="service-content service-four-blogs">
                      <div className=" border-bottom mb-3">
                        <h3 className="title mb-1">
                          <Link to={routes.blogDetails} className="text-truncate">
                            Take Advantage of Trial Periods
                          </Link>
                        </h3>
                        <p className="mb-3">
                          Specific features and benefits of your service marketplace.
                        </p>
                      </div>
                      <div className="usefull-bottom">
                        <div className="d-flex align-items-center">
                          <span className="useful-img avatar avatar-lg me-2">
                            <Link to={routes.customerProfile}>
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-54.jpg"
                                className="rounded-circle"
                                alt="User"
                              />
                            </Link>
                          </span>
                          <span className="fs-14">by Reni Sarow</span>
                        </div>
                        <div>
                          <span className="fs-14">
                            <i className="ti ti-calendar me-1" />
                            09 Aug 2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </Slider>
              </div>
            </div>
          </div>
        </section>
        {/* /Interesting & Useful Blogs section */}
      </div>
      <FooterFour />
    </>
  );
};

export default homeFour;
