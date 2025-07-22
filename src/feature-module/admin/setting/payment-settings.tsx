import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather';
import SettingsSidebar from '../common/settingssidebar';
import PaymentSettingModal from '../common/modals/payment-setting-modal';

const PaymentSettings = () => {
    return (
        <>
            <div className="page-wrapper page-settings">
                <SettingsSidebar/>
                <div className="content w-100">
                    <div className="content-page-header content-page-headersplit">
                        <h5>Bank Transfer Account</h5>
                        <div className="list-btn">
                            <ul>
                                <li>
                                    <Link
                                        className="btn btn-primary"
                                        to="/localization"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-account"
                                    >
                                        <i className="fa fa-plus me-2" />
                                        Add Account
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className="transfer-lists">
                                <div className="theme-image-content">
                                    <i className="fa fa-check-circle" aria-hidden="true" />
                                </div>
                                <div className="transfer-liststop">
                                    <div className="transfer-listbank">
                                        <h3>First Bank</h3>
                                        <h4>**** **** 1832</h4>
                                    </div>
                                    <div className="transfer-listsname">
                                        <h5>Holder Name</h5>
                                        <h6>John Smith</h6>
                                    </div>
                                </div>
                                <div className="transfer-listsbottom">
                                    <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-account"
                                    >
                                        <Icon.Edit className="react-feather-custom me-2"></Icon.Edit>

                                        Edit
                                    </Link>
                                    <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete-bank-account"
                                    >
                                        <Icon.Trash2 className="react-feather-custom me-2"></Icon.Trash2>
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="transfer-lists active">
                                <div className="theme-image-content">
                                    <i className="fa fa-check-circle" aria-hidden="true" />
                                </div>
                                <div className="transfer-liststop">
                                    <div className="transfer-listbank">
                                        <h3>Minster Bank</h3>
                                        <h4>**** **** 1832</h4>
                                    </div>
                                    <div className="transfer-listsname">
                                        <h5>Holder Name</h5>
                                        <h6>John Smith</h6>
                                    </div>
                                </div>
                                <div className="transfer-listsbottom">
                                    <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#edit-account"
                                    >
                                        <Icon.Edit className="react-feather-custom me-2"></Icon.Edit>
                                        Edit
                                    </Link>
                                    <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#delete-bank-account"
                                    >
                                        <Icon.Trash2 className="react-feather-custom me-2"></Icon.Trash2>
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PaymentSettingModal/>
            </div>
        </>
    )
}

export default PaymentSettings
