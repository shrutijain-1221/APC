import React, { useState, useEffect } from "react";
import ethical from '../assets/ethical.svg';

const TypingTextCard = ({ words }) => {
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (loopNum >= words.length) setLoopNum(0);

    const typingSpeed = deleting ? 50 : 120;

    const timeout = setTimeout(() => {
      const currentWord = words[loopNum];

      if (!deleting && subIndex === currentWord.length) {
        setTimeout(() => setDeleting(true), 1000);
        return;
      }

      if (deleting && subIndex === 0) {
        setDeleting(false);
        setLoopNum(prev => (prev + 1) % words.length);
        return;
      }

      setSubIndex(prev => prev + (deleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, loopNum, words]);

  useEffect(() => {
    const cursor = setInterval(() => setBlink(prev => !prev), 500);
    return () => clearInterval(cursor);
  }, []);

  return (
    <h2 className="text-white text-2xl font-bold text-center md:text-left">
      {`${words[loopNum].substring(0, subIndex)}${blink ? "|" : " "}`}
    </h2>
  );
};

const Ethical = () => {
  return (
    <div className="bg-[#18181b] text-white py-12 px-6 md:px-12 flex flex-col md:flex-row gap-8 items-center md:items-start justify-center md:justify-between text-center md:text-left">
      
      {/* Left content */}
      <div className="flex-1 max-w-lg space-y-6">
        <div className="bg-gray-700 inline-block py-1 px-3 rounded-full text-sm font-medium">
          ✅ Flexible & Fair Practices
        </div>
        <h1 className="w-full flex flex-col justify-center md:justify-start text-4xl md:text-5xl font-bold text-[#635d6e]">
          An ethical <br />
          <span className="text-white mt-2">overseas accessories manufacturer.</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-4">
          We as custom-made and sustainable clothing manufacturers make sure
          that all your garments are manufactured as per ethical & fair trade
          guidelines. We <strong>empower women</strong> by giving them equal
          opportunities on all levels of the hierarchy.
        </p>
      </div>

      {/* Middle image card */}
      <div className="flex-1 max-w-md bg-black rounded-md overflow-hidden shadow-lg h-[400px] flex flex-col justify-between">
        <img
          src="https://images.unsplash.com/photo-1574180045827-681f8a1a9622"
          alt="Ethical clothing"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">One stop solution.</h2>
        </div>
      </div>

      {/* Right card with typing effect */}
      <div className="flex-1 max-w-md bg-[#1f1f23] rounded-md p-6 shadow-lg flex flex-col items-center md:items-start space-y-4 h-[400px] justify-between">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
          <img src={ethical} alt="Ethical Icon" className="w-56 h-24" />
        </div>
        <hr className="border-gray-600 w-full" />
        <TypingTextCard words={["ETHICAL MANUFACTURING & SOURCING",]} />
        <p className="text-gray-300 text-base text-center md:text-left">
        Its your responsibility too! Source from an Ethical Clothing Manufacturer.
        </p>
      </div>
    </div>
  );
};

export default Ethical;
