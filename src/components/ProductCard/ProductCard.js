// React
import React from "react"

// Styles
import "../../style/components/ProductCard.scss"

const ProductCard = () => {
  const name = "Tênis Adidas"
  const description =
    "O melhor e mais moderno tênis da atualidade. Seu design em couro garante um bem estar durante o seu uso."
  const price = "R$ 12.00"

  return (
    <div className="ecommerce__product-card">
      <img
        src="https://imgcentauro-a.akamaihd.net/900x900/93008651/tenis-adidas-baseline-k-infantil-img.jpg"
        alt="product"
        className="ecommerce__product-card-image"
      />
      <div className="ecommerce__product-card-data">
        <div className="ecommerce__product-card-data-name">{name}</div>
        <div className="ecommerce__product-card-data-description">
          {description}
        </div>
        <div className="ecommerce__product-card-data-price">{price}</div>
      </div>
    </div>
  )
}

export default ProductCard
