// React
import React, { useState, useEffect } from "react"

// Components
import ProductCard from "../../components/ProductCard"

// Services
import * as ProductService from "../../services/Products/ProductService"

// Styles
import "../../style/containers/ItemList.scss"

const ItemList = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = () => {
    ProductService.getAll().then(response => setProducts(response))
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className="ecommerce__item-list-container">
      {products.map(product => (
        <div key={product.id} className="ecommerce_item-list--item">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ItemList
