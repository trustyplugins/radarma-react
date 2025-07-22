import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as Icon from 'react-feather';
import FooterEight from './footer-eight';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import HomeHeader from '../header/home-header';
import { all_routes } from '../../../../core/data/routes/all_routes';
import CountUp from 'react-countup';

const HomeEight = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 6,
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
  const professionalSettings = {
    dots: false,
    autoplay: false,
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
  const blogSettings = {
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
  const testimonialsSettings = {
    dots: false,
    autoplay: false,
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
  const language = [{ name: 'Tornoto' }, { name: 'Texas' }];
  const routes = all_routes
  return (
    <div className="main-wrapper ">
      {/* Header */}
      <HomeHeader type={9} />
      {/* /Header */}
      {/* Hero Section */}
      <section className="hero-section-eight">
        <div className="container">
          <div className="home-banner-eight">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-10 mx-auto">
                <div className="section-search aos" data-aos="fade-up">
                  <h1>
                    <ImageWithBasePath src="assets/img/icons/dog.svg" alt="image" /> This is
                    the only place for all your <span>pet care</span>
                  </h1>
                  <div className="home-eight-bg">
                    <ImageWithBasePath
                      src="assets/img/her-section-eight-bg.png"
                      alt="image"
                    />
                  </div>
                  <p>
                    The Best Selection For your pet’s needs. A life saving
                    impact from pets in communities across the country.
                  </p>
                  <div className="home-banner-eight-icon">
                    <ul>
                      <li>
                        <i className="fa fa-check-circle" />
                        <span>Dog Training</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle" />
                        <span>Pet Sitting</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle" />
                        <span>Vet on Call</span>
                      </li>
                      <li>
                        <i className="fa fa-check-circle" />
                        <span>Vaccination</span>
                      </li>
                    </ul>
                  </div>
                  <div className="search-box-two search-box-eight">
                    <form action="search">
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
                          <i className="feather icon-map-pin" />
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Location"
                          />
                        </div>
                      </div>
                      <div className="search-btn">
                        <Link to={routes.search} className="btn search_service" type="submit">
                          Search
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="home-eight-dog d-none d-md-block">
                    <ImageWithBasePath
                      src="assets/img/hero-section-eight.png"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="home-eight-bg-two d-none d-md-block">
                    <ImageWithBasePath src="assets/img/her-section-eight-bg.png" alt="image" />
                    <div className="pet-bg-1 d-none d-lg-block">
                      <ImageWithBasePath src="assets/img/bg/pet-bg-01.png" alt="image" />
                    </div>
                    <div className="pet-bg-2 d-none d-md-block">
                      <ImageWithBasePath src="assets/img/bg/pet-bg-02.png" alt="image" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
      {/* pricing Section */}
      <section className="category-sections-eight">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-eight aos"
                data-aos="fade-up"
              >
                <ImageWithBasePath src="assets/img/icons/dog.svg" alt="image" />
                <h2>Our Category</h2>
                <p>A featured services marketplace typically offers a platform</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...settings} className=" category-eight-slider ">
              <div className="category-eight-main">
                <div className="category-eight-img">
                  <ImageWithBasePath src="assets/img/pets/pet-01.jpg" alt="image" />
                </div>
                <div className="category-eight-img-inside">
                  <Link to={routes.search}>
                    <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                    Read more
                  </Link>
                </div>
                <h6 className="mb-2">Pet Adoption</h6>
                <span>65 Products</span>
              </div>
              <div className="category-eight-main">
                <div className="category-eight-img">
                  <ImageWithBasePath src="assets/img/pets/pet-02.jpg" alt="image" />
                </div>
                <div className="category-eight-img-inside">
                  <Link to={routes.search}>
                    <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                    Read more
                  </Link>
                </div>
                <h6 className="mb-2">Pet Boarding</h6>
                <span>65 Products</span>
              </div>
              <div className="category-eight-main">
                <div className="category-eight-img">
                  <ImageWithBasePath src="assets/img/pets/pet-04.jpg" alt="image" />
                </div>
                <div className="category-eight-img-inside">
                  <Link to={routes.search}>
                    <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                    Read more
                  </Link>
                </div>
                <h6 className="mb-2">Foods</h6>
                <span>15 Products</span>
              </div>
              <div className="category-eight-main">
                <div className="category-eight-img">
                  <ImageWithBasePath src="assets/img/pets/pet-05.jpg" alt="image" />
                </div>
                <div className="category-eight-img-inside">
                  <Link to={routes.search}>
                    <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                    Read more
                  </Link>
                </div>
                <h6 className="mb-2">Health</h6>
                <span>35 Products</span>
              </div>
              <div className="category-eight-main">
                <div className="category-eight-img">
                  <ImageWithBasePath src="assets/img/pets/pet-06.jpg" alt="image" />
                </div>
                <div className="category-eight-img-inside">
                  <Link to={routes.search}>
                    <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                    Read more
                  </Link>
                </div>
                <h6 className="mb-2">Pet Supplies</h6>
                <span>65 Products</span>
              </div>
              <div className="category-eight-main">
                <div className="category-eight-img">
                  <ImageWithBasePath src="assets/img/pets/pet-01.jpg" alt="image" />
                </div>
                <div className="category-eight-img-inside">
                  <Link to={routes.search}>
                    <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                    Read more
                  </Link>
                </div>
                <h6 className="mb-2">Pet Grooming</h6>
                <span>65 Products</span>
              </div>
              <div className="category-eight-main">
                <div className="category-eight-img">
                  <ImageWithBasePath src="assets/img/pets/pet-02.jpg" alt="image" />
                </div>
                <div className="category-eight-img-inside">
                  <Link to={routes.search}>
                    <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                    Read more
                  </Link>
                </div>
                <h6 className="mb-2">Pet Grooming</h6>
                <span>65 Products</span>
              </div>

              </Slider>
            </div>
          </div>
          <div className="btn-sec btn-saloons btn-pets aos" data-aos="fade-up">
            <Link to="/search" className="btn btn-primary btn-view">
              VIEW ALL CATEGORIES
            </Link>
          </div>
        </div>
      </section>
      <section className="works-eight-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-eight aos"
                data-aos="fade-up"
              >
                <ImageWithBasePath src="assets/img/icons/dog.svg" alt="image" />
                <h2>How it Works</h2>
                <p>
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="works-eights-main">
                <div className="works-eights-img">
                  <ImageWithBasePath
                    src="assets/img/icons/gui-calendar-planner-eight.svg"
                    alt="image"
                  />
                  <div className="works-eights-arrow">
                    <ImageWithBasePath src="assets/img/icons/arrow-eight-1.svg" alt="image" />
                  </div>
                </div>
                <p>Connect with your Calendar</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="works-eights-main">
                <div className="works-eights-img">
                  <ImageWithBasePath src="assets/img/icons/pointer-eight.svg" alt="image" />
                  <div className="works-eights-arrow works-eights-arrow-two">
                    <ImageWithBasePath src="assets/img/icons/arrow-eight-2.svg" alt="image" />
                  </div>
                </div>
                <p>Connect with your Calendar</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="works-eights-main">
                <div className="works-eights-img">
                  <ImageWithBasePath src="assets/img/icons/dog-face-eight.svg" alt="image" />
                  <div className="works-eights-arrow">
                    <ImageWithBasePath src="assets/img/icons/arrow-eight-1.svg" alt="image" />
                  </div>
                </div>
                <p>Connect with your Calendar</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="works-eights-main">
                <div className="works-eights-img">
                  <ImageWithBasePath src="assets/img/icons/pay-per-eight.svg" alt="image" />
                </div>
                <p>Connect with your Calendar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-eight-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-eight aos"
                data-aos="fade-up"
              >
                <ImageWithBasePath src="assets/img/icons/dog.svg" alt="image" />
                <h2>Popular Services</h2>
                <p>
                  Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
                  vehicula
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="service-widget aos" data-aos="fade-up">
                <div className="service-img">
                  <Link to="/service-details">
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/gallery/gallery-14.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five features-service-eight">
                      <h6>Pet Health</h6>
                    </div>
                    <Link
                      to="#"
                      className="fav-icon fav-icon-five"
                    >
                      <Icon.Heart className="standard-feather" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-eight">
                  <div className="shop-content-logo">
                    <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="User" />
                  </div>
                  <h3 className="title">
                    <Link to="/service-details">
                      Ear Cleaning &amp; Plucking
                    </Link>
                  </h3>
                  <p>
                    <Icon.MapPin className="standard-feather" />
                    New Jersey, USA
                  </p>
                  <div className="feature-services-eight">
                    <div className="popular-service-eight">
                      <h6>
                        $350<span>/hr</span>
                      </h6>
                      <p>$450</p>
                    </div>
                    <div className="rate">
                      <div className="rate-icon">
                        <i className="fas fa-star filled" />
                        <span>4.8</span>
                      </div>
                      <h6>(50)</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="service-widget aos" data-aos="fade-up">
                <div className="service-img">
                  <Link to="/service-details">
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/gallery/gallery-15.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five features-service-eight">
                      <h6>Pet Health</h6>
                    </div>
                    <Link
                      to="#"
                      className="fav-icon fav-icon-five"
                    >
                      <Icon.Heart className="standard-feather" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-eight">
                  <div className="shop-content-logo">
                    <ImageWithBasePath src="assets/img/profiles/avatar-07.jpg" alt="image" />
                  </div>
                  <h3 className="title">
                    <Link to="/service-details">
                      Ear Cleaning &amp; Plucking
                    </Link>
                  </h3>
                  <p>
                    <Icon.MapPin className="standard-feather" />
                    New Jersey, USA
                  </p>
                  <div className="feature-services-eight">
                    <div className="popular-service-eight">
                      <h6>
                        $250<span>/hr</span>
                      </h6>
                      <p>$350</p>
                    </div>
                    <div className="rate">
                      <div className="rate-icon">
                        <i className="fas fa-star filled" />
                        <span>4.8</span>
                      </div>
                      <h6>(60)</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="service-widget aos" data-aos="fade-up">
                <div className="service-img">
                  <Link to="/service-details">
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/gallery/gallery-16.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five features-service-eight">
                      <h6>Pet Grooming</h6>
                    </div>
                    <Link
                      to="#"
                      className="fav-icon fav-icon-five"
                    >
                      <Icon.Heart className="standard-feather" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-eight">
                  <div className="shop-content-logo">
                    <ImageWithBasePath src="assets/img/profiles/avatar-10.jpg" alt="User" />
                  </div>
                  <h3 className="title">
                    <Link to="/service-details">
                      Ear Cleaning &amp; Plucking
                    </Link>
                  </h3>
                  <p>
                    <Icon.MapPin className="standard-feather" />
                    New Jersey, USA
                  </p>
                  <div className="feature-services-eight">
                    <div className="popular-service-eight">
                      <h6>
                        $650<span>/hr</span>
                      </h6>
                      <p>$850</p>
                    </div>
                    <div className="rate">
                      <div className="rate-icon">
                        <i className="fas fa-star filled" />
                        <span>4.8</span>
                      </div>
                      <h6>(90)</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="service-widget aos" data-aos="fade-up">
                <div className="service-img">
                  <Link to="/service-details">
                    <ImageWithBasePath
                      className="img-fluid serv-img"
                      alt="Service Image"
                      src="assets/img/gallery/gallery-17.jpg"
                    />
                  </Link>
                  <div className="fav-item ">
                    <div className="features-service-five features-service-eight">
                      <h6>Pet Grooming</h6>
                    </div>
                    <Link
                      to="#"
                      className="fav-icon fav-icon-five"
                    >
                      <Icon.Heart className="standard-feather" />
                    </Link>
                  </div>
                </div>
                <div className="service-content service-feature-eight">
                  <div className="shop-content-logo">
                    <ImageWithBasePath src="assets/img/profiles/avatar-15.jpg" alt="User" />
                  </div>
                  <h3 className="title">
                    <Link to="/service-details">
                      Ear Cleaning &amp; Plucking
                    </Link>
                  </h3>
                  <p>
                    <Icon.MapPin className="standard-feather" />
                    New Jersey, USA
                  </p>
                  <div className="feature-services-eight">
                    <div className="popular-service-eight">
                      <h6>
                        $350<span>/hr</span>
                      </h6>
                      <p>$450</p>
                    </div>
                    <div className="rate">
                      <div className="rate-icon">
                        <i className="fas fa-star filled" />
                        <span>4.8</span>
                      </div>
                      <h6>(50)</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-sec btn-saloons btn-pets aos" data-aos="fade-up">
            <Link to="/search" className="btn btn-primary btn-view">
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>
 
      <section className="about-us-eight-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="about-eight-main">
                <ImageWithBasePath src="assets/img/about-us-eight.png" alt="image" />
                <div className="truely-eight-bg">
                  <ImageWithBasePath
                    src="assets/img/her-section-eight-bg.png"
                    alt="image"
                    className="img-fluid"
                  />
                </div>
                <div className="truely-eight-bg-two">
                  <ImageWithBasePath src="assets/img/her-section-eight-bg.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="passion-eight-all">
                <div
                  className="section-heading section-heading-eight passion-eight-heading aos"
                  data-aos="fade-up"
                >
                  <ImageWithBasePath src="assets/img/icons/dog.svg" alt="image" />
                  <h2>About Truely sell pet care</h2>
                  <p>Mauris ut cursus nunc. </p>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <ul>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/pink-dog-feet.svg" alt="image" />
                    <span>The Pet Expert</span>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/pink-dog-feet.svg" alt="image" />
                    <span>Love Your Pet More</span>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/pink-dog-feet.svg" alt="image" />
                    <span>Your Pet, Our Passion</span>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/pink-dog-feet.svg" alt="image" />
                    <span>The Pet Expert</span>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/pink-dog-feet.svg" alt="image" />
                    <span>Love Your Pet More</span>
                  </li>
                  <li>
                    <ImageWithBasePath src="assets/img/icons/pink-dog-feet.svg" alt="image" />
                    <span>Your Pet, Our Passion</span>
                  </li>
                </ul>
                <div className="passion-eight-content">
                  <div className="passion-content-top">
                    <ImageWithBasePath src="assets/img/icons/win.svg" alt="image" />
                    <div className="passion-content-bottom">
                      <h2>98.7%</h2>
                      <p>of reviews are 5 star</p>
                    </div>
                    <Link to="#" className="btn btn-primary">
                      Start Booking Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cat-dog-eight-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div
                className="section-heading section-heading-eight passion-eight-heading aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <ImageWithBasePath src="assets/img/icons/dog.svg" className="mb-3" alt="image" />
                <h2>Numbers Tell our Story</h2>
                <p>
                  Here’s a compelling description for a “Why Trust Us” , designed to
                  build confidence
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="clients-eights-all">
                    <div className="clients-eight-span">
                      <h3 className="counter"><CountUp end={644} duration={5} /></h3>
                      <span>+</span>
                    </div>
                    <p>Active Clients</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="clients-eights-all">
                    <div className="clients-eight-span">
                      <h3 className="counter"><CountUp end={356} duration={5} /></h3>
                      <span>+</span>
                    </div>
                    <p>Professionals</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="clients-eights-all">
                    <div className="clients-eight-span">
                      <h3 className="counter"><CountUp end={123} duration={5} /></h3>
                      <span>+</span>
                    </div>
                    <p>Pet Services</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="clients-eights-all">
                    <div className="clients-eight-span">
                      <h3 className="counter"><CountUp end={965} duration={5} /></h3>
                      <span>+</span>
                    </div>
                    <p>Awards</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="professional-eight-img">
                <ImageWithBasePath
                  src="assets/img/professional-eight.png"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="meet-eight-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-eight aos"
                data-aos="fade-up"
              >
                <ImageWithBasePath src="assets/img/icons/dog.svg" alt="image" />
                <h2>Meet Our Professionals</h2>
                <p>Browse the trending professionals from the List
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider
                {...professionalSettings}
                className="owl-carousel professional-eight-slider"
              >
                  <div className="professional-eight-main">
                    <div className="professional-eight-img-ryt">
                      <ImageWithBasePath src="assets/img/providers/provider-37.jpg" alt="image" />
                    </div>
                    <div className="professional-eight-img-inside">
                      <Link to={routes.providerDetails}>
                        <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                        Read more
                      </Link>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <h6>Caroline Williams</h6>
                    </Link>
                    <span className="act">2 Years Experience</span>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(10)</span>
                    </div>
                  </div>
                  <div className="professional-eight-main">
                    <div className="professional-eight-img-ryt">
                      <ImageWithBasePath src="assets/img/providers/provider-38.jpg" alt="image" />
                    </div>
                    <div className="professional-eight-img-inside">
                      <Link to={routes.providerDetails}>
                        <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                        Read more
                      </Link>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <h6>John Doe</h6>
                    </Link>
                    <span className="act">2 Years Experience</span>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(10)</span>
                    </div>
                  </div>
                  <div className="professional-eight-main">
                    <div className="professional-eight-img-ryt">
                      <ImageWithBasePath src="assets/img/providers/provider-39.jpg" alt="image" />
                    </div>
                    <div className="professional-eight-img-inside">
                      <Link to={routes.providerDetails}>
                        <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                        Read more
                      </Link>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <h6>Modona William</h6>
                    </Link>
                    <span className="act">4 Years Experience</span>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(10)</span>
                    </div>
                  </div>
                  <div className="professional-eight-main">
                    <div className="professional-eight-img-ryt">
                      <ImageWithBasePath src="assets/img/providers/provider-41.jpg" alt="image" />
                    </div>
                    <div className="professional-eight-img-inside">
                      <Link to={routes.providerDetails}>
                        <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                        Read more
                      </Link>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <h6>Caroline Williams</h6>
                    </Link>
                    <span className="act">3 Years Experience</span>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(10)</span>
                    </div>
                  </div>
                  <div className="professional-eight-main">
                    <div className="professional-eight-img-ryt">
                      <ImageWithBasePath src="assets/img/providers/provider-40.jpg" alt="image" />
                    </div>
                    <div className="professional-eight-img-inside">
                      <Link to="#">
                        <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                        Read more
                      </Link>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <h6>Rictza James</h6>
                    </Link>
                    <span className="act">2 Years Experience</span>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span>(10)</span>
                    </div>
                  </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="customers-eight-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="customers-eights-all">
                <div
                  className="section-heading section-heading-eight customers-eight-heading aos"
                  data-aos="fade-up"
                >
                  <ImageWithBasePath src="assets/img/icons/dog.svg" alt="image" />
                  <h2>Over 1000+ Customers with 5-Star Reviews</h2>
                  <p>Robust Support and Responsiveness </p>
                </div>
                <p>Ensuring that we have the skills and insights needed to deliver exceptional results.
                </p>
                <ul className="total-client-avatar total-client-avatar-seven">
                  <li>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/profiles/avatar-06.jpg" alt="User" />
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
                      <ImageWithBasePath src="assets/img/profiles/avatar-09.jpg" alt="User" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/profiles/avatar-10.jpg" alt="User" />
                    </Link>
                  </li>
                </ul>
                <p className="customers-icons">
                  <i className="fas fa-star filled" />
                  <span>4.9</span>/1000 Reviews
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <Slider
                {...testimonialsSettings}
                className="owl-carousel testimonals-eight-slider"
              >
                <div className="testimonials-main-ryt customers-eight-main">
                  <div className="testimonials-content-seven">
                    <div className="testimonials-seven-img">
                      <ImageWithBasePath src="assets/img/profiles/avatar-55.jpg" alt="User" />
                    </div>
                    <ImageWithBasePath
                      src="assets/img/icons/test-quote.svg"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="testimonials-img-content">
                    <h6>Hashimoda Reena, USA</h6>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                    </div>
                  </div>
                  <p>
                    Versatile and user-friendly platform for freelancers and businesses alike.
                    Its interface is clean and intuitive, making it easy to post jobs, browse
                    profiles, and manage projects. The range of services is impressive
                  </p>
                </div>
                <div className="testimonials-main-ryt customers-eight-main">
                  <div className="testimonials-content-seven">
                    <div className="testimonials-seven-img">
                      <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="User" />
                    </div>
                    <ImageWithBasePath
                      src="assets/img/icons/test-quote.svg"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
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
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or
                    randomised words which don
                  </p>
                </div>
                <div className="testimonials-main-ryt customers-eight-main">
                  <div className="testimonials-content-seven">
                    <div className="testimonials-seven-img">
                      <ImageWithBasePath src="assets/img/profiles/avatar-17.jpg" alt="User" />
                    </div>
                    <ImageWithBasePath
                      src="assets/img/icons/test-quote.svg"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
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
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected humour, or
                    randomised words which don
                  </p>
                </div>

              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-eight-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="section-heading section-heading-eight aos"
                data-aos="fade-up"
              >
                <ImageWithBasePath src="assets/img/icons/dog.svg" alt="image" />
                <h2>Our Blog </h2>
                <p>
                  Here’s a compelling blog description designed to provide a clear
                  idea
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Slider {...blogSettings} className="owl-carousel pb-4 blog-eight-slider">
                <div
                  className="service-widget service-widget-eight aos"
                  data-aos="fade-up"
                >
                  <div className="service-img">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Service Image"
                        src="assets/img/blog/blog-09.jpg"
                      />
                    </Link>
                    <div className="service-eight-img-inside">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div className="service-content service-eight-blogs">
                    <h3 className="title">
                      <Link to={routes.blogDetails}>
                        Top Grooming tips for your dog for this summer
                      </Link>
                    </h3>
                    <p>
                      In today’s fast-paced business world, finding the right services
                      to support your growth can be a game
                    </p>
                    <div className="usefull-bottom useful-bottom-eight d-flex justify-content-between">
                      <Link to={routes.providerDetails} className="useful-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-10.jpg" alt="User" />
                        <span>Admin</span>
                      </Link>
                      <h6>
                        <i className="feather-tag" />
                        Grooming
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="service-widget service-widget-eight aos"
                  data-aos="fade-up"
                >
                  <div className="service-img">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Service Image"
                        src="assets/img/blog/blog-10.jpg"
                      />
                    </Link>
                    <div className="service-eight-img-inside">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div className="service-content service-eight-blogs">
                    <h3 className="title">
                      <Link to={routes.blogDetails}>
                        Pet treat s our picks food of favourite recipes
                      </Link>
                    </h3>
                    <p>
                      One of the biggest advantages of using a service marketplace is
                      the access to a no of services.
                    </p>
                    <div className="usefull-bottom useful-bottom-eight d-flex justify-content-between">
                      <Link to={routes.providerDetails} className="useful-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-20.jpg" alt="User" />
                        <span>Admin</span>
                      </Link>
                      <h6>
                        <i className="feather-tag" />
                        Grooming
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="service-widget service-widget-eight aos"
                  data-aos="fade-up"
                >
                  <div className="service-img">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Service Image"
                        src="assets/img/blog/blog-11.jpg"
                      />
                    </Link>
                    <div className="service-eight-img-inside">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div className="service-content service-eight-blogs">
                    <h3 className="title">
                      <Link to={routes.blogDetails}>
                        Cook meals without cook the animals planet
                      </Link>
                    </h3>
                    <p>
                      Before hiring a service provider, check their reviews and
                      ratings on the marketplace that&apos;s important...
                    </p>
                    <div className="usefull-bottom useful-bottom-eight d-flex justify-content-between">
                      <Link to={routes.providerDetails} className="useful-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-09.jpg" alt="User" />
                        <span>Admin</span>
                      </Link>
                      <h6>
                        <i className="feather-tag" />
                        Grooming
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="service-widget service-widget-eight aos"
                  data-aos="fade-up"
                >
                  <div className="service-img">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        alt="Service Image"
                        src="assets/img/blog/blog-10.jpg"
                      />
                    </Link>
                    <div className="service-eight-img-inside">
                      <Link to={routes.blogDetails}>
                        <ImageWithBasePath src="assets/img/icons/dog-feet.svg" alt="image" />
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div className="service-content service-eight-blogs">
                    <h3 className="title">
                      <Link to={routes.blogDetails}>
                        Pet treat s our picks food of favourite recipes
                      </Link>
                    </h3>
                    <p>
                      One of the biggest advantages of using a service marketplace is
                      the access to a no of services.
                    </p>
                    <div className="usefull-bottom useful-bottom-eight d-flex justify-content-between">
                      <Link to={routes.providerDetails} className="useful-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-13.jpg" alt="User" />
                        <span>Admin</span>
                      </Link>
                      <h6>
                        <i className="feather-tag" />
                        Grooming
                      </h6>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div className="btn-sec btn-saloons btn-pets aos" data-aos="fade-up">
            <Link to={routes.blogGrid} className="btn btn-primary btn-view">
              VIEW ALL BLOGS
            </Link>
          </div>
        </div>
      </section>

      <section className="healthy-eight-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="pets-content-all">
                <h2>Keeping your pets</h2>
                <h1>Happy, Healthy And Safe!</h1>
                <p>Our dedicated support team is here to assist you every step of the way. Whether you have questions, need support, or require follow-up, we are responsive and ready to help.
                </p>
                <Link to="#" className="btn btn-primary">
                  Start Booking Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="healthy-pets-img">
                <ImageWithBasePath
                  src="assets/img/healthy-pets.png"
                  alt="image"
                  className="img-fluid"
                />
                <div className="healthy-eight-bg">
                  <ImageWithBasePath src="assets/img/her-section-eight-bg.png" alt="image" />
                </div>
                <div className="healthy-eight-bg-two">
                  <ImageWithBasePath src="assets/img/her-section-eight-bg.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <FooterEight />
      {/* /Footer */}
    </div>
  );
};

export default HomeEight;
