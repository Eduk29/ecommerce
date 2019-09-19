// React
import React from "react"

// Styles
import "../../style/components/ProductCard.scss"

const ProductCard = ({ product, children }) => {
  return (
    <div className="ecommerce__product-card">
      <img
        src={product.urlImage}
        alt="product"
        className="ecommerce__product-card-image"
      />
      <div className="ecommerce__product-card-data">
        <div className="ecommerce__product-card-data-name">{product.name}</div>
        <div className="ecommerce__product-card-data-description">
          {product.description}
        </div>
        <div className="ecommerce__product-card-data-price">
          R$ {product.price}
        </div>
      </div>
      <div className="ecommerce__product-card-footer">{children}</div>
    </div>
  )
}

export default ProductCard
