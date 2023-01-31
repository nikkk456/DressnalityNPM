import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AppContext, useProductContext } from '../Context/Productcontext'
import Featured from './Featured'

const Home = () => {
  const {isLoading, featuredproducts} = useContext(AppContext);
  console.log(featuredproducts);

  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./Image/banner1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Image/chikan banner.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./Image/dressnality_banner3.png" className="d-block w-100" alt="..." />
          </div>
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
            <Link to="/Top"><img src="./Image/CATEGORY1.png" className='img-fluid' alt="top" /></Link>
          </div>
          <div className='col'>
            <Link to="/Kurti"><img src="./Image/CATEGORY2.png" className='img-fluid' alt="kurti" /></Link>
          </div>
          <div className='col'>
            <Link to="/Dress"><img src="./Image/CATEGORY3.png" className='img-fluid' alt="dress" /></Link>
          </div>
          <div className='col'>
            <Link to="/Tshirt"><img src="./Image/CATEGORY4.png" className='img-fluid' alt="tshirt" /></Link>
          </div>
        </div>

      </section>
      <div id="section">
        <img src='./Image/banner4.jpg' style={{ width: "100%" }} className="img-fluid"></img>
      </div>
      {isLoading?<div>..........Loading</div>:<div className='d-flex'>
      {featuredproducts.map((animal, i) => (<>
        <div className="card shadow mb-3 mx-3" style={{width: "20%"}}>
                                <div className="card-header bg-transparent border-dark text-center"><img className=" img-fluid " src={animal[1].imageUrl[0]} alt="product" style={{width: "38%"}} /></div>
                                <div className="card-body text-success">
                                    <h5 className="card-title">{animal[1].title}</h5>
                                    <h6 className="card-title">{animal[1].price}</h6>
                                    <p className="card-text">Item Remaining{animal[1].quantity}</p>
                                </div>
                                <div className="card-footer bg-transparent border-success">Customisable</div>
                            </div>
                        </>))}
        </div>}
      <div id="banner2">
        <img src="./Image/banner2.png" alt="" style={{ width: "100%" }} className="img-fluid" />
      </div>
      <div className='container text-center my-2'>
        <h2 style={{fontFamily: "'Cinzel', 'serif'"}}>HOW TO CRAFT YOUR DRESS</h2>
      </div>
      <hr />
      <div className='container text-center'>
        <div className='row d-flex '>
          <div className='col my-2 col-md-4 col-6'>
          <div className="card card-style">
            <img src="./Image/fabric.png" className="card-img-top container img-fluid" style={{width: "69%"}}alt="..." />
            <div className="card-body">
              <p className="card-text" >Choose from over 20 different <br /> Fabrics and color. You can choose <br /> different fabric for all design</p>
            </div>
          </div>
          </div>
          <div className='col my-2 col-md-4 col-6'>
          <div className="card card-style">
            <img src="./Image/dress.png" className="card-img-top container img-fluid" style={{width: "50%"}} alt="..." />
            <div className="card-body">
              <p className="card-text">Choose your dress style and length <br/> then personalise them <br/> such as collar neckline sleeves etc.</p>
            </div>
          </div>
          </div>
          <div className='col my-2 col-md-4 col-6'>
          <div className="card card-style">
            <img src="./Image/measuring.jpg" className="card-img-top container img-fluid"  style={{width: "60%"}}alt="..."/>
            <div className="card-body">
            <p>Taking measurement is easy <br/>give us your measurement and <br/> you will have dress that really fits you</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div id="button">
        <NavLink to="/"><button className="btn2">Craft Now</button></NavLink>
        <NavLink to="/Blog3"><button className="btn2">Read More</button></NavLink>
      </div>
    </div>
  )
}

export default Home
