import "./HowToPlace.css";
import React, { useRef, useEffect } from "react";

import customInquiryIcon from '../assets/srep1.png';
import chatIcon from '../assets/srep2.png';
import exploreIcon from '../assets/srep3.png';
import orderIcon from '../assets/srep4.png';
import depositIcon from '../assets/srep5.png';
import sampleIcon from '../assets/srep6.png';
import productionIcon from '../assets/srep7.png';
import paymentIcon from '../assets/srep8.png';
import shippingIcon from '../assets/srep9.png';

import directionalArrow from '../assets/arrow.png';

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

const HowToPlace = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const onWheel = (e) => {
      if (container) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    if (container) {
      container.addEventListener("wheel", onWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", onWheel);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white mb-10">
      <h2 className="text-5xl text-center text-[#232323] font-oslwald mb-10"
      style={{ fontWeight: 500 }}>
        How to Place an Order?
      </h2>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 px-4 snap-x snap-mandatory items-center custom-scroll-hide"
      >
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center flex-shrink-0 snap-start w-40">
              <img
                src={step.icon}
                alt={step.label}
                className="w-full h-full object-contain mb-2"
              />
              <p className="text-center text-sm font-medium">{step.label}</p>
            </div>

            {index < steps.length - 1 && (
              <img
              src={directionalArrow}
              alt="Arrow"
              className="w-20 h-25 flex-shrink-0"
            />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowToPlace;






{/* Mobile View: Column Steps with arrowdown */}
      {/* <div className="flex flex-col items-center gap-4 px-4 lg:hidden">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#d3e6ce] w-28 h-28 rounded-full flex items-center justify-center mb-2">
                <img src={step.icon} alt={step.label} className="w-20 h-20 object-contain" />
              </div>
              <div className="text-center text-[#333] font-semibold text-base">{step.label}</div>
            </motion.div>

            {idx < steps.length - 1 && (
              <video
                src={arrowdown}
                autoPlay
                loop
                muted
                playsInline
                className="w-8 h-16"
              />
            )}
          </React.Fragment>
        ))}
      </div> */}

      {/* Desktop View: Original Flex-Wrap Layout with horizontal arrows */}
      {/* <div className="hidden lg:flex flex-wrap justify-center items-center gap-2 max-w-6xl mx-auto">
        {steps.map((step, idx) => {
          const delay = idx * 0.4;
          return (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay }}
                className="flex flex-col items-center min-w-[120px] mx-2"
              >
                <div className="bg-[#d3e6ce] text-white text-3xl w-22 h-22 rounded-full flex items-center justify-center mb-2">
                  <img src={step.icon} alt={step.label} className="w-32 h-32 object-cover" />
                </div>
                <div className="text-center text-[#333] font-semibold text-base">
                  {step.label}
                </div>
              </motion.div>

              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: '8rem' }}
                  transition={{ duration: 0.4, delay: delay + 0.3 }}
                  className="text-2xl text-black mx-1 self-center"
                >
                  <video
                    src={directionalArrow}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-35 h-40"
                  />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div> */}