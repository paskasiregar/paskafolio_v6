import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { Homemade_Apple } from "next/font/google";

const homemadeApple = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white items-center justify-center">
      {/* "Have a Project in Mind?" Section */}
      <div className="footer-project-section relative text-white px-4 md:px-8 lg:px-12">
        {/* Background Moving Images with 3 Columns */}
        <div className="absolute inset-0 z-0 overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-4 moving-background">
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
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>

        {/* Content Section */}
        <div
          className="relative z-10 flex flex-col justify-center items-center text-center md:text-left max-w-3xl md:max-w-6xl mx-auto min-h-auto
        "
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="md:text-lg mb-6 max-w-full md:max-w-[64%]">
            I would love to hear from you. Whether you are ready to kickstart a
            new website or revamp an existing one, I am here to help turn your
            ideas into reality.
          </p>
          <Link
            href="mailto:debora.paskarina@gmail.com"
            className="email-button items-center justify-center"
          >
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

      {/* Email and Contact Info */}
      <div
        className="footer-content max-w-6xl mx-auto flex flex-col md:flex-row justify-between py-8"
        id="email-section"
      >
        {/* Left Section - Email */}
        <div className="footer-email mb-6 md:mb-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">ask@hellopaska.com</h2>
        </div>

        {/* Right Section - Contact Info */}
        <div className="footer-contact text-center md:text-right">
          <p className="text-xl mb-2 font-bold">Contact</p>
          <p className="text-gray-400 mb-1">Malang, Indonesia 🇮🇩</p>
          <p className="text-gray-400 mb-4">(+62) 813 3086 8828</p>
          <p className="text-yellow-200 font-bold">SOLI DEO GLORIA 💛</p>
        </div>
      </div>

      {/* Line after the big section */}
      <div className="footer-line mx-auto"></div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mt-12">
        {/* Left Section - Logo */}
        <div className={homemadeApple.className} style={styles.logo}>
          <Link href="/" className="text-lg font-bold">
            Paska
          </Link>
        </div>

        {/* Right Section - Social Icons */}
        <div className="footer-social-icons mt-6 md:mt-0">
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
