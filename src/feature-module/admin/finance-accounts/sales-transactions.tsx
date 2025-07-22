import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Salestransactionsmodal from '../common/modals/sales-transactions-modal';
import { SalesTransactiondatas } from '../../../core/models/interface';

const SalesTransactions = () => {
  const data = useSelector(
    (state: any) => state.sales_transactions,
  );

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const userName = (data: SalesTransactiondatas) => {
    return (
      <div className="table-namesplit">
        <Link to="#" className="table-profileimage">
          <img src={data.customer1.image} className="me-2" alt="img" />
        </Link>
        <Link to="#" className="table-name">
          <span>{data.customer1.name}</span>
          <p>{data.customer1.email}</p>
        </Link>
      </div>
    );
  };

  const providerName = (data: SalesTransactiondatas) => {
    return (
      <div className="table-namesplit">
        <Link to="#" className="table-profileimage">
          <img src={data.customer2.image} className="me-2" alt="img" />
        </Link>
        <Link to="#" className="table-name">
          <span>{data.customer2.name}</span>
          <p>{data.customer2.email}</p>
        </Link>
      </div>
    );
  };

  const serviceName = (data: SalesTransactiondatas) => {
    return (
      <div>
        <Link to="#" className="table-imgname">
          <img src={data.service.image} className="me-2" alt="img" />
          <span>{data.service.name}</span>
        </Link>
      </div>
    );
  };

  const statusbar = (data: SalesTransactiondatas) => {
    return (
      <div>
        <h6 className={data.status.badgeClass}>{data.status.text}</h6>
      </div>
    );
  };
  const actionbar = () => {
    return (
      <div className="table-actions d-flex">
        <button
          className="delete-table border-none me-2"
          type="button"
          data-bs-target="#"
        >
          <Icon.FileText className="react-feather-custom" />
        </button>
        <button
          className="delete-table border-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-item"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Sales Transactions</h5>
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
                  <Column sortable field="id" header="#"></Column>

                  <Column
                    sortable
                    field="customer1.name"
                    header="User"
                    body={userName}
                  ></Column>

                  <Column
                    sortable
                    field="customer2.name"
                    header="Provider"
                    body={providerName}
                  ></Column>

                  <Column
                    sortable
                    field="service.name"
                    header="Service"
                    body={serviceName}
                  ></Column>

                  <Column sortable field="price" header="Amount"></Column>
                  <Column sortable field="discount" header="Discount"></Column>
                  <Column sortable field="tax" header="Tax"></Column>
                  <Column sortable field="date" header="Date"></Column>
                  <Column
                    sortable
                    field="payment_method"
                    header="Pay Type"
                  ></Column>
                  <Column
                    sortable
                    field="status.text"
                    header="Status"
                    body={statusbar}
                  ></Column>
                  <Column
                    sortable
                    field="Action"
                    header="Action"
                    body={actionbar}
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
          <Salestransactionsmodal />
        </div>
      </div>
    </>
  );
};

export default SalesTransactions;
