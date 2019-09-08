// React
import React from "react"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

// Styles
import "../../style/components/ProductCard.scss"
import Button from "../Button/Button"

const ProductCard = () => {
  const name = "Tênis Adidas"
  const imageUrl =
    "https://imgcentauro-a.akamaihd.net/900x900/93008651/tenis-adidas-baseline-k-infantil-img.jpg"
  const description =
    "O melhor e mais moderno tênis da atualidade. Seu design em couro garante um bem estar durante o seu uso."
  const price = "R$ 12.00"

  return (
    <div className="ecommerce__product-card">
      <img
        src={imageUrl}
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
      <div className="ecommerce__product-card-footer">
        <Button
          label="Add to Cart"
          icon={<FontAwesomeIcon icon={faPlus} size="lg" />}
          iconPosition="left"
          borderRadius={25}
          color="default"
        />
      </div>
    </div>
  )
}

export default ProductCard
