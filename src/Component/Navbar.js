import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top shadow text-dark" style={{ fontFamily: "Playfair Display, serif", backgroundColor: "rgb(236 236 236)" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{width: "10%"}}><img src="./Image/LOGO4.png" alt="logo" className='logo' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Clothing
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/Products">All</Link></li>
                  <li><Link className="dropdown-item" to="/Kurti">Kurti</Link></li>
                  <li><Link className="dropdown-item" to="#">Tops</Link></li>
                  <li><Link className="dropdown-item" to="#">Dress</Link></li>
                  <li><Link className="dropdown-item" to="#">Tshirts</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Dressnality Special</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Fabrics
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Cotton</Link></li>
                  <li><Link className="dropdown-item" to="#">Rayon</Link></li>
                  <li><Link className="dropdown-item" to="#">Hosery</Link></li>                 
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Track Your Order</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
