import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubCatogriesModal from '../common/modals/subcategories-modal';
import DeleteSubCategoriesModal from '../common/modals/delete-subcategories-modal';
import supabase from '../../../supabaseClient';
import { useSession } from '../SessionContext';
const MainCategoryList = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { session, profile } = useSession();
  const [editCategory, setEditCategory] = useState<any>(null);
  const [deleteCategory, setDeleteCategory] = useState<any>(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const data = useSelector((state: any) => state.categoriesData);
  
  // 🔹 Fetch Categories
  const fetchCategories = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('sub_categories')
      .select(`
            id,
            category,
            category_slug,
            image_url,
            created_at,
            parent_id,
            main_categories:parent_id ( category )
          `)
      .order('id', { ascending: true });

    if (!error && data) setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async (category: string, slug: string, image_url: string, featured: boolean,parentId: number | null) => {
    const { error } = await supabase
      .from('sub_categories')
      .insert([{ category, category_slug: slug, image_url: image_url, featured: featured,parent_id: parentId, user_id: profile.id }]);

    if (!error) fetchCategories();
  };

  // 🔹 Update Category
  const handleUpdateCategory = async (id: number, category: string, slug: string, image_url: string, featured: boolean,parentId: number | null) => {
    const { error } = await supabase
      .from('sub_categories')
      .update({ category, category_slug: slug, image_url: image_url, featured: featured,parent_id: parentId })
      .eq('id', id);

    if (!error) {
      fetchCategories();
      setEditCategory(null);
    }
  };

  // 🔹 Delete Category
  const handleDeleteCategory = async (id: number) => {
    const { error } = await supabase
      .from('sub_categories')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchCategories();
      setDeleteCategory(null);
    }
  };
  const toggleFeatured = async (rowData: any) => {
    const { error } = await supabase
      .from('sub_categories')
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
                    Add Sub Category
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
                    <Column
                      header="Main Category"
                      body={(rowData) =>
                        rowData.main_categories?.category ? rowData.main_categories.category : <span style={{ color: '#999' }}>No Parent</span>
                      }
                    />
                    <Column sortable field="category" header="Categories"></Column>
                    <Column sortable field="category_slug" header="Slug"></Column>
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
      <SubCatogriesModal
        categoryData={editCategory}
        onSave={handleAddCategory}
        onUpdate={handleUpdateCategory} />
      <DeleteSubCategoriesModal 
      categoryData={deleteCategory}
        onDelete={handleDeleteCategory} />
    </>
  )
};

export default MainCategoryList;
