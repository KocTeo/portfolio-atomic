import React from "react";
import HeroText from "../Molecules/HeroText";
import NavBar from "../Molecules/NavBar";

// import { Container } from './styles';

const Hero: React.FC = () => {
  return (
    <div className="h-screen">
      <NavBar />
      <HeroText />
    </div>
  );
};

export default Hero;
