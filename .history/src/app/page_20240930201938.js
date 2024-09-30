import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Ticker from "./components/ticker";
import Motivation from "./components/motivation";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experiences from "./components/experiences";
import Footer from "./components/footer";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div className="bg-black h-full w-full">
      <Head></Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2W451ZN9L3"
      ></Script>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-2W451ZN9L3"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-2W451ZN9L3');
  `}
      </Script>

      {/* Container with a max width for the whole page */}
      <div className="max-w-screen-xl mx-auto px-4">
        <Header />
        <Hero />
        <Ticker />
        <Motivation />
        <Skills />

        {/* Recent Experiences Section */}
        <div>
          <div className="motivation-title flex items-center mx-8">
            <div className="green-dot mr--4"></div>
            <h2 className="text-3xl font-bold text-white">Work Experience</h2>
          </div>
          <Experiences />
        </div>

        {/* Recent Projects Section */}
        <div>
          <div className="motivation-title flex items-center mx-8">
            <div className="green-dot mr-2"></div>
            <h2 className="text-3xl font-bold text-white">Recent projects</h2>
          </div>
          <Projects />
        </div>

        <Footer />
      </div>
    </div>
  );
}
