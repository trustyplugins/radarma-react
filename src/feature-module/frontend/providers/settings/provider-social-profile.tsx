import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

const ProviderSocialProfile = () => {
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const [selectedValue4, setSelectedValue4] = useState(null);
  const [selectedValue5, setSelectedValue5] = useState(null);
  const [selectedValue6, setSelectedValue6] = useState(null);
  const [selectedValue7, setSelectedValue7] = useState(null);
  const [selectedValue8, setSelectedValue8] = useState(null);
  const [selectedValue9, setSelectedValue9] = useState(null);
  const [selectedValue10, setSelectedValue10] = useState(null);

  const value1 = [{ name: 'Facebook' }, { name: 'Instagram' }];
  const value2 = [{ name: 'Instagram' }, { name: 'Facebook' }];
  const value3 = [{ name: 'Youtube' }, { name: 'Facebook' }];
  const value4 = [{ name: 'Twitter' }, { name: 'Facebook' }];
  const value5 = [{ name: 'Linkedin' }, { name: 'Facebook' }];
  const value6 = [{ name: 'www.facebook.com' }, { name: 'www.instagram.com' }];

  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
            <h5>Social Profiles</h5>
          </div>
        </div>
        {/* Social Profiles */}
        <div className="row">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 col-sm-12">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <Dropdown
                          value={selectedValue1}
                          onChange={(e) => setSelectedValue1(e.value)}
                          options={value1}
                          optionLabel="name"
                          placeholder="Facebook"
                          className="select w-100"
                        />
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-sm-12">
                <div className="mb-3">
                  <label className="form-label">URL</label>
                  <Dropdown
                          value={selectedValue6}
                          onChange={(e) => setSelectedValue6(e.value)}
                          options={value6}
                          optionLabel="name"
                          placeholder="Facebook"
                          className="select w-100"
                        />
                </div>
              </div>
              <div className="col-xl-1 col-lg-2 col-sm-12">
                <label>&nbsp;</label>
                <div className=" d-flex align-items-center form-check form-switch mb-3">
                  <input
                    type="checkbox"
                    id="status-1"
                    className="form-check-input"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 col-sm-12">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <Dropdown
                          value={selectedValue2}
                          onChange={(e) => setSelectedValue2(e.value)}
                          options={value2}
                          optionLabel="name"
                          placeholder="Instagram"
                          className="select w-100"
                        />
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-sm-12">
                <div className="mb-3">
                  <label className="form-label">URL</label>
                  <Dropdown
                          value={selectedValue7}
                          onChange={(e) => setSelectedValue7(e.value)}
                          options={value6}
                          optionLabel="name"
                          placeholder="Facebook"
                          className="select w-100"
                        />
                </div>
              </div>
              <div className="col-xl-1 col-lg-2 col-sm-12">
                <label>&nbsp;</label>
                <div className=" d-flex align-items-center form-check form-switch mb-3">
                  <input
                    type="checkbox"
                    id="status-two"
                    className="form-check-input"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 col-sm-12">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <Dropdown
                          value={selectedValue3}
                          onChange={(e) => setSelectedValue3(e.value)}
                          options={value3}
                          optionLabel="name"
                          placeholder="Youtube"
                          className="select w-100"
                        />
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-sm-12">
                <div className="mb-3">
                  <label className="form-label">URL</label>
                  <Dropdown
                          value={selectedValue8}
                          onChange={(e) => setSelectedValue8(e.value)}
                          options={value6}
                          optionLabel="name"
                          placeholder="Facebook"
                          className="select w-100"
                        />
                </div>
              </div>
              <div className="col-xl-1 col-lg-2 col-sm-12">
                <label>&nbsp;</label>
                <div className=" d-flex align-items-center form-check form-switch mb-3">
                  <input
                    type="checkbox"
                    id="status-3"
                    className="form-check-input"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 col-sm-12">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <Dropdown
                          value={selectedValue4}
                          onChange={(e) => setSelectedValue4(e.value)}
                          options={value4}
                          optionLabel="name"
                          placeholder="Twitter"
                          className="select w-100"
                        />
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-sm-12">
                <div className="mb-3">
                  <label className="form-label">URL</label>
                  <Dropdown
                          value={selectedValue9}
                          onChange={(e) => setSelectedValue9(e.value)}
                          options={value6}
                          optionLabel="name"
                          placeholder="Facebook"
                          className="select w-100"
                        />
                </div>
              </div>
              <div className="col-xl-1 col-lg-2 col-sm-12">
                <label>&nbsp;</label>
                <div className=" d-flex align-items-center form-check form-switch mb-3">
                  <input
                    type="checkbox"
                    id="status-4"
                    className="form-check-input"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 col-sm-12">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <Dropdown
                          value={selectedValue5}
                          onChange={(e) => setSelectedValue5(e.value)}
                          options={value5}
                          optionLabel="name"
                          placeholder="Twitter"
                          className="select w-100"
                        />
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-sm-12">
                <div className="mb-3">
                  <label className="form-label">URL</label>
                  <Dropdown
                          value={selectedValue10}
                          onChange={(e) => setSelectedValue10(e.value)}
                          options={value6}
                          optionLabel="name"
                          placeholder="Facebook"
                          className="select w-100"
                        />
                </div>
              </div>
              <div className="col-xl-1 col-lg-2 col-sm-12">
                <label>&nbsp;</label>
                <div className=" d-flex align-items-center form-check form-switch mb-3">
                  <input
                    type="checkbox"
                    id="status-5"
                    className="form-check-input"
                  />
                </div>
              </div>
            </div>
            <div className="acc-submit d-flex justify-content-end">
              <Link to="#" className="btn btn-light me-3">
                Cancel
              </Link>
              <Link to="#" className="btn btn-dark">
                Save Changes
              </Link>
            </div>
          </div>
        </div>
        {/* /Social Profiles */}
      </div>
    </div>
    {/* /Page Wrapper */}
  </>
  
  );
};

export default ProviderSocialProfile;
