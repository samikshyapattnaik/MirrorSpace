import React from "react";
import asianpaints from "../../assets/Brands/asian.png";
import centuryply from "../../assets/Brands/centuryPly.png";
import cera from "../../assets/Brands/cera.png";
import dorset from "../../assets/Brands/dorset.png";
import havells from "../../assets/Brands/havells.png";
import hettich from "../../assets/Brands/hettich.png";
import kajaria from "../../assets/Brands/kajaria.png";
import kohler from "../../assets/Brands/kohler.png";
import philips from "../../assets/Brands/philips.png";
import somany from "../../assets/Brands/somany.png";
import ebco from "../../assets/Brands/ebco.jpg";
import yale from "../../assets/Brands/yale.png";

const brands = [
  { name: "Asian Paints", logo: asianpaints },
  { name: "Centuryply", logo: centuryply },
  { name: "CERA", logo: cera },
  { name: "Dorset", logo: dorset },
  { name: "Havells", logo: havells },
  { name: "Hettich", logo: hettich },
  { name: "Kajaria", logo: kajaria },
  { name: "Kohler", logo: kohler },
  { name: "Philips", logo: philips },
  { name: "Somany", logo: somany },
  { name: "ebco", logo: ebco },
  { name: "Yale", logo: yale },
];

const BrandGrid = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-orange-500 text-3xl font-bold">Over 300 Brands</h2>
        <p className="text-gray-700 mt-2">
          that’s what you get when you choose{" "}
          <span className="text-orange-500 font-semibold">Mirror Space</span>
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white rounded-full shadow-sm w-24 h-24 mx-auto"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="max-h-screen object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandGrid;
