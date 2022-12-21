import React from "react";
import Title from "../Atoms/Title";

// import { Container } from './styles';

const AboutText: React.FC = () => {
  return (
    <div className="w-4/6">
      <Title>Quem sou eu?</Title>
      <p className="text-white text-2xl mt-8 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis
        ullam nobis blanditiis nesciunt provident ipsam distinctio repellat
        commodi, vitae quidem quos illum magnam itaque sint debitis fugiat
        voluptatum accusantium!
      </p>
      <p className="text-white text-2xl mt-8 text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis
        ullam nobis blanditiis nesciunt provident ipsam distinctio repellat
        commodi, vitae quidem quos illum magnam itaque sint debitis fugiat
        voluptatum accusantium!
      </p>
    </div>
  );
};

export default AboutText;
