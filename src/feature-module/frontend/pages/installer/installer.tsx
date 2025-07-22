import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { all_routes } from '../../../../core/data/routes/all_routes';

const Installer = () => {
  const routes = all_routes;
  const [currentStep, setCurrentStep] = useState(1);

 
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
<>
  <div className="installation-header">
    <div className="container">
      <div>
        <ImageWithBasePath src="./assets/img/logo.svg" alt="Logo" className="img-fluid" />
      </div>
    </div>
  </div>
  <div className="project-installation">
    <div className="content p-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="wizard">
              <ul className="form-wizard-steps" id="progressbar2">
                <li className={currentStep === 1 ? "progress-active" : currentStep > 1 ? "progress-activated" : ""}>
                  <div className="profile-step">
                    <span className="profile-box">
                      <ImageWithBasePath
                        src="assets/img/icons/install-icon-01.svg"
                        alt="image"
                      />
                    </span>
                    <div className="step-section">
                      <h5>Licence</h5>
                    </div>
                    <span className="dot-active" />
                  </div>
                </li>
                <li className={currentStep === 2 ? "progress-active" : currentStep > 2 ? "progress-activated" : ""}>
                  <div className="profile-step">
                    <span className="profile-box">
                      <ImageWithBasePath
                        src="assets/img/icons/install-icon-02.svg"
                        alt="image"
                      />
                    </span>
                    <div className="step-section">
                      <h5>System Requirements</h5>
                    </div>
                    <span className="dot-active" />
                  </div>
                </li>
                <li className={currentStep === 3 ? "progress-active" : currentStep > 3 ? "progress-activated" : ""}>
                  <div className="profile-step">
                    <span className="profile-box">
                      <ImageWithBasePath
                        src="assets/img/icons/install-icon-03.svg"
                        alt="image"
                      />
                    </span>
                    <div className="step-section">
                      <h5>Folder Permission</h5>
                    </div>
                    <span className="dot-active" />
                  </div>
                </li>
                <li className={currentStep === 4 ? "progress-active" : currentStep > 4 ? "progress-activated" : ""}>
                  <div className="profile-step">
                    <span className="profile-box">
                      <ImageWithBasePath
                        src="assets/img/icons/install-icon-04.svg"
                        alt="image"
                      />
                    </span>
                    <div className="step-section">
                      <h5>Database</h5>
                    </div>
                    <span className="dot-active" />
                  </div>
                </li>
                <li className={currentStep === 5 ? "progress-active" : currentStep > 5 ? "progress-activated" : ""}>
                  <div className="profile-step">
                    <span className="profile-box">
                      <ImageWithBasePath
                        src="assets/img/icons/install-icon-05.svg"
                        alt="image"
                      />
                    </span>
                    <div className="step-section">
                      <h5>Admin</h5>
                    </div>
                    <span className="dot-active" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="initialization-form-set">
            {currentStep === 1 && (
              <fieldset className="form-inner card wizard-form-card" id="first">
                <div className="licence-verifi">
                  <div className="card-title">
                    <h4>Purchase Verification</h4>
                    <p>Activate your purchase code for this domain</p>
                  </div>
                  <form>
                    <div className="install-step">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Envato User ID</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3 mb-0">
                            <label className="form-label">Purchase Code</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="add-form-btn widget-next-btn submit-btn">
                  <div className="btn-left">
                    <Link
                      to="#"
                      className="btn btn-primary main-btn pre-btn disabled"
                    >
                      <i className="feather icon-arrow-left" />
                      Prev
                    </Link>
                  </div>
                  <div className="btn-left">
                    <Link
                      to="#"
                      onClick={handleNext}
                      className="btn btn-primary main-btn next_btns"
                    >
                      Next <i className="feather icon-arrow-right" />
                    </Link>
                  </div>
                </div>
              </fieldset>
              )}
              {currentStep === 2 && (
              <fieldset className="form-inner card wizard-form-card">
                <div className="system-verifi">
                  <div className="card-title">
                    <h4>System Requirement</h4>
                    <p>
                      Required Elements to installl tuelysell into your System
                    </p>
                  </div>
                  <div className="install-step">
                    <div className="requirment-field">
                      <div className="elements-name">
                        <i className="fa-regular fa-circle-check" />
                        Php Version
                      </div>
                      <span className="version">8.2.4</span>
                    </div>
                    <div className="requirment-field">
                      <div className="elements-name">
                        <i className="fa-regular fa-circle-check" />
                        Curl PHP Extension
                      </div>
                      <span className="version">Enable</span>
                    </div>
                    <div className="requirment-field">
                      <div className="elements-name">
                        <i className="fa-regular fa-circle-check" />
                        File info PHP Extension
                      </div>
                      <span className="version">Enable</span>
                    </div>
                    <div className="requirment-field">
                      <div className="elements-name">
                        <i className="fa-regular fa-circle-check" />
                        Mb String PHP Extension
                      </div>
                      <span className="version">Enable</span>
                    </div>
                    <div className="requirment-field">
                      <div className="elements-name">
                        <i className="fa-regular fa-circle-xmark" />
                        GD PHP Extension
                      </div>
                      <span className="error-msg">
                        Disabled (You Need to Eable “GD” Extension on Your
                        Serrver)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="add-form-btn widget-next-btn submit-btn">
                  <div className="btn-left">
                    <Link
                      to="#"
                      onClick={handlePrev}
                      className="btn btn-primary main-btn prev_btns"
                    >
                      <i className="feather icon-arrow-left" />
                      Prev
                    </Link>
                  </div>
                  <div className="btn-left">
                    <Link
                      to="#"
                      onClick={handleNext}
                      className="btn btn-primary main-btn next_btns"
                    >
                      Next <i className="feather icon-arrow-right" />
                    </Link>
                  </div>
                </div>
              </fieldset>
              )}
              {currentStep === 3 && (
              <fieldset className="form-inner card wizard-form-card">
                <div className="folder-permission">
                  <div className="card-title">
                    <h4>Folder Permission</h4>
                    <p>Permissions to the folders</p>
                  </div>
                  <div className="install-step">
                    <ul className="files-list">
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Application / Config
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / Audios
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / blocks
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / blog
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / Category
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / digital-files
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / Images
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / image-file-manager
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / logo
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / Profile
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / Support
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / Temp
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                      <li>
                        <span className="folder">
                          <i className="fa-regular fa-folder-open" />
                          Upload / Video
                        </span>
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="add-form-btn widget-next-btn submit-btn">
                  <div className="btn-left">
                    <Link
                      to="#"
                      onClick={handlePrev}
                      className="btn btn-primary main-btn prev_btns"
                    >
                      <i className="feather icon-arrow-left" />
                      Prev
                    </Link>
                  </div>
                  <div className="btn-left">
                    <Link
                      to="#"
                      onClick={handleNext}
                      className="btn btn-primary main-btn next_btns"
                    >
                      Next <i className="feather icon-arrow-right" />
                    </Link>
                  </div>
                </div>
              </fieldset>
              )}
              {currentStep === 4 && (
              <fieldset className="form-inner card wizard-form-card">
                <div className="folder-permission">
                  <div className="card-title">
                    <h4>Database</h4>
                    <p>Detail of your database</p>
                  </div>
                  <form>
                    <div className="install-step">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Host</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Database Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="mb-3 mb-0">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="add-form-btn widget-next-btn submit-btn">
                  <div className="btn-left">
                    <Link
                      to="#"
                      onClick={handlePrev}
                      className="btn btn-primary main-btn prev_btns"
                    >
                      <i className="feather icon-arrow-left" />
                      Prev
                    </Link>
                  </div>
                  <div className="btn-left">
                    <Link
                      to="#"
                      onClick={handleNext}
                      className="btn btn-primary main-btn next_btns"
                    >
                      Next <i className="feather icon-arrow-right" />
                    </Link>
                  </div>
                </div>
              </fieldset>
              )}
              {currentStep === 5 && (
              <fieldset className="form-inner card wizard-form-card">
                <div className="folder-permission">
                  <div className="card-title">
                    <h4>Admin Account</h4>
                    <p>Username &amp; Password of Your Account</p>
                  </div>
                  <form>
                    <div className="install-step">
                      <table className="install-user">
                        <tbody>
                          <tr>
                            <td>Username</td>
                            <td>: admin</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>: admin@domain.com</td>
                          </tr>
                          <tr>
                            <td>Password</td>
                            <td>: 1234</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                  <div className="rechange-details">
                    <span>
                      You can change username, email, password from the profile
                      setting section after the installation{" "}
                    </span>
                  </div>
                </div>
                <div className="add-form-btn widget-next-btn submit-btn">
                  <div className="btn-left">
                    <Link
                      to="#"
                      onClick={handlePrev}
                      className="btn btn-primary main-btn prev_btns"
                    >
                      <i className="feather icon-arrow-left" />
                      Prev
                    </Link>
                  </div>
                  <div className="btn-left">
                    <Link
                      to={routes.index}
                      className="btn btn-primary main-btn next_btns"
                    >
                      Finish <i className="feather icon-arrow-right" />
                    </Link>
                  </div>
                </div>
              </fieldset>
              )}
            </div>
            <div className="installation-footer py-4 text-center">
              <p>Copyright ⓒ 2024 Truelysell - All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Installer
