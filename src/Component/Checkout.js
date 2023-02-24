
// pk_test_51MeMKbSFgSxoeVTn72bQmFr1bxMvRTkUdC7XcDOj3c9ISVArdgDRiWsKyV4hF2ZmNRkCxhHAmAxWkgOk0rTqpslG00zF7bVfpm
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      console.log(paymentMethod);
      // Send the payment details to the server using a fetch request
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="card-element">Credit or debit card</label>
        <div id="card-element">
          <CardElement />
        </div>
        {error && <div className="card-error">{error}</div>}
        {success && <div className="card-success">Payment successful!</div>}
      </div>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default Checkout;
