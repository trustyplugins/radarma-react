import React from 'react'
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath'

const WorkSection = () => {
  return (
    <>
  {/* Work Section*/}
  <section className="section pt-0">
    <div className="container">
      <div className="work-section bg-black m-0">
        <div className="row align-items-center bg-01">
          <div className="col-md-12 wow fadeInUp" data-wow-delay="0.2s">
            <div className="section-header text-center">
              <h2 className="text-white">
                How Truelysell{" "}
                <span className="text-linear-primary">Works</span>
              </h2>
              <p className="text-light">
                Each listing is designed to be clear and concise, providing
                customers
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-0 gy-4">
          <div className="col-lg-4 d-flex">
            <div className="work-item text-center flex-fill">
              <div className="mb-3">
                <ImageWithBasePath src="assets/img/icons/work-01.svg" alt="img" />
              </div>
              <h6 className="text-white mb-2">1. Post a Service</h6>
              <p>
                After you post a job, our matching system identifies and alerts
                relevant Provider, who can then express interest in your job.
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="work-item text-center flex-fill">
              <div className="mb-3">
                <ImageWithBasePath src="assets/img/icons/work-01.svg" alt="img" />
              </div>
              <h6 className="text-white mb-2">
                2. Getting Booked &amp; Job done
              </h6>
              <p>
                After you post a job, our matching system identifies and alerts
                relevant Provider, who can then express interest in your job.
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-flex">
            <div className="work-item work-03 text-center flex-fill">
              <div className="mb-3">
                <ImageWithBasePath src="assets/img/icons/work-03.svg" alt="img" />
              </div>
              <h6 className="text-white mb-2">
                3. Get Reviewd &amp; Get Leads
              </h6>
              <p>
                After you post a job, our matching system identifies and alerts
                relevant Provider, who can then express interest in your job.
              </p>
            </div>
          </div>
        </div>
        <div className="work-bg1">
          <ImageWithBasePath
            src="assets/img/bg/work-bg-01.svg"
            className="img-fluid"
            alt="img"
          />
        </div>
        <div className="work-bg2">
          <ImageWithBasePath
            src="assets/img/bg/work-bg-02.svg"
            className="img-fluid"
            alt="img"
          />
        </div>
      </div>
    </div>
  </section>
  {/* /Work Section */}
</>

  )
}

export default WorkSection