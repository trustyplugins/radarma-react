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
  additionalService: number | null; // tag id
  subServices: number[];
  price: number;
  duration: string;
  speciality: boolean;
  image?: string | null;
};


type Option = { id: number; name: string };
type TagOption = { id: number; name: string };

export type ServiceInformationValue = {
  title: string;
  masterCategory: Option[];
  category: Option[];
  mainCategory: Option[];
  subCategory: Option[];
  description: string;
  additionalEnabled: boolean;
  additional: AdditionalRow[];
  videoUrl?: string;
  //tags: TagOption[];
  //subTags: TagOption[];
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
  const [subTagsByTag, setSubTagsByTag] = useState<Record<number, TagOption[]>>({});
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

  // fetch subcategories when mainCategory changes
  useEffect(() => {
    const fetchCategories = async () => {
      if (!value.masterCategory?.length) {
        setCategoryOptions([]);
        onChange({ category: [] }); // clear all if no main category
        return;
      }

      const ids = value.masterCategory.map(c => c.id);
      const { data, error } = await supabase
        .from('sectors')
        .select('id, category, parent_id')
        .in('parent_id', ids);

      if (!error && data) {
        const newOptions = data.map(sc => ({ id: sc.id, name: sc.category, parent_id: sc.parent_id }));
        setCategoryOptions(newOptions);
        const filtered = value.category.filter(sc =>
          ids.includes((newOptions.find(o => o.id === sc.id)?.parent_id) ?? -1)
        );

        // update state if anything was removed
        if (filtered.length !== value.category.length) {
          onChange({ category: filtered });
        }
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
        onChange({ subCategory: [] }); // clear all if no main category
        return;
      }

      const ids = value.mainCategory.map(c => c.id);
      const { data, error } = await supabase
        .from('sub_categories')
        .select('id, category, parent_id')
        .in('parent_id', ids);

      if (!error && data) {
        const newOptions = data.map(sc => ({ id: sc.id, name: sc.category, parent_id: sc.parent_id }));
        setSubCategoryOptions(newOptions);

        // filter selected subCategories -> only keep ones that belong to currently selected mainCategory ids
        const filteredSubs = value.subCategory.filter(sc =>
          ids.includes((newOptions.find(o => o.id === sc.id)?.parent_id) ?? -1)
        );

        // update state if anything was removed
        if (filteredSubs.length !== value.subCategory.length) {
          onChange({ subCategory: filteredSubs });
        }
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

  // Sub Tags per row (lazy load)
  useEffect(() => {
    const loadSubTags = async () => {
      for (const row of value.additional || []) {
        if (row.additionalService && !subTagsByTag[row.additionalService]) {
          const { data } = await supabase
            .from("sub_tags")
            .select("id, category, parent_id")
            .eq("parent_id", row.additionalService);
          if (data) {
            setSubTagsByTag(prev => ({
              ...prev,
              [row.additionalService!]: data.map(st => ({ id: st.id, name: st.category })),
            }));
          }
        }
      }
    };
    loadSubTags();
  }, [value.additional, subTagsByTag]);


  // additional rows
  const addRow = () => {
    const newId = (value.additional?.length || 0) + 1;
    onChange({
      additional: [
        ...(value.additional || []),
        { id: newId, additionalService: null, subServices: [], price: 0, duration: "", speciality: false, image: null },
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
          <div className="col-md-12">
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
              <MultiSelect
                value={value.masterCategory}
                options={masterOptions}
                onChange={e => onChange({ masterCategory: e.value })}
                optionLabel="name"
                placeholder="Select Cities"
                display="chip"
                filter
                className="w-100"
              //disabled={!value.category?.length}
              />

            </div>
          </div>

          {/* Categories */}
          <div className="col-md-6">
            <div className="form-group">
              <label>Sector</label>
              <MultiSelect
                value={value.category}
                options={categoryOptions}
                onChange={e => onChange({ category: e.value })}
                optionLabel="name"
                placeholder="Select sector"
                display="chip"
                filter
                className="w-100"
                disabled={!value.masterCategory?.length}
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
          <div className="col-md-6">
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
        </div>
      </div>

      {/* Additional Services */}
      <div className="container-service">
        {value.additionalEnabled && (
          <div className="addservice-info">
            {value.additional.map(row => {
              const subs = row.additionalService ? subTagsByTag[row.additionalService] || [] : [];
              return (
                <div key={row.id} className="row service-cont">
                  {/* Service */}
                  <div className="col-md-3">
                    <label>Service</label>
                    <Dropdown
                      value={tagsOptions.find(t => t.id === row.additionalService) || null}
                      options={tagsOptions}
                      onChange={e =>
                        handleRowChange(row.id, "additionalService", e.value?.id || null)
                      }
                      optionLabel="name"
                      placeholder="Select service"
                      className="w-100"
                    />
                  </div>
                  {/* Sub Service */}
                  <div className="col-md-3">
                    <label>Sub Service</label>
                    <Dropdown
                      value={row.subServices[0] ?? null}
                      options={subs}
                      optionLabel="name"
                      optionValue="id"
                      onChange={e =>
                        handleRowChange(row.id, "subServices", e.value ? [e.value] : [])
                      }
                      placeholder="Select sub service"
                      className="w-100"
                    />
                  </div>
                  {/* Price */}
                  <div className="col-md-2">
                    <label>Price</label>
                    <input
                      type="number"
                      className="form-control"
                      value={row.price}
                      onChange={e => handleRowChange(row.id, "price", Number(e.target.value))}
                    />
                  </div>
                  {/* Image */}
                  <div className="col-md-2">
                    <label>Image</label>
                    {!row.image ? (
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={e => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            handleRowChange(row.id, "image", reader.result as string);
                          };
                          reader.readAsDataURL(file);
                        }}
                      />
                    ) : (
                      <div>
                        <img src={row.image} alt="service" style={{ maxWidth: 80 }} />
                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => handleRowChange(row.id, "image", null)}
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                  {/* Speciality */}
                  <div className="col-md-1">
                    <label>Speciality</label>
                    <InputSwitch
                      checked={row.speciality}
                      onChange={e => handleRowChange(row.id, "speciality", e.value)}
                    />
                  </div>
                  {row.id > 1 && (
                    <div className="col-md-1">
                      <button className="btn btn-danger-outline" type="button" onClick={() => delRow(row.id)}>
                        <Icon.Trash2 />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        <Link to="#" className="link-sets add-extra" onClick={addRow}>
          <i className="fa fa-plus-circle me-2" /> Add Additional Service
        </Link>
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
