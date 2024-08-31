import React from "react";
import "./CartSection.css";
import { useCartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import Scrollbars from "react-custom-scrollbars-2";
import FormatPrice from "../../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const CartSection = () => {
  const { cart, ClearAll, total_price, shipping_fees } = useCartContext();

  // console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Cart Empty...</h2>
        <i className="fas fa-shopping-cart"></i>
        <NavLink to="/product">
          <button>Shop Now</button>
        </NavLink>
      </div>
    );
  }

  return (
    <>
      <div className="cart-sections">
        <div className="cart-list">
          <p>Items</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Sub-Total</p>
          <p>Remove</p>
        </div>

        <hr />

        <div className="cart-item-layout">
          <Scrollbars>
            {cart.map((curElem) => {
              return (
                <>
                  <CartItem key={curElem.id} {...curElem} />
                </>
              );
            })}
          </Scrollbars>
        </div>

        <hr />

        <div className="cart-btn-section">
          <div className="cart-shopping-btn">
            <NavLink to="/product">
              <button>Continue Shopping</button>
            </NavLink>
          </div>
          <div className="cart-clear-btn">
            <button onClick={ClearAll} className="remove-btn">
              Clear All{" "}
            </button>
          </div>
        </div>

        <hr />

        <div className="cart-price-section">
          <div className="cart-subtotal-section">
            <p>Sub-Total</p>
            <p>
              <FormatPrice price={total_price}/>
            </p>
          </div>

          <div className="cart-shipping-section">
            <p>Shipping</p>
            <p><FormatPrice price={shipping_fees}/></p>
          </div>

          <hr />

          <div className="cart-total-section">
            <p>Total Amount: </p>
            <p><FormatPrice price={shipping_fees + total_price}/></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
