import React from "react";
import "./HeroContainer.css";
import { NavLink } from "react-router-dom";

const HeroContainer = ({ Data }) => {
  const { title } = Data;

  return (
    <>
      <div className="introduction_container">
        <div className="introcontainer">
          <p>Welcome to</p>
          <h1>{title}</h1>
          <p>Mobile Shopping Store</p>
          <NavLink to={"/product"}>
            <button>Shop Now</button>
          </NavLink>
        </div>
        <div className="introimage">
          <img
            src="https://img.freepik.com/premium-photo/modern-smartphone-shop-with-various-new-phones-display_1235831-53588.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724025600&semt=ais_hybrid"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default HeroContainer;
