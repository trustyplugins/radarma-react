import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';

import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';

const MembershipTransaction = () => {
  const data = useSelector(
    (state: any) => state.membership_transaction,
  );
  const [selectedValue, setSelectedValue] = useState(null);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);

  const value = [
    { name: '01' },
    { name: '02' },
    { name: '03' },
    { name: '04' },
  ];
  const value1 = [{ name: 'July' }, { name: 'Aug' }, { name: 'Sep' }];
  const year = [{ name: '2023' }, { name: '2022' }, { name: '2021' }];
  const providers = [
    { name: 'Jerry' },
    { name: 'Pauline' },
    { name: 'Robert' },
  ];
  const value3 = [
    { name: 'Completed' },
    { name: 'UnCompleted' },
    { name: 'Robert' },
  ];

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
  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Membership Transaction</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <Link className="btn-downloads down-pdf" to="#">
                    <ImageWithBasePath
                      src="assets/admin/img/icons/pdf-icon.svg"
                      alt="img"
                    />{' '}
                    Download as PDF
                  </Link>
                </li>
                <li>
                  <Link className="btn-downloads down-excel" to="#">
                    <ImageWithBasePath
                      src="assets/admin/img/icons/excel-icon.svg"
                      alt="img"
                    />
                    Download as Excel{' '}
                  </Link>
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
                        <h4>Transaction report</h4>
                        <ul>
                          <li>
                            <span className="earning-black" />
                            Amount
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
                                    value={selectedValue}
                                    onChange={(e) => setSelectedValue(e.value)}
                                    options={value}
                                    optionLabel="name"
                                    className="select w-100"
                                    placeholder="Date"
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
                                    value={selectedValue}
                                    onChange={(e) => setSelectedValue(e.value)}
                                    options={value1}
                                    optionLabel="name"
                                    className="select w-100"
                                    placeholder="July"
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
                                    value={selectedValue}
                                    onChange={(e) => setSelectedValue(e.value)}
                                    options={year}
                                    optionLabel="name"
                                    className="select w-100"
                                    placeholder="2023"
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
                                value={selectedValue}
                                onChange={(e) => setSelectedValue(e.value)}
                                options={providers}
                                optionLabel="name"
                                className="select w-100"
                                placeholder="Select Provider"
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
                                value={selectedValue}
                                onChange={(e) => setSelectedValue(e.value)}
                                options={value3}
                                optionLabel="name"
                                className="select w-100"
                                placeholder="Completed"
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
                          onChange={(e:any) => setDate1(e.value)}
                          placeholder="From"
                          className="custom-dropdown"
                        />
                      </div>
                    </div>
                    <div className="chart-date-group">
                      <div className="cal-icon">
                        <Calendar
                          value={date2}
                          onChange={(e:any) => setDate2(e.value)}
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
                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  value={data}
                  paginator
                  rows={10}
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  tableStyle={{ minWidth: '50rem' }}
                >
                  <Column sortable field="id" header="ID"></Column>

                  <Column
                    sortable
                    field="providername"
                    header="ProviderName"
                  ></Column>

                  <Column
                    sortable
                    field="subscription"
                    header="Subscription"
                  ></Column>
                  <Column sortable field="amount" header="Amount"></Column>
                  <Column sortable field="duration" header="Duration"></Column>
                  <Column
                    sortable
                    field="startdate"
                    header="StartDate"
                  ></Column>
                  <Column sortable field="enddate" header="EndDate"></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipTransaction;
