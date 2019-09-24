// React
import React from "react"

// Styles
import "../../style/components/InputSelect.scss"

const InputSelect = () => {
  const handleSelect = event => {
    console.log("Event: ", event.target.value)
  }

  return (
    <select onChange={handleSelect} className="ecommerce__input-select">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
    </select>
  )
}

export default InputSelect
