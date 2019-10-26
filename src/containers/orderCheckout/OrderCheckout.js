// React
import React, { useState } from "react"
import { connect } from "react-redux"

// Components
import CustomersInformation from "../../components/CustomersInformation"

// Styles
import "../../style/containers/OrderCheckout.scss"

// Actions
import { setCustomer } from "../../store/actions"
import Button from "../../components/Button"

const OrderCheckout = props => {
  const { cart, customer } = props
  const [state, setState] = useState(customer)

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

  const handleClickFinish = () => {
    alert("Thank's for using this e-commerce, your journey ends here.")
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

  const hasCustomerDeliveryInfromation = () => {
    if (customer.name === "" || cart.products.length === 0) {
      return true
    }
    return false
  }

  return (
    <div className="ecommerce__order-checkout-container">
      <div className="ecommerce__order-checkout-container-customer">
        <CustomersInformation
          customer={state}
          disabledButton={hasCustomerDeliveryInfromation()}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </div>
      <div className="ecommerce__order-checkout-container-summary">
        {" "}
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
        <div className="ecommerce__container-customers-information-button">
          <Button
            color="primary"
            disabled={hasCustomerDeliveryInfromation()}
            handleClick={handleClickFinish}
            label="Finish"
            size="5px 45px"
            type="button"
          />
        </div>
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
)(OrderCheckout)
