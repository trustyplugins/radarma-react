import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';

const ProviderEarnings = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const actionBodyTemplate = () => {
    return (
      <td>
        <div className="table-actions">
          <Link className="action-set" to="#">
            <Icon.Edit size={15} />
          </Link>
          <Link className="action-set confirm-text" to="#">
            <Icon.Trash2 size={15} />
          </Link>
        </div>
      </td>
    );
  };
  const data = useSelector(
    (state: any) => state.provider_earning,
  );

  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-md-4">
                <div className="provider-subtitle">
                  <h6>Earnings</h6>
                </div>
              </div>
              <div className="col-md-8 d-flex align-items-center justify-content-md-end flex-wrap">
                <div className="review-sort me-2">
                  <p>Sort</p>
                  <Dropdown
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.value)}
                    options={value}
                    optionLabel="name"
                    placeholder="A - Z"
                    className="select provider-select select-space"
                  />
                </div>
                <div className="grid-listview me-2">
                  <ul>
                    <li>
                      <Link to="#">
                        <Icon.Filter className="react-feather-custom me-2" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Coupons */}
          <div className="row">
            <div className="col-md-12">
              <div className="provide-table manage-table">
                <div className="table-responsive">
                  <table
                    className="table custom-table datatable mb-0"
                    id="data-table"
                  >
                    <thead className="thead-light"></thead>
                    <tbody>
                      <DataTable
                        paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        value={data}
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                      >
                        <Column sortable field="#" header="#"></Column>
                        <Column
                          field="service"
                          header="Service"
                          body={(rowData) => (
                            <td>
                              <h2 className="table-avatar table-sml">
                                <Link to="#" className="avatar avatar-m me-2">
                                  <ImageWithBasePath
                                    className="avatar-img rounded"
                                    src={rowData.img}
                                    alt="User Image"
                                  />
                                </Link>
                                <Link to="#">{rowData.service}</Link>
                              </h2>
                            </td>
                          )}
                        ></Column>
                        <Column
                          sortable
                          field="EarnedAmount"
                          header="EarnedAmount"
                        ></Column>
                        <Column sortable field="date" header="Date"></Column>
                        <Column
                          sortable
                          field="action"
                          header="Action"
                          body={actionBodyTemplate}
                        ></Column>
                      </DataTable>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div id="tablelength" />
                </div>
                <div className="col-md-9">
                  <div className="table-ingopage">
                    <div id="tableinfo" />
                    <div id="tablepagination" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Coupons */}
        </div>
      </div>
    </>
  );
};

export default ProviderEarnings;
