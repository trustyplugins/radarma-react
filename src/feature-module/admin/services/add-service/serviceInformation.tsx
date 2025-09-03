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
  additionalService: number | null; // store tag ID here
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
  tags: TagOption[];
  subTags: TagOption[];
  accessibility?: "Wheelchair Accessible" | "Senior Friendly" | null;
  payment_options?: "Cash Accepted" | null;
  service_mode?: "Walk-ins Allowed" | null;
  price_range?: "Budget" | null;
  quality?: "Premium" | null;
  sp_niche?: "Limited Edition" | null;
  since: string;
};

type Props = {
  value: ServiceInformationValue;
  onChange: (patch: Partial<ServiceInformationValue>) => void;
  nextTab: () => void;
};
const years = Array.from(
  { length: new Date().getFullYear() - 1900 + 1 },
  (_, i) => (1900 + i).toString()
);
const ServiceInformation: React.FC<Props> = ({ value, onChange, nextTab }) => {

  const [masterOptions, setMasterOptions] = useState<Option[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<Option[]>([]);
  const [mainCategoryOptions, setMainCategoryOptions] = useState<Option[]>([]);
  const [subCategoryOptions, setSubCategoryOptions] = useState<Option[]>([]);
  const [tagsOptions, setTagsOptions] = useState<TagOption[]>([]);
  const [subTagsOptions, setSubTagsOptions] = useState<TagOption[]>([]);
  const [addTagsOptions, addSetTagsOptions] = useState<TagOption[]>([]);
  const [subTagsByTag, setSubTagsByTag] = useState<Record<number, TagOption[]>>({});
  const [dropdownConfig, setDropdownConfig] = useState<any[]>([]);


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
  // fetch categories when masterCategory changes
  useEffect(() => {
    const fetchCategories = async () => {
      if (!value.masterCategory?.length) {
        setCategoryOptions([]);
        onChange({ category: [] });
        return;
      }

      const ids = value.masterCategory.map(c => c.id);
      const { data, error } = await supabase
        .from('sectors')
        .select('id, category, parent_id')
        .in('parent_id', ids);

      if (!error && data) {
        const newOptions = data.map(c => ({
          id: c.id,
          name: c.category,
          parent_id: c.parent_id,
        }));
        setCategoryOptions(newOptions);

        // filter existing category selections -> only keep valid ones
        const filtered = value.category.filter(c =>
          ids.includes((c as any).parent_id)
        );

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
        addSetTagsOptions(data.map(t => ({ id: t.id, name: t.category })));
      }
    };
    fetchTags();
  }, []);

  // fetch subTags when tags change
  useEffect(() => {
    const fetchSubTags = async () => {
      if (!value.tags?.length) {
        setSubTagsOptions([]);
        onChange({ subTags: [] }); // clear if no tags
        return;
      }

      const ids = value.tags.map(t => t.id);
      const { data, error } = await supabase
        .from('sub_tags')
        .select('id, category, parent_id')
        .in('parent_id', ids);

      if (!error && data) {
        const newOptions = data.map(st => ({ id: st.id, name: st.category, parent_id: st.parent_id }));
        setSubTagsOptions(newOptions);

        // filter selected subTags -> keep only those that still belong to selected tags
        const filteredSubs = value.subTags.filter(st =>
          ids.includes((newOptions.find(o => o.id === st.id)?.parent_id) ?? -1)
        );

        if (filteredSubs.length !== value.subTags.length) {
          onChange({ subTags: filteredSubs });
        }
      }
    };

    fetchSubTags();
  }, [value.tags]);

  useEffect(() => {
    const fetchForRows = async () => {
      for (const row of value.additional || []) {
        const tagId = row.additionalService;
        if (tagId && !subTagsByTag[tagId]) {
          const { data, error } = await supabase
            .from("sub_tags")
            .select("id, category, parent_id")
            .eq("parent_id", tagId);

          if (!error && data) {
            setSubTagsByTag((prev) => ({
              ...prev,
              [tagId]: data.map((st) => ({ id: st.id, name: st.category })),
            }));
          }
        }
      }
    };

    fetchForRows();
  }, [value.additional]);
  // additional rows
  const addNewServiceRow = () => {
    const newId = (value.additional?.length || 0) + 1;
    onChange({
      additional: [
        ...(value.additional || []),
        { id: newId, additionalService: null, subServices: [], price: 0, duration: '', speciality: false },
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

  useEffect(() => {
    const fetchConfig = async () => {
      const { data, error } = await supabase
        .from("json_tags")
        .select("data")
        .single();

      if (!error && data?.data) {
        setDropdownConfig(data.data.dropdowns);
      }
    };
    fetchConfig();
  }, []);
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
          {/* Master Category (City) */}
          <div className="col-md-6">
            <div className="form-group">
              <label>Cities</label>
              <MultiSelect
                value={value.masterCategory}
                options={masterOptions}
                onChange={e => onChange({ masterCategory: e.value })}
                optionLabel="name"
                placeholder="Select Cities"
                display="chip"
                filter
                className="w-100"
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
                onChange={e =>
                  onChange({ category: e.value, subCategory: [] })
                }
                optionLabel="name"
                placeholder="Select sector"
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

          {/* Tags */}
          {/* <div className="col-md-12">
            <div className="form-group">
              <label>Tags</label>
              <MultiSelect
                value={value.tags}
                options={tagsOptions}
                onChange={ e => onChange({ tags: e.value })}
                optionLabel="name"
                placeholder="Select tags"
                display="chip"
                filter
                className="w-100"
              />
            </div>
          </div> */}

          {/* Sub Tags */}
          {/* <div className="col-md-12">
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
          </div> */}

          {/* Description */}

        </div>
      </div>

      {/* Additional Services */}
      <div className="container-service">
        <div className="row">
          <div className="col-sm-12">
            <div className="additional">
              <div className="sub-title Service"><h6>Services</h6></div>
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
            {(value.additional || []).map(row => {
              const availableSubTags = row.additionalService
                ? subTagsByTag[row.additionalService] || []
                : [];
              // find sub tags that belong to the chosen tag for this row
              return (
                <div key={row.id} className="row service-cont" style={{ backgroundColor: '#f7f7f7', marginBottom: '10px', padding: '10px', borderRadius: '4px' }}>
                  {/* Tags Dropdown */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Service</label>
                      <Dropdown
                        value={tagsOptions.find(t => t.id === row.additionalService) || null}
                        options={tagsOptions}
                        onChange={(e) => {
                          const next = (value.additional || []).map(r =>
                            r.id === row.id
                              ? { ...r, additionalService: e.value ? e.value.id : null, subServices: [] }
                              : r
                          );
                          onChange({ additional: next });
                        }}
                        optionLabel="name"
                        placeholder="Select service"
                        showClear
                        filter
                        className="w-100"
                      />
                    </div>
                  </div>

                  {/* Sub Tags MultiSelect */}
                  <div className="col-md-3">
                    <div className="form-group">
                      <label>Sub Services</label>
                      <Dropdown
                        value={row.subServices?.[0] ?? null} // pick the first if array stored
                        options={availableSubTags}
                        optionLabel="name"
                        optionValue="id"
                        onChange={(e) => {
                          const next = (value.additional || []).map(r =>
                            r.id === row.id ? { ...r, subServices: e.value ? [e.value] : [] } : r
                          );
                          onChange({ additional: next });
                        }}
                        placeholder="Select sub service"
                        showClear
                        filter
                        className="w-100"
                        disabled={!row.additionalService}
                      />

                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-md-2">
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


                  {/* Service Image Upload */}
                  <div className="col-md-2">
                    <div className="form-group">
                      <label>Service Image</label>
                      {!row.image ? (
                        <>
                          <input
                            type="file"
                            accept="image/*"
                            className="form-control"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (!file) return;

                              const reader = new FileReader();
                              reader.onloadend = () => {
                                const next = (value.additional || []).map(r =>
                                  r.id === row.id ? { ...r, image: reader.result as string } : r
                                );
                                onChange({ additional: next });
                              };
                              reader.readAsDataURL(file);
                            }}
                          />
                        </>
                      ) : (
                        <div className="image-preview-wrapper">
                          <img
                            src={row.image}
                            alt="Service"
                            className="img-thumbnail mb-2"
                            style={{ maxWidth: "100px", display: "block" }}
                          />
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                              const next = (value.additional || []).map(r =>
                                r.id === row.id ? { ...r, image: null } : r
                              );
                              onChange({ additional: next });
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Speciality */}
                  <div className="col-md-2">
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
                  {/* Delete Row */}
                  {row.id > 1 && (
                    <div className="col-md-1">
                      <button
                        onClick={() => deleteServiceRow(row.id)}
                        className="btn btn-danger-outline"
                        type="button"
                      >
                        <Icon.Trash2 className="react-feather-custom trashicon" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        )}

        {value.additionalEnabled && (
          <Link to="#" className="link-sets add-extra" onClick={addNewServiceRow}>
            <i className="fa fa-plus-circle me-2" aria-hidden="true" />
            Add Service
          </Link>
        )}
      </div>

      <div className="container-service extra-servcie">
        <div className="row">
          <div className="col-sm-12">
            <div className="extra-dtl">
              <div className="sub-title Service"><h6>Extra Details</h6></div>
            </div>
            <div className="row">
              {dropdownConfig.map((dropdown) => (
                <div key={dropdown.key} className="col-sm-6">
                  <div className="form-group">
                    <label>{dropdown.label}</label>
                    <Dropdown
                      value={(value as any)[dropdown.key] ?? null}
                      options={dropdown.options}
                      onChange={(e) => onChange({ [dropdown.key]: e.value } as any)}
                      placeholder={`Select ${dropdown.label}`}
                      showClear
                      filter
                      className="w-100"
                    />

                  </div>
                </div>
              ))}
            </div>
          </div>



        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label>Start Since (Year)</label>
            <Dropdown
              value={value.since}
              options={years.map(y => ({ label: y, value: y }))}
              onChange={(e) => onChange({ since: e.value })}
              placeholder="Select Year"
              className="w-100"
            />
          </div>
        </div>

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
