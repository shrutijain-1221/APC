import React from 'react';
import './HowToPlace.css';

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
    <section className="how-order-section">
     <h2 className="text-3xl font-semibold text-[#232323] text-center font-[poppins] mb-5">
        How to Place an Order?
      </h2>
      <div className="how-order-roadmap">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div className="how-order-step">
              <div className="how-order-icon">{step.icon}</div>
              <div className="how-order-label">{step.label}</div>
            </div>
            {idx < steps.length - 1 && (
              <div className="how-order-arrow">→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowToPlace; 