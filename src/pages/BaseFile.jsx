// import React from 'react';

import ExperienceProfile from "../components/ExperienceProfile";
import HeroSection from "../components/HeroSection";
import SocialLinks from "../components/SocialLinks";


const BaseFile = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        <HeroSection/>
        <SocialLinks/>
        <ExperienceProfile/>
      </div>
     
    </div>
  );
};

export default BaseFile;
