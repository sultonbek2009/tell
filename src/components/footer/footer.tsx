import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Mercedes-Benz</h2>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            The best or nothing. Experience innovation, design, and performance.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Company</span>
          <Link to="/about" className="text-sm text-gray-400 hover:text-white">
            About Us
          </Link>
          <Link
            to="/careers"
            className="text-sm text-gray-400 hover:text-white"
          >
            Careers
          </Link>
          <Link to="/press" className="text-sm text-gray-400 hover:text-white">
            Press
          </Link>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Vehicles</span>
          <Link to="/cars" className="text-sm text-gray-400 hover:text-white">
            Passenger Cars
          </Link>
          <Link to="/trucks" className="text-sm text-gray-400 hover:text-white">
            Trucks & Vans
          </Link>
          <Link
            to="/electric"
            className="text-sm text-gray-400 hover:text-white"
          >
            Electric Mobility
          </Link>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Services</span>
          <Link
            to="/finance"
            className="text-sm text-gray-400 hover:text-white"
          >
            Financial Services
          </Link>
          <Link
            to="/support"
            className="text-sm text-gray-400 hover:text-white"
          >
            Customer Support
          </Link>
          <Link
            to="/dealers"
            className="text-sm text-gray-400 hover:text-white"
          >
            Find a Dealer
          </Link>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Innovation</span>
          <Link to="/design" className="text-sm text-gray-400 hover:text-white">
            Design
          </Link>
          <Link to="/tech" className="text-sm text-gray-400 hover:text-white">
            Technology
          </Link>
          <Link
            to="/sustainability"
            className="text-sm text-gray-400 hover:text-white"
          >
            Sustainability
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Mercedes-Benz Group AG. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
