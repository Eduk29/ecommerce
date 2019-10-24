import { SET_CUSTOMER } from "../types"
import initialState from "../states"

const customerReducer = (state = initialState.customer, action) => {
  const { type } = action

  switch (type) {
    case SET_CUSTOMER:
      console.log("Customer: ", state)
      return state

    default:
      return state
  }
}

export default customerReducer
