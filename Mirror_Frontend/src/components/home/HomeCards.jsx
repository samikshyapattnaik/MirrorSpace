import React, { useState } from "react";
import img1 from "../../assets/home/img1.jpg";
import img2 from "../../assets/home/img2.jpg";
import img3 from "../../assets/home/img3.jpg";  
import img4 from "../../assets/home/img5.jpg";
import img5 from "../../assets/home/img6.jpg";
import img6 from "../../assets/home/img7.jpg";
import img7 from "../../assets/home/img10.jpg";
import img8 from "../../assets/home/img9.jpg";
import img9 from "../../assets/home/img4.jpg";

const cardData = [
   
  {
    id: 1,
    text: "Cozy Living Room",
    description: "A warm and inviting living room with comfortable seating and soft lighting.",
    image: img1,
  },
  {
    id: 2,
    text: "Modern interior",
    description: "A sleek with modern interior and a spacious layout.",
    image: img2,
  },
  {
    id: 3,
    text: "Outdoor Patio",
    description: "A stylish outdoor space with comfortable seating and greenery.",
    image: img4,
  },
  {
    id: 4,
    text: "Minimalist Hallway",
    description: "A clean and simple hallway with modern art and neutral colors.",
    image: img5,
  },
  {
    id: 5,
    text: "Elegant Entryway",
    description: "A welcoming entryway with stylish furniture and decor.",
    image: img6,
  },
  {
    id: 6,
    text: " Elegance areal Dining Room",
    description: "An elegant dining space with a statement table and chic lighting fixtures.",
    image: img7,
  },
  {
    id: 7,
    text: "Playful Children's Room",
    description: "A vibrant and playful bedroom with fun decor and smart storage solutions.",
    image: img8,
  },
  {
    id: 8,
    text: "Peaceful Reading Nook",
    description: "A cozy corner with a comfortable chair and natural light for relaxing moments.",
    image: img9,
  },
  {
    id:9,
    text:"functional workspace",
    description:"A well-organized workspace with ergonomic furniture and efficient storage solutions.",
    image: img3,
  }
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

