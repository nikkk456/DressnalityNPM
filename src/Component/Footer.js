import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <section id="last" style={{ backgroundColor: "rgb(70 114 163)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
        <div className="container footer-style">
          <div className="row" style={{ alignItems: "center", justifyContent: "center" }}>
            <div className="col-md-4 my-2">
              <div className="card border-light mb-2">
                <div className=" bg-transparent text-center">
                  <img className=" img-fluid " src="./Image/secure payment.webp" alt="" style={{ width: "20%" }} />
                </div>
                <div className="card-body text-dark">
                  <h6 className=" text-secondary text-center">100%secure payment</h6>
                  <p className="card-text text-center">All Debit Card And Credit Card Accepted</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-light mb-2">
                <div className=" bg-transparent text-center">
                  <img className=" img-fluid " src="./Image/delivery.jpg" alt="" style={{ width: "22%" }} />
                </div>
                <div className="card-body text-dark">
                  <h6 className=" text-secondary text-center">Hassle Free Delivery</h6>
                  <p className="card-text text-center">Blazing Fast Delivery</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-2">
              <div className="card border-light mb-2">
                <div className=" bg-transparent text-center">
                  <img className=" img-fluid " src="./Image/customer care.jpg" alt="" style={{ width: "30%" }} />
                </div>
                <div className="card-body text-dark">
                  <h6 className=" text-secondary text-center">Contact Us </h6>
                  <p className="card-text text-center">Request@Dressnality.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-4">
              <h5>Company</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">About Us</Link></li>
                <li className="nav-item mb-2"><Link to="/Contact" className="nav-link p-0 text-muted">Store Location</Link></li>
                <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-muted">Team</Link></li>
                <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
              </ul>
            </div>

            <div className="col-4">
              <h5>Help</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/Contact" className="nav-link p-0 text-muted">Contact Us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted" data-bs-toggle="modal"
                  data-bs-target="#termsModal">Terms and Condition</a></li>
              </ul>
            </div>


          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>&copy; 2023 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="https://www.twitter.com"><svg className="bi" width="24" height="24">
                <use xlinkHref="#twitter" />
              </svg></a></li>
              <li className="ms-3"><a className="link-dark" href="https://www.instagram.com"><svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram" />
              </svg></a></li>
              <li className="ms-3"><a className="link-dark" href="https://www.facebook.com/"><svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook" />
              </svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
