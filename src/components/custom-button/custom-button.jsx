import React from "react";

import "./custom-button.scss";

const CustomButton = ({ children, isFacebook, isGoogle, ...props }) => {
  console.log(isFacebook, isGoogle);
  return (
    <div>
      <button
        className={`custom-button ${isFacebook && "facebook"} ${
          isGoogle && "google"
        }`}
        {...props}
      >
        <span
          className={`custom-button ${isFacebook && "facebook-icon"} ${
            isGoogle && "google-icon"
          }`}
        ></span>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
