import React from "react";
import "./GridView.css";
import Featurelayout from "../FeatureLayout/Featurelayout";

const GridView = ({ products }) => {
  // console.log(products);

  return (
    <>
      <div className="gridviewsection">
        {products.map((curElem) => {
          return <Featurelayout key={curElem.id} {...curElem} />;
        })}
      </div>
    </>
  );
};

export default GridView;
