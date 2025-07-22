import React from 'react';
import SettingsSidebar from '../common/settingssidebar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';
import DatabasebackupModal from '../common/modals/database-backup-modal';

const Databasebackup = () => {
  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <Link className="delete-table me-2" to="#">
          <Icon.Download className="react-feather-custom" />
        </Link>
        <Link
          className="delete-table"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#delete-item"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </Link>
      </div>
    );
  };

  const data = useSelector((state: any) => state.database_backup_data);

  return (
    <>
      <div className="page-wrapper page-settings">
        <SettingsSidebar />
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Database Backup</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-target="#"
                  >
                    Generate Database Backup
                  </button>
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
                >
                  <Column sortable field="name" header="File Name"></Column>
                  <Column sortable field="date" header="Date"></Column>
                  <Column
                    sortable
                    field="Action"
                    header="Action"
                    body={actionButton}
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
          <DatabasebackupModal />
        </div>
      </div>
    </>
  );
};

export default Databasebackup;
