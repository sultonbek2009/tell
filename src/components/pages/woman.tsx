import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex justify-center space-x-8 py-10 bg-black">
      <a
        href="https://www.facebook.com/MercedesBenz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-4xl transition"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/mercedesbenz/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-4xl transition"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/MercedesBenz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-4xl transition"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.youtube.com/user/MercedesBenzTV"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white text-4xl transition"
      >
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialMedia;
