import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import ForgotOtp from "./ForgotOtp";

const ForgotForm = ({ onClose }) => {
  const [isForgotFormVisible, setIsForgotFormVisible] = useState(true); 
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [success, setSuccess] = useState("");

  const HandleSubmit = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let valid = true;

    if (email.trim() === "") {
      setEmailMessage("Enter a valid Email");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailMessage("Email must be in correct format");
      valid = false;
    } else {
      setEmailMessage("");
    }

    if (valid) {
      setSuccess("Code Sent to your Mail");
      setEmail("");
      setTimeout(() => {
        setIsForgotFormVisible(false); // Close the ForgotForm
      }, 1000);
    } else {
      setSuccess("");
    }
  };

  const HandleEmail = (e) => {
    setEmail(e.target.value);
    setEmailMessage("");
    setSuccess("");
  };

  return (
    <div className="form-container">
      <div className="form-popup">
        <button className="closeButton" onClick={onClose}>
          <IoMdCloseCircle />
        </button>
        <h1 className="forgot-form-head">Forgot Password</h1>
        <p className="forgot-para">
          Enter an Email, we will send a code to your email address.
        </p>
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
        <div>
          <div className="submit-btn" onClick={HandleSubmit}>
            Send
          </div>
        </div>
        {success && (
          <p style={{ color: "green", fontSize: "12px", margin: "0px 10px" }}>
            {success}
          </p>
        )}
        <p className="signup" onClick={onClose} style={{ color: "#007bff" }}>
          Back to Login
        </p>
      </div>
      {!isForgotFormVisible && (
        <div className="popup-overlay">
          <ForgotOtp onClose={onClose} />
        </div>
      )}
    </div>
  );
};

export default ForgotForm;
