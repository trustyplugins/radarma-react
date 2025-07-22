import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { InputOtp } from 'primereact/inputotp';

const AuthModals = () => {
    const [token, setTokens] = useState<any>();
    const [token2, setTokens2] = useState<any>();
    const [password, setPassword] = useState('');
  const [passwordResponce, setPasswordResponce] = useState({
    passwordResponceText: "Use 8 or more characters with a mix of letters, number's symbols.",
    passwordResponceKey: '',
  });

  const onChangePassword = (password: string) => {
    setPassword(password);
    if (password.match(/^$|\s+/)) {
      setPasswordResponce({
        passwordResponceText: 'Whitespaces are not allowed',
        passwordResponceKey: '',
      });
    } else if (password.length === 0) {
      setPasswordResponce({
        passwordResponceText: '',
        passwordResponceKey: '',
      });
    } else if (password.length < 8) {
      setPasswordResponce({
        passwordResponceText: 'Weak. Must contain at least 8 characters',
        passwordResponceKey: '0',
      });
    } else if (
      password.search(/[a-z]/) < 0 ||
      password.search(/[A-Z]/) < 0 ||
      password.search(/[0-9]/) < 0
    ) {
      setPasswordResponce({
        passwordResponceText:
          'Average. Must contain at least 1 upper case and number',
        passwordResponceKey: '1',
      });
    } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      setPasswordResponce({
        passwordResponceText: 'Almost. Must contain a special symbol',
        passwordResponceKey: '2',
      });
    } else {
      setPasswordResponce({
        passwordResponceText: 'Awesome! You have a secure password.',
        passwordResponceKey: '3',
      });
    }
  };
  return (
    <>
  {/* Login Modal */}
  <div
    className="modal fade"
    id="login-modal"
    tabIndex={-1}
    data-bs-backdrop="static"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <form >
            <div className="text-center mb-3">
              <h3 className="mb-2">Welcome</h3>
              <p>Enter your credentials to access your account</p>
            </div>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <label className="form-label">Password</label>
                <Link
                  to="#"
                  className="text-primary fw-medium text-decoration-underline mb-1 fs-14"
                  data-bs-toggle="modal"
                  data-bs-target="#forgot-modal"
                >
                  Forgot Password?
                </Link>
              </div>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="remembers_me"
                  />
                  <label className="form-check-label" htmlFor="remembers_me">
                    Remember Me
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="otp_signin"
                  />
                  <label className="form-check-label" htmlFor="otp_signin">
                    Sign in with OTP
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-lg btn-linear-primary w-100"
              >
                Sign In
              </button>
            </div>
            <div className="login-or mb-3">
              <span className="span-or">Or sign in with </span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Link
                to="#"
                className="btn btn-light flex-fill d-flex align-items-center justify-content-center me-3"
              >
                <ImageWithBasePath
                  src="assets/img/icons/google-icon.svg"
                  className="me-2"
                  alt="Img"
                />
                Google
              </Link>
              <Link
                to="#"
                className="btn btn-light flex-fill d-flex align-items-center justify-content-center"
              >
                <ImageWithBasePath
                  src="assets/img/icons/fb-icon.svg"
                  className="me-2"
                  alt="Img"
                />
                Facebook
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <p>
                Don’t have a account?{" "}
                <Link
                  to="#"
                  className="text-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#register-modal"
                >
                  {" "}
                  Join us Today
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Login Modal */}
  {/* Register Modal */}
  <div
    className="modal fade"
    id="register-modal"
    tabIndex={-1}
    data-bs-backdrop="static"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <form action="#">
            <div className="text-center mb-3">
              <h3 className="mb-2">Registration</h3>
              <p>Enter your credentials to access your account</p>
            </div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                className="form-control"
                id="phone"
                name="phone"
                type="text"
              />
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <label className="form-label">Password</label>
                <p className="text-gray-6 fw-medium  mb-1">
                  Must be 8 Characters at Least
                </p>
              </div>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="remember_me"
                  />
                  <label className="form-check-label" htmlFor="remember_me">
                    I agree to{" "}
                    <Link
                      to="#"
                      className="text-primary text-decoration-underline"
                    >
                      Terms of use
                    </Link>{" "}
                    &amp;{" "}
                    <Link
                      to="#"
                      className="text-primary text-decoration-underline"
                    >
                      Privacy policy
                    </Link>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#login-modal"
                className="btn btn-lg btn-linear-primary w-100"
              >
                Sign Up
              </button>
            </div>
            <div className="login-or mb-3">
              <span className="span-or">Or sign up with </span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Link
                to="#"
                className="btn btn-light flex-fill d-flex align-items-center justify-content-center me-3"
              >
                <ImageWithBasePath
                  src="assets/img/icons/google-icon.svg"
                  className="me-2"
                  alt="Img"
                />
                Google
              </Link>
              <Link
                to="#"
                className="btn btn-light flex-fill d-flex align-items-center justify-content-center"
              >
                <ImageWithBasePath
                  src="assets/img/icons/fb-icon.svg"
                  className="me-2"
                  alt="Img"
                />
                Facebook
              </Link>
            </div>
            <div className=" d-flex justify-content-center">
              <p>
                Already have a account?{" "}
                <Link
                  to="#"
                  className="text-primary"
                  data-bs-target="#login-modal"
                  data-bs-toggle="modal"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Register Modal */}
  {/* Forgot Modal */}
  <div
    className="modal fade"
    id="forgot-modal"
    tabIndex={-1}
    data-bs-backdrop="static"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <form action="#">
            <div className="text-center mb-3">
              <h3 className="mb-2">Forgot Password?</h3>
              <p>
                Enter your email, we will send you a otp to reset your password.
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-lg btn-linear-primary w-100"
                data-bs-toggle="modal"
                data-bs-target="#otp-email-modal"
              >
                Submit
              </button>
            </div>
            <div className=" d-flex justify-content-center">
              <p>
                Remember Password?{" "}
                <Link
                  to="#"
                  className="text-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#login-modal"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Forgot Modal */}
  {/* Email otp Modal */}
  <div
    className="modal fade"
    id="otp-email-modal"
    tabIndex={-1}
    data-bs-backdrop="static"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <form action="#" className="digit-group">
            <div className="text-center mb-3">
              <h3 className="mb-2">Email OTP Verification</h3>
              <p className="fs-14">
                OTP sent to your Email Address ending ******doe@example.com
              </p>
            </div>
            <div className="text-center otp-input">
              <div className="d-flex align-items-center justify-content-center mb-3">
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
                    Didn&apos;t get the OTP?{" "}
                    <Link to="#" className="text-primary">
                      Resend OTP
                    </Link>
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-lg btn-linear-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#otp-phone-modal"
                  >
                    Verify &amp; Proceed
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Email otp Modal */}
  {/* Phone otp Modal */}
  <div
    className="modal fade"
    id="otp-phone-modal"
    tabIndex={-1}
    data-bs-backdrop="static"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <form action="#" className="digit-group">
            <div className="text-center mb-3">
              <h3 className="mb-2">Phone OTP Verification</h3>
              <p>OTP sent to your mobile number ending&nbsp;******9575</p>
            </div>
            <div className="text-center otp-input">
              <div className="d-flex align-items-center justify-content-center mb-3">
              <InputOtp value={token2} onChange={(e) => setTokens2(e.value)} integerOnly/>
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
                    Didn&apos;t get the OTP?{" "}
                    <Link to="#" className="text-primary">
                      Resend OTP
                    </Link>
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-lg btn-linear-primary w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#reset-password"
                  >
                    Verify &amp; Proceed
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Phone otp Modal */}
  {/* Reset password Modal */}
  <div
    className="modal fade"
    id="reset-password"
    tabIndex={-1}
    data-bs-backdrop="static"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <div className="text-center mb-3">
            <h3 className="mb-2">Reset Password</h3>
            <p className="fs-14">
              Your new password must be different from previous used passwords.
            </p>
          </div>
          <form action="#">
            <div className="input-block mb-3">
              <div className="mb-3">
                <label className="form-label">New Password</label>
                <div className="pass-group" id="passwordInput">
                  <input type="password" value={password} onChange={(e) => onChangePassword(e.target.value)} className="form-control pass-input" />
                </div>
              </div>
              <div
                      className={`password-strength d-flex ${
                        passwordResponce.passwordResponceKey === '0'
                          ? 'poor-active'
                          : passwordResponce.passwordResponceKey === '1'
                          ? 'avg-active'
                          : passwordResponce.passwordResponceKey === '2'
                          ? 'strong-active'
                          : passwordResponce.passwordResponceKey === '3'
                          ? 'heavy-active'
                          : ''
                      }`}
                      id="passwordStrength"
                    >
                      <span id="poor" className="active" />
                      <span id="weak" className="active" />
                      <span id="strong" className="active" />
                      <span id="heavy" className="active" />
                    </div>
              <div id="passwordInfo" className="mb-2" />
              <p className="fs-12">
              {passwordResponce.passwordResponceText}
              </p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <label className="form-label">Confirm Password</label>
              </div>
              <input type="password" className="form-control" />
            </div>
            <div>
              <button
                type="button"
                className="btn btn-lg btn-linear-primary w-100"
                data-bs-toggle="modal"
                data-bs-target="#success_modal"
              >
                Save Change
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Reset password Modal */}
  {/* success message Modal */}
  <div
    className="modal fade"
    id="success-modal"
    tabIndex={-1}
    data-bs-backdrop="static"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
          <Link
            to="#"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body p-4">
          <div className="text-center">
            <span className="success-check mb-3 mx-auto">
              <i className="ti ti-check" />
            </span>
            <h4 className="mb-2">Success</h4>
            <p>Your new password has been successfully saved</p>
            <div>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-lg btn-linear-primary w-100"
              >
                Back to Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /success message Modal */}
</>

  )
}

export default AuthModals