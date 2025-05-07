import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/kitchen/kitchen.jpg";
import img2 from "../../assets/kitchen/kitchen4.jpg";
import img3 from "../../assets/kitchen/kitchen9.jpg";

const slides = [
  {
    text: "Welcome to the Kitchen",
    button: "Book Now",
    path:"/kitchen",
    image: img1,
  },
  {
    text: "Explore the Space",
    button: "See More",
    path:"/kitchen",
    image: img2,
  },
  {
    text: "Discover New Recipes",
    button: "Let's Go",
    path:"/kitchen",
    image: img3,
  },
];

export default function kitchenHomeS() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full relative"
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-2xl">
              <div>{slide.text}</div>
              <button 
              onClick={()=>handleButtonClick(slide.path)}
              className="mt-4 px-6 py-2 text-black rounded hover:bg-gray-200 transition bg-primary">
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow Button */}
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
        onClick={nextSlide}
      >
        <ArrowDown size={32} />
      </button>
    </div>
  );
}
