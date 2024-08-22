import { useProductContext } from "../../context/productContext";
import Productlayout from "../ProductLayout/Productlayout";
import "./FeatureSection.css";

const FeatureSection = () => {
  const { isLoading, featureProduct } = useProductContext();

  if (isLoading) {
    return <div>.... loading</div>;
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
            return <Productlayout key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
