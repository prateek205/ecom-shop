import React from 'react'
import "./HeroSection.css";
import HeroContainer from '../HeroContainer/HeroContainer';

const HeroSection = () => {
  return (
    <>
      <div className="heroSection_layout">
        <div className="introduction_container">
          <HeroContainer/>
        </div>
      </div>
    </>
  )
}

export default HeroSection