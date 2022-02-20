import React from "react";

import CustomButton from "../custom-button/custom-button";
import CustomInput from "../custom-input/custom-input";

import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="bg-image"></div>

      <div className="login">
        <div className="login-logo">
          <div className="login-logo-img"></div>
        </div>

        <h3 className="login-title">Login</h3>

        <div className="login-content">
          <div className="login-img-container">
            <div className="login-img"></div>
          </div>
          <div className="input-fields">
            <CustomInput type="email" placeholder="Email" />
            <CustomInput type="password" placeholder="Password" />
          </div>
          <CustomButton>Sign In</CustomButton>
          <div className="login-options">
            <a href="#">Forgot Password?</a>
            <a href="#" className="new-user">
              New User? Sign Up
            </a>
          </div>
          <p>or</p>
          <CustomButton isGoogle={true}>CONTINUE WITH GOOGLE</CustomButton>
          <CustomButton isFacebook={true}>CONTINUE WITH FACEBOOK</CustomButton>
        </div>
      </div>
    </>
  );
};

export default Login;
