import React from "react";
import Nav from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Partner from "./components/Partner";
import Magic from "./components/Magic";
import Train from "./components/Train";
import Allocate from "./components/Allocate";
import Getstarted from "./components/Getstarted";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

const App = () => {
  return (
    <main>
      <Nav />
      <div className=" overflow-x-hidden ">
        <div className="  lg:max-w-[1470px] lg:min-w-[1340px]  mx-auto ">
          <HeroSection />
          <Partner />
          <Magic />
          <Train />
          <Slider />
          <Allocate />
          <Getstarted />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
