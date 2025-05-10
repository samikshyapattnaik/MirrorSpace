import React from 'react'

const OfferHeader = () => {
  return (
    <>
 <div className="flex items-center justify-center bg-orange-300 py-1 px-4 shadow-md space-x-4 text-center">
      <h3 className="text-xl text-red-500 mt-1">🔥 Limited Time Offer</h3>
      <p className="text-base text-gray-700 mt-1">
        Get <span className="font-semibold text-black">30% off</span> on all items this weekend only!
      </p>
    </div>
    </>
  )
}

export default OfferHeader