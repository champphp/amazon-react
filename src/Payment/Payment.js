import React, { forwardRef, useState, useEffect } from 'react'
import './Payment.css'
import { Link, useHistory } from 'react-router-dom'
import FlipMove from 'react-flip-move'
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'

import CheckoutProduct from './../Checkout/components/CheckoutProduct/CheckoutProduct'
import { useStateValue } from './../StateProvider'
import { getBasketTotal } from './../reducer'
import axios from './../axios';


function Payment() {
  const history = useHistory()

  const [{ basket, user }, dispatch] = useStateValue()

  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [processing, setProcessing] = useState("")
  const [succeeded, setSucceeded] = useState(false)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  }, [basket])

  console.log(`The Secret is >>> ${clientSecret}`)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      setProcessing(false)
      setError(null)
      setSucceeded(true)

      history.push('/orders')
    })
  }

  const handleChange = (e) => {

    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }

  const FunctionalArticle = forwardRef((item, ref) => (
    <div ref={ref}>
      <CheckoutProduct
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        rating={item.rating}
      />
    </div>
  ))

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React inc</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review item and dilivery</h3>
          </div>
          <div className="payment__item">
            <FlipMove>
              {basket?.map((item) => (
                <FunctionalArticle key={item.id} {...item} />
              ))}
            </FlipMove>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__price_container">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                </button>
                {error && <div>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
