import React from "react";

const BannerDetails = ({ reverse }) => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
          {/* text container */}
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className={`flex flex-col items-start gap-4 text-left md:items-start p-4 md:p-8 md:text-left ${
              reverse ? "md:order-last" : ""
            } `}
          >
            <h1 className="text-2xl md:text-5xl front-semibold text-center font-serif">
                <span className="text-red-700">Welcome to</span> Bricknbar Mirror       
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
                Bricknbar Mirror is a modern, minimalist, and stylish website template that
                combines modern design and minimalistic functionality. It's perfect for
                businesses looking to showcase their products, services, or ideas.
            </p>
            <div>
              <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                <li className="font-medium">
                At BricknBar Mirror, we love combining wood, glass, and metal for a warm,aesthetic.
                </li>
                <li className="font-medium">
                Go for calming tones or energizing hues—color sets the mood in every room.
                </li>
                <li className="font-medium">
                Our signature mirrors aren’t just stylish—they reflect light and visually expand any room.
                </li>
              </ul>
            </div>
            <a href="https://bricknbar.com/" target="_blank">
            <button className="btn-primary">Book Now</button>

            </a>
          </div>

          {/* img container */}
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className={reverse ? "order-1" : ""}
          >
            <img
              src="/Banner.jpeg"
              alt="not found"
              className="mx-auto w-full p-4 md:max-w-[400px] rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDetails;
