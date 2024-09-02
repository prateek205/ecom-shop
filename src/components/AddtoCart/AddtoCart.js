import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Toggle from "../Toggle/Toggle";
import { useCartContext } from "../../context/cartContext";
import { useAuth0 } from "@auth0/auth0-react";

const AddtoCart = ({ items }) => {
  const { id } = items;

  const {loginWithRedirect, isAuthenticated} = useAuth0()
  
  const { AddtoCart } = useCartContext();

  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10);
  };

  if(!isAuthenticated){
    loginWithRedirect()
  }

  return (
    <>
      <div className="addbtn">
        <NavLink to="/cart" onClick={() => AddtoCart(id, quantity, items)}>
          <button>Add to Cart</button>
        </NavLink>
      </div>

      <div className="addbtn">
        <Toggle
          quantity={quantity}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>

      <div className="addbtn">
        <button>Buy Now</button>
      </div>
    </>
  );
};

export default AddtoCart;
