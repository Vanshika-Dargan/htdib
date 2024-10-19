import { Footer } from "@/components/Footer";
import { Features } from "@/sections/Features";
import { Hero } from "@/sections/Hero"
import { Navbar } from "@/sections/Navbar";
import { Services } from "@/sections/Services";
export default function Home(){
  return (
    <>
    <Navbar />
    <Hero />
    <Services/>
    <Features/>
    <Footer/>
    </>
  );
}