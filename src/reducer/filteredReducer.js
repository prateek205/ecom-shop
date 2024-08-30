const filteredReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_PRODUCTS":
      /* 1st Method */
      let priceArray = action.payload.map((curElem) => curElem.price);

      //   console.log (Math.max.apply(null, priceArray));

      /* 2nd Method*/
      // let maxPrice = priceArray.reduce((initialVal, curVal)=>
      //     Math.max(initialVal, curVal), 0
      // )
      // console.log(maxPrice);

      /* 3rd Method*/
      let maxPrice = Math.max(...priceArray);
      console.log(maxPrice);

      return {
        ...state,
        filter_products: [...action.payload],
        allProducts: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
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

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "UPDATE_FILTER_PRODUCT":
      let { allProducts } = state;
      let tempFilterProduct = [...allProducts];

      const { text, brand, price } = state.filters;

      /* Search Inputbar */
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.title.toLowerCase().includes(text);
        });
      }

      /* Brand Filter */
      if (brand !== "All") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.brand === brand;
        });
      }

      /* Price Filter */
      if (price) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          brand: "All",
          maxPrice: 0,
          price: state.filters.maxPrice,
          minPrice: state.filters.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default filteredReducer;
