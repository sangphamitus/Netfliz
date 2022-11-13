import React from "react";

const Button = ({ children, props, theme }) => {
  return (
    <button className={`w-36 h-16 rounded-3xl p-3 ${theme}`}>{children}</button>
  );
};

export { Button };
