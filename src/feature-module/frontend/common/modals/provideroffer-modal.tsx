import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';

const ProviderOfferModal = () => {
  const category = [{ name: 'Select Type' }, { name: 'Fixed' }];
  const [selectedLanguage, setselectedLanguage] = useState();
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  return (
    <>
      <>
  {/* Add Coupon */}
  <div className="modal fade custom-modal" id="add-coupon">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header border-bottom-0 justify-content-between">
          <h5 className="modal-title">New Offer</h5>
          <button
            type="button"
            className="close-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
           <Icon.X />
          </button>
        </div>
        <div className="modal-body pt-0">
          <form action="#">
            <div className="wallet-add">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="col-form-label">Offer Type</label>
                   
                    <Dropdown
                    value={selectedLanguage}
                    onChange={(e) => setselectedLanguage(e.value)}
                    options={category}
                    optionLabel="name"
                    placeholder="Select Type"
                    className="select service-select"
                  />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">Start Date</label>
                    <div className="form-icon">
                    <Calendar
                        value={date1}
                        onChange={(e:any) => setDate1(e.value)}
                        placeholder="Select Date" 
                       
                      />
                      <span className="cus-icon">
                       <Icon.Calendar className="react-feather-custom me-2"/>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">End Date</label>
                    <div className="form-icon">
                    <Calendar
                        value={date1}
                        onChange={(e:any) => setDate1(e.value)}
                        placeholder="End Date" 
                      />
                      <span className="cus-icon">
                       <Icon.Calendar className="react-feather-custom me-2"/>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-submit text-end">
                <Link
                  to="#"
                  className="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Coupon */}
  {/* Edit Coupon */}
  <div className="modal fade custom-modal" id="edit-coupon">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content doctor-profile">
        <div className="modal-header border-bottom-0 justify-content-between">
          <h5 className="modal-title">Edit Offer</h5>
          <button
            type="button"
            className="close-btn"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
           <Icon.X />
          </button>
        </div>
        <div className="modal-body pt-0">
          <form action="#">
            <div className="wallet-add">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="col-form-label">Offer Type</label>
                    <Dropdown
                    value={selectedLanguage}
                    onChange={(e) => setselectedLanguage(e.value)}
                    options={category}
                    optionLabel="name"
                    placeholder="Select Type"
                    className="select service-select"
                  />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">Start Date</label>
                    <div className="form-icon">
                    <Calendar
                        value={date2}
                        onChange={(e:any) => setDate2(e.value)}
                        placeholder="Select Date" 
                      />
                      <span className="cus-icon">
                       <Icon.Calendar className="react-feather-custom me-2"/>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label">End Date</label>
                    <div className="form-icon">
                    <Calendar
                        value={date1}
                        onChange={(e:any) => setDate1(e.value)}
                        placeholder="End Date" 
                      />
                      <span className="cus-icon">
                       <Icon.Calendar className="react-feather-custom me-2"/>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-submit text-end">
                <Link
                  to="#"
                  className="btn btn-secondary me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Coupon */}
</>

    </>
  )
}

export default ProviderOfferModal
