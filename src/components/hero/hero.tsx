function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url('https://i.pinimg.com/736x/c3/78/c1/c378c169ebe43a139d4dbf6f265d2763.jpg')`,
        backgroundAttachment: "fixed",
      }}
      className="w-full h-screen bg-no-repeat bg-center bg-cover relative flex items-center"
    >
      {/* Content Left */}
      <div className="px-6 sm:px-12 lg:px-20 max-w-xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white font-bold leading-tight">
          Step-up Your Stride
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white">
          Premium Athletic Footwear
        </p>
        <button className="mt-8 bg-black text-white hover:bg-gray-900 transition px-6 py-3 rounded-full text-sm sm:text-base font-medium shadow-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
