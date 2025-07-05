import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-black py-12 px-6 border-t mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-8xl font-bold">Pyst.</h2>
          <p className="max-w-sm text-sm text-gray-600 mt-5">
            Your favorite place for shopping smart, smooth and secure.
          </p>
        </div>

        <div className="flex gap-8 flex-wrap">
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Company</span>
            <Link to="/about" className="text-sm text-gray-600 hover:text-yellow-400">
              About Us
            </Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-yellow-400">
              Contact
            </Link>
            <Link to="/careers" className="text-sm text-gray-600 hover:text-yellow-400">
              Careers
            </Link>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-semibold">Help</span>
            <Link to="/support" className="text-sm text-gray-600 hover:text-yellow-400">
              Support
            </Link>
            <Link to="/faq" className="text-sm text-gray-600 hover:text-yellow-400">
              FAQ
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <Link
            to="/login"
            className="px-5 py-2 border text-yellow-400 rounded-lg hover:bg-black  transition text-sm"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 border text-yellow-400  border-yellow-400 rounded-lg hover:text-yellow-400 hover:bg-black  transition text-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Pyst. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
