import { useState } from "react";
import { Link } from "react-router-dom";
import { navLink } from "../../constants";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="bg-white w-full h-20 flex items-center justify-between px-6 shadow-md fixed top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide text-black">
        Mersedes Benz
      </h1>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLink.map((nav) => (
          <Link
            key={nav.path}
            to={nav.path}
            className="text-gray-700 hover:text-black transition font-medium"
          >
            {nav.name}
          </Link>
        ))}
      </div>

      {/* Icons + login */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="relative">
          <FiSearch
            size={22}
            className="cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="absolute top-8 right-0 border px-3 py-1.5 rounded w-48 shadow-lg z-50 bg-white transition"
            />
          )}
        </div>

        <FiHeart size={22} className="cursor-pointer hover:text-red-500" />
        <FiShoppingCart
          size={22}
          className="cursor-pointer hover:text-green-600"
        />

        <button className="hidden md:block py-1.5 px-5 border-2 border-black rounded-full hover:bg-black hover:text-white transition">
          Log in
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileMenu && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-6 md:hidden z-40">
          {navLink.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className="text-gray-700 hover:text-black text-lg font-medium"
              onClick={() => setMobileMenu(false)}
            >
              {nav.name}
            </Link>
          ))}
          <button className="py-2 px-6 border-2 border-black rounded-full hover:bg-black hover:text-white transition">
            Log in
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
