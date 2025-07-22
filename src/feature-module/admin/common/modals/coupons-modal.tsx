import React, { useState } from 'react'
import * as Icon from 'react-feather';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';

const CouponsModal = () => {

    // State to manage the selected date
    const [selectedDate, setSelectedDate] = useState(null);

    // Function to handle date selection
    const handleDateSelect = (e) => {
        setSelectedDate(e.value);
    };

    const [selectedValue7, setselectedValue7] = useState([
        { name: 'House Cleaning' },
        { name: 'Paintinf' },
      ]);

    const handleChange2 = (e) => {
        setselectedValue7(e.value);
      }; 

      const value7 = [
        { name: 'House Cleaning' },
        { name: 'Paintinf' },
      ];

    return (
        <>
            <>
                {/* Edit Coupon */}
                <div className="modal fade" id="edit-coupon">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Coupon</h5>
                                <button
                                    type="button"
                                    className="btn-close close-modal"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <Icon.X className="react-feather-custom"></Icon.X>
                                </button>
                            </div>
                            <div className="modal-body pt-0">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Coupon</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Coupon"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Type</label>
                                        <select className="form-control select">
                                            <option>English</option>
                                            <option>French</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Discount</label>
                                        <input type="text" className="form-control" defaultValue="5%" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Limit</label>
                                        <input type="number" defaultValue={1} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Used</label>
                                        <input type="number" defaultValue={1} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Valid Date</label>
                                        <Calendar
                                            id="date"
                                            value={selectedDate}
                                            onChange={handleDateSelect}
                                            dateFormat="dd/mm/yy" // You can change the date format as needed
                                            showIcon
                                            readOnlyInput
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Services Name</label>
                                        <input
                                            className="input-tags form-control"
                                            type="text"
                                            data-role="tagsinput"
                                            name="specialist"
                                            defaultValue="House Cleaning,Painting"
                                            id="specialist"
                                        />
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
                                    <div className="form-grouphead d-flex justify-content-between mb-4">
                                        <h2>Status</h2>
                                        <div className="active-switch d-flex align-items-center">
                                            <h6>Enable</h6>
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked={true} />
                                                <span className="sliders round" />
                                            </label>
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
                {/* /Edit Coupon */}
            </>

        </>
    )
}

export default CouponsModal
