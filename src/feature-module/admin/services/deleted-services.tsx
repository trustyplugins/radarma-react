import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useSelector } from 'react-redux';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../core/data/routes/all_routes';
import { deletedServices } from '../../../core/models/interface';
import * as Icon from 'react-feather';
import DeletedServicesModal from '../common/modals/deleted-services-modal';

const DeletedServices = () => {
  const data = useSelector(
    (state: any) => state.deleted_services_data,
  );
  const routes = all_routes;

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const actionButton = () => {
    return (
      <div className="action-language">
        <Link className="table-edit" to="/admin/edit-service">
          <i className="fa-regular fa-pen-to-square" />
          <span>Edit</span>
        </Link>
        <Link
          className="table-delete"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#delete-item"
        >
          <i className="fa-solid fa-trash-can" />
          <span>Delete</span>
        </Link>
      </div>
    );
  };

  const statusBar = () => {
    return (
      <div>
        <h6 className="badge-delete">Delete</h6>
      </div>
    );
  };

  const Servicesdata = (data: deletedServices) => {
    return (
      <div>
        <div className="table-imgname">
          <Link to="/view-service">
            <ImageWithBasePath src={data.image} className="me-2" alt="img" />
            <span>{data.name}</span>
          </Link>
        </div>
      </div>
    );
  };
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(routes.addServices);
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Deleted Services</h5>
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

                <li>
                  <button
                    className="btn btn-primary"
                    onClick={handleButtonClick}
                  >
                    <i className="fa fa-plus me-2" />
                    Add Services
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="tab-sets">
                <div className="tab-contents-sets">
                  <ul>
                    <li>
                      <Link to={routes.allServices}>All Services</Link>
                    </li>
                    <li>
                      <Link to={routes.activeServices}>Active</Link>
                    </li>
                    <li>
                      <Link to={routes.pendingServices}>Pending </Link>
                    </li>
                    <li>
                      <Link to={routes.inActiveServices}>Inactive </Link>
                    </li>
                    <li>
                      <Link to="/deleted-services" className="active">
                        Deleted
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tab-contents-count">
                  <h6>Showing 8-10 of 84 results</h6>
                </div>
              </div>
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
                  <Column sortable field="id" header="Id"></Column>
                  <Column
                    sortable
                    field="image"
                    header="Service"
                    body={Servicesdata}
                  ></Column>
                  <Column sortable field="category" header="Category"></Column>
                  <Column sortable field="sub" header="Sub-Category"></Column>

                  <Column sortable field="amt" header="Amount"></Column>
                  <Column sortable field="date1" header="Date"></Column>
                  <Column
                    sortable
                    field="status"
                    header="Status"
                    body={statusBar}
                  ></Column>
                  <Column sortable field="created" header="Created By"></Column>

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
        </div>
        <DeletedServicesModal />
      </div>
    </>
  );
};

export default DeletedServices;
