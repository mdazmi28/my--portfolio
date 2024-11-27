// import React from 'react';
// import React from 'react';
const jobData = [
    {
      companyName: "G- lAn",
      position: "Software Engineer",
      startDate: "2022-07-01",
      endDate: "2024-11-01",
    },
    {
      companyName: "ffdffdsaftudio",
      position: "Junior SQA Engineer",
      startDate: "2021-02-15",
      endDate: "2022-06-30",
    },
    {
      companyName: "fwfqffqffwqf",
      position: "Team Lead",
      startDate: "2020-01-01",
      endDate: "2021-01-31",
    },
  ];

const EducationProfile = () => {
    const reversedJobData = [...jobData].reverse();
    return (
        <div className="flex flex-col gap-4">
            {reversedJobData.map((item, index) => ( // Fix argument order and ensure JSX is returned
                <div
                className="bg-gradient-to-r from-gray-400 to-blue-400 rounded-lg shadow-lg py-4 px-4 text-white"
                key={index}
              >
                    <h1 className="font-bold text-2xl">{item.companyName}</h1>
          <h1 className="text-xl">{item.position}</h1>
          <h1 className="text-lg">{item.startDate} - {item.endDate}</h1>
                </div>
            ))}
        </div>
    );
};

export default EducationProfile;