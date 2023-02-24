import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useContext } from 'react';
import { AppContext } from '../Context/Productcontext';
import { FormatNumber } from './FormatNUmber';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Crousal from './Crousal';
import Feature from './Feature';
import { CardContext } from '../Context/Card_context';
const SingleProduct = () => {
  const { id } = useParams();
  const { productdetail, isSingleLoading, getSingleProduct } = useContext(AppContext);

  const { category, description, Id, color, imageUrl, title, price, quantity, oldprice, customisable } = productdetail;
  const [size, setSize] = useState("XL");
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < quantity ? setAmount(amount + 1) : setAmount(quantity);
  };
  const {addtocart} = useContext(CardContext);

  useEffect(() => {
    getSingleProduct(id);
  }, [])

  if (isSingleLoading) {
    <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
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
            <Feature title={title} category = {category} color={color}/>
            {customisable ? <div className="row">
              <div className="col-md-12 " style={{ fontFamily: "EB Garamond, serif" }}>
                <strong><h4>Can Be Customised According To You</h4></strong>
              </div>
            </div> : ""}
            
            <div className='row container col-md-10'>
              {description}
            </div>
            <div className="row" style={{ marginTop: "1%" }}>
              <div className="col-md-12 bottom-rule">
                <span className="text-secondary" style={{ textDecoration: "line-through" }}><h5 className="product-price" id="real">{<FormatNumber price={oldprice} />}</h5></span>
                <span><h5 className="product-price" id="offer"><span style={{ color: "blue" }}>Deal of the Day:</span> {<FormatNumber price={price} />}</h5></span>
              </div>
            </div>
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
            <div className="row my-2">
              <div className="col-md-10">
                <span className="text-secondary">SIZE: </span>
                <span><button className='size-button mx-1' onClick={() => { setSize("Xl") }}>Xl</button><button className='size-button mx-1' onClick={() => { setSize("L") }}>L</button><button className='size-button mx-1' onClick={() => { setSize("M") }}>M</button><button className='size-button mx-1' onClick={() => { setSize("S") }}>S</button></span>

              </div>
            </div>
            <div className="row " style={{ marginTop: "1%" }}>
              {quantity < 5 ? <div className="col-md-4 my-3">
                <span className="monospaced" style={{ color: "red" }}>Hurry Up Only {quantity} left!</span>
              </div> : ""}

              <div className="row">
                <div className="col-md-12 margin">
                  <NavLink to="/cart" onClick={()=>addtocart(Id, title, productdetail,amount,size,price, )}><button className="btn2">Add to cart</button></NavLink>
                  {customisable ? <a href="Customise.html"><button className="btn2">Customise Now</button></a> : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleProduct
