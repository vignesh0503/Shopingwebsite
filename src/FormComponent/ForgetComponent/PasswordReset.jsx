import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import LoginForm from "../LoginForm";

const PasswordReset = ({ onClose }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmpasswordMessage, setConfirmPasswordMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false); // To show login form

  const openLoginForm = () => setIsLoginFormVisible(true);
  const closeLoginForm = () => setIsLoginFormVisible(false);

  const HandleSubmit = () => {
    const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    let valid = true;

    if (newPassword.trim() === "") {
      setPasswordMessage("Enter a valid password");
      valid = false;
    } else if (!passPattern.test(newPassword)) {
      setPasswordMessage("Password must be in correct format");
      valid = false;
    } else {
      setPasswordMessage("");
    }

    if (confirmPassword.trim() === "") {
      setConfirmPasswordMessage("Re-enter the password");
      valid = false;
    } else if (confirmPassword !== newPassword) {
      setConfirmPasswordMessage("Passwords must match");
      valid = false;
    } else {
      setConfirmPasswordMessage("");
    }

    if (valid) {
      setSuccessMessage("Your password has been successfully reset!");
      setNewPassword("");
      setConfirmPassword("");
      setConfirmPasswordMessage("");
      setTimeout(() => {
        setSuccessMessage("");
        openLoginForm();
        onClose();
      }, 1000);
    } else {
      setSuccessMessage("");
    }
  };

  const HandlePass = (e) => {
    setNewPassword(e.target.value);
    setPasswordMessage("");
    setSuccessMessage("");
  };

  const HandleConfirmPass = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordMessage("");
    setSuccessMessage("");
  };

  return (
    <div className="form-popup">
      <button className="closeButton" onClick={onClose}>
        <IoMdCloseCircle />
      </button>
      {!isLoginFormVisible ? (
        <>
          <h1 className="reset-form-head">Reset Your Password</h1>
          <p className="reset-para">Please enter a new password below.</p>

          <input
            type="password"
            value={newPassword}
            onChange={HandlePass}
            placeholder="Enter New Password"
          />
          {passwordMessage && (
            <p style={{ color: "red", fontSize: "12px", margin: "0px 10px" }}>
              {passwordMessage}
            </p>
          )}
          <input
            type="password"
            value={confirmPassword}
            onChange={HandleConfirmPass}
            placeholder="Confirm New Password"
          />
          {confirmpasswordMessage && (
            <p style={{ color: "red", fontSize: "12px", margin: "0px 10px" }}>
              {confirmpasswordMessage}
            </p>
          )}
          <button className="submit-btn" onClick={HandleSubmit}>
            Reset Password
          </button>
          {successMessage && (
            <p style={{ color: "green", fontSize: "12px", marginTop: "10px" }}>
              {successMessage}
            </p>
          )}
        </>
      ) : (
        // After password reset, show the login form
        <div className="popup-overlay">
          <LoginForm onClose={closeLoginForm} />
        </div>
      )}
    </div>
  );
};

export default PasswordReset;
