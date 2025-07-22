import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import { RefundRequestdatas } from '../../../core/models/interface';

const RefundRequest = () => {
  const data = useSelector((state: any) => state.refund_request);

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const providerName = (data: RefundRequestdatas) => {
    return (
      <div>
        <Link to="#" className="table-profileimage">
          <img src={data.customer} className="me-2" alt="img" />
          <span>{data.customerName}</span>
        </Link>
      </div>
    );
  };

  const userName = (data: RefundRequestdatas) => {
    return (
      <div>
        <Link to="#" className="table-profileimage">
          <img src={data.customer1} className="me-2" alt="img" />
          <span>{data.customerName1}</span>
        </Link>
      </div>
    );
  };

  const serviceName = (data: RefundRequestdatas) => {
    return (
      <div>
        <Link to="#" className="table-profileimage">
          <img src={data.profile} className="me-2" alt="img" />
          <span>{data.texts}</span>
        </Link>
      </div>
    );
  };

  const statusBar = (data: RefundRequestdatas) => {
    return (
      <div>
        <h6 className={data.bg}>{data.pending}</h6>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Refund Request</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <div className="filter-sorting">
                    <ul>
                      <li>
                        <Link to="#" className="filter-sets">
                          <Icon.Filter className="react-feather-custom me-2"></Icon.Filter>
                          Filter
                        </Link>
                      </li>
                      <li>
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/sort.svg"
                            className="me-2"
                            alt="img"
                          />
                        </span>
                        <div className="review-sort">
                          <Dropdown
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.value)}
                            options={value}
                            optionLabel="name"
                            placeholder="A - Z"
                            className="select admin-select-breadcrumb"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive">
                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                  value={data}
                  showGridlines
                  tableStyle={{ minWidth: '50rem' }}
                >
                  <Column sortable field="id" header="Id"></Column>
                  <Column
                    sortable
                    field="customer"
                    header="Provider Name"
                    body={providerName}
                  ></Column>
                  <Column
                    sortable
                    field="customer1"
                    header="User Name"
                    body={userName}
                  ></Column>
                  <Column
                    sortable
                    field="profile"
                    header="Service"
                    body={serviceName}
                  ></Column>
                  <Column sortable field="amt" header="Amount"></Column>
                  <Column sortable field="dates" header="Date"></Column>
                  <Column
                    sortable
                    field="reason"
                    header="Deleted Reason"
                  ></Column>
                  <Column
                    sortable
                    field="pending"
                    header="Status"
                    body={statusBar}
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RefundRequest;
