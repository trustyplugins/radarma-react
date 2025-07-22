import React from 'react'
import SettingsSidebar from '../common/settingssidebar'
import ImageWithBasePath from '../../../core/img/ImageWithBasePath'

const ServiceSettings = () => {
  return (
    <div className="page-wrapper ">
    <div className="content w-100 ps-0 pt-0">
      <div className="content-sidelink float-start">
        <div className="content-sidelinkheading">
          <h6>Settings</h6>
        </div>
        <SettingsSidebar />
      </div>
      <div className="row">
        <div className="content-table">
          <div className="col-lg-12">
            <div className="content-page-header content-space">
              <h5>Service Details</h5>
              <span>Enable and disable based on your service request or provider</span>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="service-detail-blk">
                        <span><ImageWithBasePath src="assets/img/icons/service-icon-01.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Manual location based search</h5>
                          <h6>Based on search</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 text-end">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="service-detail-blk">
                        <span><ImageWithBasePath src="assets/img/icons/service-icon-02.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Auto approval for services</h5>
                          <h6>Based on service</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 text-end">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="service-detail-blk">
                        <span><ImageWithBasePath src="assets/img/icons/service-icon-03.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Additional services</h5>
                          <h6>Based on service</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 text-end">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="service-detail-blk">
                        <span><ImageWithBasePath src="assets/img/icons/service-icon-04.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Service reviews</h5>
                          <h6>Based on reviews</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 text-end">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="service-detail-blk">
                        <span><ImageWithBasePath src="assets/img/icons/service-icon-05.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Booking option</h5>
                          <h6>Based on options</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 text-end">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="service-detail-blk">
                        <span><ImageWithBasePath src="assets/img/icons/service-icon-06.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Service offered</h5>
                          <h6>What’s included in this service</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 text-end">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="service-detail-blk">
                        <span><ImageWithBasePath src="assets/img/icons/service-icon-07.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Service availability</h5>
                          <h6>What’s included in this service</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 text-end">
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="location-set mb-0">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="service-detail-blk">
                        <span><ImageWithBasePath src="assets/img/icons/service-icon-08.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Provider details like email, phone, provider status</h5>
                          <h6>online/offline</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-12 text-end">
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
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServiceSettings