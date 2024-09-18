import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const MenuFullscreen = ({ logo, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full">
      {/* DESKTOP & TABLET NAVBAR */}
      <nav className="flex items-center justify-between px-4 py-4 bg-teal-700 shadow-md w-full fixed top-0 z-40 md:px-8 lg:px-16">
        {/* LOGO */}
        <div className="text-2xl font-bold">{logo}</div>

        {/* MENU ITEMS FOR DESKTOP */}
        <ul className="hidden space-x-8 text-xl font-medium md:flex">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-white font-bold hover:text-gray-900">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* HAMBURGER ICON FOR MOBILE */}
        <div className="flex md:hidden">
          <FiMenu onClick={toggleMenu} className="text-3xl font-bold" />
        </div>
      </nav>

      {/* MOBILE MENU FULLSCREEN OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black">
          {/* CLOSE BUTTON */}
          <FiX onClick={toggleMenu} className="text-3xl absolute top-6 right-6" />

          {/* FULLSCREEN MENU ITEMS */}
          <ul className="flex flex-col items-center justify-center space-y-8 text-xl text-white font-bold">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} onClick={toggleMenu} className="hover:text-gray-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default MenuFullscreen;
