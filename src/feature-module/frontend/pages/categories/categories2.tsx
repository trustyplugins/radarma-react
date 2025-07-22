import React from 'react'
import BreadCrumb from '../../common/breadcrumb/breadCrumb'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'

const Categories2 = () => {
  return (
    <>
        <BreadCrumb title="Categories" item1="Categories" />

        <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
            <div className="content">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-26.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center">
                        <div className="inner-content d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-01.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Construction</h5>
                        </div>
                        <p className="fs-14 me-2">10 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-28.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-02.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Removal</h5>
                        </div>
                        <p className="fs-14 me-2">45 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-29.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-05.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Electrical</h5>
                        </div>
                        <p className="fs-14 me-2">66 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-30.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-03.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Furniture Assembly</h5>
                        </div>
                        <p className="fs-14 me-2">45 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-44.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-07.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Deliveries</h5>
                        </div>
                        <p className="fs-14 me-2">40 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-33.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-14.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Cleaning</h5>
                        </div>
                        <p className="fs-14 me-2">21 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-34.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-06.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Man and van</h5>
                        </div>
                        <p className="fs-14 me-2">21 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-46.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-08.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Mobile Barbers</h5>
                        </div>
                        <p className="fs-14 me-2">16 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-37.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-15.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Car Transport</h5>
                        </div>
                        <p className="fs-14 me-2">14 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-35.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-11.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Nail Technicians</h5>
                        </div>
                        <p className="fs-14 me-2">74 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-38.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-12.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Hair Dressers</h5>
                        </div>
                        <p className="fs-14 me-2">21 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-42.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-09.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Interior</h5>
                        </div>
                        <p className="fs-14 me-2">45 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-41.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-16.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Carpenter</h5>
                        </div>
                        <p className="fs-14 me-2">22 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-43.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary  avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-17.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Car Wash</h5>
                        </div>
                        <p className="fs-14 me-2">15 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="category-list rounded mb-4">
                    <Link to="#">
                        <ImageWithBasePath
                        src="assets/img/services/service-40.jpg"
                        className="img-fluid"
                        alt="img"
                        />
                        <div className="service-img bg-secondary d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center">
                            <span className="service-icon bg-primary avatar avatar-md text-white me-2">
                            <ImageWithBasePath
                                src="assets/img/icons/category-10.svg"
                                className="img-fluid"
                                alt="logo"
                            />
                            </span>
                            <h5 className="text-white">Plumbing</h5>
                        </div>
                        <p className="fs-14 me-2">12 Services</p>
                        </div>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* /Page Wrapper */}
</>

    </>
  )
}

export default Categories2