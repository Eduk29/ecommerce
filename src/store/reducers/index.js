import { combineReducers } from "redux"
import cartReducer from "./cart"
import customerReducer from "./customer"

const reducers = combineReducers({
  cart: cartReducer,
  customer: customerReducer,
})

export default reducers
