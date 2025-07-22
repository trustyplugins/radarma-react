import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { all_routes } from '../../../../core/data/routes/all_routes';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const Invoice = () => {
  const routes = all_routes;
  return (
    <>
      <>
  {/* Breadcrumb */}
  <BreadCrumb title='Invoice' item1='Customer' item2='Invoice'/>
  {/* /Breadcrumb */}
  <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 mx-auto">
            <div className="breadcrumb">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.index}>Home</Link>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Orders
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    ID 2378910
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row invoice-details">
              <div className="col-md-4">
                <div>
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="text-end">
                  <h5 className="mb-1">Invoice</h5>
                  <div className="d-flex gap-3 justify-content-end">
                    <span className="fs-12 d-flex align-items-center">
                      <i className="ti ti-file-text me-1" />
                      #LL2378910
                    </span>
                    <span className="fs-12 d-flex align-items-center">
                      <i className="ti ti-calendar me-1" />
                      Issue date: 22 Sep 2022
                    </span>
                    <span className="fs-12 d-flex align-items-center">
                      <i className="ti ti-calendar me-1" />
                      Due date: 25 Jan 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Invoice */}
            <div className="invoice-wrap">
              <div className="row">
                <div className="col-md-6">
                  <div className="invoice-address">
                    <h6 className="mb-2">Invoice From:</h6>
                    <ul>
                      <li>Truelysell</li>
                      <li>
                        367 Hillcrest Lane, Irvine, California, United States
                      </li>
                      <li className="mb-0">truelysell@example.com</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="invoice-address d-flex justify-content-end">
                    <div>
                      <h6 className="mb-2">Invoice To:</h6>
                      <ul>
                        <li>Example Company Name</li>
                        <li>1620 Jerry Dove Drive Myrtle Beach, SC 29577</li>
                        <li>LillianBMacon@rhyta.com</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 ">
                    <div className="table-resposnive">
                      <table className="table datatable">
                        <thead>
                          <tr>
                            <th>Services</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Hours</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <p className="fs-14">Computer Repair</p>
                            </td>
                            <td>
                              <p className="fs-14 text-gray">
                                Reliable computer repair,
                                <br /> fast and efficient.
                              </p>
                            </td>
                            <td>
                              <span className="fs-14 text-gray">$80 </span>
                            </td>
                            <td>
                              <p className="fs-14 text-gray">1 Hour</p>
                            </td>
                            <td>
                              <span className="fs-14 text-gray">$80 </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="fs-14">Car Repair Services</p>
                            </td>
                            <td>
                              <p className="fs-14 text-gray">
                                Trusted car repair for smooth,
                                <br /> safe driving.
                              </p>
                            </td>
                            <td>
                              <span className="fs-14 text-gray">$80 </span>
                            </td>
                            <td>
                              <p className="fs-14 text-gray">1 Hour</p>
                            </td>
                            <td>
                              <span className="fs-14 text-gray">$80 </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="fs-14">Steam Car Wash</p>
                            </td>
                            <td>
                              <p className="fs-14 text-gray">
                                Premium steam car wash
                                <br /> for a spotless shine.
                              </p>
                            </td>
                            <td>
                              <span className="fs-14 text-gray">$80 </span>
                            </td>
                            <td>
                              <p className="fs-14 text-gray">1 Hour</p>
                            </td>
                            <td>
                              <span className="fs-14 text-gray">$80 </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="fs-14">House Cleaning </p>
                            </td>
                            <td>
                              <p className="fs-14 text-gray">
                                Expert house cleaning for a<br /> sparkling
                                space.
                              </p>
                            </td>
                            <td>
                              <span className="fs-14 text-gray">$80 </span>
                            </td>
                            <td>
                              <p className="fs-14 text-gray">1 Hour</p>
                            </td>
                            <td>
                              <span className="fs-14 text-gray">$80 </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="invoice-payment">
                    <h6 className="mb-4">Payment info:</h6>
                    <ul>
                      <li>Credit Card - 123***********789</li>
                      <li className="mb-0">
                        <span>Amount:</span> $252.36
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-end">
                    <div className="invoice-total">
                      <ul>
                        <li className="d-flex justify-content-between gap-5">
                          Sub Total <span>$244.00</span>
                        </li>
                        <li className="d-flex justify-content-between gap-5">
                          Tax(5%) <span>$8.36</span>
                        </li>
                        <li className="d-flex justify-content-between gap-5 mb-0">
                          Total <span className="text-dark">$252.36</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="invoice-terms rounded">
                  <h6 className="fs-14 mb-3">Terms &amp; Conditions:</h6>
                  <ul>
                    <li>
                      All payments must be made according to the agreed
                      schedule. Late payments may incur additional fees.
                    </li>
                    <li className="mb-0">
                      Cancellations must be made within 10 days of service.
                      Refunds are subject to review and may not be granted if
                      the service has been substantially performed.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

</>

    </>
  )
}

export default Invoice
