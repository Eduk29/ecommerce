import { SET_CART } from "../types"
import initialState from "../states"

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case SET_CART:
      console.log("Action: ", action)
      console.log("State: ", state)
      return null

    default:
      return state
  }
}

export default cartReducer
