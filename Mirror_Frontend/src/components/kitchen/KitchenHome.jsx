// BannerWithContact.jsx
import React from "react";
import kitchenBanner from "../../assets/kitchen/kitchen1.jpg"; 
const BannerWithContact = () => {
  return (
    <div className="relative w-full h- bg-cover bg-center" style={{ backgroundImage: `url(${kitchenBanner})` }}>
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default BannerWithContact;
