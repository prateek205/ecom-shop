import React from "react";
import "./Sortsection.css";
import { useFilterContext } from "../../context/filteredContext";

const Sortsection = () => {
  const { filter_products, isGridView, setGridView, setListView } =
    useFilterContext();

  return (
    <>
      <div className="sort-section">
        <div className="sort-grid--list-btn">
          <button
            className={isGridView ? "active sort-btn" : "sort-btn"}
            onClick={setGridView}
          >
            <i className="fas fa-grip"></i>
          </button>
          <button
            className={!isGridView ? "active sort-btn" : "sort-btn"}
            onClick={setListView}
          >
            <i className="fas fa-list"></i>
          </button>
        </div>

        <div className="sort--counter">
          <p>Showing : {filter_products.length} products </p>
        </div>

        <div className="sort--prices">
          <select name="" id="">
            <option disabled>Feature</option>
            <option value="All">All</option>
            <option value="A to Z">A to Z</option>
            <option value="Z to A">Z to A</option>
            <option value="Price -- High to Low">Price -- High to Low</option>
            <option value="Price -- Low to High">Price -- Low to High</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Sortsection;
