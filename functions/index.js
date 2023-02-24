const functions = require('firebase-functions');

exports.createStripeChcekout = functions.https.onCall((data, context)=>{
    const stripe = require("stripe")(functions.config().stripe.public_key);
    const session = stripe.checkout.sessions.create({
      payment_method_type: ["cards", "UPI"],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      fail_url: "http://localhost:3000/fail",
      line_items:[{
        quantity:1,
        price_data: {
          currency: "INR",
          unit_amount: (100)* 100,
          product_data: {
            name: "New Products",
          },

        }
      }]
    });
    return {
      id: session.id
    }
});
