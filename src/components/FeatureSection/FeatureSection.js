import React from "react";
import "./FeatureSection.css";

const FeatureSection = () => {
  return (
    <>
      <div className="product_section">
        <div className="product_container">
          <div className="product_heading">
            <p>Best Features</p>
            <h1>Smartphone</h1>
          </div>
        </div>
        <div className="product_list">
          <div className="product_card">
            <div className="product_image">
              <img
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/9/n/-original-imagtc6fyrstd4jm.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="product_brand">
              <div className="product_brand_name">
                <h4>Apple</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
