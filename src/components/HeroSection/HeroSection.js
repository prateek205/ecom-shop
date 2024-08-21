import React from 'react'
import "./HeroSection.css";
import HeroContainer from '../HeroContainer/HeroContainer';
// import FeatureSection from '../FeatureSection/FeatureSection';
import ServiceSection from '../ServiceSection/ServiceSection';

const HeroSection = () => {
  return (
    <>
      <div className="heroSection_layout">
          <HeroContainer/>
          {/* <FeatureSection/> */}
          <ServiceSection/>
      </div>
    </>
  )
}

export default HeroSection