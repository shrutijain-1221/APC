import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import StickyHorizontal from "./StickyHorizontal";
import customInquiryIcon from '../assets/steps/1.png';
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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["-100%", "0%"],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop(); // stop when not visible
    }
  }, [isInView, controls]);

  const renderSteps = () =>
    steps.map((step, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center flex-shrink-0 w-40">
          <img
            src={step.icon}
            alt={step.label}
            className="w-full h-full object-contain mb-2"
          />
          <p className="text-center text-sm font-medium whitespace-nowrap">
            {step.label}
          </p>
        </div>
        {index < steps.length - 1 && (
          <img
            src={directionalArrow}
            alt="Arrow"
            className="w-10 h-10 flex-shrink-0"
          />
        )}
      </React.Fragment>
    ));

  return (
    <section className="py-16 bg-white mb-10">
      <h2 className="text-3xl text-black text-center mb-5 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 200 }}>
        How to Place an Order?
      </h2>
      <div className="h-px w-[1000px] bg-black mx-auto" />
<StickyHorizontal/>
    </section>
  );
};

export default HowToPlace;
