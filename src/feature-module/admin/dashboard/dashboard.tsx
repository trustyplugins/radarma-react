import React from 'react';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import ReactApexChart from 'react-apexcharts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../core/data/routes/all_routes';
import {
  AdminDashboardInterface,
  AdminDashboardOne,
  AdminDashboardTwo,
} from '../../../core/models/interface';
import { AdminDashboardThree } from '../../../core/data/json/admin-dashboard3';

const Dashboard = () => {
  const routes = all_routes;
 

  const serviceImage1 = (rowData: AdminDashboardInterface) => {
    const [service] = rowData.service.split('\n');
    return (
      <Link to={routes.viewServices} className="table-imgname">
        <ImageWithBasePath src={rowData.img} className="me-2" alt="img" />
        <span>{service}</span>
      </Link>
    );
  };
  const serviceImage2 = (rowData: AdminDashboardInterface) => {
    const [providerName] = rowData.providerName.split('\n');
    return (
      <Link to={routes.viewServices} className="table-imgname">
        <ImageWithBasePath src={rowData.img} className="me-2" alt="img" />
        <span>{providerName}</span>
      </Link>
    );
  };
  const serviceImage3 = (rowData: AdminDashboardInterface) => {
    const [service] = rowData.service.split('\n');
    return (
      <Link to={routes.viewServices} className="table-imgname">
        <ImageWithBasePath
          src={rowData.serviceImg}
          className="me-2"
          alt="img"
        />
        <span>{service}</span>
      </Link>
    );
  };
  const userImage = (rowData: AdminDashboardInterface) => {
    const [user] = rowData.user.split('\n');
    return (
      <Link to={routes.viewServices} className="table-imgname">
        <ImageWithBasePath src={rowData.userImg} className="me-2" alt="img" />
        <span>{user}</span>
      </Link>
    );
  };
  const providerImage = (rowData: AdminDashboardInterface) => {
    const [provider] = rowData.provider.split('\n');
    return (
      <Link to={routes.viewServices} className="table-imgname">
        <ImageWithBasePath
          src={rowData.providerImg}
          className="me-2"
          alt="img"
        />
        <span>{provider}</span>
      </Link>
    );
  };

  const data1 = useSelector(
    (state: AdminDashboardOne) => state.admin_dashboard_1,
  );
  const data2 = useSelector(
    (state: AdminDashboardTwo) => state.admin_dashboard_2,
  );
  const data3 = useSelector(
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
    (state: AdminDashboardThree) => state.admin_dashboard_3,
  );

  const Revenue = {
    series: [
      {
        name: 'series1',
        data: [11, 32, 45, 32, 34, 52, 41],
        colors: [' #4169E1'],
      },
      {
        name: 'series2',
        colors: [' #4169E1'],
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      height: 350,
      type: 'area',
    },
    fill: {
      colors: [' #4169E1', '#4169E1'],
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.1,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.5,
        opacityTo: 0.5,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
      curve: 'smooth',
      dashArray: [0, 8, 5],
      opacityFrom: 0.5,
      opacityTo: 0.5,
      colors: [' #4169E1'],
    },
    xaxis: {
      type: 'month',
      categories: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july'],
    },
    tooltip: {},
  };
  const book = {
    series: [10, 45, 45],
    chart: {
      width: 700,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C'],
    color: ['#1BA345', '#0081FF', ' #FEC001'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
  const chartData = {
    colors: ['#4169E1'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      // position: '',
      width: 400,
      // position: 'top',
    },
    series: [
      {
        name: 'Received',
        type: 'column',
        data: [70, 150, 80, 180, 150, 175, 201, 60, 200, 120, 190, 160],
      },
      {
        name: 'Revenue',
        // data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: 'Free Cash Flow',
        // data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-userhead">
                    <div className="home-usercount">
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/user.svg"
                          alt="img"
                        />
                      </span>
                      <h6>User</h6>
                    </div>
                    <div className="home-useraction">
                      <Link
                        className="delete-table bg-white"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        data-popper-placement="bottom-end"
                      >
                        <li>
                          <Link to="#" className="dropdown-item">
                            {' '}
                            View
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            {' '}
                            Edit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="home-usercontent">
                    <div className="home-usercontents">
                      <div className="home-usercontentcount">
                        <ImageWithBasePath
                          src="assets/admin/img/icons/arrow-up.svg"
                          alt="img"
                          className="me-2"
                        />
                        <span className="counters" data-count={30}>
                          30
                        </span>
                      </div>
                      <h5> Current Month</h5>
                    </div>
                    <div className="homegraph">
                      <ImageWithBasePath
                        src="assets/admin/img/graph/graph1.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card">
              <div className="card-body">
                <div className="home-user home-provider">
                  <div className="home-userhead">
                    <div className="home-usercount">
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/user-circle.svg"
                          alt="img"
                        />
                      </span>
                      <h6>Providers</h6>
                    </div>
                    <div className="home-useraction">
                      <Link
                        className="delete-table bg-white"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        data-popper-placement="bottom-end"
                      >
                        <li>
                          <Link
                            to={routes.userProviders}
                            className="dropdown-item"
                          >
                            {' '}
                            View
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            {' '}
                            Edit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="home-usercontent">
                    <div className="home-usercontents">
                      <div className="home-usercontentcount">
                        <ImageWithBasePath
                          src="assets/admin/img/icons/arrow-up.svg"
                          alt="img"
                          className="me-2"
                        />
                        <span className="counters" data-count={25}>
                          25
                        </span>
                      </div>
                      <h5> Current Month</h5>
                    </div>
                    <div className="homegraph">
                      <ImageWithBasePath
                        src="assets/admin/img/graph/graph2.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card">
              <div className="card-body">
                <div className="home-user home-service">
                  <div className="home-userhead">
                    <div className="home-usercount">
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/service.svg"
                          alt="img"
                        />
                      </span>
                      <h6>Service</h6>
                    </div>
                    <div className="home-useraction">
                      <Link
                        className="delete-table bg-white"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        data-popper-placement="bottom-end"
                      >
                        <li>
                          <Link
                            to={routes.allServices}
                            className="dropdown-item"
                          >
                            {' '}
                            View
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={routes.editService}
                            className="dropdown-item"
                          >
                            {' '}
                            Edit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="home-usercontent">
                    <div className="home-usercontents">
                      <div className="home-usercontentcount">
                        <ImageWithBasePath
                          src="assets/admin/img/icons/arrow-up.svg"
                          alt="img"
                          className="me-2"
                        />
                        <span className="counters" data-count={18}>
                          18
                        </span>
                      </div>
                      <h5> Current Month</h5>
                    </div>
                    <div className="homegraph">
                      <ImageWithBasePath
                        src="assets/admin/img/graph/graph3.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 d-flex widget-path widget-service">
            <div className="card">
              <div className="card-body">
                <div className="home-user home-subscription">
                  <div className="home-userhead">
                    <div className="home-usercount">
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/money.svg"
                          alt="img"
                        />
                      </span>
                      <h6>Subscription</h6>
                    </div>
                    <div className="home-useraction">
                      <Link
                        className="delete-table bg-white"
                        to="#"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true" />
                      </Link>
                      <ul
                        className="dropdown-menu"
                        data-popper-placement="bottom-end"
                      >
                        <li>
                          <Link
                            to={routes.membership}
                            className="dropdown-item"
                          >
                            {' '}
                            View
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            {' '}
                            Edit
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="home-usercontent">
                    <div className="home-usercontents">
                      <div className="home-usercontentcount">
                        <ImageWithBasePath
                          src="assets/admin/img/icons/arrow-up.svg"
                          alt="img"
                          className="me-2"
                        />
                        <span className="counters" data-count={650}>
                          $650
                        </span>
                      </div>
                      <h5> Current Month</h5>
                    </div>
                    <div className="homegraph">
                      <ImageWithBasePath
                        src="assets/admin/img/graph/graph4.png"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6 col-12 d-flex  widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user">
                    <h2>Revenue</h2>
                    <div className="home-select">
                      <div className="dropdown">
                        <button
                          className="btn btn-action btn-sm dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Monthly
                        </button>
                        <ul
                          className="dropdown-menu"
                          data-popper-placement="bottom-end"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              Weekly
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Monthly
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Yearly
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown">
                        <Link
                          className="delete-table bg-white"
                          to="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <i className="fa fa-ellipsis-v" aria-hidden="true" />
                        </Link>
                        <ul
                          className="dropdown-menu"
                          data-popper-placement="bottom-end"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              {' '}
                              View
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              {' '}
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chartgraph">
                    <ReactApexChart
                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                      options={Revenue}
                      series={Revenue.series}
                      type="area"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-12 d-flex  widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user">
                    <h2>Booking Summary</h2>
                    <div className="home-select">
                      <div className="dropdown">
                        <button
                          className="btn btn-action btn-sm dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Monthly
                        </button>
                        <ul
                          className="dropdown-menu"
                          data-popper-placement="bottom-end"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              Weekly
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Monthly
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Yearly
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown">
                        <Link
                          className="delete-table bg-white"
                          to="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <i className="fa fa-ellipsis-v" aria-hidden="true" />
                        </Link>
                        <ul
                          className="dropdown-menu"
                          data-popper-placement="bottom-end"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              {' '}
                              View
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              {' '}
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chartgraph">
                    
                    <ReactApexChart                    
                      options={chartData}
                      series={chartData.series}
                      type="bar"
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12 d-flex widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user home-graph-header">
                    <h2>Top Services</h2>
                    <Link to={routes.allServices} className="btn btn-viewall">
                      View All
                      <ImageWithBasePath
                        src="assets/admin/img/icons/arrow-right.svg"
                        className="ms-2"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="table-responsive datatable-nofooter">
                    <table className="table datatable">
                      <DataTable
                        paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        value={data1}
                      >
                        <Column sortable field="#" header="#"></Column>
                        <Column
                          sortable
                          field="service"
                          header="Service"
                          body={serviceImage1}
                        ></Column>
                        <Column
                          sortable
                          field="category"
                          header="Category"
                        ></Column>
                        <Column
                          sortable
                          field="amount"
                          header="Amount"
                        ></Column>
                      </DataTable>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 d-flex widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user home-graph-header">
                    <h2>Top Providers</h2>
                    <Link to={routes.provider} className="btn btn-viewall">
                      View All
                      <ImageWithBasePath
                        src="assets/admin/img/icons/arrow-right.svg"
                        className="ms-2"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="table-responsive datatable-nofooter">
                    <table className="table datatable ">
                      <DataTable
                        paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        value={data2}
                      >
                        <Column sortable field="#" header="#"></Column>
                        <Column
                          sortable
                          field="providerName"
                          header="Provider Name"
                          body={serviceImage2}
                        ></Column>
                        <Column sortable field="email" header="Email"></Column>
                        <Column sortable field="phone" header="Phone"></Column>
                      </DataTable>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-sm-12 d-flex widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user home-graph-header">
                    <h2>Top Countries</h2>
                    <div className="home-select">
                      <div className="dropdown">
                        <button
                          className="btn btn-action btn-sm dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Monthly
                        </button>
                        <ul
                          className="dropdown-menu"
                          data-popper-placement="bottom-end"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              Weekly
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Monthly
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              Yearly
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="dropdown">
                        <Link
                          className="delete-table bg-white"
                          to="#"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          <i className="fa fa-ellipsis-v" aria-hidden="true" />
                        </Link>
                        <ul
                          className="dropdown-menu"
                          data-popper-placement="bottom-end"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              {' '}
                              View
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              {' '}
                              Edit
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chartgraph">
                    <div className="row align-items-center">
                      <div className="col-lg-7">
                        <div id="world_map" />
                        {/* <WorldMap
                          color="blue"
                          value-suffix="people"
                          size="sm"
                          data={data}
                        /> */}
                        <div style={{ height: '400px', width: '100%' }}>
                        <iframe
                      src="https://www.google.com/maps/embed"
                      style={{ border: "0", height: "265px", width: "364px" }}
                       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="contact-map"
                    />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="bookingmap">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/admin/img/flags/us.png"
                                  alt="img"
                                  className="me-2"
                                />
                                United State
                              </span>
                              <h6>60%</h6>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/admin/img/flags/in.png"
                                  alt="img"
                                  className="me-2"
                                />
                                India
                              </span>
                              <h6>80%</h6>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/admin/img/flags/ca.png"
                                  alt="img"
                                  className="me-2"
                                />
                                Canada
                              </span>
                              <h6>50%</h6>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/admin/img/flags/au.png"
                                  alt="img"
                                  className="me-2"
                                />
                                Australia
                              </span>
                              <h6>75%</h6>
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
          <div className="col-lg-4 col-sm-12 d-flex widget-path">
            <div className="card">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user home-graph-header">
                    <h2>Booking Statistics</h2>
                    <Link to={routes.booking} className="btn btn-viewall">
                      View All
                      <ImageWithBasePath
                        src="assets/admin/img/icons/arrow-right.svg"
                        className="ms-2"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="chartgraph">
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-sm-6">
                        <ReactApexChart
                          options={book}
                          series={book.series}
                          type="pie"
                          height={350}
                          width={200}
                        />
                      </div>
                      <div className="col-lg-5 col-sm-6">
                        <div className="bookingstatus">
                          <ul>
                            <li>
                              <span />
                              <h6>Completed</h6>
                            </li>
                            <li className="process-status">
                              <span />
                              <h6>Process</h6>
                            </li>
                            <li className="process-pending">
                              <span />
                              <h6>Pending</h6>
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
        </div>
        <div className="row">
          <div className="col-lg-12 widget-path">
            <div className="card mb-0">
              <div className="card-body">
                <div className="home-user">
                  <div className="home-head-user home-graph-header">
                    <h2>Recent Booking</h2>
                    <Link to={routes.booking} className="btn btn-viewall">
                      View All
                      <ImageWithBasePath
                        src="assets/admin/img/icons/arrow-right.svg"
                        className="ms-2"
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="table-responsive datatable-nofooter">
                    <table className="table datatable">
                      <DataTable
                        paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        value={data3}
                      >
                        <Column sortable field="#" header="#"></Column>
                        <Column sortable field="date" header="Date"></Column>
                        <Column
                          sortable
                          field="bookingTime"
                          header="Booking Time"
                        ></Column>
                        <Column
                          sortable
                          field="provider"
                          header="Provider"
                          body={providerImage}
                        ></Column>
                        <Column
                          sortable
                          field="user"
                          header="User"
                          body={userImage}
                        ></Column>
                        <Column
                          sortable
                          field="service"
                          header="Service"
                          body={serviceImage3}
                        ></Column>
                        <Column
                          sortable
                          field="amount"
                          header="Amount"
                        ></Column>
                        <Column
                          sortable
                          field="status"
                          header="Status"
                        ></Column>
                      </DataTable>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;