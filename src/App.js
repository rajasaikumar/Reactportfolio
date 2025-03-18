import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/about";
import "./App.css";
import Skills from "./components/skills";
import Education from "./components/education";
import Contact from "./components/contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Home />
        <About />
        <Skills/>
        <Education/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
