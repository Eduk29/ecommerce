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
      <header className="ecommerce__home-header">
        <div className="ecommerce__home-header-navbar">
          <Navbar />
        </div>
      </header>
      <div className="ecommerce__home-main">
        <ItemList />
      </div>
    </div>
  )
}

export default Home
