import { useState, useEffect, useRef } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility
  const menuRef = useRef(null); // Reference to the menu container

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Close the menu if click is outside
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef}>
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="p-2 bg-gray-800 text-white rounded-md fixed top-4 left-4 z-50"
      >
        {/* Hamburger Lines */}
        <div className="space-y-1">
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 left-4 bg-white shadow-md rounded-lg w-48 p-4 z-40">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home" className="text-gray-700 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-700 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
