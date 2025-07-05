import { useState } from "react";
import { Link } from "react-router-dom";
import { navLink } from "../../constants";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="bg-background w-full h-20 flex justify-between items-center px-4 z-50">
      <h1 className="text-xl font-bold">Pyst.</h1>

      <div className="flex items-center gap-4">
           <div className="relative">
          <FiSearch
            size={20}
            className="cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />
          {showSearch && (
            <input
              type="text"
              placeholder="Search..."
              className="absolute top-8 right-0 border px-2 py-1 rounded w-40 shadow-md z-50 bg-white"
            />
          )}
        </div>

        <FiHeart size={20} className="cursor-pointer" />

        <FiShoppingCart size={20} className="cursor-pointer" />
        {navLink.map((nav) => (
          <Link
            key={nav.path}
            to={nav.path}
            className="hover:text-primary transition"
          >
            {nav.name}
          </Link>
        ))}

     

        <button className="py-1 px-4 border-2 border-black rounded-2xl hover:bg-black hover:text-white transition">
          Log in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
