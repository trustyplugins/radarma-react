import React from 'react'
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="login-pages">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="login-logo">
                                <ImageWithBasePath
                                    src="assets/img/logo-login.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-7">
                                <div className="login-images">
                                    <ImageWithBasePath
                                     src="assets/img/login-banner.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-5">
                                <div className="login-content">
                                    <div className="login-contenthead">
                                        <h5>Forgot password?</h5>
                                        <h6>
                                            Don’t warry! it happens. Please enter the address associated
                                            with your account.
                                        </h6>
                                    </div>
                                    <div className="login-input">
                                        <div className="form-group">
                                            <label>E-mail</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="example@email.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="login-button">
                                        <Link to="/signin" className="btn btn-login">
                                            Submit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ForgetPassword
