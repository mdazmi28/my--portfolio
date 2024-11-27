// import React from 'react';
// import React from 'react';
const jobData = [
    {
      companyName: "ThoughtBridge Consortium",
      position: "Software Engineer",
      startDate: "2022-07-01",
      endDate: "2024-11-01",
    },
    {
      companyName: "Kite Games Studio",
      position: "Junior SQA Engineer",
      startDate: "2021-02-15",
      endDate: "2022-06-30",
    },
    {
      companyName: "Super Tel Call Center",
      position: "Team Lead",
      startDate: "2020-01-01",
      endDate: "2021-01-31",
    },
  ];

const EducationProfile = () => {
    return (
        <div>
            {jobData.map((item, index) => ( // Fix argument order and ensure JSX is returned
                <div key={index}> {/* Always use a key prop in lists */}
                    <h1>{item.companyName}</h1>
                </div>
            ))}
            
        </div>
    );
};

export default EducationProfile;