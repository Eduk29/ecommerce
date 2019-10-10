// React
import React from "react"
import { connect } from "react-redux"

// Components
import Navbar from "../../components/Navbar"
import Table from "../../components/Table"

// Style
import "../../style/pages/Cart.scss"

const Cart = ({ ...props }) => {
  const { cart } = props
  return (
    <div className="ecommerce__cart">
      <div className="ecommerce__cart-navbar">
        <Navbar badgeData={cart.products.length} />
      </div>
      <div className="ecommerce__cart-main">
        <div className="ecommerce__cart-main-table">
          {" "}
          <Table />{" "}
        </div>
        <div className="ecommerce__cart-main-summary"> Summary </div>
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
