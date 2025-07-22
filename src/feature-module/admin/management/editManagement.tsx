import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

const EditManagement = () => {
  const [values] = React.useState();
  const [valuesTwo] = React.useState();
  const [valuesThree] = React.useState();
  values;
  valuesTwo;
  valuesThree;
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValueTwo, setSelectedValueTwo] = useState(null);
  const [selectedValueThree, setSelectedValueThree] = useState(null);

  const value = [{ name: 'English' }, { name: 'German' }];
  const valueTwo = [{ name: 'Category 1' }, { name: 'Category 2' }];
  const valueThree = [{ name: 'English' }, { name: 'Spanish' }];

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-page-header content-page-headersplit">
                <h5>Edit Menu</h5>
                <div className="list-btn">
                  <ul>
                    <li>
                      <div className="filter-selects">
                        <div className="form-group mb-0">
                          <div className="group-image">
                            {/* <ImageWithBasePath
                                src="assets/img/flags/us1.png"
                                alt="img"
                              /> */}

                            <Dropdown
                              value={selectedValue}
                              onChange={(e) => setSelectedValue(e.value)}
                              options={value}
                              optionLabel="name"
                              placeholder="Language"
                              className="select  w-100"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="menu-set">
                    <div className="menu-setheader">
                      <Link
                        data-bs-toggle="collapse"
                        to="#pages"
                        role="button"
                        aria-expanded="false"
                        aria-controls="pages"
                      >
                        Pages
                        <i
                          className="fa fa-angle-down float-end"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                    <div className="menu-setcontent collapse show" id="pages">
                      <div className="filter-checkbox m-0">
                        <ul>
                          <li>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span>
                                <i />
                              </span>
                              <b className="check-content">Home</b>
                            </label>
                          </li>
                          <li>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span>
                                <i />
                              </span>
                              <b className="check-content">About Us</b>
                            </label>
                          </li>
                          <li>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span>
                                <i />
                              </span>
                              <b className="check-content">Blog</b>
                            </label>
                          </li>
                          <li>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span>
                                <i />
                              </span>
                              <b className="check-content">Contact</b>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-set-btn text-end">
                        <Link className="btn btn-primary" to="#">
                          <i className="fa fa-plus me-2" />
                          Add Menu
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="menu-set">
                    <div className="menu-setheader">
                      <Link
                        data-bs-toggle="collapse"
                        to="#service "
                        role="button"
                        aria-expanded="false"
                        aria-controls="pages"
                      >
                        Service Categories
                        <i
                          className="fa fa-angle-down float-end"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                    <div className="menu-setcontent collapse show" id="service">
                      <div className="filter-checkbox m-0">
                        <ul>
                          <li>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span>
                                <i />
                              </span>
                              <b className="check-content">Appliance</b>
                            </label>
                          </li>
                          <li>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span>
                                <i />
                              </span>
                              <b className="check-content">Carpentry</b>
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
                              <b className="check-content">Contact</b>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div className="menu-set-btn text-end">
                        <Link className="btn btn-primary" to="#">
                          <i className="fa fa-plus me-2" />
                          Add Menu
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="menu-set mb-0">
                    <div className="menu-setheader">
                      <Link
                        data-bs-toggle="collapse"
                        to="#custom"
                        role="button"
                        aria-expanded="false"
                        aria-controls="custom"
                      >
                        Custom Link
                        <i
                          className="fa fa-angle-down float-end"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                    <div className="menu-setcontent collapse show" id="custom">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Title</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Title"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>URL</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter URL"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Target</label>

                          <Dropdown
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.value)}
                            options={value}
                            optionLabel="name"
                            placeholder="English"
                            className="select  w-100"
                          />
                        </div>
                      </div>
                      <div className="menu-set-btn text-end">
                        <Link className="btn btn-primary" to="#">
                          <i className="fa fa-plus me-2" />
                          Add Menu
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="menu-set">
                    <div className="menu-setheader">
                      <h5>Custom Link</h5>
                    </div>
                    <div className="menu-setcontent">
                      <div className="menu-setcontent-inner">
                        <div className="menu-innerhead">
                          <Link
                            data-bs-toggle="collapse"
                            to="#home"
                            role="button"
                            aria-expanded="false"
                            aria-controls="home"
                          >
                            Home
                            <span className="float-end">
                              Pages
                              <i
                                className="fa fa-angle-down ms-2"
                                aria-hidden="true"
                              />
                            </span>
                          </Link>
                        </div>
                        <div className="menu-setcontent collapse" id="home">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label>Label</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Home"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>Class</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Class"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>Target</label>

                                <Dropdown
                                  value={selectedValueTwo}
                                  onChange={(e) => setSelectedValueTwo(e.value)}
                                  options={valueTwo}
                                  optionLabel="name"
                                  placeholder="Category 1"
                                  className="select  w-100"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="menu-setcontent pt-0">
                      <div className="menu-setcontent-inner">
                        <div className="menu-innerhead">
                          <Link
                            data-bs-toggle="collapse"
                            to="#faq"
                            role="button"
                            aria-expanded="false"
                            aria-controls="home"
                          >
                            FAQ
                            <span className="float-end">
                              Custom
                              <i
                                className="fa fa-angle-down ms-2"
                                aria-hidden="true"
                              />
                            </span>
                          </Link>
                        </div>
                        <div className="menu-setcontent collapse show" id="faq">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label>Label</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Home"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>Class</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Class"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label>Target</label>

                                <Dropdown
                                  value={selectedValueThree}
                                  onChange={(e) =>
                                    setSelectedValueThree(e.value)
                                  }
                                  options={valueThree}
                                  optionLabel="name"
                                  placeholder="Language"
                                  className="select  w-100"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menu-set-btn text-end">
                        <Link className="btn btn-primary" to="#">
                          <i className="fa fa-plus me-2" />
                          Add Menu
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="menu-set">
                    <div className="menu-setheader">
                      <h5>Menu Setting</h5>
                    </div>
                    <div className="menu-setcontent">
                      <div className="filter-checkbox m-0">
                        <ul className="d-flex justify-content-between">
                          <li className="location-setcontent mb-0">
                            <h5 className="mb-0">Display Location</h5>
                          </li>
                          <li>
                            <label className="checkboxs">
                              <input type="checkbox" />
                              <span>
                                <i />
                              </span>
                              <b className="check-content">Main Navigation</b>
                            </label>
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
    </div>
  );
};

export default EditManagement;
