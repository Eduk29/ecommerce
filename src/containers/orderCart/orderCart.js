// React
import React, { useState } from "react"
import { connect } from "react-redux"

// Components
import Table from "../../components/Table"
import CustomersInformation from "../../components/CustomersInformation/CustomersInformation"

// Styles
import "../../style/containers/OrderCart.scss"
import { setCustomer, updateCart } from "../../store/actions"

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

  const updateProductWithNewAmount = (products, productId, newAmount) => {
    const productToUpdate = products.filter(item => item.id === productId)[0]
    productToUpdate.amount = newAmount
  }

  const handleAmountChange = (event, product) => {
    const { products } = cart
    let newProductAmount

    if (event.target.value !== "") {
      newProductAmount = +event.target.value
    }

    updateProductWithNewAmount(products, product.id, newProductAmount)

    setStateCart({
      ...cart,
      products,
    })

    if (newProductAmount >= 0) {
      props.dispatchUpdateCart(cart)
    }
  }

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
              columns={columns}
              products={cart.products}
              handleAmountChange={handleAmountChange}
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
  dispatchUpdateCart: data => dispatch(updateCart(data)),
  dispatchSetCustomer: data => dispatch(setCustomer(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderCart)
