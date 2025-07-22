import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultEditor from 'react-simple-wysiwyg';
import * as Icon from 'react-feather';

type props = {
  nextTab: CallableFunction;
};
const ServiceInformation: React.FC<props> = ({ nextTab }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);

  const [services, setServices] = useState([
    {
      id: 1,
      additionalService: 'Car Repair',
      price: 500,
      duration: '30 mins',
    },
  ]);

  const addNewServiceRow = () => {
    const newId = services.length + 1;
    setServices([
      ...services,
      { id: newId, additionalService: '', price: 0, duration: '' },
    ]);
  };

  const deleteServiceRow = (id: any) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
  };

  const handleInputChange = (id: any, event: any) => {
    const { name, value } = event.target;
    const updatedServices = services.map((service) =>
      service.id === id ? { ...service, [name]: value } : service,
    );
    setServices(updatedServices);
  };

  const value = [{ name: 'Johnny' }, { name: 'James' }];
  const valueCategory = [{ name: 'Car Wash' }, { name: 'House Cleaning' }];
  const valueSub = [{ name: 'Car Repair' }, { name: 'Plumbing' }];

  const [values, setValue] = React.useState();

  function onChange(e: any) {
    setValue(e.target.value);
  }

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
                <label>Provider</label>
                {/* <select className="select">
                  <option>Johnny</option>
                  <option>James</option>
                </select> */}

                <Dropdown
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.value)}
                  options={value}
                  optionLabel="name"
                  placeholder="Johnny"
                  className="select w-100"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Service Title</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Plumbing Service"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Category</label>

                <Dropdown
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.value)}
                  options={valueCategory}
                  optionLabel="name"
                  placeholder="Car Wash"
                  className="select w-100"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Sub Category</label>

                <Dropdown
                  value={selectedSub}
                  onChange={(e) => setSelectedSub(e.value)}
                  options={valueSub}
                  optionLabel="name"
                  placeholder="Car Repair"
                  className="select w-100"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group price">
                <label>
                  Price <span>Set 0 for free</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="$120.00"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Duration</label>
                <div className="form-duration">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="10:00"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group service-editor">
                <label>Description</label>
                <DefaultEditor value={values} onChange={onChange} />
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
                    defaultChecked
                  />
                  <label htmlFor="status_1" className="checktoggle">
                    checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="addservice-info">
            <div className="row service-cont">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Additional Service</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Car Repair"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Price"
                    defaultValue={500}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group tax">
                  <label>
                    Duration <span>Include tax</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="30 mins"
                  />
                </div>
              </div>
            </div>
          </div> */}

          <div className="addservice-info">
            {services.map((service) => (
              <div key={service.id} className="row service-cont">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Additional Service</label>
                    <input
                      type="text"
                      className="form-control"
                      name="additionalService"
                      value={service.additionalService}
                      onChange={(event) => handleInputChange(service.id, event)}
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
                      value={service.price}
                      onChange={(event) => handleInputChange(service.id, event)}
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
                      value={service.duration}
                      onChange={(event) => handleInputChange(service.id, event)}
                    />
                  </div>
                </div>
                {service.id > 1 && ( // Only render delete button for newly added rows
                  <div className="col-md-1">
                    <button
                      onClick={() => deleteServiceRow(service.id)}
                      className="btn btn-danger-outline delete-icon"
                    >
                      <Icon.Trash2 className="react-feather-custom trashicon" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link
            to="#"
            className="link-sets add-extra"
            onClick={addNewServiceRow}
          >
            <i className="fa fa-plus-circle me-2" aria-hidden="true" />
            Add Additional Service
          </Link>
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
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
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
