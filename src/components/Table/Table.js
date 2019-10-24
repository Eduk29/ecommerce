// React
import React from "react"

// Styles
import "../../style/components/Table.scss"

const Table = props => {
  const { columns, products } = props

  return (
    <table className="ecommerce__table">
      <thead className="ecommerce__table-header">
        <tr className="ecommerce__table-header-row">
          {columns.map(item => {
            return (
              <th key={item} className="ecommerce__table-header-row-item">
                {item}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody className="ecommerce__table-body">
        {products.map(product => {
          return (
            <tr key={product.id} className="ecommerce__table-body-row">
              <td className="ecommerce__table-body-row-item--first-column">
                {product.item.name}
              </td>
              <td className="ecommerce__table-body-row-item">
                {product.amount}
              </td>
              <td className="ecommerce__table-body-row-item">
                R$ {product.item.price}
              </td>
              <td className="ecommerce__table-body-row-item"> </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
