// import React from 'react';

import ExperienceProfile from "../components/ExperienceProfile";
import HeroSection from "../components/HeroSection";
import SocialLinks from "../components/SocialLinks";
import HamburgerMenu from "../components/subComponents/HamburgerMenu";


const BaseFile = () => {
  return (
    <div className="relative">
      <div>
        <HamburgerMenu/>
      </div>
      <div className="flex flex-col gap-8 overflow-y-auto px-4">
        <HeroSection/>
        <SocialLinks/>
        <ExperienceProfile/>
      </div>
     
    </div>
  );
};

export default BaseFile;
