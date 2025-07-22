import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import SettingsSidebar from '../common/settingssidebar';

const Appearance = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'Roboto' }, { name: 'Poppins' }];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTabColorIndex, setActiveTabColorIndex] = useState(0);

  const activateTab = (index: number) => {
    setActiveTabIndex(index);
  };

  const isTabActive = (index: number) => {
    return activeTabIndex === index;
  };
  const activateTabColor = (index: number) => {
    setActiveTabColorIndex(index);
  };
  const isTabActiveColor = (index: number) => {
    return activeTabColorIndex === index;
  };

  return (
    <div className="page-wrapper page-settings">
      <SettingsSidebar />
      <div className="content w-100">
        <div className="content-page-header">
          <h5>Appearance Settings</h5>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-groupheads">
                  <h2>Theme</h2>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div
                  className={`theme-image ${isTabActive(0) ? 'active' : ''}`}
                  onClick={() => activateTab(0)}
                >
                  <div className="theme-image-set">
                    <ImageWithBasePath
                      src="assets/admin/img/img1.jpg"
                      alt="img"
                    />
                    <h2>Theme 1</h2>
                  </div>
                  <div className="theme-image-content">
                    <i className="fa fa-check-circle" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div
                  className={`theme-image ${isTabActive(1) ? 'active' : ''}`}
                  onClick={() => activateTab(1)}
                >
                  <div className="theme-image-set">
                    <ImageWithBasePath
                      src="assets/admin/img/img2.jpg"
                      alt="img"
                    />
                    <h2>Theme 2</h2>
                  </div>
                  <div className="theme-image-content">
                    <i className="fa fa-check-circle" aria-hidden="true" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div
                  className={`theme-image ${isTabActive(2) ? 'active' : ''}`}
                  onClick={() => activateTab(2)}
                >
                  <div className="theme-image-set">
                    <ImageWithBasePath
                      src="assets/admin/img/img3.jpg"
                      alt="img"
                    />
                    <h2>Theme 3</h2>
                  </div>
                  <div className="theme-image-content">
                    <i className="fa fa-check-circle" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group-set">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                      <h4>Font Family</h4>
                      <h5>Choose your font style</h5>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <Dropdown
                        value={selectedValue}
                        onChange={(e) => setSelectedValue(e.value)}
                        options={value}
                        optionLabel="name"
                        placeholder="Roboto"
                        className="select w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group-set">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 mb-3 mb-sm-0">
                      <h4>Accent color</h4>
                      <h5>Choose your theme color</h5>
                    </div>
                    <div className="col-lg-9 col-sm-6">
                      <div className="themecolor">
                        <ul>
                          <li>
                            <span
                              className={`themecolorset defaultcolor ${
                                isTabActiveColor(0) ? 'active' : ''
                              }`}
                              onClick={() => activateTabColor(0)}
                            />
                          </li>
                          <li>
                            <span
                              className={`themecolorset theme-greens ${
                                isTabActiveColor(1) ? 'active' : ''
                              }`}
                              onClick={() => activateTabColor(1)}
                            />
                          </li>
                          <li>
                            <span
                              className={`themecolorset theme-viloets ${
                                isTabActiveColor(3) ? 'active' : ''
                              }`}
                              onClick={() => activateTabColor(3)}
                            />
                          </li>
                          <li>
                            <span
                              className={`themecolorset theme-orange ${
                                isTabActiveColor(4) ? 'active' : ''
                              }`}
                              onClick={() => activateTabColor(4)}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-grouphead">
                  <h2>Navbar</h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group-set">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                      <h4 className="mb-0">Navbar 1</h4>
                    </div>
                    <div className="col-lg-9 col-sm-12">
                      <div className="nav-bar-image">
                        <ImageWithBasePath
                          src="assets/admin/img/nav1.jpg"
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group-set">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-sm-6 mb-3 mb-lg-0">
                      <h4 className="mb-0">Navbar 2</h4>
                    </div>
                    <div className="col-lg-9 col-sm-12">
                      <div className="nav-bar-image">
                        <ImageWithBasePath
                          src="assets/admin/img/nav2.jpg"
                          alt="img"
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

export default Appearance;
