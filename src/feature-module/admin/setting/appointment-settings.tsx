import React from 'react'
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import SettingsSidebar from '../common/settingssidebar';
const AppointmentSettings = () => {
  return (

    <div className="page-wrapper ">
      <SettingsSidebar />
      <div className="row">
        <div className="content-table">
          <div className="col-lg-12">
            <div className="content-page-header content-space">
              <h5>Appointment Settings</h5>
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
                        <span><ImageWithBasePath src="assets/admin/img/icons/service-icon-05.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Appointment time intervals</h5>
                          <h6>(30 Mins,)</h6>
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
                        <span><ImageWithBasePath src="assets/admin/img/icons/service-icon-13.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Multiple booking for same time slot</h5>
                          <h6>Time Slot</h6>
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
                        <span><ImageWithBasePath src="assets/admin/img/icons/service-icon-14.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Appointment auto confirm</h5>
                          <h6>Set Auto Confirm</h6>
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
                        <span><ImageWithBasePath src="assets/admin/img/icons/service-icon-09.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Minimum advance booking time</h5>
                          <h6>(1 hours to 10 days)</h6>
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
                        <span><ImageWithBasePath src="assets/admin/img/icons/service-icon-05.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Maximum advance booking time</h5>
                          <h6>(1 Month to 5 years)</h6>
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
                        <span><ImageWithBasePath src="assets/admin/img/icons/service-icon-10.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Cancellation time before appointment scheduled</h5>
                          <h6>(1 hour to 12 hours, 12 hours, 24 hours, 36 hours, 48 hours )</h6>
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
                        <span><ImageWithBasePath src="assets/admin/img/icons/service-icon-11.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Rescheduling time before appointment scheduled</h5>
                          <h6>(1 hours to 12 hours)</h6>
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
                <div className="location-set mb-0">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="service-detail-blk">
                        <span><ImageWithBasePath src="assets/admin/img/icons/service-icon-12.svg" alt="Icon" /></span>
                        <div className="location-setcontent">
                          <h5>Guest checkout for service booking</h5>
                          <h6>based on guest checkout </h6>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentSettings