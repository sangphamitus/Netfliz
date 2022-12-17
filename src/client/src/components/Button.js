import React from "react";

const Button = ({ children, props, theme, ...rest }) => {
  return (
    <button {...rest} className={`max-w-36 rounded-3xl ${theme}`}>
      {children}
    </button>
  );
};

export { Button };
