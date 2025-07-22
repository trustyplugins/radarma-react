import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import DatePicker from 'react-datepicker';

// import * as Icon from 'react-feather'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import FooterThree from './footer-three';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import HomeHeader from '../header/home-header';
import { all_routes } from '../../../../core/data/routes/all_routes';

const HomeThree = () => {
  const routes = all_routes
  const reviews = [
    {
      review:
        '“ Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras.Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas erat viverra scelerisque bibendum. “',
      name: 'John Doe',
      country: 'USA',
      img: 'assets/img/profiles/avatar-04.jpg',
    },
    {
      review:
        '“ Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras.Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas erat viverra scelerisque bibendum. “',
      name: 'Paul Walker',
      country: 'Newyork, USA',
      img: 'assets/img/profiles/avatar-01.jpg',
    },
    {
      review:
        '“ Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras.Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas erat viverra scelerisque bibendum. “',
      name: 'Anthony Walker',
      country: 'Newyork, USA',
      img: 'assets/img/profiles/avatar-02.jpg',
    },
    {
      review:
        '“ Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras.Vitae amet cras nulla mi laoreet quis amet phasellus. Enim orci lacus quam mauris nunc ultrices duis. Ornare leo mi aenean egestas montes cras. Egestas erat viverra scelerisque bibendum. “',
      name: 'Van Diesel',
      country: 'Newyork, USA',
      img: 'assets/img/profiles/avatar-03.jpg',
    },

    // Add more review objects as needed
  ];
  if (!reviews || !Array.isArray(reviews)) {
    // Handle the case where reviews is not present or not an array
    return null; // or return a default component or message
  }
  const [slider1, setSlider1] = useState();
  const [slider2, setSlider2] = useState();

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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
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
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const slideConfig = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: false,
  };

  const [selectedSub, setselectedSub] = useState(null);
  const category = [
    { name: 'Select Service type' },
    { name: 'Tornoto' },
    { name: 'Texas' },
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };
  const handleSlider1Change = (index: any) => {
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    slider2.slickGoTo(index);
  };

  const handleSlider2Change = (index: any) => {
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-expect-error
    slider1.slickGoTo(index);
    
  };
  const slideConfig2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show three images in parallel
    slidesToScroll: 1,
    centerMode: true,
  };
  return (
    <>
      <HomeHeader type={4} />
      {/* Banner Section */}
      <section className="hero-section-three">
        <div className="container">
          <div className="home-banner home-banner-three aos" data-aos="fade-up">
            <div className="row align-items-center w-100">
              <div className="col-lg-6 col-md-12 mx-auto">
                <div className="section-search section-section-three">
                  <h4>Best Saloon Template</h4>
                  <h1>Find the Awesome Saloon’s Near you</h1>
                  <p>
                    Hair and SPA Salons and fully integrated with theme tools
                    that you can use for the promotion of your business.
                  </p>
                  <div className="d-flex">
                  <Link to={''} className="btn btn-white d-flex align-items-center">
                  Get
                  Started <i className="ti ti-circle-chevron-right ms-1"></i>
                  </Link>

                  </div>
                </div>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
          <div className="search-box search-box-three aos" data-aos="fade-up">
            <form action={''} className="d-flex search-form-profile">
              <div className="searchbox-list">
                <div className="search-input search-input-three d-flex align-items-center">
                  <i className="feather icon-check-square me-2" />
                  <div className="form-group m-0">
                    <Dropdown
                      value={selectedSub}
                      onChange={(e) => setselectedSub(e.value)}
                      options={category}
                      optionLabel="name"
                      placeholder="Job Title"
                      className="select select border-none w-100"
                    />
                  </div>
                </div>
                <div className="search-input search-input-three">
                  <Icon.MapPin className="feather icon-map-pin me-2" />
                  <div className="form-group mb-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div className="search-input search-input-three">
                  <i className="feather icon-calendar me-2" />
                  <div className="form-group mb-0">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
                      type="date"
                      placeholderText="Select Date"
                      className="form-control floating datetimepicker"
                    />
                  </div>
                </div>
              </div>
              <div className="search-btn search-btn-three">
                <button className="btn btn-primary" type="submit">
                  <Icon.Search className="react-feather icon-custom" />
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* /Banner Section */}
      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-header aos" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="section-content">
                  <h2>Our Services</h2>
                  <div className="our-img-all-1">
                    <ImageWithBasePath
                      src="assets/img/icons/cuttor-small.svg"
                      alt="Scissor"
                    />
                  </div>
                  <p>
                    Our Barbershop &amp; Tattoo Salon provides classic services
                    combined with innovative techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings} className="services-slider">
                <div className="services-all">
                  <div className="services-main-img">
                    <Link to="">
                      <ImageWithBasePath
                        className="img-fluid serv-image"
                        alt="Service Image"
                        src="assets/img/services/service-81.jpg"
                      />
                    </Link>
                    <div className="service-foot">
                      <ImageWithBasePath src="assets/img/icons/cuttor.svg" alt="Saloon" className="mb-2" />
                      <h4 className="mb-1">Haircut</h4>
                      <h6 className="mb-1">25 Saloons</h6>
                    </div>
                  </div>
                </div>
                <div className="services-all">
                  <div className="services-main-img">
                    <Link to="">
                      <ImageWithBasePath
                        className="img-fluid serv-image"
                        alt="Service Image"
                        src="assets/img/services/service-83.jpg"
                      />
                    </Link>
                    <div className="service-foot">
                      <ImageWithBasePath src="assets/img/icons/trim.svg" alt="Saloon" className="mb-2" />
                      <h4 className="mb-1">Trimming</h4>
                      <h6 className="mb-1">25 Saloons</h6>
                    </div>
                  </div>
                </div>
                <div className="services-all">
                  <div className="services-main-img">
                    <Link to="">
                      <ImageWithBasePath
                        className="img-fluid serv-image"
                        alt="Service Image"
                        src="assets/img/services/service-84.jpg"
                      />
                    </Link>
                    <div className="service-foot">
                      <ImageWithBasePath
                        src="assets/img/icons/style-logo.svg"
                        alt="Saloon"
                        className="mb-2"
                      />
                      <h4 className="mb-1">Saloons</h4>
                      <h6 className="mb-1">25 Saloons</h6>
                    </div>
                  </div>
                </div>
                <div className="services-all">
                  <div className="services-main-img">
                    <Link to="">
                      <ImageWithBasePath
                        className="img-fluid serv-image"
                        alt="Service Image"
                        src="assets/img/services/service-82.jpg"
                      />
                    </Link>
                    <div className="service-foot">
                      <ImageWithBasePath src="assets/img/icons/shave.svg" alt="Saloon" className="mb-2" />
                      <h4 className="mb-1">Shaving</h4>
                      <h6 className="mb-1">25 Saloons</h6>
                    </div>
                  </div>
                </div>
                <div className="services-all">
                  <div className="services-main-img">
                    <Link to="">
                      <ImageWithBasePath
                        className="img-fluid serv-image"
                        alt="Service Image"
                        src="assets/img/services/service-84.jpg"
                      />
                    </Link>
                    <div className="service-foot">
                      <ImageWithBasePath src="assets/img/icons/trim.svg" alt="Saloon" className="mb-2" />
                      <h4 className="mb-1">Haircut</h4>
                      <h6 className="mb-1">25 Saloons</h6>
                    </div>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
        </div>
        <div className="sidecircle-ryt">
          <ImageWithBasePath src="assets/img/side-circle.png" alt="Circle" />
        </div>
      </section>
      {/* /service Section */}
      {/* Service Section */}
      <section className="service-section featured-saloons">
        <div className="container">
          <div className="services-header aos" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="section-content">
                  <h2>Featured Saloons</h2>
                  <div className="our-img-all-1">
                    <ImageWithBasePath src="assets/img/icons/cuttor-small.svg" alt="Scissor" />
                  </div>
                  <p>
                    Our Barbershop &amp; Tattoo Salon provides classic services
                    combined with innovative techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 d-flex">
              <div className="card flex-fill aos" data-aos="fade-right">
                <div className="card-body">
                  <div className="service-widget">
                    <div className="service-img service-show-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-b-01.jpg"
                        />
                      </Link>
                      <div className="item-info item-infos">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                    </div>
                    <div className="service-content service-content-three">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Saloon 24 Hair Designers</Link>
                      </h3>
                      <ul>
                        <li>Deep Pore Cleansing</li>
                        <li>Straight Razor Shave</li>
                      </ul>
                      <div className="main-saloons-profile">
                        <div className="saloon-profile-left">
                          <Link to={routes.providerDetails} className="saloon-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-20.jpg"
                              alt="User"
                            />
                          </Link>
                          <div className="saloon-content">
                            <div className="saloon-content-top mb-1">
                              <i className="feather icon-clock" />
                              <span>07:00 AM - 11:00 PM </span>
                            </div>
                            <div className="saloon-content-btn">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>
                              <span>Main Boulevard, Lahore,</span>
                            </div>
                          </div>
                        </div>
                        <div className="saloon-right">
                          <span>$70</span>
                        </div>
                      </div>
                      <div className="saloon-bottom">
                        <Link to={routes.serviceDetails1} className="btn btn-dark">
                          <i className="feather icon-calendar me-2" />
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 d-flex">
              <div className="card flex-fill aos" data-aos="fade-up">
                <div className="card-body">
                  <div className="service-widget">
                    <div className="service-img service-show-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-b-02.jpg"
                        />
                      </Link>
                      <div className="item-info item-infos">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                    </div>
                    <div className="service-content service-content-three">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>The Rockstar Barber</Link>
                      </h3>
                      <ul>
                        <li>Buzz Cut</li>
                        <li>Blowout</li>
                      </ul>
                      <div className="main-saloons-profile">
                        <div className="saloon-profile-left">
                          <Link to={routes.providerDetails} className="saloon-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-19.jpg"
                              alt="User"
                            />
                          </Link>
                          <div className="saloon-content">
                            <div className="saloon-content-top mb-1">
                              <i className="feather icon-clock" />
                              <span>09:00 AM - 05:00 PM </span>
                            </div>
                            <div className="saloon-content-btn">
                              <i className="feather icon-map-pin" />
                              <span>30 Small Street, Newyork</span>
                            </div>
                          </div>
                        </div>
                        <div className="saloon-right">
                          <span>$50</span>
                        </div>
                      </div>
                      <div className="saloon-bottom">
                        <Link to={routes.serviceDetails1} className="btn btn-dark">
                          <i className="feather icon-calendar me-2" />
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 d-flex">
              <div className="card flex-fill aos" data-aos="fade-left">
                <div className="card-body">
                  <div className="service-widget">
                    <div className="service-img service-show-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-b-03.jpg"
                        />
                      </Link>
                      <div className="item-info item-infos">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                    </div>
                    <div className="service-content service-content-three">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Femina Hairstyle</Link>
                      </h3>
                      <ul>
                        <li>Pore Cleansing</li>
                        <li>Hair Style Menicure</li>
                      </ul>
                      <div className="main-saloons-profile">
                        <div className="saloon-profile-left">
                          <Link to={routes.providerDetails} className="saloon-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-18.jpg"
                              alt="User"
                            />
                          </Link>
                          <div className="saloon-content">
                            <div className="saloon-content-top mb-1">
                              <i className="feather icon-clock" />
                              <span>09:00 AM - 07:00 PM </span>
                            </div>
                            <div className="saloon-content-btn">
                              <i className="feather icon-map-pin" />
                              <span>Bungalow, Omaha</span>
                            </div>
                          </div>
                        </div>
                        <div className="saloon-right">
                          <span>$40</span>
                        </div>
                      </div>
                      <div className="saloon-bottom">
                        <Link to={routes.serviceDetails1} className="btn btn-dark">
                          <i className="feather icon-calendar me-2" />
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 d-flex">
              <div className="card flex-fill  aos" data-aos="fade-right">
                <div className="card-body">
                  <div className="service-widget">
                    <div className="service-img service-show-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-b-04.jpg"
                        />
                      </Link>
                      <div className="item-info item-infos">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                    </div>
                    <div className="service-content service-content-three">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Master Barber</Link>
                      </h3>
                      <ul>
                        <li>Hair Cut</li>
                        <li>Hair Styling</li>
                      </ul>
                      <div className="main-saloons-profile">
                        <div className="saloon-profile-left">
                          <Link to={routes.providerDetails} className="saloon-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-17.jpg"
                              alt="User"
                            />
                          </Link>
                          <div className="saloon-content">
                            <div className="saloon-content-top mb-1">
                              <i className="feather icon-clock" />
                              <span>08:00 AM - 05:00 PM </span>
                            </div>
                            <div className="saloon-content-btn">
                              <i className="feather icon-map-pin" />
                              <span>Villa Drive, South</span>
                            </div>
                          </div>
                        </div>
                        <div className="saloon-right">
                          <span>$36</span>
                        </div>
                      </div>
                      <div className="saloon-bottom">
                        <Link to={routes.serviceDetails1} className="btn btn-dark">
                          <i className="feather icon-calendar me-2" />
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 d-flex ">
              <div className="card flex-fill aos" data-aos="fade-up">
                <div className="card-body">
                  <div className="service-widget">
                    <div className="service-img service-show-img">
                      <div className="service-img-top">
                        <Link to={routes.serviceDetails1}>
                          <ImageWithBasePath
                            className="img-fluid serv-img"
                            alt="Service Image"
                            src="assets/img/services/service-b-05.jpg"
                          />
                        </Link>
                      </div>
                      <div className="item-info item-infos">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                    </div>
                    <div className="service-content service-content-three">
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Cut &amp; Colors Hair Dressers
                        </Link>
                      </h3>
                      <ul>
                        <li>Face Cleaning</li>
                        <li>Clean Shaving</li>
                      </ul>
                      <div className="main-saloons-profile">
                        <div className="saloon-profile-left">
                          <Link to={routes.providerDetails} className="saloon-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-15.jpg"
                              alt="User"
                            />
                          </Link>
                          <div className="saloon-content">
                            <div className="saloon-content-top mb-1">
                              <i className="feather icon-clock" />
                              <span>09:00 AM - 06:00 PM </span>
                            </div>
                            <div className="saloon-content-btn">
                              <i className="feather icon-map-pin" />
                              <span>Sarah Drive, Lafayette</span>
                            </div>
                          </div>
                        </div>
                        <div className="saloon-right">
                          <span>$42</span>
                        </div>
                      </div>
                      <div className="saloon-bottom">
                        <Link to={routes.serviceDetails1} className="btn btn-dark">
                          <i className="feather icon-calendar me-2" />
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-6 col-12 d-flex">
              <div className="card flex-fill aos" data-aos="fade-left">
                <div className="card-body">
                  <div className="service-widget">
                    <div className="service-img service-show-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-b-06.jpg"
                        />
                      </Link>
                      <div className="item-info item-infos">
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                    </div>
                    <div className="service-content service-content-three">
                      <h3 className="title">
                        <Link to="#">Rearhair Stylist</Link>
                      </h3>
                      <ul>
                        <li>Face Cleaning</li>
                        <li>Hair Styling</li>
                      </ul>
                      <div className="main-saloons-profile">
                        <div className="saloon-profile-left">
                          <Link to={routes.providerDetails} className="saloon-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-20.jpg"
                              alt="User"
                            />
                          </Link>
                          <div className="saloon-content">
                            <div className="saloon-content-top mb-1">
                              <i className="feather icon-clock" />
                              <span>09:00 AM - 11:00 PM </span>
                            </div>
                            <div className="saloon-content-btn">
                              <i className="feather icon-map-pin" />
                              <span>Nash Street, Southfield</span>
                            </div>
                          </div>
                        </div>
                        <div className="saloon-right">
                          <span>$70</span>
                        </div>
                      </div>
                      <div className="saloon-bottom">
                        <Link to={routes.serviceDetails1} className="btn btn-dark">
                          <i className="feather icon-calendar me-2" />
                          Book Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Section */}
      {/* Appointment Section */}
      <section  className="appointment-section appointment-section-four aos" data-aos="fade-up">
        <div className="index-4">
          <ImageWithBasePath
            src="assets/img/icons/saloon-bg.svg"
            className="img-fluid h-100 w-100"
            alt="bg"
          />
        </div>
        <div className="container">
          <div className="appointment-main">
            <Link to="#" className="btn btn-secondary text-white">
              GET A MODERN LOOK
            </Link>
            <h2>Upto 25% offer on First Appointment</h2>
            <p className="text-center">
              Each service provider will have a listing that typically includes a
              description of their services, pricing, availability, and any special
              offers or packages.
            </p>
            <div className="appointment-btn">
              <Link to={routes.freeTrail} className="btn btn-primary p-3">
                BOOK AN APPOINTMENT NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* /Appointment Section */}
      {/* Services Section */}
      <section className="services-section stylists-section">
        <div className="container">
          <div className="services-header aos" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="section-content">
                  <h2>Featured Stylists</h2>
                  <div className="our-img-all-1">
                    <ImageWithBasePath
                      src="assets/img/icons/cuttor-small.svg"
                      alt="Scissor"
                    />
                  </div>
                  <p>
                    Our Barbershop &amp; Tattoo Salon provides classic services
                    combined with innovative techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...One} className="stylists-slider aos">
              
              <div className="stylists-all card">
                <div className="card-body">
                  <div className="stylists-main-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-image"
                        alt="Service Image"
                        src="assets/img/profiles/avatar-04.jpg"
                      />
                    </Link>
                  </div>
                  <div className="stylists-bottom">
                    <div className="stylists-rating mb-1">
                      <div className="rating mb-0">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                      </div>
                    </div>
                    <div className="stylists-foot">
                      <h4 className="mb-2">
                        <Link to={routes.serviceDetails1}>Evelyn Nelson</Link>
                      </h4>
                      <h6 className="mb-1">300 Bookings</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stylists-all card">
                <div className="card-body">
                  <div className="stylists-main-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-image"
                        alt="Service Image"
                        src="assets/img/profiles/avatar-05.jpg"
                      />
                    </Link>
                  </div>
                  <div className="stylists-bottom">
                    <div className="stylists-foot">
                      <div className="stylists-rating mb-2">
                        <div className="rating mb-0">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                      <h4 className="mb-2">
                        <Link to={routes.serviceDetails1}>Michel</Link>
                      </h4>
                      <h6 className="mb-1">356 Bookings</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stylists-all card">
                <div className="card-body">
                  <div className="stylists-main-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-image"
                        alt="Service Image"
                        src="assets/img/profiles/avatar-06.jpg"
                      />
                    </Link>
                  </div>
                  <div className="stylists-bottom">
                    <div className="stylists-foot">
                      <div className="stylists-rating mb-2">
                        <div className="rating mb-0">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                      <h4 className="mb-2">
                        <Link to={routes.serviceDetails1}>Thompson</Link>
                      </h4>
                      <h6 className="mb-1">145 Bookings</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stylists-all card">
                <div className="card-body">
                  <div className="stylists-main-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-image"
                        alt="Service Image"
                        src="assets/img/profiles/avatar-07.jpg"
                      />
                    </Link>
                  </div>
                  <div className="stylists-bottom">
                    <div className="stylists-foot">
                      <div className="stylists-rating mb-2">
                        <div className="rating mb-0">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                      <h4 className="mb-2">
                        <Link to={routes.serviceDetails1}>Matthew Joe</Link>
                      </h4>
                      <h6 className="mb-1">256 Bookings</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stylists-all card">
                <div className="card-body">
                  <div className="stylists-main-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-image"
                        alt="Service Image"
                        src="assets/img/profiles/avatar-08.jpg"
                      />
                    </Link>
                  </div>
                  <div className="stylists-bottom">
                    <div className="stylists-foot">
                      <div className="stylists-rating mb-2">
                        <div className="rating mb-0">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                        </div>
                      </div>
                      <h4 className="mb-2">
                        <Link to={routes.serviceDetails1}>James George</Link>
                      </h4>
                      <h6 className="mb-1">300 Bookings</h6>
                    </div>
                  </div>
                </div>
              </div>

              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section */}
      <section className="service-section populars-section">
        <div className="container">
          <div className="services-header aos" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="section-content">
                  <h2>Popular Locations</h2>
                  <div className="our-img-all-1">
                    <ImageWithBasePath src="assets/img/icons/cuttor-small.svg" alt="Scissor" />
                  </div>
                  <p>
                    Our Barbershop &amp; Tattoo Salon provides classic services
                    combined with innovative techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row aos" data-aos="fade-up">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div>
                <div className="service-widget">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/service-105.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content popular-content">
                    <h3 className="mb-2">
                      <Link to={routes.serviceDetails1}>USA</Link>
                    </h3>
                    <h6>49 Saloons</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div>
                <div className="service-widget">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/service-92.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content popular-content">
                    <h3 className="mb-2">
                      <Link to={routes.serviceDetails1}>UK</Link>
                    </h3>
                    <h6>49 Saloons</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div>
                <div className="service-widget">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/service-93.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content popular-content">
                    <h3 className="mb-2">
                      <Link to={routes.serviceDetails1}>Mexico</Link>
                    </h3>
                    <h6>49 Saloons</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div>
                <div className="service-widget">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/service-94.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content popular-content">
                    <h3 className="mb-2">
                      <Link to={routes.serviceDetails1}>UAE</Link>
                    </h3>
                    <h6>49 Saloons</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div>
                <div className="service-widget">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/service-95.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content popular-content">
                    <h3 className="mb-2">
                      <Link to={routes.serviceDetails1}>France</Link>
                    </h3>
                    <h6>49 Saloons</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div>
                <div className="service-widget">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/service-96.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content popular-content">
                    <h3 className="mb-2">
                      <Link to={routes.serviceDetails1}>Germany</Link>
                    </h3>
                    <h6>49 Saloons</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div>
                <div className="service-widget">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/service-97.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content popular-content">
                    <h3 className="mb-2">
                      <Link to={routes.serviceDetails1}>Italy</Link>
                    </h3>
                    <h6>49 Saloons</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div>
                <div className="service-widget">
                  <div className="service-img">
                    <Link to={routes.serviceDetails1}>
                      <ImageWithBasePath
                        className="img-fluid serv-img"
                        alt="Service Image"
                        src="assets/img/services/service-98.jpg"
                      />
                    </Link>
                  </div>
                  <div className="service-content popular-content">
                    <h3 className="mb-2">
                      <Link to={routes.serviceDetails1}>Argentina</Link>
                    </h3>
                    <h6>49 Saloons</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-sec btn-saloons aos" data-aos="fade-up">
              <Link to={routes.search} className="btn btn-primary btn-view">
                VIEW ALL 590 LOCATION
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /Service Section */}
      {/* Works Section */}
      <section className="works-section">
        <div className="container">
          <div className="services-header aos" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="section-content">
                  <h2>How It Works</h2>
                  <div className="our-img-all-1">
                    <ImageWithBasePath src="assets/img/icons/cuttor-small.svg" alt="Scissor" />
                  </div>
                  <p>
                    Our Barbershop &amp; Tattoo Salon provides classic services
                    combined with innovative techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4 col-sm-6 col-12">
              <div className="works-main aos" data-aos="fade-right">
                <div className="works-tops">
                  <div className="works-top-img">
                    <ImageWithBasePath src="assets/img/services/service-98.jpg" alt="image" />
                    <span>1</span>
                  </div>
                </div>
                <div className="works-bottom">
                  <Link to="#">
                    <h4 className="mb-2">Discover</h4>
                  </Link>
                  <p>
                    Customers can browse or search for specific products or services
                    using categories, filters, or search bars.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="works-main aos" data-aos="fade-up">
                <div className="works-tops">
                  <div className="works-top-img works-load-profile">
                    <ImageWithBasePath src="assets/img/services/service-99.jpg" alt="image" />
                    <span>2</span>
                  </div>
                </div>
                <div className="works-bottom">
                  <Link to="#">
                    <h4 className="mb-2">Book</h4>
                  </Link>
                  <p>
                    Customers can add items to their shopping cart. For services,
                    they may select a service and proceed to book.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="works-main aos" data-aos="fade-left">
                <div className="works-tops">
                  <div className="works-top-img">
                    <ImageWithBasePath src="assets/img/services/service-100.jpg" alt="image" />
                    <span>3</span>
                  </div>
                </div>
                <div className="works-bottom">
                  <Link to="#">
                    <h4 className="mb-2">Enjoy</h4>
                  </Link>
                  <p>
                    The Customer fulfills the order by either providing the service
                    to the Customers &amp; Get leads from the local Persons in our
                    Platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Works Section */}

      {/* client section */}
      <section className="client-sections review-four">
      <div className="client-bg">
				<ImageWithBasePath src="assets/img/bg/client-bg1.svg" className="img-fluid h-100 w-100" alt="bg" />
			</div>
        <div className="container">
          <div className="services-header aos" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="section-content section-client">
                  <h2>What Our Client Says</h2>
                  <div className="our-img-all-1">
                    <ImageWithBasePath
                      src="assets/img/icons/cuttor-sm-white.svg"
                      alt="Service"
                    />
                  </div>
                  <p>
                  Description highlights the value of client feedback, showcases real testimonials, and
									encourages potential clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Slider
              {...slideConfig}
              className="slider say-about slider-for aos"
              afterChange={handleSlider1Change}
               // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
              ref={(slider) => setSlider1(slider)}
            >
              {reviews.map((data, index) => (
                <div key={index}>
                  <div className="review-love-group">
                    <div className="quote-love-img">
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/icons/quote.svg"
                        alt=""
                      />
                    </div>
                    <p className="review-passage">“ {data.review} “</p>
                    <div className="say-name-blk text-center">
                      <h5>{data.name}</h5>
                      <p>{data.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <Slider
              {...slideConfig2}
              className="slider client-img slider-nav client-pro aos"
              afterChange={handleSlider2Change}
               // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
              ref={(slider) => setSlider2(slider)}
            >
              {reviews.slice(0, 3).map((data, index) => (
                <div key={index} className="testimonial-thumb">
                  <ImageWithBasePath src={data.img} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* /client section */}
      {/* latest section */}
      <section className="services-section latest-section blog-section-three">
        <div className="container">
          <div className="services-header aos" data-aos="fade-up">
            <div className="row">
              <div className="col-md-12">
                <div className="section-content">
                  <h2>Our Latest News</h2>
                  <div className="our-img-all-1">
                    <ImageWithBasePath
                      src="assets/img/icons/cuttor-small.svg"
                      alt="Scissor"
                    />
                  </div>
                  <p>
                    Our Barbershop &amp; Tattoo Salon provides classic services
                    combined with innovative techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...Two} className="latest-slider aos">
                <div className="blog blog-new flex-fill">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/services/service-101.jpg"
                        alt="Post Image"
                      />
                    </Link>
                    <div className="date">
                      15<span>Nov 2023</span>
                    </div>
                  </div>
                  <div className="blog-content mb-0">
                    <div className="blog-category">
                      <ul>
                        <li>
                          <Link to="">
                            <span className="cat-blog">Hair Cut</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <span className="cat-blog">Facial</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog-title">
                      <Link to={routes.blogDetails}>
                        Take advantage of trial periods or consultations
                      </Link>
                    </h3>
                    <div className="blog-view d-flex">
                      <Link
                        to={routes.blogDetails}
                        className="btn btn-light d-flex w-100 justify-content-center text-dark"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog blog-new flex-fill">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/services/service-102.jpg"
                        alt="Post Image"
                      />
                    </Link>
                    <div className="date">
                      15<span>Nov 2023</span>
                    </div>
                  </div>
                  <div className="blog-content mb-0">
                    <div className="blog-category">
                      <ul>
                        <li>
                          <Link to="">
                            <span className="cat-blog">Hair Cut</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <span className="cat-blog">Facial</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog-title">
                      <Link to={routes.blogDetails}>
                        Maximize your business potential right service
                      </Link>
                    </h3>
                    <div className="blog-view d-flex">
                      <Link
                        to={routes.blogDetails}
                        className="btn btn-light d-flex w-100 justify-content-center text-dark"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog blog-new flex-fill">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/services/service-103.jpg"
                        alt="Post Image"
                      />
                    </Link>
                    <div className="date">
                      15<span>Nov 2023</span>
                    </div>
                  </div>
                  <div className="blog-content mb-0">
                    <div className="blog-category">
                      <ul>
                        <li>
                          <Link to="">
                            <span className="cat-blog">Hair Cut</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <span className="cat-blog">Facial</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog-title">
                      <Link to={routes.blogDetails}>
                        Specific features and benefits of your service.
                      </Link>
                    </h3>
                    <div className="blog-view d-flex">
                      <Link
                        to={routes.blogDetails}
                        className="btn btn-light d-flex w-100 justify-content-center text-dark"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog blog-new flex-fill">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/services/service-104.jpg"
                        alt="Post Image"
                      />
                    </Link>
                    <div className="date">
                      15<span>Nov 2023</span>
                    </div>
                  </div>
                  <div className="blog-content mb-0">
                    <div className="blog-category">
                      <ul>
                        <li>
                          <Link to="">
                            <span className="cat-blog">Hair Cut</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <span className="cat-blog">Facial</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog-title">
                      <Link to={routes.blogDetails}>
                        One of the biggest use of service marketplace
                      </Link>
                    </h3>
                    <div className="blog-view d-flex">
                      <Link
                        to={routes.blogDetails}
                        className="btn btn-light d-flex w-100 justify-content-center text-dark"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog blog-new flex-fill">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/services/service-102.jpg"
                        alt="Post Image"
                      />
                    </Link>
                    <div className="date">
                      15<span>Nov 2023</span>
                    </div>
                  </div>
                  <div className="blog-content mb-0">
                    <div className="blog-category">
                      <ul>
                        <li>
                          <Link to="">
                            <span className="cat-blog">Hair Cut</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <span className="cat-blog">Facial</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className="blog-title">
                      <Link to={routes.blogDetails}>
                        One of the biggest use of service marketplace
                      </Link>
                    </h3>
                    <div className="blog-view d-flex">
                      <Link
                        to="#"
                        className="btn btn-light d-flex w-100 justify-content-center text-dark"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>

              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* /latest section */}
      {/* register section */}
      <section className="register-section aos" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="register-content">
                <h2>Get Registered and List your Saloon for free!!!</h2>
                <div className="register-btn">
                  <Link to={routes.userSignup}>
                    <i className="feather icon-users me-2" />
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*/register section  */}
      <FooterThree />
    </>
  );
};

export default HomeThree;
