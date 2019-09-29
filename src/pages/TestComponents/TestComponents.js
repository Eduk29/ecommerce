import React from "react"
import InputSelect from "../../components/InputSelect/InputSelect"

const optionsList = [
  {
    id: 1,
    key: "Option 1",
    value: "option1",
  },
  {
    id: 2,
    key: "Option 2",
    value: "option2",
  },
  {
    id: 3,
    key: "Option 3",
    value: "option3",
  },
]

const TestComponents = () => {
  const handleSelect = event => {
    console.log("Selected Option: ", event.target.value)
  }

  return (
    <form style={{ width: "25%" }}>
      <InputSelect
        disabled={false}
        handleSelectOption={handleSelect}
        label="Choose One: "
        optionsList={optionsList}
        readOnly
        required
        value={optionsList[1].value}
      />
    </form>
  )
}

export default TestComponents
