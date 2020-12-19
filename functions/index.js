const functions = require('firebase-functions');

const express = require('express')
const cors = require('cors')
const data = require('./APIKey')
const stripe = require('stripe')(data.keySecretStripe)

const app = express()

app.use(cors({origin: true}))
app.use(express.json())

app.get('/', (request, response) => {
  response.status(200).send('hello world')
})

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })

})

exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-4c677/us-central1/api