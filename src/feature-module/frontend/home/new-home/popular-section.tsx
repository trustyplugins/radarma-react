import React from 'react';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { computerServices } from '../../../../core/data/json/computerServices';
import { removals } from '../../../../core/data/json/removals';
import { manVan } from '../../../../core/data/json/manvan';
import { furniture } from '../../../../core/data/json/furniture';
import { electrical } from '../../../../core/data/json/electrical';
import { construction } from '../../../../core/data/json/construction';
import { plumbing } from '../../../../core/data/json/plumbing';
import { moreServices } from '../../../../core/data/json/moreService';
const PopularSection = () => {
  const routes = all_routes;
  const imgslideroption = {
    dots: false,
    nav: false,
    infinite: true,
    speed: 500,
    swipe: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const slideslideroption = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    draggable: true,
    tochMove: true,
    swipe: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* Popular Section */}
      <section className="section popular-section">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-6 text-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="section-header text-center mb-4">
                <h2 className="mb-1">
                  Our Popular{' '}
                  <span className="text-linear-primary">Services</span>
                </h2>
                <p className="sub-title">
                  Each listing is designed to be clear and concise, providing
                  customers
                </p>
              </div>
            </div>
          </div>
          <ul className="nav nav-tabs nav-tabs-solid justify-content-center mb-4">
            <li className="nav-item mb-3">
              <Link
                className="nav-link active"
                to="#computer-service"
                data-bs-toggle="tab"
              >
                Computer Service
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className="nav-link" to="#removals" data-bs-toggle="tab">
                Removals
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className="nav-link" to="#man" data-bs-toggle="tab">
                Man &amp; Van
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className="nav-link" to="#furniture" data-bs-toggle="tab">
                Furniture Assembly
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className="nav-link" to="#electrical" data-bs-toggle="tab">
                Electrical
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link
                className="nav-link"
                to="#construction"
                data-bs-toggle="tab"
              >
                Construction
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className="nav-link" to="#plumbing" data-bs-toggle="tab">
                Plumbing
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link
                className="nav-link"
                to="#more-service"
                data-bs-toggle="tab"
              >
                More Services
              </Link>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade active show" id="computer-service">
              <Slider
                {...imgslideroption}
                className="main-slider  owl-carousel nav-center"
              >
                {computerServices.map((res: any, index: number) => {
                  return (
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay="0.2s"
                      key={index}
                    >
                      <div className="service-img">
                        <Slider
                          {...slideslideroption}
                          className="img-slider home-sliders  owl-carousel nav-center"
                        >
                          {res.Slider.map((img: any, index: number) => {
                            return (
                              <div className="slide-images" key={index}>
                                <Link to={routes.serviceDetails1}>
                                  <ImageWithBasePath
                                    src={`assets/img/services/${img.Image}`}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            );
                          })}
                        </Slider>
                        <div className="fav-item d-flex align-items-center justify-content-between w-100">
                          <Link to="#" className="avatar avatar-md">
                            <ImageWithBasePath
                              src={`assets/img/profiles/${res.Avatar}`}
                              className="rounded-circle"
                              alt="User"
                            />
                          </Link>
                          <Link to="#" className="fav-icon">
                            <i className="ti ti-heart" />
                          </Link>
                        </div>

                      </div>
                      <div className="service-content">
                        <h6 className="mb-1 text-truncate">
                        <Link to={routes.serviceDetails1}>{res.Title}</Link>
                        </h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-star-filled text-warning me-1" />
                            {res.Reviews}
                          </p>
                          <small>{res.Price}</small>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="tab-pane fade" id="removals">
            <Slider
                {...imgslideroption}
                className="main-slider  owl-carousel nav-center"
              >
                {removals.map((res: any, index: number) => {
                  return (
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay="0.2s"
                      key={index}
                    >
                      <div className="service-img">
                        <Slider
                          {...slideslideroption}
                          className="img-slider home-sliders  owl-carousel nav-center"
                        >
                          {res.Slider.map((img: any, index: number) => {
                            return (
                              <div className="slide-images" key={index}>
                                <Link to={routes.serviceDetails1}>
                                  <ImageWithBasePath
                                    src={`assets/img/services/${img.Image}`}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            );
                          })}
                        </Slider>
                        <div className="fav-item d-flex align-items-center justify-content-between w-100">
                          <Link to="#" className="avatar avatar-md">
                            <ImageWithBasePath
                              src={`assets/img/profiles/${res.Avatar}`}
                              className="rounded-circle"
                              alt="User"
                            />
                          </Link>
                          <Link to="#" className="fav-icon">
                            <i className="ti ti-heart" />
                          </Link>
                        </div>

                      </div>
                      <div className="service-content">
                        <h6 className="mb-1 text-truncate">
                        <Link to={routes.serviceDetails1}>{res.Title}</Link>
                        </h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-star-filled text-warning me-1" />
                            {res.Reviews}
                          </p>
                          <small>{res.Price}</small>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="tab-pane fade" id="man">
            <Slider
                {...imgslideroption}
                className="main-slider  owl-carousel nav-center"
              >
                {manVan.map((res: any, index: number) => {
                  return (
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay="0.2s"
                      key={index}
                    >
                      <div className="service-img">
                        <Slider
                          {...slideslideroption}
                          className="img-slider home-sliders  owl-carousel nav-center"
                        >
                          {res.Slider.map((img: any, index: number) => {
                            return (
                              <div className="slide-images" key={index}>
                                <Link to={routes.serviceDetails1}>
                                  <ImageWithBasePath
                                    src={`assets/img/services/${img.Image}`}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            );
                          })}
                        </Slider>
                        <div className="fav-item d-flex align-items-center justify-content-between w-100">
                          <Link to="#" className="avatar avatar-md">
                            <ImageWithBasePath
                              src={`assets/img/profiles/${res.Avatar}`}
                              className="rounded-circle"
                              alt="User"
                            />
                          </Link>
                          <Link to="#" className="fav-icon">
                            <i className="ti ti-heart" />
                          </Link>
                        </div>

                      </div>
                      <div className="service-content">
                        <h6 className="mb-1 text-truncate">
                        <Link to={routes.serviceDetails1}>{res.Title}</Link>
                        </h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-star-filled text-warning me-1" />
                            {res.Reviews}
                          </p>
                          <small>{res.Price}</small>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="tab-pane fade" id="furniture">
            <Slider
                {...imgslideroption}
                className="main-slider  owl-carousel nav-center"
              >
                {furniture.map((res: any, index: number) => {
                  return (
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay="0.2s"
                      key={index}
                    >
                      <div className="service-img">
                        <Slider
                          {...slideslideroption}
                          className="img-slider home-sliders  owl-carousel nav-center"
                        >
                          {res.Slider.map((img: any, index: number) => {
                            return (
                              <div className="slide-images" key={index}>
                                <Link to={routes.serviceDetails1}>
                                  <ImageWithBasePath
                                    src={`assets/img/services/${img.Image}`}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            );
                          })}
                        </Slider>
                        <div className="fav-item d-flex align-items-center justify-content-between w-100">
                          <Link to="#" className="avatar avatar-md">
                            <ImageWithBasePath
                              src={`assets/img/profiles/${res.Avatar}`}
                              className="rounded-circle"
                              alt="User"
                            />
                          </Link>
                          <Link to="#" className="fav-icon">
                            <i className="ti ti-heart" />
                          </Link>
                        </div>

                      </div>
                      <div className="service-content">
                        <h6 className="mb-1 text-truncate">
                        <Link to={routes.serviceDetails1}>{res.Title}</Link>
                        </h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-star-filled text-warning me-1" />
                            {res.Reviews}
                          </p>
                          <small>{res.Price}</small>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="tab-pane fade" id="electrical">
            <Slider
                {...imgslideroption}
                className="main-slider  owl-carousel nav-center"
              >
                {electrical.map((res: any, index: number) => {
                  return (
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay="0.2s"
                      key={index}
                    >
                      <div className="service-img">
                        <Slider
                          {...slideslideroption}
                          className="img-slider home-sliders  owl-carousel nav-center"
                        >
                          {res.Slider.map((img: any, index: number) => {
                            return (
                              <div className="slide-images" key={index}>
                                <Link to={routes.serviceDetails1}>
                                  <ImageWithBasePath
                                    src={`assets/img/services/${img.Image}`}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            );
                          })}
                        </Slider>
                        <div className="fav-item d-flex align-items-center justify-content-between w-100">
                          <Link to="#" className="avatar avatar-md">
                            <ImageWithBasePath
                              src={`assets/img/profiles/${res.Avatar}`}
                              className="rounded-circle"
                              alt="User"
                            />
                          </Link>
                          <Link to="#" className="fav-icon">
                            <i className="ti ti-heart" />
                          </Link>
                        </div>

                      </div>
                      <div className="service-content">
                        <h6 className="mb-1 text-truncate">
                        <Link to={routes.serviceDetails1}>{res.Title}</Link>
                        </h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-star-filled text-warning me-1" />
                            {res.Reviews}
                          </p>
                          <small>{res.Price}</small>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="tab-pane fade" id="construction">
            <Slider
                {...imgslideroption}
                className="main-slider  owl-carousel nav-center"
              >
                {construction.map((res: any, index: number) => {
                  return (
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay="0.2s"
                      key={index}
                    >
                      <div className="service-img">
                        <Slider
                          {...slideslideroption}
                          className="img-slider home-sliders  owl-carousel nav-center"
                        >
                          {res.Slider.map((img: any, index: number) => {
                            return (
                              <div className="slide-images" key={index}>
                                <Link to={routes.serviceDetails1}>
                                  <ImageWithBasePath
                                    src={`assets/img/services/${img.Image}`}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            );
                          })}
                        </Slider>
                        <div className="fav-item d-flex align-items-center justify-content-between w-100">
                          <Link to="#" className="avatar avatar-md">
                            <ImageWithBasePath
                              src={`assets/img/profiles/${res.Avatar}`}
                              className="rounded-circle"
                              alt="User"
                            />
                          </Link>
                          <Link to="#" className="fav-icon">
                            <i className="ti ti-heart" />
                          </Link>
                        </div>

                      </div>
                      <div className="service-content">
                        <h6 className="mb-1 text-truncate">
                        <Link to={routes.serviceDetails1}>{res.Title}</Link>
                        </h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-star-filled text-warning me-1" />
                            {res.Reviews}
                          </p>
                          <small>{res.Price}</small>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="tab-pane fade" id="plumbing">
            <Slider
                {...imgslideroption}
                className="main-slider  owl-carousel nav-center"
              >
                {plumbing.map((res: any, index: number) => {
                  return (
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay="0.2s"
                      key={index}
                    >
                      <div className="service-img">
                        <Slider
                          {...slideslideroption}
                          className="img-slider home-sliders  owl-carousel nav-center"
                        >
                          {res.Slider.map((img: any, index: number) => {
                            return (
                              <div className="slide-images" key={index}>
                                <Link to={routes.serviceDetails1}>
                                  <ImageWithBasePath
                                    src={`assets/img/services/${img.Image}`}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            );
                          })}
                        </Slider>
                        <div className="fav-item d-flex align-items-center justify-content-between w-100">
                          <Link to="#" className="avatar avatar-md">
                            <ImageWithBasePath
                              src={`assets/img/profiles/${res.Avatar}`}
                              className="rounded-circle"
                              alt="User"
                            />
                          </Link>
                          <Link to="#" className="fav-icon">
                            <i className="ti ti-heart" />
                          </Link>
                        </div>

                      </div>
                      <div className="service-content">
                        <h6 className="mb-1 text-truncate">
                        <Link to={routes.serviceDetails1}>{res.Title}</Link>
                        </h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-star-filled text-warning me-1" />
                            {res.Reviews}
                          </p>
                          <small>{res.Price}</small>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="tab-pane fade" id="more-service">
            <Slider
                {...imgslideroption}
                className="main-slider  owl-carousel nav-center"
              >
                {moreServices.map((res: any, index: number) => {
                  return (
                    <div
                      className="service-item wow fadeInUp"
                      data-wow-delay="0.2s"
                      key={index}
                    >
                      <div className="service-img">
                        <Slider
                          {...slideslideroption}
                          className="img-slider home-sliders  owl-carousel nav-center"
                        >
                          {res.Slider.map((img: any, index: number) => {
                            return (
                              <div className="slide-images" key={index}>
                                <Link to={routes.serviceDetails1}>
                                  <ImageWithBasePath
                                    src={`assets/img/services/${img.Image}`}
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            );
                          })}
                        </Slider>
                        <div className="fav-item d-flex align-items-center justify-content-between w-100">
                          <Link to="#" className="avatar avatar-md">
                            <ImageWithBasePath
                              src={`assets/img/profiles/${res.Avatar}`}
                              className="rounded-circle"
                              alt="User"
                            />
                          </Link>
                          <Link to="#" className="fav-icon">
                            <i className="ti ti-heart" />
                          </Link>
                        </div>

                      </div>
                      <div className="service-content">
                        <h6 className="mb-1 text-truncate">
                        <Link to={routes.serviceDetails1}>{res.Title}</Link>
                        </h6>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="fs-14 mb-0">
                            <i className="ti ti-star-filled text-warning me-1" />
                            {res.Reviews}
                          </p>
                          <small>{res.Price}</small>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
                <Link to={routes.search} className="btn btn-dark">
                  View All
                  <i className="ti ti-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Popular Section */}
    </>
  );
};

export default PopularSection;
