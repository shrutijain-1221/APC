import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import sampleVideo from '../assets/5759073-uhd_3840_2160_30fps.mp4';
import videoThumbnail from '../assets/sweeingImage.png';
import WhoWeAre from './WhoWeAre';
import linkdein from '../assets/linkdein.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagramicon.png';
import baba from '../assets/BABA.svg'
import HomePageVideo from './HomePageVideo';
const socialLinks = [
  { href: 'https://www.linkedin.com/company/ap-curated-couture/', icon: linkdein, label: 'LinkedIn' },
  { href: 'https://www.facebook.com/AkkiFashionista', icon: facebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/apcc.2018?igsh=bDBsYzI3aHE0Nnh6', icon: instagram, label: 'Instagram' },
  { href: 'https://in19047554098tvzf.trustpass.alibaba.com/index.html', icon: baba, label: 'Alibaba' },
];

const headingLine1 = [
  'Your Wholesale',
  'Partenr',
];
const headingLine2 = [
  'In Fashion', 
  'AP Couture',
];

const charVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

const APCotureHighlight = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [startTextAnimation, setStartTextAnimation] = useState(false);
  const desktopVideoRef = useRef(null);
const mobileVideoRef = useRef(null);
  useEffect(() => {
  const timer = setTimeout(() => {
    setPlayVideo(true);
    desktopVideoRef.current?.play();
    mobileVideoRef.current?.play();
  }, 1200);

  return () => clearTimeout(timer);
}, []);


  return (
    <>
      {/* Desktop Layout */}
      <HomePageVideo/>
     
      {/* Mobile Layout */}
     {/* Mobile Layout */}
<div className="md:hidden mt-[90px] bg-[#d3e6ce] flex flex-col items-center justify-start py-8 px-4 space-y-6 min-h-[400px]">
  {/* Animated Video Section */}
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, ease: 'easeOut' }}
    className="w-full max-w-[90%] h-[240px] relative border-4 border-white shadow-lg overflow-hidden"
  >
    <img
      src={videoThumbnail}
      alt="Video Placeholder"
      className="w-full h-full object-cover"
    />
    <video
   ref={mobileVideoRef}
      className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in ${playVideo ? 'opacity-100' : 'opacity-0'}`}
      src={sampleVideo}
      muted
      loop
      playsInline
    />
  </motion.div>

  {/* Animated Word-by-Word Text */}
  <div className="w-full text-center mt-4 space-y-2">
    {[
      'YOUR TRUSTED WHOLESALE PARTNER',
      'AP CURATED COUTURE'
    ].map((line, lineIndex) => {
      const words = line.split(' ');
      return (
        <motion.p
          key={lineIndex}
          className="text-xl font-semibold text-[#232323] uppercase font-[poppins] leading-snug mb-2"
        >
          {words.map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1 + lineIndex * 0.6 + wordIndex * 0.3, // Delay words sequentially
                duration: 0.4,
              }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      );
    })}
  </div>
  <div className='w-full flex items-center justify-center mt-4'>
<WhoWeAre/>

  </div>
</div>

    </>
  );
};

export default APCotureHighlight;