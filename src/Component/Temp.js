import React, { useContext, useState } from 'react'
import { CardContext } from '../Context/Card_context'
import { FormatNumber } from './FormatNUmber';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import "firebase/compat/functions";
import { CardElement } from '@stripe/react-stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const BuyNow = () => {
    const stripePromise = loadStripe('pk_test_51MeMKbSFgSxoeVTn72bQmFr1bxMvRTkUdC7XcDOj3c9ISVArdgDRiWsKyV4hF2ZmNRkCxhHAmAxWkgOk0rTqpslG00zF7bVfpm');
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState(null);


    const checkout = async () => {
        const stripe = await stripePromise;
        const elements = stripe.elements();

        // Delay calling the getElement() method to allow time for the CardElement component to load
        setTimeout(() => {
            const cardElement = elements.getElement(CardElement);
            if (!cardElement) {
                console.log('Card element not found');
                return;
            }

            // Use cardElement to validate card details and collect payment information
            stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            })
                .then((result) => {
                    // Handle any errors
                    if (result.error) {
                        setError(result.error.message);
                        return;
                    }

                    // Payment method created successfully, submit the payment
                    // to your server using the payment method id
                    return fetch('/api/payment', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            paymentMethodId: result.paymentMethod.id,
                        }),
                    });
                })
                .then((response) => {
                    // Handle any errors from the server
                    if (!response.ok) {
                        return response.json().then((data) => {
                            throw new Error(data.error.message);
                        });
                    }

                    // Payment successful, show a success message
                    alert('Payment successful!');
                })
                .catch((error) => {
                    setError(error.message);
                });
        }, 1000); // Wait for 1 second before calling the method
    };







    const { cart, total_price } = useContext(CardContext);
    const [redeem, setRedeem] = useState("");
    const [validate, setValidate] = useState(false);
    const RedeemCoupon = () => {
        if (redeem === "SANNIK") {
            setValidate(true);
        }
    }

    const [values, setValues] = useState({
        fname: "",
        lname: "",
        email: "",
        adress: "",
        adress2: "",
        country: "",
        state: "",
        zip: "",
        payment: "",
    })

    return (

        <div>
            <div className="py-5 text-center">
                <h1 className="text-primary"><img src="./Image/LOGO4.png" alt="" style={{ width: "25%" }} /></h1>
                <h2>Thanks for Shopping with Us</h2>
                <p className="lead">Please fill this detail completely, so that we can complete your order and start working on your dream dress</p>
            </div>

            <div className=" container row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {
                            cart.map((currElem, i) => {
                                return <>
                                    <li key={i} className="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 className="my-0">{currElem.title}</h6>
                                            <span>{currElem.size ? <small className="text-muted">Size: {currElem.size} </small> : <small className="text-muted">Customised </small>}</span>
                                            <span><small className='text-muted'>Quantity: {currElem.amount}</small></span>
                                        </div>
                                        <span className="text-muted"><FormatNumber price={currElem.price * currElem.amount} /></span>
                                    </li>
                                </>

                            })
                        }
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            {
                                validate ? <>
                                    <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                        <small>{redeem}</small>
                                    </div>
                                    <span className="text-success">-<FormatNumber price={300} /></span></> : <div>You entered Wrong Promocode</div>
                            }

                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (INR)</span>
                            {
                                validate ? <strong><FormatNumber price={total_price - 300} /></strong> : <strong><FormatNumber price={total_price} /></strong>
                            }

                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" value={redeem} placeholder="Promo code" onChange={(e) => {
                                setRedeem(e.target.value);
                            }} />
                            <button type="button" className="btn btn-secondary" onClick={RedeemCoupon}>Redeem</button>
                        </div>
                    </form>
                </div>

                <div className=" container col-md-6 col-lg-7">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" noValidate>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value={values.fname} required onChange={(e) => {
                                    setValues((prev) => ({ ...prev, fname: e.target.value }))
                                }} />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value={values.lname} required onChange={(e) => {
                                    setValues((prev) => ({ ...prev, lname: e.target.value }))
                                }} />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>



                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" value={values.email} className="form-control" id="email" placeholder="you@example.com" onChange={(e) => {
                                    setValues((prev) => ({ ...prev, email: e.target.value }))
                                }} />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" value={values.adress} className="form-control" id="address" placeholder="1234 Main St" required onChange={(e) => {
                                    setValues((prev) => ({ ...prev, adress: e.target.value }))
                                }} />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address2" className="form-label">Address 2 <span
                                    className="text-muted">(Optional)</span></label>
                                <input type="text" value={values.adress2} className="form-control" id="address2" placeholder="Apartment or suite" onChange={(e) => {
                                    setValues((prev) => ({ ...prev, adress2: e.target.value }))
                                }} />
                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className="form-select" id="country" required onChange={(e) => {
                                    setValues((prev) => ({ ...prev, country: e.target.value }))
                                }}>
                                    <option>India</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">State</label>
                                <select className="form-select" value={values.state} id="state" required onChange={(e) => {
                                    setValues((prev) => ({ ...prev, state: e.target.value }))
                                }}>
                                    <option value="">Choose...</option>
                                    <option>Haryana</option>
                                    <option>Uttrakhand</option>
                                    <option>Uttar Pradesh</option>
                                    <option>New Delhi</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>

                            <div className="col-md-3">
                                <label htmlFor="zip" className="form-label">Zip</label>
                                <input type="text" className="form-control" value={values.zip} id="zip" placeholder="" required onChange={(e) => {
                                    setValues((prev) => ({ ...prev, zip: e.target.value }))
                                }} />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>
                        <hr className="my-4" />

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="same-address" />
                            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing
                                address</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="save-info" />
                            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
                        </div>

                        <hr className="my-4" />

                        <h4 className="mb-3">Payment</h4>

                        <div className="my-3">
                            <div className="form-check">
                                <input id="credit" value="card" name="paymentMethod" type="radio"
                                    className="form-check-input" required onChange={(e) => {
                                        setValues((prev) => ({ ...prev, payment: e.target.value }))
                                    }} />
                                <label className="form-check-label" htmlFor="credit">Card</label>
                            </div>
                            <div className="form-check">
                                <input id="debit" value="UPI" name="paymentMethod" type="radio" className="form-check-input" required onChange={(e) => {
                                    setValues((prev) => ({ ...prev, payment: e.target.value }))
                                }} />
                                <label className="form-check-label" htmlFor="debit">UPI</label>
                            </div>
                            <div className="form-check">
                                <input id="Cash" value="COD" name="paymentMethod" type="radio" className="form-check-input" required onChange={(e) => {
                                    setValues((prev) => ({ ...prev, payment: e.target.value }))
                                }} />
                                <label className="form-check-label" htmlFor="paypal">Cash On Delivery</label>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <Elements stripe={stripePromise}>
                            <CardElement />
                            <button className="w-100 btn btn-primary btn-lg" type="button" onClick={checkout}>Continue to checkout</button>
                        </Elements>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BuyNow
