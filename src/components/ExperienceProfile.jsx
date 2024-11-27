import  { useState } from 'react';  // Make sure to import useState
import JobProfile from './subComponents/JobProfile';
import EducationProfile from './subComponents/EducationProfile';


const ExperienceProfile = () => {
    const [active, setActive] = useState("Job"); // 'Job' or 'Edu' state

    return (
        <div className="">
            <div className="flex md:flex-row w-full gap-4">
                {/* Left Side */}
                <div className="flex justify-center items-center w-1/2">
                    <button 
                        className="btn btn-info w-full md:w-[600px]" 
                        onClick={() => setActive("Job")}  // Correctly using the setActive function
                    >
                        Experience
                    </button>
                </div>

                {/* Right Side */}
                <div className="flex justify-center items-center w-1/2">
                    <button 
                        className="btn btn-info w-full md:w-[600px]" 
                        onClick={() => setActive("Edu")}  // Correctly using the setActive function
                    >
                        Education
                    </button>
                </div>
            </div>

            {/* Conditionally render JobProfile or EducationProfile based on 'active' state */}
            <div className='pt-5'>
                {active === "Job" ? <JobProfile /> : <EducationProfile />}
            </div>
        </div>
    );
};

export default ExperienceProfile;
