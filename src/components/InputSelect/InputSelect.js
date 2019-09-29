// React
import React from "react"

// Styles
import "../../style/components/InputSelect.scss"

const InputSelect = props => {
  const { disabled, label, optionsList, required, value } = props

  const handleSelect = event => {
    console.log("Event: ", event.target.value)
  }

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

  return (
    <div className="ecommerce__select">
      <label htmlFor="selectInput" className="ecommerce__select-label">
        {label}
        <select
          name="input-select"
          className="ecommerce__select-input"
          defaultValue={value}
          disabled={disabled}
          id="selectInput"
          onChange={handleSelect}
          required={required}
        >
          {displayHiddenLabelOption()}
          {optionsList.map(option => (
            <option key={option.id} value={option.value}>
              {option.key}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default InputSelect
