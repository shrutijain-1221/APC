import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import founderImg from '../assets/founder.jpg'; // Placeholder image, replace with actual founder image
import founderImg2 from '../assets/founder1.jpg'; // Placeholder image, replace with actual second founder image

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
  <div className="relative w-[350px] h-[400px] overflow-hidden shadow-md group">
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
      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-0 z-10 hidden md:block" />
      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center">
        {/* Heading and Images */}
        <div className="flex flex-col w-full items-center justify-center relative">
          {/* Left: Heading and Images */}
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-8 w-full">
              <h2 className="text-5xl font-extrabold mb-12 text-center">
                Meet Our <span className="text-[#FACC14]">Founders</span>
              </h2>
              <p className="text-lg text-center max-w-2xl mb-12">
              Akansha and Kamal Piplani launched AP Curated Couture in 2018 with a shared vision to blend fashion, purpose, and empowerment. Together, they've grown the brand into a globally recognized name rooted in handcrafted excellence and social impact.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center text-center">
              {team.slice(0, 2).map((member, idx) => (
                <div key={idx} className="flex justify-center">
                  <Card member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;