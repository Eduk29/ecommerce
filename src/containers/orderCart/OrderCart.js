// React
import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

// Components
import Table from "../../components/Table"
import Button from "../../components/Button/Button"

// Styles
import "../../style/containers/OrderCart.scss"

// Actions
import { setCustomer, updateCart } from "../../store/actions"

const columns = ["Product", "Quantity", "Price"]

const OrderCart = props => {
  const { state } = props
  const [cart, setStateCart] = useState(state.cart)

  const displayTable = () => {
    return cart.products.length > 0
  }

  const updateProductWithNewAmount = (products, productId, newAmount) => {
    const productToUpdate = products.filter(item => item.id === productId)[0]
    productToUpdate.amount = newAmount
  }

  const removeProductFromCart = (products, productId) => {
    products.splice(productId - 1, 1)
  }

  const handleAmountChange = (event, product) => {
    const { products } = cart
    let newProductAmount

    if (event.target.value === 0 || event.target.value === "0") {
      if (window.confirm("Do you want to remove this item?")) {
        removeProductFromCart(products, product.id)
      }
    }

    if (
      event.target.value !== "" &&
      event.target.value !== 0 &&
      event.target.value !== "0"
    ) {
      newProductAmount = +event.target.value

      updateProductWithNewAmount(products, product.id, newProductAmount)
    }

    setStateCart({
      ...cart,
      products,
    })

    props.dispatchUpdateCart(cart)
  }

  const handleClickCheckoutButton = () => {
    props.history.push("/checkout")
  }

  const getSubtotal = () => {
    const { products } = cart

    if (products.length > 0) {
      return products.reduce((accumulated, current) => {
        const price = parseFloat(current.item.price)
        const { amount } = current

        return accumulated + amount * price
      }, 0)
    }
    return 0
  }

  const getDelivery = () => {
    const subtotal = Number(getSubtotal())

    if (subtotal < 1000 && subtotal !== 0) {
      return 23
    }

    if (subtotal > 1000 && subtotal < 5000) {
      return 9.99
    }

    return 0
  }

  const getTotal = () => {
    const subtotal = getSubtotal()
    const delivery = +getDelivery()

    if (getDelivery() === "0.00") {
      return subtotal
    }

    return subtotal + delivery
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
      <div className="ecommerce__order-cart-container-summary-information">
        <div className="ecommerce__order-cart-container-summary-information-subtotal">
          <span>Subtotal</span>
          <span>{`R$ ${getSubtotal().toFixed(2)}`}</span>
        </div>
        <div className="ecommerce__order-cart-container-summary-information-delivery">
          <span>Delivery</span>
          <span>{`R$ ${getDelivery().toFixed(2)}`}</span>
        </div>
        <hr />
        <div className="ecommerce__order-cart-container-summary-information-total">
          <span>Est. Total</span>
          <span>{`R$ ${getTotal().toFixed(2)}`}</span>
        </div>
        <div className="ecommerce__order-cart-container-summary-checkout-button">
          <Button
            borderRadius="50"
            disabled={cart.products.length === 0}
            color="primary"
            handleClick={handleClickCheckoutButton}
            label="Checkout"
            size="5px 45px"
            type="button"
          />
        </div>
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
)(withRouter(OrderCart))
