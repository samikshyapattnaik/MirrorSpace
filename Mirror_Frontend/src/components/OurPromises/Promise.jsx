import React from "react";
import img1 from "../../assets/our promise/img1.svg";
import img2 from "../../assets/our promise/img2.svg";
import img5 from "../../assets/our promise/img5.svg";
import img4 from "../../assets/our promise/img4.svg";
const promises = [
  {
    icon: img1,
    title: "10 years Warranty",
  },
  {
    icon: img2,
    title: "Customized Design Solution",
  },
  {
    icon: img4,
    title: "Transparent Modular Pricing",
  },
  {
    icon: img5,
    title: "High Quality Factory Finish",
  },
];

const OurPromises = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-8">Our Promises</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16">
        {promises.map((promise, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
          >
            <div className="text-orange-500 mb-4">
              <img src={promise.icon} alt="Promise Icon" className="w-16 h-16" />
            </div>
            <p className="text-lg font-medium text-gray-700">{promise.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPromises;
