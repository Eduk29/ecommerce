// React
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Pages
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
