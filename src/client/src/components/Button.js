import React from "react";

export { Button };

const Button = ({ children, props, theme }) => {
  return <button className={`w-36 h-14 ${theme}`}>{children}</button>;
};
