import { SET_CART } from "../types"
import initialState from "../states"

const hasItemInArray = (array, id) => {
  return array.find(product => product.item.id === id)
}

const updateArrayWithNewState = (products, payload) => {
  return products.map(product => {
    if (product.item.id === payload.id) {
      return { ...product, amount: product.amount + 1 }
    }
    return product
  })
}

const cartReducer = (state = initialState.cart, action) => {
  const { products } = state
  const { payload, type } = action

  switch (type) {
    case SET_CART:
      if (hasItemInArray(products, payload.id)) {
        return { products: updateArrayWithNewState(products, payload) }
      }

      return {
        products: [
          ...products,
          {
            id: products.length + 1,
            amount: 1,
            item: payload,
          },
        ],
      }

    default:
      return state
  }
}

export default cartReducer
