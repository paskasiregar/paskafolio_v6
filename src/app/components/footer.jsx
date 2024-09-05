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
    <footer className="py-12 bg-black text-white">
      {/* Line before the big section */}
      <div className="mx-auto"></div>

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
          <p className="text-yellow-300 font-bold">SOLI DEO GLORIA 💛</p>
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
