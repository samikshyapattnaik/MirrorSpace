import React from 'react'
import OfferHeader from '../header/OfferHeader'
import KitchenHome from './KitchenHome'
import KitchenBrands from './KitchenBrands'
import KitchenCards from './KitchenCard'
import Promise from '../OurPromises/Promise'
import DelivaryProcess from '../deliveryProcess/DeliveryProcess'
import KitchenContact from './kitchenContact'
import Footer from '../footer/Footer'

const KitchenInterior = () => {
  return (
    <div>
      <OfferHeader />
      <KitchenHome />
      <Promise/>
      <KitchenCards/>
      <KitchenBrands/>
      <DelivaryProcess />
      <KitchenContact/>
      <Footer />
    </div>
  )
}

export default KitchenInterior