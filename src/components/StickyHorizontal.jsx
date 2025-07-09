import React, { useEffect, useRef } from 'react';

import customInquiryIcon from '../assets/srep1.png';
import chatIcon from '../assets/srep2.png';
import exploreIcon from '../assets/srep3.png';
import orderIcon from '../assets/srep4.png';
import depositIcon from '../assets/srep5.png';
import sampleIcon from '../assets/srep6.png';
import productionIcon from '../assets/srep7.png';
import paymentIcon from '../assets/srep8.png';
import shippingIcon from '../assets/srep9.png';

const steps = [
  { label: 'Custom Design Inquiry', icon: customInquiryIcon },
  { label: 'Chat With Us', icon: chatIcon },
  { label: 'Explore Our Products', icon: exploreIcon },
  { label: 'Place an Order', icon: orderIcon },
  { label: 'Deposit Token Amount', icon: depositIcon },
  { label: 'First Sample Approval', icon: sampleIcon },
  { label: 'Production', icon: productionIcon },
  { label: 'Pay the Balance', icon: paymentIcon },
  { label: 'Dispatching of Goods', icon: shippingIcon },
];

const HorizontalScrollSection = () => {
  const outerRef = useRef(null);
  const scrollerRef = useRef(null);

  const cardWidth = 300;
  const gap = 48;
  const totalScrollWidth = steps.length * (cardWidth + gap);

  useEffect(() => {
    const outer = outerRef.current;
    const scroller = scrollerRef.current;

    const handleScroll = () => {
      const scrollTop = outer.scrollTop;
      const maxScrollTop = outer.scrollHeight - outer.clientHeight;

      const progress = scrollTop / maxScrollTop;
      const maxTranslate = totalScrollWidth - outer.clientWidth;
      const scrollLeft = progress * maxTranslate;

      scroller.style.transform = `translateX(-${scrollLeft}px)`;
    };

    outer.addEventListener('scroll', handleScroll);
    return () => outer.removeEventListener('scroll', handleScroll);
  }, [totalScrollWidth]);

  return (
    <div
      ref={outerRef}
      className="relative overflow-y-scroll scroll-hide"
      style={{ height: '300px' }}
    >
      <div className="sticky top-0 h-full bg-white flex items-center">
        <div
          ref={scrollerRef}
          className="flex transition-transform duration-0 ease-linear will-change-transform"
          style={{ width: `${totalScrollWidth}px` }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[250px] mx-6 bg-[#f3f4f6] rounded-xl shadow-md flex flex-col items-center justify-center text-center p-6"
            >
              <img
                src={step.icon}
                alt={step.label}
                className="w-40 h-40 mb-4 object-contain"
              />
              <p className="text-lg font-semibold text-gray-800">{step.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer to enable vertical scrolling */}
      <div style={{ height: `${totalScrollWidth}px` }}></div>
    </div>
  );
};

export default HorizontalScrollSection;
