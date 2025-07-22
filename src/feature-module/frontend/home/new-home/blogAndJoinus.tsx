import React from 'react'
import { all_routes } from '../../../../core/data/routes/all_routes';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
const BlogAndJoinus = () => {
  const routes = all_routes;
  const imgslideroption = {
      dots: false,
      nav: false,
      infinite: true,
      speed: 500,
      swipe:true,
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
  return (
    <>
  {/* Provider Section */}
  <section className="section provide-section bg-black">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div className="section-header mb-md-0 mb-3">
            <p className="sub-title fw-medium text-light mb-1">
              Become a Provider
            </p>
            <h2 className="text-white">
              Post your service{" "}
              <span className="text-linear-primary">in a minute</span>
            </h2>
          </div>
        </div>
        <div
          className="col-md-6 text-md-end wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <Link to="#" className="btn btn-linear-primary">
            <i className="ti ti-user-filled me-2" />
            Join Us
          </Link>
        </div>
      </div>
    </div>
    <div className="provider-bg1">
      <ImageWithBasePath
        src="assets/img/bg/provide-bg-01.svg"
        className="img-fluid"
        alt="img"
      />
    </div>
    <div className="provider-bg2">
      <ImageWithBasePath
        src="assets/img/bg/provide-bg-02.svg"
        className="img-fluid"
        alt="img"
      />
    </div>
  </section>
  {/* /Provider Section */}
  {/* Blog Section */}
  <section className="section service-section white-section blog-section">
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-lg-6 text-center wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="section-header text-center">
            <h2 className="mb-1">
              Checkout our Recent{" "}
              <span className="text-linear-primary">Blogs</span>
            </h2>
            <p className="sub-title">
              Each listing is designed to be clear and concise, providing
              customers
            </p>
          </div>
        </div>
      </div>
      <Slider {...imgslideroption} className="service-slider owl-carousel nav-center nav-center">
        <div className="blog-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="blog-img">
            <Link to={routes.blogDetails}>
              <ImageWithBasePath
                src="assets/img/blogs/blog-01.jpg"
                className="img-fluid"
                alt="img"
              />
            </Link>
          </div>
          <div className="blog-content">
            <p className="fs-14 fw-meium text-gray-9 d-inline-flex align-items-center mb-2">
              Admin
              <i className="ti ti-circle-filled fs-6 mx-1" />1 Jan 2023
            </p>
            <h6 className="text-truncate mb-2">
              <Link to={routes.blogDetails}>Bill Walsh leadership lessons</Link>
            </h6>
            <p className="two-line-ellipsis mb-3">
              Like to know the secrets of transforming a 2-14
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <span className="badge badge-info-transparent me-2">
                Leadership
              </span>
              <span className="badge badge-dark-transparent">Management</span>
            </div>
          </div>
        </div>
        <div className="blog-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="blog-img">
            <Link to={routes.blogDetails}>
              <ImageWithBasePath
                src="assets/img/blogs/blog-02.jpg"
                className="img-fluid"
                alt="img"
              />
            </Link>
          </div>
          <div className="blog-content">
            <p className="fs-14 fw-meium text-gray-9 d-inline-flex align-items-center mb-2">
              Admin
              <i className="ti ti-circle-filled fs-6 mx-1" />
              18 Jan 2023
            </p>
            <h6 className="text-truncate mb-2">
              <Link to={routes.blogDetails}>Transform Your Space</Link>
            </h6>
            <p className="two-line-ellipsis mb-3">
              Find out how we can help you create the perfect environment.
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <span className="badge badge-info-transparent me-2">
                Remodeling
              </span>
              <span className="badge badge-dark-transparent">
                Transformation
              </span>
            </div>
          </div>
        </div>
        <div className="blog-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="blog-img">
            <Link to={routes.blogDetails}>
              <ImageWithBasePath
                src="assets/img/blogs/blog-03.jpg"
                className="img-fluid"
                alt="img"
              />
            </Link>
          </div>
          <div className="blog-content">
            <p className="fs-14 fw-meium text-gray-9 d-inline-flex align-items-center mb-2">
              Admin
              <i className="ti ti-circle-filled fs-6 mx-1" />
              08 Feb 2023
            </p>
            <h6 className="text-truncate mb-2">
              <Link to={routes.blogDetails}>Top Tips for Service Success</Link>
            </h6>
            <p className="two-line-ellipsis mb-3">
              Learn key tips to make the most out of our services.
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <span className="badge badge-info-transparent me-2">Success</span>
              <span className="badge badge-dark-transparent">Advice</span>
            </div>
          </div>
        </div>
        <div className="blog-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="blog-img">
            <Link to={routes.blogDetails}>
              <ImageWithBasePath
                src="assets/img/blogs/blog-04.jpg"
                className="img-fluid"
                alt="img"
              />
            </Link>
          </div>
          <div className="blog-content">
            <p className="fs-14 fw-meium text-gray-9 d-inline-flex align-items-center mb-2">
              Admin
              <i className="ti ti-circle-filled fs-6 mx-1" />
              10 Feb 2023
            </p>
            <h6 className="text-truncate mb-2">
              <Link to={routes.blogDetails}>Service Innovations</Link>
            </h6>
            <p className="two-line-ellipsis mb-3">
              Explore the latest advancements in our field.
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <span className="badge badge-info-transparent me-2">
                Innovations
              </span>
              <span className="badge badge-dark-transparent">
                Latest Trends
              </span>
            </div>
          </div>
        </div>
        <div className="blog-item wow fadeInUp" data-wow-delay="0.2s">
          <div className="blog-img">
            <Link to={routes.blogDetails}>
              <ImageWithBasePath
                src="assets/img/blogs/blog-05.jpg"
                className="img-fluid"
                alt="img"
              />
            </Link>
          </div>
          <div className="blog-content">
            <p className="fs-14 fw-meium text-gray-9 d-inline-flex align-items-center mb-2">
              Admin
              <i className="ti ti-circle-filled fs-6 mx-1" />1 Jan 2023
            </p>
            <h6 className="text-truncate mb-2">
              <Link to={routes.blogDetails}>Revamp Your Home</Link>
            </h6>
            <p className="two-line-ellipsis mb-3">
              Explore how our services can refresh and upgrade.
            </p>
            <div className="d-flex align-items-center flex-wrap">
              <span className="badge badge-info-transparent me-2">
                Innovations
              </span>
              <span className="badge badge-dark-transparent">
                Latest Trends
              </span>
            </div>
          </div>
        </div>
      </Slider>
      <div className="text-center wow fadeInUp" data-wow-delay="0.2s">
        <Link to={routes.blogGrid} className="btn btn-dark">
          View All
          <i className="ti ti-arrow-right ms-2" />
        </Link>
      </div>
    </div>
  </section>
  {/* / Blog Section */}
</>

  )
}

export default BlogAndJoinus