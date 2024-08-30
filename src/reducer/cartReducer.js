const cartReducer = (state, action) => {
    
    if (action.type === "ADD_TO_CART"){
        let {id, price, items} = action.payload
        console.log(items);
        
    }
      return state;
  }


export default cartReducer;
