const functions = require('firebase-functions');
const stripe = require('stripe')(functions.config().stripe.public_key);

exports.processPayment = functions.https.onRequest(async (req, res) => {
  const { paymentIntent, amount } = req.body;

  const payment = await stripe.paymentIntents.capture(paymentIntent.id, {
    amount_to_capture: amount,
  });

  res.send({ payment: payment });
});
