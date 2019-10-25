import { SET_CART, SET_CUSTOMER, SET_AMOUNT } from "../types"

// Cart
export const setAmount = data => ({
  type: SET_AMOUNT,
  payload: data,
})

export const setCart = data => ({
  type: SET_CART,
  payload: data,
})

// Customer
export const setCustomer = data => ({
  type: SET_CUSTOMER,
  payload: data,
})
