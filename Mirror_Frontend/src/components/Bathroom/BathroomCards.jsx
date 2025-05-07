import React, { useState } from "react";
import img1 from "../../assets/bathroom/img4.jpg";
import img2 from "../../assets/bathroom/img2.jpg";
import img3 from "../../assets/bathroom/img3.jpg";  
import img4 from "../../assets/bathroom/img5.jpg";
import img5 from "../../assets/bathroom/img6.jpg";
import img6 from "../../assets/bathroom/img7.jpg";
import img7 from "../../assets/bathroom/img8.jpg";
import img8 from "../../assets/bathroom/img9.jpg";
const cardData = [
    {
      id: 1,
      text: "Modern Minimalist Bathroom",
      description: "A sleek bathroom with clean lines, neutral tones, and minimal decor.",
      image: img1,
    },
    {
      id: 2,
      text: "Luxury Spa Bathroom",
      description: "A bathroom with a freestanding tub, ambient lighting, and spa-like elements.",
      image: img2,
    },
    {
      id: 3,
      text: "Rustic Bathroom Design",
      description: "A warm bathroom featuring natural wood finishes and stone accents.",
      image: img3,
    },
    {
      id: 4,
      text: "Industrial Bathroom Style",
      description: "A bathroom with concrete textures, exposed pipes, and bold lighting.",
      image: img4,
    },
    {
      id: 5,
      text: "Classic White Bathroom",
      description: "A timeless design with all-white tiles and elegant fixtures.",
      image: img5,
    },
    {
      id: 6,
      text: "Coastal Bathroom Theme",
      description: "A light and airy bathroom with ocean hues and seaside decor.",
      image: img6,
    },
    {
      id: 7,
      text: "Vintage Bathroom Decor",
      description: "A charming bathroom with clawfoot tubs and ornate mirrors.",
      image: img7,
    },
    {
      id: 8,
      text: "Eco-friendly Bathroom",
      description: "A sustainable bathroom with bamboo accessories and water-saving fixtures.",
      image: img8,
    },
  ];

export default function CardGallery() {
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
      <h1 className="text-3xl font-bold text-center">Our Bathroom Designs</h1><br />
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

