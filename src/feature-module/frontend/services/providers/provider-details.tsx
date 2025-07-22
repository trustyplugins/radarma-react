import React from 'react'
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import StickyBox from 'react-sticky-box';
const ProviderDetails = () => {
  const routes = all_routes;
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
  const one = {
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
  const three = {
    dots: false,
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
          slidesToShow: 4,
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
    <BreadCrumb
          title="Provider Details"
          item1="Provider Details"
        />
      <div className="page-wrapper">
        <div className="content content-two">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row gy-3">
                      <div className="col-xl-5">
                        <div className="provider-detail d-flex align-items-center flex-wrap row-gap-2">
                          <span className="avatar provider-pic flex-shrink-0 me-3">
                            <ImageWithBasePath src="assets/img/profiles/avatar-20.jpg" alt="Img" />
                          </span>
                          <div>
                            <div className="rating mb-2">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fa-solid fa-star-half-stroke filled me-1" />{" "}
                              4.9
                              <span className="ms-2 d-inline-block">
                                (255 reviews)
                              </span>
                            </div>
                            <h5 className="d-flex align-items-center mb-1">
                              <Link to="provider-details">Thomas Herzberg</Link>
                              <span className="text-success ms-2">
                                <i className="fa fa-check-circle fs-14" />
                              </span>
                            </h5>
                            <p className="mb-2">
                              We connect top talents with top companies
                            </p>
                            <div className="d-flex align-items-center flex-wrap row-gap-2">
                              <p className="mb-0 fs-14 me-2">
                                <i className="feather feather icon-grid me-1" />
                                Electrician
                              </p>
                              <p className="mb-0 fs-14">
                                <i className="ti ti-calendar me-1" />
                                Member Since 19 Aug 2023
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-7">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="provider-bio-info mb-3">
                              <h6>
                                <i />
                                Email
                              </h6>
                              <p>thomasxxxxxx@example.com</p>
                            </div>
                            <div className="provider-bio-info">
                              <h6>
                                <i />
                                Phone Number
                              </h6>
                              <p>+1 888 8XX XXXX</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="provider-bio-info mb-3">
                              <h6>
                                <i />
                                Language Known
                              </h6>
                              <p>
                                English, Arabic{" "}
                                <Link to="#" className="text-primary">
                                  +4 More
                                </Link>
                              </p>
                            </div>
                            <div className="provider-bio-info">
                              <h6>
                                <i />
                                Address
                              </h6>
                              <p>Hanover, Maryland</p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <Link
                                to={routes.booking}
                                className="btn btn-primary w-100 mb-3"
                              >
                                <i className="feather icon-calendar me-2" />
                                Book Service
                              </Link>
                              <h6 className="fw-medium mb-2">Social Profiles</h6>
                              <ul className="social-icon flex-wrap row-gap-2 mb-3">
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/icons/fb.svg"
                                      className="img"
                                      alt="icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/icons/instagram.svg"
                                      className="img"
                                      alt="icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/icons/twitter.svg"
                                      className="img"
                                      alt="icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/icons/whatsapp.svg"
                                      className="img"
                                      alt="icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/icons/youtube.svg"
                                      className="img"
                                      alt="icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="assets/img/icons/linkedin.svg"
                                      className="img"
                                      alt="icon"
                                    />
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                      <div className="accordion-item mb-3">
                        <div className="accordion-header" id="accordion-headingOne">
                          <div
                            className="accordion-button p-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-collapseOne"
                            aria-expanded="true"
                            aria-controls="accordion-collapseOne"
                            role="button"
                          >
                            Overview
                          </div>
                        </div>
                        <div
                          id="accordion-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="accordion-headingOne"
                        >
                          <div className="accordion-body p-0 mt-3 pb-1">
                            <div className="more-text">
                              <p className="mb-4">
                                We bring over 20 years of expertise to your doorstep,
                                offering a full range of electrical services tailored
                                to meet the needs of homeowners, businesses, and
                                industrial clients. Our commitment to safety,
                                reliability, and customer satisfaction has made us a
                                trusted name in the industry. Whether you&apos;re in need
                                of a simple repair or a complex installation, our team
                                of certified electricians is here to help.
                              </p>
                              <p>
                                we bring over 20 years of expertise to your doorstep,
                                offering a full range of electrical services tailored
                                to meet the needs of homeowners, businesses, and
                                industrial clients.{" "}
                              </p>
                            </div>
                            <Link
                              to="#"
                              className="text-primary d-inline-block more-btn mb-2"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3">
                        <div className="accordion-header" id="accordion-headingTwo">
                          <div
                            className="accordion-button p-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-collapseTwo"
                            aria-expanded="true"
                            aria-controls="accordion-collapseTwo"
                            role="button"
                          >
                            Area Of Expertise
                          </div>
                        </div>
                        <div
                          id="accordion-collapseTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="accordion-headingTwo"
                        >
                          <div className="accordion-body p-0 mt-3 pb-1">
                            <p>
                              From small residential repairs to large-scale commercial
                              and industrial projects, is your go-to provider for all
                              electrical needs. Contact us today to schedule a
                              consultation or to learn more about how we can assist
                              with your next project.
                            </p>
                            <div>
                              <div className="row g-3">
                                <div className="col-xl-12">
                                  <Slider {...two} className="area-expert-slider reactslick owl-carousel mb-3">
                                    <div className="text-center area-expert">
                                      <span className="d-block mb-2">
                                        <ImageWithBasePath
                                          src="assets/img/icons/consultation-icon-01.svg"
                                          className="w-auto m-auto"
                                          alt="Img"
                                        />
                                      </span>
                                      <p className="fw-medium fs-14">Construction</p>
                                    </div>
                                    <div className="text-center area-expert">
                                      <span className="d-block mb-2">
                                        <ImageWithBasePath
                                          src="assets/img/icons/consultation-icon-02.svg"
                                          className="w-auto m-auto"
                                          alt="Img"
                                        />
                                      </span>
                                      <p className="fw-medium fs-14">Car Wash</p>
                                    </div>
                                    <div className="text-center area-expert">
                                      <span className="d-block mb-2">
                                        <ImageWithBasePath
                                          src="assets/img/icons/consultation-icon-03.svg"
                                          className="w-auto m-auto"
                                          alt="Img"
                                        />
                                      </span>
                                      <p className="fw-medium fs-14">Electrical</p>
                                    </div>
                                    <div className="text-center area-expert">
                                      <span className="d-block mb-2">
                                        <ImageWithBasePath
                                          src="assets/img/icons/consultation-icon-04.svg"
                                          className="w-auto m-auto"
                                          alt="Img"
                                        />
                                      </span>
                                      <p className="fw-medium fs-14">Cleaning</p>
                                    </div>
                                    <div className="text-center area-expert">
                                      <span className="d-block mb-2">
                                        <ImageWithBasePath
                                          src="assets/img/icons/consultation-icon-05.svg"
                                          className="w-auto m-auto"
                                          alt="Img"
                                        />
                                      </span>
                                      <p className="fw-medium fs-14">Carpentry</p>
                                    </div>
                                    <div className="text-center area-expert">
                                      <span className="d-block mb-2">
                                        <ImageWithBasePath
                                          src="assets/img/icons/consultation-icon-06.svg"
                                          className="w-auto m-auto"
                                          alt="Img"
                                        />
                                      </span>
                                      <p className="fw-medium fs-14">Plumbing</p>
                                    </div>
                                  </Slider>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3">
                        <div className="accordion-header" id="accordion-headingThree">
                          <div
                            className="accordion-button p-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-collapseThree"
                            aria-expanded="true"
                            aria-controls="accordion-collapseThree"
                            role="button"
                          >
                            Our Team
                          </div>
                        </div>
                        <div
                          id="accordion-collapseThree"
                          className="accordion-collapse collapse show"
                          aria-labelledby="accordion-headingThree"
                        >
                          <div className="accordion-body p-0 mt-3 pb-1">
                            <div className="row gx-3">
                              <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                <div className="d-flex align-items-center team-member mb-3">
                                  <span className="avatar avatar-lg flex-shrink-0 me-2">
                                    <ImageWithBasePath
                                      src="assets/img/team/team-01.jpg"
                                      className="img-fluid"
                                      alt="Img"
                                    />
                                  </span>
                                  <div>
                                    <h6 className="fs-16 fw-medium mb-1">
                                      Jeff Fitch
                                    </h6>
                                    <p className="fs-14">Team Lead</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                <div className="d-flex align-items-center team-member mb-3">
                                  <span className="avatar avatar-lg flex-shrink-0 me-2">
                                    <ImageWithBasePath
                                      src="assets/img/team/team-02.jpg"
                                      className="img-fluid"
                                      alt="Img"
                                    />
                                  </span>
                                  <div>
                                    <h6 className="fs-16 fw-medium mb-1">
                                      Gary Berger
                                    </h6>
                                    <p className="fs-14">Senior Electrician</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                <div className="d-flex align-items-center team-member mb-3">
                                  <span className="avatar avatar-lg flex-shrink-0 me-2">
                                    <ImageWithBasePath
                                      src="assets/img/team/team-03.jpg"
                                      className="img-fluid"
                                      alt="Img"
                                    />
                                  </span>
                                  <div>
                                    <h6 className="fs-16 fw-medium mb-1">
                                      Derrick Bishop
                                    </h6>
                                    <p className="fs-14">Electrical Engineer</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                <div className="d-flex align-items-center team-member mb-3">
                                  <span className="avatar avatar-lg flex-shrink-0 me-2">
                                    <ImageWithBasePath
                                      src="assets/img/team/team-04.jpg"
                                      className="img-fluid"
                                      alt="Img"
                                    />
                                  </span>
                                  <div>
                                    <h6 className="fs-16 fw-medium mb-1">
                                      John Reyna
                                    </h6>
                                    <p className="fs-14">Electrician</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                <div className="d-flex align-items-center team-member mb-3">
                                  <span className="avatar avatar-lg flex-shrink-0 me-2">
                                    <ImageWithBasePath
                                      src="assets/img/team/team-05.jpg"
                                      className="img-fluid"
                                      alt="Img"
                                    />
                                  </span>
                                  <div>
                                    <h6 className="fs-16 fw-medium mb-1">
                                      Michael Britt
                                    </h6>
                                    <p className="fs-14">Cable Technician</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                <div className="d-flex align-items-center team-member mb-3">
                                  <span className="avatar avatar-lg flex-shrink-0 me-2">
                                    <ImageWithBasePath
                                      src="assets/img/team/team-06.jpg"
                                      className="img-fluid"
                                      alt="Img"
                                    />
                                  </span>
                                  <div>
                                    <h6 className="fs-16 fw-medium mb-1">
                                      Homer Ricks
                                    </h6>
                                    <p className="fs-14">Safety Officer</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                <div className="d-flex align-items-center team-member mb-3">
                                  <span className="avatar avatar-lg flex-shrink-0 me-2">
                                    <ImageWithBasePath
                                      src="assets/img/team/team-07.jpg"
                                      className="img-fluid"
                                      alt="Img"
                                    />
                                  </span>
                                  <div>
                                    <h6 className="fs-16 fw-medium mb-1">
                                      Chris Frankel
                                    </h6>
                                    <p className="fs-14">Project Manager</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                                <div className="d-flex align-items-center team-member mb-3">
                                  <span className="avatar avatar-lg flex-shrink-0 me-2">
                                    <ImageWithBasePath
                                      src="assets/img/team/team-08.jpg"
                                      className="img-fluid"
                                      alt="Img"
                                    />
                                  </span>
                                  <div>
                                    <h6 className="fs-16 fw-medium mb-1">
                                      Gary Nunez
                                    </h6>
                                    <p className="fs-14">Estimator</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3">
                        <div className="accordion-header" id="accordion-headingFour">
                          <div
                            className="accordion-button p-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-collapseFour"
                            aria-expanded="true"
                            aria-controls="accordion-collapseFour"
                            role="button"
                          >
                            Our Services
                          </div>
                        </div>
                        <div
                          id="accordion-collapseFour"
                          className="accordion-collapse collapse show"
                          aria-labelledby="accordion-headingFour"
                        >
                          <div className="accordion-body p-0 mt-3 pb-1">
                            <div className="row">
                              <div className="col-md-12">
                                <Slider {...one} className="our-services-slider reactslick custom-owl-dot owl-carousel">
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="img-sec w-100 mb-3">
                                        <Link to={routes.serviceDetails1}>
                                          <ImageWithBasePath
                                            src="assets/img/services/service-22.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                          />
                                        </Link>
                                      </div>
                                      <div>
                                        <h5 className="mb-2 text-truncate">
                                          <Link to={routes.serviceDetails1}>
                                            Electric Panel Repairing
                                          </Link>
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                          <p className="fs-14 mb-0">
                                            <i className="ti ti-map-pin me-2" />
                                            Texas, USA
                                          </p>
                                          <span className="rating text-gray fs-14">
                                            <i className="fa fa-star filled me-1" />
                                            4.9
                                          </span>
                                        </div>
                                        <div>
                                          <span>Starts From</span>
                                          <h6 className="text-primary fs-16 mt-1">
                                            $25.00
                                            <small className="text-decoration-linethrow fs-14 fw-normal text-gray">
                                              $30.00{" "}
                                            </small>
                                            <span className="fs-14 fw-normal text-gray">
                                              {" "}
                                              /hr
                                            </span>
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="img-sec w-100 mb-3">
                                        <Link to={routes.serviceDetails1}>
                                          <ImageWithBasePath
                                            src="assets/img/services/service-23.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                          />
                                        </Link>
                                      </div>
                                      <div>
                                        <h5 className="mb-2 text-truncate">
                                          <Link to={routes.serviceDetails1}>
                                            Machinery Wiring
                                          </Link>
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                          <p className="fs-14 mb-0">
                                            <i className="ti ti-map-pin me-2" />
                                            Maryland, USA
                                          </p>
                                          <span className="rating text-gray fs-14">
                                            <i className="fa fa-star filled me-1" />
                                            4.7
                                          </span>
                                        </div>
                                        <div>
                                          <span>Starts From</span>
                                          <h6 className="text-primary fs-16 mt-1">
                                            $20.00
                                            <small className="text-decoration-linethrow fs-14 fw-normal text-gray">
                                              $25.00{" "}
                                            </small>
                                            <span className="fs-14 fw-normal text-gray">
                                              {" "}
                                              /hr
                                            </span>
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="img-sec w-100 mb-3">
                                        <Link to={routes.serviceDetails1}>
                                          <ImageWithBasePath
                                            src="assets/img/services/service-24.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                          />
                                        </Link>
                                      </div>
                                      <div>
                                        <h5 className="mb-2 text-truncate">
                                          <Link to={routes.serviceDetails1}>
                                            Smart Home Integration
                                          </Link>
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                          <p className="fs-14 mb-0">
                                            <i className="ti ti-map-pin me-2" />
                                            New Jersey, USA
                                          </p>
                                          <span className="rating text-gray fs-14">
                                            <i className="fa fa-star filled me-1" />
                                            4.5
                                          </span>
                                        </div>
                                        <div>
                                          <span>Starts From</span>
                                          <h6 className="text-primary fs-16 mt-1">
                                            $30.00
                                            <small className="text-decoration-linethrow fs-14 fw-normal text-gray">
                                              $40.00{" "}
                                            </small>
                                            <span className="fs-14 fw-normal text-gray">
                                              {" "}
                                              /hr
                                            </span>
                                          </h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="img-sec w-100 mb-3">
                                        <Link to={routes.serviceDetails1}>
                                          <ImageWithBasePath
                                            src="assets/img/services/service-23.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                          />
                                        </Link>
                                      </div>
                                      <div>
                                        <h5 className="mb-2 text-truncate">
                                          <Link to={routes.serviceDetails1}>
                                            Machinery Wiring
                                          </Link>
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                          <p className="fs-14 mb-0">
                                            <i className="ti ti-map-pin me-2" />
                                            Maryland, USA
                                          </p>
                                          <span className="rating text-gray fs-14">
                                            <i className="fa fa-star filled me-1" />
                                            4.7
                                          </span>
                                        </div>
                                        <div>
                                          <span>Starts From</span>
                                          <h6 className="text-primary fs-16 mt-1">
                                            $20.00
                                            <small className="text-decoration-linethrow fs-14 fw-normal text-gray">
                                              $25.00{" "}
                                            </small>
                                            <span className="fs-14 fw-normal text-gray">
                                              {" "}
                                              /hr
                                            </span>
                                          </h6>
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
                      <div className="accordion-item mb-3">
                        <div className="accordion-header" id="accordion-headingFive">
                          <div
                            className="accordion-button p-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-collapseFive"
                            aria-expanded="true"
                            aria-controls="accordion-collapseFive"
                            role="button"
                          >
                            Benefits
                          </div>
                        </div>
                        <div
                          id="accordion-collapseFive"
                          className="accordion-collapse collapse show"
                          aria-labelledby="accordion-headingFive"
                        >
                          <div className="accordion-body p-0 mt-3 pb-1">
                            <div className="row gx-3">
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Warranty and Support</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Workmanship Guarantee</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Energy-Efficient Solutions</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>End-to-End Solutions</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Personalized Solution</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Transparent Communication</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Attention to Detail</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Top-Notch Materials</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Strict Safety Protocols</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Regular Training</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Comprehensive Knowledge</p>
                                </div>
                              </div>
                              <div className="col-xl-4 col-sm-6">
                                <div className="d-flex align-items-center benifits-item">
                                  <span className="text-dark me-2">
                                    <i className="fa fa-check-circle" />
                                  </span>
                                  <p>Qualified Professionals</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3">
                        <div className="accordion-header" id="accordion-headingSix">
                          <div
                            className="accordion-button p-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-collapseSix"
                            aria-expanded="true"
                            aria-controls="accordion-collapseSix"
                            role="button"
                          >
                            Our Branches
                          </div>
                        </div>
                        <div
                          id="accordion-collapseSix"
                          className="accordion-collapse collapse show"
                          aria-labelledby="accordion-headingSix"
                        >
                          <div className="accordion-body p-0 mt-3 pb-1">
                            <Slider {...three} className="our-branches-slider reactslick owl-carousel custom-owl-dot">
                              <div className="card shadow-none rounded">
                                <div className="card-body text-center px-2">
                                  <span className="d-block mb-2">
                                    <ImageWithBasePath
                                      src="assets/img/icons/branch-icon-01.svg"
                                      className="w-auto m-auto"
                                      alt="Img"
                                    />
                                  </span>
                                  <h6 className="mb-2">
                                    Lighting Services -Texas Shop
                                  </h6>
                                  <p className="d-flex align-items-center justify-content-center fs-14">
                                    <i className="ti ti-map-pin me-1" />
                                    1214 Rich land Avenue
                                  </p>
                                </div>
                              </div>
                              <div className="card shadow-none rounded">
                                <div className="card-body text-center px-2">
                                  <span className="d-block mb-2">
                                    <ImageWithBasePath
                                      src="assets/img/icons/branch-icon-02.svg"
                                      className="w-auto m-auto"
                                      alt="Img"
                                    />
                                  </span>
                                  <h6 className="mb-2">
                                    Lighting Services -New York Shop
                                  </h6>
                                  <p className="d-flex align-items-center justify-content-center fs-14">
                                    <i className="ti ti-map-pin me-1" />
                                    4127 Small Street
                                  </p>
                                </div>
                              </div>
                              <div className="card shadow-none rounded">
                                <div className="card-body text-center px-2">
                                  <span className="d-block mb-2">
                                    <ImageWithBasePath
                                      src="assets/img/icons/branch-icon-03.svg"
                                      className="w-auto m-auto"
                                      alt="Img"
                                    />
                                  </span>
                                  <h6 className="mb-2">
                                    Lighting Services - New Jersy Shop
                                  </h6>
                                  <p className="d-flex align-items-center justify-content-center fs-14">
                                    <i className="ti ti-map-pin me-1" />
                                    3527 Saint James Drive
                                  </p>
                                </div>
                              </div>
                              <div className="card shadow-none rounded">
                                <div className="card-body text-center px-2">
                                  <span className="d-block mb-2">
                                    <ImageWithBasePath
                                      src="assets/img/icons/branch-icon-04.svg"
                                      className="w-auto m-auto"
                                      alt="Img"
                                    />
                                  </span>
                                  <h6 className="mb-2">
                                    Lighting Services -California Shop
                                  </h6>
                                  <p className="d-flex align-items-center justify-content-center fs-14">
                                    <i className="ti ti-map-pin me-1" />
                                    1052 Edsel Road LA
                                  </p>
                                </div>
                              </div>
                              <div className="card shadow-none rounded">
                                <div className="card-body text-center px-2">
                                  <span className="d-block mb-2">
                                    <ImageWithBasePath
                                      src="assets/img/icons/branch-icon-02.svg"
                                      className="w-auto m-auto"
                                      alt="Img"
                                    />
                                  </span>
                                  <h6 className="mb-2">
                                    Lighting Services -New York Shop
                                  </h6>
                                  <p className="d-flex align-items-center justify-content-center fs-14">
                                    <i className="ti ti-map-pin me-1" />
                                    4127 Small Street
                                  </p>
                                </div>
                              </div>
                            </Slider>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-0">
                        <div className="accordion-header" id="accordion-headingSeven">
                          <div
                            className="accordion-button p-0"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion-collapseSeven"
                            aria-expanded="true"
                            aria-controls="accordion-collapseSeven"
                            role="button"
                          >
                            Gallery
                          </div>
                        </div>
                        <div
                          id="accordion-collapseSeven"
                          className="accordion-collapse collapse show"
                          aria-labelledby="accordion-headingSeven"
                        >
                          <div className="accordion-body p-0 border-0 mt-3 pb-1">
                          <Slider
                              {...three}
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
              </div>
              <div className="col-xl-4 theiaStickySidebar">
              <StickyBox>
                <div className="card shadow-none">
                  <div className="card-body">
                    <h4 className="mb-3">Contact Provider</h4>
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
                <div className="card shadow-none">
                  <div className="card-body lh-1">
                    <h4 className="mb-3">Location</h4>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="contact-map w-100"
                    />
                  </div>
                </div>
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

export default ProviderDetails
