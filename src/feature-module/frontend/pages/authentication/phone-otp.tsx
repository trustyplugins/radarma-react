import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import PagesAuthHeader from './common/header';
import { all_routes } from '../../../../core/data/routes/all_routes';
import AuthFooter from './common/footer';
import { InputOtp } from 'primereact/inputotp';

const PhoneOtp = () => {
  
  const routes = all_routes;
  const navigate = useNavigate()
  const [token, setTokens] = useState<any>();

  return (
    <>
    <PagesAuthHeader />
    <div className="main-wrapper">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-5 mx-auto">
        <form onSubmit={()=>navigate(routes.emailOtp)} className="digit-group">
          <div className="d-flex flex-column justify-content-center">
            <div className="card p-sm-4">
              <div className="card-body">
                <div className="text-center mb-3">
                  <h3 className="mb-2">Phone OTP Verification</h3>
                  <p>OTP sent to your mobile number ending&nbsp;******9575</p>
                </div>
                <div className="text-center otp-input">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    {/* <input
                      type="text"
                      className="rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold me-3"
                      id="digit-1"
                      name="digit-1"
                      data-next="digit-2"
                      maxLength={1}
                    />
                    <input
                      type="text"
                      className="rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold me-3"
                      id="digit-2"
                      name="digit-2"
                      data-next="digit-3"
                      data-previous="digit-1"
                      maxLength={1}
                    />
                    <input
                      type="text"
                      className="rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold me-3"
                      id="digit-3"
                      name="digit-3"
                      data-next="digit-4"
                      data-previous="digit-2"
                      maxLength={1}
                    />
                    <input
                      type="text"
                      className="rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold"
                      id="digit-4"
                      name="digit-4"
                      data-next="digit-5"
                      data-previous="digit-3"
                      maxLength={1}
                    /> */}
                     <InputOtp value={token} onChange={(e) => setTokens(e.value)} integerOnly/>
                  </div>
                  <div>
                    <div className="badge bg-danger-transparent mb-3">
                      <p className="d-flex align-items-center ">
                        <i className="ti ti-clock me-1" />
                        09:59
                      </p>
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                      <p>
                        Didn&lsquo;t get the OTP?{" "}
                        <Link to="#" className="text-primary">
                          Resend OTP
                        </Link>
                      </p>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="btn btn-lg btn-linear-primary w-100"
                      >
                        Verify &amp; Proceed
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <ImageWithBasePath
                    src="assets/img/bg/authentication-bg.png"
                    className="bg-left-top"
                    alt="Img"
                  />
                  <ImageWithBasePath
                    src="assets/img/bg/authentication-bg.png"
                    className="bg-right-bottom"
                    alt="Img"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

      <AuthFooter/>
    </>
  );
};

export default PhoneOtp;
