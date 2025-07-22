import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react';
import * as Icon from 'react-feather';

const EditOfferModal = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'Computer Repair' }, { name: 'House Cleaning' }];
  const [selectedValue1, setSelectedValue1] = useState(null);
  const value1 = [{ name: 'Computer Repair' }, { name: 'House Cleaning' }];
  return (
    <div>
      <div className="modal fade" id="edit-offer">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Offer</h5>
              <button
                type="button"
                className="btn-close close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <Icon.X className="react-feather-custom me-2" />
              </button>
            </div>
            <div className="modal-body pt-0">
              <form>
                <div className="mb-3">
                  <label className="form-label">Service</label>

                  <Dropdown
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.value)}
                    options={value}
                    optionLabel="name"
                    placeholder="Computer Repair"
                    className="select w-100"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">User Name</label>
                  
                  <Dropdown
                    value={selectedValue1}
                    onChange={(e) => setSelectedValue1(e.value)}
                    options={value1}
                    optionLabel="name"
                    placeholder="John Smith"
                    className="select w-100"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="$80"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Offer</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="25%  "
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Offer Price</label>
                      <input
                        type="text"
                        defaultValue="20%"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label className="form-label">Valid Date</label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOfferModal;
