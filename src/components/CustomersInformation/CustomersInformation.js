// React
import React from "react"

// Components
import InputText from "../InputText/InputText"
import Button from "../Button"

// Style
import "../../style/components/CustomersInformation.scss"

const CustomersInformation = ({ customer, handleChange, handleClick }) => {
  return (
    <div className="ecommerce__container-customers-information">
      <h4 className="ecommerce__container-customers-information-title">
        Delivery Information
      </h4>
      <div className="ecommerce__container-customers-information-name-input">
        <InputText
          handleChange={handleChange}
          id="name"
          label="Name"
          value={customer.name}
        />
      </div>
      <div className="ecommerce__container-customers-information-row">
        <div className="ecommerce__container-customers-information-address-input">
          <InputText
            handleChange={handleChange}
            id="address"
            label="Address"
            value={customer.address}
          />
        </div>
        <div className="ecommerce__container-customers-information-phone-input">
          <InputText
            handleChange={handleChange}
            id="phone"
            label="Phone/Cellphone"
            value={customer.phone}
          />
        </div>
      </div>
      <div className="ecommerce__container-customers-information-row">
        <div className="ecommerce__container-customers-information-zip-code-input">
          <InputText
            handleChange={handleChange}
            id="zip"
            label="Zip"
            value={customer.zip}
          />
        </div>
        <div className="ecommerce__container-customers-information-state-input">
          <InputText
            handleChange={handleChange}
            id="state"
            label="State"
            value={customer.state}
          />
        </div>
        <div className="ecommerce__container-customers-information-province-input">
          <InputText
            handleChange={handleChange}
            id="province"
            label="Province"
            value={customer.province}
          />
        </div>
      </div>
      <div className="ecommerce__container-customers-information-button">
        <Button
          handleClick={handleClick}
          color="primary"
          label="Save"
          size="5px 45px"
          type="button"
        />
      </div>
    </div>
  )
}

export default CustomersInformation
