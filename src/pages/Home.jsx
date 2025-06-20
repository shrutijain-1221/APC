import React from 'react'
import WholesalerHighlight from '../components/WholesalerHighlight'
import TrendingAccessories from '../components/TrendingAccessories'
import ShopBySeasonTheme from '../components/ShopBySeasonTheme'
import HowToPlaceOrder from '../components/HowToPlaceOrder'
import TeamMembers from '../components/TeamMembers'
import ImageCarousel from '../components/ImageCarousel'

const Home = () => {
  return (
    <>
      <WholesalerHighlight />
      <TrendingAccessories />
      <ShopBySeasonTheme />
      <HowToPlaceOrder />
      <TeamMembers />
      <ImageCarousel />
    </>
  )
}

export default Home