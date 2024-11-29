import React from "react";

const ButtonLeftCheckBox = ({ colorButton, colorDot, content }) => {
  return (
    <button
      className={`
            relative 
            px-4
            ${colorButton}
            ${colorDot} 
            before:content-[''] 
            before:w-2 
            before:h-2 
            before:rounded-full 
            before:absolute
            before:left-0 
            before:top-1/2 
            before:-translate-y-1/2 
            `}
      onClick={handleChange}>
      {content}
    </button>
  );
};

export default ButtonLeftCheckBox;
