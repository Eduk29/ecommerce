import { combineReducers } from "redux"
import cartReducer from "./cart"

const reducers = combineReducers({
  cart: cartReducer,
})

export default reducers
