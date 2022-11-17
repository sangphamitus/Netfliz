import React from "react";

const Input = ({ inputClass, labelText, labelClass, containerClass }) => {
  return (
    <div className={`pt-8 grid grid-flow-row ${containerClass}`}>
      <label
        className={`font-normal text-4xl font-button mb-2 text-gray-200 ${labelClass}`}
      >
        {labelText}
      </label>
      <input className={`bg-gray-200 rounded-2xl h-16 w-full ${inputClass}` } placeholder= {labelText}/>
    </div>
  );
};

export { Input };
