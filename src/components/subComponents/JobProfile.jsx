// import React from 'react';
const jobData = [
  {
    companyName: "BDCOM",
    position: "Research and Development Engineer",
    startDate: "Feb 2023",
    endDate: "July 2023",
    link: "/"
  },
  {
    companyName: "Lead Soft Bangladesh Limited",
    position: "Junior Software Engineer",
    startDate: "Feb 2024",
    endDate: "June 2024",
  },
  {
    companyName: "Fintech Hub Limited",
    position: "Junior Software Engineer",
    startDate: "July 2024",
    endDate: "Present",
  },
];

const JobProfile = () => {
  const reversedJobData = [...jobData].reverse();
  return (
    <div className="flex flex-col gap-4">
      {reversedJobData.map((item, index) => ( // Fix argument order and ensure JSX is returned
        <div
          className="bg-gradient-to-r from-blue-400 to-gray-400 rounded-lg shadow-lg py-4 px-4 text-white"
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
export default JobProfile;