import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
  return (
    <div className="header">
      <img
        className="header__img"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
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
        <div className="header__option_basket">
          <ShoppingBasketIcon />
          <span className="header__option_line_two header__basket_count">
            0
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
