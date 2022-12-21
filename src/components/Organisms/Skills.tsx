import React from "react";
import Title from "../Atoms/Title";

import BackSkills from "../Molecules/BackSkills";
import FrontSkills from "../Molecules/FrontSkills";
import OtherSkills from "../Molecules/OtherSkills";

const Skills: React.FC = () => {
  return (
    <div className="w-full h-96 flex flex-col justify-center flex-wrap content-center">
      <div className="text-center">
        <Title>MINHAS SKILLS</Title>
      </div>
      <div className="w-3/4 flex justify-between mt-8">
        <FrontSkills />
        <BackSkills />
        <OtherSkills />
      </div>

      <video autoPlay muted loop className="object-cover absolute -z-10">
        <source src="/videos/background_skills.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Skills;
