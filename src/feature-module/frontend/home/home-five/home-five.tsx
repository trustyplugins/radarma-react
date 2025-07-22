import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import HeaderFive from './header-five';
import FooterFive from './footer-five';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const HomeFive = () => {
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
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));

  const One = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const Two = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const Three = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const Four = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const Five = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <HeaderFive />
      {/* Hello world */}
      {/* Feature Section */}
      <section className="featured-categories-section">
        <div className="featured-category-bg-img d-none d-lg-block">
          <ImageWithBasePath src="assets/img/car-category-five.png" alt="image" />
        </div>
        <div className="container">
          <div className="floating-five-main d-none d-lg-block">
            <div className="floating-five-buttom">
              <div className="floating-five-buttom-all">
                <h5 className="text-primary">1430 k</h5>
                <p>Cars Washed</p>
              </div>
              <div className="floating-five-buttom-img">
                <i className="fa-solid fa-car" />
              </div>
            </div>
            <div className="floating-five-buttom">
              <div className="floating-five-buttom-all">
                <h5 className="text-secondary">987 k</h5>
                <p>Happy Clients</p>
              </div>
              <div className="floating-five-buttom-img floating-fives-buttom-img">
                <i className="feather icon-users" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading car-wash-heading car-wash-feature aos"
                data-aos="fade-up"
              >
                <div className="car-wash-img-five">
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-1.svg"
                    alt="image"
                    className="car-wash-header-one"
                  />
                  <h2>Featured Categories</h2>
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-2.svg"
                    alt="image"
                    className="car-wash-header-two"
                  />
                </div>
                <p>
                  A featured services marketplace typically offers a platform where
                  various service providers.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-widget service-two aos" data-aos="fade-up">
                <div className="service-img service-four-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-01.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-content-five">
                  <div className="feature-content-bottom">
                    <p>Exterior Washing</p>
                    <Link to="#">
                      <i className="feather icon-users text-primary me-2" />
                      15
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-widget service-two aos" data-aos="fade-up">
                <div className="service-img service-four-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-02.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-content-five">
                  <div className="feature-content-bottom">
                    <p>Interior Washing</p>
                    <Link to="#">
                      <i className="feather icon-users text-primary me-2" />
                      15
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-widget service-two aos" data-aos="fade-up">
                <div className="service-img service-four-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-03.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-content-five">
                  <div className="feature-content-bottom">
                    <p>Vacuum Cleaning</p>
                    <Link to="#">
                      <i className="feather icon-users text-primary me-2" />
                      15
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-widget service-two aos" data-aos="fade-up">
                <div className="service-img service-four-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-4.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-content-five">
                  <div className="feature-content-bottom">
                    <p>Hand Car Wash</p>
                    <Link to="#">
                      <i className="feather icon-users text-primary me-2" />
                      15
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-widget service-two aos" data-aos="fade-up">
                <div className="service-img service-four-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-05.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-content-five">
                  <div className="feature-content-bottom">
                    <p>Chemical Car Wash</p>
                    <Link to="#">
                      <i className="feather icon-users text-primary me-2" />
                      15
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="service-widget service-two aos" data-aos="fade-up">
                <div className="service-img service-four-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-06.jpg"
                    />
                  </Link>
                </div>
                <div className="service-content service-content-five">
                  <div className="feature-content-bottom">
                    <p>Steam Car Wash</p>
                    <Link to="#">
                      <i className="feather icon-users text-primary me-2" />
                      15
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /Feature Section */}
      {/* Featured Services */}
      <section className="feature-category-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading car-wash-heading aos"
                data-aos="fade-up"
              >
                <div className="car-wash-img-five">
                  <div className="car-wash-img-five">
                    <ImageWithBasePath
                      src="assets/img/icons/car-wash-header-1.svg"
                      alt="image"
                      className="car-wash-header-one"
                    />
                    <h2>Featured Services</h2>
                    <ImageWithBasePath
                      src="assets/img/icons/car-wash-header-2.svg"
                      alt="image"
                      className="car-wash-header-two"
                    />
                  </div>
                </div>
                <p>Explore the greates our services. You won’t be disappointed</p>
              </div>
            </div>
          </div>
          <div className="row feature-category-nine">
            <div className="col-lg-4 col-md-6 col-12 d-flex">
              <div
                className="service-widget flex-fill w-100 aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-01.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five">
                      <div className="features-service-rating">
                        <i className="fas fa-star filled" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <Link to="javascript:void(0)" onClick={() => handleItemClick(1)}  className={`fav-icon fav-icon-five ${selectedItems[1] ? 'selected' : ''}`} >
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-five">
                  <h3 className="title">
                    <Link to={routes.serviceDetails1}>Basic Washing - Compact SUV</Link>
                  </h3>
                  <p>
                    <i className="feather icon-map-pin me-2" />
                    Bernardo Street, Tampa, USA
                  </p>
                  <div className="feature-services-five">
                    <h6>$45.00</h6>
                    <span>$96.00</span>
                  </div>
                  <div className="feature-service-botton">
                    <div className="d-flex align-items-center ">
                      <ImageWithBasePath src="assets/img/profiles/avatar-25.jpg" alt="User" />
                      <p className="fs-14 mb-0 ms-2">Madeline Hilli</p>
                    </div>
                    <div>
                      <Link to={routes.serviceDetails1} className="btn btn-dark">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex">
              <div
                className="service-widget flex-fill w-100 aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-02.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five">
                      <div className="features-service-rating">
                        <i className="fas fa-star filled" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <Link to="javascript:void(0)" onClick={() => handleItemClick(2)}  className={`fav-icon fav-icon-five ${selectedItems[2] ? 'selected' : ''}`}>
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-five">
                  <h3 className="title">
                    <Link to={routes.serviceDetails1}>
                      Interior Washing - Compact SUV
                    </Link>
                  </h3>
                  <p>
                    <i className="feather icon-map-pin me-2" />
                    Hartway Street, Gettysburg, USA
                  </p>
                  <div className="feature-services-five">
                    <h6>$24.00</h6>
                    <span>$69.00</span>
                  </div>
                  <div className="feature-service-botton">
                    <div className="d-flex align-items-center ">
                      <ImageWithBasePath src="assets/img/profiles/avatar-15.jpg" alt="User" />
                      <p className="fs-14 mb-0 ms-2">Cynthia Tyree</p>
                    </div>
                    <div>
                      <Link to={routes.serviceDetails1} className="btn btn-dark">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex">
              <div
                className="service-widget flex-fill w-100 aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-03.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five">
                      <div className="features-service-rating">
                        <i className="fas fa-star filled" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <Link to="javascript:void(0)" onClick={() => handleItemClick(3)}  className={`fav-icon fav-icon-five ${selectedItems[3] ? 'selected' : ''}`}>
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-five">
                  <h3 className="title">
                    <Link to={routes.serviceDetails1}>Vacuum Washing - Compact SUV</Link>
                  </h3>
                  <p>
                    <i className="feather icon-map-pin me-2" />
                    Havanna Street, Greensboro, USA
                  </p>
                  <div className="feature-services-five">
                    <h6>$35.00</h6>
                    <span>$42.00</span>
                  </div>
                  <div className="feature-service-botton">
                    <div className="d-flex align-items-center ">
                      <ImageWithBasePath src="assets/img/profiles/avatar-13.jpg" alt="User" />
                      <p className="fs-14 mb-0 ms-2">Adrian Lessli</p>
                    </div>
                    <div>
                      <Link to={routes.serviceDetails1} className="btn btn-dark">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-sec btn-sec-five aos" data-aos="fade-up">
            <Link to={routes.search} className="btn btn-primary">
              View all Services
            </Link>
          </div>
        </div>
      </section>

      {/* /Featured Services */}
      {/* Providers Section */}
      <section className="providers-section-five">
        <div className="providers-five-bg-car">
          <ImageWithBasePath src="assets/img/car-provider-bg.png" alt="image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading car-wash-heading aos"
                data-aos="fade-up"
              >
                <div className="car-wash-img-five">
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-1.svg"
                    alt="image"
                    className="car-wash-header-one"
                  />
                  <h2>Top Providers</h2>
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-2.svg"
                    alt="image"
                    className="car-wash-header-two"
                  />
                </div>
                <p>Meet Our Experts</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...One} className="top-providers-five">
                <div className="providerset">
                  <div className="providerset-img">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath src="assets/img/user/user-17.jpg" alt="img" />
                    </Link>
                  </div>
                  <div className="providerset-content">
                    <h4>
                      <Link to={routes.providerDetails}>Josh Knight</Link>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                    </h4>
                    <h5>Technician</h5>
                    <div className="provider-rating">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fa-solid fa-star-half-stroke filled" />
                        <span>(452)</span>
                      </div>
                      <div className="provider-cash">
                        <h5>$25.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="providerset">
                  <div className="providerset-img">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath src="assets/img/user/user-18.jpg" alt="img" />
                    </Link>
                  </div>
                  <div className="providerset-content">
                    <h4>
                      <Link to={routes.providerDetails}>Johnny Bell</Link>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                    </h4>
                    <h5>Technician</h5>
                    <div className="provider-rating">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fa-solid fa-star-half-stroke filled" />
                        <span>(452)</span>
                      </div>
                      <div className="provider-cash">
                        <h5>$25.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="providerset">
                  <div className="providerset-img">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath src="assets/img/user/user-19.jpg" alt="img" />
                    </Link>
                  </div>
                  <div className="providerset-content">
                    <h4>
                      <Link to={routes.providerDetails}>Elijah Johnson</Link>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                    </h4>
                    <h5>Technician</h5>
                    <div className="provider-rating">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fa-solid fa-star-half-stroke filled" />
                        <span>(452)</span>
                      </div>
                      <div className="provider-cash">
                        <h5>$25.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="providerset">
                  <div className="providerset-img">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath src="assets/img/user/user-20.jpg" alt="img" />
                    </Link>
                  </div>
                  <div className="providerset-content">
                    <h4>
                      <Link to={routes.providerDetails}>Ryan Fox</Link>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                    </h4>
                    <h5>Technician</h5>
                    <div className="provider-rating">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fa-solid fa-star-half-stroke filled" />
                        <span>(452)</span>
                      </div>
                      <div className="provider-cash">
                        <h5>$25.00</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="providerset">
                  <div className="providerset-img">
                    <Link to={routes.providerDetails}>
                      <ImageWithBasePath src="assets/img/user/user-18.jpg" alt="img" />
                    </Link>
                  </div>
                  <div className="providerset-content">
                    <h4>
                      <Link to={routes.providerDetails}>Ryan Fox</Link>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                    </h4>
                    <h5>Technician</h5>
                    <div className="provider-rating">
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fa-solid fa-star-half-stroke filled" />
                        <span>(452)</span>
                      </div>
                      <div className="provider-cash">
                        <h5>$25.00</h5>
                      </div>
                    </div>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* Providers Section */}
      <>
        {/* How It Works */}
        <section className="works-five-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div
                  className="section-heading car-wash-heading aos"
                  data-aos="fade-up"
                >
                  <div className="car-wash-img-five">
                    <ImageWithBasePath
                      src="assets/img/icons/car-wash-header-1.svg"
                      alt="image"
                      className="car-wash-header-one"
                    />
                    <h2>How It Works</h2>
                    <ImageWithBasePath
                      src="assets/img/icons/car-wash-header-2.svg"
                      alt="image"
                      className="car-wash-header-two"
                    />
                  </div>
                  <p>
                    Straightforward process designed to make your experience seamless
                    and hassle-free.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="works-five-main">
                  <div className="works-five-img">
                    <ImageWithBasePath src="assets/img/works-3.jpg" alt="image" />
                  </div>
                  <div className="works-five-bottom">
                    <h5 className="mb-2">Search and Browse</h5>
                    <p>
                      Customers can browse or search for specific products or services
                      using categories, filters.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="works-five-main">
                  <div className="works-five-img">
                    <ImageWithBasePath src="assets/img/works-2.jpg" alt="image" />
                  </div>
                  <div className="works-five-bottom">
                    <h5 className="mb-2">Add to Cart or Book Now</h5>
                    <p>
                      Customers can add items to their shopping cart. For services,
                      they may select a best service
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="works-five-main">
                  <div className="works-five-img">
                    <ImageWithBasePath src="assets/img/works-1.jpg" alt="image" />
                  </div>
                  <div className="works-five-bottom">
                    <h5 className="mb-2">Booking Completion</h5>
                    <p>
                      The Customer fulfills the order by either providing the service
                      to the Customers &amp; Get leads
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="offering-five-all">
              <div className="offering-five-all-img d-none d-md-block">
                <ImageWithBasePath src="assets/img/bubbles-offering-section.png" alt="image" />
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-12">
                  <div className="offering-five-main">
                    <h2>We Are Offering 14 Days Free Trial</h2>
                    <p>
                      Each service provider will have a listing that typically
                      includes a description of their services, pricing, availability,
                      and any special offers or packages.
                    </p>
                    <div className="offering-five-button">
                      <Link to={routes.freeTrail} className="btn btn-primary">
                        <i className="ti ti-users me-2 ms-0" /> Try 14 Days Free Trial
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="offering-five-img d-none d-lg-block">
                    <ImageWithBasePath src="assets/img/offering-worker.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /How It Works */}
      </>

      {/* Featured Services */}
      <section className="feature-category-section-five">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading car-wash-heading aos"
                data-aos="fade-up"
              >
                <div className="car-wash-img-five">
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-1.svg"
                    alt="image"
                    className="car-wash-header-one"
                  />
                  <h2>Featured Services</h2>
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-2.svg"
                    alt="image"
                    className="car-wash-header-two"
                  />
                </div>
                <p>What do you need to find?</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...Two} className="feature-service-five-slider">
              <div
                className="service-widget flex-fill w-100 aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-01.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five">
                      <div className="features-service-rating">
                        <i className="fas fa-star filled" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <Link to="javascript:void(0)" onClick={() => handleItemClick(4)}  className={`fav-icon fav-icon-five ${selectedItems[4] ? 'selected' : ''}`} >
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-five">
                  <h3 className="title">
                    <Link to={routes.serviceDetails1}>Basic Washing - Compact SUV</Link>
                  </h3>
                  <p>
                    <i className="feather icon-map-pin me-2" />
                    Bernardo Street, Tampa, USA
                  </p>
                  <div className="feature-services-five">
                    <h6>$45.00</h6>
                    <span>$96.00</span>
                  </div>
                  <div className="feature-service-botton">
                    <div className="d-flex align-items-center ">
                      <ImageWithBasePath src="assets/img/profiles/avatar-25.jpg" alt="User" />
                      <p className="fs-14 mb-0 ms-2">Madeline Hilli</p>
                    </div>
                    <div>
                      <Link to={routes.serviceDetails1} className="btn btn-dark">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="service-widget flex-fill w-100 aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-02.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five">
                      <div className="features-service-rating">
                        <i className="fas fa-star filled" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <Link to="javascript:void(0)" onClick={() => handleItemClick(5)}  className={`fav-icon fav-icon-five ${selectedItems[5] ? 'selected' : ''}`}>
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-five">
                  <h3 className="title">
                    <Link to={routes.serviceDetails1}>
                      Interior Washing - Compact SUV
                    </Link>
                  </h3>
                  <p>
                    <i className="feather icon-map-pin me-2" />
                    Hartway Street, Gettysburg, USA
                  </p>
                  <div className="feature-services-five">
                    <h6>$24.00</h6>
                    <span>$69.00</span>
                  </div>
                  <div className="feature-service-botton">
                    <div className="d-flex align-items-center ">
                      <ImageWithBasePath src="assets/img/profiles/avatar-15.jpg" alt="User" />
                      <p className="fs-14 mb-0 ms-2">Cynthia Tyree</p>
                    </div>
                    <div>
                      <Link to={routes.serviceDetails1} className="btn btn-dark">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="service-widget flex-fill w-100 aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-03.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five">
                      <div className="features-service-rating">
                        <i className="fas fa-star filled" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <Link to="javascript:void(0)" onClick={() => handleItemClick(6)}  className={`fav-icon fav-icon-five ${selectedItems[6] ? 'selected' : ''}`}>
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-five">
                  <h3 className="title">
                    <Link to={routes.serviceDetails1}>Vacuum Washing - Compact SUV</Link>
                  </h3>
                  <p>
                    <i className="feather icon-map-pin me-2" />
                    Havanna Street, Greensboro, USA
                  </p>
                  <div className="feature-services-five">
                    <h6>$35.00</h6>
                    <span>$42.00</span>
                  </div>
                  <div className="feature-service-botton">
                    <div className="d-flex align-items-center ">
                      <ImageWithBasePath src="assets/img/profiles/avatar-13.jpg" alt="User" />
                      <p className="fs-14 mb-0 ms-2">Adrian Lessli</p>
                    </div>
                    <div>
                      <Link to={routes.serviceDetails1} className="btn btn-dark">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="service-widget flex-fill w-100 aos"
                data-aos="fade-up"
              >
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-01.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five">
                      <div className="features-service-rating">
                        <i className="fas fa-star filled" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <Link to="javascript:void(0)" onClick={() => handleItemClick(7)}  className={`fav-icon fav-icon-five ${selectedItems[7] ? 'selected' : ''}`} >
                      <i className="feather icon-heart" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-five">
                  <h3 className="title">
                    <Link to={routes.serviceDetails1}>Basic Washing - Compact SUV</Link>
                  </h3>
                  <p>
                    <i className="feather icon-map-pin me-2" />
                    Bernardo Street, Tampa, USA
                  </p>
                  <div className="feature-services-five">
                    <h6>$45.00</h6>
                    <span>$96.00</span>
                  </div>
                  <div className="feature-service-botton">
                    <div className="d-flex align-items-center ">
                      <ImageWithBasePath src="assets/img/profiles/avatar-25.jpg" alt="User" />
                      <p className="fs-14 mb-0 ms-2">Madeline Hilli</p>
                    </div>
                    <div>
                      <Link to={routes.serviceDetails1} className="btn btn-dark">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* /Featured Services */}
      {/* pricing Section */}
      <section className="pricing-service-five">
        <div className="pricing-service-topimg d-none d-md-block">
          <ImageWithBasePath
            src="assets/img/bubbles-bottom-section-pricing-1.png"
            alt="image"
            className="pricing-five-img-one"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading car-wash-heading aos"
                data-aos="fade-up"
              >
                <div className="car-wash-img-five">
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-1.svg"
                    alt="image"
                    className="car-wash-header-one"
                  />
                  <h2>Pricing Plans</h2>
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-2.svg"
                    alt="image"
                    className="car-wash-header-two"
                  />
                </div>
                <p>
                  Designed to effectively communicate your service offerings and their
                  associated costs
                </p>
              </div>
            </div>
          </div>
          <div className="row aos justify-content-center" data-aos="fade-up">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="pricing-plans pricing-plans-five">
                <div className="pricing-planshead-five">
                  <div className="providerset-prices-five">
                    <div className="d-flex align-items-center">
                      <h6>$19</h6>
                      <span className="fs-16">/month</span>
                    </div>
                  </div>
                  <h4>Standard Pack</h4>
                </div>
                <div className="pricing-planscontent pricing-planscontent-five">
                  <ul>
                    <li>
                      <span>Unleash the power of automation</span>
                    </li>
                    <li>
                      <i className="feather-check me-2 text-success" />
                      <span>Exterior Washing</span>
                    </li>
                    <li>
                      <i className="feather-check me-2 text-success" />
                      <span>Vacuum Cleaning</span>
                    </li>
                    <li>
                      <i className="feather-x me-2 text-danger" />
                      <span>Interior Wet Cleaning</span>
                    </li>
                    <li>
                      <i className="feather-x me-2 text-danger" />
                      <span>Window Wiping</span>
                    </li>
                  </ul>
                  <div className="pricing-btn-five">
                    <Link to={routes.pricingPlan} className="btn btn-primary btn-view">
                      Choose Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="pricing-plans pricing-plans-five">
                <div className="pricing-planshead-five">
                  <div className="providerset-prices-five">
                    <div className="d-flex align-items-center justify-content-start">
                      <h6>$54</h6>
                      <span>/month</span>
                    </div>
                    <div>
                      <span className="bg-warning badge badge-md p-2 rounded-pill">
                        Most Popular
                      </span>
                    </div>
                  </div>
                  <h4>Premium</h4>
                </div>
                <div className="pricing-planscontent pricing-planscontent-five">
                  <ul>
                    <li>
                      <span>Unleash the power of automation</span>
                    </li>
                    <li>
                      <i className="feather-check me-2 text-success" />
                      <span>Exterior Washing</span>
                    </li>
                    <li>
                      <i className="feather-check me-2 text-success" />
                      <span>Vacuum Cleaning</span>
                    </li>
                    <li>
                      <i className="feather-check me-2 text-success" />
                      <span>Interior Wet Cleaning</span>
                    </li>
                    <li>
                      <i className="feather-x me-2 text-danger" />
                      <span>Window Wiping</span>
                    </li>
                  </ul>
                  <div className="pricing-btn-five">
                    <Link to={routes.pricingPlan} className="btn btn-primary btn-view">
                      Choose Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="pricing-plans pricing-plans-five">
                <div className="pricing-planshead-five">
                  <div className="providerset-prices-five">
                    <div className="d-flex align-items-center">
                      <h6>$89</h6>
                      <span>/month</span>
                    </div>
                  </div>
                  <h4>Enterprice</h4>
                </div>
                <div className="pricing-planscontent pricing-planscontent-five">
                  <ul>
                    <li>
                      <span>Unleash the power of automation</span>
                    </li>
                    <li>
                      <i className="feather-check me-2 text-success" />
                      <span>Exterior Washing</span>
                    </li>
                    <li>
                      <i className="feather-check me-2 text-success" />
                      <span>Vacuum Cleaning</span>
                    </li>
                    <li>
                      <i className="feather-check me-2 text-success" />
                      <span>Interior Wet Cleaning</span>
                    </li>
                    <li>
                      <i className="feather-check me-2 text-success" />
                      <span>Window Wiping</span>
                    </li>
                  </ul>
                  <div className="pricing-btn-five">
                    <Link to={routes.pricingPlan} className="btn btn-primary btn-view">
                      Choose Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /pricing Section */}
      {/* testimonals section */}
      <section className="testimonals-five-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading car-wash-heading aos"
                data-aos="fade-up"
              >
                <div className="car-wash-img-five">
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-1.svg"
                    alt="image"
                    className="car-wash-header-one"
                  />
                  <h2>Our Testimonials</h2>
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-2.svg"
                    alt="image"
                    className="car-wash-header-two"
                  />
                </div>
                <p>Description highlights the value of client feedback, showcases real testimonials</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="car-wash-bg-five-main">
                <div className="car-wash-bg-five">
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <Slider
                        {...Five}
                        className="car-testimonials-five-slider"
                      >
                      <div className="testimonials-five-top card">
                        <div className="card-body">
                          <div className="d-sm-flex align-items-start justify-content-center">
                            <div className="test-five-img flex-shrink-0 me-3">
                              <ImageWithBasePath src="assets/img/profiles/avatar-07.jpg" alt="image" />
                            </div>
                            <div>
                              <div>
                                <h2>Best Design and delivered in time</h2>
                                <p>
                                  Nay likely her length sooner thrown sex lively income. The expense
                                  windows adapted sir. Wrong widen drawn ample eat off doors money.
                                  Offending belonging promotion provision an be oh consulted
                                  ourselves it. Blessing welcomed ladyship she met humoured sir
                                  breeding her. Six curiosity day assurance bed necessary.
                                </p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="fs-18 text-dark mb-1">Mansur</h6>
                                  <h6 className="fs-14 text-gray">CEO @ airbnb</h6>
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials-five-top card">
                        <div className="card-body">
                          <div className="d-sm-flex align-items-start justify-content-center">
                            <div className="test-five-img flex-shrink-0 me-3">
                              <ImageWithBasePath src="assets/img/user/user-07.jpg" alt="image" />
                            </div>
                            <div>
                              <div>
                                <h2>Best Design and delivered in time</h2>
                                <p>
                                  Nay likely her length sooner thrown sex lively income. The expense
                                  windows adapted sir. Wrong widen drawn ample eat off doors money.
                                  Offending belonging promotion provision an be oh consulted
                                  ourselves it. Blessing welcomed ladyship she met humoured sir
                                  breeding her. Six curiosity day assurance bed necessary.
                                </p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="fs-18 text-dark mb-1">Mansur</h6>
                                  <h6 className="fs-14 text-gray">CEO @ airbnb</h6>
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonials-five-top card">
                        <div className="card-body">
                          <div className="d-sm-flex align-items-start justify-content-center">
                            <div className="test-five-img flex-shrink-0 me-3">
                              <ImageWithBasePath src="assets/img/user/user-09.jpg" alt="image" />
                            </div>
                            <div>
                              <div>
                                <h2>Best Design and delivered in time</h2>
                                <p>
                                  Nay likely her length sooner thrown sex lively income. The expense
                                  windows adapted sir. Wrong widen drawn ample eat off doors money.
                                  Offending belonging promotion provision an be oh consulted
                                  ourselves it. Blessing welcomed ladyship she met humoured sir
                                  breeding her. Six curiosity day assurance bed necessary.
                                </p>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="fs-18 text-dark mb-1">Mansur</h6>
                                  <h6 className="fs-14 text-gray">CEO @ airbnb</h6>
                                </div>
                                <div className="rating">
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                  <i className="fas fa-star filled" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /testimonals section */}
      {/* Partners Section */}
      <section className="blog-section blog-five-section">
        <div className="container">
          <div className="col-md-12 text-center">
            <div
              className="section-heading car-wash-heading aos"
              data-aos="fade-up"
            >
              <div className="car-wash-img-five">
                <ImageWithBasePath
                  src="assets/img/icons/car-wash-header-1.svg"
                  alt="image"
                  className="car-wash-header-one"
                />
                <h2>Our Partner</h2>
                <ImageWithBasePath
                  src="assets/img/icons/car-wash-header-2.svg"
                  alt="image"
                  className="car-wash-header-two"
                />
              </div>
              <p>Discover how our marketplace can support your business growth.</p>
            </div>
          </div>
          <Slider {...Three} className="car-testimonials-five-slider">
          <div className="partner-img">
            <ImageWithBasePath src="assets/img/partner/partner-7.svg" alt="img" />
          </div>
          <div className="partner-img">
            <ImageWithBasePath src="assets/img/partner/partner-8.svg" alt="img" />
          </div>
          <div className="partner-img">
            <ImageWithBasePath src="assets/img/partner/partner-9.svg" alt="img" />
          </div>
          <div className="partner-img">
            <ImageWithBasePath src="assets/img/partner/partner-10.svg" alt="img" />
          </div>
          <div className="partner-img">
            <ImageWithBasePath src="assets/img/partner/partner-11.svg" alt="img" />
          </div>
          <div className="partner-img">
            <ImageWithBasePath src="assets/img/partner/partner-12.svg" alt="img" />
          </div>
          </Slider>
        </div>
      </section>
      {/* Partners Section */}
      {/* Service Section */}
      <section className="car-blogs-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading car-wash-heading aos"
                data-aos="fade-up"
              >
                <div className="car-wash-img-five">
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-1.svg"
                    alt="image"
                    className="car-wash-header-one"
                  />
                  <h2>Our Blogs</h2>
                  <ImageWithBasePath
                    src="assets/img/icons/car-wash-header-2.svg"
                    alt="image"
                    className="car-wash-header-two"
                  />
                </div>
                <p>Here’s a compelling blog description designed to attract readers and provide a clear idea
								of what they can expect from your blog</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...Four} className="car-blog-slider">
              <div className="service-widget aos" data-aos="fade-up">
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-07.jpg"
                    />
                  </Link>
                  <div className="fav-item">
                    <div className="fav-items-content">
                      <h4 className="item-cat item-car fs-24">25 </h4>
                      <span className="text-dark fs-14"> Dec</span>
                    </div>
                  </div>
                  <div className="fav-items-container">
                    <div className="card mb-0">
                      <div className="card-header border-0 pb-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className=" d-flex align-items-center">
                            <div className="avatar-sm avatar me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-03.jpg"
                                alt="img"
                                className="img-fluid rounded-circle "
                              />
                            </div>
                            <p className="fs-14 text-white">Cynthia Tyree</p>
                          </div>
                          <div>
                            <p className="fs-14 text-white">Car Wash</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="text-white">
                          <Link to={routes.blogDetails}>
                            Benefits Of Keeping Company Cars Clean
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-widget aos" data-aos="fade-up">
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-08.jpg"
                    />
                  </Link>
                  <div className="fav-item">
                    <div className="fav-items-content">
                      <h4 className="item-cat item-car fs-24">25 </h4>
                      <span className="text-dark fs-14"> Dec</span>
                    </div>
                  </div>
                  <div className="fav-items-container">
                    <div className="card mb-0">
                      <div className="card-header border-0 pb-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className=" d-flex align-items-center">
                            <div className="avatar-sm avatar me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-04.jpg"
                                alt="img"
                                className="img-fluid rounded-circle "
                              />
                            </div>
                            <p className="fs-14 text-white">Adrian Lessli</p>
                          </div>
                          <div>
                            <p className="fs-14 text-white">Repairs</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="text-white">
                          <Link to={routes.blogDetails}>
                            What Has Changed In The Hand Car Wash Industry?
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-widget aos" data-aos="fade-up">
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-09.jpg"
                    />
                  </Link>
                  <div className="fav-item">
                    <div className="fav-items-content">
                      <h4 className="item-cat item-car fs-24">25 </h4>
                      <span className="text-dark fs-14"> Dec</span>
                    </div>
                  </div>
                  <div className="fav-items-container">
                    <div className="card mb-0">
                      <div className="card-header border-0 pb-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className=" d-flex align-items-center">
                            <div className="avatar-sm avatar me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-05.jpg"
                                alt="img"
                                className="img-fluid rounded-circle "
                              />
                            </div>
                            <p className="fs-14 text-white">Madeline Hilli</p>
                          </div>
                          <div>
                            <p className="fs-14 text-white">Services</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="text-white">
                          <Link to={routes.blogDetails}>
                            The Benefits Of Keeping Company Cars Clean
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-widget aos" data-aos="fade-up">
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-07.jpg"
                    />
                  </Link>
                  <div className="fav-item">
                    <div className="fav-items-content">
                      <h4 className="item-cat item-car fs-24">25 </h4>
                      <span className="text-dark fs-14"> Dec</span>
                    </div>
                  </div>
                  <div className="fav-items-container">
                    <div className="card mb-0">
                      <div className="card-header border-0 pb-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className=" d-flex align-items-center">
                            <div className="avatar-sm avatar me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-03.jpg"
                                alt="img"
                                className="img-fluid rounded-circle "
                              />
                            </div>
                            <p className="fs-14 text-white">Cynthia Tyree</p>
                          </div>
                          <div>
                            <p className="fs-14 text-white">Car Wash</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="text-white">
                          <Link to={routes.blogDetails}>
                            The Benefits Of Keeping Company Cars Clean
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-widget aos" data-aos="fade-up">
                <div className="service-img">
                  <Link to={routes.serviceDetails1}>
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/car-wash/car-09.jpg"
                    />
                  </Link>
                  <div className="fav-item">
                    <div className="fav-items-content">
                      <h4 className="item-cat item-car fs-24">25 </h4>
                      <span className="text-dark fs-14"> Dec</span>
                    </div>
                  </div>
                  <div className="fav-items-container">
                    <div className="card mb-0">
                      <div className="card-header border-0 pb-0">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className=" d-flex align-items-center">
                            <div className="avatar-sm avatar me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-03.jpg"
                                alt="img"
                                className="img-fluid rounded-circle "
                              />
                            </div>
                            <p className="fs-14 text-white">Cynthia Tyree</p>
                          </div>
                          <div>
                            <p className="fs-14 text-white">Car Wash</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h5 className="text-white">
                          <Link to={routes.blogDetails}>
                            The Benefits Of Keeping Company Cars Clean
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Section */}
      {/* App Section */}
      <section className="app-five-section">
        <div className="container">
          <div className="app-sec app-sec-five">
            <div className="row align-items-end">
              <div className="col-lg-6 col-12">
                <div className="app-five-content">
                  <div className="col-md-12">
                    <div className="heading aos" data-aos="fade-up">
                      <h2>Download Our App</h2>
                      <p>
                        Whether you&apos;re looking to our app brings everything you need
                        right to your fingertips.
                      </p>
                      <h6>Scan the QR code to get the app now</h6>
                    </div>
                  </div>
                  <div className="downlaod-btn aos" data-aos="fade-up">
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/appstore-five.svg" alt="img" />
                    </Link>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/googleplay-five.svg" alt="img" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="appimg-set aos d-none d-lg-block" data-aos="fade-up">
                  <ImageWithBasePath
                    src="assets/img/app-sec-five.png"
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
      <FooterFive />
    </>
  );
};

export default HomeFive;
