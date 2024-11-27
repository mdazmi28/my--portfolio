// Correctly import the images
import git from "../assets/images/git.png";   // Ensure the correct extension
import linked from "../assets/images/linked.png";  // Ensure the correct extension

const socialLinks = [
    { name: "Github", image: git, link: "https://github.com/mdazmi28" },
    { name: "LinkedIn", image: linked, link: "https://www.linkedin.com/in/mdazmi28/" },
];

const SocialLinks = () => {
  return (
    <div className="px-3">
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-4">
      {socialLinks.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer"> {/* Use <a> tag for external links */}
          <div className="w-full h-[80px] bg-blue-500 rounded-xl flex flex-row justify-center items-center p-4 gap-3 hover:bg-blue-400">
            <img src={item.image} alt={item.name} className="w-5 h-5 md:w-12 md:h-12" />
            <h1 className="text-white">{item.name}</h1>
          </div>
        </a>
      ))}
    </div>

    </div>
  );
};

export default SocialLinks;
