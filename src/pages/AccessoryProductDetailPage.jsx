import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import founder from '../assets/founder.png';
import founder1 from '../assets/founder1.png';
const ALL_PRODUCTS = [
  {
    id: 1,
    name: 'Pink Headband',
    images: [founder, founder1, founder],
    description: 'Elegant pink headband, crafted with love and style.',
    washCare: 'Hand wash with cold water. Do not bleach.',
    shipping: 'Delivery in 5-7 business days.',
    returnPolicy: '30-day free return.',
    colors: 'Available in Pink, Blue, and Yellow.',
    additionalInfo: 'Made by local artisans with sustainable materials.',
  }
];


const Section = ({ title, content, openSection, setOpenSection }) => {
  const isOpen = openSection === title;

  const toggle = () => {
    setOpenSection(isOpen ? null : title);
  };

  return (
    <div className="border-b py-3">
      <button
        className="flex justify-between items-center w-full text-left font-medium"
        onClick={toggle}
      >
        {title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 text-sm text-gray-600"
          >
            <p>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AccessoryProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = ALL_PRODUCTS.find(p => p.id === parseInt(productId));
  const [openSection, setOpenSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  if (!product) return <div className="mt-20 text-center">Product not found.</div>;

  const openModal = (index) => {
    setCurrentImgIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-20 px-4 md:px-16 max-w-full">
      <button onClick={() => navigate(-1)} className="mb-6 text-pink-500 underline">← Back</button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    
        <div className="grid grid-cols-2 gap-4 w-full">
          {product.images.map((img, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <img
                src={img}
                alt={`product-${idx}`}
                className="w-full h-full rounded-xl shadow-md object-cover aspect-[3/4]"
              />
              <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
  <FiSearch className="text-black text-lg" />
</div>

            </div>
          ))}
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

          <Section title="Description" content={product.description} openSection={openSection} setOpenSection={setOpenSection} />
          <Section title="Wash Care" content={product.washCare} openSection={openSection} setOpenSection={setOpenSection} />
          <Section title="Shipping" content={product.shipping} openSection={openSection} setOpenSection={setOpenSection} />
          <Section title="30 Days Free Return" content={product.returnPolicy} openSection={openSection} setOpenSection={setOpenSection} />
          <Section title="Colors" content={product.colors} openSection={openSection} setOpenSection={setOpenSection} />
          <Section title="Additional Information" content={product.additionalInfo} openSection={openSection} setOpenSection={setOpenSection} />
        </div>
      </div>

 
    <AnimatePresence>
  {isModalOpen && (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative">
      
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md z-10"
        >
          <FiX className="text-black text-lg" />
        </button>

        
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md z-10"
        >
          <FiChevronLeft className="text-black text-2xl" />
        </button>

       
        <img
          src={product.images[currentImgIndex]}
          alt="Zoomed"
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-lg"
        />

       
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md z-10"
        >
          <FiChevronRight className="text-black text-2xl" />
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default AccessoryProductDetailPage;
