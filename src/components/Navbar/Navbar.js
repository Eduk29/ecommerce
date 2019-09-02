// React
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

// Styles
import "../../style/components/Navbar.scss"

const Navbar = () => {
  return (
    <div className="ecommerce__navbar">
      <div className="ecommerce__navbar--brand">E-Commerce</div>
      <div className="ecommerce__navbar--cart">
        <button type="button">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        </button>
      </div>
    </div>
  )
}

export default Navbar
