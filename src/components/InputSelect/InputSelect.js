// React
import React from "react"

// Styles
import "../../style/components/InputSelect.scss"

const InputSelect = props => {
  const { optionsList } = props

  const handleSelect = event => {
    console.log("Event: ", event.target.value)
  }

  return (
    <select
      onChange={handleSelect}
      className="ecommerce__input-select"
      placeholder="Teste"
    >
      <option value="" hidden>
        Choose one
      </option>

      {optionsList.map(option => (
        <option key={option.id} value={option.value}>
          {option.key}
        </option>
      ))}
    </select>
  )
}

export default InputSelect
