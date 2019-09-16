// React
import React, { useState, useEffect } from "react"

// Components
import ProductCard from "../../components/ProductCard"

// Services
import * as ProductService from "../../services/Products/ProductService"

// Styles
import "../../style/containers/ItemList.scss"

// const product = {
//   name: "Tênis Adidas",
//   imageUrl:
//     "https://imgcentauro-a.akamaihd.net/900x900/93008651/tenis-adidas-baseline-k-infantil-img.jpg",
//   description:
//     "O melhor e mais moderno tênis da atualidade. Seu design em couro garante um bem estar durante o seu uso.",
//   price: "R$ 22.00",
// }

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
      {products.map(product => {
        return (
          <div key={product.id} className="ecommerce_item-list--item">
            <ProductCard product={product} />
          </div>
        )
      })}
    </div>
  )
}

export default ItemList
