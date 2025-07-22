import React from 'react'
import { Link } from 'react-router-dom'
import SettingsSidebar from '../common/settingssidebar'

const CronJob = () => {
    return (
        <>
            <div className="page-wrapper page-settings">
                <SettingsSidebar/>
                <div className="content w-100 ps-0 pt-0">
                    <div className="row">
                        <div className="content-table">
                            <div className="content-page-header ">
                                <h5>Cronjob</h5>
                            </div>
                            <div className="location-set">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-12">
                                        <div className="location-setcontent">
                                            <h5>Cronjob Link</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group mb-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="https://dreamguystech.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="location-set">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-12">
                                        <div className="location-setcontent">
                                            <h5>Execution Intervel</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="form-group mb-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Every 10 Minutes"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">
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
        </>
    )
}

export default CronJob
