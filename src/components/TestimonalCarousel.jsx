import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import founder1 from "../assets/founder1.png";
const cards = [
  { id: 1, title: " clicks don’t pay the bills—returns do. ROI ensures clarity..." },
  { id: 2, title: " clicks don’t pay the bills—returns do. ROI ensures clarity..." },
  { id: 3, title: " clicks don’t pay the bills—returns do. ROI ensures clarity..." },
  { id: 4, title: " clicks don’t pay the bills—returns do. ROI ensures clarity..." },
  { id: 5, title: " clicks don’t pay the bills—returns do. ROI ensures clarity..." },
  { id: 6, title: " clicks don’t pay the bills—returns do. ROI ensures clarity..." },
  { id: 7, title: " clicks don’t pay the bills—returns do. ROI ensures clarity..." },
];

const TestimonalCarousel = () => {
  const [index, setIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = [];
  const range = isMobile ? [0] : [-2, -1, 0, 1, 2];

  for (let i of range) {
    visibleCards.push(cards[(index + i + cards.length) % cards.length]);
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="py-10 ">
      <h2 className="text-3xl font-semibold text-[#232323] text-center font-[poppins] mb-5">
       Gallery
      </h2>

      <div className="relative w-full flex items-center justify-center">
        <div className=" relative w-[100%] h-[450px]  flex items-center justify-center overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className=" absolute left-0 md:left-24 top-1/2 -translate-y-1/2 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md z-50 hover:bg-gray-100"
          >
            {"<"}
          </button>

          {/* Cards */}
          {visibleCards.map((card, i) => {
            const position = isMobile ? 0 : i - 2;
            const zIndex = 10 - Math.abs(position);
            const translateX = isMobile ? 0 : position * 80;

            const width = position === 0 ? "400px" : "300px";
            const height =
              position === 0
                ? "400px"
                : position === -1 || position === 1
                ? "300px"
                : "260px";

           

            const bgColor = position === 0
              ? (isMobile ? "bg-green-100" : "bg-gray-100")
              : "bg-green-100";

            return (
              <motion.div
                key={card.id}
                className={`absolute ${bgColor} transition-all duration-500 rounded-xl shadow-md p-4 flex items-center justify-center`}
                style={{
                  transform: `translateX(${translateX}%)`,
                  zIndex: zIndex,
                  width,
                  height,
                }}
              >
                <motion.div
                  key={card.id + "-" + index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`h-full w-full flex items-center justify-center text-center px-4 `}
                >
                 <img src={founder1} alt="Founder" className="w-full h-full object-cover object-top" />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute  right-0 md:right-24 top-1/2 -translate-y-1/2 bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-md z-50 hover:bg-gray-100"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCarousel;
