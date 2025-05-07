import React from 'react'
import BathroomBrands from './BathroomBrands'
import BathroomContact from './BathroomContact'
import BathroomHome from './BathroomHome'
import BathroomCards from './BathroomCards'
import Footer from '../footer/Footer'
import OfferHeader from '../header/OfferHeader'
import DeliveryProcess from '../deliveryProcess/DeliveryProcess'

const BathroomInteriors = () => {
  return (
    <div>
        <OfferHeader/>
        <BathroomHome />
        <BathroomBrands />
        <BathroomCards />
        <DeliveryProcess />
        <BathroomContact />

        <Footer/>
        
    </div>
  )
}

export default BathroomInteriors