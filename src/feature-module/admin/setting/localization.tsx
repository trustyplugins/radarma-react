import React, { useState } from 'react';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import { MultiSelect } from 'primereact/multiselect';
import SettingsSidebar from '../common/settingssidebar';

const Localization = () => {
  const [selectedValue1, setselectedValue1] = useState(null);
  const [selectedValue2, setselectedValue2] = useState(null);
  const [selectedValue3, setselectedValue3] = useState(null);
  const [selectedValue4, setselectedValue4] = useState(null);
  const [selectedValue5, setselectedValue5] = useState(null);
  const [selectedValue6, setselectedValue6] = useState(null);


  const value1 = [{ name: '(UTC+09:00) Tokyo' }, { name: '(UTC+11:00) INR' }];
  const value2 = [
    { name: '30 Sep 2023' },
    { name: 'Jun 01 2023' },
    { name: '2023 01 Jun' },
  ];
  const value3 = [{ name: '12:00PM' }, { name: '01:00PM' }];
  const value4 = [{ name: 'USD' }, { name: 'INR' }];
  const value5 = [{ name: 'Allow all countries' }, { name: 'USA' }];
  const value6 = [{ name: 'English' }, { name: 'Chinese' }];
  const value7 = [
    { name: 'USD' },
    { name: 'Rupees' },
    { name: 'QWD' }
  ];
  const value8 = [
    { name: 'USD' },
    { name: 'Rupees' },
    { name: 'QWD' }
  ];

  const [selectedValue7, setselectedValue7] = useState([
    { name: 'USD' },
    { name: 'Rupees' },
  ]);
  const [selectedValue8, setselectedValue8] = useState([
    { name: 'USD' },
    { name: 'Rupees' },
  ]);
  const handleChange2 = (e:any) => {
    setselectedValue7(e.value);
  };
  const handleChange = (e:any) => {
    setselectedValue8(e.value);
  };



  return (
    <div className="page-wrapper page-settings">
      <SettingsSidebar />
      <div className="content w-100">
        <div className="content-page-header">
          <h5>Localization</h5>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-groupheads">
                      <h2>Profile Picture</h2>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="location-setcontent">
                        <h5>Timezone</h5>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group mb-0">
                        <label>Timezone</label>
                        <div className="group-image add-grp-img">
                          <ImageWithBasePath
                            src="assets/img/icons/clock.svg"
                            alt="img"
                          />
                          <Dropdown
                            value={selectedValue1}
                            onChange={(e) => setselectedValue1(e.value)}
                            options={value1}
                            optionLabel="name"
                            placeholder="(UTC+09:00) Tokyo"
                            className="select w-100 localization-select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="location-setcontent">
                        <h5>Date Format</h5>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group mb-0">
                        <label>Date</label>
                        <div className="group-image add-grp-img">
                          <ImageWithBasePath
                            src="assets/img/icons/calendar.svg"
                            alt="img"
                          />
                          <Dropdown
                            value={selectedValue2}
                            onChange={(e) => setselectedValue2(e.value)}
                            options={value2}
                            optionLabel="name"
                            placeholder="30 Sep 2023"
                            className="select w-100 localization-select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set mb-0">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="location-setcontent">
                        <h5>Time Format</h5>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group mb-0">
                        <label>Time</label>
                        <div className="group-image add-grp-img">
                          <ImageWithBasePath
                            src="assets/img/icons/clock.svg"
                            alt="img"
                          />
                          <Dropdown
                            value={selectedValue3}
                            onChange={(e) => setselectedValue3(e.value)}
                            options={value3}
                            optionLabel="name"
                            placeholder="12:00PM"
                            className="select w-100 localization-select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-groupheads">
                      <h2>Currency &amp; Decimal</h2>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="location-setcontent">
                        <h5>Default Currency</h5>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group mb-0">
                        <label>Default Currency</label>
                        <div className="group-image add-grp-img">
                          <ImageWithBasePath
                            src="assets/img/icons/clock.svg"
                            alt="img"
                          />
                          <Dropdown
                            value={selectedValue4}
                            onChange={(e) => setselectedValue4(e.value)}
                            options={value4}
                            optionLabel="name"
                            placeholder="USD"
                            className="select w-100 localization-select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set mb-0">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="location-setcontent">
                        <h5>Choose Currency</h5>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group mb-0">
                        <label>Select Currency</label>
                        <MultiSelect
                          value={selectedValue7}
                          options={value7}
                          optionLabel="name"
                          onChange={handleChange2}
                          display="chip"
                          placeholder="USD"
                          maxSelectedLabels={3}
                          className="select w-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-groupheads">
                      <h2>Country Settings</h2>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="location-setcontent">
                        <h5>Country Restriction</h5>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group mb-0">
                        <label>Country Restriction</label>
                        <div className="group-image add-grp-global">
                          <ImageWithBasePath
                            src="assets/img/icons/global.svg"
                            alt="img"
                          />
                          <Dropdown
                            value={selectedValue5}
                            onChange={(e) => setselectedValue5(e.value)}
                            options={value5}
                            optionLabel="name"
                            placeholder="Allow all countries"
                            className="select w-100 localization-select"
                          />
                        </div>
                        <p>Allow or disallowed the countries</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set mb-0">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="location-setcontent">
                        <h5>Choose Countries</h5>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group mb-0">
                        <label>Select Countries</label>
                        <MultiSelect
                          value={selectedValue8}
                          options={value8}
                          optionLabel="name"
                          onChange={handleChange}
                          display="chip"
                          placeholder="USD"
                          maxSelectedLabels={3}
                          className="select w-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-groupheads">
                      <h2>Language Settings</h2>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="location-setcontent">
                        <h5>Default Language</h5>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group mb-0">
                        <label>Select Language</label>
                        <div className="group-image add-grp-global">
                          <ImageWithBasePath
                            src="assets/img/icons/global.svg"
                            alt="img"
                          />
                          <Dropdown
                            value={selectedValue6}
                            onChange={(e) => setselectedValue6(e.value)}
                            options={value6}
                            optionLabel="name"
                            placeholder="English"
                            className="select w-100 localization-select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set mb-0">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="location-setcontent">
                        <h5>Language Switcher</h5>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="btn-path">
              <Link to="#" className="btn btn-cancel me-3">
                Cancel
              </Link>
              <Link to="#" className="btn btn-primary">
                Save Changes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Localization;
