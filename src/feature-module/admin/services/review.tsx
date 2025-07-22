import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Review = () => {
  const data = useSelector((state:any) => state.review_data);

  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

  const providerName = (data: any) => {
    return (
      <div>
        <Link to="#" className="table-profileimage">
          <img src={data.customer1.image} className="me-2" alt="img" />
          <span>{data.customer1.name}</span>
        </Link>
      </div>
    );
  };

  const userName = (data: any) => {
    return (
      <div>
        <Link to="#" className="table-profileimage">
          <img src={data.customer2.image} className="me-2" alt="img" />
          <span>{data.customer2.name}</span>
        </Link>
      </div>
    );
  };

  const serviceName = (data: any) => {
    return (
      <div>
        <Link to="#" className="table-imgname">
          <img src={data.service.image} className="me-2" alt="img" />
          <span>{data.service.name}</span>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <div className="content">
          <div className="content-page-header content-page-headersplit">
            <h5>Reviews</h5>
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
                  <Column sortable field="id" header="#"></Column>
                  <Column sortable field="date" header="Date"></Column>

                  <Column
                    sortable
                    field="customer1.name"
                    header="Provider"
                    body={providerName}
                  ></Column>

                  <Column
                    sortable
                    field="customer2.name"
                    header="User"
                    body={userName}
                  ></Column>

                  <Column
                    sortable
                    field="service.name"
                    header="Service"
                    body={serviceName}
                  ></Column>

                  <Column sortable field="status" header="Type"></Column>
                  <Column sortable field="rating" header="Ratings"></Column>
                  <Column sortable field="review" header="Comments"></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
