import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const BlogList = () => {
  const routes = all_routes;
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
    <BreadCrumb title='Blog List' item1='Home' item2='Blog List'/>
    <div className="page-wrapper">
  <div className="content">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-8">
          <div className="blog-list">
            <div className="blog-img">
              <Link to={routes.blogDetails}>
                <ImageWithBasePath
                  src="assets/img/services/service-77.jpg"
                  alt="img"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="blog-content-body">
              <div className="d-flex align-items-center mb-3">
                <span className="badge badge-light text-dark p-2 me-3">
                  Computer
                </span>
                <span className="text-dark">
                  <i className="ti ti-calendar" /> 09 Aug 2024
                </span>
              </div>
              <div>
                <p className="fs-16 mb-2 text-dark">
                  <Link to={routes.blogDetails}>
                    Tips for Selecting a Computer Service Provider
                  </Link>
                </p>
                <p className="fs-14">
                  Explore practical tips to help you pick the best computer
                  service provider, ensuring smooth and efficient operations for
                  your company.Start by assessing the provider&apos;s expertise and
                  specializations to ensure they have the necessary skills and
                  certifications for...
                </p>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center blog-profile">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/user/user-02.jpg"
                        alt="img"
                        className="avatar avatar-sm rounded-circle me-2"
                      />
                    </Link>
                    <Link to="#" className="fs-14 text-dark">
                      Robert Koch
                    </Link>
                  </div>
                  <div className="d-flex align-items-center blog-profile">
                    <Link
                      to="#"
                      className="fs-14 text-dark d-flex align-items-center ms-3"
                    >
                      <span className="me-1">
                        <i className="ti ti-thumb-up text-gray" />
                      </span>
                      25 Like(s)
                    </Link>
                  </div>
                  <div className="d-flex align-items-center blog-profile">
                    <Link
                      to="#"
                      className="fs-14 text-dark d-flex align-items-center ms-3"
                    >
                      <span className="me-1">
                        <i className="ti ti-messages text-gray " />
                      </span>
                      20 Comment(s)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-list">
            <div className="blog-img">
              <Link to={routes.blogDetails}>
                <ImageWithBasePath
                  src="assets/img/services/service-78.jpg"
                  alt="img"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="blog-content-body">
              <div className="d-flex align-items-center mb-3">
                <span className="badge badge-light text-dark p-2 me-3">
                  Construction
                </span>
                <span className="text-dark">
                  <i className="ti ti-calendar" />
                  16 Aug 2024
                </span>
              </div>
              <div>
                <p className="fs-16 mb-2 text-dark">
                  <Link to={routes.blogDetails}>
                    The Importance of Safety in Construction Services
                  </Link>
                </p>
                <p className="fs-14">
                  Understand why safety protocols and practices are crucial in
                  construction projects. Learn how to select a service provider
                  for your needs. When selecting a construction service
                  provider, it is vital to choose one that prioritizes worker
                  safety and demonstrates a strong...
                </p>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center blog-profile">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/user/user-03.jpg"
                        alt="img"
                        className="avatar avatar-sm rounded-circle me-2"
                      />
                    </Link>
                    <Link to="#" className="fs-14 text-dark">
                      Robert Koch
                    </Link>
                  </div>
                  <div className="d-flex align-items-center blog-profile">
                    <Link
                      to="#"
                      className="fs-14 text-dark d-flex align-items-center ms-3"
                    >
                      <span className="me-1">
                        <i className="ti ti-thumb-up text-gray" />
                      </span>
                      20 Like(s)
                    </Link>
                  </div>
                  <div className="d-flex align-items-center blog-profile">
                    <Link
                      to="#"
                      className="fs-14 text-dark d-flex align-items-center ms-3"
                    >
                      <span className="me-1">
                        <i className="ti ti-messages text-gray" />
                      </span>
                      15 Comment(s)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-list">
            <div className="blog-img">
              <Link to={routes.blogDetails}>
                <ImageWithBasePath
                  src="assets/img/services/service-79.jpg"
                  alt="img"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="blog-content-body">
              <div className="d-flex align-items-center mb-3">
                <span className="badge badge-light text-dark p-2 me-3">
                  Car Wash
                </span>
                <span className="text-dark">
                  <i className="ti ti-calendar" /> 25 Aug 2024
                </span>
              </div>
              <div>
                <p className="fs-16 mb-2 text-dark">
                  <Link to={routes.blogDetails}>
                    The Benefits of Regular Professional Car Washes
                  </Link>
                </p>
                <p className="fs-14">
                  Discover why regular professional car washes can extend the
                  life of your vehicle, improve appearance, and protect its
                  resale value. Consistent cleaning by experts helps to preserve
                  your vehicle’s exterior by removing contaminants such as dirt,
                  salt, and grime that can
                </p>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center blog-profile">
                    <Link to="#">
                      <ImageWithBasePath
                        src="assets/img/user/user-16.jpg"
                        alt="img"
                        className="avatar avatar-sm rounded-circle me-2"
                      />
                    </Link>
                    <Link to="#">
                      <p className="fs-14 text-dark">Robert Koch</p>
                    </Link>
                  </div>
                  <div className="d-flex align-items-center blog-profile">
                    <Link
                      to="#"
                      className="fs-14 text-dark d-flex align-items-center ms-3"
                    >
                      <span className="me-1">
                        <i className="ti ti-thumb-up text-gray" />
                      </span>
                      25 Like(s)
                    </Link>
                  </div>
                  <div className="d-flex align-items-center blog-profile">
                    <Link
                      to="#"
                      className="fs-14 text-dark d-flex align-items-center ms-3"
                    >
                      <span className="me-1">
                        <i className="ti ti-messages text-gray" />
                      </span>
                      20 Comment(s)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-paginate d-flex justify-content-center align-items-center flex-wrap row-gap-3">
        <div className="d-flex align-items-center justify-content-center">
          <nav aria-label="Page navigation">
            <ul className="paginations d-flex justify-content-center align-items-center">
              <li className="page-item me-2">
                <Link
                  className=" d-flex justify-content-center align-items-center"
                  to="#"
                >
                  <i className="ti ti-arrow-left me-2" />
                  Prev
                </Link>
              </li>
              <li className="page-item me-2">
                <Link
                  className="page-link-1 active d-flex justify-content-center align-items-center "
                  to="#"
                >
                  1
                </Link>
              </li>
              <li className="page-item me-2">
                <Link
                  className="page-link-1 d-flex justify-content-center align-items-center"
                  to="#"
                >
                  2
                </Link>
              </li>
              <li className="page-item ">
                <Link
                  className="page-link-1 d-flex justify-content-center align-items-center me-2"
                  to="#"
                >
                  3
                </Link>
              </li>
              <li className="page-item ">
                <Link
                  className="page-link-1 d-flex justify-content-center align-items-center me-2"
                  to="#"
                >
                  4
                </Link>
              </li>
              <li className="page-item me-2">
                <Link
                  className="d-flex justify-content-center align-items-center"
                  to="#"
                >
                  Next <i className="ti ti-arrow-right ms-2" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default BlogList;
