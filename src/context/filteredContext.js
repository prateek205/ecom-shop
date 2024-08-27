import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filteredReducer";

const FilteredContext = createContext();

const initialState = {
  isLoading: false,
  filter_products: [],
  allProducts: [],
  isGridView: true,
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({type:"SET_GRIDVIEW"})
  }
  

  useEffect(() => {
    dispatch({ type: "SET_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilteredContext.Provider value={{ ...state, setGridView }}>
      {children}
    </FilteredContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilteredContext);
};
