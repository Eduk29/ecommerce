// React
import React from "react"

// Component
import InputSelect from "../InputSelect/InputSelect"
import Button from "../Button"

// Styles
import "../../style/components/FilterPanel.scss"

const FilterPanel = ({
  brands,
  categories,
  handleChangeBrandFilter,
  handleChangeCategoryFilter,
  handleClickFilter,
  selectedBrand,
  selectedCategory,
}) => {
  const displayBrandsFilter = () => {
    return brands && brands.length > 0
  }

  const displayCategoriesFilter = () => {
    return categories && categories.length > 0
  }

  return (
    <div className="ecommerce__filter-panel">
      <div className="ecommerce__filter-panel-brands">
        {displayBrandsFilter() && (
          <InputSelect
            hasAllOption
            handleSelectOption={handleChangeBrandFilter}
            label="Brands: "
            optionsList={brands}
            value={selectedBrand.value}
          />
        )}
      </div>
      <div className="ecommerce__filter-panel-category">
        {displayCategoriesFilter() && (
          <InputSelect
            hasAllOption
            handleSelectOption={handleChangeCategoryFilter}
            label="Categories: "
            optionsList={categories}
            value={selectedCategory.value}
          />
        )}
      </div>

      <div className="ecommerce__filter-panel-button">
        <Button
          handleClick={handleClickFilter}
          color="primary"
          label="Filter"
          size="5px 45px"
          type="button"
        />
      </div>
    </div>
  )
}

export default FilterPanel
