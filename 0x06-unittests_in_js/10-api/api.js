const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
// new endpoint
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});
// new endpoint
app.get('/available_payments', (request, response) => {
  response.set("Content-Type", "application/json");
  const payMethods = {
payment_methods: {
        credit_cards: true,
        paypal: false
}
  }
  response.send(payMethods);
});

app.post('/login', (request, response) => {
  const userName = request.body.userName;
  if (userName) {
response.send(`Welcome ${userName}`);
  } else {
response.status(404).send();
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
