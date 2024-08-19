import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
            <Link to={"/"}>
              <li>
                <p> Home </p>
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
              <li>
                <p> Cart </p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
