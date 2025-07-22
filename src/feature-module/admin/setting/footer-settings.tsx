import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SettingsSidebar from '../common/settingssidebar'
import { Dropdown } from 'primereact/dropdown';

const FooterSettings = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const value = [{ name: 'Orderby(ASC)' }, { name: 'ASC' }];


    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content-sidelink">
                    <div className="content-sidelinkheading">
                        <h6>Settings</h6>
                    </div>
                    <SettingsSidebar />
                </div>
                <div className="content w-100">
                    <div className="content-page-header">
                        <h5>Footer Setting</h5>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-groupheads d-flex d-flex justify-content-between">
                                                <h2>Categories Widget</h2>
                                                <div className="active-switch">
                                                    <label className="switch">
                                                        <input type="checkbox" defaultChecked={true} />
                                                        <span className="sliders round" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>
                                                    Title<span className="text-label"> (English)</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Categories"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Category-view</label>
                                                
                                                <Dropdown
                                                    value={selectedValue}
                                                    onChange={(e) => setSelectedValue(e.value)}
                                                    options={value}
                                                    optionLabel="name"
                                                    placeholder="Select"
                                                    className="select w-100"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mb-0">
                                                <label>Category Count</label>
                                                <input type="text" className="form-control" placeholder='4' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-groupheads d-flex d-flex justify-content-between">
                                                <h2>Links Widget</h2>
                                                <div className="active-switch">
                                                    <label className="switch">
                                                        <input type="checkbox" defaultChecked={true} />
                                                        <span className="sliders round" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Quick Links"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-12">
                                                        <h4 className="mb-0">
                                                            About<span>(Max 6 only)</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <h4 className="mb-0">About</h4>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="https://truelysell-testing.dreamguystech.com/about"
                                                        />
                                                    </div>
                                                    <div className="col-lg-1 col-sm-12">
                                                        <Link to="#" className="delete-links">
                                                            <i className="far fa-trash-alt " />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <h4 className="mb-0">Contact Us</h4>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="https://truelysell-testing.dreamguystech.com/contact"
                                                        />
                                                    </div>
                                                    <div className="col-lg-1 col-sm-12">
                                                        <Link to="#" className="delete-links">
                                                            <i className="far fa-trash-alt " />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set mb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <h4 className="mb-0">FAQ</h4>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="https://truelysell-testing.dreamguystech.com/faq"
                                                        />
                                                    </div>
                                                    <div className="col-lg-1 col-sm-12">
                                                        <Link to="#" className="delete-links">
                                                            <i className="far fa-trash-alt " />
                                                        </Link>
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
                                        <div className="col-12">
                                            <div className="form-groupheads d-flex d-flex justify-content-between">
                                                <h2>Contact Widget</h2>
                                                <div className="active-switch">
                                                    <label className="switch">
                                                        <input type="checkbox" defaultChecked={true} />
                                                        <span className="sliders round" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>
                                                    Title<span className="text-label"> (English)</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Contact Us"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="367 Hillcrest Lane, Irvine, California, United States"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="321 546 8764"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group mb-0">
                                                <label>Email</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="truelysell@example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-groupheads d-flex d-flex justify-content-between">
                                                <h2>Social Widget</h2>
                                                <div className="active-switch">
                                                    <label className="switch">
                                                        <input type="checkbox" defaultChecked={true} />
                                                        <span className="sliders round" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>
                                                    Title <span>(English)</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Quick Links"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-12">
                                                        <h4 className="mb-0">
                                                            Links <span>(Max 6 only)</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <h4 className="mb-0">Facebook</h4>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="https://facebook.com"
                                                        />
                                                    </div>
                                                    <div className="col-lg-1 col-sm-12">
                                                        <Link to="#" className="delete-links">
                                                            <i className="far fa-trash-alt " />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <h4 className="mb-0">Twitter</h4>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="https://twitter.com"
                                                        />
                                                    </div>
                                                    <div className="col-lg-1 col-sm-12">
                                                        <Link to="#" className="delete-links">
                                                            <i className="far fa-trash-alt " />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <h4 className="mb-0">Youtube</h4>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="https://youtube.com"
                                                        />
                                                    </div>
                                                    <div className="col-lg-1 col-sm-12">
                                                        <Link to="#" className="delete-links">
                                                            <i className="far fa-trash-alt " />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <h4 className="mb-0">Instagram</h4>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="https://instagram.com"
                                                        />
                                                    </div>
                                                    <div className="col-lg-1 col-sm-12">
                                                        <Link to="#" className="delete-links">
                                                            <i className="far fa-trash-alt " />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set mb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <h4 className="mb-0">Google Plus</h4>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="https://googleplus.com"
                                                        />
                                                    </div>
                                                    <div className="col-lg-1 col-sm-12">
                                                        <Link to="#" className="delete-links">
                                                            <i className="far fa-trash-alt " />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row add-headers">
                                        <div className="col-12">
                                            <div className="form-groupheads d-flex d-flex justify-content-between">
                                                <h2>Copyright</h2>
                                                <div className="active-switch">
                                                    <label className="switch">
                                                        <input type="checkbox" defaultChecked={true} />
                                                        <span className="sliders round" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>
                                                    Page Content <span>(English)</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="@ 2023 Truelysell	"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-12">
                                                        <h4 className="mb-0">
                                                            Footer bottom links <span>(Max 3 only)</span>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <h4 className="mb-0">Privacy</h4>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="https://truelysell.com/privacy"
                                                        />
                                                    </div>
                                                    <div className="col-lg-1 col-sm-12">
                                                        <Link to="#" className="delete-links">
                                                            <i className="far fa-trash-alt " />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 col-sm-6">
                                                        <h4 className="mb-0">Terms &amp; Conditions</h4>
                                                    </div>
                                                    <div className="col-lg-8 col-sm-12">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            defaultValue="https://truelysell.com/terms&conditions"
                                                        />
                                                    </div>
                                                    <div className="col-lg-1 col-sm-12">
                                                        <Link to="#" className="delete-links">
                                                            <i className="far fa-trash-alt " />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <Link
                                                to="#"
                                                className="addnewheader link-sets"
                                            >
                                                <i className="fa fa-plus-circle me-2" aria-hidden="true" />
                                                Add New
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="btn-path">
                                    <Link to="#" className="btn btn-cancel me-3">
                                        Reset
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

        </>
    )
}

export default FooterSettings
