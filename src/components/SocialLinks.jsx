import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const socialLinks = [
  { name: "Github", image: <FaGithub className="h-12 w-12" />, link: "https://github.com/mdazmi28" },
  { name: "LinkedIn", image: <FaLinkedin className="h-12 w-12" />, link: "https://github.com/mdazmi28" },
  { name: "Mail", image: <CiMail className="h-12 w-12" />, link: "https://github.com/mdazmi28" },
  { name: "Mail", image: <CiMail className="h-12 w-12" />, link: "https://github.com/mdazmi28" },
  
];

const SocialLinks = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {socialLinks.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer"> {/* Use <a> tag for external links */}
          <div className="bg-blue-300 py-5 rounded-lg pl-4 flex justify-center items-center gap-5">
            {/* <div> <img src={item.image} alt={item.name} className="w-5 h-5 md:w-12 md:h-12" /></div> */}
            <div className="">{item.image}</div>
            <div className="font-bold">{item.name}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
