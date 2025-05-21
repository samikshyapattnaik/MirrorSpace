import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 flex items-center justify-center p-6">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-2xl w-full p-8 text-center border border-gray-200">
        <h1 className="text-6xl font-extrabold text-blue-800 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          🤖 Beep Boop! Page Not Found.
        </h2>
        <p className="text-gray-600 mb-6">
          Our friendly robot searched everywhere, but couldn’t find this page.
        </p>
        <img
          src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif"
          alt="Funny robot 404"
          className="mx-auto mb-6 rounded-xl shadow-md w-full max-w-sm"
        />
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200"
        >
          🏠 Go Back Home
        </button>
      </div>
    </div>
  );
}
