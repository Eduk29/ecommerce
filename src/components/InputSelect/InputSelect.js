// React
import React from "react"

// Styles
import "../../style/components/InputSelect.scss"

const InputSelect = props => {
  const {
    disabled,
    hasAllOption,
    handleSelectOption,
    label,
    optionsList,
    readOnly,
    required,
    value,
  } = props

  const displayAllOption = () => {
    const hasAllInArray = optionsList.findIndex(item => item.id === 0)

    if (hasAllOption && hasAllInArray) {
      const allOption = {
        id: 0,
        value: "All",
        key: "ALL",
      }
      optionsList.unshift(allOption)
    }
  }

  const displayHiddenLabelOption = () => {
    if (label) {
      return displayAllOption()
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
        {displayAllOption()}
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
