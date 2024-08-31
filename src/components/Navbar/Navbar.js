import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

const Navbar = () => {

  const {total_item} = useCartContext()
  return (
    <>
      <div className="navbar-section">
        <div className="navbar-logo">
          <NavLink to={"/"}>
            <h1>E-Commerce</h1>
          </NavLink>
        </div>

        <div className="navbar-list">
          <ul>
            <Link to={"/about"}>
              <li>
                <p>About</p>
              </li>
            </Link>
          </ul>

          <ul>
            <Link to={"/product"}>
              <li>
                <p> Product </p>
              </li>
            </Link>
          </ul>

          <ul>
            <Link to={"/sign-up"}>
              <li>
                <p> Sign-Up </p>
              </li>
            </Link>
          </ul>

          <ul>
            <Link to={"/cart"}>
              <li className="count">
                <i className="fas fa-shopping-cart"><span>{total_item}</span> </i>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
