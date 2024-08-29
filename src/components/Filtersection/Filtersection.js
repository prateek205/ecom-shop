import React from "react";
import "./Filtersection.css";
import { useFilterContext } from "../../context/filteredContext";
import FormatPrice from "../../Helpers/FormatPrice";

const Filtersection = () => {
  const {
    filters: { text, price, maxPrice, minPrice },
    updateFilterValue,
    allProducts,
    clearFilter,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  // WE NEED UNIQUE DATA
  const categoryOnlyData = getUniqueData(allProducts, "brand");
  return (
    <>
      {/* Filter--Section--Layout */}
      <div className="filter--section">
        {/* Filter-Section */}
        <div className="filter-section">
          <p>Filters</p>
        </div>

        <hr />

        {/* 1st section Search Bar */}
        <div className="filter-searchBar">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={updateFilterValue}
              placeholder="Search"
            />
          </form>
        </div>

        <hr />

        {/* 2nd section Price */}
        <div className="filter-price">
          <div className="filter-price-heading">
            <p>Price</p>
          </div>

          <div className="filter-price-range">
            <p>
              <FormatPrice price={price} />
            </p>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilterValue}
            />
          </div>
        </div>

        <hr />

        {/* 3rd section Category */}
        <div className="filter-category">
          <div className="filter-cat-heading">
            <p>Category</p>
          </div>

          <div className="filter-category-heading">
            <p>Mobile</p>
          </div>
        </div>

        <hr />

        {/* 4th section Brand */}
        <div className="filter-brand">
          <div className="filter-brand-heading">
            <p>Brands</p>
          </div>
          <div>
            {categoryOnlyData.map((curElem) => {
              return (
                <div className="filter-brand">
                  <button
                    key={curElem}
                    type="button"
                    name="brand"
                    value={curElem}
                    onClick={updateFilterValue}
                  >
                    {curElem}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <hr />

        {/* 5th section Clear btn */}

        <div className="filter-clr-btn">
          <button onClick={clearFilter}>CLEAR ALL</button>
        </div>
      </div>
    </>
  );
};

export default Filtersection;
