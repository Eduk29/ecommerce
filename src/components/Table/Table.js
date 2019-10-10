// React
import React from "react"

// Styles
import "../../style/components/Table.scss"

const columns = ["Product", "Quantity", "Price", "Actions"]

const Table = () => {
  return (
    <table className="ecommerce__table">
      <thead className="ecommerce__table-header">
        <tr className="ecommerce__table-header-row">
          {columns.map(item => {
            return <th className="ecommerce__table-header-row-item">{item}</th>
          })}
        </tr>
      </thead>
      <tbody className="ecommerce__table-body">
        <tr className="ecommerce__table-body-row">
          <td className="ecommerce__table-body-row-item--first-column">
            Produto 1
          </td>
          <td className="ecommerce__table-body-row-item"> 22 </td>
          <td className="ecommerce__table-body-row-item"> R$ 23,00 </td>
          <td className="ecommerce__table-body-row-item"> </td>
        </tr>
        <tr className="ecommerce__table-body-row">
          <td className="ecommerce__table-body-row-item--first-column">
            Produto 2
          </td>
          <td className="ecommerce__table-body-row-item"> 3 </td>
          <td className="ecommerce__table-body-row-item"> R$ 233,00 </td>
          <td className="ecommerce__table-body-row-item"> </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
