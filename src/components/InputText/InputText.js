// React
import React from "react"

// Styles
import "../../style/components/InputText.scss"

const InputText = ({
  disabled = false,
  id = "default",
  label = "",
  handleChange,
  readonly = false,
  required = false,
  value = "",
}) => {
  return (
    <div className="ecommerce__input-text">
      <div className="ecommerce__input-text-label">{label}</div>
      <input
        id={`input-${id}`}
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
