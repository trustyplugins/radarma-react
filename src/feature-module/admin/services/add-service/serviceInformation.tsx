import { Dropdown } from 'primereact/dropdown';
import React from 'react';
import { Link } from 'react-router-dom';
import DefaultEditor from 'react-simple-wysiwyg';
import * as Icon from 'react-feather';

type AdditionalRow = {
  id: number;
  additionalService: string;
  price: number;
  duration: string;
};

export type ServiceInformationValue = {
  title: string;
  masterCategory: { name: string } | null;
  category: { name: string } | null;
  subCategory: { name: string } | null;
  description: string;           // HTML from WYSIWYG
  additionalEnabled: boolean;
  additional: AdditionalRow[];   // rows
  videoUrl?: string;
};

type Props = {
  value: ServiceInformationValue;
  onChange: (patch: Partial<ServiceInformationValue>) => void;
  nextTab: () => void;
};

const ServiceInformation: React.FC<Props> = ({ value, onChange, nextTab }) => {
  // sample options — replace with real data
  const masterOptions = [{ name: 'Johnny' }, { name: 'James' }];
  const categoryOptions = [{ name: 'Car Wash' }, { name: 'House Cleaning' }];
  const subCategoryOptions = [{ name: 'Car Repair' }, { name: 'Plumbing' }];

  // --- additional rows handlers ---
  const addNewServiceRow = () => {
    const newId = (value.additional?.length || 0) + 1;
    const next = [
      ...(value.additional || []),
      { id: newId, additionalService: '', price: 0, duration: '' },
    ];
    onChange({ additional: next });
  };

  const deleteServiceRow = (id: number) => {
    const next = (value.additional || []).filter((r) => r.id !== id);
    onChange({ additional: next });
  };

  const handleRowChange = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value: v } = e.target;
    const next = (value.additional || []).map((r) =>
      r.id === id
        ? {
            ...r,
            [name]: name === 'price' ? Number(v) : v,
          }
        : r
    );
    onChange({ additional: next });
  };

  return (
    <>
      <fieldset id="first-field">
        <div className="container-service space-service">
          <div className="sub-title">
            <h6>Service Information</h6>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={value.title}
                  onChange={(e) => onChange({ title: e.target.value })}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Master Category</label>
                <Dropdown
                  value={value.masterCategory}
                  onChange={(e) => onChange({ masterCategory: e.value })}
                  options={masterOptions}
                  optionLabel="name"
                  placeholder=""
                  className="select w-100"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Category</label>
                <Dropdown
                  value={value.category}
                  onChange={(e) => onChange({ category: e.value })}
                  options={categoryOptions}
                  optionLabel="name"
                  placeholder=""
                  className="select w-100"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Sub Category</label>
                <Dropdown
                  value={value.subCategory}
                  onChange={(e) => onChange({ subCategory: e.value })}
                  options={subCategoryOptions}
                  optionLabel="name"
                  placeholder=""
                  className="select w-100"
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
        </div>

        <div className="container-service">
          <div className="row">
            <div className="col-sm-12">
              <div className="additional">
                <div className="sub-title Service">
                  <h6>Additional Service</h6>
                </div>
                <div className="status-toggle float-sm-end mb-3">
                  <input
                    type="checkbox"
                    id="status_1"
                    className="check"
                    checked={value.additionalEnabled}
                    onChange={(e) => onChange({ additionalEnabled: e.target.checked })}
                  />
                  <label htmlFor="status_1" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>

          {value.additionalEnabled && (
            <div className="addservice-info">
              {(value.additional || []).map((row) => (
                <div key={row.id} className="row service-cont">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Additional Service</label>
                      <input
                        type="text"
                        className="form-control"
                        name="additionalService"
                        value={row.additionalService}
                        onChange={(e) => handleRowChange(row.id, e)}
                      />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={row.price}
                        onChange={(e) => handleRowChange(row.id, e)}
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group">
                      <label>
                        Duration <span>Include tax</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="duration"
                        value={row.duration}
                        onChange={(e) => handleRowChange(row.id, e)}
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

        <div className="container-service space-service">
          <div className="row">
            <div className="col-lg-12">
              <div className="video">
                <div className="video-title">
                  <h6>Video</h6>
                </div>
              </div>
              <div className="video-link">
                <div className="form-group">
                  <label>Video Link</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="https://www.youtube.com/shorts/Lf-Z7H8bZ8o"
                    value={value.videoUrl ?? ''}
                    onChange={(e) => onChange({ videoUrl: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="bottom-btn">
              <div className="field-btns">
                <button
                  className="btn btn-primary next_btn"
                  type="button"
                  onClick={nextTab}
                >
                  Next <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default ServiceInformation;
