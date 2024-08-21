// import _ from "lodash"

const productReducer = (state, action) => {

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    
    case "SET_API_DATA":
        const featureData = action.payload.filter((curElem)=> curElem.features === 'true')  
        
        console.log(action.payload);
        
        return{
            ...state,
            isLoading: false,
            allProducts: action.payload,
            featureProduct: featureData,
        }


    case "SET_ERROR":
      return {
        ...state,
        isLoading: false,
        ieError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
