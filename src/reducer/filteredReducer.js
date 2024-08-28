const filteredReducer = (state, action) => {
  switch (action.type) {

    case "SET_LOADING":
        return{
            ...state,
            isLoading:true
        }

    case "SET_FILTER_PRODUCTS":
        return{
            ...state,
            isLoading:false,
            filter_products: [...action.payload],
            allProducts: [...action.payload],
        }

    case "SET_GRID_VIEW":
        return{
            ...state,
            isGridview:true
        }

    case "SET_LIST_VIEW":
        return{
            ...state,
            isGridview:false
        }

    default:
      return state;
  }
};

export default filteredReducer
