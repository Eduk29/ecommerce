// React
import React from "react"
import { connect } from "react-redux"

// Components
import Navbar from "../../components/Navbar"
import OrderCart from "../../containers/orderCart/orderCart"

// Style
import "../../style/pages/Cart.scss"

const Cart = ({ ...props }) => {
  const { cart } = props
  return (
    <div className="ecommerce__cart">
      <header className="ecommerce__cart-header">
        <Navbar badgeData={cart.products.length} />
      </header>
      <div className="ecommerce__cart-main">
        <OrderCart />
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
