import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import founderImg from '../assets/founder.png'; // Placeholder image, replace with actual founder image
import founderImg2 from '../assets/founder1.png'; // Placeholder image, replace with actual second founder image
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
    <div className="flex justify-center">
      <div className="md:w-[100%] w-[100%] h-full md:h-[450px] bg-[#d4e6ce] p-6 ">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-6">
          
          {/* Heading & Button (Visible on md and up) */}
          <div className="md:col-span-2 order-1 flex flex-col justify-center items-center">
            <h2 className="text-4xl sm:text-5xl mb-4 font-oswald text-center"
            style={{ fontWeight: 500 }}>
              People Loved <br className="hidden md:block" /> Our Team
            </h2>

            {/* Button only visible on md and up */}
            <div className="hidden md:flex justify-center items-center">
              <button className=" text-md font-semibold px-6 py-3 rounded-md border text-[212121] hover:text-white hover:bg-[#212121] transition-all mt-2"
                style={{ borderColor: "#212121", borderWidth: "1px", borderStyle: "solid" }}
              >
                See All Members
              </button>
            </div>
          </div>

          {/* First 2 Cards */}
          {team.slice(0, 2).map((member, idx) => (
            <div key={idx} className="order-2 flex justify-center">
              <Card member={member} />
            </div>
          ))}

          {/* Button for mobile only (below cards) */}
          <div className="flex md:hidden justify-center items-center order-3 mt-4">
            <button className="bg-[#a3d9b1] text-md font-semibold px-6 py-3 rounded-md text-white hover:bg-[#8ed0a4] transition-all">
              See All Members
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;