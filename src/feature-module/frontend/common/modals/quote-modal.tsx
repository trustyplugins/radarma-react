import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../../core/data/routes/all_routes';

const QuoteModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const routes = all_routes;
  const handleClose = () => {
    setShowModal(false);
  };
  const handelOpen = () => {
    setActiveTab(1)
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };
  return (
    <>
      {/* Quote Modal */}
      <div
        className="modal fade"
        id="quote_modal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-end pb-0 border-0">
              <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                <i className="ti ti-circle-x-filled fs-20" />
              </Link>
            </div>
            <div className="progress-fieldset">
              <div className="modal-body">
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-success"
                    style={{
                      width:
                        activeTab === 1 ? '0%' 
                        : activeTab === 2 ? '8%'
                        : activeTab === 3 ? '16%' 
                        : activeTab === 4 ? '24%' 
                        : activeTab === 5 ? '32%' 
                        : activeTab === 6 ? '40%' 
                        : activeTab === 7 ? '48%'  
                        : activeTab === 8 ? '56%' 
                        : activeTab === 9 ? '64%' 
                        : activeTab === 10 ? '72%' 
                        : activeTab === 11 ? '80%' 
                        : activeTab === 12 ? '88%' 
                        : activeTab === 13 ? '100%' 
                        :''
                    }}
                  />
                </div>
                <fieldset
                  className={`field-one ${activeTab === 1 ? 'd-block' : 'd-none'}`}
                >
                  <h4 className="mb-3">
                    What type of property needs cleaning?
                  </h4>
                  <ul className="list-group group-radio mb-3">
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="property1">
                        Residential Property
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="property"
                        type="radio"
                        id="property1"
                        defaultChecked
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="property2">
                        Commercial Property
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="property"
                        type="radio"
                        id="property2"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="property3">
                        Commercial Property
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="property"
                        type="radio"
                        id="property3"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="property4">
                        Public Facilities
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="property"
                        type="radio"
                        id="property4"
                      />
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(2)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 2 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-3">How large is the property?</h4>
                  <ul className="list-group group-radio mb-3">
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="size1">
                        1RK
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="size"
                        type="radio"
                        id="size1"
                        defaultChecked
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="size2">
                        1BHK
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="size"
                        type="radio"
                        id="size2"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="size3">
                        2BHK
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="size"
                        type="radio"
                        id="size3"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="size4">
                        3BHK
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="size"
                        type="radio"
                        id="size4"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="size5">
                        4BHK
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="size"
                        type="radio"
                        id="size5"
                      />
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(1)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(3)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 3 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-3">How large is the property?</h4>
                  <ul className="list-group group-radio mb-3">
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="room1">
                        0
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="room"
                        type="radio"
                        id="room1"
                        defaultChecked
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="room2">
                        1
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="room"
                        type="radio"
                        id="room2"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="room3">
                        2
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="room"
                        type="radio"
                        id="room3"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="room4">
                        3
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="room"
                        type="radio"
                        id="room4"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="room5">
                        4
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="room"
                        type="radio"
                        id="room5"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="room6">
                        5+
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="room"
                        type="radio"
                        id="room6"
                      />
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(2)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(4)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 4 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-3">How many bathroom(s) need cleaning?</h4>
                  <ul className="list-group group-radio mb-3">
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="bathroom1">
                        I don’t need bathroom cleaning
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="bathroom"
                        type="radio"
                        id="bathroom1"
                        defaultChecked
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="bathroom2">
                        1 bathroom
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="bathroom"
                        type="radio"
                        id="bathroom2"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="bathroom3">
                        1 bathroom + 1 additional toilet
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="bathroom"
                        type="radio"
                        id="bathroom3"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="bathroom4">
                        2 bathrooms
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="bathroom"
                        type="radio"
                        id="bathroom4"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="bathroom5">
                        2 bathrooms + 1 additional toilet
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="bathroom"
                        type="radio"
                        id="bathroom5"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="bathroom6">
                        3+ bathrooms
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="bathroom"
                        type="radio"
                        id="bathroom6"
                      />
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(3)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(5)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 5 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-3">How many bathroom(s) need cleaning?</h4>
                  <ul className="list-group group-radio mb-3">
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="balcony1">
                        I don’t need balcony cleaning
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="balcony"
                        type="radio"
                        id="balcony1"
                        defaultChecked
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="balcony2">
                        1 balcony
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="balcony"
                        type="radio"
                        id="balcony2"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="balcony3">
                        1 balcony + 1 additional toilet
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="balcony"
                        type="radio"
                        id="balcony3"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="balcony4">
                        2 balconys
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="balcony"
                        type="radio"
                        id="balcony4"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="balcony5">
                        2 balconys + 1 additional toilet
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="balcony"
                        type="radio"
                        id="balcony5"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="balcony6">
                        3+ balconys
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="balcony"
                        type="radio"
                        id="balcony6"
                      />
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(4)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(6)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 6 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-3">
                    What type of cleaning would you like?
                  </h4>
                  <ul className="list-group group-radio mb-3">
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="clean1">
                        Standard Cleaning
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="clean"
                        type="radio"
                        id="clean1"
                        defaultChecked
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="clean2">
                        1 clean
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="clean"
                        type="radio"
                        id="clean2"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="clean3">
                        Move-out Cleaning
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="clean"
                        type="radio"
                        id="clean3"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="clean4">
                        Deep Cleaning
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="clean"
                        type="radio"
                        id="clean4"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="clean5">
                        Commercial Cleaning
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="clean"
                        type="radio"
                        id="clean5"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="clean6">
                        Green Cleaning
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="clean"
                        type="radio"
                        id="clean6"
                      />
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(5)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(7)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 7 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-3">How often do you need cleaning?</h4>
                  <ul className="list-group group-radio mb-3">
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="clean1">
                        Daily
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="time"
                        type="radio"
                        id="time1"
                        defaultChecked
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="time2">
                        Twice a week
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="time"
                        type="radio"
                        id="time2"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="time3">
                        Weekly
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="time"
                        type="radio"
                        id="time3"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="time4">
                        Every other week
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="time"
                        type="radio"
                        id="time4"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="time5">
                        Once a month
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="time"
                        type="radio"
                        id="time5"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="time6">
                        One time clean
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="time"
                        type="radio"
                        id="time6"
                      />
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(6)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(8)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 8 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-3">Do you need any additional services?</h4>
                  <ul className="list-group group-radio mb-3">
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label
                        className="form-check-label"
                        htmlFor="addon-service1"
                      >
                        I don’t need any other services
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="addon-service"
                        type="radio"
                        id="addon-service1"
                        defaultChecked
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label
                        className="form-check-label"
                        htmlFor="addon-service2"
                      >
                        Bedsheet / linen changes
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="addon-service"
                        type="radio"
                        id="addon-service2"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label
                        className="form-check-label"
                        htmlFor="addon-service3"
                      >
                        Furniture dusting
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="addon-service"
                        type="radio"
                        id="addon-service3"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label
                        className="form-check-label"
                        htmlFor="addon-service4"
                      >
                        Utensils addon-serviceing
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="addon-service"
                        type="radio"
                        id="addon-service4"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label
                        className="form-check-label"
                        htmlFor="addon-service5"
                      >
                        Washing clothes
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="addon-service"
                        type="radio"
                        id="addon-service5"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label
                        className="form-check-label"
                        htmlFor="addon-service6"
                      >
                        Watering Plants
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="addon-service"
                        type="radio"
                        id="addon-service6"
                      />
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(7)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(9)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 9 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-3">
                    Which time(s) are you available for cleaning?
                  </h4>
                  <ul className="list-group group-radio mb-3">
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="times1">
                        Any time
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="times"
                        type="radio"
                        id="times1"
                        defaultChecked
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="times2">
                        Early morning ( before 9AM )
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="times"
                        type="radio"
                        id="times2"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="times3">
                        Morning ( 9AM - noon )
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="times"
                        type="radio"
                        id="times3"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="times4">
                        Early afternoon ( noon - 3PM )
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="times"
                        type="radio"
                        id="times4"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="times5">
                        Late afternoon ( 3 PM - 6PM )
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="times"
                        type="radio"
                        id="times5"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="times6">
                        Evening ( after 6PM )
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="times"
                        type="radio"
                        id="times6"
                      />
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(8)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(10)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 10 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-3">
                    How likely are you to make a hiring decision?
                  </h4>
                  <ul className="list-group group-radio mb-3">
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="hire1">
                        I am ready to hire now
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="hire"
                        type="radio"
                        id="hire1"
                        defaultChecked
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="hire2">
                        I am definitely going to hire someone
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="hire"
                        type="radio"
                        id="hire2"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="hire3">
                        I am likely to hire someone
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="hire"
                        type="radio"
                        id="hire3"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="hire4">
                        I am possibly hire someone
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="hire"
                        type="radio"
                        id="hire4"
                      />
                    </li>
                    <li className="list-group-item form-check d-flex align-items-center justify-content-between p-3">
                      <label className="form-check-label" htmlFor="hire5">
                        I am planning and researching
                      </label>
                      <input
                        className="form-check-input ms-0 mt-0"
                        name="hire"
                        type="radio"
                        id="hire5"
                      />
                    </li>
                  </ul>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(9)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(11)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 11 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-1">Where do you need the cleaner?</h4>
                  <p className="mb-3">
                    The zip code or locality for the location where you require
                    a cleaner.
                  </p>
                  <div className="input-group mb-3">
                    <span className="input-group-text px-2 bg-white">
                      <i className="ti ti-map-pin" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-0"
                    />
                  </div>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(10)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(12)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 12 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-3">
                    What email address would you like quotes sent to?
                  </h4>
                  <div className="input-group mb-3">
                    <span className="input-group-text px-2 bg-white">
                      <i className="ti ti-mail" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-0"
                    />
                  </div>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(11)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      onClick={() => setActiveTab(13)}
                      className="btn btn-linear-primary next_btn"
                    >
                      Continue
                    </Link>
                  </div>
                </fieldset>
                <fieldset className={activeTab === 13 ? 'd-block' : 'd-none'}>
                  <h4 className="mb-1">Your contact info stays private</h4>
                  <p className="mb-3">
                    Some providers prefer giving quotes by phone for more
                    details
                  </p>
                  <div className="input-group mb-3">
                    <span className="input-group-text px-2 bg-white">
                      <i className="ti ti-phone" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-0"
                    />
                  </div>
                  <div className="text-end">
                    <Link
                      to="#"
                      onClick={() => setActiveTab(12)}
                      className="btn btn-light prev_btn me-3"
                    >
                      Back
                    </Link>
                    <Link
                      to="#"
                      data-bs-dismiss="modal"
                      onClick={handelOpen}
                      className="btn btn-linear-primary next_btn"
                    >
                      Submit
                    </Link>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Quote Modal */}
      <>
        {/* Success Modal */}
        <Modal centered show={showModal}>
          <div className="modal-body text-center">
            <div className="mb-4">
              <span className="success-icon mx-auto mb-4">
                <i className="ti ti-check" />
              </span>
              <h4 className="mb-1">
                We’ve found the best options that fits you{' '}
              </h4>
              <p>
                Please check the email, we sent you the list of service
                providers to the email{' '}
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Link to="#" onClick={handleClose} className="btn btn-light me-3">
                Close
              </Link>
              <Link
                to={routes.bookingDetails}
                className="btn btn-linear-primary"
              >
                Booking Details
              </Link>
            </div>
          </div>
        </Modal>
        {/* /Success Modal */}
      </>
    </>
  );
};

export default QuoteModal;
