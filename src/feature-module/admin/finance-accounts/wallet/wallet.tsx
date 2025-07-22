/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { Column } from 'primereact/column';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { all_routes } from '../../../../core/data/routes/all_routes';

const routes = all_routes;

const Wallet = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const data = useSelector((state: any) => state.wallet);

  const renderCustomerNameColumn = (rowData: any) => {
    return (
      <div className="table-profileimage">
        <ImageWithBasePath
          className="me-2"
          src={rowData.img}
          alt="img"
          style={{ width: '50px', height: 'auto' }}
        />
        <div className="ml-2">
          {rowData.userName && <span>{rowData.userName.split('\n')[0]}</span>}
          <br />
          {rowData.userName && <span>{rowData.userName.split('\n')[1]}</span>}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Wallet</h5>
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
                            src="assets/admin/img/icons/sort.svg"
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
                  <Column sortable field="id" header="ID"></Column>
                  <Column
                    sortable
                    field="userName"
                    header="UserName"
                    body={renderCustomerNameColumn}
                  ></Column>
                  <Column sortable field="phone" header="Phone"></Column>
                  <Column sortable field="balance" header="Balance"></Column>
                  <Column
                    sortable
                    field="action"
                    header="Action"
                    body={() => (
                      <td>
                        <Link
                          to={routes.walletHistory}
                          className="btn btn-history"
                        >
                          History
                        </Link>
                      </td>
                    )}
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

export default Wallet;
