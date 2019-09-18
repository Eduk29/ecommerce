import { SET_CART } from "../types"
import initialState from "../states"

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        products: [
          ...state.products,
          {
            item: action.payload,
            qtd: 1,
          },
        ],
      }

    default:
      return state
  }
}

export default cartReducer
