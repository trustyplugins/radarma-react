import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import * as Icon from 'react-feather';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import AnnouncementsModal from '../common/modals/announcements-modal';

const Announcements = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const statusRenderer = (rowData: {
    sendTo:
      | string
      | number
      | boolean
      | React.ReactElement<string | React.JSXElementConstructor<string>>
      | Iterable<React.ReactNode>
      | null
      | undefined;
  }) => {
    if (rowData.sendTo === 'Provider') {
      return (
        <span className="badge bg-warning badge-inactive">
          {rowData.sendTo}
        </span>
      );
    } else if (rowData.sendTo === 'User') {
      return (
        <span className="badge bg-success badge-inactive">
          {rowData.sendTo}
        </span>
      );
    } else {
      return rowData.sendTo;
    }
  };
  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <button
          className="delete-table me-2 border-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#edit-announcement"
        >
          <Icon.Edit className="react-feather-custom" />
        </button>
        <button
          className="delete-table border-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#delete-announcement"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </button>
      </div>
    );
  };
  const data = useSelector((state: any) => state.announcements);

  return (
    <>
      <div>
        <div className="page-wrapper page-settings">
          <div className="content">
            <div className="content-page-header content-page-headersplit">
              <h5>Announcements</h5>
              <div className="list-btn">
                <ul>
                  <li>
                    <div className="filter-sorting">
                      <ul>
                        <li>
                          <Link to="#" className="filter-sets">
                            <Icon.Filter className="react-feather-custom me-2" />
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
                  <li>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#add-announcement"
                    >
                      <i className="fa fa-plus me-2" />
                      Add Announcement
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <div className="table-resposnive">
                  <table className="table datatable">
                    <tbody>
                      <DataTable
                        value={data}
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        tableStyle={{ minWidth: '50rem' }}
                      >
                        <Column sortable field="#" header="#"></Column>
                        <Column
                          sortable
                          field="subject"
                          header="Subject"
                        ></Column>
                        <Column
                          sortable
                          field="message"
                          header="Message"
                        ></Column>
                        <Column
                          sortable
                          field="sendTo"
                          header="Send To"
                          body={statusRenderer}
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
      <AnnouncementsModal />
    </>
  );
};

export default Announcements;
