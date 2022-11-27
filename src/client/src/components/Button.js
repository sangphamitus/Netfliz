import React from "react";

const Button = ({ children, props, theme }) => {
  return (
    <button className={`max-w-36 h-10 rounded-3xl p-1 ${theme}`}>{children}</button>
  );
};

export { Button };
