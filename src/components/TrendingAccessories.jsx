import React from 'react';

const trendingData = [
  {
    title: 'Beaded Headbands',
    description: 'Handcrafted turban-style headbands with intricate beadwork',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    link: '#',
    trending: 'Trending #1',
  },
  {
    title: 'Fashion Jewelry',
    description: 'Statement pieces for every season and occasion',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    link: '#',
    trending: 'Trending #2',
  },
  {
    title: 'Hair Accessories',
    description: 'Elegant hair clips, bands, and decorative pieces',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    link: '#',
    trending: 'Trending #3',
  },
];

const TrendingAccessories = () => {
  return (
    <section className="trending-accessories-section">
      <h2 className="trending-accessories-title">Trending Accessories</h2>
      <p className="trending-accessories-desc">
        Discover our most popular fashion accessories loved by customers worldwide
      </p>
      <div className="trending-accessories-cards">
        {trendingData.map((item) => (
          <div key={item.title} className="trending-accessories-card">
            <img src={item.image} alt={item.title} className="trending-accessories-img" />
            <h3 className="trending-accessories-card-title">{item.title}</h3>
            <p className="trending-accessories-card-desc">{item.description}</p>
            <a
              href={item.link}
              className="trending-accessories-link"
            >
              {item.trending} <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="/accessories"
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-black hover:bg-gray-800 transition-colors duration-200 rounded-md"
        >
          View More Accessories
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default TrendingAccessories; 