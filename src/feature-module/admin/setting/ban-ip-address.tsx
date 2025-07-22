import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React from 'react';

import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';
import SettingsSidebar from '../common/settingssidebar';
import Banipaddressmodal from '../common/modals/ban-ip-address-modal';

const BanIpAddress = () => {
  const data = useSelector((state: any) => state.ipaddressData);
  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <button
          className="delete-table border-none me-2"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#edit-ip"
        >
          <Icon.Edit className="react-feather-custom" />
        </button>
        <button
          className="delete-table border-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-ip"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </button>
      </div>
    );
  };

  return (
    <>
      {/* Hello world */}
      <div className="page-wrapper ">
        <div className="content w-100 ps-0 pt-0">
          <SettingsSidebar />
          <div className="row">
            <div className="content-table">
              <div className="content-page-header content-page-headersplit">
                <h5>Ban IP Address</h5>
                <div className="page-head-btn">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#add-ip"
                  >
                    <i className="fa fa-plus me-2" />
                    Ban IP Address
                  </button>
                </div>
              </div>
              <div className="col-12">
                <div className="table-resposnive table-bottom">
                  <table className="table datatable">
                    <tbody>
                      <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        value={data}
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        tableStyle={{ minWidth: '50rem' }}
                      >
                        <Column
                          sortable
                          field="ipAddress"
                          header="IpAddress"
                        ></Column>
                        <Column
                          sortable
                          field="reason"
                          header="Reason"
                        ></Column>
                        <Column sortable field="date" header="Date"></Column>
                        <Column
                          sortable
                          field="action"
                          header="Action"
                          body={actionButton}
                        ></Column>
                      </DataTable>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banipaddressmodal />
      <></>
    </>
  );
};

export default BanIpAddress;
