import React from "react";

import "./custom-input.scss";

const CustomInput = ({ ...props }) => {
  return (
    <div>
      <input className="login-field" {...props} />
    </div>
  );
};

export default CustomInput;
