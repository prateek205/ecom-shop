
const cartReducer = (state, action) => {


  if (action.type === "ADD_TO_CART") {
    let { id, quantity, items } = action.payload;
    // console.log(items);

    

    let existingProduct = state.cart.find((curElem) => {
      return curElem.id === id;
    });
    // console.log(existingProduct);

    if (existingProduct) {
      let updateItem = state.cart.map((curElem) => {
        if (curElem.id === id) {
          let newAmt = curElem.quantity + quantity;

          if (newAmt >= curElem.max) {
            newAmt = curElem.max;
          }

          return {
            ...curElem,
            quantity: newAmt,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updateItem,
      };
    } else {
      let cartProduct;

      cartProduct = {
        id,
        quantity,
        title: items.title,
        imgSrc: items.imgSrc,
        price: items.price,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE") {
    let updateProduct = state.cart.filter((curElem) => {
      return curElem.id !== action.payload;
    });

    return {
      ...state,
      cart: updateProduct,
    };
  }

  if (action.type === "SET_DECREASE") {
    let updateProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decQuantity = curElem.quantity - 1;

        if (decQuantity <= 1) {
          decQuantity = 1;
        }

        return {
          ...curElem,
          quantity: decQuantity,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updateProduct,
    };
  }

  if (action.type === "SET_INCREASE") {
    let updateProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incQuantity = curElem.quantity + 1;

        if (incQuantity >= curElem.max) {
          incQuantity = 1;
        }

        return {
          ...curElem,
          quantity: incQuantity,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updateProduct,
    };
  }

  if (action.type === "CLEAR_ALL") {
    return {
      ...state,
      cart: [],
    };
  }

  // if (action.type === "UPDATE_CART_VALUE") {
  //   let updateCartVal = state.cart.reduce((initialVal, curElem) => {
  //     let { quantity } = curElem;

  //     initialVal = initialVal + quantity;
  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_item: updateCartVal,
  //   };
  // }

  // if (action.type === "TOTAL_PRICE") {
  //   let total_price = state.cart.reduce((initialVal, curElem) => {
  //     let { price, quantity } = curElem;

  //     initialVal = initialVal + price * quantity;
  //     return initialVal;
  //   }, 0);

  //   return {
  //     ...state,
  //     total_price,
  //   };
  // }

  if (action.type === "CART_ITEM_PRICE_TOTAL") {
  let { total_item, total_price } = state.cart.reduce(
      (accum, curElem) => {
        let { price, quantity } = curElem;

        accum.total_item += quantity;

        accum.total_price += price * quantity;

        return accum;
      },
      {
        total_item: 0,
        total_price: 0,
      }
    );

    return {
      ...state,
      total_price,
      total_item,
    }
  }
  return state;
};

export default cartReducer;
