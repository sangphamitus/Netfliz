import React from "react";
const Input = ({
  inputTheme = "",
  labelText,
  labelTheme = "",
  containerTheme = "",
  textColor = "",
  readonly,
  type = "text",
  ...rest
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
          {...rest}
          className={`rounded-2xl min-h-10 ${inputTheme} pl-4`}
          readOnly
        />
      ) : (
        <input
          {...rest}
          className={`rounded-2xl min-h-10 ${inputTheme} pl-4`}
          type={type}
        />
      )}
    </div>
  );
};

export { Input };
