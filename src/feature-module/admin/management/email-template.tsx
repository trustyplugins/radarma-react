import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { Column } from 'primereact/column';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import { useSelector } from 'react-redux';
import EmailTemplateModal from '../common/modals/email-template-modal';
import DeleteEmailTemplateModal from '../common/modals/delete-email-template-modal';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';

const EmailTemplate = () => {
  const data = useSelector((state: any) => state.email_template);

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <Link
          className="delete-table me-2"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#edit-email-template"
        >
          <Icon.Edit className="react-feather-custom" />
        </Link>
        <Link
          className="delete-table border-none"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#delete-email-template"
        >
          <Icon.Trash2 className="react-feather-custom" />
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Email Templates</h5>
            <div className="list-btn">
              <ul>
                <li>
                  <Link className="btn-filters" to="/admin/email-settings">
                    <Icon.Settings className="react-feather-custom me-2" />
                  </Link>
                </li>
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
                  <Column
                    sortable
                    field="referenceId"
                    header="Reference Id"
                  ></Column>
                  <Column
                    sortable
                    field="emailTitle"
                    header="Email Title"
                  ></Column>
                  <Column sortable field="date" header="Date"></Column>
                  <Column
                    sortable
                    field="action"
                    header="Action"
                    body={actionButton}
                  ></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
        <EmailTemplateModal />
        <DeleteEmailTemplateModal />
      </div>
    </>
  );
};

export default EmailTemplate;
