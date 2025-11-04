import Header from "./components/Header";
import HomeSection from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Tastimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <HomeSection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services /> 
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
