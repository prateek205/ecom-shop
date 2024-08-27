import React from "react";
import "./PageNavigation.css";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <>
      <NavLink to="/">Home</NavLink> / {title}
    </>
  );
};

export default PageNavigation;
