import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import SubTagsModal from '../common/modals/subtags-modal';
import DeleteSubtagsModal from '../common/modals/delete-subtags-modal';
import supabase from '../../../supabaseClient';
import { useSession } from '../SessionContext';
const SubTags = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const { session, profile } = useSession();
    //console.log(session,profile);
    const [editCategory, setEditCategory] = useState<any>(null);
    const [deleteCategory, setDeleteCategory] = useState<any>(null);

    // 🔹 Fetch Categories
    const fetchCategories = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('sub_tags')
            .select(`
            id,
            category,
            category_slug,
            image_url,
            created_at,
            parent_id,
           tags:parent_id ( category )
          `)
            .order('id', { ascending: true });

        if (!error) setCategories(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // 🔹 Add Category
    const handleAddCategory = async (category: string, slug: string, image_url: string, featured: boolean,parentId: number | null) => {
        const { error } = await supabase
            .from('sub_tags')
            .insert([{ category, category_slug: slug, image_url: image_url,parent_id: parentId, user_id: profile.id }]);

        if (!error) fetchCategories();
    };

    // 🔹 Update Category
    const handleUpdateCategory = async (id: number, category: string, slug: string, image_url: string, featured: boolean,parentId: number | null) => {
        const { error } = await supabase
            .from('sub_tags')
            .update({ category, category_slug: slug, image_url: image_url,parent_id: parentId})
            .eq('id', id);

        if (!error) {
            fetchCategories();
            setEditCategory(null);
        }
    };

    // 🔹 Delete Category
    const handleDeleteCategory = async (id: number) => {
        const { error } = await supabase
            .from('sub_tags')
            .delete()
            .eq('id', id);

        if (!error) {
            fetchCategories();
            setDeleteCategory(null);
        }
    };

    // 🔹 Toggle Featured
    const toggleFeatured = async (rowData: any) => {
        const { error } = await supabase
            .from('sub_tags')
            .update({ featured: !rowData.featured })
            .eq('id', rowData.id);

        if (!error) fetchCategories();
    };

    const renderFeaturedSwitch = (rowData: any) => (
        <div className="active-switch">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={rowData.featured}
                    onChange={() => toggleFeatured(rowData)}
                />
                <span className="sliders round"></span>
            </label>
        </div>
    );

    const actionButton = (rowData: any) => (
        <div className="table-actions d-flex">
            <Link
                className="delete-table me-2"
                to="#"
                onClick={() => setEditCategory(rowData)}
                data-bs-toggle="modal"
                data-bs-target="#add-category"
            >
                <Icon.Edit className="react-feather-custom" />
            </Link>
            <Link
                className="delete-table border-none"
                to="#"
                onClick={() => setDeleteCategory(rowData)}
                data-bs-toggle="modal"
                data-bs-target="#delete-category"
            >
                <Icon.Trash2 className="react-feather-custom" />
            </Link>
        </div>
    );

    return (
        <>
            <div className="page-wrapper page-settings">
                <div className="content">
                    <div className="content-page-header content-page-headersplit mb-0">
                        <h5>Sub Tags</h5>
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
                                        onClick={() => setEditCategory(null)} // reset for Add
                                    >
                                        <i className="fa fa-plus me-2" />
                                        Add Sub Tag
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 ">
                            <div className="table-resposnive table-div">
                            <table className="table datatable">
                                <DataTable
                                    value={categories}
                                    loading={loading}
                                    showGridlines
                                    tableStyle={{ minWidth: '50rem' }}
                                >
                                    <Column sortable field="id" header="ID"></Column>
                                    <Column
                                        field="image_url"
                                        header="Image"
                                        body={(rowData) =>
                                            rowData.image_url ? (
                                                <img
                                                    src={rowData.image_url}
                                                    alt={rowData.category}
                                                    style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
                                                />
                                            ) : (
                                                <span style={{ color: '#999' }}>No Image</span>
                                            )
                                        }
                                    ></Column>
                                    <Column sortable field="category" header="Categories"></Column>
                                    <Column sortable field="category_slug" header="Categories Slug"></Column>
                                    {/* <Column sortable field="created_at" header="Date"></Column> */}
                                    {/* <Column field="featured" header="Featured" body={renderFeaturedSwitch}></Column> */}
                                    <Column header="Action" body={actionButton}></Column>
                                </DataTable>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add / Edit Modal */}
            <SubTagsModal
                categoryData={editCategory}
                onSave={handleAddCategory}
                onUpdate={handleUpdateCategory}
            />

            {/* Delete Modal */}
            <DeleteSubtagsModal
                categoryData={deleteCategory}
                onDelete={handleDeleteCategory}
            />
        </>
    );
};

export default SubTags;
