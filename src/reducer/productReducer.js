const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const filterData = action.payload.filter((curElem) => {
        return curElem.features === true;
      });
      return {
        ...state,
        isLoading: false,
        allProducts: action.payload,
        featureProduct: filterData,
      };

    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
