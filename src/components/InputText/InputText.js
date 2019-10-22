// React
import React from "react"

// Styles
import "../../style/components/InputText.scss"

const InputText = ({
  disabled = false,
  label = "Default Label",
  handleChange,
  readonly = false,
  required = false,
  value = "Default Value",
}) => {
  return (
    <div className="ecommerce__input-text">
      <div className="ecommerce__input-text-label">{label}</div>
      <input
        className="ecommerce__input-text-input"
        disabled={disabled}
        onChange={handleChange}
        readOnly={readonly}
        required={required}
        type="text"
        value={value}
      />
    </div>
  )
}

export default InputText
