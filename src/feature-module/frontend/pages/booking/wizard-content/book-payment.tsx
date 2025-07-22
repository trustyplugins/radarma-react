import React, { MouseEventHandler, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath'
interface props {
    handleNext: MouseEventHandler;
    handlePrev?: MouseEventHandler
    setCurrentStep?: CallableFunction
}
const BookPayment = ({handlePrev,handleNext}:props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [pay, setPay] = useState<boolean>(false);
  // Handle click on list item
const handleClick = (index: number) => {
setSelectedIndex(index); // Set the clicked item as the selected one
setPay(true)
};
  const paymentMethods = [
    {
      id: "payment1",
      name: "Stripe",
      imgSrc: "assets/img/icons/payment1.svg",
    },
    {
      id: "payment2",
      name: "Paypal",
      imgSrc: "assets/img/icons/payment2.svg",
    },
    {
      id: "payment3",
      name: "Razorpay",
      imgSrc: "assets/img/icons/razor-pay.svg",
    },
    {
      id: "payment4",
      name: "PaySolution",
      imgSrc: "assets/img/icons/pay-solution.svg",
    },
    {
      id: "payment5",
      name: "Square",
      imgSrc: "assets/img/icons/square.svg",
    },
  ];
  return (
    <fieldset className="booking-content" style={{ display: 'flex' }}>
                    <div className="book-card">
                      <div className="d-flex align-items-center justify-content-between flex-wrap booking-title">
                        <div className="d-flex align-items-center mb-2">
                          <h6 className="fs-16 me-2 mb-2">Payment Method</h6>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <Link
                            to="#"
                            onClick={handlePrev}
                            className="btn btn-sm btn-secondary d-inline-flex align-items-center prev_btn mb-2"
                          >
                            <i className="ti ti-caret-left-filled me-1" />
                            Back to Cart
                          </Link>
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <h6 className="fs-13 mb-3">Payment Types</h6>
                          {paymentMethods.map((method,index) => (
                            <div
                              className={`payment-item d-flex align-items-center justify-content-between mb-2 ${selectedIndex === index ? 'active' : ''}`}
                              key={index}
                              onClick={() => handleClick(index)}
                            >
                              <div className="form-check d-flex align-items-center ps-0">
                                <input
                                  className="form-check-input ms-0 mt-0"
                                  name="payment"
                                  type="radio"
                                  id={method.id}
                                  checked={selectedIndex === index }
                                />
                                <label className="form-check-label ms-2" htmlFor={method.id}>
                                  {method.name}
                                </label>
                              </div>
                              <div>
                                <ImageWithBasePath src={method.imgSrc} alt="payment" />
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="col-md-6">
                          <div className="card total-card">
                            <div className="card-body p-3 d-flex justify-content-between flex-column">
                              <div>
                                <div className="mb-2 d-flex align-items-center justify-content-between">
                                  <div>
                                    <h6 className="fw-medium">
                                      Lighting Services
                                    </h6>
                                    <p className="fs-10">30 Min</p>
                                  </div>
                                  <h6 className="fs-12 fw-medium">$457</h6>
                                </div>
                                <div className="mb-2 d-flex align-items-center justify-content-between">
                                  <div>
                                    <h6 className="fw-medium">
                                      Outlets &amp; Wiring
                                    </h6>
                                    <p className="fs-10">30 Min</p>
                                  </div>
                                  <h6 className="fs-12 fw-medium">$200</h6>
                                </div>
                                <div className="mb-0 d-flex align-items-center justify-content-between">
                                  <div>
                                    <h6 className="fw-medium">
                                      Switches Changes
                                    </h6>
                                    <p className="fs-10">30 Min</p>
                                  </div>
                                  <h6 className="fs-12 fw-medium">$100</h6>
                                </div>
                              </div>
                              <div>
                                <div className="total-wrap">
                                  <div className="mb-2 d-flex align-items-center justify-content-between">
                                    <h6 className="fw-medium">Sub Total</h6>
                                    <p className="text-gray-9">$757</p>
                                  </div>
                                  <div className="mb-2 d-flex align-items-center justify-content-between">
                                    <h6 className="fw-medium">
                                      Tax{" "}
                                      <span className="text-default fw-normal">
                                        (GST 5%)
                                      </span>
                                    </h6>
                                    <p className="text-gray-9">$60</p>
                                  </div>
                                  <div className="mb-2 d-flex align-items-center justify-content-between">
                                    <h6 className="fw-medium">
                                      Discount{" "}
                                      <span className="text-default fw-normal">
                                        15%
                                      </span>
                                    </h6>
                                    <p className="text-gray-9">$757</p>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h6 className="fs-14">Total</h6>
                                    <h6 className="fs-14">$757</h6>
                                  </div>
                                </div>
                                <Link
                                  to="#"
                                  id="pay-btn"
                                  onClick={handleNext}
                                  className={`btn btn-light w-100 next_btn ${pay?'active':''}`}
                                >
                                  Pay $757
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
  )
}

export default BookPayment