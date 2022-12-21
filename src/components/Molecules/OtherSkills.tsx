import { Docker, Git, Jest, Python } from "public/svgs";
import React from "react";
import Icon from "../Atoms/Icon";
import SubTitle from "../Atoms/SubTitle";

const OtherSkills: React.FC = () => {
  const icons = [Docker, Git, Jest, Python];
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <SubTitle>OUTRAS</SubTitle>
      <div className="w-80 flex flex-wrap justify-center content-center mt-6">
        {icons.map((icon, index) => (
          <div key={index} className="m-2">
            <Icon SvgIcon={icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherSkills;
