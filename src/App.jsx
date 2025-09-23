import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
// Import baaki components bhi

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
      {/* Yahan Projects, Experience, Skills, Contact laga do */}
    </>
  );
}
export default App;
