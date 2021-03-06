import React from 'react'
import './Order.css'

import CurrencyFormat from 'react-currency-format'
import moment from 'moment'

import CheckoutProduct from './../../Checkout/components/CheckoutProduct/CheckoutProduct'

function Order({ order }) {
  return (
    <div className="order">
      <h1>Order</h1>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>

      {
        order.data.basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))
      }

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  )
}

export default Order
