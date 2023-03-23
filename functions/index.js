const functions = require('firebase-functions');
const express = require('express');
const stripe = require('stripe')(functions.config().stripe.secret_key);
const cors = require('cors')({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: true,
  optionsSuccessStatus: 204
});

const app = express();

// Set up your Express routes here

app.post('/createCheckoutSession', cors, async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: req.body.priceId,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });
  res.send({ sessionId: session.id });
});

exports.app = functions.https.onRequest(app);
