import React, { useState } from 'react';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import CustomDropdown from '../../common/dropdown/commonSelect';
import {
  cityOption,
  countryOption,
  serviceOption,
  stateOption,
  statusOption,
} from '../../../../core/data/json/dropDownData';
import ReactApexChart from 'react-apexcharts';

import 'react-datepicker/dist/react-datepicker.css';

import Calendar from 'react-calendar';

const ProviderDashboard = () => {
  const routes = all_routes;
  const [showModal, setShowModal] = useState(false);
  const [value, onChange] = useState(new Date());
  const handleClose = () => {
    setShowModal(false);
  };
  const handelOpen = () => {
    setShowModal(true);
  };
  const [sCol] = useState<any>({
    series: [{
      name: 'Tasks',
      data: [12, 19, 15, 20, 14] // Example data for each day
  }],
  chart: {
      type: 'bar',
      height: 140
  },
  colors: ['#4A00E5'],
  plotOptions: {
      bar: {
           borderRadius: 5,
          // horizontal: false,
      },
  },
  dataLabels: {
      enabled: false
  },
  xaxis: {
      categories: ['M', 'T', 'W', 'T', 'F'],
  },

  responsive: [{
      breakpoint: 480,
      options: {
          chart: {
              width: 300
          },
          legend: {
              position: 'bottom'
          },
          plotOptions: {
              bar: {
                   borderRadius: 3,
              },
          },
      }
  }]
  })
  const [sCol2] = useState<any>({
    series: [{
      name: "sales",
      colors: ['#FFC38F'],
      data: [{
        x: 'Inpipeline',
        y: 400,
        
      }, {
        x: 'Follow Up',
        y: 130
      }, {
        x: 'Schedule',
        y: 248
      }, {
        x: 'Conversation',
        y: 470
      }, {
        x: 'Won',
        y: 470
      },{
        x: 'Lost',
        y: 180
      }]
    }],
      chart: {
      type: 'bar',
      height: 260,
    },
    plotOptions: {
      bar: {
          borderRadiusApplication: 'around',
          columnWidth: '40%',
      }
    },
    colors: ['#00918E'],
    xaxis: {
      type: 'category',
      group: {
        style: {
          fontSize: '7px',
          fontWeight: 700,
        },
      }
    },
  })
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid pb-0">
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-md-6">
              <div className="row flex-fill">
                <div className="col-12">
                  <div className="card prov-widget">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="mb-2">
                          <p className="mb-1">Upcoming Appointments</p>
                          <h5>
                            <span className="counter">12</span>+
                          </h5>
                        </div>
                        <span className="prov-icon bg-info d-flex justify-content-center align-items-center rounded">
                          <i className="ti ti-calendar-check" />
                        </span>
                      </div>
                      <p className="fs-12">
                        <span className="text-success me-2">
                          12% <i className="ti ti-arrow-badge-up-filled" />
                        </span>
                        from Last Week
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card prov-widget">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="mb-2">
                          <p className="mb-1">Completed Appointments</p>
                          <h5>
                            <span className="counter">68</span>+
                          </h5>
                        </div>
                        <span className="prov-icon bg-success d-flex justify-content-center align-items-center rounded">
                          <i className="ti ti-calendar-check" />
                        </span>
                      </div>
                      <p className="fs-12">
                        <span className="text-danger me-2">
                          12% <i className="ti ti-arrow-badge-down-filled" />
                        </span>
                        from Last Week
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card prov-widget">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="mb-2">
                          <p className="mb-1">Canceled Appointments</p>
                          <h5>
                            <span className="counter">08</span>+
                          </h5>
                        </div>
                        <span className="prov-icon bg-danger d-flex justify-content-center align-items-center rounded">
                          <i className="ti ti-calendar-check" />
                        </span>
                      </div>
                      <p className="fs-12">
                        <span className="text-danger me-2">0%</span>from Last
                        Week
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="card flex-fill">
                <div className="card-body">
                  <div>
                    <div className="d-flex justify-content-center flex-column mb-3">
                      <h5 className="text-center">
                        1,500{' '}
                        <span className="text-success">
                          <i className="ti ti-arrow-badge-up-filled" />
                        </span>
                      </h5>
                      <p className="fs-12 text-center">
                        Total earned last week so far
                      </p>
                    </div>
                    <div className="d-flex justify-content-around mb-3">
                      <div>
                        <p className="mb-0">Total Income</p>
                        <h5>$8145</h5>
                      </div>
                      <div>
                        <p className="mb-0">Total Due</p>
                        <h5>$8145</h5>
                      </div>
                    </div>
                    <div id="daily-chart" >
                        <ReactApexChart
                      options={sCol}
                      series={sCol.series}
                      type="bar"
                      height={140}
                    />
                    </div>
                    <div className="d-flex justify-content-center flex-column">
                      <span className="text-success text-center fs-12 mb-4">
                        Performance is 30% better last month
                      </span>
                      <Link
                        to={routes.providerEarnings}
                        className="btn btn-dark"
                      >
                        View All Earnings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <h6 className="mb-3">Subscription</h6>
                  <div className=" bg-light-300 rounded p-3 mb-3">
                    <div className="d-flex justify-content-between flex-wrap row-gap-2 mb-2">
                      <span className="badge badge-success">
                        <i className="ti ti-point-filled" />
                        Current Plan
                      </span>
                      <span className="badge bg-info-transparent">
                        Renewal Date : 14 Jan 2025
                      </span>
                    </div>
                    <div className="mb-2">
                      <p className="mb-0 text-dark fw-medium">Standard Plan</p>
                      <span>Our most popular plan for small teams.</span>
                    </div>
                    <div className="d-flex mb-2">
                      <h5 className="me-2">$291</h5>
                      <span>Per user/Year</span>
                    </div>
                    <div className="">
                      <div className="row justify-content-between">
                        <div className="col-md-6">
                          <Link
                            to="#"
                            className="btn btn-dark w-100 mb-3 mb-md-0"
                          >
                            Upgrade Plan
                          </Link>
                        </div>
                        <div className="col-md-6">
                          <Link to="#" className="btn btn-white w-100">
                            Cancel Plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light-500 rounded p-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="">
                        <p className="mb-0 text-dark fw-medium">
                          Standard Plan
                        </p>
                        <span className="d-block mb-2">
                          Our most popular plan for small teams.
                        </span>
                        <Link
                          to={routes.providerSubscription}
                          className="text-info d-block"
                        >
                          View All Plans
                        </Link>
                      </div>
                      <div className="d-flex">
                        <h5>$291 </h5>
                        <span> /Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6>Top Services</h6>
                    <Link to={routes.serviceDetails1} className="btn border">
                      View All
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/services/service-56.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link
                          to={routes.serviceDetails1}
                          className="fw-medium mb-0"
                        >
                          Installation Box
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">300 Bookings</span>
                          <span className="pe-2 border-end">$400K</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1 me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <i className="ti ti-chevron-right" />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/services/service-57.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link
                          to={routes.serviceDetails1}
                          className="fw-medium mb-0"
                        >
                          Plumbing Services
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">287 Bookings</span>
                          <span className="pe-2 border-end">$320K</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <i className="ti ti-chevron-right" />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/services/service-58.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link
                          to={routes.serviceDetails1}
                          className="fw-medium mb-0"
                        >
                          House Renovation
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">250 Bookings</span>
                          <span className="pe-2 border-end">$300K</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <i className="ti ti-chevron-right" />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/services/service-59.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link
                          to={routes.serviceDetails1}
                          className="fw-medium mb-0"
                        >
                          Painting Services
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">214 Bookings</span>
                          <span className="pe-2 border-end">$280K</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <i className="ti ti-chevron-right" />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/services/service-60.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link
                          to={routes.serviceDetails1}
                          className="fw-medium mb-0"
                        >
                          Power restoration
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">115 Bookings</span>
                          <span className="pe-2 border-end">$210K</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <i className="ti ti-chevron-right" />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/services/service-61.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link
                          to={routes.serviceDetails1}
                          className="fw-medium mb-0"
                        >
                          Mosaic Cleaning Service
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">102 Bookings</span>
                          <span className="pe-2 border-end">$190K</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <i className="ti ti-chevron-right" />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/services/service-62.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link
                          to={routes.serviceDetails1}
                          className="fw-medium mb-0"
                        >
                          Light Installation
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">102 Bookings</span>
                          <span className="pe-2 border-end">$190K</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <i className="ti ti-chevron-right" />
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <div className="d-flex">
                      <Link
                        to={routes.serviceDetails1}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/services/service-63.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link
                          to={routes.serviceDetails1}
                          className="fw-medium mb-0"
                        >
                          Cieling Fan Change
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">102 Bookings</span>
                          <span className="pe-2 border-end">$190K</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to={routes.serviceDetails1}>
                      <i className="ti ti-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body reactcal-full">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6>Bookings</h6>
                    <Link to="#" className="btn border">
                      View All
                    </Link>
                  </div>
                  <div id="datetimepickershow " >
                  <Calendar onChange={() => onChange} value={value} />
                  </div>
                  <div className="book-crd">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                          <div className="d-flex align-items-center">
                            <Link
                              to={routes.bookingDetails}
                              className="avatar avatar-lg flex-shrink-0 me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/services/service-63.jpg"
                                className="rounded-circle"
                                alt="Img"
                              />
                            </Link>
                            <div>
                              <Link
                                to={routes.bookingDetails}
                                className="fw-medium"
                              >
                                Plan &amp; Design
                              </Link>
                              <span className="d-block fs-12">
                                <i className="ti ti-clock me-1" />
                                05:30 PM - 06:00 PM
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to={routes.bookingDetails}
                              className="avatar avatar-sm me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/user/user-01.jpg"
                                className="rounded-circle"
                                alt="user"
                              />
                            </Link>
                            <Link to={routes.bookingDetails}>
                              <i className="ti ti-chevron-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="book-crd">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                          <div className="d-flex">
                            <Link
                              to={routes.bookingDetails}
                              className="avatar avatar-lg flex-shrink-0 me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/services/service-56.jpg"
                                className="rounded-circle"
                                alt="Img"
                              />
                            </Link>
                            <div>
                              <Link
                                to={routes.bookingDetails}
                                className="fw-medium"
                              >
                                Installation &amp; Maintenance
                              </Link>
                              <span className="fs-12 d-block">
                                <i className="ti ti-clock" />
                                04:30 PM - 05:00 PM
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="avatar avatar-sm me-2">
                              <ImageWithBasePath
                                src="assets/img/user/user-01.jpg"
                                className="rounded-circle"
                                alt="user"
                              />
                            </Link>
                            <Link to={routes.bookingDetails}>
                              <i className="ti ti-chevron-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="book-crd">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                          <div className="d-flex align-items-center">
                            <Link
                              to={routes.bookingDetails}
                              className="avatar avatar-lg flex-shrink-0 me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/services/service-63.jpg"
                                className="rounded-circle"
                                alt="Img"
                              />
                            </Link>
                            <div>
                              <Link
                                to={routes.bookingDetails}
                                className="fw-medium"
                              >
                                Plan &amp; Design
                              </Link>
                              <span className="d-block fs-12">
                                <i className="ti ti-clock me-1" />
                                05:30 PM - 06:00 PM
                              </span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to={routes.bookingDetails}
                              className="avatar avatar-sm me-2"
                            >
                              <ImageWithBasePath
                                src="assets/img/user/user-01.jpg"
                                className="rounded-circle"
                                alt="user"
                              />
                            </Link>
                            <Link to={routes.bookingDetails}>
                              <i className="ti ti-chevron-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <h6 className="mb-4">Top Locations</h6>
                  <div id="deals-chart" >
                  <ReactApexChart
                      options={sCol2}
                      series={sCol2.series}
                      type="bar"
                      height={275}
                    />
                  </div>
                  <div>
                    <p>Top Locations &amp; Users</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex">
                        <span className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src="assets/img/icons/flag-01.svg"
                            className="rounded-circle "
                            alt="flag"
                          />
                        </span>
                        <div>
                          <p className="text-dark fw-medium mb-0">
                            Saudi Arabia
                          </p>
                          <span className="fs-12">California</span>
                        </div>
                      </div>
                      <span className="badge badge-info">
                        <i className="ti ti-point-filled" />
                        300 Bookings
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex">
                        <span className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src="assets/img/icons/flag-02.svg"
                            className="rounded-circle "
                            alt="flag"
                          />
                        </span>
                        <div>
                          <p className="text-dark fw-medium mb-0">Honkong</p>
                          <span className="fs-12">California</span>
                        </div>
                      </div>
                      <span className="badge badge-info">
                        <i className="ti ti-point-filled" />
                        300 Bookings
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-0">
                      <div className="d-flex">
                        <span className="avatar avatar-lg me-2">
                          <ImageWithBasePath
                            src="assets/img/icons/flag-03.svg"
                            className="rounded-circle "
                            alt="flag"
                          />
                        </span>
                        <div>
                          <p className="text-dark fw-medium mb-0">Germany</p>
                          <span className="fs-12">California</span>
                        </div>
                      </div>
                      <span className="badge badge-info">
                        <i className="ti ti-point-filled" />
                        300 Bookings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h6>Latest Reviews</h6>
                    <Link to={routes.providerReview} className="btn border">
                      View All
                    </Link>
                  </div>
                  <div className=" border-bottom pb-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                      <div className="d-flex">
                        <Link
                          to="#"
                          className="avatar avatar-lg flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            className="rounded-circle"
                            alt="Img"
                          />
                        </Link>
                        <div>
                          <Link
                            to={routes.providerReview}
                            className="fw-medium"
                          >
                            Maude Rossi
                          </Link>
                          <div className="d-flex align-items-center">
                            <p className="fs-12 mb-0 pe-2 border-end">
                              For{' '}
                              <span className="text-info">
                                Plumbing installation
                              </span>
                            </p>
                            <span className="avatar avatar-sm mx-2">
                              <ImageWithBasePath
                                src="assets/img/user/user-03.jpg"
                                className="img-fluid rounded-circle"
                                alt="user"
                              />
                            </span>
                            <span className="fs-12">rebecca</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <span className="text-warning fs-10 me-1">
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                        </span>
                        <span className="fs-12">4.9</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom pb-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                      <div className="d-flex">
                        <Link
                          to="#"
                          className="avatar avatar-lg flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="Img"
                          />
                        </Link>
                        <div>
                          <Link
                            to={routes.providerReview}
                            className="fw-medium"
                          >
                            Livengood
                          </Link>
                          <div className="d-flex align-items-center">
                            <p className="fs-12 mb-0 pe-2 border-end">
                              For{' '}
                              <span className="text-info">
                                {' '}
                                Plumbing Repairs
                              </span>
                            </p>
                            <span className="avatar avatar-sm mx-2">
                              <ImageWithBasePath
                                src="assets/img/user/user-04.jpg"
                                className="img-fluid rounded-circle"
                                alt="user"
                              />
                            </span>
                            <span className="fs-12">Adrian</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <span className="text-warning fs-10 me-1">
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                        </span>
                        <span className="fs-12">4.9</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom pb-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                      <div className="d-flex">
                        <Link
                          to="#"
                          className="avatar avatar-lg flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="Img"
                          />
                        </Link>
                        <div>
                          <Link
                            to={routes.providerReview}
                            className="fw-medium"
                          >
                            Karl Brown
                          </Link>
                          <div className="d-flex align-items-center">
                            <p className="fs-12 mb-0 pe-2 border-end">
                              For{' '}
                              <span className="text-info">
                                {' '}
                                Construction Worker
                              </span>
                            </p>
                            <span className="avatar avatar-sm mx-2">
                              <ImageWithBasePath
                                src="assets/img/user/user-05.jpg"
                                className="img-fluid rounded-circle"
                                alt="user"
                              />
                            </span>
                            <span className="fs-12">Andreson</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <span className="text-warning fs-10 me-1">
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                        </span>
                        <span className="fs-12">4.9</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom pb-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                      <div className="d-flex">
                        <Link
                          to="#"
                          className="avatar avatar-lg flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="Img"
                          />
                        </Link>
                        <div>
                          <Link
                            to={routes.providerReview}
                            className="fw-medium"
                          >
                            Jerry Curran
                          </Link>
                          <div className="d-flex align-items-center">
                            <p className="fs-12 mb-0 pe-2 border-end">
                              For{' '}
                              <span className="text-info"> Makeup Artists</span>
                            </p>
                            <span className="avatar avatar-sm mx-2">
                              <ImageWithBasePath
                                src="assets/img/user/user-06.jpg"
                                className="img-fluid rounded-circle"
                                alt="user"
                              />
                            </span>
                            <span className="fs-12">Pique</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <span className="text-warning fs-10 me-1">
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                        </span>
                        <span className="fs-12">4.9</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-bottom pb-3 mb-3">
                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                      <div className="d-flex">
                        <Link
                          to="#"
                          className="avatar avatar-lg flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="Img"
                          />
                        </Link>
                        <div>
                          <Link
                            to={routes.providerReview}
                            className="fw-medium"
                          >
                            Livengood
                          </Link>
                          <div className="d-flex align-items-center">
                            <p className="fs-12 mb-0 pe-2 border-end">
                              For{' '}
                              <span className="text-info">
                                {' '}
                                Plumbing Repairs
                              </span>
                            </p>
                            <span className="avatar avatar-sm mx-2">
                              <ImageWithBasePath
                                src="assets/img/user/user-04.jpg"
                                className="img-fluid rounded-circle"
                                alt="user"
                              />
                            </span>
                            <span className="fs-12">Adrian</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <span className="text-warning fs-10 me-1">
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                        </span>
                        <span className="fs-12">4.9</span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                      <div className="d-flex">
                        <Link
                          to="#"
                          className="avatar avatar-lg flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="rounded-circle"
                            alt="Img"
                          />
                        </Link>
                        <div>
                          <Link
                            to={routes.providerReview}
                            className="fw-medium"
                          >
                            Karl Brown
                          </Link>
                          <div className="d-flex align-items-center">
                            <p className="fs-12 mb-0 pe-2 border-end">
                              For{' '}
                              <span className="text-info">
                                {' '}
                                Construction Worker
                              </span>
                            </p>
                            <span className="avatar avatar-sm mx-2">
                              <ImageWithBasePath
                                src="assets/img/user/user-05.jpg"
                                className="img-fluid rounded-circle"
                                alt="user"
                              />
                            </span>
                            <span className="fs-12">Andreson</span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <span className="text-warning fs-10 me-1">
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                          <i className="ti ti-star-filled filled" />
                        </span>
                        <span className="fs-12">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="card flex-fill">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2 mb-4">
                    <h6>Highly Rated Staffs</h6>
                    <Link to="#" className="btn border" onClick={handelOpen}>
                      Add New Staff
                    </Link>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-20.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link to={routes.staffDetails} className="fw-medium">
                          Maude Rossi
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">Plumber</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="badge badge-info">
                      <i className="ti ti-point-filled" />
                      300 Bookings
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-21.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link to={routes.staffDetails} className="fw-medium">
                          Floyd Andrian
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">Electrician</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="badge badge-info">
                      <i className="ti ti-point-filled" />
                      158 Bookings
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-22.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link to={routes.staffDetails} className="fw-medium">
                          Michael Ruiz
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">Painter</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="badge badge-info">
                      <i className="ti ti-point-filled" />
                      157 Bookings
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-23.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link to={routes.staffDetails} className="fw-medium">
                          Glenn Lewis
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">Electrician</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="badge badge-info">
                      <i className="ti ti-point-filled" />
                      156 Bookings
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-bottom flex-wrap row-gap-2 pb-3 mb-3">
                    <div className="d-flex">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-24.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link to={routes.staffDetails} className="fw-medium">
                          Kimberly Meissner
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">Electrician</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="badge badge-info">
                      <i className="ti ti-point-filled" />
                      120 Bookings
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2">
                    <div className="d-flex">
                      <Link
                        to={routes.staffDetails}
                        className="avatar avatar-lg me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-25.jpg"
                          className="rounded-circle"
                          alt="Img"
                        />
                      </Link>
                      <div>
                        <Link to={routes.staffDetails} className="fw-medium">
                          Lisa Jackson
                        </Link>
                        <div className="fs-12 d-flex align-items-center gap-2">
                          <span className="pe-2 border-end">Electrician</span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="badge badge-info">
                      <i className="ti ti-point-filled" />
                      120 Bookings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
      {/* Add Staff*/}
      <div className="modal fade custom-modal" id="add-staff">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content doctor-profile">
            <Modal className="doctor-profile" centered show={showModal}>
              <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
                <h5 className="modal-title">Add Staff </h5>
                <Link to="#" onClick={handleClose} aria-label="Close">
                  <i className="ti ti-circle-x-filled fs-20" />
                </Link>
              </div>
              <div className="modal-body pb-0">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <div className="d-flex profile-upload align-items-center">
                          <span className="d-flex justify-content-center align-items-center p-4 bg-light rounded me-2">
                            <i className="ti ti-photo" />
                          </span>
                          <div>
                            <h6 className="fs-16">Profile</h6>
                            <span className="fs-14">
                              Image size does not exceed 5MB
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control pass-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control pass-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="number"
                          className="form-control pass-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control pass-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Country</label>
                        <CustomDropdown
                          options={countryOption}
                          className="select d-flex"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">State</label>
                        <CustomDropdown
                          options={stateOption}
                          className="select d-flex"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">City</label>
                        <CustomDropdown
                          options={cityOption}
                          className="select d-flex"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Zip Code</label>
                        <input
                          type="text"
                          className="form-control pass-input"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Services</label>
                        <CustomDropdown
                          options={serviceOption}
                          className="select d-flex"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <CustomDropdown
                          options={statusOption}
                          className="select d-flex"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-end align-items-center">
                  <Link
                    to="#"
                    className="btn btn-light me-2"
                    onClick={handleClose}
                  >
                    Cancel
                  </Link>
                  <Link to={routes.staffList} className="btn btn-dark">
                    Submit
                  </Link>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
      {/* /Add Staff */}
    </>
  );
};

export default ProviderDashboard;
