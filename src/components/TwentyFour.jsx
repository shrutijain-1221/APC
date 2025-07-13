import React, { useState, useEffect } from "react";
import infra from '../assets/infra.png'

const TypingHeadingLoop = ({ phrases }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[loopNum];
    const typingSpeed = deleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!deleting && subIndex === currentPhrase.length) {
        setTimeout(() => setDeleting(true), 1000);
        return;
      }

      if (deleting && subIndex === 0) {
        setDeleting(false);
        setLoopNum(prev => (prev + 1) % phrases.length);
        return;
      }

      setSubIndex(prev => prev + (deleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, loopNum, phrases]);

  useEffect(() => {
    const cursor = setInterval(() => setBlink(prev => !prev), 500);
    return () => clearInterval(cursor);
  }, []);

  const lines = phrases[loopNum].split("\n");

  return (
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center md:text-left">
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {line.substring(0, subIndex)}
          {idx !== lines.length - 1 && <br />}
        </React.Fragment>
      ))}
      {blink ? "|" : " "}
    </h1>
  );
};

const TwentyFour = () => {
  return (
    <div className="bg-[#cbdac5] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-12 text-center md:text-left">
      {/* Left content */}
      <div className="flex-1 space-y-6 max-w-2xl flex flex-col items-center md:items-start">
        <div className="border border-gray-700 inline-block py-1 px-4 rounded-full text-sm font-medium text-gray-800">
          ✅ Trusted overseas accessories manufacturer
        </div>
        <TypingHeadingLoop phrases={["Turning your accessories\nidea into reality."]} />
        <p className="text-gray-700 text-lg max-w-md">
          Just fill the contact form with your details along with your accessories
          requirements and we’ll get back to you <strong>within 24hrs.</strong>
        </p>
      </div>

      {/* Right content */}
      <div className="flex-1 flex flex-col items-center md:items-start gap-6 max-w-lg">
        <img src={infra} alt="" className="w-[400px] h-[300px] bg-black" />
        <h2 className="text-7xl font-extrabold text-black">24X7</h2>
        <hr className="border-gray-400 w-full" />
        <button className="bg-black text-white font-bold py-3 px-6 rounded-md hover:bg-gray-800 transition">
          Contact AP Coture
        </button>
      </div>
    </div>
  );
};

export default TwentyFour;
