import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slider, SliderSingleProps } from 'antd';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import StickyBox from 'react-sticky-box';

const ServiceList = () => {
  const routes = all_routes;
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedItems, setSelectedItems] = useState(Array(13).fill(false));

  const [isExpanded, setIsExpanded] = useState(false);
  const filterCheckboxStyle = {
    height: isExpanded ? 'auto' : '150px',
  };
  const onChange = (value: number | number[]) => {
    console.log('onChange: ', value);
  };
  const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `$${value}`;
  const onChangeComplete = (value: number | number[]) => {
    console.log('onChangeComplete: ', value);
  };
  const value1 = [
    { name: 'All Sub Category' },
    { name: 'Computer' },
    { name: 'Construction' },
  ];
  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };

  return (
    <>
      <BreadCrumb title='Services' item1='Services'/>

      <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 theiaStickySidebar">
          <StickyBox>
            <div className="card ">
              <div className="card-body">
                <form >
                  <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom">
                    <h5>
                      <i className="ti ti-filter-check me-2" />
                      Filters
                    </h5>
                    <Link to="#">Reset Filter</Link>
                  </div>
                  <div className="mb-3 pb-3 border-bottom">
                    <label className="form-label">Search By Keyword</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What are you looking for?"
                    />
                  </div>
                  <div className="accordion border-bottom mb-3">
                    <div className="accordion-item mb-3">
                      <div
                        className="accordion-header"
                        id="accordion-headingThree"
                      >
                        <div
                          className="accordion-button p-0 mb-3"
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-collapseThree"
                          aria-expanded="true"
                          aria-controls="accordion-collapseThree"
                          role="button"
                        >
                          Categories
                        </div>
                      </div>
                      <div
                        id="accordion-collapseThree"
                        className="accordion-collapse collapse show"
                        aria-labelledby="accordion-headingThree"
                      >
                        <div className="content-list mb-3" id="fill-more" style={filterCheckboxStyle}>
                          <div className="form-check mb-2">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />
                              All Categories
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              Construction
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              Car Wash
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              Electrical
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              Cleaning
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              Plumbing
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <label className="form-check-label">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              Designing
                            </label>
                          </div>
                        </div>
                        <Link
                          to="#"
                          id="more"
                          className="more-view text-primary fs-14"
                          onClick={toggleHeight}
                        >
                          {isExpanded ? (
                        <>
                          View Less{' '}
                          <i className="ti ti-chevron-up ms-1" />
                        </>
                      ) : (
                        <>
                          View More{' '}
                          <i className="ti ti-chevron-down ms-1" />
                        </>
                      )}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="accordion border-bottom mb-3">
                    <div
                      className="accordion-header"
                      id="accordion-headingFour"
                    >
                      <div
                        className="accordion-button p-0 mb-3"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapseFour"
                        aria-expanded="true"
                        aria-controls="accordion-collapseFour"
                        role="button"
                      >
                        Sub Category
                      </div>
                    </div>
                    <div
                      id="accordion-collapseFour"
                      className="accordion-collapse collapse show"
                      aria-labelledby="accordion-headingFour"
                    >
                      <div className="mb-3">
                      <Dropdown
                      value={selectedValue1}
                      onChange={(e) => setSelectedValue1(e.value)}
                      options={value1}
                      optionLabel="name"
                      placeholder="All Sub Category"
                      className="w-100 select"
                    />
                      </div>
                    </div>
                  </div>
                  <div className="accordion border-bottom mb-3">
                    <div
                      className="accordion-header"
                      id="accordion-headingFive"
                    >
                      <div
                        className="accordion-button p-0 mb-3"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapseFive"
                        aria-expanded="true"
                        aria-controls="accordion-collapseFive"
                        role="button"
                      >
                        Location
                      </div>
                    </div>
                    <div
                      id="accordion-collapseFive"
                      className="accordion-collapse collapse show"
                      aria-labelledby="accordion-headingFive"
                    >
                      <div className="mb-3">
                        <div className="position-relative">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Select Location"
                          />
                          <span className="icon-addon">
                            <i className="ti ti-map-pin" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion border-bottom mb-3">
                    <div className="accordion-header" id="accordion-headingSix">
                      <div
                        className="accordion-button p-0 mb-3"
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-collapseSix"
                        aria-expanded="true"
                        aria-controls="accordion-collapseSix"
                        role="button"
                      >
                        Price Range
                      </div>
                    </div>
                    <div
                      id="accordion-collapseSix"
                      className="accordion-collapse collapse show"
                      aria-labelledby="accordion-headingSix"
                    >
                      <div className="filter-range">
                      <Slider
                        range
                        tooltip={{ formatter  }}
                        step={10}
                        defaultValue={[20, 50]}
                        onChange={onChange}
                        onChangeComplete={onChangeComplete}
                      />
                      </div>
                      <div className="filter-range-amount mb-3">
                        <p className="fs-14">
                          Price: <span>$5 - $210</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="accordion-item mb-3">
                      <div
                        className="accordion-header"
                        id="accordion-headingTwo"
                      >
                        <div
                          className="accordion-button fs-18 p-0 mb-3"
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-collapseTwo"
                          aria-expanded="true"
                          aria-controls="accordion-collapseTwo"
                          role="button"
                        >
                          Ratings
                        </div>
                      </div>
                      <div
                        id="accordion-collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="accordion-headingTwo"
                      >
                        <div className="mb-3">
                          <div className="form-check mb-2">
                            <label className="form-check-label d-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <span className="float-end">(55)</span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <label className="form-check-label d-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fa-regular fa-star filled" />
                                <span className="float-end">(48)</span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <label className="form-check-label d-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fa-regular fa-star filled" />
                                <i className="fa-regular fa-star filled" />
                                <span className="float-end">(13)</span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <label className="form-check-label d-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fa-regular fa-star filled" />
                                <i className="fa-regular fa-star filled" />
                                <i className="fa-regular fa-star filled" />
                                <span className="float-end">(05)</span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check mb-2">
                            <label className="form-check-label d-block">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="rating">
                                <i className="fas fa-star filled" />
                                <i className="fa-regular fa-star filled" />
                                <i className="fa-regular fa-star filled" />
                                <i className="fa-regular fa-star filled" />
                                <i className="fa-regular fa-star filled" />
                                <span className="float-end">(00)</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link to={routes.search} className="btn btn-dark w-100">
                    Search
                  </Link>
                </form>
              </div>
            </div>
            </StickyBox>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
              <h4>
                Found <span className="text-primary">11 Services</span>
              </h4>
              <div className="d-flex align-items-center">
                <span className="text-dark me-2">Sort</span>
                <div className="dropdown me-2">
                  <Link
                    to="#;"
                    className="dropdown-toggle bg-light-300 "
                    data-bs-toggle="dropdown"
                  >
                    Price Low to High
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="#;" className="dropdown-item active">
                      Price Low to High
                    </Link>
                    <Link to="#;" className="dropdown-item">
                      Price High to Low
                    </Link>
                  </div>
                </div>
                <Link
                  to={routes.serviceGrid}
                  className="tags d-flex justify-content-center align-items-center rounded me-2"
                >
                  <i className="ti ti-layout-grid" />
                </Link>
                <Link
                  to={routes.serviceList}
                  className="tags d-flex justify-content-center align-items-center border bg-primary rounded"
                >
                  <i className="ti ti-list" />
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* Service List */}
                <div className="service-list">
                  <div className="service-cont">
                    <div className="service-cont-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-04.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to="#" onClick={() => handleItemClick(1)} className={`fav-icon ${selectedItems[1] ? 'selected' : ''}`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-cont-info">
                      <span className="badge bg-light fs-14 mb-2">Car Wash</span>
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Car Repair Services</Link>
                      </h3>
                      <p>
                        <i className="feather icon-map-pin" />
                        Maryland City, MD, USA
                      </p>
                      <div className="service-pro-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="user" />
                        <span>
                          <i className="fas fa-star filled" />
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="service-action">
                    <h6>
                      $25.00<span className="old-price">$35.00</span>
                    </h6>
                    <Link to={routes.booking} className="btn btn-light">
                      Book Now
                    </Link>
                  </div>
                </div>
                {/* /Service List */}
                {/* Service List */}
                <div className="service-list">
                  <div className="service-cont">
                    <div className="service-cont-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-02.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to="#" onClick={() => handleItemClick(2)} className={`fav-icon ${selectedItems[2] ? 'selected' : ''}`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-cont-info">
                      <span className="badge bg-light fs-14 mb-2">Construction</span>
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Toughened Glass Fitting Services
                        </Link>
                      </h3>
                      <p>
                        <i className="feather icon-map-pin" />
                        New Jersey, USA
                      </p>
                      <div className="service-pro-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="User" />
                        <span>
                          <i className="fas fa-star filled" />
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="service-action">
                    <h6>
                      $30.00<span className="old-price">$35.00</span>
                    </h6>
                    <Link to={routes.booking} className="btn btn-light">
                      Book Now
                    </Link>
                  </div>
                </div>
                {/* /Service List */}
                {/* Service List */}
                <div className="service-list">
                  <div className="service-cont">
                    <div className="service-cont-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-06.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to="#" onClick={() => handleItemClick(3)} className={`fav-icon ${selectedItems[3] ? 'selected' : ''}`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-cont-info">
                      <span className="badge bg-light fs-14 mb-2">Computer</span>
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>
                          Computer &amp; Server AMC Service
                        </Link>
                      </h3>
                      <p>
                        <i className="feather icon-map-pin" />
                        California, USA
                      </p>
                      <div className="service-pro-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="User" />
                        <span>
                          <i className="fas fa-star filled" />
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="service-action">
                    <h6>
                      $30.00<span className="old-price">$35.00</span>
                    </h6>
                    <Link to={routes.booking} className="btn btn-light">
                      Book Now
                    </Link>
                  </div>
                </div>
                {/* /Service List */}
                {/* Service List */}
                <div className="service-list">
                  <div className="service-cont">
                    <div className="service-cont-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-07.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to="#" onClick={() => handleItemClick(4)} className={`fav-icon ${selectedItems[4] ? 'selected' : ''}`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-cont-info">
                      <span className="badge bg-light fs-14 mb-2">Interior</span>
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Interior Designing</Link>
                      </h3>
                      <p>
                        <i className="feather icon-map-pin" />
                        Maryland, USA
                      </p>
                      <div className="service-pro-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-06.jpg" alt="User" />
                        <span>
                          <i className="fas fa-star filled" />
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="service-action">
                    <h6>
                      $15.00<span className="old-price">$25.00</span>
                    </h6>
                    <Link to={routes.booking} className="btn btn-light">
                      Book Now
                    </Link>
                  </div>
                </div>
                {/* /Service List */}
                {/* Service List */}
                <div className="service-list">
                  <div className="service-cont">
                    <div className="service-cont-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-09.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to="#" onClick={() => handleItemClick(5)} className={`fav-icon ${selectedItems[5] ? 'selected' : ''}`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-cont-info">
                      <span className="badge bg-light fs-14 mb-2">Cleaning</span>
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>House Cleaning Services</Link>
                      </h3>
                      <p>
                        <i className="feather icon-map-pin" />
                        Georgia
                      </p>
                      <div className="service-pro-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-09.jpg" alt="User" />
                        <span>
                          <i className="fas fa-star filled" />
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="service-action">
                    <h6>
                      $55.00<span className="old-price">$60.00</span>
                    </h6>
                    <Link to={routes.booking} className="btn btn-light">
                      Book Now
                    </Link>
                  </div>
                </div>
                {/* /Service List */}
                {/* Service List */}
                <div className="service-list">
                  <div className="service-cont">
                    <div className="service-cont-img">
                      <Link to={routes.serviceDetails1}>
                        <ImageWithBasePath
                          className="img-fluid serv-img"
                          alt="Service Image"
                          src="assets/img/services/service-10.jpg"
                        />
                      </Link>
                      <div className="fav-item">
                        <Link to="#" onClick={() => handleItemClick(6)} className={`fav-icon ${selectedItems[6] ? 'selected' : ''}`}>
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-cont-info">
                      <span className="badge bg-light fs-14 mb-2">Construction</span>
                      <h3 className="title">
                        <Link to={routes.serviceDetails1}>Building Construction Services</Link>
                      </h3>
                      <p>
                        <i className="feather icon-map-pin" />
                        Montana, USA
                      </p>
                      <div className="service-pro-img">
                        <ImageWithBasePath src="assets/img/profiles/avatar-09.jpg" alt="User" />
                        <span>
                          <i className="fas fa-star filled" />
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="service-action">
                    <h6>
                      $45.00<span className="old-price">$50.00</span>
                    </h6>
                    <Link to={routes.booking} className="btn btn-light">
                      Book Now
                    </Link>
                  </div>
                </div>
                {/* /Service List */}
              </div>
            </div>
            <nav aria-label="Page navigation">
              <ul className="paginations d-flex justify-content-center align-items-center">
                <li className="page-item me-3">
                  <Link to="#" className="page-link">
                    <i className="ti ti-arrow-left me-2" />
                    Prev
                  </Link>
                </li>
                <li className="page-item me-2">
                  <Link
                    className="page-link-1 active d-flex justify-content-center align-items-center "
                    to="#;"
                  >
                    1
                  </Link>
                </li>
                <li className="page-item me-2">
                  <Link
                    className="page-link-1 d-flex justify-content-center align-items-center "
                    to="#;"
                  >
                    2
                  </Link>
                </li>
                <li className="page-item me-3">
                  <Link
                    className="page-link-1 d-flex justify-content-center align-items-center "
                    to="#;"
                  >
                    3
                  </Link>
                </li>
                <li className="page-item ">
                  <Link className="page-link" to="#;">
                    Next
                    <i className="ti ti-arrow-right ms-2" />
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

export default ServiceList;
