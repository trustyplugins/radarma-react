import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import * as Icon from 'react-feather';
import { Slider } from 'primereact/slider';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import StickyBox from 'react-sticky-box';

const SearchList = () => {
  const routes = all_routes;
  const [value, setValue] = useState<[number, number]>([20, 80]);
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };
  const filterCheckboxStyle = {
    height: isExpanded ? 'auto' : '180px'
  };

  const value1 = [
    { name: 'All Sub Category' },
    { name: 'Computer' },
    { name: 'Construction' },
  ];
  const value2 = [{ name: 'Price Low to High' }, { name: 'Price High to Low' }];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));

  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  return (
    <div>
      <div className="bg-img">
        <ImageWithBasePath src="assets/img/bg/work-bg-03.png" alt="img" className="bgimg1" />
        <ImageWithBasePath src="assets/img/bg/work-bg-03.png" alt="img" className="bgimg2" />
        <ImageWithBasePath
          src="assets/img/bg/feature-bg-03.png"
          alt="img"
          className="bgimg3"
        />
      </div>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">Find a Professional</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.homeOne}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Find a Professional
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      <div className="content">
        <div className="container">
          <div className="row">
            {/* Filter */}
            <div className="col-lg-3 col-sm-12 theiaStickySidebar">
            <StickyBox>
              <div className="filter-div">
                <div className="filter-head">
                  <h5>Filter by</h5>
                  <Link to="#" className="reset-link">
                    Reset Filters
                  </Link>
                </div>
                <div className="filter-content">
                  <h2>Keyword</h2>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What are you looking for?"
                  />
                </div>
                <div className="filter-content">
                  <h2>
                    Categories{' '}
                    <span>
                      {' '}
                      <Icon.ChevronDown className="react-feather-custom" />
                    </span>
                  </h2>
                  <div className="filter-checkbox" id="fill-more" style={filterCheckboxStyle}>
                    <ul>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                          <b className="check-content">All Categories</b>
                        </label>
                      </li>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                          <b className="check-content">Construction</b>
                        </label>
                      </li>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                          <b className="check-content">Car Wash</b>
                        </label>
                      </li>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                          <b className="check-content">Electrical</b>
                        </label>
                      </li>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                          <b className="check-content">Cleaning</b>
                        </label>
                      </li>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                          <b className="check-content">Interior</b>
                        </label>
                      </li>
                      <li>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                          <b className="check-content">Computer</b>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <Link
                      to="#"
                      id="more"
                      className="more-view"
                      onClick={toggleHeight}
                    >
                      {isExpanded ? (
                        <>
                          Show Less{' '}
                          <Icon.ArrowUpCircle className="react-feather-custom ms-1" />
                        </>
                      ) : (
                        <>
                          Show More{' '}
                          <Icon.ArrowDownCircle className="react-feather-custom ms-1" />
                        </>
                      )}
                    </Link>
                </div>
                <div className="filter-content">
                  <h2>Sub Category</h2>
                  <Dropdown
                    value={selectedValue1}
                    onChange={(e) => setSelectedValue1(e.value)}
                    options={value1}
                    optionLabel="name"
                    placeholder="All Sub Category"
                    className="w-100 select"
                  />
                </div>
                <div className="filter-content">
                  <h2>Location</h2>
                  <div className="group-img">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Select Location"
                    />
                    <Icon.MapPin className="react-feather-custom" />
                  </div>
                </div>
                <div className="filter-content">
                  <h2 className="mb-4">Price Range</h2>
                  <div className="filter-range">
                    <Slider
                    
                      value={value}
                      onChange={(e: any) => setValue(e.value)}
                      className="w-14rem"
                      range
                    />
                  </div>
                  <div className="filter-range-amount">
                    <h5>
                      Price: <span>$05 - $210</span>
                    </h5>
                  </div>
                </div>
                <div className="filter-content">
                    <h2>
                      By Rating{' '}
                      <span>
                        <Icon.ChevronDown className="react-feather-custom" />
                      </span>
                    </h2>
                    <ul className="rating-set">
                      <li>
                        <label className="checkboxs d-inline-flex">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                        </label>
                        <Link className="rating" to="#">
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star" />
                          <span className="d-inline-block average-rating float-end">
                            (35)
                          </span>
                        </Link>
                      </li>
                      <li>
                        <label className="checkboxs d-inline-flex">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                        </label>
                        <Link className="rating" to="#">
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star" />
                          <span className="d-inline-block average-rating float-end">
                            (40)
                          </span>
                        </Link>
                      </li>
                      <li>
                        <label className="checkboxs d-inline-flex">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                        </label>
                        <Link className="rating" to="#">
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star me-1" />
                          <i className="fa-regular fa-star" />
                          <span className="d-inline-block average-rating float-end">
                            (40)
                          </span>
                        </Link>
                      </li>
                      <li>
                        <label className="checkboxs d-inline-flex">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                        </label>
                        <Link className="rating" to="#">
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star me-1" />
                          <i className="fa-regular fa-star me-1" />
                          <i className="fa-regular fa-star" />
                          <span className="d-inline-block average-rating float-end">
                            (20)
                          </span>
                        </Link>
                      </li>
                      <li>
                        <label className="checkboxs d-inline-flex">
                          <input type="checkbox" />
                          <span>
                            <i />
                          </span>
                        </label>
                        <Link className="rating" to="#">
                          <i className="fa-regular fa-star filled me-1" />
                          <i className="fa-regular fa-star me-1" />
                          <i className="fa-regular fa-star me-1" />
                          <i className="fa-regular fa-star me-1" />
                          <i className="fa-regular fa-star" />
                          <span className="d-inline-block average-rating float-end">
                            (5)
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                <button className="btn btn-primary">Search</button>
              </div>
              </StickyBox>
            </div>
            {/* /Filter */}
            {/* Service */}
            <div className="col-lg-9 col-sm-12">
              <div className="row sorting-div">
                <div className="col-lg-4 col-sm-12 ">
                  <div className="count-search">
                    <h6>Found 11 Services On Search</h6>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12 d-flex justify-content-end ">
                  <div className="sortbyset">
                    <h4>Sort</h4>
                    <div className="sorting-select">
                      <Dropdown
                        value={selectedValue2}
                        onChange={(e) => setSelectedValue2(e.value)}
                        options={value2}
                        optionLabel="name"
                        placeholder="Price Low to High"
                        className="select"
                      />
                    </div>
                  </div>
                  <div className="grid-listview">
                    <ul>
                      <li>
                        <Link to={routes.serviceGrid}>
                          <Icon.Grid className="react-feather-custom" />
                        </Link>
                      </li>
                      <li>
                        <Link to={routes.serviceList} className="active">
                          <Icon.List className="react-feather-custom" />
                        </Link>
                      </li>
                    </ul>
                  </div>
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
                        <div
                          className="fav-item"
                          key={1}
                          onClick={() => handleItemClick(1)}
                        >
                          <Link
                            to="#"
                            className={`fav-icon ${
                              selectedItems[1] ? 'selected' : ''
                            }`}
                          >
                            <Icon.Heart size={15} />
                          </Link>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <Link to={routes.categories}>
                          <span className="item-cat">Car Wash</span>
                        </Link>
                        <h3 className="title">
                          <Link to={routes.serviceDetails1}>
                            Car Repair Services
                          </Link>
                        </h3>
                        <p>
                          <Icon.MapPin className="react-feather-custom" />
                          Maryland City, MD, USA
                        </p>
                        <div className="service-pro-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            alt="user"
                          />
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
                      <Link to={routes.booking1} className="btn btn-secondary">
                        Apply Offer
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
                        <div
                          className="fav-item"
                          key={2}
                          onClick={() => handleItemClick(2)}
                        >
                          <Link
                            to="#"
                            className={`fav-icon ${
                              selectedItems[2] ? 'selected' : ''
                            }`}
                          >
                            <Icon.Heart size={15} />
                          </Link>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <Link to={routes.categories}>
                          <span className="item-cat">Construction</span>
                        </Link>
                        <h3 className="title">
                          <Link to={routes.serviceDetails1}>
                            Toughened Glass Fitting Services
                          </Link>
                        </h3>
                        <p>
                          <Icon.MapPin className="react-feather-custom" />
                          New Jersey, USA
                        </p>
                        <div className="service-pro-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="User"
                          />
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
                      <Link to={routes.booking1} className="btn btn-secondary">
                        Apply Offer
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
                        <div
                          className="fav-item"
                          key={3}
                          onClick={() => handleItemClick(3)}
                        >
                          <Link
                            to="#"
                            className={`fav-icon ${
                              selectedItems[3] ? 'selected' : ''
                            }`}
                          >
                            <Icon.Heart size={15} />
                          </Link>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <Link to={routes.categories}>
                          <span className="item-cat">Computer</span>
                        </Link>
                        <h3 className="title">
                          <Link to={routes.serviceDetails1}>
                            Computer &amp; Server AMC Service
                          </Link>
                        </h3>
                        <p>
                          <Icon.MapPin className="react-feather-custom" />
                          California, USA
                        </p>
                        <div className="service-pro-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="User"
                          />
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
                      <Link to={routes.booking1} className="btn btn-secondary">
                        Apply Offer
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
                        <div
                          className="fav-item"
                          key={4}
                          onClick={() => handleItemClick(4)}
                        >
                          <Link
                            to="#"
                            className={`fav-icon ${
                              selectedItems[4] ? 'selected' : ''
                            }`}
                          >
                            <Icon.Heart size={15} />
                          </Link>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <Link to={routes.categories}>
                          <span className="item-cat">Interior</span>
                        </Link>
                        <h3 className="title">
                          <Link to={routes.serviceDetails1}>
                            Interior Designing
                          </Link>
                        </h3>
                        <p>
                          <Icon.MapPin className="react-feather-custom" />
                          Maryland, USA
                        </p>
                        <div className="service-pro-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="User"
                          />
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
                      <Link to={routes.booking1} className="btn btn-secondary">
                        Apply Offer
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
                        <div
                          className="fav-item"
                          key={5}
                          onClick={() => handleItemClick(5)}
                        >
                          <Link
                            to="#"
                            className={`fav-icon ${
                              selectedItems[5] ? 'selected' : ''
                            }`}
                          >
                            <Icon.Heart size={15} />
                          </Link>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <Link to={routes.categories}>
                          <span className="item-cat">Cleaning</span>
                        </Link>
                        <h3 className="title">
                          <Link to={routes.serviceDetails1}>
                            House Cleaning Services
                          </Link>
                        </h3>
                        <p>
                          <Icon.MapPin className="react-feather-custom" />
                          Georgia
                        </p>
                        <div className="service-pro-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-09.jpg"
                            alt="User"
                          />
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
                      <Link to={routes.booking1} className="btn btn-secondary">
                        Apply Offer
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
                        <div
                          className="fav-item"
                          key={1}
                          onClick={() => handleItemClick(1)}
                        >
                          <Link
                            to="#"
                            className={`fav-icon ${
                              selectedItems[1] ? 'selected' : ''
                            }`}
                          >
                            <Icon.Heart size={15} />
                          </Link>
                        </div>
                      </div>
                      <div className="service-cont-info">
                        <Link to={routes.categories}>
                          <span className="item-cat">Construction</span>
                        </Link>
                        <h3 className="title">
                          <Link to={routes.serviceDetails1}>
                            Building Construction Services
                          </Link>
                        </h3>
                        <p>
                          <Icon.MapPin className="react-feather-custom" />
                          Montana, USA
                        </p>
                        <div className="service-pro-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-09.jpg"
                            alt="User"
                          />
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
                      <Link to={routes.booking1} className="btn btn-secondary">
                        Apply Offer
                      </Link>
                    </div>
                  </div>
                  {/* /Service List */}
                </div>
              </div>
              {/* Pagination */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="blog-pagination rev-page">
                    <nav>
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <Link
                            className="page-link page-prev"
                            to="#"
                            tabIndex={-1}
                          >
                            <i className="fa-solid fa-arrow-left me-1" /> PREV
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link className="page-link" to="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link
                            className="page-link page-next"
                            to="#"
                          >
                            NEXT <i className="fa-solid fa-arrow-right ms-1" />
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/* /Pagination */}
            </div>
            {/* /Service */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
