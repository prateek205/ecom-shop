import React from "react";
import "./Products.css";
import Filtersection from "../Filtersection/Filtersection";
import Sortsection from "../Sortsection/Sortsection";
import MainProducts from "../MainProducts/MainProducts";
import { useAuth0 } from "@auth0/auth0-react";

const Products = () => {

  const {loginWithRedirect, isAuthenticated} = useAuth0()
  
  if(!isAuthenticated){
    loginWithRedirect()
  }
  return (
    <>
      <div className="productscontainer">
        <div className="products-filter">
          <Filtersection />
        </div>

        <div className="products-sort--view">
          <div className="products-sort">
            <Sortsection />
          </div>
          <div className="products-view">
            <MainProducts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
