// React
import React from "react"
import { Link } from "react-router-dom"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

// Styles
import "../../style/components/Navbar.scss"

const Navbar = () => {
  return (
    <div className="ecommerce__navbar">
      <div className="ecommerce__navbar-brand">
        <Link to="/" className="ecommerce__navbar-link">
          E-Commerce
        </Link>
      </div>
      <div className="ecommerce__navbar-cart">
        <button type="button">
          <Link to="/cart" className="ecommerce__navbar-link">
            <FontAwesomeIcon
              className="ecommerce__navbar-link-button"
              icon={faShoppingCart}
              size="lg"
            />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar
