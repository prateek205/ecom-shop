import React from 'react'
import "./HeroSection.css";
import HeroContainer from '../HeroContainer/HeroContainer';
import FeatureSection from '../FeatureSection/FeatureSection';
import ServiceSection from '../ServiceSection/ServiceSection';

const HeroSection = () => {

  const myData = {
    title : "Mobile World"
  }

  return (
    <>
      <div className="heroSection_layout">
          <HeroContainer Data={myData}/>
          <FeatureSection/>
          <ServiceSection/>
      </div>
    </>
  )
}

export default HeroSection