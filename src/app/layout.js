import { Plus_Jakarta_Sans } from "next/font/google"; // Import Plus Jakarta Sans
import localFont from "next/font/local";
import "./globals.css";

// Load Plus Jakarta Sans from Google Fonts
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "700"], // Specify weights as needed
  subsets: ["latin"],
});

// Load local fonts: Geist Sans and Geist Mono
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "🚀 Paska | Portfolio",
  description:
    "Debora Paskarina&apos;s Product Portfolio. Paska is a Head of Product at Nematix Sdn Bhd, Malaysia.",
  icons: {
    icon: "/asset/p-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
