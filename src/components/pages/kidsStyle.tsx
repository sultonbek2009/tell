import React from "react";
import kidsBack from "../../assets/kidsBack.avif";
import kidsBack2 from "../../assets/kidsBack2.avif";

const KidsStyle = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex px-6"
      style={{
        backgroundImage: `url(${kidsBack})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Yozuvlar blok */}
      <div className=" z-10">
        <h1
          className="text-5xl md:text-7xl font-medium mb-20 leading-tight 
             px-4 md:px-20 text-left"
        >
          20% Off <br /> Kids Styles
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Exclusive, one-time offer for stylish kidswear.
        </p>
        <div className="flex gap-6">
          <button
            className="bg-black px-6 py-3 text-amber-400 rounded-full text-sm 
             hover:bg-gray-200 hover:outline hover:text-black 
             transition-all duration-500 ease-in-out"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* O‘ng yuqori burchakda rasm + matn */}
      <div className="absolute top-10 right-10 flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg">
        <img
          src={kidsBack2}
          alt="Promo"
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="text-black text-lg font-semibold">Free Shipping</h3>
          <p className="text-sm text-gray-800">On orders over $50</p>
        </div>
      </div>
    </section>
  );
};

export default KidsStyle;
