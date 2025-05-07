import React, { useState } from "react";
import img1 from "../../assets/commercial/img4.jpg";
import img2 from "../../assets/commercial/img2.jpg";
import img3 from "../../assets/commercial/img3.jpg";  
import img4 from "../../assets/commercial/img5.jpg";
import img5 from "../../assets/commercial/img6.jpg";
import img6 from "../../assets/commercial/img7.jpg";
import img7 from "../../assets/commercial/img8.jpg";
import img8 from "../../assets/commercial/img9.jpg";

const cardData = [
        {
          id: 1,
          text: "Modern Office Interior",
          description: "A sleek and open workspace with ergonomic furniture and collaborative zones.",
          image: img1,
        },
        {
          id: 2,
          text: "Retail Store Design",
          description: "A contemporary retail setup with vibrant displays and efficient layouts.",
          image: img2,
        },
        {
          id: 3,
          text: "Restaurant Interior",
          description: "A trendy dining space with ambient lighting and stylish furniture.",
          image: img3,
        },
        {
          id: 4,
          text: "Luxury Hotel Lobby",
          description: "An elegant and welcoming lobby with high-end materials and decor.",
          image: img4,
        },
        {
          id: 5,
          text: "Corporate Meeting Room",
          description: "A professional meeting space with modern AV equipment and sleek finishes.",
          image: img5,
        },
        {
          id: 6,
          text: "Café Interior Design",
          description: "A cozy café with rustic furniture, warm lighting, and inviting decor.",
          image: img6,
        },
        {
          id: 7,
          text: "Showroom Design",
          description: "A dynamic showroom with innovative displays and interactive spaces.",
          image: img7,
        },
        {
          id: 8,
          text: "Co-working Space",
          description: "A versatile and vibrant co-working space with private booths and open desks.",
          image: img8,
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
      <h1 className="text-3xl font-bold text-center">Our Commercial Designs</h1><br />
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

