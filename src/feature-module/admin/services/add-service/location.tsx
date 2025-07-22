import React from 'react';

type props = {
  prevTab: CallableFunction;
  nextTab: CallableFunction;
};
const Location: React.FC<props> = ({ prevTab, nextTab }) => {
  return (
    <>
      <div className="addition-service card-section space-service">
        <div className="row">
          <div className="col-md-12">
            <div className="heading-service">
              <h4>Location</h4>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Address"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Country"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your City"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your State"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Pincode</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Pincode"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Google Maps Place ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Maps Place ID"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Latitude</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Latitude Number"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Longitude</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Longitude Number"
                defaultValue=""
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="map-grid">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                  aria-hidden="false"
                  tabIndex={0}
                  className="contact-map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="bottom-btn">
            <div className="field-btns">
           
              <button className="btn btn-prev prev_btn" type="button" 
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
              onClick={prevTab}>
                <i className="fas fa-arrow-left" /> Prev
              </button>
              <button
                className="btn btn-primary next_btn"
                type="button"
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
                onClick={nextTab}
              >
                Next <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
