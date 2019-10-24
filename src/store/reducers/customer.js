import { SET_CUSTOMER } from "../types"
import initialState from "../states"

const customerReducer = (state = initialState.customer, action) => {
  const { payload, type } = action

  switch (type) {
    case SET_CUSTOMER:
      return payload

    default:
      return state
  }
}

export default customerReducer
