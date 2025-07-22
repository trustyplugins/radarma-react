import React from 'react';
import { Link } from 'react-router-dom';
import CustomDropdown from '../../common/dropdown/commonSelect';
import { documentOption } from '../../../../core/data/json/dropDownData';


const Verification = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="row">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
            <h5>Profile Verification</h5>
          </div>
        </div>
        {/* Security Settings */}
        <div className="row profile-verification">
          <div className="col-xl-4 col-md-4 d-flex mb-3">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="verification-body">
                  <div className="icon">
                    <span className="rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ti ti-phone text-dark" />
                    </span>
                  </div>
                  <div className="verification-content">
                    <h6 className="fs-16 mb-1">Phone Number Verification</h6>
                    <p className="fs-14 text-gray mb-0">
                      Authentication for Login, OTP, Settings, transfers
                    </p>
                  </div>
                </div>
                <div className="verification-footer">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="d-flex">
                        <span className="badge badge-soft-danger d-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          Not Verified
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-dark btn-sm me-2"
                        >
                          Verify
                        </Link>
                        <Link to="#">
                          <span>
                            <i className="ti ti-trash" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 d-flex mb-3">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="verification-body">
                  <div className="icon">
                    <span className="rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ti ti-mail text-dark" />
                    </span>
                  </div>
                  <div className="verification-content">
                    <h6 className="fs-16 mb-1">Email Address Verification</h6>
                    <p className="fs-14 text-gray mb-0">
                      For account Login &amp; Retrieve of your Account
                    </p>
                  </div>
                </div>
                <div className="verification-footer">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="d-flex">
                        <span className="badge badge-soft-danger d-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          Not Verified
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-dark btn-sm me-2"
                        >
                          Verify
                        </Link>
                        <Link to="#">
                          <span>
                            <i className="ti ti-trash" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 d-flex mb-3">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="verification-body">
                  <div className="icon">
                    <span className="rounded-circle d-flex align-items-center justify-content-center">
                      <i className="ti ti-file text-dark" />
                    </span>
                  </div>
                  <div className="verification-content">
                    <h6 className="fs-16 mb-1">Documentation Verification</h6>
                    <p className="fs-14 text-gray mb-0">
                      You will not able to place order until the real name is
                      confirmed
                    </p>
                  </div>
                </div>
                <div className="verification-footer">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <div className="d-flex">
                        <span className="badge badge-soft-danger d-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          Not Verified
                        </span>
                      </div>
                    </div>
                    <div className="col-md-7 d-flex justify-content-end">
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-dark btn-sm me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#upload-document"
                        >
                          Upload Document
                        </Link>
                        <Link to="#">
                          <span>
                            <i className="ti ti-trash" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Security Settings */}
      </div>
    </div>
    {/* /Page Wrapper */}
    {/* Upload Document */}
    <div
      className="modal fade verification-document"
      id="upload-document"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center justify-content-between  border-0">
            <h5>Document Verification</h5>
            <Link
              to="#"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ti ti-circle-x-filled fs-20" />
            </Link>
          </div>
          <form >
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="pass-input form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Document Type</label>
                    <CustomDropdown
                        options={documentOption}
                        className="select d-flex"
                        placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Document Number</label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="pass-input form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Address</label>
                    <div className="pass-group">
                      <input
                        type="password"
                        className="pass-input form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Upload Document</label>
                    <div className="file-upload drag-file w-100 d-flex align-items-center justify-content-center flex-column mb-2">
                      <span className="upload-img d-block mb-2">
                        <i className="ti ti-upload text-dark" />
                      </span>
                      <p className="mb-0 text-center fs-16 text-dark">
                        Drag or&nbsp;Click here&nbsp;to Upload documents
                      </p>
                      <p className="text-center fs-14">
                        Document file size does not exceed 5MB
                      </p>
                      <input type="file" accept="video/image" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <div className="passport-document">
                      <div className="row w-100">
                        <div className="col-md-10">
                          <div className="d-flex align-items-center">
                            <div className="file-icon me-2">
                              <span>
                                <i className="ti ti-file" />
                              </span>
                            </div>
                            <div>
                              <h6 className="d-flex align-items-center fs-16">
                                Passport_For_Verification.pdf{" "}
                                <i className="ti ti-circle-check-filled text-success ms-1" />
                              </h6>
                              <span className="fs-14 text-gray">1.25 MB</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-end align-items-center">
                          <div className="d-flex justify-content-end">
                            <Link to="#">
                              <span className="d-flex align-items-center">
                                <i className="ti ti-trash text-dark" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <div className="passport-document">
                      <div className="row w-100">
                        <div className="col-md-10">
                          <div className="d-flex align-items-center">
                            <div className="file-icon me-2">
                              <span>
                                <i className="ti ti-file" />
                              </span>
                            </div>
                            <div className="file-progress">
                              <h6 className="d-flex align-items-center fs-16 mb-2">
                                Card_debit.jpg
                                <i className="ti ti-circle-check-filled text-success ms-1" />
                              </h6>
                              <div className="progress progress-xs  flex-grow-1 mb-1">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated bg-primary rounded"
                                  role="progressbar"
                                  style={{ width: "80%" }}
                                  aria-valuenow={80}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-end align-items-center">
                          <div className="d-flex justify-content-end">
                            <Link to="#">
                              <span className="d-flex align-items-center">
                                <i className="ti ti-loader-2 text-dark" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-success fs-14 d-flex align-items-center">
                    <i className="ti ti-circle-check-filled text-success me-1" />
                    &nbsp;Document Uploaded Successfully
                  </span>
                </div>
              </div>
            </div>
          </form>
          <div className="modal-footer">
            <button type="button" className="btn bg-gray" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* /Upload Document */}
  </>
  
  );
};

export default Verification;
