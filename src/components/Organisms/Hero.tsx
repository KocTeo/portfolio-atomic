import React from "react";
import HeroText from "../Molecules/HeroText";
import NavBar from "../Molecules/NavBar";

// import { Container } from './styles';

const Hero: React.FC = () => {
  return (
    <div className="h-screen">
      <div
        className="bg-hero h-4/6 md:h-full w-full bg-cover absolute -z-10"
        style={{ backgroundImage: 'url("/images/hero_image.jpg")' }}
      />
      <NavBar />
      <HeroText />
    </div>
  );
};

export default Hero;
