import React from 'react';
import { motion } from 'framer-motion';
import akanshaImg from '../assets/founder.png'; 
import kamalImg from '../assets/founder1.png'; 
import group from '../assets/group.jpeg'; 
import sampleVideo from '../assets/5759073-uhd_3840_2160_30fps.mp4';
import Slider from "react-slick";
import sweepingImage from '../assets/sweeingImage.png'; 
// Inside AboutUs component
const teamImages = [
  sweepingImage,
  sweepingImage,  
  sweepingImage,
  sweepingImage,    
  sweepingImage,
  sweepingImage,
];
const AboutUs = () => {
  return (
   <div className="overflow-x-hidden py-10 px-4 sm:px-8 mt-28 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-[#232323] text-center font-[poppins] mb-3">
        About Us
      </h2>
      <p className="text-center text-xl mb-10 text-[#666]">
        The People Who Make It Happen - Founders and Founders' Story
      </p>
<div className="mb-16">
  <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-[#232323]">
    Meet Our Team
  </h3>
  <motion.img
    src={group} 
    alt="Group of Employees"
   initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="w-full h-[550px] rounded-xl shadow-lg"
  />
</div>
      {/* Akansha Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.img
          src={akanshaImg}
          alt="Akansha Piplani"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full rounded-xl shadow-lg"
        />
        <div className="text-[#444] text-lg leading-relaxed">
          <h3 className="text-2xl font-semibold text-[#232323] mb-1">Akansha Piplani</h3>
          <p className="text-[#777] mb-4">Co-Founder & CEO</p>
          <p>
            A Fashion Designer and MBA in Marketing, <strong>Akansha Piplani</strong> transformed her 6 years of design experience into a global vision with the launch of <strong>AP Curated Couture</strong> in 2018. What began as a dream to create meaningful, trend-forward accessories soon evolved into a purpose-driven brand rooted in empowerment and craftsmanship. Today, her vision fuels a business that supports rural Indian artisans, especially women, while delivering handcrafted elegance to over 30+ countries. Her mission is to craft not just accessories, but confidence, culture, and conversation through every piece.
          </p>
          <ul className="mt-4 list-disc list-inside text-[#666]">
            <li><strong>Projects Succeeded</strong> - 1K+</li>
            <li><strong>Professional Experience</strong> - 6yrs+</li>
          </ul>
        </div>
      </div>

      {/* Kamal Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center flex-col-reverse md:flex-row">
        <div className="text-[#444] text-lg leading-relaxed order-2 md:order-1">
          <h3 className="text-2xl font-semibold text-[#232323] mb-1">Kamal Piplani</h3>
          <p className="text-[#777] mb-4">Co-Founder & CEO</p>
          <p>
            A BBA graduate from Symbiosis Pune and an MBA from IMT Ghaziabad, <strong>Kamal Piplani</strong> co-founded <strong>AP Curated Couture</strong> in 2018 alongside Akansha. With a sharp focus on business strategy, marketing, and international growth, he plays an instrumental role in scaling the brand globally. His structured mindset and entrepreneurial drive complement the creative spirit of the company, helping shape a brand that stands for quality, heritage, and purpose. Kamal continues to steer the business toward new markets, building on its strong foundation of values and vision.
          </p>
          <ul className="mt-4 list-disc list-inside text-[#666]">
            <li><strong>Projects Succeeded</strong> - 1K+</li>
            <li><strong>Professional Experience</strong> - 12yrs+</li>
          </ul>
        </div>
        <motion.img
          src={kamalImg}
          alt="Kamal Piplani"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full rounded-xl shadow-lg h-[550px] order-1 md:order-2"
        />
      </div>
      {/* Video Section */}
      {/* Video Section */}
<div className="mt-20 px-4 sm:px-8">
  <h3 className="text-2xl md:text-3xl font-semibold text-[#232323] text-center mb-6">
    Our Journey
  </h3>

  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    className="rounded-xl overflow-hidden shadow-xl"
  >
    <video
      className="w-full h-auto rounded-xl"
      src={sampleVideo}
      autoPlay
      muted
      loop
      playsInline
      controls={false} 
    />
  </motion.div>
</div>

{/* Our Story Section */}
<div className="mt-20 px-4 sm:px-8 max-w-6xl mx-auto">
  <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#232323] mb-2">
    Our Story
  </h3>
  <p className="text-center text-[#666] text-lg font-medium mb-10">
    AP Curated Couture – a legacy of design, detail & dedication in accessories
  </p>

  {/* Paragraph Blocks */}
  <div className="space-y-12">
    {/* Block 1 */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-lg rounded-xl p-6 md:p-8 max-w-3xl"
    >
      <p className="text-[#444] text-lg leading-relaxed">
        Our journey to becoming India’s top-rated and trending accessories manufacturer and exporter began in 2016, when our co-founder and creative director <strong>Akansha Piplani</strong> completed her post-graduation in fashion design. Early work with international fashion labels revealed an essential truth: a great design deserves a great manufacturer.
      </p>
    </motion.div>

    {/* Block 2 */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-lg rounded-xl p-6 md:p-8 max-w-3xl ml-auto"
    >
      <p className="text-[#444] text-lg leading-relaxed">
        This insight led her to start a small-batch setup called <strong>AP Curated Couture®</strong> in 2018, with one mission: to honour every design through super-specialized production. The guiding principle was simple—whatever we make must be extraordinary.
      </p>
    </motion.div>

    {/* Block 3 */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-lg rounded-xl p-6 md:p-8 max-w-3xl"
    >
      <p className="text-[#444] text-lg leading-relaxed">
        Building on this strong foundation, <strong>AP Curated Couture</strong> emerged as a brand for handcrafted fashion accessories. Born out of passion and bolstered by family support, the brand secured its first international order within just three months of starting its business.
      </p>
    </motion.div>

    {/* Block 4 */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-lg rounded-xl p-6 md:p-8 max-w-3xl ml-auto"
    >
      <p className="text-[#444] text-lg leading-relaxed">
        <strong>AP Curated Couture®</strong> is a process-oriented, highly quality-conscious accessories manufacturer with great understanding of design technicality, colour code, cut & finish, tailoring, fabric selection and its relevance to your design and brand, printing techniques and outstanding hand-works which are essential for effective work on your custom design.
      </p>
    </motion.div>

    {/* Block 5 */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-lg rounded-xl p-6 md:p-8 max-w-3xl"
    >
      <p className="text-[#444] text-lg leading-relaxed">
        We have dedicated ourselves to providing state-of-the-art, technology-equipped production factories in 3 rural areas to meet the fast-changing fashion industry line in accessories, with a capacity of producing more than <strong>50,000+ accessories monthly</strong>. Be it headbands, clutches, tote bags, bag straps, earrings, or any other product—we possess great know-how to surprise with our exquisite workmanship at the most affordable price in all lines of accessories!
      </p>
    </motion.div>
  </div>
</div>
{/* Team Image Carousel */}
<div className="mt-20 px-4 sm:px-8 max-w-6xl mx-auto">
  <h3 className="text-2xl md:text-3xl font-semibold text-center text-[#232323] mb-6">
    Our Team Moments
  </h3>
  
  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={3000}
    arrows={false}
    className="rounded-xl "
  >
    {teamImages.map((src, index) => (
      <div key={index}>
        <img
          src={src}
          alt={`Team ${index + 1}`}
          className="w-full h-[500px] object-cover rounded-xl"
        />
      </div>
    ))}
  </Slider>
</div>

    </div>
  );
};

export default AboutUs;
