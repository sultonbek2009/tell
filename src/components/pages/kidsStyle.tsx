import React from "react";
import kidsBack from "../../assets/kidsBack.avif";
import kidsBack2 from "../../assets/kidsBack2.avif";

const KidsStyle = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex px-6 "
      style={{
        backgroundImage: `url(${kidsBack})`,
        backgroundAttachment: "fixed",
      }}
    >
     <div className="top-5 gap-5 absolute left-10">
        <h1 className="text-8xl text-black  font-bold">20% Off <br /> Kids Styles</h1>
      <p className="mt-10 text-2xl ">Exclusive, one-time offer</p>
      <button className="bg-black text-yellow-300 rounded-2xl py-1 px-2 mt-5">Shop Now</button>
    </div>

      <div className="absolute top-[800px] right-10 flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg">
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
