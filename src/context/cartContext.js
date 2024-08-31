import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let newCartItem = localStorage.getItem("PrateekCart")
  // eslint-disable-next-line
  if (newCartItem==[]){
    return []
  }else {
    return JSON.parse(newCartItem)
  }
}

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fees: 50,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddtoCart = (id, quantity, items) => {
    dispatch({type:"ADD_TO_CART", payload:{id, quantity, items}})
  }

  const setDecrease = (id) => {
    dispatch({type:"SET_DECREASE", payload:id})
  }

  const setIncrease = (id) => {
    dispatch({type:"SET_INCREASE", payload:id})
  }

  const RemoveItem = (id) => {
    dispatch({type:"REMOVE", payload:id})
  }

  const ClearAll = () => {
    dispatch({type: "CLEAR_ALL"})
  }

  useEffect(()=>{
    // dispatch({type:"UPDATE_CART_VALUE"})
    // dispatch({type:"TOTAL_PRICE"})
    dispatch({type:"CART_ITEM_PRICE_TOTAL"})
    localStorage.setItem("PrateekCart", JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider value={{ ...state, AddtoCart, RemoveItem, ClearAll, setDecrease, setIncrease }}>{children}</CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartContextProvider, useCartContext };
