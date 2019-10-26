import React from "react"

import "../../style/components/Badge.scss"

const Badge = ({
  color,
  label,
  labelFontSize,
  labelPaddingX,
  labelPaddingY,
}) => {
  const styleLabel = {
    fontSize: labelFontSize ? `${labelFontSize}px` : `16px`,
    padding:
      labelPaddingX && labelPaddingY
        ? `${labelPaddingX}px ${labelPaddingY}px`
        : `4px 8px`,
  }

  const displayColorModifier = () => {
    if (color) {
      return `${color}`
    }
    return "default"
  }

  return (
    <div className="ecommerce__badge-wrapper">
      <p
        className={`ecommerce__badge-label ${displayColorModifier()}`}
        style={styleLabel}
      >
        {label}
      </p>
    </div>
  )
}

export default Badge
