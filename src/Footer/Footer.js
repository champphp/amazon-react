import React from 'react'
import './Footer.css'

function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className="footer">
      <div onClick={backToTop} className="footer__back_to_top">
        <span>Back to top</span>
      </div>

      <div className="footer__menu">

        <div className="footer__menu_row">
          <div className="footer__menu_row_header">
          <span>Get to Know Us</span>
          </div>
          <ul>
            <li><a href="//#endregion" target="_black">Blog</a></li>
            <li><a href="//#endregion" target="_black">About Amazon</a></li>
            <li><a href="//#endregion" target="_black">Sustainability</a></li>
            <li><a href="//#endregion" target="_black">Investor Relations</a></li>
            <li><a href="//#endregion" target="_black">Amazon Devices</a></li>
            <li><a href="//#endregion" target="_black">Amazon Tours</a></li>
          </ul>
        </div>

        <div className="footer_menu_row_space"></div>

        <div className="footer__menu_row">
          <div className="footer__menu_row_header">
          <span>Make Money with Us</span>
          </div>
          <ul>
            <li><a href="//#endregion" target="_black">Sell products on Amazon</a></li>
            <li><a href="//#endregion" target="_black">Sell apps on Amazon</a></li>
            <li><a href="//#endregion" target="_black">Become an Affiliate</a></li>
            <li><a href="//#endregion" target="_black">Advertise Your Products</a></li>
            <li><a href="//#endregion" target="_black">Self-Publish with Us</a></li>
            <li><a href="//#endregion" target="_black">Host an Amazon Hub</a></li>
          </ul>
        </div>

        <div className="footer_menu_row_space"></div>

        <div className="footer__menu_row">
          <div className="footer__menu_row_header">
          <span>Amazon Payment Products</span>
          </div>
          <ul>
            <li><a href="//#endregion" target="_black">Amazon Business Card</a></li>
            <li><a href="//#endregion" target="_black">Shop with Points</a></li>
            <li><a href="//#endregion" target="_black">Reload Your Balance</a></li>
            <li><a href="//#endregion" target="_black">Amazon Currency Converter</a></li>
          </ul>
        </div>

        <div className="footer_menu_row_space"></div>

        <div className="footer__menu_row">
          <div className="footer__menu_row_header">
          <span>Let Us Help You</span>
          </div>
          <ul>
            <li><a href="//#endregion" target="_black">Amazon and COVID-19</a></li>
            <li><a href="//#endregion" target="_black">Your Account</a></li>
            <li><a href="//#endregion" target="_black">Your Orders</a></li>
            <li><a href="//#endregion" target="_black">Shipping Rates & Policies</a></li>
            <li><a href="//#endregion" target="_black">Returns & Replacements</a></li>
            <li><a href="//#endregion" target="_black">Manage Your Content and Devices</a></li>
            <li><a href="//#endregion" target="_black">Amazon Assistant</a></li>
            <li><a href="//#endregion" target="_black">Help</a></li>

          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
