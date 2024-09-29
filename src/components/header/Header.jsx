import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR COLLECTION</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            LATEST PRODUCTS
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOW NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide w-full sm:w=1/2"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://media.routine.vn/0x0/prod/media/banner-website-moi-09-jpg.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://media.routine.vn/1920x0/prod/media/d-active-wear-nam-jpg.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.routine.vn/0x0/prod/media/882e5c12-4b5f-4fb0-ad2c-0c781d44ccc1.webp"
              className="d-block w-100 h-85"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
