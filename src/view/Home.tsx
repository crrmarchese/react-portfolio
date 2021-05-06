import React from "react";
import NavbarNav from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects"
import Footer from "../components/Footer/Footer";
import './styles.css';


function Home() {
  return (
    <div className="body_wrapper">
      <NavbarNav
        mainlogo="logo.png"
      />
      <About />
      <Projects />
     <Footer  />
    </div>
  );
}

export default Home;