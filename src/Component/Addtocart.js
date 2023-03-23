import React, { useContext } from 'react'
import { CardContext } from '../Context/Card_context';
import { FormatNumber } from './FormatNUmber';
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Addtocart = ({ stripePromise }) => {
  const { cart, clearCart, total_price, shipping_fee } = useContext(CardContext);
  const { removeItem } = useContext(CardContext);
  console.log(cart);
  const { setIncrease, setDecrease } = useContext(CardContext);

  const handleCheckout = async (cart) => {
    try {
      console.log("Hii i am in the functions");
      // Create Stripe products dynamically
      const stripeProducts = [];
      for (const item of cart) {
        // Create product
        const response = await fetch('https://api.stripe.com/v1/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer sk_test_51MeMKbSFgSxoeVTn3PTh4nu8ludkKWcpqNrcGlAnKejyN0GGZ0pn4NsRLY0le8pVwvyiJ5fgyI8qkwNfrDsoV3W3009ARmNi35`,
          },
          body: new URLSearchParams({
            name: item.title,
            description: 'Product Description',
            metadata: JSON.stringify({
              quantity: item.amount // Add quantity as metadata
            })           
          }),
        });

        const product = await response.json();
        const stripe = require('stripe')('sk_test_51MeMKbSFgSxoeVTn3PTh4nu8ludkKWcpqNrcGlAnKejyN0GGZ0pn4NsRLY0le8pVwvyiJ5fgyI8qkwNfrDsoV3W3009ARmNi35');
        // const quantity = parseInt(product.metadata.quantity);
        // Create price for product
        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: item.price * 100, // Price is in cents
          currency: 'inr',
          metadata: {
            quantity: item.amount // Add quantity as metadata
          }
        });

        // Push price ID to stripeProducts array
        stripeProducts.push(price.id);
      }
      const stripe = await stripePromise;
      console.log(stripeProducts);
      // Send price IDs to server-side code
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stripeProducts }),
      });

      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };





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
                      <p style={{ marginBottom: "0%" }}><b>{currElem.title}</b></p>
                      {currElem.size ? <small style={{ marginBottom: "0%" }}>Size: {currElem.size}</small> : ""}
                      {currElem.neckline ? <small style={{ marginBottom: "0%" }}>neckline: {currElem.neckline}</small> : ""}
                      {currElem.chest ? <small style={{ marginBottom: "0%" }}>chest: {currElem.chest}</small> : ""}
                      {currElem.arm ? <small style={{ marginBottom: "0%" }}>arm: {currElem.arm}</small> : ""}
                      {currElem.waist ? <small style={{ marginBottom: "0%" }}>arm: {currElem.waist}</small> : ""}
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
              <div className='col-md-6' style={{ marginTop: "2%" }}>
                <p style={{ marginBottom: "0%" }}><b>SUBTOTAL</b>: </p>
              </div>
              <div className='col-md-6' style={{ marginTop: "2%" }}>
                <p style={{ marginBottom: "0%" }}><FormatNumber price={total_price} /></p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6' style={{ marginTop: "2%" }}>
                <p style={{ marginBottom: "0%" }}><b>SHIPPING CAHRGES</b>: </p>
              </div>
              <div className='col-md-6' style={{ marginTop: "2%" }}>
                <p style={{ marginBottom: "0%" }}><FormatNumber price={shipping_fee} /></p>
              </div>
            </div>
            <hr />
            <div className='row'>
              <div className='col-md-6' style={{ marginTop: "2%" }}>
                <p><b>ORDER TOTAL</b>: </p>
              </div>
              <div className='col-md-6' style={{ marginTop: "2%" }}>
                <p><FormatNumber price={shipping_fee + total_price} /></p>
              </div>
            </div>
            <div className='row'>
              <button className="btn2" onClick={() => handleCheckout(cart)}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addtocart
