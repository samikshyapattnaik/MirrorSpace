import React from 'react'
import OfferHeader from '../header/OfferHeader'
import Footer from '../footer/Footer'
import CommercialHome from './CommercialHome'
import CommercialBrand from './CommercialBrand'
import CommercialContact from './CommercialContact'
import CommercialCard from './CommercialCard'
import DeliveryProcess from '../deliveryProcess/DeliveryProcess'

const CommercialInterior = () => {
  return (
    <div>
        <OfferHeader/>
        <CommercialHome />
        <CommercialBrand />
        <CommercialCard />
        <DeliveryProcess />
        <CommercialContact />
        <Footer />
    </div>
  )
}

export default CommercialInterior