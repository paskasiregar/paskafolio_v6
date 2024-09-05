import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="bg-black h-full w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <Header />
        <main className="py-12 text-white">
          <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
          {/* Your contact form or contact details go here */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
