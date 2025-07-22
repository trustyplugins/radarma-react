import React from 'react'
import { Link } from 'react-router-dom'
import SettingsSidebar from '../common/settingssidebar'
import ImageWithBasePath from '../../../core/img/ImageWithBasePath'

const SystemInformation = () => {
    return (
        <>
            <div className="page-wrapper ">
                <div className="content w-100 ps-0 pt-0">
                    <div className="content-sidelink float-start">
                        <div className="content-sidelinkheading">
                            <h6>Settings</h6>
                        </div>
                       <SettingsSidebar/>
                    </div>
                    <div className="row">
                        <div className="content-table">
                            <div className="content-page-header content-page-headersplit">
                                <h5>System Information</h5>
                            </div>
                            <div className="col-lg-10 col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-12">
                                            <div className="form-groupheads">
                                                <h2>Application Environment</h2>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Site/App Name</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Truelysell"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Site Main URL</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="https://truelysell.com"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Site App URL</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="https://app.truelysell.com"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Site App Mode</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Production"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Debug Mode</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Disable"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>HTTPS Connection</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Yes"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Force SSL (HTTPS)</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Enable"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Default Upload Directory</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="/truelysell/public"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Log Directory</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="/logs"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set mb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Cache Directory</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="/framework"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="col-12">
                                            <div className="form-groupheads">
                                                <h2>Server Environment</h2>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Server Info</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Example"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Site/App Name</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Truelysell"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Server Timezone</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <div className="group-image">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue="https://truelysell.com"
                                                                />
                                                                <ImageWithBasePath src="assets/admin/img/icons/info.svg" alt="img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>PHP Version</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="7.4.32"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>cURL version</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="7.85.0, OpenSSL/1.1.1q"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>OpenSSL</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="OpenSSL 1.1.1q 5 Jul 2023 | 269488415"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>MySQL Version</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="5.7.23-23"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>PHP Post Max Size</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="550MB"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Max Upload Size</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="512MB"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>PHP Memory Limit</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="512MB"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>PHP Time Limit</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <div className="group-image">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue={60}
                                                                />
                                                                <ImageWithBasePath src="assets/admin/img/icons/bx-error.svg" alt="img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>PHP Max Input Vars</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <div className="group-image">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    defaultValue={100}
                                                                />
                                                                <ImageWithBasePath src="assets/admin/img/icons/bx-error.svg" alt="img" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>ionCube Loader</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Enabled / 10.4"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Fileinfo Extension</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Enabled"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>Mbstring Extension</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Enabled"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="location-set mb-0">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-5 col-12">
                                                        <div className="location-setcontent">
                                                            <h5>XML Extension</h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-12">
                                                        <div className="form-group mb-0">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Enabled"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-path">
                                  <Link to="#" className="btn btn-cancel me-3">
                                        Cancel
                                    </Link>
                                  <Link to="#" className="btn btn-primary">
                                        Update
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

export default SystemInformation
