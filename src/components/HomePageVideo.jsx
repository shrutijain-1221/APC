import React, { useEffect, useState } from 'react';
import sampleVideo from '../assets/5759073-uhd_3840_2160_30fps.mp4';
import WhoWeAre from './WhoWeAre';

const words = ['manufacturer', 'exporter'];

const TypingText = () => {
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    if (loopNum >= words.length) setLoopNum(0);

    const typingSpeed = deleting ? 50 : 150;

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
  }, [subIndex, deleting, loopNum]);

  useEffect(() => {
    const cursorBlink = setInterval(() => setBlink(prev => !prev), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="text-white">
      <h1 className="md:text-7xl text-4xl font-bold leading-tight">
        All-in-1{' '}
        <br />
        <span className="text-yellow-400">
          {`${words[loopNum].substring(0, subIndex)}${blink ? '|' : ' '}`}
        </span>
        <br />
        for your clothing<br />brand.
      </h1>

      <div className="mt-8 max-w-2xl text-lg md:text-2xl font-bold space-y-4">
        <p>Getting started with us is easy.</p>
        <p className="font-medium text-base md:text-lg">
          Just share your clothing idea with us and we will take care of everything from sampling to delivering your accessories production.
        </p>
      </div>
    </div>
  );
};

const HomePageVideo = () => {
  return (
    <>
      <div className="relative w-full h-[800px] video overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for Desktop */}
        <div className="absolute inset-0 bg-black bg-opacity-40 text-left w-full h-full hidden md:flex flex-row items-center justify-between px-6">
          <div>
            <TypingText />
          </div>
          <div className="max-w-[50%] flex justify-end">
            <WhoWeAre />
          </div>
        </div>

        {/* Overlay for Mobile */}
        <div className="md:hidden absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4 text-center">
          <TypingText />
        </div>
      </div>

      {/* Mobile: Show WhoWeAre Below Video */}
      <div className="block md:hidden bg-black bg-opacity-90 px-4 py-8">
        <WhoWeAre />
      </div>
    </>
  );
};

export default HomePageVideo;

