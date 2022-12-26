import React from "react";
const Input = ({
  inputTheme = "",
  labelText,
  labelTheme = "",
  containerTheme = "",
  placeHolder,
  textColor = "",
  onChange,
  type,
  name,
  readonly,
  valuetext,
}) => {
  return (
    <div className={`flex flex-col ${containerTheme} text-${textColor}`}>
      {labelText && (
        <label
          className={`font-normal text-4xl font-button mb-2 text-gray-200 ${labelTheme}`}
        >
          {labelText}
        </label>
      )}
      {readonly ? (
        <input
          className={`rounded-2xl min-h-10 ${inputTheme} pl-4`}
          placeholder={placeHolder}
          value={valuetext}
          name={name}
          readOnly
        />
      ) : (
        <input
          className={`rounded-2xl min-h-10 ${inputTheme} pl-4`}
          placeholder={placeHolder}
          onChange={onChange}
          name={name}
          type={type ? type : "text"}
          value={valuetext}
        />
      )}
    </div>
  );
};
export { Input };
