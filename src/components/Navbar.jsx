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
   <div className='fixed top-0 left-0 z-50 w-full h-[80px] bg-pastelgreen  px-20 md:px-32 shadow-md'>
    <div className='flex items-center justify-between w-full h-full'>
      <div className="">
        <img src={logo} alt="Logo" className="h-16" />
      </div>
<ul className='hidden md:flex gap-8 font-medium md:items-center'>
<li><Link to="/appreal" className='hover:text-[#a3d9b1]'>Apprael</Link></li>
<li><Link to="/accessories" className='hover:text-[#a3d9b1]'>Accessories</Link></li>
<li><Link to="/trending" className='hover:text-[#a3d9b1]'>Trending</Link></li>
<li><Link to="/aboutus" className='hover:text-[#a3d9b1]'>About us</Link></li>
<li><Link to="/blogs" className='hover:text-[#a3d9b1]'>Blogs</Link></li>
<li><Link to="/testimonals" className='hover:text-[#a3d9b1]'>Testimonal</Link></li>
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