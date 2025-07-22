import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { all_routes } from '../../../core/data/routes/all_routes';

const AddHome = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const value = [{ name: 'ASC' }, { name: 'BSC' }];
  const value2 = [{ name: '10' }, { name: '11' }];
  const value3 = [{ name: '10' }, { name: '11' }];
  const Routes = all_routes;
  return (
    <div className="page-wrapper custom-home">
      <div className="content">
        <form>
          <div className="row">
            <div className="col-lg-7 col-sm-12 m-auto">
              <div className="content-page-header">
                <h5 className="mb-2">Home Page</h5>
                <div className="form-group mb-0">
                  <p className="contentpage">
                    You are editing &ldquo;English&ldquo; version
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-groupheads d-flex d-flex justify-content-between">
                        <h2>Banner Settings</h2>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="World's Largest Marketplace!!!!"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Content<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search From 100 Awesome Verified Ads!"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-0">
                        <label>Image</label>
                      </div>
                      <div className="form-uploads mb-4">
                        <div className="form-uploads-path">
                          <ImageWithBasePath
                            src="assets/img/icons/upload.svg"
                            alt="img"
                          />
                          <div className="file-browse">
                            <h6>Drag &amp; drop image or </h6>
                            <div className="file-browse-path">
                              <input type="file" />
                              <Link to="#"> Browse</Link>
                            </div>
                          </div>
                          <h5>Supported formates: JPEG, PNG</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-groupheads d-flex d-flex justify-content-between">
                        <h2>Main Search</h2>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-groupheads d-flex d-flex justify-content-between">
                        <h2>Popular Searches</h2>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Popular Searches Label Name
                          <span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Popular Searches"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-path path-update">
                        <Link
                          to={Routes.pageList}
                          className="btn btn-primary me-3"
                        >
                          {' '}
                          Update
                        </Link>
                        <Link to="#" className="btn btn-cancel ">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-groupheads d-flex d-flex justify-content-between">
                        <h2>Featured Categories</h2>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Featured Categories"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Content<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="What Do You Need To Find?"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Categories
                          <span className="text-label"> (English)</span>
                        </label>
                        {/* <select className="select">
                        <option>Select Categories</option>
                        <option>ASC</option>
                      </select> */}
                        <Dropdown
                          value={selectedValue}
                          onChange={(e) => setSelectedValue(e.value)}
                          options={value}
                          optionLabel="name"
                          placeholder="Select Categories"
                          className="select "
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-path path-update">
                        <Link
                          to={Routes.pageList}
                          className="btn btn-primary me-3"
                        >
                          {' '}
                          Update
                        </Link>
                        <Link to="#" className="btn btn-cancel ">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-groupheads d-flex d-flex justify-content-between">
                        <h2>Featured Services</h2>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Featured Services"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Content<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Explore the greates our services. You won’t be disappointed"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Number of service
                          <span className="text-label">
                            {' '}
                            ( Min 6 to Max 20 only )
                          </span>
                        </label>
                        <Dropdown
                          value={selectedValue2}
                          onChange={(e) => setSelectedValue2(e.value)}
                          options={value2}
                          optionLabel="name"
                          placeholder="10"
                          className="select "
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-path path-update">
                        <Link
                          to={Routes.pageList}
                          className="btn btn-primary me-3"
                        >
                          {' '}
                          Update
                        </Link>
                        <Link to="#" className="btn btn-cancel ">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-groupheads d-flex d-flex justify-content-between">
                        <h2>Top Providers</h2>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Top Providers"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Content<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Meet Our Experts"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-path path-update">
                        <Link
                          to={Routes.pageList}
                          className="btn btn-primary me-3"
                        >
                          {' '}
                          Update
                        </Link>
                        <Link to="#" className="btn btn-cancel ">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-groupheads d-flex d-flex justify-content-between">
                        <h2>We Are Offering 14 Days Free Trial</h2>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="We Are Offering 14 Days Free Trial"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore minim veniam, quis nostrud exercitation ullamco magna aliq."
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Button</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Try 14 Days Free Trial"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-path path-update">
                        <Link
                          to={Routes.pageList}
                          className="btn btn-primary me-3"
                        >
                          {' '}
                          Update
                        </Link>
                        <Link to="#" className="btn btn-cancel ">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-groupheads d-flex d-flex justify-content-between">
                        <h2>How It Works</h2>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="How It Works"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Content<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Aliquam lorem ante, dapibus in, viverra quis"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-groupheads mb-3">
                        <h2>Step 1</h2>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Amazing Places"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Content<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Aliquam Lorem Ante, Dapibus In, Viverra Quis, Feugiat Phasellus Viverra Nulla Ut Metus Varius Laoree"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-0">
                        <label>Image</label>
                      </div>
                      <div className="form-uploads mb-4">
                        <div className="form-uploads-path">
                          <div className="file-browse">
                            <h6>Drag &amp; drop image or </h6>
                            <div className="file-browse-path">
                              <input type="file" />
                              <Link to="#"> Browse</Link>
                            </div>
                          </div>
                          <h5>Supported formates: JPEG, PNG</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-groupheads mb-3">
                        <h2>Step 2</h2>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Find What You Want"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Content<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Aliquam Lorem Ante, Dapibus In, Viverra Quis, Feugiat Phasellus Viverra Nulla Ut Metus Varius Laoree"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-0">
                        <label>Image</label>
                      </div>
                      <div className="form-uploads mb-4">
                        <div className="form-uploads-path">
                          <div className="file-browse">
                            <h6>Drag &amp; drop image or </h6>
                            <div className="file-browse-path">
                              <input type="file" />
                              <Link to="#"> Browse</Link>
                            </div>
                          </div>
                          <h5>Supported formates: JPEG, PNG</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-groupheads mb-3">
                        <h2>Step 3</h2>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Choose What To Do"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Content<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Aliquam Lorem Ante, Dapibus In, Viverra Quis, Feugiat Phasellus Viverra Nulla Ut Metus Varius Laoree"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-0">
                        <label>Image</label>
                      </div>
                      <div className="form-uploads mb-4">
                        <div className="form-uploads-path">
                          <div className="file-browse">
                            <h6>Drag &amp; drop image or </h6>
                            <div className="file-browse-path">
                              <input type="file" />
                              <Link to="#"> Browse</Link>
                            </div>
                          </div>
                          <h5>Supported formates: JPEG, PNG</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-path path-update">
                        <Link
                          to={Routes.pageList}
                          className="btn btn-primary me-3"
                        >
                          {' '}
                          Update
                        </Link>
                        <Link to="#" className="btn btn-cancel ">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-groupheads d-flex d-flex justify-content-between">
                        <h2>Most Popular Services</h2>
                        <div className="active-switch">
                          <label className="switch">
                            <input type="checkbox" defaultChecked />
                            <span className="sliders round" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Title<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Featured Services"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Content<span className="text-label"> (English)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Explore the greates our services. You won’t be disappointed"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>
                          Number of service
                          <span className="text-label">
                            {' '}
                            ( Min 6 to Max 20 only )
                          </span>
                        </label>
                        <Dropdown
                          value={selectedValue3}
                          onChange={(e) => setSelectedValue3(e.value)}
                          options={value3}
                          optionLabel="name"
                          placeholder="10"
                          className="select "
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btn-path path-update">
                        <Link
                          to={Routes.pageList}
                          className="btn btn-primary me-3"
                        >
                          {' '}
                          Update
                        </Link>
                        <Link to="#" className="btn btn-cancel ">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHome;
