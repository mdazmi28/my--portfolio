const socialLinks = [
    { name: "Github", image: "../../assets/images/HeroSectionImage.jpg", link: "https://github.com/mdazmi28" },
    { name: "LinkedIn",image:"../../assets/images/HeroSectionImage.jpg", link: "https://www.linkedin.com/in/mdazmi28/" },
  ];
  
  const SocialLinks = () => {
    return (
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 justify-center items-center gap-4">
          {
            socialLinks.map((item, index) => (
              <div className="w-7 h-5 bg-red-500" key={index}>
                <a 
                href={item.link} 
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security feature when opening in new tab
                
              >
                <div className="flex gap-4">
                <img src={item.image}/>
                  <h1>{item.name}</h1>
                </div>
              </a>
              </div>
            ))
          }
        </div>
      </div>
    );
  };
  export default SocialLinks;
  