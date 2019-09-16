import { SET_CART } from "../types"

// Cart
export const setCart = data => ({
  type: SET_CART,
  payload: data,
})
