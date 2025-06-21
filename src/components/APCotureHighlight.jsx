import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import sampleVideo from '../assets/5759073-uhd_3840_2160_30fps.mp4';
import videoThumbnail from '../assets/sweeingImage.png';
import Trending from '../components/Trending';

const socialLinks = [
  { href: 'https://www.linkedin.com', icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
  { href: 'https://www.facebook.com', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: 'https://www.instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://www.alibaba.com', icon: 'fas fa-globe', label: 'Alibaba' },
];

const headingLines = [
  'YOUR TRUSTED',
  'WHOLESALE FASHION',
  'PARTNER',
  'AP CURATED COTURE',
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
      <div className="hidden md:grid mt-[100px] w-full bg-[#d3e6ce] min-h-[580px] grid-cols-2 relative overflow-hidden">
        {/* Left Column */}
        <div className="p-8 flex items-center justify-center bg-white relative z-10">
          <motion.div
            initial={{ opacity: 0, transform: 'translate(100%, -50%)' }}
            animate={{ opacity: 1, transform: 'translate(0%, -50%)' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full h-[500px] absolute border-8 right-[-20%] top-1/2 z-20 shadow-lg overflow-hidden"
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
            className="w-[410px] h-72 bg-gray-200 absolute left-[5%] border-8 border-white z-30 p-3"
          >
            <div className="mb-4 space-y-1">
              {headingLines.map((line, index) => {
                const staticPart = line.slice(0, 3);
                const animatedPart = line.slice(3);

                return (
                  <p
                    key={index}
                    className="text-[2.1rem] font-light text-[#232323] tracking-[0.01em] leading-[1.2] uppercase text-left font-[poppins]"
                  >
                    <span>{staticPart}</span>
                    {startTextAnimation &&
                      animatedPart.split('').map((char, i) => (
                        <motion.span
                          key={i}
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
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f0e6] text-[#222] text-[1.3rem] shadow-md transition-all duration-200 hover:bg-[#b7d7b7] hover:text-[#1a5e1a]"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
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
</div>

    </>
  );
};

export default APCotureHighlight;