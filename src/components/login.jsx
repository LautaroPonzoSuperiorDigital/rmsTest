import React from "react";
import Logo from "../assets/img/Logo.svg";

const Login = () => {
  return (
    <div className="loginBgContainer">
      <div className="LoginContainer">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="form">
          <input
            className="inputs"
            type="email"
            name="text"
            placeholder="EMAIL"
          />
          <input className="inputs" type="text" placeholder="PASSWORD" />
          <a href="forgotPassword" className="forgot">
            Forgot password?
          </a>
          <div href="#" className="button">
            Log In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
