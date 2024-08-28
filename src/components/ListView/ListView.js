import React from "react";
import "./ListView.css";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <>
      <div className="listview--section">
        {products.map((curElem) => {
          const {
            id,
            imgSrc,
            title,
            description1,
            description2,
            description3,
            description4,
            description5,
            price,
          } = curElem;
          return (
            <>
              <NavLink to={`/singleproduct/${id}`}>
                <div className="listview-layout">
                  <div className="listview-image">
                    <img src={imgSrc} alt="" />
                  </div>

                  <div className="listview-detail">
                    <div className="listview-title">
                      <p>{title}</p>
                    </div>

                    <div className="listview-description">
                      <ul>
                        <li>{description1}</li>
                        <li>{description2}</li>
                        <li>{description3}</li>
                        <li>{description4}</li>
                        <li>{description5}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="listview-price">
                    <p><i className="fas fa-indian-rupee"></i> {price}</p>
                  </div>
                </div>
                <hr />
              </NavLink>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ListView;
