import React from "react";
import "./Sortsection.css";
import { useFilterContext } from "../../context/filteredContext";

const Sortsection = () => {
  const { filter_products, isGridView, setGridView, setListView, sorting } =
    useFilterContext();

  return (
    <>
      <div className="sort-section">
        {/* 1st Column Grid--List---Btn */}
        <div className="sort-grid--list-btn">
          <button
            className={isGridView ? "active sort-btn" : "sort-btn"}
            onClick={setGridView}
          >
            <i className="fas fa-grip"></i>
          </button>
          <button
            className={isGridView ? "sort-btn" : "active sort-btn"}
            onClick={setListView}
          >
            <i className="fas fa-list"></i>
          </button>
        </div>

        {/* 2nd Column Sort--Counter */}
        <div className="sort--counter">
          <p>Showing : {filter_products.length} products </p>
        </div>

        {/* 3rd Column Sort--Price-Section */}
        <div className="sort--prices">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" onClick={sorting}>
              <option disabled>Feature</option>
              <option value="All">All</option>
              <option value="A to Z">A to Z</option>
              <option value="Z to A">Z to A</option>
              <option value="Price -- Low to High">Price -- Low to High</option>
              <option value="Price -- High to Low">Price -- High to Low</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sortsection;
