import React, { useState } from 'react'
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';

const PayoutRequestModal = () => {

    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'Select any Provider' }, { name: 'John Doe' }, { name: 'Mike Clent' }];
    const paymentMethod = [{ name: 'Select any Payment' }, { name: 'Stripe' }, { name: 'Paypal' }, { name: 'Paypal' }];
    const value1 = [{ name: 'Select Status' }, { name: 'Completed' }, { name: 'Inprogress' }];
    return (
        <>
            {/* Add Payout */}
            <div className="modal fade" id="add-payout">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Payout</h5>
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
                                    <label className="form-label">Provider Name</label>

                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={value}
                                        optionLabel="name"
                                        placeholder="Select any Provider"
                                        className="select w-100"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Withdrawal Method</label>

                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={paymentMethod}
                                        optionLabel="name"
                                        placeholder="Select any Payment"
                                        className="select w-100"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Withdrawal Amount</label>
                                    <input type="text" placeholder="0.0" className="form-control" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Status</label>
                                    <Dropdown
                                        value={selectedValue}
                                        onChange={(e) => setSelectedValue(e.value)}
                                        options={value1}
                                        optionLabel="name"
                                        placeholder="Select Status"
                                        className="select w-100"
                                    />
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
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add Payout */}
        </>
    )
}

export default PayoutRequestModal
