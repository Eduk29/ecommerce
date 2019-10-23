// React
import React from "react"

// Components
import InputText from "../InputText/InputText"

// Style
import "../../style/components/CustomersInformation.scss"

const CustomersInformation = () => {
  const handleChange = (event, prop) => {
    console.log(`${prop}: `, event.target.value)
  }

  return (
    <div className="ecommerce__container-customers-information">
      <h4 className="ecommerce__container-customers-information-title">
        Delivery Information
      </h4>
      <div className="ecommerce__container-customers-information-name-input">
        <InputText label="Name" handleChange={handleChange} />
      </div>
      <div className="ecommerce__container-customers-information-row">
        <div className="ecommerce__container-customers-information-address-input">
          <InputText label="Address" />
        </div>
        <div className="ecommerce__container-customers-information-number-input">
          <InputText label="Number" />
        </div>
      </div>
      <div className="ecommerce__container-customers-information-row">
        <div className="ecommerce__container-customers-information-zip-code-input">
          <InputText label="Zip Code" />
        </div>
        <div className="ecommerce__container-customers-information-state-input">
          <InputText label="State" />
        </div>
        <div className="ecommerce__container-customers-information-province-input">
          <InputText label="Province" />
        </div>
      </div>
    </div>
  )
}

export default CustomersInformation
