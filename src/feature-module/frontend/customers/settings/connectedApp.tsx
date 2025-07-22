import React from 'react'
import CustomerSideBar from '../common/sidebar'
import BreadCrumb from '../../common/breadcrumb/breadCrumb'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'

const CustomerConnectedApp = () => {
  return (
    <>
    <BreadCrumb title="Settings" item1="Customer" item2="Settings" />

    <div className="page-wrapper">
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 ">
              <CustomerSideBar />
            </div>
           
            <div className="col-xl-9 col-lg-8">
                <h4 className="mb-4">Connected Apps</h4>
                <div className="row">
                    <div className="col-xl-4">
                    <div className="card">
                        <div className="card-body">
                        <div className="d-flex justify-content-between border-bottom mb-3">
                            <span className="app-icon bg-light rounded-circle me-2  d-flex justify-content-center align-items-center flex-shrink-0">
                            <ImageWithBasePath
                                src="assets/img/icons/google-icon.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <div>
                            <h6 className="fs-16 mb-1">Google Calendar</h6>
                            <p className="fs-12 mb-3">
                                Simplifies scheduling and keeps track of your events and
                                appointments.
                            </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="badge bg-success-transparent">connected</span>
                            <div className="form-check form-switch ms-3">
                            <input
                                className="form-check-input input-1"
                                type="checkbox"
                                defaultChecked
                            />
                            </div>
                        </div>
                        </div>
                    </div>
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

export default CustomerConnectedApp