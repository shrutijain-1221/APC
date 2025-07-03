import React from 'react'
import APCotureHighlight from '../components/APCotureHighlight'
import Trending from '../components/Trending'
import ShopBySeason from '../components/ShopBySeason';
import HowToPlace from '../components/HowToPlace';
import TeamMembers from '../components/Team';
import Team from '../components/Team';
import TestimonalCarousel from '../components/TestimonalCarousel';
import VideoCarousel from '../components/VideoCarousel';
import HomePageVideo from '../components/HomePageVideo';
import Ethical from '../components/Ethical';
import TwentyFour from '../components/TwentyFour';
const Home = () => {
  
  return (
   <>
   <HomePageVideo/>
    {/* <APCotureHighlight/> */}
    <ShopBySeason/>
    <Trending/>
    {/* <section className="shop-season-section">
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
    </section> */}
    <HowToPlace/>
    <Ethical/>
    
    
<Team/>
<TestimonalCarousel/>
<TwentyFour/>

   </>
  )
}

export default Home