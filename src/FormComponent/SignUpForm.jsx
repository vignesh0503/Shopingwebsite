import React, { useState } from "react";
import "./Form.css";
import { IoMdCloseCircle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignUpForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [pass, setPass] = useState("");
  const [repass, setRePass] = useState("");
  const [email, setEmail] = useState("");
  const [passMessage, setpassMessage] = useState("");
  const [repassMessage, setRepassMessage] = useState("");
  const [emailMessage, setemailMessage] = useState("");
  const [success, setSuccess] = useState("");

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
      setpassMessage("Password must be in correct format");
      valid = false;
    } else {
      setpassMessage("");
    }

    if (repass.trim() === "") {
      setRepassMessage("Re-Enter a Password");
      valid = false;
    } else if (repass !== pass) {
      setRepassMessage("Passwords must match");
      valid = false;
    } else {
      setRepassMessage("");
    }

    if (valid) {
      setSuccess("Successfully Registered");
      setTimeout(() => {
        setEmail("");
        setPass("");
        setRePass("");
        setSuccess("");
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

  const HandleRePass = (e) => {
    setRePass(e.target.value);
    setRepassMessage("");
    setSuccess("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((showpass) => !showpass);
  };

  return (
    <div className="form-popup">
      <div>
        <button className="closeButton" onClick={onClose}>
          <IoMdCloseCircle />
        </button>
        <h1 className="sign-form-head">User Registration</h1>
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
      <div className="password-container">
        <input
          className="password-field"
          onChange={HandleRePass}
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={repass}
        />
        <span
          className="toggle-password"
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      {repassMessage && (
        <p style={{ color: "red", fontSize: "12px", margin: "0px 10px" }}>
          {repassMessage}
        </p>
      )}
      <div className="submit-btn" onClick={HandleSubmit}>
        Signup
      </div>
      {success && (
        <p style={{ color: "green", fontSize: "12px", margin: "0px 10px" }}>
          {success}
        </p>
      )}
      <p className="signup">
        Already have an account?
        <span onClick={onClose} style={{ color: "#007bff", cursor: "pointer" }}>
          Login
        </span>
      </p>
      <div style={{ margin: "10px 0px" }}>
        <hr />
      </div>
      <div className="social-login">
        <button className="btn facebook">
          <span>
            <FaFacebook />
          </span>
          Login with Facebook
        </button>
        <button className="btn google">
          <span>
            <FcGoogle />
          </span>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
