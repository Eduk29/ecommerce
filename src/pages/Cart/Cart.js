// React
import React from "react"

// Components
import Navbar from "../../components/Navbar"

const Cart = () => {
  return (
    <div className="ecommerce__cart">
      <div className="ecommerce__cart-navbar">
        <Navbar />
      </div>
      <div className="ecommerce__cart-main">
        <h1> Page Cart </h1>
      </div>
    </div>
  )
}

export default Cart
