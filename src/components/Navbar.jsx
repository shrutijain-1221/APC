import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.webp';
import { NavLink } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 w-full h-[80px] px-20 md:px-32 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className='flex items-center justify-between w-full h-full'>
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="h-16" />
          </div>

          {/* Desktop Links */}
          <ul className='hidden md:flex gap-8 font-medium md:items-center'>
              <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-[#a3d9b1] pb-1 border-b-2 ${
                    isActive ? 'border-[#a3d9b1]' : 'border-transparent'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appreal"
                className={({ isActive }) =>
                  `hover:text-[#a3d9b1] pb-1 border-b-2 ${
                    isActive ? 'border-[#a3d9b1]' : 'border-transparent'
                  }`
                }
              >
                Apprael
              </NavLink>
            </li>

            <li className="relative group">
              <NavLink
                to="/accessories"
                className={({ isActive }) =>
                  `hover:text-[#a3d9b1] pb-1 border-b-2 ${
                    isActive ? 'border-[#a3d9b1]' : 'border-transparent'
                  }`
                }
              >
                Accessories
              </NavLink>

              {/* Dropdown */}
              <div className="absolute font-['Poppins'] top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[800px] p-8 flex gap-6 text-lg">
                {/* Hair Accessories */}
                <div>
                  <h4 className="font-semibold text-md text-[#232323] mb-2">Hair Accessories</h4>
                  <ul className="space-y-1 pl-2">
                    <li><NavLink to="#">Headbands</NavLink></li>
                    <li><NavLink to="#">Scrunchies</NavLink></li>
                    <li><NavLink to="#">Alligator Bows</NavLink></li>
                    <li><NavLink to="#">Hair Clips/Pins</NavLink></li>
                    <li><NavLink to="#">Claw Clips</NavLink></li>
                    <li><NavLink to="#">Mickey Ears</NavLink></li>
                  </ul>
                </div>

                {/* Jewelry & Small Accessories */}
                <div>
                  <h4 className="font-semibold text-[#232323] mb-2">Jewelry & Small Accessories</h4>
                  <ul className="space-y-1 pl-2">
                    <li><NavLink to="#">Earrings</NavLink></li>
                    <li><NavLink to="#">Brooches</NavLink></li>
                    <li><NavLink to="#">Key Circle/Chains</NavLink></li>
                    <li><NavLink to="#">Wristlets</NavLink></li>
                    <li><NavLink to="#">Lanyards</NavLink></li>
                    <li><NavLink to="#">Handcuffs</NavLink></li>
                  </ul>
                </div>

                {/* Bags & Storage */}
                <div>
                  <h4 className="font-semibold text-[#232323] mb-2">Bags & Storage</h4>
                  <ul className="space-y-1 pl-2">
                    <li><NavLink to="#">Tote Bags</NavLink></li>
                    <li><NavLink to="#">Coin Purses</NavLink></li>
                    <li><NavLink to="#">Mobile Purses</NavLink></li>
                    <li><NavLink to="#">Clutches</NavLink></li>
                    <li><NavLink to="#">Box Bags</NavLink></li>
                    <li><NavLink to="#">Stadium Bag Straps</NavLink></li>
                  </ul>
                </div>

                {/* Miscellaneous */}
                <div>
                  <h4 className="font-semibold text-[#232323] mb-2">Miscellaneous</h4>
                  <ul className="space-y-1 pl-2">
                    <li><NavLink to="#">Eye Masks</NavLink></li>
                    <li><NavLink to="#">Coasters</NavLink></li>
                    <li><NavLink to="#">Trucker Hats</NavLink></li>
                    <li><NavLink to="#">Wreath Sash</NavLink></li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <NavLink
                to="/trending"
                className={({ isActive }) =>
                  `hover:text-[#a3d9b1] pb-1 border-b-2 ${
                    isActive ? 'border-[#a3d9b1]' : 'border-transparent'
                  }`
                }
              >
                Trending
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  `hover:text-[#a3d9b1] pb-1 border-b-2 ${
                    isActive ? 'border-[#a3d9b1]' : 'border-transparent'
                  }`
                }
              >
                About us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `hover:text-[#a3d9b1] pb-1 border-b-2 ${
                    isActive ? 'border-[#a3d9b1]' : 'border-transparent'
                  }`
                }
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/testimonals"
                className={({ isActive }) =>
                  `hover:text-[#a3d9b1] pb-1 border-b-2 ${
                    isActive ? 'border-[#a3d9b1]' : 'border-transparent'
                  }`
                }
              >
                Testimonals
              </NavLink>
            </li>

            <NavLink
              to="/appointment"
              className="bg-[#a3d9b1] px-5 py-2 rounded-md text-white"
            >
              Book an Appointment
            </NavLink>
          </ul>

          {/* Mobile Menu Icon */}
          <div className='md:hidden text-3xl cursor-pointer'>
            <RiMenu3Line onClick={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              exit={{ x: '100%' }}
              transition={{ duration: 0.5 }}
              className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col px-20 py-8"
            >
              <div className="absolute px-20 right-6 w-6 h-6 cursor-pointer" onClick={toggleMenu}>
                {/* Line 1 */}
                <motion.div
                  initial={{ rotate: 0, y: -6 }}
                  animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-8 h-[2px] bg-black"
                />
                {/* Line 2 */}
                <motion.div
                  initial={{ rotate: 0, y: 6 }}
                  animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-8 h-[2px] bg-black"
                />
              </div>

              <div className='flex flex-col items-center gap-8 mt-10 font-medium'>
                {[
                  {to:"/",label:"Home"},
                  { to: "/appreal", label: "Apprael" },
                  { to: "/accessories", label: "Accessories" },
                  { to: "/trending", label: "Trending" },
                  { to: "/aboutus", label: "About us" },
                  { to: "/blogs", label: "Blogs" },
                  { to: "/testimonals", label: "Testimonals" },
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
