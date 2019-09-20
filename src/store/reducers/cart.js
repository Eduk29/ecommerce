import { SET_CART } from "../types"
import initialState from "../states"

const cartReducer = (state = initialState.cart, action) => {
  const newProductToCart = {
    id: null,
    amount: null,
    item: null,
  }

  let newState = {}

  const hasItemInArray = () => {
    return state.products.find(product => product.item.id === action.payload.id)
  }

  switch (action.type) {
    case SET_CART:
      if (hasItemInArray()) {
        const { products } = state
        products.forEach((product, index) => {
          if (product.item.id === action.payload.id) {
            products[index].amount += 1
          }
        })

        newState = {
          products: [...state.products],
        }
      } else {
        newProductToCart.id = state.products.length + 1
        newProductToCart.amount = 1
        newProductToCart.item = action.payload

        newState = {
          products: [...state.products, newProductToCart],
        }
      }

      return newState

    // state.products.map((product, index) => {
    //   if (product.item.id === action.payload.id) {
    //     console.log("Item ja no array")
    //     state.products[index].amount = +1
    //   }
    // })

    default:
      return state
  }
}

export default cartReducer
