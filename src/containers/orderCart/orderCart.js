// React
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

// Components
import Table from "../../components/Table"
import CustomersInformation from "../../components/CustomersInformation/CustomersInformation"

// Styles
import "../../style/containers/OrderCart.scss"
import { setCustomer, setAmount } from "../../store/actions"

const columns = ["Product", "Quantity", "Price"]

const OrderCart = props => {
  const { state } = props
  const [cart, setStateCart] = useState(state.cart)
  const [customer, setStateCustomer] = useState(state.customer)

  const displayTable = () => {
    return cart.products.length > 0
  }

  const handleChange = event => {
    const prop = event.target.id.slice(
      event.target.id.indexOf("-") + 1,
      event.target.id.length
    )
    setStateCustomer({
      ...customer,
      [prop]: event.target.value,
    })
  }

  const updateArrayWithNewState = (products, payload, newAmount) => {
    return products.map(product => {
      if (product.item.id === payload.id) {
        return { ...product, amount: newAmount }
      }
      return product
    })
  }

  const handleChangeAmount = (event, product) => {
    const newAmount = +event.target.value

    const newState = updateArrayWithNewState(cart.products, product, newAmount)

    setStateCart({
      ...cart,
      products: newState,
    })
  }

  useEffect(() => {
    props.dispatchSetAmount(cart)
  }, [cart])

  const handleClick = () => {
    props.dispatchSetCustomer(customer)
  }

  return (
    <div className="ecommerce__order-cart-container">
      <div className="ecommerce__order-cart-container-order-summary">
        {displayTable() && (
          <div className="ecommerce__order-cart-container-order-summary--filled-cart">
            <h4 className="ecommerce__order-cart-container-order-summary--filled-cart-title">
              Your products in cart
            </h4>
            <Table
              handleChangeAmount={handleChangeAmount}
              columns={columns}
              products={cart.products}
            />
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
          customer={customer}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  state,
})

const mapDispatchToProps = dispatch => ({
  dispatchSetCustomer: data => dispatch(setCustomer(data)),
  dispatchSetAmount: data => dispatch(setAmount(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderCart)
