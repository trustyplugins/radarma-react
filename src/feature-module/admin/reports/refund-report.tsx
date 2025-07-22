import React, { useState } from 'react';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Calendar } from 'primereact/calendar';
import ReactApexChart from 'react-apexcharts';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { useSelector } from 'react-redux';

const RefundReport = () => {
  const data = useSelector((state: any) => state.refund_reports);

  const optionsBar = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '55%',
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent'],
    },
    series: [
      {
        name: 'Series 1',
        data: [120, 132, 116, 175, 119, 117, 154, 192, 162, 183, 146, 151],
      },
      {
        name: 'Series 2',
        color: '#6610f2',
        data: [336, 612, 344, 647, 345, 563, 256, 344, 323, 300, 455, 456],
      },
    ],
    xaxis: {
      // categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    },
    yaxis: {
      labels: {
        style: {
          colors: '#777',
        },
      },
    },
    title: {
      text: '',
      align: 'left',
      style: {
        fontSize: '18px',
      },
    },
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: 0,
              to: 100,
              color: '#6F42C1 ', // Define the color you want here
            },
            {
              from: 101,
              to: 200,
              color: '#333333', // Define another color here
            },
          ],
        },
        columnWidth: '55%',
      },
    },
  };

  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const [selectedValue4, setSelectedValue4] = useState(null);
  const [selectedValue5, setSelectedValue5] = useState(null);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);

  const value1 = [
    { name: 'Date' },
    { name: '01' },
    { name: '02' },
    { name: '03' },
  ];
  const value2 = [{ name: 'July' }, { name: 'Aug' }, { name: 'Sep' }];
  const value3 = [{ name: '2023' }, { name: '2022' }, { name: '2021' }];
  const value4 = [
    { name: 'Select Provider' },
    { name: 'Jerry' },
    { name: 'Pauline' },
    { name: 'Robert' },
  ];
  const value5 = [
    { name: 'Select Status' },
    { name: 'Completed' },
    { name: 'Uncompleted' },
  ];

  return (
    <div className="page-wrapper page-settings">
      <div className="content">
        <div className="content-page-header content-page-headersplit">
          <h5>Refund Report</h5>
          <div className="list-btn">
            <ul>
              <li>
                <a className="btn-downloads down-pdf" href="#">
                  <ImageWithBasePath
                    src="assets/admin/img/icons/pdf-icon.svg"
                    alt="img"
                  />{' '}
                  Download as PDF
                </a>
              </li>
              <li>
                <a className="btn-downloads down-excel" href="#">
                  <ImageWithBasePath
                    src="assets/admin/img/icons/excel-icon.svg"
                    alt="img"
                  />
                  Download as Excel{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12">
            {/* Chart */}
            <div className="card card-chart-blk">
              <div className="card-head-blk">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-md-6">
                    <div className="card-table-head">
                      <h4>Refund Report</h4>
                      <ul>
                        <li>
                          <span className="earning-black" />
                          No of Requests
                        </li>
                        <li>
                          <span className="earning-pink" />
                          Refunded Amount
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="earning-group">
                      <div className="sortby-section invoice-sort">
                        <div className="sorting-info">
                          <div className="sortby-filter-group court-sortby">
                            <div className="sortbyset week-bg me-0">
                              <div className="sorting-select">
                                <Dropdown
                                  value={selectedValue1}
                                  onChange={(e) => setSelectedValue1(e.value)}
                                  options={value1}
                                  optionLabel="name"
                                  placeholder="Date"
                                  className="select admin-dropdown custom-dropdown"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sortby-section invoice-sort">
                        <div className="sorting-info">
                          <div className="sortby-filter-group court-sortby">
                            <div className="sortbyset week-bg me-0">
                              <div className="sorting-select">
                                <Dropdown
                                  value={selectedValue2}
                                  onChange={(e) => setSelectedValue2(e.value)}
                                  options={value2}
                                  optionLabel="name"
                                  placeholder="July"
                                  className="select admin-dropdown custom-dropdown"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sortby-section invoice-sort">
                        <div className="sorting-info">
                          <div className="sortby-filter-group court-sortby">
                            <div className="sortbyset week-bg me-0">
                              <div className="sorting-select">
                                <Dropdown
                                  value={selectedValue3}
                                  onChange={(e) => setSelectedValue3(e.value)}
                                  options={value3}
                                  optionLabel="name"
                                  placeholder="2023"
                                  className="select admin-dropdown custom-dropdown"
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
              <div className="card-body">
                <ReactApexChart
                 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
                  options={optionsBar}
                  series={optionsBar.series}
                  type="bar"
                  height={350}
                  width="100%"
                />
              </div>
            </div>
            {/* /Chart */}
          </div>
        </div>
        <div className="card card-status">
          <div className="card-head-blk border-bottom-0">
            <div className="row align-items-center">
              <div className="col-xl-12 col-md-12">
                <div className="earning-group">
                  <div className="sortby-section status-provider">
                    <div className="sorting-info">
                      <div className="sortby-filter-group court-sortby">
                        <div className="sortbyset week-bg me-0">
                          <div className="sorting-select">
                            <Dropdown
                              value={selectedValue4}
                              onChange={(e) => setSelectedValue4(e.value)}
                              options={value4}
                              optionLabel="name"
                              placeholder="Select Provider"
                              className="select admin-dropdown"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sortby-section status-provider">
                    <div className="sorting-info">
                      <div className="sortby-filter-group court-sortby">
                        <div className="sortbyset week-bg me-0">
                          <div className="sorting-select">
                            <Dropdown
                              value={selectedValue5}
                              onChange={(e) => setSelectedValue5(e.value)}
                              options={value5}
                              optionLabel="name"
                              placeholder="Select Status"
                              className="select admin-dropdown"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chart-date-group">
                    <div className="cal-icon">
                      <Calendar
                      
                        value={date1}
                        onChange={(e: any) => setDate1(e.value)}
                        placeholder="From"
                        className="custom-dropdown"
                      />
                    </div>
                  </div>
                  <div className="chart-date-group">
                    <div className="cal-icon">
                      <Calendar
                        value={date2}
                        onChange={(e: any) => setDate2(e.value)}
                        placeholder="To"
                        className="custom-dropdown"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="table-resposnive table-div">
              <table className="table datatable">
                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  value={data}
                >
                  <Column sortable field="#" header="#"></Column>
                  <Column sortable field="service" header="Service"></Column>
                  <Column sortable field="provider" header="Provider"></Column>
                  <Column sortable field="customer" header="Customer"></Column>
                  <Column sortable field="amount" header="Amount"></Column>
                  <Column sortable field="requestedOn" header="Requested On"></Column>
                  <Column sortable field="refundedOn" header="Refunded On"></Column>
                  <Column sortable field="status" header="Status"></Column>
                </DataTable>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundReport;
