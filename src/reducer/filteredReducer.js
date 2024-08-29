const filteredReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        filter_products: [...action.payload],
        allProducts: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        isGridView: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        isGridView: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;

      const { filter_products, sortingValue } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sortingValue === "Price -- Low to High") {
          return a.price - b.price;
        }

        if (sortingValue === "Price -- High to Low") {
          return b.price - a.price;
        }

        if (sortingValue === "A to Z") {
          return a.title.localeCompare(b.title);
        }

        if (sortingValue === "Z to A") {
          return b.title.localeCompare(a.title);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);

      return {
        ...state,
        filter_products: newSortData,
      };
    default:
      return state;
  }
};

export default filteredReducer;
