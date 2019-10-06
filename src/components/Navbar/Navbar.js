// React
import React from "react"
import { Link } from "react-router-dom"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

// Components
import Badge from "../Badge"

// Styles
import "../../style/components/Navbar.scss"

const Navbar = ({ badgeData }) => {
  return (
    <div className="ecommerce__navbar">
      <div className="ecommerce__navbar-brand">
        <Link to="/" className="ecommerce__navbar-link">
          E-Commerce
        </Link>
      </div>
      <div className="ecommerce__navbar-cart-area">
        {badgeData !== 0 && (
          <div className="ecommerce__navbar-badge">
            <Badge
              color="primary"
              label={badgeData}
              labelFontSize="16"
              labelPaddingX="4"
              labelPaddingY="8"
            />
          </div>
        )}
        <div className="ecommerce__navbar-cart-button">
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
    </div>
  )
}

export default Navbar
