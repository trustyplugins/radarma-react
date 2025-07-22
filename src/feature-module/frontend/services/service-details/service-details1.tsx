import React, { useEffect, useRef, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import VideoModal from '../../../../core/hooks/video-modal';
import StickyBox from 'react-sticky-box';

const ServiceDetails1 = () => {
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
    arrows: true,
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
    slidesToShow: 5,
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
                <div className="card border-0">
                  <div className="card-body">
                    <div className="service-head mb-2">
                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <h3 className="mb-2">Lighting Services</h3>
                        <span className="badge badge-purple-transparent mb-2">
                          <i className="ti ti-calendar-check me-1" />
                          6000+ Bookings
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap mb-2">
                        <div className="d-flex align-items-center flex-wrap">
                          <p className="me-3 mb-2">
                            <i className="ti ti-map-pin me-2" />
                            18 Boon Lay Way, Singapore{' '}
                            <Link
                              to="#"
                              className="link-primary text-decoration-underline"
                            >
                              View Location
                            </Link>
                          </p>
                          <p className="mb-2">
                            <i className="ti ti-star-filled text-warning me-2" />
                            <span className="text-gray-9">4.9</span>(255
                            reviews)
                          </p>
                        </div>
                        <div className="d-flex align-items-center flex-wrap">
                          <Link to="javscript:void(0);" className="me-3 mb-2">
                            <i className="ti ti-eye me-2" />
                            3050 Views
                          </Link>
                          <Link to="javscript:void(0);" className="me-3 mb-2">
                            <i className="ti ti-heart me-2" />
                            Add to Wishlist
                          </Link>
                          <Link to="javscript:void(0);" className="me-3 mb-2">
                            <i className="ti ti-share me-2" />
                            Share Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Slider */}
                    <div className="service-wrap mb-4">
                      <div className="slider-wrap">
                        <Slider
                          {...settings1}
                          className="owl-carousel reactslick service-carousel nav-center mb-3"
                        >
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
                        <Link
                          to="#"
                          onClick={() => setOpen(true)}
                          
                          className="btn btn-white btn-sm view-btn"
                        >
                          <i className="feather icon-image me-1" />
                          View all 20 Images
                        </Link>
                      </div>
                      <Slider
                        {...settings2}
                        className="owl-carousel slider-nav-thumbnails reactslick nav-center"
                      >
                        <div>
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-01.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                        <div>
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-02.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                        <div>
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-03.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                        <div>
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-04.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                        <div>
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-05.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                        <div>
                          <ImageWithBasePath
                            src="assets/img/services/service-thumb-06.jpg"
                            className="img-fluid"
                            alt="Slider Img"
                          />
                        </div>
                      </Slider>
                    </div>
                    {/* /Slider */}
                    <div className="accordion service-accordion">
                      <div className="accordion-item mb-4">
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
                          <div className="accordion-body border-0 p-0 pt-3">
                            <div className="more-text">
                              <p>
                                Provides reliable and professional electrical
                                solutions for residential and commercial
                                clients. Our licensed electricians are dedicated
                                to delivering top-quality service, ensuring
                                safety, and meeting all your electrical needs.
                                Committed to providing high-quality electrical
                                solutions with a focus on safety and customer
                                satisfaction. Our team of licensed electricians
                                is equipped to handle both residential and
                                commercial projects with expertise and care.
                              </p>
                              <p>
                                Comprehensive overview of Electrical Services,
                                including the types of services offered, key
                                benefits, location, contact details, special
                                offers, and customer reviews.
                              </p>
                            </div>
                            <Link
                              to="#"
                              className="link-primary text-decoration-underline more-btn mb-4"
                            >
                              Read More
                            </Link>
                            <div className="bg-light-200 p-3 offer-wrap">
                              <h4 className="mb-3">Services Offered</h4>
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
                                      Fixing faulty wiring, outlets, switches,
                                      and more to ensure.
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
                                    <h6 className="fs-16 fw-medium">
                                      Panel Upgrades
                                    </h6>
                                    <p>
                                      Upgrade your electrical panel to handle
                                      increased power.
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
                                      Identify and resolve electrical issues
                                      quickly and effectively.
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
                              <div className="offer-item d-md-flex align-items-center justify-content-between bg-white">
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
                                      Install and maintain energy-efficient
                                      lighting solutions
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
                      <div className="accordion-item mb-4">
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
                          <div className="accordion-body border-0 p-0 pt-3">
                            <div className="bg-light-200 p-3 pb-2 br-10">
                              <p className="d-inline-flex align-items-center mb-2 me-4">
                                <i className="feather icon-check-circle text-success me-2" />
                                Haircut &amp; Hair Styles
                              </p>
                              <p className="d-inline-flex align-items-center mb-2 me-4">
                                <i className="feather icon-check-circle text-success me-2" />
                                Shampoo &amp; Conditioning
                              </p>
                              <p className="d-inline-flex align-items-center mb-2 me-4">
                                <i className="feather icon-check-circle text-success me-2" />
                                Beard Trim/Shave
                              </p>
                              <p className="d-inline-flex align-items-center mb-2 me-4">
                                <i className="feather icon-check-circle text-success me-2" />
                                Neck Shave
                              </p>
                              <p className="d-inline-flex align-items-center mb-2 me-4">
                                <i className="feather icon-check-circle text-success me-2" />
                                Hot Towel Treatment
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-4">
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
                          <div className="accordion-body border-0 p-0 pt-3">
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
                      <div className="accordion-item mb-4">
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
                        <div
                          id="video"
                          className="accordion-collapse collapse show"
                        >
                          <div className="accordion-body border-0 p-0 pt-3">
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
                      <div className="accordion-item mb-0">
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
                        <div
                          id="faq"
                          className="accordion-collapse collapse show"
                        >
                          <div className="accordion-body border-0 p-0 pt-3">
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
                                      The Classic Cut includes a consultation
                                      with your barber, a haircut tailored to
                                      your style, and final styling with
                                      product. It does not include a hair wash
                                      or beard trim.
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
                                      The Classic Cut includes a consultation
                                      with your barber, a haircut tailored to
                                      your style, and final styling with
                                      product. It does not include a hair wash
                                      or beard trim.
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
                                    What is the difference between a Hot Towel
                                    Shave and a regular shave?
                                  </button>
                                </h2>
                                <div
                                  id="faq3"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#accordionfaq"
                                >
                                  <div className="accordion-body border-0 pt-0">
                                    <p>
                                      The Classic Cut includes a consultation
                                      with your barber, a haircut tailored to
                                      your style, and final styling with
                                      product. It does not include a hair wash
                                      or beard trim.
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
                                      The Classic Cut includes a consultation
                                      with your barber, a haircut tailored to
                                      your style, and final styling with
                                      product. It does not include a hair wash
                                      or beard trim.
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
                <div className="card border-0 mb-xl-0 mb-4">
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
                          <h5 className="mb-3">
                            Customer Reviews &amp; Ratings
                          </h5>
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
                            <p className="me-2 text-nowrap mb-0">
                              5 Star Ratings
                            </p>
                            <div
                              className="progress w-100"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: '90%' }}
                              />
                            </div>
                            <p className="progress-count ms-2">2,547</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <p className="me-2 text-nowrap mb-0">
                              4 Star Ratings
                            </p>
                            <div
                              className="progress mb-0 w-100"
                              role="progressbar"
                              aria-valuenow={80}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: '80%' }}
                              />
                            </div>
                            <p className="progress-count ms-2">1,245</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <p className="me-2 text-nowrap mb-0">
                              3 Star Ratings
                            </p>
                            <div
                              className="progress mb-0 w-100"
                              role="progressbar"
                              aria-valuenow={70}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: '70%' }}
                              />
                            </div>
                            <p className="progress-count ms-2">600</p>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <p className="me-2 text-nowrap mb-0">
                              2 Star Ratings
                            </p>
                            <div
                              className="progress mb-0 w-100"
                              role="progressbar"
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: '60%' }}
                              />
                            </div>
                            <p className="progress-count ms-2">560</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <p className="me-2 text-nowrap mb-0">
                              1 Star Ratings
                            </p>
                            <div
                              className="progress mb-0 w-100"
                              role="progressbar"
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            >
                              <div
                                className="progress-bar bg-warning"
                                style={{ width: '40%' }}
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
                                <h6 className="fs-16 fw-medium">
                                  Adrian Hendriques
                                </h6>
                                <div className="d-flex align-items-center flex-wrap date-info">
                                  <p className="fs-14 mb-0">2 days ago</p>
                                  <p className="fs-14 mb-0">
                                    Excellent service!
                                  </p>
                                </div>
                              </div>
                            </div>
                            <span className="badge bg-success d-inline-flex align-items-center mb-2">
                              <i className="ti ti-star-filled me-1" />5
                            </span>
                          </div>
                          <p className="mb-2">
                            The electricians were prompt, professional, and
                            resolved our issues quickly.did a fantastic job
                            upgrading our electrical panel. Highly recommend
                            them for any electrical work.
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
                                <h6 className="fs-16 fw-medium">
                                  Stephen Vance
                                </h6>
                                <div className="d-flex align-items-center flex-wrap date-info">
                                  <p className="fs-14 mb-0">2 days ago</p>
                                  <p className="fs-14 mb-0">
                                    Excellent service!
                                  </p>
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
                            The quality of work was exceptional, and they left
                            the site clean and tidy. I was impressed by their
                            attention to detail and commitment to safety
                            standards. Highly recommend their services!
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
                            The quality of work was exceptional, and they left
                            the site clean and tidy. I was impressed by their
                            attention to detail and commitment to safety
                            standards. Highly recommend their services!
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
                    <div className="d-flex align-items-center justify-content-between border-bottom mb-3">
                      <div className="d-flex align-items-center">
                        <div className="mb-3">
                          <p className="fs-14 mb-0">Starts From</p>
                          <h4>
                            <span className="display-6 fw-bold">$457</span>
                            <span className="text-decoration-line-through text-default">
                              {' '}
                              $875
                            </span>
                          </h4>
                        </div>
                      </div>
                      <span className="badge bg-success mb-3 d-inline-flex align-items-center fw-medium">
                        <i className="ti ti-circle-percentage me-1" />
                        50% Offer
                      </span>
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
                      className="btn btn-lg btn-outline-light d-flex align-items-center justify-content-center w-100"
                    >
                      <i className="ti ti-mail me-2" />
                      Send Enquiry
                    </Link>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <h4 className="mb-3">Service Provider</h4>
                    <div className="provider-info text-center bg-light-500 p-3 mb-3">
                      <div className="avatar avatar-xl mb-3">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="img"
                          className="img-fluid rounded-circle"
                        />
                        <span className="service-active-dot">
                          <i className="ti ti-check" />
                        </span>
                      </div>
                      <h5>Thomas Herzberg</h5>
                      <p className="fs-14">
                        <i className="ti ti-star-filled text-warning me-2" />
                        <span className="text-gray-9 fw-semibold">
                          4.9
                        </span>{' '}
                        (255 reviews)
                      </p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">
                        <i className="ti ti-user text-default me-2" />
                        Member Since
                      </h6>
                      <p>14 Apr 2023</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">
                        <i className="ti ti-map-pin me-1" />
                        Address
                      </h6>
                      <p>Hanover, Maryland</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">
                        <i className="ti ti-mail me-1" />
                        Email
                      </h6>
                      <p>thomasxxx@example.com</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">
                        <i className="ti ti-phone me-1" />
                        Phone
                      </h6>
                      <p>+1 888 8XX XXXX</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">
                        <i className="ti ti-file-text me-1" />
                        No of Listings
                      </h6>
                      <p>03</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium">Social Profiles</h6>
                      <div className="d-flex align-items-center">
                        <div className="social-icon">
                          <Link to="#" className="me-2">
                            <ImageWithBasePath
                              src="assets/img/icons/fb.svg"
                              className="img"
                              alt="icon"
                            />
                          </Link>
                          <Link to="#" className="me-2">
                            <ImageWithBasePath
                              src="assets/img/icons/instagram.svg"
                              className="img"
                              alt="icon"
                            />
                          </Link>
                          <Link to="#" className="me-2">
                            <ImageWithBasePath
                              src="assets/img/icons/twitter.svg"
                              className="img"
                              alt="icon"
                            />
                          </Link>
                          <Link to="#" className="me-2">
                            <ImageWithBasePath
                              src="assets/img/icons/whatsapp.svg"
                              className="img"
                              alt="icon"
                            />
                          </Link>
                          <Link to="#" className="me-2">
                            <ImageWithBasePath
                              src="assets/img/icons/youtube.svg"
                              className="img"
                              alt="icon"
                            />
                          </Link>
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/icons/linkedin.svg"
                              className="img"
                              alt="icon"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row border-top pt-3 g-2">
                      <div className="col-sm-6">
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#add-contact"
                          className="btn btn-dark btn-lg fs-14 px-1 w-100"
                        >
                          <i className="ti ti-user me-2" />
                          Contact Provider
                        </Link>
                      </div>
                      <div className="col-sm-6">
                        <Link
                          to={routes.providerChat}
                          className="btn btn-light btn-lg fs-14 px-1 w-100"
                        >
                          <i className="ti ti-user me-2" />
                          Chat Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <h4 className="mb-3">Business Hours</h4>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">Monday</h6>
                      <p>9:30 AM - 7:00 PM</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">Tuesday</h6>
                      <p>9:30 AM - 7:00 PM</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">Wednesday</h6>
                      <p>9:30 AM - 7:00 PM</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">Thursday</h6>
                      <p>9:30 AM - 7:00 PM</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">Friday</h6>
                      <p>9:30 AM - 7:00 PM</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h6 className="fs-16 fw-medium mb-0">Saturday</h6>
                      <p>9:30 AM - 7:00 PM</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-0">
                      <h6 className="fs-16 fw-medium mb-0">Sunday</h6>
                      <p className="text-danger">Closed</p>
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <div className="card-body">
                    <h4 className="mb-3">Location</h4>
                    <div className="map-wrap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="contact-map"
                      />
                      <div className="map-location bg-white d-flex align-items-center">
                        <div className="d-flex align-items-center me-2">
                          <span className="avatar avatar-lg flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/services/service-thumb-01.jpg"
                              alt="img"
                              className="br-10"
                            />
                          </span>
                          <div className="ms-2 overflow-hidden">
                            <p className="two-line-ellipsis">
                              12301 Lake Underhill Rd, Suite 126, Orlando, 32828
                            </p>
                          </div>
                        </div>
                        <span>
                          <i className="feather icon-send fs-16" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="text-danger fs-14">
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
  );
};

export default ServiceDetails1;
