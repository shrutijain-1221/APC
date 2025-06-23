import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Local image imports
import customInquiryIcon from '../assets/srep1.png';
import chatIcon from '../assets/srep2.png';
import exploreIcon from '../assets/srep3.png';
import orderIcon from '../assets/srep4.png';
import depositIcon from '../assets/srep5.png';
import sampleIcon from '../assets/srep6.png';
import productionIcon from '../assets/srep7.png';
import paymentIcon from '../assets/srep8.png';
import shippingIcon from '../assets/srep9.png';
import finalStepIcon from '../assets/srep1.png';

const exhibitionImages = [
  customInquiryIcon,
  chatIcon,
  exploreIcon,
  orderIcon,
  depositIcon,
  sampleIcon,
  productionIcon,
  paymentIcon,
  shippingIcon,
  finalStepIcon,
];

const getPositionStyle = (index) => {
  const imgW = 300;
  const imgH = 400;
  const gap = 20;

  if (index < 3) {
    return { top: 0, left: `${index * (imgW + gap)}px` };
  } else if (index < 5) {
    return { top: `${(index - 2) * (imgH + gap)}px`, left: `${2 * (imgW + gap)}px` };
  } else if (index < 8) {
    return { top: `${2 * (imgH + gap)}px`, left: `${(7 - index) * (imgW + gap)}px` };
  } else {
    return { top: `${(9 - index + 1) * (imgH + gap)}px`, left: 0 };
  }
};

const ExhibitionsGallery = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, {
    margin: '-100px',
    triggerOnce: false,
  });

  const containerWidth = 3 * 300 + 2 * 20;
  const containerHeight = 3 * 400 + 2 * 20;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
     autoplaySpeed:3000
  };

  return (
    <div className="w-full py-20 flex flex-col items-center bg-white overflow-hidden px-4">
      {/* Heading always shown first on all screens */}
      <h2 className="text-4xl font-bold text-[#232323] text-center mb-8">Exhibitions</h2>

      {/* Mobile: Show Slick Slider */}
      <div className="w-full max-w-md block lg:hidden">
        <Slider {...sliderSettings}>
          {exhibitionImages.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={src}
                alt={`Exhibition ${index + 1}`}
                className="object-cover shadow-md rounded-md w-[300px] h-[400px]"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop: Show Animated Positioned Layout */}
      <div
        ref={containerRef}
        className="relative hidden lg:block mt-16"
        style={{
          width: containerWidth,
          height: containerHeight,
        }}
      >
        {exhibitionImages.map((src, index) => {
          const positionStyle = getPositionStyle(index);
          return (
            <motion.img
              key={index}
              src={src}
              alt={`Exhibition ${index + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className="absolute object-cover shadow-md rounded-md"
              style={{
                ...positionStyle,
                width: '300px',
                height: '400px',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExhibitionsGallery;
