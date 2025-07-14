import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';
import { NavLink, useNavigate } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkStyle = ({ isActive }) =>
    `pb-1 border-b-2 transition-all duration-200 ${
      isActive ? 'text-black border-[#a3d9b1]' : 'border-transparent text-black'
    }`;

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 w-full h-[90px] px-20 md:px-32 transition-all duration-300 bg-[#cbdac5] ${
         isScrolled ? 'shadow-sm' : '' }
        }`}
      >
        <div className='flex items-center justify-between w-full h-full'>

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="h-[76px] cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Desktop Nav */}
          <ul className='hidden md:flex gap-8 text-lg font-poppins font-normal items-center h-full'>
            <li><NavLink to="/" className={navLinkStyle}>Apparels</NavLink></li>

            {/* Accessories Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <NavLink to="/accessories" className={navLinkStyle}>Accessories</NavLink>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute font-poppins top-8 -left-72 -translate-x-1/2 mt-2 bg-white shadow-lg border rounded-md z-50 w-[800px] p-8 flex gap-6 text-lg"
                  >
                    {/* Hair Accessories */}
                    <div>
                      <h4 className="font-semibold text-md text-[#232323] mb-2">Hair Accessories</h4>
                      <ul className="space-y-1 pl-2">
                        <li><NavLink to="/accessories/headbands" onClick={() => setDropdownOpen(false)}>Headbands</NavLink></li>
                        <li><NavLink to="/accessories/scrunchies" onClick={() => setDropdownOpen(false)}>Scrunchies</NavLink></li>
                        <li><NavLink to="/accessories/alligator-bows" onClick={() => setDropdownOpen(false)}>Alligator Bows</NavLink></li>
                        <li><NavLink to="/accessories/hair-clips-pins" onClick={() => setDropdownOpen(false)}>Hair Clips/Pins</NavLink></li>
                        <li><NavLink to="/accessories/claw-clips" onClick={() => setDropdownOpen(false)}>Claw Clips</NavLink></li>
                        <li><NavLink to="/accessories/mickey-ears" onClick={() => setDropdownOpen(false)}>Mickey Ears</NavLink></li>
                      </ul>
                    </div>

                    {/* Jewelry & Small Accessories */}
                    <div>
                      <h4 className="font-semibold text-[#232323] mb-2">Jewelry & Small Accessories</h4>
                      <ul className="space-y-1 pl-2">
                        <li><NavLink to="/accessories/earrings" onClick={() => setDropdownOpen(false)}>Earrings</NavLink></li>
                        <li><NavLink to="/accessories/brooches" onClick={() => setDropdownOpen(false)}>Brooches</NavLink></li>
                        <li><NavLink to="/accessories/key-circle-chains" onClick={() => setDropdownOpen(false)}>Key Circle/Chains</NavLink></li>
                        <li><NavLink to="/accessories/wristlets" onClick={() => setDropdownOpen(false)}>Wristlets</NavLink></li>
                        <li><NavLink to="/accessories/lanyards" onClick={() => setDropdownOpen(false)}>Lanyards</NavLink></li>
                        <li><NavLink to="/accessories/handcuffs" onClick={() => setDropdownOpen(false)}>Handcuffs</NavLink></li>
                      </ul>
                    </div>

                    {/* Bags & Storage */}
                    <div>
                      <h4 className="font-semibold text-[#232323] mb-2">Bags & Storage</h4>
                      <ul className="space-y-1 pl-2">
                        <li><NavLink to="/accessories/tote-bags" onClick={() => setDropdownOpen(false)}>Tote Bags</NavLink></li>
                        <li><NavLink to="/accessories/coin-purses" onClick={() => setDropdownOpen(false)}>Coin Purses</NavLink></li>
                        <li><NavLink to="/accessories/mobile-purses" onClick={() => setDropdownOpen(false)}>Mobile Purses</NavLink></li>
                        <li><NavLink to="/accessories/clutches" onClick={() => setDropdownOpen(false)}>Clutches</NavLink></li>
                        <li><NavLink to="/accessories/box-bags" onClick={() => setDropdownOpen(false)}>Box Bags</NavLink></li>
                        <li><NavLink to="/accessories/stadium-bag-straps" onClick={() => setDropdownOpen(false)}>Stadium Bag Straps</NavLink></li>
                      </ul>
                    </div>

                    {/* Miscellaneous */}
                    <div>
                      <h4 className="font-semibold text-[#232323] mb-2">Miscellaneous</h4>
                      <ul className="space-y-1 pl-2">
                        <li><NavLink to="/accessories/eye-masks" onClick={() => setDropdownOpen(false)}>Eye Masks</NavLink></li>
                        <li><NavLink to="/accessories/coasters" onClick={() => setDropdownOpen(false)}>Coasters</NavLink></li>
                        <li><NavLink to="/accessories/trucker-hats" onClick={() => setDropdownOpen(false)}>Trucker Hats</NavLink></li>
                        <li><NavLink to="/accessories/wreath-sash" onClick={() => setDropdownOpen(false)}>Wreath Sash</NavLink></li>
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li><NavLink to="/trending" className={navLinkStyle}>Trending</NavLink></li>
            <li><NavLink to="/aboutus" className={navLinkStyle}>About us</NavLink></li>
            <li><NavLink to="/blogs" className={navLinkStyle}>Blogs</NavLink></li>
             <li><NavLink to="/infrastructure" className={navLinkStyle}>Infrastructure</NavLink></li>
            <li><NavLink to="/testimonals" className={navLinkStyle}>Testimonals</NavLink></li>
            <li>
              <NavLink to="/contact" className="bg-black px-6 text-center py-2 rounded-md text-white">
                Book an Appointment
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className='md:hidden text-3xl cursor-pointer'>
            <RiMenu3Line onClick={toggleMenu} />
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              exit={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col px-20 py-8"
            >
              <div className="absolute px-20 right-6 w-6 h-6 cursor-pointer" onClick={toggleMenu}>
               <motion.div
    initial={{ rotate: 0, y: -6 }}
    animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
    transition={{ duration: 0.5 }}
    className="absolute w-8 h-[2px] bg-black "
  />
  {/* Line 2 */}
  <motion.div
    initial={{ rotate: 0, y: 6 }}
    animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
    transition={{ duration: 0.5 }}
    className="absolute w-8 h-[2px] bg-black "
  />
              </div>

              {/* Mobile Links */}
              <div className='flex flex-col items-center gap-8 mt-10 font-medium'>
                {[
                  { to: "/", label: "Apparels" },
                  { to: "/accessories", label: "Accessories" },
                  { to: "/trending", label: "Trending" },
                  { to: "/aboutus", label: "About us" },
                  { to: "/blogs", label: "Blogs" },
                  { to: "/testimonals", label: "Testimonals" },
                  { to: "/infrastructure", label: "Infrastructure" },
                   { to: "/faq", label: "FAQ" },
                ].map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `hover:text-[#a3d9b1] pb-1 border-b-2 ${
                        isActive ? 'border-[#a3d9b1]' : 'border-transparent'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <NavLink
                  to="/appointment"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#a3d9b1] px-5 py-2 rounded-md text-white"
                >
                  Book an Appointment
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
