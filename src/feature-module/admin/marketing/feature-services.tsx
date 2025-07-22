import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import FeaturedServicesModal from '../common/modals/featured-services-modal';
import { all_routes } from '../../../core/data/routes/all_routes';

const routes = all_routes;
import DeleteFeaturedServiceModal from '../common/modals/delete-featured-service-modal';
import { Link } from 'react-router-dom';

const FeatureServices = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const data = useSelector(
    (state: any) => state.featureService,
  );

  const actionButton = () => {
    return (
      <div className="table-actions d-flex">
        <Link className="delete-table me-2" to={routes.viewService}>
          <Icon.Eye className="react-feather-custom" />
        </Link>
        <Link
          className="delete-table me-2"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#edit-features"
        >
          <Icon.Edit className="react-feather-custom" />
        </Link>
        <Link
          className="delete-table border-none"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#delete-item"
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
            <h5>Featured Services</h5>
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
                  <Link
                  to="#"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add-features"
                   
                  >
                    <i className="fa fa-plus me-2" />
                    Add Feature Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <div className="table-resposnive">
                <DataTable
                  value={data}
                  showGridlines
                  tableStyle={{ minWidth: '50rem' }}
                >
                  <Column sortable field="id" header="#"></Column>
                  <Column sortable field="service" header="Service"></Column>
                  <Column
                    sortable
                    field="serviceStatus"
                    header="ServiceStatus"
                    className="badge-active"
                  ></Column>
                  <Column sortable field="category" header="Category"></Column>
                  <Column sortable field="amount" header="Amount"></Column>
                  <Column
                    sortable
                    field="providerName"
                    header="ProviderName"
                  ></Column>
                  <Column
                    sortable
                    field="status"
                    header="Status"
                    className="badge-active"
                  ></Column>
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
        <FeaturedServicesModal />
        <DeleteFeaturedServiceModal />
      </div>
    </>
  );
};

export default FeatureServices;
