import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

import { useStateValue } from './../StateProvider'


function Header() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__img"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input
          className="header__search_input"
          type="text"
        />
        <SearchIcon className="header__search_icon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__option_line_one">Hello Champ</span>
          <span className="header__option_line_two">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option_line_one">Returns</span>
          <span className="header__option_line_two">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option_line_one">Your</span>
          <span className="header__option_line_two">Prime</span>
        </div>
        <Link to="checkout">
          <div className="header__option_basket">
            <ShoppingBasketIcon />
            <span className="header__option_line_two header__basket_count">
              {basket?.length}
          </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
