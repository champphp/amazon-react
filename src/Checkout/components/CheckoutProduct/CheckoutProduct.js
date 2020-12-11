import React from 'react'
import './CheckoutProduct.css'

import { useStateValue } from './../../../StateProvider'


function CheckoutProduct({ id, image, title, price, rating }) {
  const [{}, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FORM_BASKET",
      id: id
    })
  }
  return (
    <div className="checkout__product">
      <img
        className="checkout__product__image"
        src={image}
        alt={id}
      />
      <div className="checkout__product__info">
        <p className="checkout__product__title">{title}</p>
        <p className="checkout__product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout__product__rating">
          {Array(rating).fill().map((_, i) => (<p key={i}>🌟</p>))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
