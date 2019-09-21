/* eslint-disable no-else-return */
import { SET_CART } from "../types"
import initialState from "../states"

const hasItemInArray = (array, item) => {
  return array.find(product => product.item.id === item)
}

const cartReducer = (state = initialState.cart, action) => {
  const { products } = state

  switch (action.type) {
    case SET_CART:
      if (hasItemInArray(products, action.payload.id)) {
        const itemToUpdate = hasItemInArray(products, action.payload.id)
        itemToUpdate.amount += 1
        return { products: [...products] }
      }

      return {
        products: [
          ...products,
          {
            id: products.length + 1,
            amount: 1,
            item: action.payload,
          },
        ],
      }

    default:
      return state
  }
}

export default cartReducer
