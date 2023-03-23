import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../Context/Productcontext';
import { FormatNumber } from './FormatNUmber';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Crousal from './Crousal';
import Feature from './Feature';
import { CardContext } from '../Context/Card_context';
import neckline1 from "../Image/Angrakha.jpg"
import neckline2 from "../Image/collar neck with cut-out.jpg"
import neckline3 from "../Image/collar with scoop neckline.jpg"
import neckline4 from "../Image/halterneck.jpg"
// import neckline5 from "../Image/square neck.jpg"
import neckline6 from "../Image/sweetheart neck.jpg"
import neckline7 from "../Image/V neck.jpg"

const Customise = () => {
  const [active, setActive] = useState({
    active1:false,
    active2:false,
    active3:false,
    active4:false,
    active5:false,
    active6:false,
    active7:false,
  }); 
  const { id } = useParams();
  const { productdetail, isSingleLoading, getSingleProduct } = useContext(AppContext);
  const { category, description, Id, color, imageUrl, title, price, quantity, oldprice, customisable } = productdetail;
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < quantity ? setAmount(amount + 1) : setAmount(quantity);
  };
  const { addtocart } = useContext(CardContext);

  useEffect(() => {
    getSingleProduct(id);
  }, [])
  const [values, setValues] = useState({
    chest: "",
    arm: "",
    waist: "",
    neckline:"",
  })
  const[size, setSize]= useState("");

  if (isSingleLoading) {
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  }


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <Crousal imageUrl={imageUrl} />
          </div>
          <div className="col-md-6 align-items-center justify-content-center">
            <Feature title={title} category={category} color={color} />
            <div className='row container col-md-10'>
              {description}
            </div>
            <div className="row" style={{ marginTop: "1%" }}>
              <div className="col-md-12 bottom-rule">
                <span className="text-secondary" style={{ textDecoration: "line-through" }}><h5 className="product-price" id="real">{<FormatNumber price={oldprice} />}</h5></span>
                <span><h5 className="product-price" id="offer"><span style={{ color: "blue" }}>Deal of the Day:</span> {<FormatNumber price={price} />}</h5></span>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12'>
                <label>Enter Your chest size(in Inches)</label>
                <input className="form-control" value={values.chest} onChange={(e) => {
                  setValues((prev) => ({ ...prev, chest: e.target.value }))
                }} type="text" placeholder="Chest-Size" aria-label="default input example"></input>
                <label>Enter Your waist size(in Inches)</label>
                <input className="form-control" value={values.waist} onChange={(e) => {
                  setValues((prev) => ({ ...prev, waist: e.target.value }))
                }} type="text" placeholder="Waist-Size" aria-label="default input example"></input>
                <label>Enter Your Arm Length(in Inches)</label>
                <input className="form-control" value={values.arm} onChange={(e) => {
                  setValues((prev) => ({ ...prev, arm: e.target.value }))
                }} type="text" placeholder="Arm-Lenght" aria-label="default input example"></input>
                <p>Still confuse about How to take measurement <Link to="/Blog3">READ THIS</Link></p>
              </div>
            </div>
            <div className='row'>
              <h5>Select Your Neckline</h5>
              <div className='col-md-12 d-flex' style={{justifyContent:"space-around", alignItems:"center"}}>
                  <div className='mx-2' style={{width:"11%"}}>
                    <img src={neckline1} id="Angrakha" style={{borderRadius:"25px", width:"100%", border: active.active1?"2px solid black":""}} onClick={(e)=>{
                      setActive((prev)=>({...prev, active1:!active.active1}));
                      setValues((prev) => ({ ...prev, neckline: e.target.id }))
                    }}></img>
                    <small>Angrakha</small>
                  </div>
                  <div className='mx-2' style={{width:"11%"}}>
                    <img src={neckline2} id="cut-out" onClick={(e)=>{
                      setActive((prev)=>({...prev, active2:!active.active2}))
                      setValues((prev) => ({ ...prev, neckline: e.target.id }))
                    }}style={{borderRadius:"25px", width:"100%", border: active.active2?"2px solid black":""}}></img>
                    <small>cut-out</small>
                  </div>
                  <div className='mx-2' style={{width:"11%"}}>
                    <img src={neckline3} id="scoop" style={{borderRadius:"25px", width:"100%", border: active.active3?"2px solid black":""}} onClick={(e)=>{
                      setActive((prev)=>({...prev, active3:!active.active3}))
                      setValues((prev) => ({ ...prev, neckline: e.target.id }))
                    }}></img>
                    <small>scoop</small>
                  </div>
                  <div className='mx-2' style={{width:"11%"}}>
                    <img src={neckline4} id="Halterneck" style={{borderRadius:"25px", width:"100%", border: active.active4?"2px solid black":""}} onClick={(e)=>{
                      setActive((prev)=>({...prev, active4:!active.active4}))
                      setValues((prev) => ({ ...prev, neckline: e.target.id }))
                    }}></img>
                    <small>Halterneck</small>
                  </div>
                  <div className='mx-2' style={{width:"11%"}}>
                    <img src={neckline6} id="sweetheart" style={{borderRadius:"25px", width:"100%", border: active.active5?"2px solid black":""}} onClick={(e)=>{
                     setActive((prev)=>({...prev, active5:!active.active5}))
                     setValues((prev) => ({ ...prev, neckline: e.target.id }))
                    }}></img>
                    <small>sweetheart</small>
                  </div>
                  <div className='mx-2' style={{width:"11%"}}>
                    <img src={neckline7} id="V neck" style={{borderRadius:"25px", width:"100%", border: active.active6?"2px solid black":""}} onClick={(e)=>{
                      setActive((prev)=>({...prev, active6:!active.active6}))
                      setValues((prev) => ({ ...prev, neckline: e.target.id }))
                    }}></img>
                    <small>V neck</small>
                  </div>
                

              </div>
            </div>

            {/* amount increse decrease ke liye hai */}
            <div className="row d-flex add-to-cart">
              <div className="col-md-5 product-qty">
                <span className="btn btn-default btn-lg btn-qty" id="minus" onClick={setDecrease}>
                  <FaMinus />
                </span>
                <input className="btn btn-default btn-lg btn-qty" value={amount} id="quantity" style={{ width: "20%" }} />
                <span className="btn btn-default btn-lg btn-qty" id="plus" onClick={setIncrease}>
                  <FaPlus />
                </span>
              </div>
            </div>

            <div className="row " style={{ marginTop: "1%" }}>
              <div className="row">
                <div className="col-md-12 margin">
                  <NavLink to="/Cart" onClick={() => {
                    addtocart(Id, title, productdetail,amount,size,price, values,)
                    console.log(values);
                    }}><button className="btn2">Add to cart</button></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Customise
