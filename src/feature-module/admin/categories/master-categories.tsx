import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import MCatogriesModal from '../common/modals/master-categories-modal';
import DeleteMCategoriesModal from '../common/modals/delete-master-cat-modal';
import supabase from '../../../supabaseClient';
import { useSession } from '../SessionContext';
const MasterCategoriesList = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Z - A' }];
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { session ,profile} = useSession();
  //console.log(session,profile);
  const [editCategory, setEditCategory] = useState<any>(null);
  const [deleteCategory, setDeleteCategory] = useState<any>(null);

  // 🔹 Fetch Categories
  const fetchCategories = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('master_categories')
      .select('*')
      .order('id', { ascending: true });

    if (!error) setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // 🔹 Add Category
  const handleAddCategory = async (category: string, slug: string) => {
    const { error } = await supabase
      .from('master_categories')
      .insert([{ category, category_slug: slug,user_id:profile.id }]);

    if (!error) fetchCategories();
  };

  // 🔹 Update Category
  const handleUpdateCategory = async (id: number, category: string, slug: string) => {
    const { error } = await supabase
      .from('master_categories')
      .update({ category, category_slug: slug })
      .eq('id', id);

    if (!error) {
      fetchCategories();
      setEditCategory(null);
    }
  };

  // 🔹 Delete Category
  const handleDeleteCategory = async (id: number) => {
    const { error } = await supabase
      .from('master_categories')
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
      .from('master_categories')
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
                    onClick={() => setEditCategory(null)} // reset for Add
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
                <DataTable
                  value={categories}
                  loading={loading}
                  showGridlines
                  tableStyle={{ minWidth: '50rem' }}
                >
                  <Column sortable field="id" header="ID"></Column>
                  <Column sortable field="category" header="Categories"></Column>
                  <Column sortable field="category_slug" header="Categories Slug"></Column>
                  <Column sortable field="created_at" header="Date"></Column>
                  <Column field="featured" header="Featured" body={renderFeaturedSwitch}></Column>
                  <Column header="Action" body={actionButton}></Column>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add / Edit Modal */}
      <MCatogriesModal
        categoryData={editCategory}
        onSave={handleAddCategory}
        onUpdate={handleUpdateCategory}
      />

      {/* Delete Modal */}
      <DeleteMCategoriesModal
        categoryData={deleteCategory}
        onDelete={handleDeleteCategory}
      />
    </>
  );
};

export default MasterCategoriesList;
