import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <BreadCrumb title='Frequently Asked Questions' item1='Home' item2='Frequently Asked Questions'/>
      <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="container">
        <div className="row faq-content justify-content-center">
          {/* Faq List */}
          <div className="col-md-10 mx-auto faq">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    What is an on-demand service marketplace?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    <p>
                      An on-demand service marketplace connects customers with
                      service providers for a wide range of needs, all through a
                      single online platform.Customers can browse, book, and pay
                      for services while service providers can list their
                      services, manage bookings, and receive payments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapse"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    How do I sign up as a service provider?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <p>
                      To become a service provider, visit our sign up page and
                      complete the registration form. You’ll need to provide
                      details about the services you offer, your qualifications,
                      and your availability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    How can I book a service?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <p>
                      To become a service provider, visit our sign up page and
                      complete the registration form. You’ll need to provide
                      details about the services you offer, your qualifications,
                      and your availability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse4"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    How do I know if a service provider is reliable?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse4"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <p>
                      Booking a service is straightforward. Start by browsing
                      the available service categories, then choose the service
                      you need, view provider profiles and ratings, and select a
                      provider that fits your needs and choose a suitable time
                      slot to complete your booking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse5"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    How do I change my account settings?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse5"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <p>
                      We prioritize quality and reliability by implementing a
                      robust review and rating system. Customers can leave
                      feedback and rate their experience after each service,
                      which helps to make an informed decision.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse6"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    What should I do if I forget my password?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse6"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <p>
                      To change your account settings, log in to your account
                      and navigate to the Account Settings. Here, you can update
                      personal information, change your password, adjust
                      notification preferences, and manage other account
                      details.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse7"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    How do I manage my bookings?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse7"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <p>
                      If you forget your password, go to the Forgot Password
                      section on the login page. Enter your email address, and
                      you will receive a link to reset your password. Follow the
                      instructions in the email to create a new password and
                      regain access to your account.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapse8"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    What should I do if I have a question for the service
                    provider?
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapse8"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <p>
                      You can manage your bookings through your account
                      dashboard. Here, you can view upcoming appointments, make
                      changes to your bookings, or cancel if necessary. For any
                      adjustments or cancellations, follow the instructions
                      provided in your booking history or contact our support
                      team{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Faq List */}
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="text-center">
              <h5 className="mb-2">Still have a questions?</h5>
              <p className="fs-14">
                If you cannot find answer to your question in our FAQ, you can
                always contact us. We wil answer to you shortly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </>
  );
};

export default Faq;
