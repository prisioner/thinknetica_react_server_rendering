import React from "react"
import PRODUCTS from "../constants/Products"
import CatalogPage from "./CatalogPage"

export default class Catalog extends React.PureComponent {
  render () {
    return (
      <div>
        <CatalogPage products={PRODUCTS} />
      </div>
    )
  }
}
