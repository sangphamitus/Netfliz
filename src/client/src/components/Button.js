import React from "react";

const Button = ({ children, props, theme,onClick}) => {
  return (
    <button className={`max-w-36 h-16 rounded-3xl p-3 ${theme}`} onClick={onClick}>{children}</button>
  );
};

export { Button };