import React from 'react'
import ImageWithBasePath from '../../../core/img/ImageWithBasePath'
import SettingsSidebar from '../common/settingssidebar'
import { Link } from 'react-router-dom'

const SiteInformation = () => {
  return (
    <div className="page-wrapper page-settings">
      <SettingsSidebar />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-groupheads">
                    <h2>Website Details</h2>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Website Name</label>
                    <input type="text" placeholder="Enter Website Name" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-groupheads">
                    <h3>Website Logo Lite</h3>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="upload-div">
                    <div className="upload-sets">
                      <div className="upload-sets-btn">
                        <input type="file" id="imgInp" />
                        <Link to="#" className="btn btn-upload">Upload</Link>
                      </div>
                      <p>Recommended Image Size is 300*100</p>
                    </div>
                    <div className="upload-img">
                      <div className="upload-imgset">
                        <ImageWithBasePath src="assets/img/icons/gallery.svg" alt="img" id="blah" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-groupheads">
                    <h3>Fav Icon</h3>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="upload-div">
                    <div className="upload-sets">
                      <div className="upload-sets-btn">
                        <input type="file" id="imgInpset" />
                        <Link to="#" className="btn btn-upload">Upload</Link>
                      </div>
                      <p>Recommended Image Size is 50*50</p>
                    </div>
                    <div className="upload-img">
                      <div className="upload-imgset">
                        <ImageWithBasePath src="assets/img/icons/gallery.svg" alt="img" id="blahset" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-groupheads">
                    <h3>Apple Icon</h3>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="upload-div mb-0">
                    <div className="upload-sets">
                      <div className="upload-sets-btn">
                        <input type="file" id="imgInp1" />
                        <Link to="#" className="btn btn-upload">Upload</Link>
                      </div>
                      <p>Recommended Image Size is 156*156</p>
                    </div>
                    <div className="upload-img">
                      <div className="upload-imgset">
                        <ImageWithBasePath src="assets/img/icons/gallery.svg" alt="img" id="blah1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-groupheads">
                    <h2>Website Address</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>Contact Email</label>
                    <input type="text" className="form-control" placeholder="Enter Email Address" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>Contact Phone No</label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Enter Your Address" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" placeholder="Enter Your Country" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" placeholder="Enter Your State" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="Enter Your City" />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label>Pincode</label>
                    <input type="text" className="form-control" placeholder="Enter Your Pincode             " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="btn-path">
            <Link to="#" className="btn btn-cancel me-3">Cancel</Link>
            <Link to="#" className="btn btn-primary">Update</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SiteInformation