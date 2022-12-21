import React from "react";

// import { Container } from './styles';

const Avatar: React.FC = () => {
  return (
    <>
      <div
        className="w-3/12 rounded-full bg-contain bg-no-repeat"
        style={{ backgroundImage: 'url("/images/eu.jpeg")' }}
      />
    </>
  );
};

export default Avatar;
