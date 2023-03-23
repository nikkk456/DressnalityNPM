const stripe = require('stripe')('sk_test_51MeMKbSFgSxoeVTn3PTh4nu8ludkKWcpqNrcGlAnKejyN0GGZ0pn4NsRLY0le8pVwvyiJ5fgyI8qkwNfrDsoV3W3009ARmNi35');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON data

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  // console.log(req.body);
  const { stripeProducts } = req.body;
  if (!stripeProducts) {
    return res.status(400).json({ error: 'Missing stripeProducts in request body' });
  }
  const lineItems = [];
  for (const productId of stripeProducts) {
    const product = await stripe.products.retrieve(productId);
    const price = product.prices.data[0].id; // Assuming there is only one price per product
    lineItems.push({
      price,
      quantity: product.metadata.quantity,
    });
  }
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/Success`,
    cancel_url: `${YOUR_DOMAIN}/Cancel`,
  });
  console.log(res);
  res.json({ id: session.id });
});

app.listen(4242, () => console.log('Running on port 4242'));
