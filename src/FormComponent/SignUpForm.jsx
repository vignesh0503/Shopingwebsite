import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const SignUpForm = ({ onClose }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const closeForm = () => setIsFormVisible(false);

  const [pass, setPass] = useState("");
  const [repass, setRePass] = useState("");
  const [email, setEmail] = useState("");
  const [passMessage, setpassMessage] = useState("");
  const [repassMessage, setRepassMessage] = useState("");
  const [emailMessage, setemailMessage] = useState("");
  const [success, setSuccess] = useState("");
  //   const navigate = useNavigate();

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
      setSuccess("successfully Registered");
      setEmail("");
      setPass("");
      //   navigate("LoginForm");
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
  return (
    <div className="form-popup">
      <div>
        <button className="closeButton" onClick={onClose}>
          <IoClose />
        </button>
        <h1 className="form-head">User Registration</h1>
      </div>
      <input
        onChange={HandleEmail}
        type="Email"
        placeholder="Enter Your Email Address"
        value={email}
      />
      {emailMessage && <p style={{ color: "red" }}>{emailMessage}</p>}
      <input
        onChange={HandlePass}
        type="password"
        placeholder="Enter Your Password"
        value={pass}
      />
      {passMessage && <p style={{ color: "red" }}>{passMessage}</p>}
      <input
        onChange={HandleRePass}
        type="password"
        placeholder="Confirm Password"
        value={repass}
      />
      {repassMessage && <p style={{ color: "red" }}>{repassMessage}</p>}
      <div>
        <div className="submit-btn" onClick={HandleSubmit}>
          Signup
        </div>
        {isFormVisible && (
          <div className="popup-overlay">
            <SignUpForm onClose={closeForm} />
          </div>
        )}
      </div>
      {success && <p style={{ color: "green", fontSize: "12px" }}>{success}</p>}
    </div>
  );
};

export default SignUpForm;
