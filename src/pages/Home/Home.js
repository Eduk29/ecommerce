// React
import React from "react"
import { connect } from "react-redux"

// Components
import Navbar from "../../components/Navbar"
import ItemList from "../../containers/ItemList/ItemList"

// Style
import "../../style/pages/Home.scss"

const Home = ({ ...props }) => {
  const { cart } = props
  return (
    <div className="ecommerce__home">
      <header className="ecommerce__home-header">
        <Navbar badgeData={cart.products.length} />
      </header>
      <div className="ecommerce__home-main">
        <ItemList />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(
  mapStateToProps,
  undefined
)(Home)
