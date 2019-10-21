import React from "react"

const InputText = ({
  disabled = false,
  label = "Default Label",
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
        readOnly={readonly}
        required={required}
        type="text"
        value={value}
      />
    </div>
  )
}

export default InputText
