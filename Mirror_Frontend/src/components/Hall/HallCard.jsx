import React, { useState } from "react";
import img1 from "../../assets/Hall/hall2.jpg";
import img2 from "../../assets/Hall/hall5.jpg";
import img3 from "../../assets/Hall/hall6.jpg";
import img4 from "../../assets/Hall/hall7.jpg";
import img5 from "../../assets/Hall/hall8.jpg";
import img6 from "../../assets/Hall/hall9.jpg";
import img7 from "../../assets/Hall/hall3.jpg";
import img8 from "../../assets/Hall/hall1.jpg";


const cardData = [
  { 
    id: 1,
     text:" Modern Hall",
    description: " A modern hall with sleek lines and contemporary decor.",
     image: img1 },
  {
     id: 2,
    text:" Classic Hall",
    description: "A classic hall with timeless design and elegant furnishings.",
    image: img2 },
  { 
    id: 3,
   text: " Spacious Hall",
    description: "A spacious hall with high ceilings and large windows.",
   image: img3 },
  { 
    id: 4, 
    text:" Rustic Hall",
    description: "A rustic hall with natural materials and a cozy atmosphere.", 
    image: img4 },
  { 
    id: 5,
    text: " Stylish Hall",
    description: "A hall with a unique layout and stylish decor.",
    image: img5 },
 {
   
    id: 6,
    text: "Functional Hall",
    description: "A hall kitchen with modern appliances and a functional layout.",
    image: img6 ,

 },
 { 
  id: 7,
  text: " Elegant Hall",
  description: "An elegant hall with luxurious furnishings and decor.",
  image: img7 
},
{ 
  id: 8,
  text: " Artistic Hall",
  description: "A hall with a unique design and artistic elements.",
  image: img8 
},
];
export default function HallCard() {
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
      <h1 className="text-3xl font-bold text-center">Our Hall Designs</h1><br />
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

