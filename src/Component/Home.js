import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext } from '../Context/Productcontext'
import { FormatNumber } from './FormatNUmber'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { Bannercontext } from '../Context/Bannercontext';

const Home = () => {
  const { isLoading, featuredproducts } = useContext(AppContext);
  const {loding, banners} = useContext(Bannercontext);
  console.log(loding);
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {
            loding?<div>...Loading</div>:banners.map((currElem, i) => {
              return <>
              <div className="carousel-item active" key={i}>
                <img src={currElem} className="d-block w-100" alt="..." />
              </div>
              </>
              
            })
          }

          {/* <div className="carousel-item">
            <img src="./Image/chikan banner.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Image/dressnality_banner3.png" className="d-block w-100" alt="..." />
          </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section id="category" className='container '>
        <div className='row scroll'>
          <div className='col container'>
            <Link to="/Kurti"><img src="./Image/CATEGORY1.png" className='img-fluid' alt="top" /></Link>
          </div>
          <div className='col'>
            <Link to="/Tshirt"><img src="./Image/CATEGORY2.png" className='img-fluid' alt="kurti" /></Link>
          </div>
          <div className='col'>
            <Link to="/Tops"><img src="./Image/CATEGORY3.png" className='img-fluid' alt="dress" /></Link>
          </div>
          <div className='col'>
            <Link to="/Dress"><img src="./Image/CATEGORY4.png" className='img-fluid' alt="tshirt" /></Link>
          </div>
        </div>

      </section>
      <div id="section">
        <img src='./Image/banner4.jpg' style={{ width: "100%" }} className="img-fluid"></img>
      </div>
      {isLoading ? <div>..........Loading</div> : <div style={{ backgroundColor: "#d5d4d4" }} className="my-3">
        <div className='container d-flex scroll' style={{ alignItems: "center" }}>
          {featuredproducts.map((animal, i) => (<>
            <NavLink to={`/SingleProduct/${animal[1].title}`} key={i} style={{ width: "50%" }} className="mx-3">
              <div className="card shadow mb-3 mx-3" style={{ width: "100%" }}>
                <div className="card-header bg-transparent border-dark text-center"><img className=" img-fluid " src={animal[1].imageUrl[0]} alt="product" style={{ width: "100%" }} /></div>
                <div className="card-body text-success">
                  <h5 className="card-title">{animal[1].title}</h5>
                  <h6 className="card-title card-text">{<FormatNumber price={animal[1].price} />}</h6>
                  <p className="card-text">Item Remaining{animal[1].quantity}</p>
                </div>
                <div className="card-footer card-text bg-transparent border-success">Customisable</div>
              </div>
            </NavLink>
          </>))}
        </div>

      </div>}
      <div id="banner2">
        <img src="./Image/banner2.png" alt="" style={{ width: "100%" }} className="img-fluid" />
      </div>
      <div className='container text-center my-2'>
        <h2 style={{ fontFamily: "'Cinzel', 'serif'" }}>HOW TO CRAFT YOUR DRESS</h2>
      </div>
      <hr />
      <div className='container text-center'>
        <div className='row d-flex '>
          <div className='col my-2 col-md-4 col-6'>
            <div className="card card-style">
              <img src="./Image/fabric.png" className="card-img-top container img-fluid" style={{ width: "69%" }} alt="..." />
              <div className="card-body">
                <p className="card-text" >Choose from over 20 different <br /> Fabrics and color. You can choose <br /> different fabric for all design</p>
              </div>
            </div>
          </div>
          <div className='col my-2 col-md-4 col-6'>
            <div className="card card-style">
              <img src="./Image/dress.png" className="card-img-top container img-fluid" style={{ width: "50%" }} alt="..." />
              <div className="card-body">
                <p className="card-text">Choose your dress style and length <br /> then personalise them <br /> such as collar neckline sleeves etc.</p>
              </div>
            </div>
          </div>
          <div className='col my-2 col-md-4 col-6'>
            <div className="card card-style">
              <img src="./Image/measuring.jpg" className="card-img-top container img-fluid" style={{ width: "60%" }} alt="..." />
              <div className="card-body">
                <p>Taking measurement is easy <br />give us your measurement and <br /> you will have dress that really fits you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="button">
        <NavLink to="/Products"><button className="btn2">Craft Now</button></NavLink>
        <NavLink to="/Blog3"><button className="btn2">Read More</button></NavLink>
      </div>
    </div>
  )
}

export default Home
