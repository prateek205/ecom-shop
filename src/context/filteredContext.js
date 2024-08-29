import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filteredReducer";

const FilteredContext = createContext();

const initialState = {
  isLoading: false,
  filter_products: [],
  allProducts: [],
  isGridView: true,
  sortingValue: "Price -- Low to High",
  filters: {
    text: "",
    brand: "All",
    maxPrice:0,
    price:0,
    minPrice:8999,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  /* GRID_VIEW -- LIST_VIEW SECTION */
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  /* SORTING_FUNCTION */
  const sorting = (e) => {
    let userValue = e.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  /* CLEAR_FILTERS*/
  const clearFilter = () => {
    dispatch({type:"CLEAR_FILTER"})
  }

  useEffect(() => {
    dispatch({ type: "UPDATE_FILTER_PRODUCT" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sortingValue, state.filters]);

  /* UPDATE_FILTER_PRODUCTS */
  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  
  
  /* FILTER_PRODUCTS */
  useEffect(() => {
    dispatch({ type: "SET_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilteredContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilter }}
    >
      {children}
    </FilteredContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilteredContext);
};
