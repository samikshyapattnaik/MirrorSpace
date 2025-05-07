import React from 'react'
import HallHome from './HallHome'
import OfferHeader from '../header/OfferHeader'
import HallContact from './HallContact'
import HallBrands from './HallBrands'
import Footer from '../footer/Footer'
import HallCard from './HallCard'
import DeliveryProcess from '../deliveryProcess/DeliveryProcess'
const HallInterior = () => {
  return (
    <div>
        <OfferHeader />
        <HallHome/>
        <HallBrands />
        <HallCard />
        <DeliveryProcess />
        <HallContact />
        <Footer />
    </div>
  )
}

export default HallInterior