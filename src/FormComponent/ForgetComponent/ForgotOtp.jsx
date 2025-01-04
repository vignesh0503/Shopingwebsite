import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import PasswordReset from "./PasswordReset";

const ForgotOtp = ({ onClose }) => {
  const [otp, setOtp] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isPasswordResetVisible, setIsPasswordResetVisible] = useState(false);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setOtpMessage("");
    setSuccess("");
  };

  const handleSubmit = () => {
    const otpPattern = /^\d{4,6}$/;
    let valid = true;

    if (otp.trim() === "") {
      setOtpMessage("Please enter the OTP.");
      valid = false;
    } else if (!otpPattern.test(otp)) {
      setOtpMessage("OTP must be numeric and 4-6 digits long.");
      valid = false;
    } else {
      setOtpMessage("");
    }

    if (valid) {
      setSuccess("OTP verified successfully!");
      setOtp("");
      setTimeout(() => {
        setSuccess("");
        setIsPasswordResetVisible(true);
      }, 1000);
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="form-popup">
      <div>
        <button className="closeButton" onClick={onClose}>
          <IoMdCloseCircle />
        </button>
        {!isPasswordResetVisible ? (
          <>
            <h1 className="otp-form-head">Enter OTP</h1>
            <p className="otp-para">
              A code has been sent to your email. Please enter the OTP to
              proceed.
            </p>

            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              maxLength={6}
            />
            {otpMessage && (
              <p style={{ color: "red", fontSize: "12px", margin: "0px 10px" }}>
                {otpMessage}
              </p>
            )}

            <button className="verify-btn" onClick={handleSubmit}>
              Verify OTP
            </button>

            {success && (
              <p
                style={{ color: "green", fontSize: "12px", margin: "0px 10px" }}
              >
                {success}
              </p>
            )}
          </>
        ) : (
          <div className="popup-overlay">
            <PasswordReset onClose={onClose} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotOtp;
