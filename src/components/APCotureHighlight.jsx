import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import sampleVideo from '../assets/5759073-uhd_3840_2160_30fps.mp4';
import videoThumbnail from '../assets/sweeingImage.png';
import WhoWeAre from './WhoWeAre';
import linkdein from '../assets/linkdein.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagramicon.png';
import baba from '../assets/BABA.svg'
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
      <div className="hidden md:grid mt-[100px] w-full bg-[#d3e6ce] min-h-[700px] grid-cols-2 relative overflow-hidden">
        {/* Left Column */}
        <div className="p-8 flex items-center justify-center bg-white relative z-10">
          <motion.div
            initial={{ opacity: 0, transform: 'translate(100%, -50%)' }}
            animate={{ opacity: 1, transform: 'translate(0%, -50%)' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-[900px] h-[600px] absolute border border-white right-[-20%] top-1/2 z-20 overflow-hidden"
            style={{
              borderWidth: "12px",
              borderStyle: "solid",
            }}
          >
            <img
              src={videoThumbnail}
              alt="Video Placeholder"
              className="w-full h-full object-cover"
            />
            <video
             ref={desktopVideoRef}
              className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in ${playVideo ? 'opacity-100' : 'opacity-0'}`}
              src={sampleVideo}
              muted
              loop
              playsInline
            />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="p-8 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, transform: 'translate(100%, 0%)' }}
            animate={{ opacity: 1, transform: 'translate(0%, 0%)' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }}
            onAnimationComplete={() => setStartTextAnimation(true)}
            className="w-[440px] h-[360px] bg-gray-200 absolute left-[5%] border-white border z-30 p-3"
            style={{
              borderWidth: "12px",
              borderStyle: "solid",
            }}
          >
            <div className="mb-4 space-y-1 font-oswald-400">
              {[...headingLine1, ...headingLine2].map((line, index) => {
                const staticPart = line.slice(0, 3);
                const animatedPart = line.slice(3);

                // Alternate color: first 2 lines gray, next 2 black
                const isGray = index < headingLine1.length;
                const textColor = isGray ? 'text-[#6b6b6b]' : 'text-black';

                return (
                  <p
                    key={index}
                    className={`text-[2.7rem] ${textColor} tracking-[0.01em] leading-[1.2] uppercase text-left font-oswald-400`}
                    style={{ fontWeight: 500 }}
                  >
                    <span>{staticPart}</span>
                    {startTextAnimation &&
                      animatedPart.split('').map((char, i) => (
                        <motion.span
                          key={`line-${index}-${i}`}
                          custom={i}
                          initial="hidden"
                          animate="visible"
                          variants={charVariants}
                          className="inline-block"
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                      ))}
                  </p>
                );
              })}
            </div>
            <div className="flex gap-5 mt-5 items-center justify-center">
              {socialLinks.map((link) => (
  <div
    key={link.label}
    className="w-10 h-10 flex items-center justify-center rounded-full "
    onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
    role="button"
    aria-label={link.label}
    title={link.label}
  >
    <img
      src={link.icon}
      alt={link.label}
      className="w-10 h-10 cursor-pointer"
    />
  </div>
))}
            </div>
           <div className="absolute right-[-40%] top-1/2 transform -translate-y-1/2 translate-x-1/2 w-64 h-96   flex items-center justify-center z-10">
<WhoWeAre/>
</div>
          </motion.div>
        </div>
      </div>

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