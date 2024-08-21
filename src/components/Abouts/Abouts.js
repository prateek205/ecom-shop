import React from "react";
import "./About.css";
import HeroContainer from "../HeroContainer/HeroContainer";

const Abouts = () => {

    const myData = {
        title: "E-Commerce"
    }

  return (
    <>
      <div className="heroSection_layout">
        <HeroContainer Data={myData}/>
      </div>
    </>
  );
};

export default Abouts;
