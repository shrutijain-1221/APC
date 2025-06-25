import React from 'react'
import { motion } from 'framer-motion';
import founderImage from '../assets/founder.png';
import TestimonialCards from './TestimonalCards';



const TestimonalsPage = () => {
  const testimonials = [
    {
      content: "APC really transformed my vision into reality. Their approach was personalized and super professional!APC really transformed my vision into reality. Their approach was personalized and super professional!APC really transformed my vision into reality. Their approach was personalized and super professional!APC really transformed my vision into reality. Their approach was personalized and super professional!APC really transformed my vision into reality. Their approach was personalized and super professional!APC really transformed my vision into reality. Their approach was personalized and super professional!APC really transformed my vision into reality. Their approach was personalized and super professional!APC really transformed my vision into reality. Their approach was personalized and super professional!APC really transformed my vision into reality. Their approach was personalized and super professional!",
      image: founderImage,
      name: "Akansha Piplani",
      role: "Founder, APC",
    },
    {
      content: "An amazing fashion curation experience! The team understood every detail I wanted.",
      image: founderImage,
      name: "Kamal Singh",
      role: "Creative Director",
    },
    {
      content: "Highly recommend APC. They gave me something unique and stylish!",
      image: founderImage,
      name: "Niharika Jain",
      role: "Client",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-16 mt-10 overflow-x-hidden">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      {testimonials.map((t, index) => (
        <TestimonialCards
          key={index}
          {...t}
          reverse={index % 2 !== 0} // alternate sides
        />
      ))}
    </div>
  );
};




export default TestimonalsPage