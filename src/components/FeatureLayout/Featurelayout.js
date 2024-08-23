import React from "react";
import "./FeatureLayout.css";
import {NavLink} from "react-router-dom"

const Featurelayout = (curElem) => {
  const { id, imgSrc, title } = curElem
  return (
    <>
      <NavLink to={`/singleproduct/${id}`}>
        <div className="product_list">
          <div className="product_card">
            <div className="product_image">
              <img src={imgSrc} alt="" />
            </div>
            <div className="product_brand">
              <div className="product_brand_name">
                <h4>{title}</h4>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default Featurelayout;
