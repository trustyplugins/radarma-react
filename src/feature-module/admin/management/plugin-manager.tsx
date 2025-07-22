import React from 'react'
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import PluginManagerModal from '../common/modals/plugin-manager-modal';
import { all_routes } from '../../../core/data/routes/all_routes';

const routes = all_routes;
const PluginManager = () => {
    return (

        <><div className="page-wrapper page-settings">
            <div className="content">
                <div className="content-page-header content-page-headersplit">
                    <h5>Plugins Manager</h5>
                    <div className="list-btn">
                        <ul>
                            <li>
                                <Link className="btn btn-primary" to="#"><i className="fa fa-plus me-2" />Add Plugin</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tab-sets mb-4">
                            <div className="tab-contents-sets">
                                <ul>
                                    <li>
                                        <Link to={routes.pluginManager} className="active">Installed Plugins</Link>
                                    </li>
                                    <li>
                                        <Link to={routes.availablePlugins}>Available Plugins</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="service-widget service-fav">
                            <div className="service-img">
                                <Link to={routes.viewServices}>
                                    <ImageWithBasePath className="img-fluid serv-img" alt="Service Image" src="assets/admin/img/services/service-14.jpg" />
                                </Link>
                            </div>
                            <div className="service-content">
                                <div className="serv-info">
                                    <div className="serv-users">
                                        <h6>Paytm<span>Version 1.0.0</span></h6>
                                        <Link className="delete-plugin" to="#" data-bs-toggle="modal" data-bs-target="#delete-item"><Icon.Trash2 className="me-2 react-feather-custom"/>Delete</Link>
                                    </div>
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
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="service-widget service-fav">
                            <div className="service-img">
                                <Link to={routes.viewServices}>
                                    <ImageWithBasePath className="img-fluid serv-img" alt="Service Image" src="assets/admin/img/services/service-15.jpg" />
                                </Link>
                            </div>
                            <div className="service-content">
                                <div className="serv-info">
                                    <div className="serv-users">
                                        <h6>Google Analytics<span>Version 1.0.0</span></h6>
                                        <Link className="delete-plugin" to="#" data-bs-toggle="modal" data-bs-target="#delete-item"><Icon.Trash2 className="me-2 react-feather-custom"/>Delete</Link>
                                    </div>
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
                    <div className="col-lg-4 col-sm-6 col-12">
                        <div className="service-widget service-fav">
                            <div className="service-img">
                                <Link to={routes.viewServices}>
                                    <ImageWithBasePath className="img-fluid serv-img" alt="Service Image" src="assets/admin/img/services/service-16.jpg" />
                                </Link>
                            </div>
                            <div className="service-content">
                                <div className="serv-info">
                                    <div className="serv-users">
                                        <h6>Caldera Forms<span>Version 1.0.0</span></h6>
                                        <Link className="delete-plugin" to="#" data-bs-toggle="modal" data-bs-target="#delete-item"><Icon.Trash2 className="me-2 react-feather-custom"/>Delete</Link>
                                    </div>
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
        </div><PluginManagerModal /></>
      );
}

export default PluginManager