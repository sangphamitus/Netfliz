import React from "react";

export { Input };

const Input = ({ ref, inputClass, labelText, labelClass, containerClass }) => {
  return (
    <div className={`pt-8 ${containerClass}`}>
      <label
        className={`font-normal text-4xl font-button text-gray-200 ${labelClass}`}
      >
        {labelText}
      </label>
      <input className={`bg-gray-200 rounded-3xl w-72 h-16 ${inputClass}`} />
    </div>
  );
};
