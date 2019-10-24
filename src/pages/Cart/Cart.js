// React
import React from "react"
import { connect } from "react-redux"

// Components
import Navbar from "../../components/Navbar"
import OrderCart from "../../containers/orderCart/orderCart"

// Style
import "../../style/pages/Cart.scss"

const Cart = ({ ...props }) => {
  const { cart, customer } = props
  return (
    <div className="ecommerce__cart">
      <header className="ecommerce__cart-header">
        <Navbar badgeData={cart.products.length} />
      </header>
      <div className="ecommerce__cart-main">
        <OrderCart cart={cart} customer={customer} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
  customer: state.customer,
})

export default connect(
  mapStateToProps,
  undefined
)(Cart)
