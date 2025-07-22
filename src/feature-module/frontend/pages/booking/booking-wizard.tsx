import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'
import { all_routes } from '../../../../core/data/routes/all_routes'
import BookConfirmation from './wizard-content/book-confirmation'
import BookPayment from './wizard-content/book-payment'
import BookCart from './wizard-content/book-cart'
import BookInfo from './wizard-content/book-info'
import BookDateTime from './wizard-content/book-dateTime'
import BookServices from './wizard-content/book-services'
import BookStaff from './wizard-content/book-staff'
import BookLocation from './wizard-content/book-location'

const BookingWizard = () => {
    const routes = all_routes
    const [currentStep, setCurrentStep] = useState(1);
    const handleNext = () => {
      setCurrentStep(currentStep + 1);
      window.scrollTo({
          top: 0,
          behavior: "smooth" // smooth scrolling
      });
    };
  
    const handlePrev = () => {
      setCurrentStep(currentStep - 1);
    };
  return (
    <div className="page-wrapper">
  <div className="content">
    <div className="container">
      {/* Booking */}
      <div className="row">
        <div className="col-xxl-10 col-xl-11 mx-auto">
          <div className="card border-0 mb-0">
            <div className="card-body p-3 fieldset-wizard">
              <div className="row">
                {/* Booking Sidebar */}
                <div className="col-lg-3 theiaStickySidebar">
                  <div className="card bg-dark booking-sidebar mb-4 mb-lg-0">
                    <div className="card-body">
                      <h6 className="text-white fs-14 mb-2">Service Details</h6>
                      <div className="service-info d-flex align-items-center">
                        <span className="avatar avatar-md me-2 flex-shrink-0">
                          <ImageWithBasePath
                            src="assets/img/services/service-02.jpg"
                            alt="img"
                          />
                        </span>
                        <div>
                          <p className="fs-12 text-white fw-medium mb-1">
                            Spark Services
                          </p>
                          <span className="fs-10">
                            <i className="ti ti-star-filled text-warning me-1" />
                            4.9 (255 reviews)
                          </span>
                        </div>
                      </div>
                      <div className="booking-wizard">
                        <h6 className="text-white fs-14 mb-3">Bookings</h6>
                        <ul className="wizard-progress" id="bokingwizard">
                          <li className={`${currentStep === 1 ? 'active' : currentStep > 1 ? 'activated' : ''} pb-3`}>
                            <span>1. Location</span>
                          </li>
                          <li className={`${currentStep === 2 ? 'active' : currentStep > 2 ? 'activated' : ''} pb-3`}>
                            <span>2. Staffs</span>
                          </li>
                          <li className={`${currentStep === 3 ? 'active' : currentStep > 3 ? 'activated' : ''} pb-3`}>
                            <span>3. Additional Services</span>
                          </li>
                          <li className={`${currentStep === 4 ? 'active' : currentStep > 4 ? 'activated' : ''} pb-3`}>
                            <span>4. Date &amp; Time</span>
                          </li>
                          <li className={`${currentStep === 5 ? 'active' : currentStep > 5 ? 'activated' : ''} pb-3`}>
                            <span>5. Personal Information</span>
                          </li>
                          <li className={`${currentStep === 6 ? 'active' : currentStep > 6 ? 'activated' : ''} pb-3`}>
                            <span>6. Cart</span>
                          </li>
                          <li className={`${currentStep === 7 ? 'active' : currentStep > 7 ? 'activated' : ''} pb-3`}>
                            <span>7. Payment</span>
                          </li>
                          <li className={`${currentStep === 8 ? 'active' : currentStep > 8 ? 'activated' : ''}`}>
                            <span>8. Confirmation</span>
                          </li>
                        </ul>
                      </div>
                      <div className="status-report">
                        <h6 className="text-white fs-14 mb-2 pb-2">Bookings</h6>
                        <p className="fs-10">0% complete</p>
                      </div>
                      <div className="text-center">
                        <p className="fs-10 text-white">
                          Already have an account?{" "}
                          <Link to={routes.login} className="link-primary">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Booking Sidebar */}
                <div className="col-lg-9">
                  {/* Location */}
                  {currentStep === 1 && (
                    <BookLocation handleNext={handleNext}/>
                  )}
                  
                  {/* /Location */}
                  {/* Staffs */}
                  {currentStep === 2 && (
                    <BookStaff handleNext={handleNext} handlePrev={handlePrev} />
                  )}
                  
                  {/* /Staffs */}
                  {/* Additional Service */}
                  {currentStep === 3 && (
                    <BookServices handleNext={handleNext} handlePrev={handlePrev}/>
                  )}
                  
                  {/* /Additional Service */}
                  {/* Date & Time */}
                  {currentStep === 4 && (
                    <BookDateTime handleNext={handleNext} handlePrev={handlePrev}/>
                  )}
                  
                  {/* /Date & Time */}
                  {/* Personal Information */}
                  {currentStep === 5 && (
                    <BookInfo handleNext={handleNext} handlePrev={handlePrev}/>
                  )}
                  
                  {/* /Personal Information */}
                  {/* Cart */}
                  {currentStep === 6 && (
                    <BookCart handleNext={handleNext} handlePrev={handlePrev}/>
                  )}
                  
                  {/* /Cart */}
                  {/* Payment Method */}
                  {currentStep === 7 && (
                    <BookPayment handleNext={handleNext} handlePrev={handlePrev}/>
                  )}
                  
                  {/* /Payment Method */}
                  {/* Confirmation */}
                  {currentStep === 8 && (
                    <BookConfirmation setCurrentStep={setCurrentStep}/>
                  )}
                  
                  {/* /Confirmation */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Booking */}
    </div>
  </div>
</div>

  )
}

export default BookingWizard