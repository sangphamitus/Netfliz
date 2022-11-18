import React from "react";

const Input = ({ inputTheme, labelText, labelTheme, containerTheme, placeHolder}) => { 
  return (
    <div className={`pt-8 grid grid-flow-row ${containerTheme}`}>
      <label
        className={`font-normal text-4xl font-button mb-2 text-gray-200 ${labelTheme}`}
      >
        {labelText}
      </label>
      <input className={`bg-gray-200 rounded-2xl h-16 w-full ${inputTheme}`} placeholder= {placeHolder}/>
    </div>
  );
};

export { Input };
