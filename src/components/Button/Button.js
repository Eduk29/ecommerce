/* eslint-disable react/button-has-type */
// React
import React from "react"

// Style
import "../../style/components/Button.scss"

const Button = ({
  borderRadius,
  color,
  disabled = false,
  handleClick,
  icon,
  iconPosition = "left",
  label,
}) => {
  const styleButton = {
    borderRadius: borderRadius ? `${borderRadius}px` : "5px",
    flexFlow: iconPosition === "left" ? "row" : "row-reverse",
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`ecommerce__button ${color}`}
      disabled={disabled}
      style={styleButton}
    >
      <div className="ecommerce__button-icon">{icon}</div>
      <p className="ecommerce__button-label">{label}</p>
    </button>
  )
}

export default Button
