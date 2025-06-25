import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialCards = ({ content, image, name, role, reverse }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row ${
        reverse ? 'md:flex-row-reverse' : ''
      } items-center justify-between my-12 px-2 md:px-0 overflow-hidden`}
    >
      {/* Image */}
      <motion.div
        initial={{ x: reverse ? 100 : -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0"
      >
        <img
          src={image}
          alt={name}
          className="w-28 h-28 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ x: reverse ? -100 : 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full md:w-2/3 bg-white shadow-md rounded-xl p-6 max-w-full"
      >
        <p className="text-gray-700 text-base mb-4 whitespace-pre-line">{content}</p>
        <div className="text-sm text-gray-900 font-semibold">{name}</div>
        <div className="text-xs text-gray-500">{role}</div>
      </motion.div>
    </div>
  );
};

export default TestimonialCards;
