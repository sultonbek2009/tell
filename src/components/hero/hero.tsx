
function Hero() {
  return (
    <div className='w-full flex'>
    <div>
        <h1>Step-up Your Stride</h1>
      <p>Premium Athletic Footwear</p>
      <button>Shop Now</button>
    </div>
         <div className="absolute top-10 right-10 flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg">
        <img
          src={'../../assets/kidsBack.avif'}
          alt="Promo"
          className="w-20 h-20 object-cover rounded-md"
        />
        <div>
          <h3 className="text-black text-lg font-semibold">Free Shipping</h3>
          <p className="text-sm text-gray-800">On orders over $50</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
