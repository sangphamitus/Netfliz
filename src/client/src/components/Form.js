import React from "react";

const Form = ({ formClass, children, ...rest }) => {
  return (
    <form
      {...rest}
      className={`bg-black bg-opacity-75 w-auto h-auto ${formClass}`}
    >
      <div className="pt-12 px-14 pb-20">{children}</div>
    </form>
  );
};

export { Form };
