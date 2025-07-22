/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from 'primereact/datatable'
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import TestimonialsModal from '../common/modals/testimonials-modal';




const Testimonials = () => {

  const data = useSelector((state: any) => state.testmonials);


    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'A - Z' }, { name: 'Z - A' }];

    const renderCustomerNameColumn = (rowData: any) => {
        return (
          <div className="table-profileimage">
            <ImageWithBasePath className='me-2' src={rowData.img} alt="img" style={{ width: '50px', height: 'auto' }} />
            <div className="ml-2">
              {rowData.userName && (
                <span>{rowData.userName.split('\n')[0]}</span>
              )}
              <br />
              {rowData.userName && (
                <span>{rowData.userName.split('\n')[1]}</span>
              )}
            </div>
          </div>
        );
      };
     
      const renderStatusColumn = (rowData: any) => {
        const statusClassName = rowData.status === "Active" ? "badge-active" : "badge-inactive";
      
        return (
          <span className={statusClassName}>
            {rowData.status}
          </span>
        );
      };

      const actionButton =()=>{
        return(
          <div className="table-actions d-flex">
      <Link className="delete-table me-2" to="#" data-bs-toggle="modal" data-bs-target="#edit-testimonial">
          <Icon.Edit className='react-feather-custom'/>
          </Link>
      <Link className="delete-table border-none" to="#">
          <Icon.Trash2 className='react-feather-custom'/>
          </Link>
        </div>
        )
      }
      

      const renderRatingStars = (rowData: any) => {
        const rating = rowData.rating; // Replace with the actual rating value from your data
        const starElements = [];
      
        for (let i = 0; i < 5; i++) {
          if (i < rating) {
            starElements.push(<Icon.Star key={i} className="fas fa-star filled" />);
          } else {
            starElements.push(<Icon.Star key={i} className="fas fa-star filled" />);
          }
        }
      
        return (
          <div className="rating-stars">
            {starElements}
          </div>
        );
      };
      
      
    
    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content">
                    <div className="content-page-header content-page-headersplit">
                        <h5>Testimonials</h5>
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
                                        data-bs-target="#add-testimonial"
                                    >
                                        <i className="fa fa-plus me-2" />
                                        Add Testimonial
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
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" value={data} showGridlines tableStyle={{ minWidth: '50rem' }}>
                                    <Column sortable field="id" header="ID" ></Column>
                                    <Column sortable field="userName" header="UserName" body={renderCustomerNameColumn} ></Column>
                                    <Column sortable header="Icon Column" body={renderRatingStars} />
                                    <Column sortable field="content" header="Content"></Column>
                                    <Column sortable field="createAt" header="createAt"></Column>
                                    <Column sortable field="status" header="status" body={renderStatusColumn}></Column>
                                    <Column sortable field="action" header="Action" body={actionButton}></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
                <TestimonialsModal/>
            </div>

        </>
    )
}

export default Testimonials
