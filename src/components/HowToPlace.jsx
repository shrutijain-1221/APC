import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { label: 'Custom Design Inquiry', icon: '🔍' },
  { label: 'Chat With Us', icon: '📞' },
  { label: 'Explore Our Products', icon: '🛍️' },
  { label: 'Place an Order', icon: '📝' },
  { label: 'Deposit Token Amount', icon: '💰' },
  { label: 'First Sample Approval', icon: '🛡️' },
  { label: 'Production', icon: '🏭' },
  { label: 'Pay the Balance', icon: '💳' },
  { label: 'Dispatching of Goods', icon: '🚚' },
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
                <div className="bg-[#d3e6ce] text-white text-3xl w-14 h-14 rounded-full flex items-center justify-center shadow-md mb-2">
                  {step.icon}
                </div>
                <div className="text-center text-[#333] font-semibold text-base">
                  {step.label}
                </div>
              </motion.div>

              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: '2rem' }}
                  transition={{ duration: 0.4, delay: delay + 0.3 }}
                  className="text-2xl text-black mx-1 self-center"
                >
                  →
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
