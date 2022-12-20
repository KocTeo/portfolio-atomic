import React from "react";

interface Props {
  placeholder: string;
  width: string;
}

const Input: React.FC<Props> = ({ placeholder, width }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={
        "mt-0 block w-1/3 px-0.5 border-0 border-b-2 focus:ring-0 focus:border-white bg-gray-900 text-gray-400"
      }
    />
  );
};

export default Input;
