import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCities = () => {
  return (
    <>
  {/* Links Section */}
  <section className="section info-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="accordion accordion-links">
            <div
              className="accordion-item wow fadeInUp bg-transparent"
              data-wow-delay="0.2s"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-transparent px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#professional"
                  aria-expanded="false"
                >
                  Our Professions Near You
                </button>
              </h2>
              <div
                id="professional"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body border-0 px-0">
                  <div className="row row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">Appliance Repair</Link>
                        <Link to="#">Flooring</Link>
                        <Link to="#">Garage Doors</Link>
                        <Link to="#">Fencing</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">Carpet Cleaning</Link>
                        <Link to="#">Driveways</Link>
                        <Link to="#">Gutter Cleaning</Link>
                        <Link to="#">Land Surveying</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">Contractors</Link>
                        <Link to="#">Exterior Painting</Link>
                        <Link to="#">Gutter Repair</Link>
                        <Link to="#">Landscaping</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">Drywall </Link>
                        <Link to="#">Plumbing</Link>
                        <Link to="#">Home Builders</Link>
                        <Link to="#">Lawn &amp; Yard Work</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">
                          Electrical &amp; Services
                        </Link>
                        <Link to="#">Remodeling</Link>
                        <Link to="#">Home Builders</Link>
                        <Link to="#">Sprinkler Systems</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">House Cleaning</Link>
                        <Link to="#">Interior Painting</Link>
                        <Link to="#">Roofing</Link>
                        <Link to="#">More Services</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion-item mb-0 wow fadeInUp bg-transparent"
              data-wow-delay="0.2s"
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-transparent px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#city"
                  aria-expanded="false"
                >
                  Popular Cities
                </button>
              </h2>
              <div id="city" className="accordion-collapse collapse show">
                <div className="accordion-body border-0 px-0">
                  <div className="row row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">Detroit</Link>
                        <Link to="#">Greensboro</Link>
                        <Link to="#">Kansas City</Link>
                        <Link to="#">Memphis</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">El Paso</Link>
                        <Link to="#">Harrisburg</Link>
                        <Link to="#">Las Vegas</Link>
                        <Link to="#">Miami</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">Fort Lauderdale</Link>
                        <Link to="#">Hartford</Link>
                        <Link to="#">Long Beach</Link>
                        <Link to="#">Milwaukee</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">Fort Worth </Link>
                        <Link to="#">Houston</Link>
                        <Link to="#">Los Angeles</Link>
                        <Link to="#">Minneapolis</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">Fresno</Link>
                        <Link to="#">Indianapolis</Link>
                        <Link to="#">Louisville</Link>
                        <Link to="#">Modesto</Link>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-links">
                        <Link to="#">Grand Rapids</Link>
                        <Link to="#">Jacksonville</Link>
                        <Link to="#">Madison</Link>
                        <Link to="#">Nashville</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Links Section */}
</>
  )
}

export default ServiceCities