import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa"; // Font Awesome icon for LinkedIn
import { Homemade_Apple } from "@next/font/google"; // Import the Homemade Apple font

// Import the font used in the header
const homemadeApple = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white items-center justify-center">
      {/* "Have a Project in Mind?" Section */}
      <div className="footer-project-section relative text-white py-32 px-8">
        {/* Background Moving Images with 3 Columns */}
        <div className="absolute inset-0 z-0 overflow-hidden grid grid-cols-3 gap-4 moving-background">
          {/* Column 1 (Moving Up) */}
          <div className="image-track column-upwards">
            <img
              className="image-1 mb-4"
              src="/assets/maro-1.png"
              alt="Project 1"
            />
            <img
              className="image-2 mb-4"
              src="/assets/eq-3.png"
              alt="Project 2"
            />
            <img
              className="image-3 mb-4"
              src="/assets/eq-1.png"
              alt="Project 3"
            />
          </div>

          {/* Column 2 (Moving Down) */}
          <div className="image-track column-downwards">
            <img
              className="image-1 mb-4"
              src="/assets/maro-1.png"
              alt="Project 1"
            />
            <img
              className="image-2 mb-4"
              src="/assets/eq-3.png"
              alt="Project 2"
            />
            <img
              className="image-3 mb-4"
              src="/assets/eq-1.png"
              alt="Project 3"
            />
          </div>

          {/* Column 3 (Moving Up) */}
          <div className="image-track column-upwards">
            <img
              className="image-1 mb-4"
              src="/assets/maro-1.png"
              alt="Project 1"
            />
            <img
              className="image-2 mb-4"
              src="/assets/eq-3.png"
              alt="Project 2"
            />
            <img
              className="image-3 mb-4"
              src="/assets/eq-1.png"
              alt="Project 3"
            />
          </div>

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-6 max-w-[64%]">
            I'd love to hear from you! Whether you're ready to kickstart a new
            website or revamp an existing one, I'm here to help turn your ideas
            into reality.
          </p>
          <Link href="mailto:ask@hellopaska.com" className="email-button">
            <button
              id="secButton"
              className="bg-white text-black py-3 px-6 rounded-full flex items-center"
            >
              EMAIL ME
            </button>
          </Link>
        </div>
      </div>

      {/* Line before the big section */}
      <div className="footer-line mx-auto"></div>

      <div className="footer-content max-w-6xl mx-auto flex justify-between py-8">
        {/* Left Section - Email */}
        <div className="footer-email">
          <h2 className="text-4xl font-bold">ask@hellopaska.com</h2>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-contact text-right">
          <p className="text-xl mb-2 font-bold">Contact</p>
          <p className="text-gray-400 mb-1">Malang, Indonesia 🇮🇩</p>
          <p className="text-gray-400 mb-4">(+62) 813 3086 8828</p>
          <p className="text-yellow-200 font-bold">SOLI DEO GLORIA 💛</p>
        </div>
      </div>

      {/* Line after the big section */}
      <div className="footer-line mx-auto"></div>

      <div className="footer-bottom max-w-6xl mx-auto flex justify-between items-center mt-12">
        {/* Left Section - Logo */}
        <div className={homemadeApple.className} style={styles.logo}>
          <Link href="/" className="text-lg font-bold">
            Paska
          </Link>
        </div>

        {/* Right Section - Social Icons */}
        <div className="footer-social-icons">
          <Link href="https://linkedin.com/in/pas-ka" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#fff",
  },
};

export default Footer;
