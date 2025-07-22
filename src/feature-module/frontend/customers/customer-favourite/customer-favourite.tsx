import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import CustomerSideBar from '../common/sidebar';

const CustomerFavourite = () => {
  const routes = all_routes;

  const [selectedItems, setSelectedItems] = useState(Array(10).fill(true));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };

  return (
    <>
    <BreadCrumb title='Favourites' item1='Customer' item2='Favourites'/>
    {/* Page Wrapper */}
    <div className="page-wrapper">
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 ">
              <CustomerSideBar/>
            </div>
            <div className="col-xl-9 col-lg-8">
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                  <h4>Favorites</h4>
                  <div className="d-flex align-items-center">
                    <span className="text-dark me-2">Sort</span>
                    <div className="dropdown me-2">
                      <Link
                        to="#"
                        className="dropdown-toggle bg-light-300 "
                        data-bs-toggle="dropdown"
                      >
                        Newly Added
                      </Link>
                      <div className="dropdown-menu">
                        <Link to="#" className="dropdown-item active">
                          Recently Added
                        </Link>
                      </div>
                    </div>
                    <Link
                      to="#"
                      className="tags d-flex justify-content-center align-items-center border  rounded me-2"
                    >
                      <i className="ti ti-calendar" />
                    </Link>
                    <Link
                      to="#"
                      className="tags d-flex justify-content-center align-items-center border rounded"
                    >
                      <i className="ti ti-adjustments-alt" />
                    </Link>
                  </div>
                </div>
                <div className="row justify-content-center align-items-center">
                  <div className="col-xxl-4 col-md-6">
                    <div className="card p-0 ">
                      <div className="card-body p-0">
                        <div className="img-sec-2 w-100">
                          <Link to={routes.serviceDetails1}>
                            <ImageWithBasePath
                              src="assets/img/providers/provider-13.jpg"
                              className="img-fluid rounded-top w-100"
                              alt="img"
                            />
                          </Link>
                          <div className="image-tag d-flex justify-content-end align-items-center">
                            <Link
                              to="#"
                              className="like-icon d-flex justify-content-center align-items-center"
                              onClick={() => handleItemClick(1)}
                            >
                              <i className={`ti ti-heart-filled  ${selectedItems[1] ? 'filled' : ''}`} />
                            </Link>
                            <span className="trend-tag-2">Car Wash</span>
                          </div>
                        </div>
                        <div className="img-content p-3">
                          <h6 className="fs-16 mb-3 text-truncate">
                            <Link to={routes.serviceDetails1}>Car Repair Services</Link>
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-md me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-01.jpg"
                                  className="img-fluid rounded-circle"
                                  alt="user"
                                />
                              </span>
                              <div className="user-id">
                                <h6 className="fs-14 ">John Smith</h6>
                                <span className="fs-12">
                                  <i className="ti ti-map-pin me-1" />
                                  New Jersey,USA
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <Link to={routes.serviceDetails1} className="btn btn-light btn-sm">
                                {" "}
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card p-0 w-100">
                      <div className="card-body p-0">
                        <div className="img-sec-2">
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/providers/provider-14.jpg"
                              className="img-fluid rounded-top w-100"
                              alt="img"
                            />
                          </Link>
                          <div className="image-tag d-flex justify-content-end align-items-center">
                            <Link
                              to="#"
                              className="like-icon d-flex justify-content-center align-items-center"
                              onClick={() => handleItemClick(2)}
                            >
                              <i className={`ti ti-heart-filled  ${selectedItems[2] ? 'filled' : ''}`} />
                            </Link>
                            <span className="trend-tag-2">Construction</span>
                          </div>
                        </div>
                        <div className="img-content p-3">
                          <h6 className="fs-16 mb-3 text-truncate">
                            <Link to={routes.serviceDetails1}>
                              Toughened Glass Fitting Services
                            </Link>
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              <span className="avatar avatar-md me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-02.jpg"
                                  className="rounded-circle"
                                  alt="user"
                                />
                              </span>
                              <div>
                                <h6 className="fs-16">Charles</h6>
                                <span className="fs-12">
                                  <i className="ti ti-map-pin me-1" />
                                  Chicago, USA
                                </span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <Link to={routes.serviceDetails1} className="btn btn-light btn-sm">
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card p-0">
                      <div className="card-body p-0">
                        <div className="img-sec-2 w-100">
                          <Link to={routes.serviceDetails1}>
                            <ImageWithBasePath
                              src="assets/img/providers/provider-15.jpg"
                              className="rounded-top w-100"
                              alt="img"
                            />
                          </Link>
                          <div className="image-tag d-flex justify-content-end align-items-center">
                            <Link
                              to="#"
                              className="like-icon d-flex justify-content-center align-items-center"
                              onClick={() => handleItemClick(3)}
                            >
                              <i className={`ti ti-heart-filled  ${selectedItems[3] ? 'filled' : ''}`} />
                            </Link>
                            <span className="trend-tag-2">Construction</span>
                          </div>
                        </div>
                        <div className="img-content p-3">
                          <h6 className="fs-16 mb-3 text-truncate">
                            <Link to={routes.serviceDetails1}>
                              Computer &amp; Server AMC Service
                            </Link>
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <span className="avatar avatar-md me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-03.jpg"
                                  className="rounded-circle"
                                  alt="user"
                                />
                              </span>
                              <div>
                                <h6 className="fs-14">Wilfredo</h6>
                                <span className="fs-12 text-truncate">
                                  <i className="ti ti-map-pin me-1" />
                                  Los Angeles, USA
                                </span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <Link
                                to={routes.serviceDetails1}
                                className="btn btn-light btn-sm "
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card p-0">
                      <div className="card-body p-0">
                        <div className="img-sec-2 w-100">
                          <Link to={routes.serviceDetails1}>
                            <ImageWithBasePath
                              src="assets/img/providers/provider-16.jpg"
                              className="img-fluid rounded-top w-100"
                              alt="img"
                            />
                          </Link>
                          <div className="image-tag d-flex justify-content-end align-items-center">
                            <Link
                              to="#"
                              className="like-icon d-flex justify-content-center align-items-center"
                              onClick={() => handleItemClick(4)}
                            >
                              <i className={`ti ti-heart-filled  ${selectedItems[4] ? 'filled' : ''}`} />
                            </Link>
                            <span className="trend-tag-2">Interior</span>
                          </div>
                        </div>
                        <div className="img-content p-3">
                          <h6 className="fs-16 mb-3">
                            <Link to="#">Interior Designing</Link>
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <span className="avatar avatar-md me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-04.jpg"
                                  className="rounded-circle"
                                  alt="user"
                                />
                              </span>
                              <div>
                                <h6 className="fs-14">John Doe</h6>
                                <span className="fs-12">
                                  <i className="ti ti-map-pin me-1" />
                                  Detroit, USA
                                </span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <Link
                                to={routes.serviceDetails1}
                                className="btn btn-light btn-sm "
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card p-0">
                      <div className="card-body p-0">
                        <div className="img-sec-2 w-100">
                          <Link to={routes.serviceDetails1}>
                            <ImageWithBasePath
                              src="assets/img/providers/provider-17.jpg"
                              className="img-fluid rounded-top w-100"
                              alt="img"
                            />
                          </Link>
                          <div className="image-tag d-flex justify-content-end align-items-center">
                            <Link
                              to="#"
                              className="like-icon d-flex justify-content-center align-items-center"
                              onClick={() => handleItemClick(5)}
                            >
                              <i className={`ti ti-heart-filled  ${selectedItems[5] ? 'filled' : ''}`} />
                            </Link>
                            <span className="trend-tag-2">Car Wash</span>
                          </div>
                        </div>
                        <div className="img-content p-3">
                          <h6 className="fs-16 mb-3">
                            <Link to="#">Steam Car Wash</Link>
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <span className="avatar avatar-md me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-05.jpg"
                                  className="rounded-circle"
                                  alt="user"
                                />
                              </span>
                              <div>
                                <h6 className="fs-14">Hamilton</h6>
                                <span className="fs-12">
                                  <i className="ti ti-map-pin me-1" />
                                  San Jose, USA
                                </span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <Link
                                to={routes.serviceDetails1}
                                className="btn btn-light btn-sm "
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card p-0">
                      <div className="card-body p-0">
                        <div className="img-sec-2 w-100">
                          <Link to={routes.serviceDetails1}>
                            <ImageWithBasePath
                              src="assets/img/providers/provider-18.jpg"
                              className="img-fluid rounded-top w-100"
                              alt="img"
                            />
                          </Link>
                          <div className="image-tag d-flex justify-content-end align-items-center">
                            <Link
                              to="#"
                              className="like-icon d-flex justify-content-center align-items-center"
                              onClick={() => handleItemClick(6)}
                            >
                              <i className={`ti ti-heart-filled  ${selectedItems[6] ? 'filled' : ''}`} />
                            </Link>
                            <span className="trend-tag-2">Electrical</span>
                          </div>
                        </div>
                        <div className="img-content p-3">
                          <h6 className="fs-16 mb-3 text-truncate">
                            <Link to={routes.serviceDetails1}>
                              Electric Panel Repairing Service
                            </Link>
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <span className="avatar avatar-md me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-06.jpg"
                                  className="rounded-circle"
                                  alt="user"
                                />
                              </span>
                              <div>
                                <h6 className="fs-14">Blackwell</h6>
                                <span className="fs-12 text-truncate">
                                  <i className="ti ti-map-pin me-1" />
                                  San Francisco, USA
                                </span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <Link
                                to={routes.serviceDetails1}
                                className="btn btn-light btn-sm "
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card p-0">
                      <div className="card-body p-0">
                        <div className="img-sec-2 w-100">
                          <Link to={routes.serviceDetails1}>
                            <ImageWithBasePath
                              src="assets/img/providers/provider-19.jpg"
                              className="img-fluid rounded-top w-100"
                              alt="img"
                            />
                          </Link>
                          <div className="image-tag d-flex justify-content-end align-items-center">
                            <Link
                              to="#"
                              className="like-icon d-flex justify-content-center align-items-center"
                              onClick={() => handleItemClick(7)}
                            >
                              <i className={`ti ti-heart-filled  ${selectedItems[7] ? 'filled' : ''}`} />
                            </Link>
                            <span className="trend-tag-2">Cleaning</span>
                          </div>
                        </div>
                        <div className="img-content p-3">
                          <h6 className="fs-16 mb-3 text-truncate">
                            <Link to={routes.serviceDetails1}>House Cleaning Services</Link>
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <span className="avatar avatar-md me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-07.jpg"
                                  className="rounded-circle"
                                  alt="user"
                                />
                              </span>
                              <div>
                                <h6 className="fs-14">Wilson</h6>
                                <span className="fs-12">
                                  <i className="ti ti-map-pin me-1" />
                                  Denver, USA
                                </span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <Link
                                to={routes.serviceDetails1}
                                className="btn btn-light btn-sm "
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card p-0">
                      <div className="card-body p-0">
                        <div className="img-sec-2 w-100">
                          <Link to={routes.serviceDetails1}>
                            <ImageWithBasePath
                              src="assets/img/providers/provider-20.jpg"
                              className="img-fluid rounded-top w-100"
                              alt="img"
                            />
                          </Link>
                          <div className="image-tag d-flex justify-content-end align-items-center">
                            <Link
                              to="#"
                              className="like-icon d-flex justify-content-center align-items-center"
                              onClick={() => handleItemClick(8)}
                            >
                              <i className={`ti ti-heart-filled  ${selectedItems[8] ? 'filled' : ''}`} />
                            </Link>
                            <span className="trend-tag-2">Painting</span>
                          </div>
                        </div>
                        <div className="img-content p-3">
                          <h6 className="fs-16 mb-3 text-truncate">
                            <Link to={routes.serviceDetails1}>Commercial Painting Services</Link>
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <span className="avatar avatar-md me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-08.jpg"
                                  className="rounded-circle"
                                  alt="user"
                                />
                              </span>
                              <div>
                                <h6 className="fs-14">Clarence</h6>
                                <span className="fs-12">
                                  <i className="ti ti-map-pin me-1" />
                                  Portland, USA
                                </span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <Link
                                to={routes.serviceDetails1}
                                className="btn btn-light btn-sm "
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-md-6">
                    <div className="card p-0">
                      <div className="card-body p-0">
                        <div className="img-sec-2 w-100">
                          <Link to={routes.serviceDetails1}>
                            <ImageWithBasePath
                              src="assets/img/providers/provider-22.jpg"
                              className="img-fluid rounded-top w-100"
                              alt="img"
                            />
                          </Link>
                          <div className="image-tag d-flex justify-content-end align-items-center">
                            <Link
                              to="#"
                              className="like-icon d-flex justify-content-center align-items-center"
                              onClick={() => handleItemClick(1)}
                            >
                              <i className={`ti ti-heart-filled  ${selectedItems[9] ? 'filled' : ''}`} />
                            </Link>
                            <span className="trend-tag-2">Construction</span>
                          </div>
                        </div>
                        <div className="img-content p-3">
                          <h6 className="fs-16 mb-3 text-truncate">
                            <Link to={routes.serviceDetails1}>Building Construction Services</Link>
                          </h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <span className="avatar avatar-md me-2">
                                <ImageWithBasePath
                                  src="assets/img/user/user-09.jpg"
                                  className="rounded-circle"
                                  alt="user"
                                />
                              </span>
                              <div>
                                <h6 className="fs-14">Roberts</h6>
                                <span className="fs-12">
                                  <i className="ti ti-map-pin me-1" />
                                  Houston, USA
                                </span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <Link
                                to={routes.serviceDetails1}
                                className="btn btn-light btn-sm "
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="value d-flex align-items-center">
                    <span>Show</span>
                    <select>
                      <option>7</option>
                    </select>
                    <span>entries</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2 text-gray-9">1 - 07 of 10</span>
                    <nav aria-label="Page navigation">
                      <ul className="paginations d-flex justify-content-center align-items-center">
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
                            className="page-link-1 d-flex justify-content-center align-items-center "
                            to="#"
                          >
                            2
                          </Link>
                        </li>
                        <li className="page-item ">
                          <Link
                            className="page-link-1 d-flex justify-content-center align-items-center "
                            to="#"
                          >
                            3
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    {/* /Page Wrapper */}
  </>
  );
};

export default CustomerFavourite;
