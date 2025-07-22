import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';


const BlogGrid = () => {
  const routes = all_routes;
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <BreadCrumb title='Blog Grid' item1='Home' item2='Blog Grid'/>
      <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-15.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Computer</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-43.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Robert Koch</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">09 Aug 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        Tips for Selecting a Computer Service Provider
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Explore practical tips to help you pick the best computer
                      service provider, ensuring smooth and efficient operations
                      for..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-14.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Construction</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-24.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Steven Gutierrez</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">15 Nov 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        What to Look for in a Reliable Construction Service?
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Get tips on selecting a construction company that offers
                      transparency, excellent communication, and proven
                      results...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-13.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Car Wash</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-45.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Antwan Riddles</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">20 Nov 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        Eco-Friendly Car Wash Services: What to Look For
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Learn how to find environmentally friendly car wash
                      services that use water-saving techniques and
                      biodegradable clean...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-16.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Interior</span>
                    <span className="trend-tag-2  d-flex justify-content-center align-items-center rating text-gray">
                      <i className="fa fa-star filled me-1" />
                      4.9
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-55.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Natalie Mitchell</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">13 Oct 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        The Role of Lighting in Interior Design
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Explore how different lighting options can enhance your
                      home’s ambiance and highlight key design features...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-17.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Car Wash</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-52.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Jay Jones</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">25 Aug 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        The Benefits of Regular Professional Car Washes
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Discover why regular professional car washes can extend
                      the life of your vehicle, improve appearance, and protect
                      its ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-18.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Electrical</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-14.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">James Bailey</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">02 Sep 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        Energy-Efficient Electrical Upgrades for Homes
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Discover how energy-efficient electrical solutions, like
                      LED lighting and smart systems, can reduce your energy
                      bills and...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-19.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Cleaning</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-34.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Alice Mullen</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">14 Sep 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        Benefits of Hiring Professional Cleaning Services
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Discover how professional cleaning services can save you
                      time, ensure thorough cleaning, and improve the overall...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-30.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Appliance</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-16.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Donald Gonzales</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">27 Sep 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        How to Choose the Right Appliance Repair Service{" "}
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Learn how to evaluate appliance repair services based on
                      expertise, customer reviews, and service guarantees to ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-23.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Plumbing</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-26.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Robert Conroy</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">26 Oct 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        Understanding Your Home’s Plumbing System
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Learn the basics of your home’s plumbing system, including
                      key components and how they work together, to better ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-24.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Carpentry</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-06.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Richard Scheer</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">18 Oct 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        How to Find a Skilled Carpenter: Tips for Hiring
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Discover key tips for finding a qualified carpenter,
                      including checking references, reviewing past work, and
                      ensuring..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-22.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Construction</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-44.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Reed Smith</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">16 Aug 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        The Importance of Safety in Construction Services
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Understand why safety protocols and practices are crucial
                      in construction projects. Learn how to select a service
                      provider...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="card p-0">
              <div className="card-body p-0">
                <div className="img-sec w-100">
                  <Link to={routes.blogDetails}>
                    <ImageWithBasePath
                      src="assets/img/providers/provider-31.jpg"
                      className="img-fluid rounded-top w-100"
                      alt="img"
                    />
                  </Link>
                  <div className="image-tag d-flex justify-content-end align-items-center">
                    <span className="trend-tag">Computer</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex align-items-center mb-3  ">
                    <div className="d-flex align-items-center border-end pe-2">
                      <span className="avatar avatar-sm me-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-13.jpg"
                          className="rounded-circle"
                          alt="user"
                        />
                      </span>
                      <h6 className="fs-14 text-gray-6">Cheryl Mickens</h6>
                    </div>
                    <div className="d-flex align-items-center ps-2">
                      <span>
                        <i className="ti ti-calendar me-2" />
                      </span>
                      <span className="fs-14">04 Nov 2024</span>
                    </div>
                  </div>
                  <div>
                    <h6 className="fs-16 text-truncate mb-1">
                      <Link to={routes.blogDetails}>
                        How to Fix a Computer in Just 3 Steps?
                      </Link>
                    </h6>
                    <p className="fs-14">
                      Simplify troubleshooting with these three easy steps to
                      fix common computer issues. Learn how to diagnose,
                      reset...
                    </p>
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
  {/* /Page Wrapper */}
</>

    </>
  );
};

export default BlogGrid;
