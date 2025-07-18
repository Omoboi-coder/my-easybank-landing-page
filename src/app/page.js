import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Articles />
    <Footer />
  </>
  );
}
