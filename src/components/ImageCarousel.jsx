import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const images = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
];

const getIndices = (active, length) => {
  // Returns [left, center, right] indices
  const left = (active - 1 + length) % length;
  const center = active;
  const right = (active + 1) % length;
  return [left, center, right];
};

const ImageCarousel = () => {
  const [active, setActive] = useState(0);
  const length = images.length;
  const [left, center, right] = getIndices(active, length);

  const prev = () => setActive((active - 1 + length) % length);
  const next = () => setActive((active + 1) % length);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className='carousel-main'>
      <h2 className="carousel-heading">Exhibition Photos</h2>
      <div className="carousel-3d-section">
        <button className="carousel-3d-arrow left" onClick={prev}>{'<'}</button>
        <div className="carousel-3d-track">
          <div className="carousel-3d-card left-card">
            <img src={images[left]} alt="carousel" className="carousel-3d-img" />
          </div>
          <div className="carousel-3d-card center-card">
            <img src={images[center]} alt="carousel" className="carousel-3d-img" />
          </div>
          <div className="carousel-3d-card right-card">
            <img src={images[right]} alt="carousel" className="carousel-3d-img" />
          </div>
        </div>
        <button className="carousel-3d-arrow right" onClick={next}>{'>'}</button>
      </div>
    </div>
  );
};

export default ImageCarousel; 