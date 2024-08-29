import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filteredReducer";

const FilteredContext = createContext();

const initialState = {
  isLoading: false,
  filter_products: [],
  allProducts: [],
  isGridView: true,
  sortingValue: "Price -- Low to High"
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  /* GRID_VIEW -- LIST_VIEW SECTION */
  const setGridView = () => {
    return dispatch({type:"SET_GRID_VIEW"})
  }
  
  const setListView = () => {
    return dispatch({type:"SET_LIST_VIEW"})
  }

  /* SORTING_FUNCTION */
  const sorting = (e) => {
    let userValue = e.target.value
   dispatch({type:"GET_SORT_VALUE", payload: userValue})
  }

  useEffect(()=>{
    dispatch({type:"SORTING_PRODUCTS"})
    // eslint-disable-next-line
  },[state.sortingValue])

  /* FILTER_PRODUCTS */
  useEffect(() => {
    dispatch({ type: "SET_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilteredContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
      {children}
    </FilteredContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilteredContext);
};
