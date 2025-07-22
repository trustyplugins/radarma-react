import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SettingsSidebar from '../common/settingssidebar'
import { Dropdown } from 'primereact/dropdown';

const CurrencySettings = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'Us' }, { name: ' INR' }];
    const value1 = [{ name: 'Automatic' }, { name: ' Manual' }];
    const value2 = [{ name: '1,234,567.89' }, { name: ' 1,244,557.89' }];
    const value3 = [{ name: 'Openexchangerates.org' }, { name: 'Closeexchangerates.org' }];
    return (
        <>
            <div className="page-wrapper page-settings">
                <SettingsSidebar/>
                <div className="content w-100 ps-0 pt-0">
                    <div className="row">
                        <div className="content-table">
                            <div className="content-page-header ">
                                <h5>Currency Settings</h5>
                            </div>
                            <div className="col-12">
                                <div className="location-set">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="location-setcontent">
                                                <h5>Default Currency</h5>
                                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group mb-0">
                                            <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Select State"
                                                    className="select w-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="location-set">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="location-setcontent">
                                                <h5>Thousand Seperator</h5>
                                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group mb-0">
                                            <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value2}
                                                    optionLabel="name"
                                                    placeholder="Select State"
                                                    className="select w-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="location-set">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="location-setcontent">
                                                <h5>Symbol Format</h5>
                                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <ul className="custom-radiosbtn form-group mb-0">
                                                <li>
                                                    <label className="radiossets">
                                                        $100 Left
                                                        <input
                                                            type="radio"
                                                              checked={true}
                                                            name="radio"
                                                        />
                                                        <span className="checkmark-radio" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radiossets">
                                                        $100 right
                                                        <input type="radio" name="radio" />
                                                        <span className="checkmark-radio" />
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="location-set">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="location-setcontent">
                                                <h5>Add Space Between Mony and Currency</h5>
                                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <ul className="custom-radiosbtn form-group mb-0">
                                                <li>
                                                    <label className="radiossets">
                                                        Yes
                                                        <input
                                                            type="radio"
                                                              checked={true}
                                                            name="radios"
                                                        />
                                                        <span className="checkmark-radio" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="radiossets">
                                                        No
                                                        <input type="radio" name="radios" />
                                                        <span className="checkmark-radio" />
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="location-set">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="location-setcontent">
                                                <h5>Currency Converte</h5>
                                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="active-switch toogle-primary">
                                                <label className="switch">
                                                    <input type="checkbox"  />
                                                    <span className="sliders round" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="location-set">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="location-setcontent">
                                                <h5>Exchange Rate</h5>
                                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group mb-0">
                                            <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value1}
                                                    optionLabel="name"
                                                    placeholder="Select State"
                                                    className="select w-100"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="location-set">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-12">
                                            <div className="location-setcontent">
                                                <h5>Currency Convertor API</h5>
                                                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing</h6>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group mb-0">
                                            <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value3}
                                                    optionLabel="name"
                                                    placeholder="Select State"
                                                    className="select w-100"
                                                />
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
                </div>
            </div>
        </>
    )
}

export default CurrencySettings
