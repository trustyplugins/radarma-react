import { DataTable } from 'primereact/datatable';
import React from 'react';

import { Column } from 'primereact/column';

import { useSelector } from 'react-redux';
import SettingsSidebar from '../common/settingssidebar';

const DeviceManagementSettting = () => {
  const data = useSelector(
    (state: any) => state.device_managementdata,
  );

  const status = () => {
    return (
      <div>
        <h6 className="badge-delete">Delete</h6>
      </div>
    );
  };
  return (
    <>
      <div className="page-wrapper page-settings">
        <SettingsSidebar />
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Device Management</h5>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive">
                <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" value={data}>
                  <Column sortable field="device" header="Device"></Column>
                  <Column sortable field="date" header="Date"></Column>
                  <Column sortable field="location" header="Location"></Column>
                  <Column
                    sortable
                    field="ipAddress"
                    header="IP Address"
                  ></Column>
                  <Column
                    sortable
                    field="status"
                    header="Status"
                    body={status}
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

export default DeviceManagementSettting;
