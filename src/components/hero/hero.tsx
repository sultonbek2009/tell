
function Hero() {
  return (
    <div     style={{
        backgroundImage: `url('https://static.wixstatic.com/media/c837a6_977fd116499b43ae8f309afaf18cbade~mv2.jpg/v1/fill/w_1350,h_881,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_977fd116499b43ae8f309afaf18cbade~mv2.jpg')`,
        backgroundAttachment: "fixed",
      }} className='w-full h-screen bg-no-repeat bg-center bg-cover relative'>
    <div className="top-5 gap-5 absolute left-10">
        <h1 className="text-8xl  text-black  font-bold">Step-up Your Stride</h1>
      <p className="mt-10 text-2xl ">Premium Athletic Footwear</p>
      <button className="bg-black text-yellow-300 rounded-2xl py-1 px-2 mt-5">Shop Now</button>
    </div>
         <div className="absolute top-[800px] right-10 flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg">
        <img
          src='https://static.wixstatic.com/media/c837a6_977fd116499b43ae8f309afaf18cbade~mv2.jpg/v1/fill/w_1350,h_881,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_977fd116499b43ae8f309afaf18cbade~mv2.jpg'
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
