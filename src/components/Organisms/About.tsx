import React from "react";
import AboutText from "../Molecules/AboutText";
import Avatar from "../Molecules/Avatar";

// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-7/12 flex justify-between flex-wrap content-center">
        <Avatar />
        <AboutText />
      </div>
    </div>
  );
};

export default About;
