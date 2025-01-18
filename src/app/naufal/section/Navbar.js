'use client' // 👈 use it here
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute flex flex-row w-screen top-0 px-10 sm:px-20 py-6 sm:py-10 items-center text-white z-10">
      {/* Logo Section */}
      <div className="absolute">
        <span className="text-xl sm:text-3xl font-segoe_ui_bold">Norcana._</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-row gap-4 sm:gap-8 justify-center mx-auto font-roboto_mono">
        <div className="column-2">
          <div className="text-right text-sm sm:text-base font-regular">01</div>
          <div className="text-base sm:text-lg font-medium">// home</div>
        </div>
        <div className="column-2">
          <div className="text-right text-sm sm:text-base font-regular">02</div>
          <div className="text-base sm:text-lg font-medium">// profile</div>
        </div>
        <div className="column-2">
          <div className="text-right text-sm sm:text-base font-regular">03</div>
          <div className="text-base sm:text-lg font-medium">// work</div>
        </div>
        <div className="column-2">
          <div className="text-right text-sm sm:text-base font-regular">04</div>
          <div className="text-base sm:text-lg font-medium">// experience</div>
        </div>
        <div className="column-2">
          <div className="text-right text-sm sm:text-base font-regular">05</div>
          <div className="text-base sm:text-lg font-medium">// contact</div>
        </div>
      </div>

      {/* Burger Menu */}
      <div className="sm:hidden relative flex ml-auto">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-12 right-0 bg-[#241D41] rounded-lg shadow-lg text-sm w-48 p-4 z-20">
            <div className="mb-2">Home</div>
            <div className="mb-2">Profile</div>
            <div className="mb-2">Work</div>
            <div className="mb-2">Experience</div>
            <div>Contact</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
