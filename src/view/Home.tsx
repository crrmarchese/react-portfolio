import React from "react";
import NavbarNav from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
//import cmarcData from "../utils/cmarcData";
import './styles.css';


function Home() {
  return (
    <div className="body_wrapper">
      <NavbarNav
        mainlogo="logo.png"
      />
     <Footer  />
    </div>
  );
}

export default Home;