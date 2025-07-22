import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonDatePicker from '../../../../core/hooks/commonDatePicker';
import CustomDropdown from '../../common/dropdown/commonSelect';
import { serviceOption, staffOption } from '../../../../core/data/json/dropDownData';

const ProviderEnquiry = () => {
    const [showFilter, setShowFilter] = useState(false);

  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
          <h5>Provider Enquiry</h5>
          <div className="d-flex align-items-center">
            <span className="fs-14 me-2">Sort</span>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle bg-light-300 "
                data-bs-toggle="dropdown"
              >
                Newly Added
              </Link>
              <div className="dropdown-menu">
                <Link to="#" className="dropdown-item active">
                  Recently Added
                </Link>
              </div>
            </div>
            <Link
              to="#"
              className="tags d-flex justify-content-center align-items-center  rounded me-2"
            >
              <i className="ti ti-printer" />
            </Link>
            <Link
              to="#"
              className="tags d-flex justify-content-center align-items-center border rounded me-2"
              id="filter_search"
              onClick={()=>setShowFilter(!showFilter)}
            >
              <i className="ti ti-adjustments" />
            </Link>
          </div>
        </div>
      </div>
      <div id="filter_inputs" style={{display: showFilter ? 'block':'none'}}>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <div className="sel-cal react-calender Calendar-icon">
                <span>
                  <i className="ti ti-calendar-month" />
                </span>
                <CommonDatePicker/>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
            <CustomDropdown
                options={serviceOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
            <CustomDropdown
                options={staffOption}
                className="select d-flex"
                placeholder="Select"
            />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-12 col-lg-12">
          {/* Coupons List */}
          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Enquired Service</th>
                  <th>Email</th>
                  <th>Phone Number </th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lori Broaddus</td>
                  <td className="text-dark">Computer Repair</td>
                  <td>broaddus@example.com</td>
                  <td>+1 5647 878 4541</td>
                  <td>28 Sep 2024</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="btn btn-light bg-light-500 d-flex align-items-center justify-content-center rounded-circle  p-2 me-2"
                      >
                        <i className="ti ti-messages" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Anthony Lewis</td>
                  <td className="text-dark">Car Repair Services</td>
                  <td>anthony@example.com</td>
                  <td>+1 4574 881 8977</td>
                  <td>02 Oct 2024</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="btn btn-light bg-light-500 d-flex align-items-center justify-content-center rounded-circle  p-2 me-2"
                      >
                        <i className="ti ti-messages" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Harvey Smith</td>
                  <td className="text-dark">Steam Car Wash</td>
                  <td>harvey@example.com</td>
                  <td>+1 4259 352 3485</td>
                  <td>15 Oct 2024</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="btn btn-light bg-light-500 d-flex align-items-center justify-content-center rounded-circle  p-2 me-2"
                      >
                        <i className="ti ti-messages" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Linda Ray</td>
                  <td className="text-dark">Building Construction</td>
                  <td>ray456@example.com</td>
                  <td>+1 5348 269 4583</td>
                  <td>26 Oct 2024</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="btn btn-light bg-light-500 d-flex align-items-center justify-content-center rounded-circle  p-2 me-2"
                      >
                        <i className="ti ti-messages" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Elliot Murray</td>
                  <td className="text-dark">Building Construction</td>
                  <td>murray@example.com</td>
                  <td>+1 7869 342 9654</td>
                  <td>12 Nov 2024</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="btn btn-light bg-light-500 d-flex align-items-center justify-content-center rounded-circle  p-2 me-2"
                      >
                        <i className="ti ti-messages" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Connie Waters</td>
                  <td className="text-dark">Interior Designing</td>
                  <td>connie@example.com</td>
                  <td>+1 8964 315 2496</td>
                  <td>18 Nov 2024</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="btn btn-light bg-light-500 d-flex align-items-center justify-content-center rounded-circle  p-2 me-2"
                      >
                        <i className="ti ti-messages" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Lori Broaddus</td>
                  <td className="text-dark">Commercial Painting</td>
                  <td>broaddus@example.com</td>
                  <td>+1 2547 256 3145</td>
                  <td>22 Nov 2024</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="btn btn-light bg-light-500 d-flex align-items-center justify-content-center rounded-circle  p-2 me-2"
                      >
                        <i className="ti ti-messages" />
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Rebecca Smtih</td>
                  <td className="text-dark">Plumbing Services</td>
                  <td>smtih@example.com</td>
                  <td>+1 4869 318 5485</td>
                  <td>12 Dec 2024</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Link
                        to="#"
                        className="btn btn-light bg-light-500 d-flex align-items-center justify-content-center rounded-circle  p-2 me-2"
                      >
                        <i className="ti ti-messages" />
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* /Coupons List */}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="value d-flex align-items-center">
            <span>Show</span>
            <select>
              <option>7</option>
            </select>
            <span>entries</span>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <span className="me-2 text-gray-9">1 - 07 of 10</span>
            <nav aria-label="Page navigation">
              <ul className="paginations d-flex justify-content-center align-items-center">
                <li className="page-item me-2">
                  <Link
                    className="page-link-1 active d-flex justify-content-center align-items-center "
                    to="#"
                  >
                    1
                  </Link>
                </li>
                <li className="page-item me-2">
                  <Link
                    className="page-link-1 d-flex justify-content-center align-items-center "
                    to="#"
                  >
                    2
                  </Link>
                </li>
                <li className="page-item ">
                  <Link
                    className="page-link-1 d-flex justify-content-center align-items-center "
                    to="#"
                  >
                    3
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default ProviderEnquiry