function FooterCard() {
  return (
    <div className="py-20 bg-white">
      {/* Title */}
      <h1 className="ml-6 text-2xl sm:text-3xl font-light tracking-wider uppercase">
        Mashina kolleksiyasi
      </h1>

      {/* Grid Wrapper */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20">
        {/* Card 1 */}
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            className="w-full h-80 lg:h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDCZr5Sc6iO-u5KZVCsFcEdp3dmAj_aIm3A&s"
            alt="Mercedes AMG GT"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 flex items-center justify-center">
            <button className="border border-white px-8 py-3 text-sm font-medium tracking-wide text-white rounded-full hover:bg-white hover:text-black transition">
              MERCEDES AMG GT
            </button>
          </div>
          <div className="p-4 bg-white">
            <p className="text-gray-700 text-sm">
              <strong>Motor:</strong> 4.0L V8 Twin-Turbo <br />
              <strong>Razgon:</strong> 0–100 km/h – 3.5 soniya <br />
              <strong>Quvvat:</strong> 577 ot kuchi
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            className="w-full h-80 lg:h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSqr-DKoF1qccdMvKW-N5WMFqcYm2iTde-Q&s"
            alt="BMW M5 Competition"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 flex items-center justify-center">
            <button className="border border-white px-8 py-3 text-sm font-medium tracking-wide text-white rounded-full hover:bg-white hover:text-black transition">
              Mers gt 63
            </button>
          </div>
          <div className="p-4 bg-white">
            <p className="text-gray-700 text-sm">
              <strong>Motor:</strong> 4.4L V8 Twin-Turbo <br />
              <strong>Razgon:</strong> 0–100 km/h – 3.3 soniya <br />
              <strong>Quvvat:</strong> 625 ot kuchi
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group overflow-hidden rounded-lg shadow-md">
          <img
            className="w-full h-80 lg:h-[500px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            src="https://avatars.mds.yandex.net/get-vh/6331688/2a00000194351f634324a0302f40d040332a/smart_crop_516x290"
            alt="Audi RS7"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500 flex items-center justify-center">
            <button className="border border-white px-8 py-3 text-sm font-medium tracking-wide text-white rounded-full hover:bg-white hover:text-black transition">
              Mers gt 63 Class
            </button>
          </div>
          <div className="p-4 bg-white">
            <p className="text-gray-700 text-sm">
              <strong>Motor:</strong> 4.0L V8 Twin-Turbo <br />
              <strong>Razgon:</strong> 0–100 km/h – 3.6 soniya <br />
              <strong>Quvvat:</strong> 591 ot kuchi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCard;
