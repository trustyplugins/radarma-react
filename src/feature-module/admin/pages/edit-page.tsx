import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { all_routes } from '../../../core/data/routes/all_routes';
import { Dropdown } from 'primereact/dropdown';

const Editpage = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [
    { name: 'Languages' },
    { name: 'English' },
    { name: 'Spanish' },
  ];
  const routes = all_routes;
  const navigate = useNavigate();

  const gotopage = () => {
    navigate(routes.pagesList);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <form action="pages-list">
            <div className="row">
              <div className="col-lg-7 col-sm-12 m-auto">
                <div className="content-page-header">
                  <h5 className="mb-2">Edit Pages</h5>
                  <div className="form-group mb-0">
                    <p className="contentpage">
                      You are editing &quot;English&quot; version
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Titles</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="About Us"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Slug
                        <span>
                          (If you leave it empty, it will be generated
                          automatically.)
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="about-us"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Description <span>(Meta Tag)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Description"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Keywords <span>(Meta Tag)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Keywords"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label> language</label>
                      <div className="subselect">
                        {/* <Select
                          options={optionsOne}
                          placeholder="Language"
                          styles={customStyles}
                          isSearchable={false}
                          className="select"
                        /> */}
                        <Dropdown
                          value={selectedValue}
                          onChange={(e) => setSelectedValue(e.value)}
                          options={value}
                          optionLabel="name"
                          placeholder="Languages"
                          className="select w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="split-check-title">
                            <h6>Login Type</h6>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="split-check-box">
                            <ul className="custom-radiosbtn">
                              <li>
                                <label className="radiossets">
                                  Top Menu
                                  <input type="radio" checked name="radio" />
                                  <span className="checkmark-radio" />
                                </label>
                              </li>
                              <li>
                                <label className="radiossets">
                                  Quick Links
                                  <input type="radio" name="radio" />
                                  <span className="checkmark-radio" />
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="split-check-title">
                            <h6>Hide</h6>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="split-check-box">
                            <ul className="custom-radiosbtn">
                              <li>
                                <label className="radiossets">
                                  Show
                                  <input type="radio" checked name="radio1" />
                                  <span className="checkmark-radio" />
                                </label>
                              </li>
                              <li>
                                <label className="radiossets">
                                  Hide
                                  <input type="radio" name="radio1" />
                                  <span className="checkmark-radio" />
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label> Content</label>
                      <textarea
                        className="form-control"
                        defaultValue={'Content'}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn-path">
                      <Link to="#" className="btn btn-cancel me-3">
                        Cancel
                      </Link>
                      <button
                        type="reset"
                        className="btn btn-primary"
                        onClick={gotopage}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editpage;
