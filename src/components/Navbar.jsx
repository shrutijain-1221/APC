import React, { useState } from 'react'
import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { motion,AnimatePresence } from "framer-motion";
const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false)
    const toggleMenu=()=>setMenuOpen((prev)=>!prev)
  return (
   <>
   <div className='fixed top-0 left-0 z-50 w-full h-[80px]  bg-white px-20 md:px-32'>
    <div className='flex items-center justify-between w-full h-full'>
      <div className="">
        <img src={logo} alt="Logo" className="h-16" />
      </div>
<ul className='hidden md:flex gap-8 font-medium md:items-center'>
<li><Link to="/appreal" className='hover:text-[#a3d9b1]'>Apprael</Link></li>
<li className="relative group">
  <Link to="/accessories" className="hover:text-[#a3d9b1]">Accessories</Link>

  {/* Vertical Dropdown */}
 <div className="absolute font-['Poppins'] top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[800px] p-8 flex  gap-6 text-lg">
    
    {/* Section 1: Hair Accessories */}
    <div>
      <h4 className="font-semibold text-md text-[#232323] mb-2">Hair Accessories</h4>
      <ul className="space-y-1 pl-2">
        <li><Link to="#">Headbands</Link></li>
        <li><Link to="#">Scrunchies</Link></li>
        <li><Link to="#">Alligator Bows</Link></li>
        <li><Link to="#">Hair Clips/Pins</Link></li>
        <li><Link to="#">Claw Clips</Link></li>
        <li><Link to="#">Mickey Ears</Link></li>
      </ul>
    </div>

    {/* Section 2: Jewelry & Small Accessories */}
    <div>
      <h4 className="font-semibold text-[#232323] mb-2">Jewelry & Small Accessories</h4>
      <ul className="space-y-1 pl-2">
        <li><Link to="#">Earrings</Link></li>
        <li><Link to="#">Brooches</Link></li>
        <li><Link to="#">Key Circle/Chains</Link></li>
        <li><Link to="#">Wristlets</Link></li>
        <li><Link to="#">Lanyards</Link></li>
        <li><Link to="#">Handcuffs</Link></li>
      </ul>
    </div>

    {/* Section 3: Bags & Storage */}
    <div>
      <h4 className="font-semibold text-[#232323] mb-2">Bags & Storage</h4>
      <ul className="space-y-1 pl-2">
        <li><Link to="#">Tote Bags</Link></li>
        <li><Link to="#">Coin Purses</Link></li>
        <li><Link to="#">Mobile Purses</Link></li>
        <li><Link to="#">Clutches</Link></li>
        <li><Link to="#">Box Bags</Link></li>
        <li><Link to="#">Stadium Bag Straps</Link></li>
      </ul>
    </div>

    {/* Section 4: Miscellaneous */}
    <div>
      <h4 className="font-semibold text-[#232323] mb-2">Miscellaneous</h4>
      <ul className="space-y-1 pl-2">
        <li><Link to="#">Eye Masks</Link></li>
        <li><Link to="#">Coasters</Link></li>
        <li><Link to="#">Trucker Hats</Link></li>
        <li><Link to="#">Wreath Sash</Link></li>
      </ul>
    </div>
    
  </div>
</li>


<li><Link to="/trending" className='hover:text-[#a3d9b1]'>Trending</Link></li>
<li><Link to="/aboutus" className='hover:text-[#a3d9b1]'>About us</Link></li>
<li><Link to="/blogs" className='hover:text-[#a3d9b1]'>Blogs</Link></li>
<Link className='bg-[#a3d9b1] px-5 py-2 rounded-md text-white'>Book an Appointment</Link>
</ul>
   <div className='md:hidden text-3xl cursor-pointer'>
    <RiMenu3Line onClick={toggleMenu}/>
   </div>
  

  <AnimatePresence> 
       {menuOpen && (
    <motion.div
    //      initial={{ x: '100%' }}
    //   animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col px-20 py-8">
  
  
     <div className="absolute px-20  right-6 w-6 h-6 cursor-pointer " onClick={toggleMenu}>
  {/* Line 1 */}
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

            <div className='flex flex-col items-center gap-8 mt-10 font-medium'>
                <Link to="/appreal" className='hover:text-[#a3d9b1]'>Apprael</Link>
<Link to="/accessories" className='hover:text-[#a3d9b1]'>Accessories</Link>
<Link to="/trending" className='hover:text-[#a3d9b1]'>Trending</Link>
<Link to="/aboutus" className='hover:text-[#a3d9b1]'>About us</Link>
<Link to="/blogs" className='hover:text-[#a3d9b1]'>Blogs</Link>
<Link to="/testimonals" className='hover:text-[#a3d9b1]'>Testimonal</Link>
<Link className='bg-[#a3d9b1] px-5 py-2 rounded-md text-white'>Book an Appointment</Link>
                </div>
        </motion.div>
   )}
   </AnimatePresence>
   </div>
  
   </div>
 
   </>
  )
}

export default Navbar