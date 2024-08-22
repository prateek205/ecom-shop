import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://prateek205.github.io/allProducts.json"

const initialState = {
    isLoading: false,
    isError: false,
    allProducts: [],
    featureProduct: [],
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProduct = async(url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url);
            const allProducts = await res.data;
            console.log(allProducts);
            dispatch({type:"SET_API_DATA", payload: allProducts})
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
