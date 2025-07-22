import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TagsInput } from 'react-tag-input-component';
import Edittaxmodalpopup from '../../common/modals/edit-tax-modal';

type props = {
  prevTab: CallableFunction;
  nextTab: CallableFunction;
};
const EditSeo: React.FC<props> = ({ prevTab }) => {
  const [selected, setSelected] = useState(['English', 'French', 'spanish']);

  return (
    <>
      <div className="addition-service card-section space-service">
        <div className="heading-service">
          <h4>SEO</h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Meta Title</label>
              <input
                type="text"
                className="form-control"
                defaultValue="Pluming Service"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Meta Keywords</label>

              <TagsInput
                value={selected}
                onChange={setSelected}
                name="fruits"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Meta Description</label>
              <textarea
                className="form-control"
                rows={5}
                defaultValue={
                  ""
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-btn">
        <div className="field-btns">
          <button
            className="btn btn-prev prev_btn"
            type="button"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
            onClick={prevTab}
          >
            <i className="fas fa-arrow-left" /> Prev
          </button>
          <Link
            to="/services"
            className="btn btn-primary next_btn"
            data-bs-toggle="modal"
            data-bs-target="#successmodal"
          >
            Save
          </Link>
        </div>
      </div>

      <Edittaxmodalpopup />
    </>
  );
};

export default EditSeo;
