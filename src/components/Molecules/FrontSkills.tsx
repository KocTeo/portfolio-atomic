import { Next, ReactLogo, Redux, StyledComponents } from "public/svgs/index";
import React from "react";
import Icon from "../Atoms/Icon";
import SubTitle from "../Atoms/SubTitle";

const FrontSkills: React.FC = () => {
  const icons = [ReactLogo, Next, StyledComponents, Redux];

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <SubTitle>FRONT-END</SubTitle>
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

export default FrontSkills;
