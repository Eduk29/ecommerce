// React
import React from "react"
import { connect } from "react-redux"

// Components
import Navbar from "../../components/Navbar"

const Cart = ({ ...props }) => {
  const { cart } = props
  return (
    <div className="ecommerce__cart">
      <div className="ecommerce__cart-navbar">
        <Navbar badgeData={cart.products.length} />
      </div>
      <div className="ecommerce__cart-main">
        <h1> Page Cart </h1>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(
  mapStateToProps,
  undefined
)(Cart)
