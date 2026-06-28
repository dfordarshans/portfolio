import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Internship from "@/components/Internship";
import Certifications from "@/components/Certifications";
import CodingProfiles from "@/components/CodingProfiles";
import Dashboard from "@/components/Dashboard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Internship />
        <Certifications />
        <CodingProfiles />
        <Dashboard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
