// React
import React from "react"
import { connect } from "react-redux"

// Components
import Navbar from "../../components/Navbar"
import OrderCart from "../../containers/orderCart/OrderCart"

// Style
import "../../style/pages/Cart.scss"

const Cart = ({ ...props }) => {
  const { cart } = props
  const quantity = cart.products.reduce(
    (acc, product) => acc + product.amount,
    0
  )

  return (
    <div className="ecommerce__cart">
      <header className="ecommerce__cart-header">
        <Navbar badgeData={quantity} />
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
