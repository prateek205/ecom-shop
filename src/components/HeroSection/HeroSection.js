import React from 'react'
import "./HeroSection.css";
import HeroContainer from '../HeroContainer/HeroContainer';
import FeatureSection from '../FeatureSection/FeatureSection';

const HeroSection = () => {
  return (
    <>
      <div className="heroSection_layout">
          <HeroContainer/>
          <FeatureSection/>
      </div>
    </>
  )
}

export default HeroSection