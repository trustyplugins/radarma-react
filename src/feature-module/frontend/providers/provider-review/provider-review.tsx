import React from 'react'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { Link } from 'react-router-dom';

const ProviderReview = () => {
  return (
<>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="row">
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-4">
          <h4>Reviews</h4>
          <div className="d-flex align-items-center">
            <span className="fs-14 me-2">Sort</span>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Newly Added
              </Link>
              <div className="dropdown-menu">
                <Link to="#" className="dropdown-item active">
                  Newly Added
                </Link>
                <Link to="#" className="dropdown-item">
                  Oldest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-xxl-12 col-lg-12">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-md-flex align-items-center">
                <div className="review-widget d-sm-flex flex-fill">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <span className="review-img me-2">
                        <ImageWithBasePath
                          src="assets/img/providers/provider-22.jpg"
                          className="rounded img-fluid"
                          alt="User Image"
                        />
                      </span>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center">
                            <h6 className="fs-14 me-2">
                              Building Construction Services.
                            </h6>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm me-2">
                            <ImageWithBasePath
                              src="assets/img/user/user-10.jpg"
                              className="rounded-circle "
                              alt="Img"
                            />
                          </span>
                          <h6 className="fs-13 me-2">Jeffrey Akridge,</h6>
                          <span className="fs-12">July 11, 2024 11:38 am</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-icon d-inline-flex">
                  <Link
                    to="#"
                    className="me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="ti ti-edit" />
                  </Link>
                  <Link
                    to="#"
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target="#del-review"
                  >
                    <i className="ti ti-trash" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="fs-14">
                  The construction service delivered excellent craftsmanship,
                  completing my home renovation on time with clear communication
                  throughout. Highly recommend for quality and professionalism!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 col-lg-12">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-md-flex align-items-center">
                <div className="review-widget d-sm-flex flex-fill">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <span className="review-img me-2">
                        <ImageWithBasePath
                          src="assets/img/providers/provider-20.jpg"
                          className="rounded img-fluid"
                          alt="User Image"
                        />
                      </span>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center">
                            <h6 className="fs-14 me-2">
                              Commercial Painting Services.
                            </h6>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm me-2">
                            <ImageWithBasePath
                              src="assets/img/user/user-11.jpg"
                              className="rounded-circle "
                              alt="Img"
                            />
                          </span>
                          <h6 className="fs-13 me-2">Nancy Olson,</h6>
                          <span className="fs-12">July 18, 2024 04:30 pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-icon d-inline-flex">
                  <Link
                    to="#"
                    className="me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="ti ti-edit" />
                  </Link>
                  <Link
                    to="#"
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target="#del-review"
                  >
                    <i className="ti ti-trash" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="fs-14">
                  The commercial painting service provided outstanding results,
                  with precise attention to detail and timely completion. Their
                  professionalism and quality of work are top-notch!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 col-lg-12">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-md-flex align-items-center">
                <div className="review-widget d-sm-flex flex-fill">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <span className="review-img me-2">
                        <ImageWithBasePath
                          src="assets/img/providers/provider-23.jpg"
                          className="rounded img-fluid"
                          alt="User Image"
                        />
                      </span>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center">
                            <h6 className="fs-14 me-2">Plumbing Services.</h6>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm me-2">
                            <ImageWithBasePath
                              src="assets/img/user/user-12.jpg"
                              className="rounded-circle "
                              alt="Img"
                            />
                          </span>
                          <h6 className="fs-13 me-2">Ramona Kingsley, </h6>
                          <span className="fs-12">July 28, 2024 02:15 pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-icon d-inline-flex">
                  <Link
                    to="#"
                    className="me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="ti ti-edit" />
                  </Link>
                  <Link
                    to="#"
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target="#del-review"
                  >
                    <i className="ti ti-trash" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="fs-14">
                  The plumbing service was efficient and reliable, quickly
                  resolving the issue with excellent workmanship. Highly
                  recommend for their prompt and professional service!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 col-lg-12">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-md-flex align-items-center">
                <div className="review-widget d-sm-flex flex-fill">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <span className="review-img me-2">
                        <ImageWithBasePath
                          src="assets/img/providers/provider-24.jpg"
                          className="rounded img-fluid"
                          alt="User Image"
                        />
                      </span>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center">
                            <h6 className="fs-14 me-2">
                              Wooden Carpentry Work.
                            </h6>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm me-2">
                            <ImageWithBasePath
                              src="assets/img/user/user-02.jpg"
                              className="rounded-circle "
                              alt="Img"
                            />
                          </span>
                          <h6 className="fs-13 me-2">Ricardo Lung,</h6>
                          <span className="fs-12">
                            August 01, 2024 10:00 am
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-icon d-inline-flex">
                  <Link
                    to="#"
                    className="me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="ti ti-edit" />
                  </Link>
                  <Link
                    to="#"
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target="#del-review"
                  >
                    <i className="ti ti-trash" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="fs-14">
                  The carpentry service exceeded my expectations with their
                  meticulous attention to detail and superior craftsmanship.
                  They completed the project on time, and the final results were
                  both functional and aesthetically pleasing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 col-lg-12">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-md-flex align-items-center">
                <div className="review-widget d-sm-flex flex-fill">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <span className="review-img me-2">
                        <ImageWithBasePath
                          src="assets/img/providers/provider-25.jpg"
                          className="rounded img-fluid"
                          alt="User Image"
                        />
                      </span>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center">
                            <h6 className="fs-14 me-2">
                              Air Conditioner Service.
                            </h6>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm me-2">
                            <ImageWithBasePath
                              src="assets/img/user/user-13.jpg"
                              className="rounded-circle "
                              alt="Img"
                            />
                          </span>
                          <h6 className="fs-13 me-2">Annette Silva,</h6>
                          <span className="fs-12">
                            August 12, 2024 11:40 am
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-icon d-inline-flex">
                  <Link
                    to="#"
                    className="me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="ti ti-edit" />
                  </Link>
                  <Link
                    to="#"
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target="#del-review"
                  >
                    <i className="ti ti-trash" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="fs-14">
                  The air conditioning service was excellent, with prompt and
                  thorough maintenance that restored my system to peak
                  performance. Their technicians were professional and
                  efficient, making the entire experience hassle-free.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 col-lg-12">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-md-flex align-items-center">
                <div className="review-widget d-sm-flex flex-fill">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <span className="review-img me-2">
                        <ImageWithBasePath
                          src="assets/img/providers/provider-14.jpg"
                          className="rounded img-fluid"
                          alt="User Image"
                        />
                      </span>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center">
                            <h6 className="fs-14 me-2">
                              Toughened Glass Fitting Services.
                            </h6>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm me-2">
                            <ImageWithBasePath
                              src="assets/img/user/user-01.jpg"
                              className="rounded-circle "
                              alt="Img"
                            />
                          </span>
                          <h6 className="fs-13 me-2">Stephen Wilson,</h6>
                          <span className="fs-12">
                            August 20, 2024 01:15 pm
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-icon d-inline-flex">
                  <Link
                    to="#"
                    className="me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="ti ti-edit" />
                  </Link>
                  <Link
                    to="#"
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target="#del-review"
                  >
                    <i className="ti ti-trash" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="fs-14">
                  The toughened glass fitting service was outstanding,
                  delivering precise installation with high-quality materials.
                  Their attention to detail and professionalism ensured a
                  flawless finish and timely completion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-12 col-lg-12">
          <div className="card shadow-none">
            <div className="card-body">
              <div className="d-md-flex align-items-center">
                <div className="review-widget d-sm-flex flex-fill">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex">
                      <span className="review-img me-2">
                        <ImageWithBasePath
                          src="assets/img/providers/provider-13.jpg"
                          className="rounded img-fluid"
                          alt="User Image"
                        />
                      </span>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="d-flex align-items-center">
                            <h6 className="fs-14 me-2">Car Repair Services.</h6>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                            <span>
                              <i className="ti ti-star-filled text-warning" />
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="avatar avatar-sm me-2">
                            <ImageWithBasePath
                              src="assets/img/user/user-06.jpg"
                              className="rounded-circle "
                              alt="Img"
                            />
                          </span>
                          <h6 className="fs-13 me-2">Ryan Rodriguez,</h6>
                          <span className="fs-12">
                            August 24, 2024 06:30 pm
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-icon d-inline-flex">
                  <Link
                    to="#"
                    className="me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    <i className="ti ti-edit" />
                  </Link>
                  <Link
                    to="#"
                    className=""
                    data-bs-toggle="modal"
                    data-bs-target="#del-review"
                  >
                    <i className="ti ti-trash" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="fs-14">
                  The car repair service was exceptional, providing prompt and
                  thorough repairs with clear communication throughout. Their
                  expertise and attention to detail restored my vehicle to top
                  condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="value d-flex align-items-center">
          <span>Show</span>
          <select>
            <option>7</option>
          </select>
          <span>entries</span>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <span className="me-2 text-gray-9">1 - 07 of 10</span>
          <nav aria-label="Page navigation">
            <ul className="paginations d-flex justify-content-center align-items-center">
              <li className="page-item me-2">
                <Link
                  className="page-link-1 active d-flex justify-content-center align-items-center "
                  to="#"
                >
                  1
                </Link>
              </li>
              <li className="page-item me-2">
                <Link
                  className="page-link-1 d-flex justify-content-center align-items-center "
                  to="#"
                >
                  2
                </Link>
              </li>
              <li className="page-item ">
                <Link
                  className="page-link-1 d-flex justify-content-center align-items-center "
                  to="#"
                >
                  3
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Delete Staff */}
  <div className="modal fade custom-modal" id="del-review">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header d-flex align-items-center justify-content-between border-bottom">
          <h5 className="modal-title">Delete Review</h5>
          <Link to="#" data-bs-dismiss="modal" aria-label="Close">
            <i className="ti ti-circle-x-filled fs-20" />
          </Link>
        </div>
        <div className="modal-body">
          <div className="write-review">
            <form >
              <p>Are you sure want to delete this Review?</p>
              <div className="modal-submit text-end">
                <Link
                  to="#"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button type="button" data-bs-dismiss="modal" className="btn btn-dark">
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Staff */}
</>

  )
}

export default ProviderReview