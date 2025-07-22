import { DataTable } from 'primereact/datatable'
import React, { useState } from 'react'
import { Column } from 'primereact/column';
import { Link } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';
import * as Icon from 'react-feather';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import CatogriesModal from '../common/modals/catogries-modal';
import { useSelector } from 'react-redux';
import DeleteCategoriesModal from '../common/modals/delete-categories-modal';

const CategoriesList = () => {


    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
    const data = useSelector((state: any) => state.categoriesData);

    const renderFeaturedSwitch = () => {
        return (
            <div className="active-switch">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="sliders round"></span>
                </label>
            </div>
        );
    };

    const actionButton = () => {
        return (
            <div className="table-actions d-flex">
                <Link className="delete-table me-2" to="#" data-bs-toggle="modal" data-bs-target="#edit-category">
                    <Icon.Edit className='react-feather-custom' />
                </Link>
                <Link className="delete-table border-none" to="#" data-bs-toggle="modal" data-bs-target="#delete-category">
                    <Icon.Trash2 className='react-feather-custom' />
                </Link>
            </div>
        )
    }

    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content">
                    <div className="content-page-header content-page-headersplit mb-0">
                        <h5>Categories</h5>
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
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#add-category"
                                    >
                                        <i className="fa fa-plus me-2" />
                                        Add Category
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ">
                            <div className="table-resposnive table-div">
                                <DataTable value={data} showGridlines tableStyle={{ minWidth: '50rem' }}>
                                    <Column sortable field="id" header="ID" ></Column>
                                    <Column sortable field="category" header="Categories" ></Column>
                                    <Column sortable field="categorySlug" header="Categories  Slug"></Column>
                                    <Column sortable field="Date" header="Date"></Column>
                                    <Column sortable field="featured" header="Featured" body={renderFeaturedSwitch}></Column>
                                    <Column sortable field="Action" header="Action" body={actionButton}></Column>
                                </DataTable>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CatogriesModal />
            <DeleteCategoriesModal/>
        </>
    )
}

export default CategoriesList
