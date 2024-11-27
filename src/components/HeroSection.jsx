// import React from 'react';

import HeroImage from "./subComponents/HeroImage";
import TypingBio from "./subComponents/TypingBio";

const HeroSection = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen gap-5 justify-center items-center">
            {/* Hero Image */}
            <div className="flex justify-center items-center">
                <HeroImage />
            </div>

            {/* Typing Bio */}
            <div className="flex justify-center items-center">
                <TypingBio />
            </div>
        </div>
    );
};

export default HeroSection;
