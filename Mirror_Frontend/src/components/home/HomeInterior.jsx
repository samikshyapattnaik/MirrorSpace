import React from 'react'
import OfferHeader from '../header/OfferHeader'
import Footer from '../footer/Footer'
import HomeBrands from './HomeBrands'
import HomeCards from './HomeCards'
import DeliveryProcess from '../deliveryProcess/DeliveryProcess'
import HomeContact from './HomeContact'
import Home from './Home'

const HomeInterior = () => {
  return (
    <div>
        <OfferHeader/>
        <Home />
        <HomeBrands />
        <HomeCards />
        <DeliveryProcess />
        <HomeContact />
        <Footer/>
    </div>
  )
}

export default HomeInterior