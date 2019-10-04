// React
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

// Actions
import { setCart } from "../../store/actions"

// Components
import Button from "../../components/Button"
import FilterPanel from "../../components/FilterPanel"
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
    props.dispatchSetCart(product)
  }

  return (
    <div className="ecommerce__item-list-container">
      <div className="ecommerce__item-list-container-filter-panel">
        <FilterPanel />
      </div>

      <div className="ecommerce__item-list-container-results">
        {products.map(product => (
          <div key={product.id} className="ecommerce_item-list--item">
            <ProductCard product={product}>
              <Button
                borderRadius={25}
                color="default"
                handleClick={() => handleClickAddToCart(product)}
                icon={<FontAwesomeIcon icon={faPlus} size="sm" />}
                iconPosition="left"
                label="Add to Cart"
              />
            </ProductCard>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  dispatchSetCart: data => dispatch(setCart(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
