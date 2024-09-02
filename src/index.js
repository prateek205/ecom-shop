import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { AppProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/filteredContext";
import { CartContextProvider } from "./context/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-o02u3ziel40ip2oe.us.auth0.com"
    clientId="Lnl3zK0v2A0cEJfPsLISusWpoAeF8hh7"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
