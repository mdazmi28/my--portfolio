import { useState } from 'react';  // Make sure to import useState
import JobProfile from './subComponents/JobProfile';
import EducationProfile from './subComponents/EducationProfile';

const ExperienceProfile = () => {
    const [active, setActive] = useState("Job"); // 'Job' or 'Edu' state
    return (
        <>
            <div className='flex flex-row gap-4'>
                <div
                    onClick={() => setActive("Job")}
                    className='w-1/2 flex justify-center items-center rounded-lg py-4 bg-blue-400 font-bold text-2xl text-white'>
                    Experience
                </div>
                <div
                    onClick={() => setActive("Edu")}
                    className='w-1/2 flex justify-center items-center rounded-lg py-4 bg-blue-400 font-bold text-2xl text-white'>
                    Education
                </div>
            </div>

            <div className='pt-5'>
                {active === "Job" ? <JobProfile /> : <EducationProfile />}
            </div></>

    );
};

export default ExperienceProfile;