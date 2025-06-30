// pages/AccessoryDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { slugify } from '../utils/slugify';
import founder from '../assets/founder.png'
// Copy of the original categories and seasons
const categories = [
  "Headbands", "Scrunchies", "Alligator Bows", "Earrings", "Hair Clips/Pins",
  "Claw Clips", "Lanyards", "Key Circle/Chains", "Stadium bag straps", "Wristlets",
  "Mickey Ears", "Handcuffs", "Tote Bags", "Brooches", "Eye Masks", "Coin Purses",
  "Coasters", "Mobile Purses", "Clutches", "Trucker Hats", "Box Bags", "Wreath Sash"
];

const seasons = [
  "Valentine’s Day", "Crawfish Boil", "Mardi Gras", "Back to school", "Rodeo/Derby",
  "Summer", "Cancer Awareness", "Sorority", "Game Day", "High School/Collegiate",
  "Easter", "4th July", "Ramadan/Eid", "Queen’s B’day", "Disney/Swiftie",
  "Thanksgiving", "St. Patrick’s Day", "Halloween", "Christmas", "New Year",
  "Baby Shower", "Mother’s Day"
];

const AccessoryDetail = () => {
  const { type } = useParams();

  // Find the original category or season name based on slug
  const matchedLabel =
    categories.find(cat => slugify(cat) === type) ||
    seasons.find(season => slugify(season) === type) ||
    type; // fallback

  const products = [
    { id: 1, name: "Pink Headband", price: 12.99, image: founder },
    { id: 2, name: "Floral Scrunchie", price: 6.99, image:founder  },
    { id: 3, name: "Easter Clip Set", price: 10.99, image: founder },
        { id: 1, name: "Pink Headband", price: 12.99, image: founder },
    { id: 2, name: "Floral Scrunchie", price: 6.99, image:founder  },
    { id: 3, name: "Easter Clip Set", price: 10.99, image: founder },
        { id: 1, name: "Pink Headband", price: 12.99, image: founder },
    { id: 2, name: "Floral Scrunchie", price: 6.99, image:founder  },
    { id: 3, name: "Easter Clip Set", price: 10.99, image: founder },
        { id: 1, name: "Pink Headband", price: 12.99, image: founder },
    { id: 2, name: "Floral Scrunchie", price: 6.99, image:founder  },
    { id: 3, name: "Easter Clip Set", price: 10.99, image: founder },
        { id: 1, name: "Pink Headband", price: 12.99, image: founder },
    { id: 2, name: "Floral Scrunchie", price: 6.99, image:founder  },
    { id: 3, name: "Easter Clip Set", price: 10.99, image: founder },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 capitalize">Products for: {matchedLabel}</h2>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AccessoryDetail;
