import React from "react";
import "./ProductLayout.css"

const Productlayout = (curElem) => {
    const {imgSrc, title} = curElem
  return (
    <>
      <div className="product_list">
        <div className="product_card">
          <div className="product_image">
            <img
              src={imgSrc}
              alt=""
            />
          </div>
          <div className="product_brand">
            <div className="product_brand_name">
              <h4>{title}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlayout;
