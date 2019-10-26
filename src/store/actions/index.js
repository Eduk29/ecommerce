import { SET_CART, SET_CUSTOMER, UPDATE_CART } from "../types"

// Cart
export const setCart = data => ({
  type: SET_CART,
  payload: data,
})

export const updateCart = data => ({
  type: UPDATE_CART,
  payload: data,
})

// Customer
export const setCustomer = data => ({
  type: SET_CUSTOMER,
  payload: data,
})
