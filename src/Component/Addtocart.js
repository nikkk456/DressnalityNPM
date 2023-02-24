import React, { useContext } from 'react'
import { CardContext } from '../Context/Card_context';
import { FormatNumber } from './FormatNUmber';
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Addtocart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useContext(CardContext);
  const { removeItem } = useContext(CardContext);
  const { setIncrease, setDecrease } = useContext(CardContext);
  console.log(cart);



  if (cart.length === 0) {
    return (
      <>
        <div className='container text-center my-4'>
          <p><h3>No product in your Cart! Go get some for yourself asap</h3> <br /> <b>Offer Ending soon</b></p>
          <NavLink to="/Products"><button className="btn2">Continue Shopping</button></NavLink>
        </div>
      </>
    )
  }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <hr />
          <div className='col-md-3 text-center'>
            <p><b>ITEM</b></p>
          </div>
          <div className='col-md-2 text-center'>
            <p><b>PRICE</b></p>
          </div>
          <div className='col-md-2 text-center'>
            <p><b>QUANTITY</b></p>
          </div>
          <div className='col-md-2 text-center'>
            <p><b>SUBTOTAL</b></p>
          </div>
          <div className='col-md-1 text-center'>
            <p><b>REMOVE</b></p>
          </div>
          <hr />
          <div className=''>
            {cart.map((currElem, i) => {
              return <>

                <div className='row' key={i}>
                    <div className='col-md-3 text-center d-flex'>
                      <div className='col-md-5' style={{ width: "30%", marginRight: "3%" }}><img src={currElem.image} style={{ width: "90%", borderRadius: "30px", border: "2px solid black" }}></img></div>
                      <div className='col-md-7 d-flex' style={{ flexDirection: "column", justifyContent: "center" }}>
                        <p style={{ marginBottom: "0%" }}>{currElem.title}</p>
                        <p style={{ marginBottom: "0%" }}>Size: {currElem.size}</p>
                      </div>
                    </div>
                  <div className='col-md-2 text-center d-flex' style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <p><FormatNumber price={currElem.price} /></p>
                  </div>

                  <div className="col-md-2 text-center d-flex" style={{ justifyContent: "center", alignItems: "center" }}>
                    <span className='mx-2' onClick={() => setDecrease(currElem.id)}>
                      <FaMinus />
                    </span>
                    {currElem.amount}
                    <span className='mx-2' onClick={() => setIncrease(currElem.id)}>
                      <FaPlus />
                    </span>
                  </div>

                  <div className='col-md-2 text-center d-flex' style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <p><FormatNumber price={currElem.price * currElem.amount}></FormatNumber></p>
                  </div>
                  <div className='col-md-2 text-center d-flex' style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start", marginLeft: "2%" }}>
                    <FaTrash style={{ color: "red" }} onClick={() => removeItem(currElem.id)} />
                  </div>
                  <hr className='my-3' />
                </div>

              </>
            })}
          </div>
        </div>
        <div className='d-flex' style={{ justifyContent: "space-between" }}>
          <NavLink to="/Products"><button className="btn2">Continue Shopping</button></NavLink>
          <button className="btn2" style={{ backgroundColor: "red" }} onClick={clearCart}>Clear Cart</button>
        </div>

        {/* order total amount  */}
        <div className='row'>
          <div className='col-9'>

          </div>
          <div className='col-3 my-3' style={{ background: "#d9d9d9", borderRadius: "18px" }}>
            <div className='row'>
              <div className='col-md-6' style={{marginTop:"2%"}}>
                <p  style={{marginBottom:"0%"}}><b>SUBTOTAL</b>: </p>
              </div>
              <div className='col-md-6'style={{marginTop:"2%"}}>
                <p style={{marginBottom:"0%"}}><FormatNumber price={total_price} /></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6' style={{marginTop:"2%"}}>
                <p style={{marginBottom:"0%"}}><b>SHIPPING CAHRGES</b>: </p>
              </div>
              <div className='col-md-6' style={{marginTop:"2%"}}>
                <p style={{marginBottom:"0%"}}><FormatNumber price={shipping_fee} /></p>
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='col-md-6' style={{marginTop:"2%"}}>
                <p><b>ORDER TOTAL</b>: </p>
              </div>
              <div className='col-md-6' style={{marginTop:"2%"}}>
                <p><FormatNumber price={shipping_fee + total_price} /></p>
              </div>
            </div>
            <div className='row'>
            <NavLink to="/BuyNow"><button className="btn2">Buy Now</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addtocart
