/* eslint-disable react/button-has-type */
// React
import React from "react"

// Style
import "../../style/components/Button.scss"

const Button = ({
  borderRadius,
  color = "default",
  disabled = false,
  handleClick,
  icon,
  iconPosition = "left",
  label,
  size = "0px 5px",
  type = "button",
}) => {
  const styleButton = {
    borderRadius: borderRadius ? `${borderRadius}px` : "5px",
    flexFlow: iconPosition === "left" ? "row" : "row-reverse",
  }

  const styleLabel = {
    padding: size,
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`ecommerce__button ${color}`}
      disabled={disabled}
      style={styleButton}
    >
      <div className="ecommerce__button-icon">{icon}</div>
      <p className="ecommerce__button-label" style={styleLabel}>
        {label}
      </p>
    </button>
  )
}

export default Button
