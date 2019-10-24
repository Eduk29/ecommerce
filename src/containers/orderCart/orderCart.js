// React
import React, { useState } from "react"
import { connect } from "react-redux"

// Components
import Table from "../../components/Table"
import CustomersInformation from "../../components/CustomersInformation/CustomersInformation"

// Styles
import "../../style/containers/OrderCart.scss"
import { setCustomer } from "../../store/actions"

const columns = ["Product", "Quantity", "Price", "Actions"]

const OrderCart = props => {
  const { cart, customer } = props
  const [state, setState] = useState(customer)

  const displayTable = () => {
    return cart.products.length > 0
  }

  const handleChange = event => {
    const prop = event.target.id.slice(
      event.target.id.indexOf("-") + 1,
      event.target.id.length
    )
    setState({
      ...state,
      [prop]: event.target.value,
    })
  }

  const handleClick = () => {
    props.dispatchSetCustomer(state)
  }

  return (
    <div className="ecommerce__order-cart-container">
      <div className="ecommerce__order-cart-container-order-summary">
        {displayTable() && (
          <div className="ecommerce__order-cart-container-order-summary--filled-cart">
            <h4 className="ecommerce__order-cart-container-order-summary--filled-cart-title">
              Your products in cart
            </h4>
            <Table columns={columns} products={cart.products} />
          </div>
        )}
        {!displayTable() && (
          <h4 className="ecommerce__order-cart-container-order-summary--empty-cart">
            Your cart is empty
          </h4>
        )}
      </div>
      <div className="ecommerce__order-cart-container-customer-information">
        <CustomersInformation
          customer={state}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
  customer: state.customer,
})

const mapDispatchToProps = dispatch => ({
  dispatchSetCustomer: data => dispatch(setCustomer(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderCart)
