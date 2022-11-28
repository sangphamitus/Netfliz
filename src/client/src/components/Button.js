import React from "react";

const Button = ({ children, props, theme,onClick}) => {
  return (
    <button className={`max-w-36 rounded-3xl ${theme}`} onClick={onClick}>{children}</button>
  );
};

export { Button };