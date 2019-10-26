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
  type = "text",
  value = "",
}) => {
  return (
    <div className="ecommerce__input-text">
      <div className="ecommerce__input-text-label">{label}</div>
      <input
        className="ecommerce__input-text-input"
        disabled={disabled}
        id={`input-${id}`}
        onChange={handleChange}
        readOnly={readonly}
        required={required}
        type={type}
        value={value}
      />
    </div>
  )
}

export default InputText
