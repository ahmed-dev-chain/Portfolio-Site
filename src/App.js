import React, { useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/loader/Loader";
import "./App.css";

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/About"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Resume = lazy(() => import("./components/resume/Resume"));
const Projects = lazy(() => import("./components/projects/Projects"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));
const ScrollUp = lazy(() => import("./components/scrollUp/ScrollUp"));

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 });
  }, []);

  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
        <ScrollUp />
      </Suspense>
    </div>
  );
}

export default App;
