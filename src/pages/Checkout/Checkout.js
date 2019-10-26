// React
import React from "react"
import { connect } from "react-redux"

// Components
import Navbar from "../../components/Navbar"

// Style
import "../../style/pages/Checkout.scss"
import OrderCheckout from "../../containers/orderCheckout/OrderCheckout"

const Checkout = ({ ...props }) => {
  const { cart } = props
  const quantity = cart.products.reduce(
    (acc, product) => acc + product.amount,
    0
  )

  return (
    <div className="ecommerce__checkout">
      <header className="ecommerce__checkout-header">
        <Navbar badgeData={quantity} />
      </header>
      <div className="ecommerce__checkout-main">
        <OrderCheckout />
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
)(Checkout)
