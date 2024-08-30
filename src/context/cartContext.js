import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: {},
    total_price: {},
    shipping_fees: 5000,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddtoCart = (id, price, items) => {
    dispatch({type:"ADD_TO_CART", payload: id, price, items})
  }

  return (
    <CartContext.Provider value={{ ...state, AddtoCart }}>{children}</CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartContextProvider, useCartContext };
