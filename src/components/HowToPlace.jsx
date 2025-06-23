import React from 'react';
import { motion } from 'framer-motion';
import customInquiryIcon from '../assets/srep1.png';
import chatIcon from '../assets/srep2.png';
import exploreIcon from '../assets/srep3.png';
import orderIcon from '../assets/srep4.png';
import depositIcon from '../assets/srep5.png';
import sampleIcon from '../assets/srep6.png';
import productionIcon from '../assets/srep7.png';
import paymentIcon from '../assets/srep8.png';
import shippingIcon from '../assets/srep9.png';
import directionalArrow from '../assets/arrow.mp4'

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
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center text-[#232323] font-[poppins] mb-10">
        How to Place an Order?
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-2 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
};

export default HowToPlace;
