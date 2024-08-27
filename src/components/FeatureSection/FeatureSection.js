import { useProductContext } from "../../context/productContext";
import Featurelayout from "../FeatureLayout/Featurelayout";
import "./FeatureSection.css";

const FeatureSection = () => {
  const { isLoading, featureProduct } = useProductContext();

  if (isLoading) {
    return <div className="loading">Loading please wait... </div>;
  }

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
          {featureProduct.map((curElem) => {
            return <Featurelayout key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
