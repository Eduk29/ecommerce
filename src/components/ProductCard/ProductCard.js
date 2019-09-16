// React
import React from "react"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

// Styles
import "../../style/components/ProductCard.scss"
import Button from "../Button/Button"

const ProductCard = ({ product, handleClick }) => {
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
      <div className="ecommerce__product-card-footer">
        <Button
          borderRadius={25}
          color="default"
          handleClick={handleClick}
          icon={<FontAwesomeIcon icon={faPlus} size="sm" />}
          iconPosition="left"
          label="Add to Cart"
        />
      </div>
    </div>
  )
}

export default ProductCard
