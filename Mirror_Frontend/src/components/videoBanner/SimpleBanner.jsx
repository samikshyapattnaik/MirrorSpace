import React from "react";
const SimpleBanner = () => {
 
  return (
    <>
      <div className=" bg-gradient-to-r from-blue-300 to-green-200 dark:bg-slate-900 dark:text-black h-full">
        <div data-aos="fade-up" className="container py-8 md:py-12">
          <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 md:gap-8">
            <div className="px-2">
            <iframe 
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/KNSO9ojHCYg?si=2dmO95UZeOuJHGtQ"
                title="YouTube video player" 
                frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 referrerpolicy="strict-origin-when-cross-origin" 
                 allowfullscreen></iframe>
            </div>
            <div className="flex flex-col items-center gap-4 text-center text-white md:col-span-2  md:items-start md:text-left">
              <h1 className="text-3xl font-bold">
                Market your next project with us
              </h1>
              <p>
                Bricknbar Mirror is a modern, minimalist, and stylish website template that combines modern design and minimalistic functionality. It's perfect for businesses looking to showcase their products, services, or ideas.
              </p>
              <button className="btn-primary !bg-white !text-black">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleBanner;
