import React, { useState } from "react";
import kidsBack from "../../assets/kidsBack.avif";
import kidsBack2 from "../../assets/kidsBack2.avif";
import kidsBack3 from "../../assets/kidsBack3.avif";

const KidsStyle = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex px-6 "
      style={{
        backgroundImage: `url(${kidsBack})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="z-10 space-y-10 max-w-xl">
        <h1 className="text-5xl md:text-7xl font-bold font-sans  leading-tight px-2 md:px-10">
          20% Off <br /> Kids Styles
        </h1>

        <p className="text-lg md:text-xl px-10 mb-5">
          Exclusive, one-time offer for stylish kidswear.
        </p>

        <div className="flex gap-6 px-10">
          <button
            className="bg-black px-6 py-3 text-amber-400 rounded-full text-sm 
            hover:bg-gray-200 hover:outline hover:text-black 
            transition-all duration-500 ease-in-out"
          >
            Shop Now
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex items-center w-[450px] h-[240px] gap-5 bg-white/50 backdrop-blur-sm p-5 rounded-lg shadow-lg transition-all duration-300">
        <img
          src={hovered ? kidsBack3 : kidsBack2}
          alt="Promo"
          className="w-60 h-55 object-cover rounded-lg transition duration-300"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <div>
          <h3 className="text-black text-xl pb-7  font-semibold ">
            Classic
            <br /> Comfort
          </h3>

          <div className="flex items-center gap-4 mt-2 mb-2">
            <h3 className="text-xl font-bold text-black">$73.00</h3>
            <h3 className="text-gray-500 line-through text-base">$90.00</h3>
          </div>

          <button
            className="outline font-medium text-xl rounded-4xl w-25 h-16  hover:bg-gray-200 hover:outline hover:text-black 
            transition-all duration-500 ease-in-out"
          >
            Add To
            <br /> Card
          </button>
        </div>
      </div>
    </section>
  );
};

export default KidsStyle;
