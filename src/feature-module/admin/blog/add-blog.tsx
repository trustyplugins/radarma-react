import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultEditor from 'react-simple-wysiwyg';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Dropdown } from 'primereact/dropdown';

const AddBlog = () => {
  const [values, setValue] = React.useState();
  const [valuesTwo, setValueTwo] = React.useState();
  valuesTwo;
  const [selectedValue, setSelectedValue] = useState(null);
  // const [selectedValueTwo, setSelectedValueTwo] = useState(null);

  const value = [{ name: 'English' }, { name: 'German' }];
  const valueTwo = [{ name: 'Category 1' }, { name: 'Category 2' }];

  function onChange(e: any) {
    setValue(e.target.value);
  }

  const optionstwo = (e: any) => {
    setValueTwo(e.target.valueTwo);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <form action="all-blog">
            <div className="row">
              <div className="col-lg-7 col-sm-12 m-auto">
                <div className="content-page-header">
                  <h5>Add Post</h5>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Titles</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Language</label>

                      <Dropdown
                        value={selectedValue}
                        onChange={(e: any) => setSelectedValue(e.value)}
                        options={value}
                        optionLabel="name"
                        placeholder="English"
                        className="select  w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Category</label>

                      <Dropdown
                        // value={selectedValueTwo}
                        onChange={optionstwo}
                        options={valueTwo}
                        optionLabel="name"
                        placeholder="Category 1"
                        className="select  w-100"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Slug{' '}
                        <span>
                          (If you leave it empty, it will be generated
                          automatically.)
                        </span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Description<span>(Meta Tag)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>
                        Keywords<span>(Meta Tag)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mb-1">
                      <label>Blog Image</label>
                    </div>
                    <div className="form-uploads mb-4">
                      <div className="form-uploads-path">
                        <ImageWithBasePath
                          src="assets/img/icons/upload.svg"
                          alt="img"
                        />
                        <div className="file-browse">
                          <h6>Drag &amp; drop image or </h6>
                          <div className="file-browse-path">
                            <input type="file" />
                            <Link to="#"> Browse</Link>
                          </div>
                        </div>
                        <h5>Supported formates: JPEG, PNG</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label> Descriptions</label>
                      <div id="editor">
                        <DefaultEditor value={values} onChange={onChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn-path">
                      <Link to="#" className="btn btn-cancel me-3">
                        Cancel
                      </Link>
                      <button className="btn btn-primary" type="reset">
                        Save Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
