import React, { useState } from "react";
import img1 from "../../assets/residential/img1.jpg";
import img2 from "../../assets/residential/img2.jpg";
import img3 from "../../assets/residential/img3.jpg";  
import img4 from "../../assets/residential/img5.jpg";
import img5 from "../../assets/residential/img6.jpg";
import img6 from "../../assets/residential/img7.jpg";
import img7 from "../../assets/residential/img10.jpg";
import img8 from "../../assets/residential/img9.jpg";
import img9 from "../../assets/residential/img4.jpg";

const cardData = [
      {
        id: 1,
        text: "Elegant Living Room",
        description: "A spacious living room with luxurious furniture and refined decor.",
        image: img1,
      },
      {
        id: 2,
        text: "Contemporary Room Design",
        description: "A functional and stylish room with modern cabinetry and appliances.",
        image: img2,
      },
      {
        id: 3,
        text: "Classic Design",
        description: "A timeless classic Design layout with warm textures and comfortable furnishings.",
        image: img3,
      },
      {
        id: 4,
        text: "Lavish  Interior",
        description: "A room featuring elegant marble finishes and sophisticated lighting.",
        image: img4,
      },
      {
        id: 5,
        text: "Cozy Family Room",
        description: "A welcoming family space with plush sofas and a relaxed atmosphere.",
        image: img5,
      },
      {
        id: 6,
        text: "Outdoor Lounge Area",
        description: "A chic residential patio with stylish seating and greenery for relaxation.",
        image: img6,
      },
      {
        id: 7,
        text: "Artistic Home Office",
        description: "A creative workspace with bespoke shelving and inspiring decor.",
        image: img8,
      },
      {
        id: 8,
        text: "Children’s Bedroom",
        description: "A playful and vibrant room with smart storage and colorful themes.",
        image: img9,
      },
    {
        id: 9,
        text: "Functional Workspace",
        description: "A well-organized home office with ergonomic furniture and ample storage.",
        image: img7,
      },
];
  
export default function CommercialCard() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCopy = async () => {
    try {
      const response = await fetch(selectedCard.src);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob })
      ]);
      alert("Image copied to clipboard!");
    } catch (error) {
      alert("Failed to copy image.");
    }
  };

  return (
    <>
    <div className="container flex flex-col items-center justify-center w-full h-full mt-10">
      <h1 className="text-3xl font-bold text-center">Our Residential Designs</h1><br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(showAll ? cardData : cardData.slice(0, 3)).map((card) => (
          <div
            key={card.id}
            className="cursor-pointer rounded overflow-hidden shadow hover:scale-105 transition"
            onClick={() => setSelectedCard(card)}
          >
            <img src={card.image} 
            alt="Card" 
            className="w-full h-48 object-cover" />
            <h1 className="text-black mt-8 text-xl md:font-bold">{card.text}</h1>
            <p className="text-gray-700 mt-2">{card.description}</p>
           {/* <a href={skill.Link} className='text-primary hover:text-blue-600'>Learn More</a> */}
          </div>
          
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setShowAll(true)}
          >
            View More
          </button>
        </div>
      )}

      {selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center z-50">
          <img src={selectedCard.image} alt="Full" className="max-w-full max-h-[70vh] rounded shadow-lg" />
          <p className="text-white mt-4 text-xl">{selectedCard.text}</p>
          <div className="flex gap-4 mt-2">
            <button
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
              onClick={handleCopy}
            >
              Copy Image
            </button>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => setSelectedCard(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </> 
  );
}

