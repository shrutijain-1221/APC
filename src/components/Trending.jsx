import React from 'react';
import { NavLink } from 'react-router-dom';
import fashion from '../assets/Fashion_Accessories.jpeg'
import totebag from  '../assets/Tote_Bags_Clutuches.jpeg'
import headband from '../assets/trending3.jpg';

const trendingBg = 'https://apc-assets-2025.s3.ap-northeast-1.amazonaws.com/apc_videos/trendingBg.mp4';

const trendingItems = [
  {
    id: 1,
    title: 'Beaded Headbands',
    description: 'Handcrafted headbands with intricate beadwork for elegant styling.',
    image: headband,
  },
  {
    id: 2,
    title: 'Fashion Accessories',
    description: 'Statement jewelry for every season and occasion.',
    image: fashion,
  },
  {
    id: 3,
    title: 'Clutches & Tote Bags',
    description: 'Elegant clips, bands, and decorative pieces.',
    image: totebag,
  },
];

const TrendingSection = () => {
  return (
    <section className="relative text-white py-10 sm:px-8 bg-[#CBDAC5] overflow-hidden ">
      {/* Background video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={trendingBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#f5f5f5] bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20">
        <h2 className="text-3xl text-black text-center mb-5 uppercase tracking-wider" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 200 }}>
          Trending Now
        </h2>
        <div className="h-px w-[1000px] bg-black mx-auto mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {trendingItems.map((item, index) => (
            <div
              key={item.id}
              className="overflow-hidden shadow-lg hover:scale-105 transition-transform rounded-lg bg-[#f5f5f5] duration-300 border"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover "
              />
              <div className="p-5 text-black text-center h-full">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-md min-h-[3rem] mt-2 mb-4">{item.description}</p>
             <div className="flex justify-center mt-4">
  <button
    className="text-sm font-semibold px-6 py-2 border rounded-md flex items-center justify-center gap-1"
    style={{
      borderColor: "#212121",
      borderWidth: "1px",
      color: "#212121",
    }}
  >
    Trending {index + 1} <span className="text-xl">→</span>
  </button>
</div>


              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <NavLink
            to="/trending"
            className="bg-[#212121] px-5 py-2 rounded-md text-white hover:bg-[#111]"
          >
            See All Trending
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
