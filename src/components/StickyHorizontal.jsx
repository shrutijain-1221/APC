import React, { useEffect, useRef } from 'react';

import customInquiryIcon from '../assets/steps/1.png';
import chatIcon from '../assets/steps/2.png';
import exploreIcon from '../assets/steps/3.png';
import orderIcon from '../assets/steps/4.png';
import depositIcon from '../assets/steps/5.png';
import sampleIcon from '../assets/steps/6.png';
import productionIcon from '../assets/steps/7.png';
import paymentIcon from '../assets/steps/8.png';
import shippingIcon from '../assets/steps/9.png';

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
      <div className="sticky top-0 h-full flex items-center">
        <div
          ref={scrollerRef}
          className="flex transition-transform duration-0 ease-linear will-change-transform"
          style={{ width: `${totalScrollWidth}px` }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[250px] mx-6 rounded-xl flex flex-col items-center justify-center text-center p-6"
            >
              <img
                src={step.icon}
                alt={step.label}
                className="w-170 h-170 mb-4 object-contain"
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
