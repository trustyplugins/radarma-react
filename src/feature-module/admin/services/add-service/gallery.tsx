import React, { useState } from 'react';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import { Link } from 'react-router-dom';

import * as Icon from 'react-feather';

type props = {
  prevTab: CallableFunction;
  nextTab: CallableFunction;
};
const Gallery: React.FC<props> = ({ prevTab, nextTab }) => {
  const [images, setImages] = useState([
    'assets/img/services/service-01.jpg',
    'assets/img/services/service-02.jpg',
    'assets/img/services/service-03.jpg',
    'assets/img/services/service-04.jpg',
  ]);
  const deleteImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };
  return (
    <>
      <div className="addition-service card-section">
        <div className="heading-service">
          <h4>Gallery</h4>
        </div>
        <div className="form-uploads mb-4">
          <div className="form-uploads-path">
            <img src="assets/img/icons/upload.svg" alt="img" />
            <div className="file-browse">
              <h6>Drag &amp; drop image or </h6>
              <div className="file-browse-path">
                <input type="file" />
                <Link to="#"> Browse</Link>
              </div>
            </div>
            <h5>Supported formates: JPEG, PNG</h5>
          </div>
        </div>
        <div className="file-preview">
          <label>Select Default Image</label>
          <ul className="gallery-selected-img">
            {images.map((image, index) => (
              <li key={index}>
                <div className="img-preview">
                  <ImageWithBasePath
                    src={image}
                    alt={`Service Image ${index + 1}`}
                  />
                  <Link
                    to="#"
                    className="remove-gallery"
                    onClick={() => deleteImage(index)}
                  >
                    <Icon.Trash2 style={{ width: '16px', height: '16px' }} />
                  </Link>
                </div>
                <label className="custom_check">
                  <input type="radio" name="gallery" defaultChecked />
                  <span className="checkmark" />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom-btn">
        <div className="field-btns">
          <button
            className="btn btn-prev prev_btn"
            type="button"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
            onClick={prevTab}
          >
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
    </>
  );
};

export default Gallery;
