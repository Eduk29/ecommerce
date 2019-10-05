// React
import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

// Actions
import { setCart } from "../../store/actions"

// Components
import Button from "../../components/Button"
import FilterPanel from "../../components/FilterPanel"
import ProductCard from "../../components/ProductCard"

// Services
import * as ProductService from "../../services/Products/ProductService"
import * as BrandService from "../../services/Brands/BrandService"
import * as CategoryService from "../../services/Categories/CategoryService"

// Styles
import "../../style/containers/ItemList.scss"

const ItemList = props => {
  const [products, setProducts] = useState([])
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedBrand, setSelectedBrand] = useState({})
  const [selectedCategory, setSelectedCategory] = useState({})

  const getAllProducts = () => {
    ProductService.getAll().then(response => setProducts(response))
  }

  const getBrandsList = () => {
    BrandService.getAll().then(response => setBrands(response))
  }

  const getCategoriesList = () => {
    CategoryService.getAll().then(response => setCategories(response))
  }

  const getAllProductsByFilter = filters => {
    ProductService.getAllByFilter(filters).then(response =>
      setProducts(response)
    )
  }

  const loadData = () => {
    getAllProducts()
    getBrandsList()
    getCategoriesList()
  }

  useEffect(() => {
    return loadData()
  }, [])

  const setFilterQuery = () => {
    const filterList = []
    let filterQuery = ""

    if (selectedBrand && selectedBrand.id) {
      const filter = `brandId=${selectedBrand.id}`
      filterList.push(filter)
    }

    if (selectedCategory && selectedCategory.id) {
      const filter = `categoryId=${selectedCategory.id}`
      filterList.push(filter)
    }

    filterList.forEach(item => {
      if (filterQuery === "") {
        filterQuery = item
      } else {
        filterQuery = `${filterQuery}&${item}`
      }
    })

    return filterQuery
  }

  const handleClickAddToCart = product => {
    props.dispatchSetCart(product)
  }

  const handleClickFilter = event => {
    event.preventDefault()
    getAllProductsByFilter(setFilterQuery())
  }

  const handleChangeBrandFilter = event => {
    const selected = brands.filter(item => item.value === event.target.value)
    setSelectedBrand(selected[0])
  }

  const handleChangeCategoryFilter = event => {
    const selected = categories.filter(
      item => item.value === event.target.value
    )
    setSelectedCategory(selected[0])
  }

  const displayFilterPainel = () => {
    return brands && categories
  }

  return (
    <div className="ecommerce__item-list-container">
      {displayFilterPainel() && (
        <div className="ecommerce__item-list-container-filter-panel">
          <FilterPanel
            brands={brands}
            categories={categories}
            handleChangeBrandFilter={handleChangeBrandFilter}
            handleChangeCategoryFilter={handleChangeCategoryFilter}
            handleClickFilter={handleClickFilter}
            selectedBrand={selectedBrand}
            selectedCategory={selectedCategory}
          />
        </div>
      )}

      <div className="ecommerce__item-list-container-results">
        {products.map(product => (
          <div key={product.id} className="ecommerce_item-list--item">
            <ProductCard product={product}>
              <Button
                borderRadius={25}
                color="default"
                handleClick={() => handleClickAddToCart(product)}
                icon={<FontAwesomeIcon icon={faPlus} size="sm" />}
                iconPosition="left"
                label="Add to Cart"
              />
            </ProductCard>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = dispatch => ({
  dispatchSetCart: data => dispatch(setCart(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
