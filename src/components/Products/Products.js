import React from 'react'
import "./Products.css"
import Filtersection from '../Filtersection/Filtersection'
import Sortsection from '../Sortsection/Sortsection'
import MainProducts from '../MainProducts/MainProducts'

const Products = () => {
  return (
    <>
        <div className="productscontainer">
            <div className="products-filter">
                <Filtersection/>
            </div>
            <div className="products-sort--view">
                <div className="products-sort">
                    <Sortsection/>
                </div>
                <div className="products-view">
                    <MainProducts/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products