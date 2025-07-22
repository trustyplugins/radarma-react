import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

const WebsiteSettings = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const [selectedValue4, setSelectedValue4] = useState(null);
  const [selectedValue5, setSelectedValue5] = useState(null);
  const [selectedValue6, setSelectedValue6] = useState(null);
  const [selectedValue7, setSelectedValue7] = useState(null);
  const [selectedValue8, setSelectedValue8] = useState(null);
  const value = [{ name: 'Search' }, { name: 'Search view' }];
  const value2 = [{ name: 'Recent' }, { name: 'Recent Post' }];
  const value3 = [{ name: 'Categories' }, { name: 'Categories 1' }];
  const value4 = [{ name: 'Services' }, { name: 'Services 1' }];
  const value5 = [{ name: 'Video' }, { name: 'Image' }];
  const value6 = [{ name: 'Pages' }, { name: 'Post' }];
  const value7 = [{ name: 'Text' }, { name: 'Text 1' }];
  const value8 = [{ name: 'Calendar' }, { name: 'Calendar 1' }];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-page-header content-page-headersplit">
              <h5>Widgets</h5>
              <div className="list-btn">
                <ul>
                  <li>
                    <Link to="#" className="btn btn-primary">
                      Manage with Live Preview
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-sm-12">
                <div className="form-groupheads">
                  <h2>Available Widgets</h2>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Text"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Categories"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Custom Menu"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Recent Post"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Pages"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Calendar"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Search"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Recent Comments"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Archives"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Custom HTML"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Video"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Audio"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Meta"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="Tag Cloud"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-white"
                        defaultValue="RSS"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="menu-set">
                  <div className="menu-setheader">
                    <Link
                      data-bs-toggle="collapse"
                      to="#customs"
                      role="button"
                      aria-expanded="false"
                    >
                      Footer Widgets
                      <i
                        className="fa fa-angle-down float-end"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                  <div
                    className="menu-setcontent select-setcontent collapse show"
                    id="customs"
                  >
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Dropdown
                          value={selectedValue}
                          onChange={(e) => setSelectedValue(e.value)}
                          options={value}
                          optionLabel="name"
                          placeholder="Search"
                          className="select form-control "
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Dropdown
                          value={selectedValue2}
                          onChange={(e) => setSelectedValue2(e.value)}
                          options={value2}
                          optionLabel="name"
                          placeholder="Recent Post"
                          className="select form-control "
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Dropdown
                          value={selectedValue3}
                          onChange={(e) => setSelectedValue3(e.value)}
                          options={value3}
                          optionLabel="name"
                          placeholder="Categories"
                          className="select form-control "
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Dropdown
                          value={selectedValue4}
                          onChange={(e) => setSelectedValue4(e.value)}
                          options={value4}
                          optionLabel="name"
                          placeholder="Services"
                          className="select form-control "
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-set">
                  <div className="menu-setheader">
                    <Link
                      data-bs-toggle="collapse"
                      to="#widgets"
                      role="button"
                      aria-expanded="false"
                    >
                      Sidebar Widgets
                      <i
                        className="fa fa-angle-down float-end"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                  <div
                    className="menu-setcontent select-setcontent collapse show"
                    id="widgets"
                  >
                    <div className="col-lg-12">
                      <div className="form-group filter-dropdown">
                        <Dropdown
                          value={selectedValue5}
                          onChange={(e) => setSelectedValue5(e.value)}
                          options={value5}
                          optionLabel="name"
                          placeholder="Video"
                          className="select form-control "
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Dropdown
                          value={selectedValue6}
                          onChange={(e) => setSelectedValue6(e.value)}
                          options={value6}
                          optionLabel="name"
                          placeholder="Pages"
                          className="select form-control "
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Dropdown
                          value={selectedValue7}
                          onChange={(e) => setSelectedValue7(e.value)}
                          options={value7}
                          optionLabel="name"
                          placeholder="Text"
                          className="select form-control "
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <Dropdown
                          value={selectedValue8}
                          onChange={(e) => setSelectedValue8(e.value)}
                          options={value8}
                          optionLabel="name"
                          placeholder="Calendar"
                          className="select form-control "
                        />
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

export default WebsiteSettings;
