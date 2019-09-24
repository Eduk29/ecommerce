// React
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Pages
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import TestComponents from "../pages/TestComponents"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/test-components" exact component={TestComponents} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
