import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import DefaultEditor from 'react-simple-wysiwyg';
import * as Icon from 'react-feather';
import supabase from '../../../../supabaseClient';
import { MultiSelect } from 'primereact/multiselect';
import { InputSwitch } from 'primereact/inputswitch';
type AdditionalRow = {
  id: number;
  additionalService: string;
  price: number;
  duration: string;
  speciality: boolean;
};

type Option = { id: number; name: string };
type TagOption = { id: number; name: string };

export type ServiceInformationValue = {
  title: string;
  masterCategory: Option | null;
  category: Option[];
  mainCategory: Option[];
  subCategory: Option[];
  description: string;
  additionalEnabled: boolean;
  additional: AdditionalRow[];
  videoUrl?: string;
  tags: TagOption[];
  subTags: TagOption[];
};

type Props = {
  value: ServiceInformationValue;
  onChange: (patch: Partial<ServiceInformationValue>) => void;
  nextTab: () => void;
};

const ServiceInformation: React.FC<Props> = ({ value, onChange, nextTab }) => {

  const [masterOptions, setMasterOptions] = useState<Option[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<Option[]>([]);
  const [mainCategoryOptions, setMainCategoryOptions] = useState<Option[]>([]);
  const [subCategoryOptions, setSubCategoryOptions] = useState<Option[]>([]);
  const [tagsOptions, setTagsOptions] = useState<TagOption[]>([]);
  const [subTagsOptions, setSubTagsOptions] = useState<TagOption[]>([]);

  // fetch master categories
  useEffect(() => {
    const fetchMasterCategories = async () => {
      const { data, error } = await supabase
        .from('cities') // adjust table
        .select('id, category');
      if (!error && data) {
        setMasterOptions(data.map(mc => ({ id: mc.id, name: mc.category })));
      }
    };
    fetchMasterCategories();
  }, []);

  // fetch categories when masterCategory changes
  useEffect(() => {
    const fetchCategories = async () => {
      if (!value.masterCategory) {
        setCategoryOptions([]);
        return;
      }
      const { data, error } = await supabase
        .from('sectors')
        .select('id, category')
        .eq('parent_id', value.masterCategory.id);
      if (!error && data) {
        setCategoryOptions(data.map(c => ({ id: c.id, name: c.category })));
      }
    };
    fetchCategories();
  }, [value.masterCategory]);

  // fetch main Categories
  useEffect(() => {
    const fetchMainCategories = async () => {
      const { data, error } = await supabase
        .from('main_categories')
        .select('id, category');
      if (!error && data) {
        setMainCategoryOptions(data.map(sc => ({ id: sc.id, name: sc.category })));
      }
    };
    fetchMainCategories();
  }, []);

  // fetch subcategories when mainCategory changes
  useEffect(() => {
    const fetchSubCategories = async () => {
      if (!value.mainCategory?.length) {
        setSubCategoryOptions([]);
        return;
      }
      const ids = value.mainCategory.map(c => c.id);
      const { data, error } = await supabase
        .from('sub_categories')
        .select('id, category, parent_id')
        .in('parent_id', ids);
      if (!error && data) {
        setSubCategoryOptions(data.map(sc => ({ id: sc.id, name: sc.category })));
      }
    };
    fetchSubCategories();
  }, [value.mainCategory]);

  // fetch tags
  useEffect(() => {
    const fetchTags = async () => {
      const { data, error } = await supabase.from('tags').select('id, category');
      if (!error && data) {
        setTagsOptions(data.map(t => ({ id: t.id, name: t.category })));
      }
    };
    fetchTags();
  }, []);

  // fetch subTags when tags change
  useEffect(() => {
    const fetchSubTags = async () => {
      if (!value.tags?.length) {
        setSubTagsOptions([]);
        return;
      }
      const ids = value.tags.map(t => t.id);
      const { data, error } = await supabase
        .from('sub_tags')
        .select('id, category, parent_id')
        .in('parent_id', ids);
      if (!error && data) {
        setSubTagsOptions(data.map(st => ({ id: st.id, name: st.category })));
      }
    };
    fetchSubTags();
  }, [value.tags]);

  // additional rows
  const addNewServiceRow = () => {
    const newId = (value.additional?.length || 0) + 1;
    onChange({
      additional: [
        ...(value.additional || []),
        { id: newId, additionalService: '', price: 0, duration: '', speciality: false },
      ],
    });
  };

  const deleteServiceRow = (id: number) => {
    onChange({ additional: (value.additional || []).filter(r => r.id !== id) });
  };

  const handleRowChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value: v } = e.target;
    const next = (value.additional || []).map(r =>
      r.id === id ? { ...r, [name]: name === 'price' ? Number(v) : v } : r
    );
    onChange({ additional: next });
  };
  return (
    <fieldset id="first-field">
      <div className="container-service space-service">
        <div className="sub-title"><h6>Service Information</h6></div>
        <div className="row">
          {/* Title */}
          <div className="col-md-6">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={value.title}
                onChange={e => onChange({ title: e.target.value })}
              />
            </div>
          </div>

          {/* Master Category (City) */}
          <div className="col-md-6">
            <div className="form-group">
              <label>City</label>
              <Dropdown
                value={value.masterCategory}
                onChange={e =>
                  onChange({
                    masterCategory: e.value,
                    category: [],
                    subCategory: [],
                  })
                }
                options={masterOptions}
                optionLabel="name"
                placeholder="Select Master Category"
                className="select w-100"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="col-md-6">
            <div className="form-group">
              <label>Categories</label>
              <MultiSelect
                value={value.category}
                options={categoryOptions}
                onChange={e =>
                  onChange({ category: e.value, subCategory: [] })
                }
                optionLabel="name"
                placeholder="Select categories"
                display="chip"
                filter
                className="w-100"
                disabled={!value.masterCategory}
              />
            </div>
          </div>

          {/* Main Categories */}
          <div className="col-md-6">
            <div className="form-group">
              <label>Main Categories</label>
              <MultiSelect
                value={value.mainCategory}
                options={mainCategoryOptions}
                onChange={e => onChange({ mainCategory: e.value })}
                optionLabel="name"
                placeholder="Select main categories"
                display="chip"
                filter
                className="w-100"
                disabled={!value.category?.length}
              />
            </div>
          </div>

          {/* Sub Categories */}
          <div className="col-md-12">
            <div className="form-group">
              <label>Sub Categories</label>
              <MultiSelect
                value={value.subCategory}
                options={subCategoryOptions}
                onChange={e => onChange({ subCategory: e.value })}
                optionLabel="name"
                placeholder="Select sub categories"
                display="chip"
                filter
                className="w-100"
                disabled={!value.mainCategory?.length}
              />
            </div>
          </div>

          {/* Tags */}
          <div className="col-md-12">
            <div className="form-group">
              <label>Tags</label>
              <MultiSelect
                value={value.tags}
                options={tagsOptions}
                onChange={e => onChange({ tags: e.value, subTags: [] })}
                optionLabel="name"
                placeholder="Select tags"
                display="chip"
                filter
                className="w-100"
              />
            </div>
          </div>

          {/* Sub Tags */}
          <div className="col-md-12">
            <div className="form-group">
              <label>Sub Tags</label>
              <MultiSelect
                value={value.subTags}
                options={subTagsOptions}
                onChange={e => onChange({ subTags: e.value })}
                optionLabel="name"
                placeholder="Select Sub tags"
                display="chip"
                filter
                className="w-100"
                disabled={!value.tags?.length}
              />
            </div>
          </div>

          {/* Description */}
          <div className="col-md-12">
            <div className="form-group service-editor">
              <label>Description</label>
              <DefaultEditor
                value={value.description}
                onChange={(e: any) => onChange({ description: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="container-service">
        <div className="row">
          <div className="col-sm-12">
            <div className="additional">
              <div className="sub-title Service"><h6>Additional Service</h6></div>
              <div className="status-toggle float-sm-end mb-3">
                <input
                  type="checkbox"
                  id="status_1"
                  className="check"
                  checked={value.additionalEnabled}
                  onChange={e => onChange({ additionalEnabled: e.target.checked })}
                />
                <label htmlFor="status_1" className="checktoggle">checkbox</label>
              </div>
            </div>
          </div>
        </div>

        {value.additionalEnabled && (
          <div className="addservice-info">
            {(value.additional || []).map(row => (
              <div key={row.id} className="row service-cont">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Additional Service</label>
                    <input
                      type="text"
                      className="form-control"
                      name="additionalService"
                      value={row.additionalService}
                      onChange={e => handleRowChange(row.id, e)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      value={row.price}
                      onChange={e => handleRowChange(row.id, e)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Duration <span>Include tax</span></label>
                    <input
                      type="text"
                      className="form-control"
                      name="duration"
                      value={row.duration}
                      onChange={e => handleRowChange(row.id, e)}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group special">
                    <label>Speciality</label>
                    <InputSwitch
                      checked={row.speciality}
                      onChange={(e) => {
                        const next = (value.additional || []).map(r =>
                          r.id === row.id ? { ...r, speciality: e.value } : r
                        );
                        onChange({ additional: next });
                      }}
                    />
                  </div>
                </div>


                {row.id > 1 && (
                  <div className="col-md-1">
                    <button
                      onClick={() => deleteServiceRow(row.id)}
                      className="btn btn-danger-outline delete-icon"
                      type="button"
                    >
                      <Icon.Trash2 className="react-feather-custom trashicon" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {value.additionalEnabled && (
          <Link to="#" className="link-sets add-extra" onClick={addNewServiceRow}>
            <i className="fa fa-plus-circle me-2" aria-hidden="true" />
            Add Additional Service
          </Link>
        )}
      </div>

      {/* Video */}
      <div className="container-service space-service">
        <div className="row">
          <div className="col-lg-12">
            <div className="video">
              <div className="video-title"><h6>Video</h6></div>
            </div>
            <div className="video-link">
              <div className="form-group">
                <label>Video Link</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="https://www.youtube.com/shorts/Lf-Z7H8bZ8o"
                  value={value.videoUrl ?? ''}
                  onChange={e => onChange({ videoUrl: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="row">
        <div className="col-md-12">
          <div className="bottom-btn">
            <div className="field-btns">
              <button className="btn btn-primary next_btn" type="button" onClick={nextTab}>
                Next <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default ServiceInformation;
