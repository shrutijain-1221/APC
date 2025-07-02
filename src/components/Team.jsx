import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import founderImg from '../assets/founder.jpg'; // Placeholder image, replace with actual founder image
import founderImg2 from '../assets/founder1.jpg'; // Placeholder image, replace with actual second founder image

const foundersVideo = "https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/founders.mp4"
const popAnimation = `@keyframes pop {0%,100%{transform:scale(1);}10%{transform:scale(1.12);}20%{transform:scale(0.98);}30%{transform:scale(1.08);}40%{transform:scale(0.97);}50%{transform:scale(1.05);}60%{transform:scale(1);}}.animate-pop{animation:pop 1.5s infinite;}`;

const team = [
 
  {
    name: 'Akansha Piplani',
    role: 'Co-Founder & CEO',
    email: 'akki.ahuja2@gmail.com',
    image: founderImg,
    linkedin: 'https://www.linkedin.com/in/akansha-ahuja-23272673/',
  },
   {
    name: 'Kamal Piplani',
    role: 'Co-Founder & COO',
    email: 'piplani.kamal@gmail.com',
    image: founderImg2,
    linkedin: '#',
  },

];

const Card = ({ member }) => (
  <div className="relative w-[350px] h-[400px] rounded-lg overflow-hidden shadow-md group">
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105 object-top "
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-4 text-center">
      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
      <p className="text-sm mb-2">{member.role}</p>
      <div className='w-[96%] h-[2px] bg-[#ddfae7] mb-2'></div>
      <p className="text-sm mb-3">{member.email}</p>
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#ddfae7] rounded-full p-3 flex items-center justify-center hover:bg-green-200 transition-colors"
      >
        <FaLinkedin size={20} className="text-blue-700" />
      </a>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-full p-6 overflow-hidden">
      <style>{popAnimation}</style>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden md:block"
        style={{ objectFit: 'cover', minHeight: '100%', minWidth: '100%' }}
      >
        <source src={foundersVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-0 z-10 hidden md:block" />
      {/* Content */}
      <div className="relative z-20 w-full">
        {/* Heading and Images */}
        <div className="flex flex-col md:flex-row w-full items-start relative">
          {/* Left: Heading and Images */}
          <div className="flex-1">
            <div className="flex flex-col items-start mb-8">
              <h2 className="text-4xl sm:text-5xl ml-40 mb-4 font-oswald text-left" style={{ fontWeight: 500 }}>
                Meet Our Founders
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6 w-full items-start">
              {team.slice(0, 2).map((member, idx) => (
                <div key={idx} className="flex justify-start">
                  <Card member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile: See All Members button below images */}
        <div className="flex justify-center mt-6 w-full">
          <button className="text-md font-semibold px-6 py-3 rounded-md bg-[#ffffff] ml-[850px] text-[212121] hover:text-white hover:bg-[#212121] transition-all animate-pop">
            People Loved Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;