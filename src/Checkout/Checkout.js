import React from 'react'
import './Checkout.css'

import Subtotal from './components/Subtotal/Subtotal'
import CheckoutProduct from './components/CheckoutProduct/CheckoutProduct'

import { useStateValue } from './../StateProvider'


function Checkout() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="" />
        
        <div>
          <h2 className="checkout__title" >
            Your Shopping Basket
          </h2>
          {basket?.map((item) => (
            <CheckoutProduct 
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              key={item.id}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  )
}

export default Checkout
