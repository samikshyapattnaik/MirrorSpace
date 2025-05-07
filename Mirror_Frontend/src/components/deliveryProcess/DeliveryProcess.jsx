import React from "react";
import { FaUsers, FaCogs, FaFileAlt, FaTools, FaTruck } from "react-icons/fa";

const steps = [
    { id: 1, title: "Get a Customized Design", icon: <FaUsers /> },
    { id: 2, title: "Choose your style of Finish", icon: <FaCogs /> },
    { id: 3, title: "Add Hardware, Sinks & Appliances", icon: <FaTools /> },
    { id: 4, title: "Get a Personalized Quotation", icon: <FaFileAlt /> },
    { id: 5, title: "Quick At-home Installation", icon: <FaTruck /> },
];

export default function DeliveryProcess() {
  return (
    <section className="bg-white py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Your Home Interior will be delivered in <span className="text-orange-500">30 days</span>
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="group border rounded-xl p-6 text-center shadow hover:shadow-lg transition-all duration-300"
          >
            <div className="text-orange-500 text-4xl mb-3 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <div className="text-lg font-semibold text-gray-700 mb-1">0{step.id}</div>
            <p className="text-sm text-gray-600">{step.title}</p>
          </div>
        ))}
      </div>

      {/* Optional Footer Visual */}
      <div className="mt-10 text-center">
        <p className="text-orange-600 font-semibold text-lg mb-2">It's done</p>
        <p className="text-gray-700 text-sm">Your All Interior will be delivered in 30 days</p>        
      </div>
    </section>
  );
}
