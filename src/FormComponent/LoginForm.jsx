import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import SignUpForm from "./SignUpForm";
import ForgotForm from "./ForgetComponent/ForgotForm";

const LoginForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentForm, setCurrentForm] = useState("login");

  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [passMessage, setpassMessage] = useState("");
  const [emailMessage, setemailMessage] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = () => {
    const emailpattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let valid = true;

    if (email.trim() === "") {
      setemailMessage("Enter valid Email");
      valid = false;
    } else if (!emailpattern.test(email)) {
      setemailMessage("Email must be in correct format");
      valid = false;
    } else {
      setemailMessage("");
    }

    if (pass.trim() === "") {
      setpassMessage("Enter a valid password");
      valid = false;
    } else if (!passPattern.test(pass)) {
      setpassMessage("password must be in correct format");
      valid = false;
    } else {
      setpassMessage("");
    }

    if (valid) {
      setSuccess("Form submitted successfully");
      setEmail("");
      setPass("");
      setTimeout(() => {
        navigate("/adminpanel");
        onClose();
      }, 1000);
    } else {
      setSuccess("");
    }
  };

  const HandleEmail = (e) => {
    setEmail(e.target.value);
    setemailMessage("");
    setSuccess("");
  };

  const HandlePass = (e) => {
    setPass(e.target.value);
    setpassMessage("");
    setSuccess("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((showpass) => !showpass);
  };

  if (currentForm === "forgot") {
    return <ForgotForm onClose={() => setCurrentForm("login")} />;
  }

  if (currentForm === "signup") {
    return <SignUpForm onClose={() => setCurrentForm("login")} />;
  }

  return (
    <div className="form-popup">
      <div>
        <button className="closeButton" onClick={onClose}>
          <IoMdCloseCircle />
        </button>
        <h1 className="form-head">Login Form</h1>
      </div>
      <input
        onChange={HandleEmail}
        type="email"
        placeholder="Enter Your Email Address"
        value={email}
      />
      {emailMessage && (
        <p style={{ color: "red", fontSize: "12px", margin: "0px 10px" }}>
          {emailMessage}
        </p>
      )}
      <div className="password-container">
        <input
          className="password-field"
          onChange={HandlePass}
          type={showPassword ? "text" : "password"}
          placeholder="Enter Your Password"
          value={pass}
        />
        <span
          className="toggle-password"
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      {passMessage && (
        <p style={{ color: "red", fontSize: "12px", margin: "0px 10px" }}>
          {passMessage}
        </p>
      )}

      <p className="frpassword">
        <span
          onClick={() => setCurrentForm("forgot")}
          style={{ color: "#007bff", cursor: "pointer" }}
        >
          Forgot Password
        </span>
      </p>
      <div className="submit-btn" onClick={HandleSubmit}>
        Login
      </div>
      {success && (
        <p style={{ color: "green", fontSize: "12px", margin: "0px 10px" }}>
          {success}
        </p>
      )}
      <p className="signup">
        Don't Have an account?
        <span
          onClick={() => setCurrentForm("signup")}
          style={{ color: "#007bff", cursor: "pointer" }}
        >
          SignUp Now
        </span>
      </p>
      <div style={{ margin: "10px 0px" }}>
        <hr />
      </div>
      <div className="social-login">
        <button className=" facebook">
          <span>
            <FaFacebook />
          </span>
          Login with Facebook
        </button>
        <button className=" google">
          <span>
            <FcGoogle />
          </span>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
