import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import InactiveServicesModal from '../common/modals/inactive-services-modal';
import { all_routes } from '../../../core/data/routes/all_routes';

const InactiveServices = () => {
  const routes = all_routes;
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const data = useSelector((state: any) => state.inactive_services);

  const serviceImage = (rowData: any) => {
    const [service] = rowData.service.split('\n');
    return (
      <Link to="#" className="table-imgname">
        <ImageWithBasePath src={rowData.img} className="me-2" alt="img" />
        <span>{service}</span>
      </Link>
    );
  };
  const statusButton = (rowData: any) => {
    const [status] = rowData.status.split('\n');
    return <h6 className="badge-inactive">{status}</h6>;
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Inactive Services</h5>
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
                  <Link className="btn btn-primary" to={routes.addServices}>
                    <i className="fa fa-plus me-2" />
                    Add Services{' '}
                  </Link>
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
                      <Link to={routes.inActiveServices} className="active">
                        Inactive{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to={routes.deletedServices}>Deleted </Link>
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
              <div className="table-resposnive table-div">
                <table className="table datatable">
                  <DataTable
                    paginatorTemplate="RowsPerPageDropdown CurrentPageReport PrevPageLink PageLinks NextPageLink  "
                    currentPageReportTemplate="{first} to {last} of {totalRecords}"
                    value={data}
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ minWidth: '50rem' }}
                  >
                    <Column sortable field="#" header="#"></Column>
                    <Column
                      sortable
                      field="service"
                      header="Service"
                      body={serviceImage}
                    ></Column>
                    <Column
                      sortable
                      field="category"
                      header="Category"
                    ></Column>
                    <Column
                      sortable
                      field="subCategory"
                      header="Sub Category"
                    ></Column>
                    <Column sortable field="price" header="Price"></Column>
                    <Column
                      sortable
                      field="duration"
                      header="Duration"
                    ></Column>
                    <Column
                      sortable
                      field="status"
                      header="Status"
                      body={statusButton}
                    ></Column>
                    <Column
                      sortable
                      field="createdBy"
                      header="Created By"
                    ></Column>
                  </DataTable>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InactiveServicesModal />
    </>
  );
};

export default InactiveServices;
