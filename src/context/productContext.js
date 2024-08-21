import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import productReducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://prateek205.github.io/allProducts.json"

const initialState={
    isLoading: false,
    isError: false,
    products: [],
    featureProduct: [],
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState);

    const getProduct = async(url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url);
            const products = await res.data;
            console.log(products);
            dispatch({type:'SET_API_DATA', payload: products})
        } catch (error) {
            dispatch({type:"API_ERROR"})
        }
    }

    useEffect(()=>{
        getProduct(API)
    },[])



  return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>;
};

const useProductContext = () =>{
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProductContext };
