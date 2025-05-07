import React from 'react'

const Pro_banner = () => {
  return (
    <div className="row p-0 m-0 proBanner" id="proBanner">
        <div className="col-md-12 p-0 m-0">
          <div className="card-body card-body-padding px-3 d-flex align-items-center justify-content-between">
              <div className="ps-lg-3">
                <div className="d-flex align-items-center justify-content-between">
                    <p className="mb-0 fw-medium me-3 buy-now-text">
                      Free 24/7 customer support, updates, and more with this template!
                    </p>
                    <a href="https://www.bootstrapdash.com/product/star-admin-pro/" target="_blank" className="btn me-2 buy-now-btn border-0">
                      Buy Now
                    </a>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <a href="https://www.bootstrapdash.com/product/star-admin-pro/">
                  <i className="ti-home me-3 text-white"></i>
                </a>
                <button id="bannerClose" className="btn border-0 p-0">
                    <i className="ti-close text-white"></i>
                </button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Pro_banner
