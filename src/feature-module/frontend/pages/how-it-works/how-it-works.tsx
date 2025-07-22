import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';

const Howitworks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <BreadCrumb title='How It Works' item1='Home' item2='How It Works'/>
      <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content">
      <div className="container">
        {/* How it works*/}
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8 ">
            <div className="work-wrap work-wrap-acc">
              <span>01</span>
              <h1 className="display-6">Create An Account</h1>
              <p>
                Create an account to become a service provider and start
                offering your services to a wide audience. By signing up, you’ll
                be able to showcase your expertise, manage appointments, and
                connect with potential clients.
              </p>
              <p>
                Simply provide your name, email address, and create a strong
                password to get started. Once registered, you’ll have access to
                tools for tracking your work, setting availability, and
                receiving payments.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-img d-none d-md-block">
              <ImageWithBasePath
                src="assets/img/bg/bg-09.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="work-wrap-img d-none d-md-block">
            <ImageWithBasePath
              src="assets/img/bg/bg-12.png"
              alt="img"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4  order-last order-md-first">
            <div className="work-img d-none d-md-block">
              <ImageWithBasePath
                src="assets/img/bg/bg-10.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="col-md-8 d-flex justify-content-center">
            <div className="work-wrap work-wrap-post">
              <span>02</span>
              <h1 className="display-6">Post An Ad</h1>
              <p>
                Promote your services and reach new clients by posting on our
                platform. Start by providing a clear and engaging title that
                describes your service. Include a detailed description outlining
                what you offer, your expertise, and any special skills or
                certifications. Choose the right category to make it easier for
                clients to find your service.
              </p>
              <p>
                Be sure to add your contact information so clients can easily
                get in touch with you. Posting your service is fast and
                straightforward, helping you expand your client base
                effortlessly!
              </p>
            </div>
          </div>
          <div className="work-wrap-img d-none d-md-block">
            <ImageWithBasePath
              src="assets/img/bg/bg-12.png"
              alt="img"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="work-wrap work-wrap-earning mb-0">
              <span>03</span>
              <h1 className="display-6">Start Earning</h1>
              <p>
                Take control of your financial future by starting to earn with
                our platform. Whether you&apos;re a seasoned professional or just
                getting started, we make it easy for you to connect with clients
                who need your skills.Manage your schedule with ease and accept
                jobs that fit your expertise and availability.
              </p>
              <p>
                Start earning today, expand your client base, and watch your
                income soar as you take advantage of new opportunities.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-img mb-0 d-none d-md-block">
              <ImageWithBasePath
                src="assets/img/bg/bg-11.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
        </div>
        {/* /How it works */}
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </>
  );
};

export default Howitworks;
