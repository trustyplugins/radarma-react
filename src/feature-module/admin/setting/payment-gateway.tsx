import React from 'react'
import { Link } from 'react-router-dom'
import * as Icon from 'react-feather';
import SettingsSidebar from '../common/settingssidebar';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../core/data/routes/all_routes';
import PaymentGateWayModal from '../common/modals/payment-gateway-modal';

const routes = all_routes;


const PaymentGateway = () => {
    return (
        <>
            <div className="page-wrapper page-settings">
                <SettingsSidebar/>
                
                <div className="content w-100">
                    <div className="content-page-header">
                        <h5>Payment Gateways</h5>
                    </div>
                    <div className="row ">
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/img/company/paypal.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/stripe.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/mercoda.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/razorpay.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/pay.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/paystack.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/cod.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/bank-transfer.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link to={routes.paymentSettings} className="ms-3 me-0">
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/midtrans.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/flutterwave.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/checkout.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/payu.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="nav-menus location-set">
                                <ImageWithBasePath src="assets/admin/img/company/paytm.png" alt="img" />
                                <div className="settings-view">
                                    <div className="active-switch">
                                        <label className="switch">
                                            <input type="checkbox" defaultChecked={true} />
                                            <span className="sliders round" />
                                        </label>
                                    </div>
                                    <Link
                                        to="#"
                                        className="ms-3 me-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#paypal-config"
                                    >
                                        <Icon.Settings className="react-feather-custom me-2"></Icon.Settings>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PaymentGateWayModal/>
            </div>

        </>
    )
}

export default PaymentGateway
