import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { AppProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filteredContext";
import { CartContextProvider } from "./context/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <FilterContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
    </FilterContextProvider>
  </AppProvider>
);
