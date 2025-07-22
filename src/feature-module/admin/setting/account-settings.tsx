import React, { useState } from 'react';
import SettingsSidebar from '../common/settingssidebar';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { TagsInput } from 'react-tag-input-component';
import { Link } from 'react-router-dom';

const AccountSettings = () => {
  const [tags] = useState(['English', 'French']);
  const defaultImageSrc = 'assets/img/customer/user-01.jpg';
  const [imageSrc, setImageSrc] = useState<string | null>(defaultImageSrc);

  const handleUpload = (e: any) => {
    const file = e.target?.files[0]; // Use optional chaining here
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newImageSrc = event.target?.result as string | null; // Use optional chaining here
        setImageSrc(newImageSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setImageSrc(defaultImageSrc);
  };

  return (
    <>
      <div className="page-wrapper page-settings">
        <SettingsSidebar />
        <div className="content w-100">
          <div className="content-page-header">
            <h5>Account Settings</h5>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-grouphead">
                <h2>Profile Picture</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="profile-upload">
                <div className="profile-upload-img">
                  <ImageWithBasePath
                    src={imageSrc || defaultImageSrc}
                    alt="img"
                  />
                </div>
                <div className="profile-upload-content">
                  <div className="profile-upload-btn">
                    <div className="profile-upload-file">
                      <input
                        type="file"
                        id="imgInp"
                        accept=".jpg, .png"
                        onChange={handleUpload}
                      />
                      <Link
                        to="#"
                        className="btn btn-upload"
                        onClick={handleUpload}
                      >
                        Upload
                      </Link>
                    </div>
                    <Link
                      to="#"
                      className="btn btn-remove"
                      onClick={handleRemove}
                    >
                      Remove
                    </Link>
                  </div>
                  <div className="profile-upload-para">
                    <p>
                      *image size should be at least 320px big,and less then
                      500kb. Allowed files .png and .jpg.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-grouphead">
                <h2>Profile</h2>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" disabled />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Bio</label>
                <textarea className="form-control" rows={3} defaultValue={''} />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-grouphead">
                <h2>Personal Information</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <label>Country</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <label>State</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="form-group">
                <label>Pincode</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Language</label>
                <TagsInput
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
                 tags={tags}
                 value={tags}
                  className="input-tags form-control"
                  
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="btn-path">
                <Link to="#" className="btn btn-cancel me-3">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
