import React from "react";
import carBack from "../../assets/024a10175e9436511af9cbaaaeff8e96.jpg";
import carBack2 from "../../assets/f2d10456ef216956afc48168c96167fb.jpg";

const CarStyle = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center px-20"
      style={{
        backgroundImage: `url(${carBack})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-3xl space-y-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          20% Off Luxury Cars
        </h1>
        <p className="text-lg text-gray-300 max-w-lg">
          Discover premium performance and comfort. Drive your dream car today
          with our exclusive offer.
        </p>

        <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition">
          Explore Models
        </button>
      </div>

      {/* Minimal floating info */}
      <div className="absolute bottom-16 right-16 flex items-center gap-4 bg-black/80 text-white py-3 px-6 rounded-full shadow-md">
        <img
          src={carBack2}
          alt="Promo"
          className="w-12 h-12 object-cover rounded-full border border-gray-500"
        />
        <div>
          <h3 className="text-base font-semibold">Free Test Drive</h3>
          <p className="text-sm text-gray-300">Book today & feel the power</p>
        </div>
      </div>
    </section>
  );
};

export default CarStyle;
