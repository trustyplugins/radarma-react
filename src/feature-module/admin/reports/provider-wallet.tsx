import React, { useState } from 'react';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import ReactApexChart from 'react-apexcharts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProviderWallet = () => {
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const [selectedValue4, setSelectedValue4] = useState(null);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const data = useSelector((state: any) => state.provider_wallet);

  const barChart = {
    chart: {
      type: 'bar',
      height: 350,
      width: '100%',
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
        columnWidth: '30%',
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    series: [
      {
        color: '#000',
        data: [420, 532, 516, 575, 519, 517, 454, 392, 262, 383, 446, 551],
      },
    ],
    labels: [
      2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
    ],
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#777',
        },
      },
    },
  };
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
  const serviceImage = (rowData: any) => {
    const [service] = rowData.service.split('\n');
    return (
      <Link to="#" className="table-imgname">
        <ImageWithBasePath src={rowData.img} className="me-2" alt="img" />
        <span>{service}</span>
      </Link>
    );
  };
  const statusButton = (rowData: any) => {
    if (rowData.status === 'Completed') {
      return (
        <span className="badge-active completed-active-badge">
          {rowData.status}
        </span>
      );
    } else if (rowData.status === 'Inprogress') {
      return (
        <span className="badge-active inprogress loading-inprogress">
          {rowData.status}
        </span>
      );
    }
  };


  return (
    <div className="page-wrapper page-settings">
      <div className="content">
        <div className="content-page-header content-page-headersplit">
          <h5>Providers Wallet</h5>
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
                      <h4>Provider Wallet report</h4>
                      <ul>
                        <li>
                          <span className="earning-black" />
                          Withdrawn
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
                  options={barChart}
                  series={barChart.series}
                  type="bar"
                  height={350}
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
                  paginator
                  rows={10}
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  tableStyle={{ minWidth: '50rem' }}
                >
                  <Column sortable field="#" header="#"></Column>
                  <Column
                    sortable
                    field="service"
                    header="Service"
                    body={serviceImage}
                  ></Column>
                  <Column sortable field="provider" header="Provider"></Column>
                  <Column sortable field="amount" header="Amount"></Column>
                  <Column
                    sortable
                    field="status"
                    header="Status"
                    body={statusButton}
                  ></Column>
                  <Column sortable field="date" header="Date"></Column>
                </DataTable>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderWallet;
