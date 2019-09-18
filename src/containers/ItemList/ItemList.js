// React
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

// Actions
import { setCart } from "../../store/actions"

// Components
import ProductCard from "../../components/ProductCard"

// Services
import * as ProductService from "../../services/Products/ProductService"

// Styles
import "../../style/containers/ItemList.scss"

const ItemList = props => {
  const [products, setProducts] = useState([])

  const getAllProducts = () => {
    ProductService.getAll().then(response => setProducts(response))
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const handleClickAddToCart = product => {
    console.log("Cliquei no add to cart")
    console.log("Product: ", product)
    props.dispatchSetCart(product)
  }

  return (
    <div className="ecommerce__item-list-container">
      {products.map(product => (
        <div key={product.id} className="ecommerce_item-list--item">
          <ProductCard
            handleClick={() => handleClickAddToCart(product)}
            product={product}
          />
        </div>
      ))}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchSetCart: data => dispatch(setCart(data)),
})

export default connect(
  undefined,
  mapDispatchToProps
)(ItemList)
