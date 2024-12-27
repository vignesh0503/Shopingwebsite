import React from "react";
import { useState, useRef } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import SignUpForm from "./SignUpForm";

const LoginForm = ({ onClose }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);

  const Email = useRef(null);
  const Password = useRef(null);
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
      navigate("myorder");
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
  return (
    <div className="form-popup">
      <div>
        <button className="closeButton" onClick={onClose}>
          <IoClose />
        </button>
        <h1 className="form-head">Login form</h1>
      </div>
      <input
        onChange={HandleEmail}
        ref={Email}
        type="Email"
        placeholder="Enter Your Email Address"
        value={email}
      />
      {emailMessage && <p style={{ color: "red" }}>{emailMessage}</p>}
      <input
        onChange={HandlePass}
        ref={Password}
        type="password"
        placeholder="Enter Your Password"
        value={pass}
      />
      {passMessage && <p style={{ color: "red" }}>{passMessage}</p>}
      <p className="frpassword">Forgot Password?</p>
      <div className="submit-btn" onClick={HandleSubmit}>
        Submit
      </div>
      {success && <p style={{ color: "green", fontSize: "12px" }}>{success}</p>}
      <p className="signup">
        Not a Member?
        <span
          data-aos="fade-up"
          data-aos-duration="3000"
          onClick={openForm}
          style={{ color: "#007bff" }}
        >
          SignUp Now
        </span>
        {isFormVisible && (
          <div className="popup-overlay">
            <SignUpForm onClose={closeForm} />
          </div>
        )}
      </p>
    </div>
  );
};

export default LoginForm;
