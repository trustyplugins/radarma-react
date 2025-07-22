import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import * as Icon from 'react-feather';

const ProviderCouponsModal = () => {
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const [selectedValue4, setSelectedValue4] = useState(null);
  const [selectedValue5, setSelectedValue5] = useState(null);

  const [date, setDate] = useState(null);
  const [date2, setDate2] = useState(null);
  const [date3, setDate3] = useState(null);
  const [date4, setDate4] = useState(null);

  const value2 = [
    { name: 'Select Service' },
    { name: 'Car Repair' },
    { name: 'House Cleaning' },
  ];
  const value3 = [{ name: 'Fixed' }, { name: 'Percentage' }];
  const value4 = [{ name: 'Car Repair' }, { name: 'House Cleaning' }];
  const value5 = [{ name: 'Fixed' }, { name: 'Percentage' }];

  return (
    <>
      <div>
        {/* Add Coupon  */}
        <div className="modal modal-lg fade custom-modal" id="add-coupon">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content doctor-profile">
              <div className="modal-header border-bottom-0 justify-content-between">
                <h5 className="modal-title">Add Coupon</h5>
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
                <form>
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="col-form-label">Services</label>
                        <Dropdown
                          value={selectedValue2}
                          onChange={(e) => setSelectedValue2(e.value)}
                          options={value2}
                          optionLabel="name"
                          placeholder="Select Service"
                          className="select w-100"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Coupon Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Coupon Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Code"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Coupon Type</label>
                        <Dropdown
                          value={selectedValue3}
                          onChange={(e) => setSelectedValue3(e.value)}
                          options={value3}
                          optionLabel="name"
                          placeholder="Fixed"
                          className="w-100 select"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Discount</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="10"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-icon cus-profile">
                        <label className="col-form-label">Start Date</label>
                        <Calendar
                          value={date}
                          onChange={(e:any) => setDate(e.value)}
                          placeholder="dd/mm/yyyy"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-icon cus-profile">
                        <label className="col-form-label">End Date</label>
                        <Calendar
                          value={date2}
                          onChange={(e: any) => setDate2(e.value)}
                          placeholder="dd/mm/yyyy"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Company Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label" />
                        <div className="status-toggle blue-tog d-flex align-items-center text-dark fw-500">
                          <input
                            type="checkbox"
                            id="status"
                            className="check"
                            defaultChecked
                          />
                          <label htmlFor="status" className="checktoggle me-2">
                            checkbox
                          </label>
                          Once per customer
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Status</label>
                        <div className="form-group coupon-radio">
                          <label className="custom_radio d-inline-block me-3">
                            <input type="radio" name="status" defaultChecked />
                            <span className="checkmark" /> Active
                          </label>
                          <label className="custom_radio d-inline-block">
                            <input type="radio" name="status" />
                            <span className="checkmark" /> Inactive
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row float-end">
                    <div className="col-md-5 coupon-submit">
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
        {/* /Add Coupon  */}
        {/* Edit Coupon  */}
        <div className="modal modal-lg fade custom-modal" id="edit-coupon">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content doctor-profile">
              <div className="modal-header border-bottom-0 justify-content-between">
                <h5 className="modal-title">Edit Coupon</h5>
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
                <form>
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="col-form-label">Services</label>
                        <Dropdown
                          value={selectedValue4}
                          onChange={(e) => setSelectedValue4(e.value)}
                          options={value4}
                          optionLabel="name"
                          placeholder="Car Repair"
                          className="w-100 select"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Coupon Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Coupon Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Code</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Code"
                          defaultValue={987}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Coupon Type</label>
                        <Dropdown
                          value={selectedValue5}
                          onChange={(e) => setSelectedValue5(e.value)}
                          options={value5}
                          optionLabel="name"
                          placeholder="Fixed"
                          className="w-100 select"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Discount</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="10"
                          defaultValue="10%"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-icon cus-profile">
                        <label className="col-form-label">Start Date</label>
                        <Calendar
                          value={date3}
                          onChange={(e:any
                            ) => setDate3(e.value)}
                          placeholder="dd/mm/yyyy"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group form-icon cus-profile">
                        <label className="col-form-label">End Date</label>
                        <Calendar
                          value={date4}
                          onChange={(e:any) => setDate4(e.value)}
                          placeholder="dd/mm/yyyy"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Company Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Company Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label" />
                        <div className="status-toggle blue-tog d-flex align-items-center text-dark fw-500">
                          <input
                            type="checkbox"
                            id="status-1"
                            className="check"
                            defaultChecked
                          />
                          <label
                            htmlFor="status-1"
                            className="checktoggle me-2"
                          >
                            checkbox
                          </label>
                          Once per customer
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="col-form-label">Status</label>
                        <div className="form-group coupon-radio">
                          <label className="custom_radio d-inline-block me-3">
                            <input type="radio" name="status" defaultChecked />
                            <span className="checkmark" /> Active
                          </label>
                          <label className="custom_radio d-inline-block">
                            <input type="radio" name="status" />
                            <span className="checkmark" /> Inactive
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row float-end">
                    <div className="col-md-5 coupon-submit">
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
        {/* /Edit Coupon  */}
      </div>
    </>
  );
};

export default ProviderCouponsModal;
