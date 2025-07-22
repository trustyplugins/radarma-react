import React from 'react'
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath';

const PagesAuthHeader = () => {
  return (

    <>
  {/* Header */}
  <div className="authentication-header">
    <div className="container">
      <div className="col-md-12">
        <div className="text-center">
          <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
        </div>
      </div>
    </div>
  </div>
  {/* /Header */}
</>

  );
}

export default PagesAuthHeader