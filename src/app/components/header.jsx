import React from "react";
import Link from "next/link";
import Button from "./button";
import { Homemade_Apple } from "next/font/google";

const homemadeApple = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="header" style={styles.header}>
      <div style={styles.logo}>
        <Link
          href="/"
          className={homemadeApple.className}
          style={styles.logoText}
        >
          Paska
        </Link>
      </div>
      <div style={styles.contact}>
        <Link href="#email-section">
          <Button />
        </Link>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 49px",
    backgroundColor: "#000000",
    color: "#fff",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  logoText: {
    textDecoration: "none",
    color: "#fff",
  },
  contact: {
    display: "flex",
    fontSize: "20px",
    alignItems: "center",
  },
};

export default Header;
