import React from "react";
import "./CartItem.css";
import FormatPrice from "../../Helpers/FormatPrice";
import Toggle from "../Toggle/Toggle";
import { useCartContext } from "../../context/cartContext";

const CartItem = ({ id, imgSrc, title, price, quantity }) => {

    const {RemoveItem, setDecrease, setIncrease} = useCartContext()

//   const setDecrease = () => {
//     quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
//   };

//   const setIncrease = () => {
//     quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10);
//   };

  return (
    <>
      <div className="cart-items">
        <div className="cart-list-items">
          <img src={imgSrc} alt="" />
          <p>{title}</p>
        </div>

        <div className="cart-list-price">
          <p>
            <FormatPrice price={price} />
          </p>
        </div>

        <div className="cart-list-counter">
          <Toggle
            quantity={quantity}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
          />
        </div>

        <div className="cart-list-subtotal">
          <p><FormatPrice price = {price * quantity}/></p>
        </div>

        <div className="cart-list-remove">
          <i className="fas fa-trash" onClick={()=> RemoveItem(id)}></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
