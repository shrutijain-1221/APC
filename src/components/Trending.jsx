import React from 'react';
import hair from '../assets/hair.png'; // Replace with your actual path
import jewelry from '../assets/fashion.png'; // Replace with your actual path
import headband from '../assets/beaded.png'; // Replace with your actual path
import { NavLink } from 'react-router-dom';
const trendingItems = [
  {
    id: 1,
    title: 'Beaded Headbands',
    description: 'Handcrafted headbands with intricate beadwork for elegant styling.',
    image:headband, // Replace with your actual path
  },
  {
    id: 2,
    title: 'Fashion Jewelry',
    description: 'Statement jewelry for every season and occasion.',
    image: jewelry,
  },
  {
    id: 3,
    title: 'Hair Accessories',
    description: 'Elegant clips, bands, and decorative pieces.',
    image: hair
  },
];

const TrendingSection = () => {
  return (
    <section className=" mt-1 text-white py-10  sm:px-8 overflow-x-hidden">
      
      <h2 className="text-5xl text-[#232323] text-center font-oswald  font-medium mb-5"
      >
      Trending Now</h2>
       <p className="text-center text-xl mb-10 text-[#666]">
        Discover our most popular fashion accessories loved by customers worldwide
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {trendingItems.map((item, index) => (
          <div
            key={item.id}
            className="border overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            style={{
              borderColor: "#212121",
              borderWidth: "1px",
              borderStyle: "solid",
              color: "#212121", // Text color here
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 text-black text-center h-full">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-md min-h-[3rem] mt-2 mb-4">{item.description}</p>
              <button
                className="text-sm font-semibold px-5 py-2 border rounded-md"
                style={{
                  borderColor: "#212121",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  color: "#212121", // Text color here
                }}
              >
                Trending {index + 1} <span className="ml-1 text-xl">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
       <div className='mt-10 flex justify-center'>
        <NavLink
                  to="/trending"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#212121] px-5 py-2 rounded-md text-white"
                >
                  See All Trending
                </NavLink>
       </div>
    </section>
  );
};

export default TrendingSection;
