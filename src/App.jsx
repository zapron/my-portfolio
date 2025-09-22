import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
// Import baaki components bhi

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects/>
      {/* Yahan Projects, Experience, Skills, Contact laga do */}
    </>
  );
}
export default App;
