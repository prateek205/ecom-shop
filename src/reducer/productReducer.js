const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const filterData = action.payload.filter((curElem) => {
        // console.log(curElem.features);

        return curElem.features === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProduct: filterData,
      };

    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProducts: action.payload,
      };

    case "SINGLE_API_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        SingleApiError: true,
      };
    default:
      return state;
  }
};

export default productReducer;
