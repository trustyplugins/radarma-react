import React, { useEffect, useRef, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoModal from '../../../../core/hooks/video-modal';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import StickyBox from 'react-sticky-box';

const ServiceDetails2 = () => {
  const routes = all_routes;
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const videoUrl = 'https://www.youtube.com/watch?v=Vdp6x7Bibtk';
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [open, setOpen] = React.useState(false);
  const two = {
    dots: false,
    autoplay: false,
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
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav2 || undefined, // Link to the second slider
    ref: (slider: any) => (sliderRef1.current = slider), // Assign the slider ref
  };

  const settings2 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: nav1 || undefined, // Link to the first slider
    ref: (slider: any) => (sliderRef2.current = slider), // Assign the slider ref
  };
  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);
  return (
    <>
      <BreadCrumb
        title="Service Details"
        item1="Service"
        item2="Service Details"
      />
      <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="service-head mb-2">
                  <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
                    <div>
                      <div className="d-flex align-items-center flex-wrap">
                        <h3 className="mb-2 me-2">Lighting Services</h3>
                        <span className="badge badge-purple-transparent mb-2">
                          <i className="ti ti-calendar-check me-1" />
                          6000+ Bookings
                        </span>
                      </div>
                      <div className="d-flex align-items-center flex-wrap mb-2">
                        <p className="me-3 mb-2">
                          <i className="ti ti-map-pin me-2" />
                          18 Boon Lay Way, Singapore{" "}
                          <Link
                            to="#"
                            className="link-primary text-decoration-underline"
                          >
                            View Location
                          </Link>
                        </p>
                        <Link to="#" className="me-3 mb-2">
                          <i className="ti ti-heart me-2" />
                          Add to Wishlist
                        </Link>
                        <Link to="#" className="me-3 mb-2">
                          <i className="ti ti-share me-2" />
                          Share Now
                        </Link>
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="rate-item d-flex align-items-center">
                        <span className="avatar avatar-md me-2">
                          <i className="ti ti-star-filled" />
                        </span>
                        <div>
                          <h6 className="fs-16 fw-medium">4.9 / 5</h6>
                          <p>(255 reviews)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    {/* Slider */}
                    <div className="service-wrap vertical-slider">
                      <Slider {...settings1} className="slider-for nav-center" >
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/services/service-slider-01.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/services/service-slider-02.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/services/service-slider-03.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/services/service-slider-04.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/services/service-slider-05.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/services/service-slider-06.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                      </Slider>
                      <Slider {...settings2} className="slider-nav slide-small nav-center" >
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-01.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-02.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-03.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-04.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-05.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-06.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                      </Slider>
                    </div>
                    {/* /Slider */}
                  </div>
                </div>
                <ul className="nav nav-tabs nav-tabs-solid service-tabs mb-2">
                  <li className="nav-item mb-3">
                    <Link className="nav-link active" to="#service-overview">
                      Overview
                    </Link>
                  </li>
                  <li className="nav-item mb-3">
                    <Link className="nav-link" to="#service-offered">
                      Services Offered
                    </Link>
                  </li>
                  <li className="nav-item mb-3">
                    <Link className="nav-link" to="#service-includes">
                      Includes &amp; Excludes
                    </Link>
                  </li>
                  <li className="nav-item mb-3">
                    <Link className="nav-link" to="#service-gallery">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item mb-3">
                    <Link className="nav-link" to="#service-video">
                      Video
                    </Link>
                  </li>
                  <li className="nav-item mb-3">
                    <Link className="nav-link" to="#service-faq">
                      FAQ’s
                    </Link>
                  </li>
                </ul>
                <div className="card border-0" id="service-overview">
                  <div className="card-body">
                    <div className="accordion service-accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#overview"
                            aria-expanded="false"
                          >
                            Service Overview
                          </button>
                        </h2>
                        <div
                          id="overview"
                          className="accordion-collapse collapse show"
                        >
                          <div className="accordion-body border-top border-bottom-0 p-0 mt-3 pt-3">
                            <div className="more-text">
                              <p>
                                Provides reliable and professional electrical
                                solutions for residential and commercial clients. Our
                                licensed electricians are dedicated to delivering
                                top-quality service, ensuring safety, and meeting all
                                your electrical needs. Committed to providing
                                high-quality electrical solutions with a focus on
                                safety and customer satisfaction. Our team of licensed
                                electricians is equipped to handle both residential
                                and commercial projects with expertise and care.
                              </p>
                              <p>
                                Comprehensive overview of Electrical Services,
                                including the types of services offered, key benefits,
                                location, contact details, special offers, and
                                customer reviews.
                              </p>
                            </div>
                            <Link
                              to="#"
                              className="link-primary text-decoration-underline more-btn"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0" id="service-offered">
                  <div className="card-body">
                    <div className="accordion service-accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#offer"
                            aria-expanded="false"
                          >
                            Additional Services
                          </button>
                        </h2>
                        <div id="offer" className="accordion-collapse collapse show">
                          <div className="accordion-body border-top border-bottom-0 p-0 mt-3 pt-3">
                            <div className="offer-item d-md-flex align-items-center justify-content-between bg-white mb-2">
                              <div className="d-sm-flex align-items-center mb-2">
                                <span className="avatar avatar-lg flex-shrink-0 me-2 mb-2">
                                  <ImageWithBasePath
                                    src="assets/img/services/service-thumb-03.jpg"
                                    alt="img"
                                    className="br-10"
                                  />
                                </span>
                                <div className="mb-2">
                                  <h6 className="fs-16 fw-medium">
                                    Electrical Repairs
                                  </h6>
                                  <p className="fs-14">
                                    Fixing faulty wiring, outlets, switches, and more
                                    to ensure.
                                  </p>
                                </div>
                              </div>
                              <div className="pb-3">
                                <h6 className="fs-16 fw-medium text-primary mb-0">
                                  $32.00
                                </h6>
                                <p>30 Min</p>
                              </div>
                            </div>
                            <div className="offer-item d-md-flex align-items-center justify-content-between bg-white mb-2">
                              <div className="d-sm-flex align-items-center mb-2">
                                <span className="avatar avatar-lg flex-shrink-0 me-2 mb-2">
                                  <ImageWithBasePath
                                    src="assets/img/services/service-thumb-06.jpg"
                                    alt="img"
                                    className="br-10"
                                  />
                                </span>
                                <div className="mb-2">
                                  <h6 className="fs-16 fw-medium">Panel Upgrades</h6>
                                  <p>
                                    Upgrade your electrical panel to handle increased
                                    power.
                                  </p>
                                </div>
                              </div>
                              <div className="pb-3">
                                <h6 className="fs-16 fw-medium text-primary mb-0">
                                  $30.00
                                </h6>
                                <p>30 Min</p>
                              </div>
                            </div>
                            <div className="offer-item d-md-flex align-items-center justify-content-between bg-white mb-2">
                              <div className="d-sm-flex align-items-center mb-2">
                                <span className="avatar avatar-lg flex-shrink-0 me-2 mb-2">
                                  <ImageWithBasePath
                                    src="assets/img/services/service-thumb-05.jpg"
                                    alt="img"
                                    className="br-10"
                                  />
                                </span>
                                <div className="mb-2">
                                  <h6 className="fs-16 fw-medium">
                                    Troubleshooting &amp; Diagnostics
                                  </h6>
                                  <p>
                                    Identify and resolve electrical issues quickly and
                                    effectively.
                                  </p>
                                </div>
                              </div>
                              <div className="pb-3">
                                <h6 className="fs-16 fw-medium text-primary mb-0">
                                  $40.00
                                </h6>
                                <p>40 Min</p>
                              </div>
                            </div>
                            <div className="offer-item d-md-flex align-items-center justify-content-between bg-white mb-0">
                              <div className="d-sm-flex align-items-center mb-2">
                                <span className="avatar avatar-lg flex-shrink-0 me-2 mb-2">
                                  <ImageWithBasePath
                                    src="assets/img/services/service-thumb-04.jpg"
                                    alt="img"
                                    className="br-10"
                                  />
                                </span>
                                <div className="mb-2">
                                  <h6 className="fs-16 fw-medium">
                                    Lighting Installation &amp; Maintenance
                                  </h6>
                                  <p>
                                    Install and maintain energy-efficient lighting
                                    solutions
                                  </p>
                                </div>
                              </div>
                              <div className="pb-3">
                                <h6 className="fs-16 fw-medium text-primary mb-0">
                                  $22.00
                                </h6>
                                <p>20 Min</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0" id="service-includes">
                  <div className="card-body">
                    <div className="accordion service-accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#include"
                            aria-expanded="false"
                          >
                            Includes
                          </button>
                        </h2>
                        <div
                          id="include"
                          className="accordion-collapse collapse show"
                        >
                          <div className="accordion-body border-top border-bottom-0 p-0 mt-3 pt-3">
                            <div className="bg-light-200 p-3 pb-2 br-10">
                              <p className="d-inline-flex align-items-center mb-2 me-4">
                                <i className="feather-check-circle text-success me-2" />
                                Haircut &amp; Hair Styles
                              </p>
                              <p className="d-inline-flex align-items-center mb-2 me-4">
                                <i className="feather-check-circle text-success me-2" />
                                Shampoo &amp; Conditioning
                              </p>
                              <p className="d-inline-flex align-items-center mb-2 me-4">
                                <i className="feather-check-circle text-success me-2" />
                                Beard Trim/Shave
                              </p>
                              <p className="d-inline-flex align-items-center mb-2 me-4">
                                <i className="feather-check-circle text-success me-2" />
                                Neck Shave
                              </p>
                              <p className="d-inline-flex align-items-center mb-2 me-4">
                                <i className="feather-check-circle text-success me-2" />
                                Hot Towel Treatment
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0" id="service-gallery">
                  <div className="card-body">
                    <div className="accordion service-accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#gallery"
                            aria-expanded="false"
                          >
                            Gallery
                          </button>
                        </h2>
                        <div
                          id="gallery"
                          className="accordion-collapse collapse show"
                        >
                          <div className="accordion-body border-top border-bottom-0 p-0 mt-3 pt-3">
                            <Slider
                              {...two}
                              className="gallery-slider reactslick owl-carousel nav-center"
                            >
                              <Link
                                to="#"
                                data-fancybox="gallery" onClick={() => setOpen(true)}
                                className="gallery-item"
                              >
                                <ImageWithBasePath
                                  src="assets/img/services/service-thumb-01.jpg"
                                  alt="img"
                                />
                              </Link>
                              <Link
                                to="#"
                                data-fancybox="gallery" onClick={() => setOpen(true)}
                                className="gallery-item"
                              >
                                <ImageWithBasePath
                                  src="assets/img/services/service-thumb-02.jpg"
                                  alt="img"
                                />
                              </Link>
                              <Link
                                to="#"
                                data-fancybox="gallery" onClick={() => setOpen(true)}
                                className="gallery-item"
                              >
                                <ImageWithBasePath
                                  src="assets/img/services/service-thumb-03.jpg"
                                  alt="img"
                                />
                              </Link>
                              <Link
                                to="#"
                                data-fancybox="gallery" onClick={() => setOpen(true)}
                                className="gallery-item"
                              >
                                <ImageWithBasePath
                                  src="assets/img/services/service-thumb-04.jpg"
                                  alt="img"
                                />
                              </Link>
                              <Link
                                to="#"
                                data-fancybox="gallery" onClick={() => setOpen(true)}
                                className="gallery-item"
                              >
                                <ImageWithBasePath
                                  src="assets/img/services/service-thumb-05.jpg"
                                  alt="img"
                                />
                              </Link>
                              <Link
                                to="#"
                                data-fancybox="gallery" onClick={() => setOpen(true)}
                                className="gallery-item"
                              >
                                <ImageWithBasePath
                                  src="assets/img/services/service-thumb-06.jpg"
                                  alt="img"
                                />
                              </Link>
                              <Link
                                to="#"
                                data-fancybox="gallery" onClick={() => setOpen(true)}
                                className="gallery-item"
                              >
                                <ImageWithBasePath
                                  src="assets/img/services/service-thumb-03.jpg"
                                  alt="img"
                                />
                              </Link>
                            </Slider>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0" id="service-video">
                  <div className="card-body">
                    <div className="accordion service-accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#video"
                            aria-expanded="false"
                          >
                            Video
                          </button>
                        </h2>
                        <div id="video" className="accordion-collapse collapse show">
                          <div className="accordion-body border-top border-bottom-0 p-0 mt-3 pt-3">
                          <div className="video-wrap">
                              <Link
                                className="video-btn video-effect"
                                data-fancybox=""
                                onClick={handleOpenModal}
                                to="#"
                              >
                                <i className="fa-solid fa-play" />
                              </Link>
                            </div>
                            <VideoModal
                              show={showModal}
                              handleClose={handleCloseModal}
                              videoUrl={videoUrl}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0" id="service-faq">
                  <div className="card-body">
                    <div className="accordion service-accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq"
                            aria-expanded="false"
                          >
                            FAQ’s
                          </button>
                        </h2>
                        <div id="faq" className="accordion-collapse collapse show">
                          <div className="accordion-body border-top border-bottom-0 p-0 mt-3 pt-3">
                            <div
                              className="accordion accordion-customicon1 faq-accordion"
                              id="accordionfaq"
                            >
                              <div className="accordion-item bg-light-200 mb-3">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button bg-light-200 br-10 fs-16 fw-medium"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq1"
                                    aria-expanded="false"
                                  >
                                    What is included in a Classic Cut?
                                  </button>
                                </h2>
                                <div
                                  id="faq1"
                                  className="accordion-collapse collapse show"
                                  data-bs-parent="#accordionfaq"
                                >
                                  <div className="accordion-body border-0 pt-0">
                                    <p>
                                      The Classic Cut includes a consultation with
                                      your barber, a haircut tailored to your style,
                                      and final styling with product. It does not
                                      include a hair wash or beard trim.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item bg-light-200 mb-3">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button bg-light-200 br-10 fs-16 fw-medium collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq2"
                                    aria-expanded="false"
                                  >
                                    Do you offer services for children?
                                  </button>
                                </h2>
                                <div
                                  id="faq2"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionfaq"
                                >
                                  <div className="accordion-body border-0 pt-0">
                                    <p>
                                      The Classic Cut includes a consultation with
                                      your barber, a haircut tailored to your style,
                                      and final styling with product. It does not
                                      include a hair wash or beard trim.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item bg-light-200 mb-3">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button bg-light-200 br-10 fs-16 fw-medium collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq3"
                                    aria-expanded="false"
                                  >
                                    What is the difference between a Hot Towel Shave
                                    and a regular shave?
                                  </button>
                                </h2>
                                <div
                                  id="faq3"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionfaq"
                                >
                                  <div className="accordion-body border-0 pt-0">
                                    <p>
                                      The Classic Cut includes a consultation with
                                      your barber, a haircut tailored to your style,
                                      and final styling with product. It does not
                                      include a hair wash or beard trim.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item bg-light-200">
                                <h2 className="accordion-header">
                                  <button
                                    className="accordion-button bg-light-200 br-10 fs-16 fw-medium collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq4"
                                    aria-expanded="false"
                                  >
                                    Can I get a haircut and beard trim together?
                                  </button>
                                </h2>
                                <div
                                  id="faq4"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionfaq"
                                >
                                  <div className="accordion-body border-0 pt-0">
                                    <p>
                                      The Classic Cut includes a consultation with
                                      your barber, a haircut tailored to your style,
                                      and final styling with product. It does not
                                      include a hair wash or beard trim.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <h4 className="mb-3">Reviews (45)</h4>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#add-review"
                        className="btn btn-dark btn-sm mb-3"
                      >
                        Write a Review
                      </Link>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-md-5">
                        <div className="rating-item bg-light-500 text-center mb-3">
                          <h5 className="mb-3">Customer Reviews &amp; Ratings</h5>
                          <div className="d-inline-flex align-items-center justify-content-center">
                            <i className="ti ti-star-filled text-warning me-1" />
                            <i className="ti ti-star-filled text-warning me-1" />
                            <i className="ti ti-star-filled text-warning me-1" />
                            <i className="ti ti-star-filled text-warning me-1" />
                            <i className="ti ti-star-filled text-warning" />
                          </div>
                          <p className="mb-3">(4.9 out of 5.0)</p>
                          <p className="text-gray-9">Based On 2,459 Reviews</p>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="rating-progress mb-3">
                          <div className="d-flex align-items-center mb-2">
                            <p className="me-2 text-nowrap mb-0">5 Star Ratings</p>
                            <div
                              className="progress w-100"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "90%" }}
                              />
                            </div>
                            <p className="progress-count ms-2">2,547</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <p className="me-2 text-nowrap mb-0">4 Star Ratings</p>
                            <div
                              className="progress mb-0 w-100"
                              role="progressbar"
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "80%" }}
                              />
                            </div>
                            <p className="progress-count ms-2">1,245</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <p className="me-2 text-nowrap mb-0">3 Star Ratings</p>
                            <div
                              className="progress mb-0 w-100"
                              role="progressbar"
                              aria-valuenow={70}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "70%" }}
                              />
                            </div>
                            <p className="progress-count ms-2">600</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <p className="me-2 text-nowrap mb-0">2 Star Ratings</p>
                            <div
                              className="progress mb-0 w-100"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "60%" }}
                              />
                            </div>
                            <p className="progress-count ms-2">560</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <p className="me-2 text-nowrap mb-0">1 Star Ratings</p>
                            <div
                              className="progress mb-0 w-100"
                              role="progressbar"
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: "40%" }}
                              />
                            </div>
                            <p className="progress-count ms-2">400</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card review-item mb-3">
                      <div className="card-body p-3">
                        <div className="review-info">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-items-center mb-2">
                              <span className="avatar avatar-lg me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-01.jpg"
                                  className="rounded-circle"
                                  alt="img"
                                />
                              </span>
                              <div>
                                <h6 className="fs-16 fw-medium">Adrian Hendriques</h6>
                                <div className="d-flex align-items-center flex-wrap date-info">
                                  <p className="fs-14 mb-0">2 days ago</p>
                                  <p className="fs-14 mb-0">Excellent service!</p>
                                </div>
                              </div>
                            </div>
                            <span className="badge bg-success d-inline-flex align-items-center mb-2">
                              <i className="ti ti-star-filled me-1" />5
                            </span>
                          </div>
                          <p className="mb-2">
                            The electricians were prompt, professional, and resolved
                            our issues quickly.did a fantastic job upgrading our
                            electrical panel. Highly recommend them for any electrical
                            work.
                          </p>
                          <div className="d-flex align-items-center justify-content-between flex-wrap like-info">
                            <div className="d-inline-flex align-items-center">
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-up me-2" />
                                Reply
                              </Link>
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-up me-2" />
                                Like
                              </Link>
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center"
                              >
                                <i className="ti ti-thumb-down me-2" />
                                Dislike
                              </Link>
                            </div>
                            <div className="d-inline-flex align-items-center">
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-up me-2" />
                                45
                              </Link>
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-down me-2" />
                                21
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="review-info reply mt-2 p-3">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-items-center mb-2">
                              <span className="avatar avatar-lg me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-02.jpg"
                                  className="rounded-circle"
                                  alt="img"
                                />
                              </span>
                              <div>
                                <h6 className="fs-16 fw-medium">Stephen Vance</h6>
                                <div className="d-flex align-items-center flex-wrap date-info">
                                  <p className="fs-14 mb-0">2 days ago</p>
                                  <p className="fs-14 mb-0">Excellent service!</p>
                                </div>
                              </div>
                            </div>
                            <span className="badge bg-success d-inline-flex align-items-center mb-2">
                              <i className="ti ti-star-filled me-1" />4
                            </span>
                          </div>
                          <p className="mb-2">
                            Thank You!!! For Your Appreciation!!!
                          </p>
                          <div className="d-flex align-items-center justify-content-between flex-wrap like-info">
                            <div className="d-inline-flex align-items-center flex-wrap">
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-up me-2" />
                                Reply
                              </Link>
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-up me-2" />
                                Like
                              </Link>
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center"
                              >
                                <i className="ti ti-thumb-down me-2" />
                                Dislike
                              </Link>
                            </div>
                            <div className="d-inline-flex align-items-center">
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-up me-2" />
                                45
                              </Link>
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-down me-2" />
                                20
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card review-item mb-3">
                      <div className="card-body p-3">
                        <div className="review-info">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-items-center mb-2">
                              <span className="avatar avatar-lg me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-03.jpg"
                                  className="rounded-circle"
                                  alt="img"
                                />
                              </span>
                              <div>
                                <h6 className="fs-16 fw-medium">Don Rosales</h6>
                                <div className="d-flex align-items-center flex-wrap date-info">
                                  <p className="fs-14 mb-0">2 days ago</p>
                                  <p className="fs-14 mb-0">Great Service!</p>
                                </div>
                              </div>
                            </div>
                            <span className="badge bg-danger d-inline-flex align-items-center mb-2">
                              <i className="ti ti-star-filled me-1" />1
                            </span>
                          </div>
                          <p className="mb-2">
                            The quality of work was exceptional, and they left the
                            site clean and tidy. I was impressed by their attention to
                            detail and commitment to safety standards. Highly
                            recommend their services!
                          </p>
                          <div className="d-flex align-items-center justify-content-between flex-wrap like-info">
                            <div className="d-inline-flex align-items-center flex-wrap">
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-up me-2" />
                                Reply
                              </Link>
                            </div>
                            <div className="d-inline-flex align-items-center">
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-up me-2" />
                                15
                              </Link>
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-down me-2" />1
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card review-item mb-3">
                      <div className="card-body p-3">
                        <div className="review-info">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div className="d-flex align-items-center mb-2">
                              <span className="avatar avatar-lg me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-04.jpg"
                                  className="rounded-circle"
                                  alt="img"
                                />
                              </span>
                              <div>
                                <h6 className="fs-16 fw-medium">Paul Bronk</h6>
                                <div className="d-flex align-items-center flex-wrap date-info">
                                  <p className="fs-14 mb-0">2 days ago</p>
                                  <p className="fs-14 mb-0">
                                    Reliable and Trustworthy!
                                  </p>
                                </div>
                              </div>
                            </div>
                            <span className="badge bg-success d-inline-flex align-items-center mb-2">
                              <i className="ti ti-star-filled me-1" />1
                            </span>
                          </div>
                          <p className="mb-2">
                            The quality of work was exceptional, and they left the
                            site clean and tidy. I was impressed by their attention to
                            detail and commitment to safety standards. Highly
                            recommend their services!
                          </p>
                          <div className="d-flex align-items-center justify-content-between flex-wrap like-info">
                            <div className="d-inline-flex align-items-center flex-wrap">
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-up me-2" />
                                Reply
                              </Link>
                            </div>
                            <div className="d-inline-flex align-items-center">
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-up me-2" />
                                10
                              </Link>
                              <Link
                                to="#"
                                className="d-inline-flex align-items-center me-2"
                              >
                                <i className="ti ti-thumb-down me-2" />2
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link to="#" className="btn btn-light btn-sm">
                        Load More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 theiaStickySidebar">
              <StickyBox>
                <div className="card border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h4>Pricing</h4>
                      <span className="badge bg-success d-inline-flex align-items-center fw-medium">
                        <i className="ti ti-circle-percentage me-1" />
                        50% Offer
                      </span>
                    </div>
                    <div className="bg-light-500 br-10 p-3 mb-3 text-center">
                      <p className="fs-14 mb-1">Starts From</p>
                      <h4>
                        <span className="display-6 fw-bold">$457</span>
                        <span className="text-decoration-line-through text-default">
                          {" "}
                          $875
                        </span>
                      </h4>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
                      <h5 className="mb-2">Additional Services</h5>
                      <span className="badge badge-info-transparent fw-medium mb-2">
                        2 Additional Service added
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pb-2 mb-2 border-dashed border-bottom">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="product1"
                          defaultChecked
                        />
                        <label
                          className="form-check-label text-gray-9 fw-medium"
                          htmlFor="product1"
                        >
                          Home Lighting Design
                        </label>
                      </div>
                      <div className="text-end">
                        <h6 className="fs-14 fw-medium">$200</h6>
                        <p className="fs-12">10 Mins</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pb-2 mb-2 border-bottom">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="product2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label text-gray-9 fw-medium"
                          htmlFor="product2"
                        >
                          Panel Upgrades
                        </label>
                      </div>
                      <div className="text-end">
                        <h6 className="fs-14 fw-medium">$100</h6>
                        <p className="fs-12">15 Mins</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pb-2 mb-3">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="product3"
                        />
                        <label
                          className="form-check-label text-gray-9 fw-medium"
                          htmlFor="product3"
                        >
                          Electrical Installations
                        </label>
                      </div>
                      <div className="text-end">
                        <h6 className="fs-14 fw-medium">$300</h6>
                        <p className="fs-12">50 Mins</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between p-2 bg-light-200 br-10 mb-3">
                      <h4 className="fs-16">Total Amount</h4>
                      <h6 className="fs-16">$547</h6>
                    </div>
                    <Link
                      to={routes.booking}
                      className="btn btn-lg btn-primary w-100 d-flex align-items-center justify-content-center mb-3"
                    >
                      <i className="ti ti-calendar me-2" />
                      Book Service
                    </Link>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#add-enquiry"
                      className="btn btn-lg btn-outline-light d-flex align-items-center justify-content-center w-100 mb-3"
                    >
                      <i className="ti ti-mail me-2" />
                      Send Enquiry
                    </Link>
                    <div className="text-center">
                      <p className="fs-14 d-inline-flex align-items-center">
                        <i className="ti ti-info-circle-filled me-2" />
                        Additional service are frequently added
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <h4 className="mb-3">Contact Provider</h4>
                    <div className="provider-info bg-light-500 p-3 mb-4">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-xl flex-shrink-0 me-3">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="img"
                            className="img-fluid rounded-circle"
                          />
                          <span className="service-active-dot">
                            <i className="ti ti-check" />
                          </span>
                        </div>
                        <div className="overflow-hidden">
                          <h5 className="text-truncate mb-1">Thomas Herzberg</h5>
                          <p className="fs-14">Member Since 14 Apr 2023</p>
                        </div>
                      </div>
                    </div>
                    <div className="row gx-3">
                      <div className="col-sm-6">
                        <div className="list-item text-center">
                          <h6 className="fs-14 fw-medium mb-1">
                            Reviews &amp; Ratings
                          </h6>
                          <p className="fs-14">
                            <i className="ti ti-star-filled text-warning me-2" />
                            <span className="text-gray-9 fw-semibold">4.9 </span>(255
                            reviews)
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="list-item text-center">
                          <h6 className="fs-14 fw-medium mb-1">No of Listings</h6>
                          <p>274</p>
                        </div>
                      </div>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control border-end-0"
                        placeholder="Name"
                      />
                      <span className="input-group-text bg-white">
                        <i className="ti ti-user" />
                      </span>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control border-end-0"
                        placeholder="Phone Number"
                      />
                      <span className="input-group-text bg-white">
                        <i className="ti ti-phone" />
                      </span>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control border-end-0"
                        placeholder="Email Address"
                      />
                      <span className="input-group-text bg-white">
                        <i className="ti ti-mail" />
                      </span>
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Write a Message"
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit" className="btn btn-dark btn-lg w-100">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <h4 className="mb-3">Provider Details</h4>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="contact-map mb-4"
                    />
                    <div className="mb-2">
                      <p className="mb-2">
                        <i className="ti ti-map-pin me-2" />
                        Hanover, Maryland
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
                      <p className="mb-2">
                        <i className="ti ti-mail me-2" />
                        thomasxxxx@example.com
                      </p>
                      <Link
                        to="#"
                        className="link-primary text-decoration-underline mb-2"
                      >
                        View Email
                      </Link>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
                      <p className="mb-2">
                        <i className="ti ti-phone me-2" />
                        +1 888 8XX XXXX
                      </p>
                      <Link
                        to="#"
                        className="link-primary text-decoration-underline mb-2"
                      >
                        View Phone Number
                      </Link>
                    </div>
                    <div className="border-top pt-3 mb-4">
                      <Link
                        to={routes.providerChat}
                        className="btn btn-lg btn-dark d-flex align-items-center justify-content-center"
                      >
                        <i className="ti ti-message-2 me-2" />
                        Chat with Provider
                      </Link>
                    </div>
                    <div className="text-center">
                      <h6 className="fs-16 fw-medium mb-2">Social Profiles</h6>
                      <div className="social-icon justify-content-center">
                        <Link to="#" className="me-2">
                          <ImageWithBasePath src="assets/img/icons/fb.svg" alt="img" />
                        </Link>
                        <Link to="#" className="me-2">
                          <ImageWithBasePath src="assets/img/icons/instagram.svg" alt="img" />
                        </Link>
                        <Link to="#" className="me-2">
                          <ImageWithBasePath src="assets/img/icons/twitter.svg" alt="img" />
                        </Link>
                        <Link to="#" className="me-2">
                          <ImageWithBasePath src="assets/img/icons/whatsapp.svg" alt="img" />
                        </Link>
                        <Link to="#" className="me-2">
                          <ImageWithBasePath src="assets/img/icons/youtube.svg" alt="img" />
                        </Link>
                        <Link to="#">
                          <ImageWithBasePath src="assets/img/icons/linkedin.svg" alt="img" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="fs-14 text-danger mb-0">
                  <i className="ti ti-pennant-filled me-2" />
                  Report Provider
                </Link>
                </StickyBox>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: '/assets/img/services/service-slider-02.jpg',
          },
          {
            src: '/assets/img/services/service-slider-03.jpg',
          },
          {
            src: '/assets/img/services/service-slider-01.jpg',
          },
          {
            src: '/assets/img/services/service-slider-04.jpg',
          },
          {
            src: '/assets/img/services/service-slider-05.jpg',
          },
        ]}
      />
    </>
  )
}

export default ServiceDetails2
