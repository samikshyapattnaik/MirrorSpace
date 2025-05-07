import React from 'react'
import OfferHeader from '../header/OfferHeader'
import ResidentialHome from './ResidentialHome'
import ResidentialCard from './ResidentialCard'
import ResidentialBrands from './ResidentialBrands'
import ResidentialContact from './ResidentialContact'
import Footer from '../footer/Footer'
import DeliveryProcess from '../deliveryProcess/DeliveryProcess'
import Promise from '../OurPromises/Promise'

const ResidencialInterior = () => {
  return (
    <div>
        <OfferHeader />
        <ResidentialHome />
        <ResidentialCard/>
        <Promise />
        <ResidentialBrands />
        <DeliveryProcess />
        <ResidentialContact />
        <Footer />
    </div>
  )
}

export default ResidencialInterior