import { SET_CART } from "../types"
import initialState from "../states"

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case SET_CART:
      console.log("Action: ", action.payload)
      // state.products.map(product => {
      //   console.log("Product: ", product)

      //   // if (product.id === ac)
      // })

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
