// React
import React from "react"

// Style
import "../../style/pages/Home.scss"

// Components
import Navbar from "../../components/Navbar"
import ItemList from "../../containers/ItemList/ItemList"

const Home = () => {
  return (
    <div className="ecommerce__home">
      <div className="ecommerce__home-header">
        <div className="ecommerce__home-header-navbar">
          <Navbar />
        </div>
      </div>
      <div className="ecommerce__home-main">
        <h1>Main</h1>
        <ItemList />
      </div>
    </div>
  )
}

export default Home
