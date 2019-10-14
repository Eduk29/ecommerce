// React
import React from "react"
import { connect } from "react-redux"

// Style
import "../../style/pages/Home.scss"

// Components
import Navbar from "../../components/Navbar"
import ItemList from "../../containers/ItemList/ItemList"

const Home = ({ ...props }) => {
  const { cart } = props

  return (
    <div className="ecommerce__home">
      <header className="ecommerce__home-header">
        <div className="ecommerce__home-header-navbar">
          <Navbar badgeData={cart.products.length} />
        </div>
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
