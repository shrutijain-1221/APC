import React from 'react';
import './ShopBySeasonTheme.css';

const seasons = [
  { name: "Valentine's Day", image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80' },
  { name: 'Crawfish Boil', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80' },
  { name: 'Mardi Gras', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Easter', image: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80' },
  { name: '4th July', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
  { name: 'Ramadan/Eid', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
  { name: 'Halloween', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
  { name: 'Christmas', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80' },
  { name: 'New Year', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80' },
];

const ShopBySeasonTheme = () => {
  return (
    <section className="shop-season-section">
      <h2 className="shop-season-title">Shop by Season and Theme</h2>
      <div className="shop-season-gallery">
        {seasons.map((season) => (
          <div className="shop-season-card" key={season.name}>
            <img src={season.image} alt={season.name} className="shop-season-img" />
            <div className="shop-season-overlay">
              <span className="shop-season-name">{season.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopBySeasonTheme; 