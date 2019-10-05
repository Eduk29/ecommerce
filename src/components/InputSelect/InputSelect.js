// React
import React from "react"

// Styles
import "../../style/components/InputSelect.scss"

const InputSelect = props => {
  const {
    disabled,
    handleSelectOption,
    label,
    optionsList,
    readOnly,
    required,
    value,
  } = props

  const displayHiddenLabelOption = () => {
    if (label) {
      return (
        <option value="" hidden>
          {" "}
        </option>
      )
    }
    return (
      <option value="" hidden>
        Choose one
      </option>
    )
  }

  const displayReadOnlyModifier = () => {
    if (readOnly) {
      return "--readonly"
    }
    return ""
  }

  return (
    <div className="ecommerce__select">
      <label htmlFor="selectInput" className="ecommerce__select-label">
        {label}
      </label>
      <select
        name="input-select"
        className={`ecommerce__select-input${displayReadOnlyModifier()}`}
        defaultValue={value}
        disabled={disabled}
        id="selectInput"
        onChange={handleSelectOption}
        required={required}
      >
        {displayHiddenLabelOption()}
        {optionsList.map(option => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  )
}

export default InputSelect
