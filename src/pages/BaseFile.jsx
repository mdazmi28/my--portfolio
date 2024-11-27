// import React from 'react';

import ExperienceProfile from "../components/ExperienceProfile";
import HeroSection from "../components/HeroSection";
import SocialLinks from "../components/SocialLinks";


const BaseFile = () => {
  return (
    <div className="container mx-auto px-2 md:px-4">
      <div className="">
        <HeroSection/>
        <SocialLinks/>
        <ExperienceProfile/>
      </div>
     
    </div>
  );
};

export default BaseFile;
