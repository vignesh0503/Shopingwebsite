import React from "react";
import { useState } from "react";
import "./DashBoard.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Logo from "../assests/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuBadgeIndianRupee } from "react-icons/lu";
import { IoHelpOutline } from "react-icons/io5";
import Profileimg from "../assests/images/profile.jpeg";
import { CiLogout } from "react-icons/ci";

const TopBar = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsOverlayVisible(true);
  };

  const handleLogout = () => {
    navigate("/");
    setIsOverlayVisible(false);
  };
  const handleClose = () => {
    setIsOverlayVisible(false);
  };
  return (
    <div className="topBar-top">
      <div className="topBar">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={Logo} alt="Logo-img" className="logo" />
          <span
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "500",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Shopi
            <span
              style={{
                color: "lightgreen",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              o
            </span>
            <span
              style={{
                color: "red",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              g
            </span>
            <span
              style={{
                color: "yellow",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              o
            </span>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="search-bar">
            <span>
              <CiSearch />
            </span>
            <input type="text" placeholder="Search" />
          </div>
          <div className="topBar-icon">
            <div className="top-bar-icon">
              <IoIosNotificationsOutline className="icn" />
            </div>
            <div className="top-bar-icon">
              <IoSettingsOutline className="icn" />
            </div>

            <div>
              <div className="top-bar-icon" onClick={handleIconClick}>
                <IoPersonOutline className="top-logoyt-icon" />
              </div>

              {isOverlayVisible && (
                <div className="overlay">
                  <div className="overlay-content">
                    <button className="closebtn" onClick={handleClose}>
                      <IoMdCloseCircle />
                    </button>
                    <div className="profile">
                      <img
                        src={Profileimg}
                        className="profile-img"
                        alt="userprofile"
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "20px",
                        }}
                      >
                        <h2>Vignesh</h2>
                        <h3>Admin</h3>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <hr className="horizontal-line" />
                    </div>
                    <div>
                      <p className="profile-para">
                        <IoPersonOutline />
                        <span>My Profile</span>
                      </p>
                    </div>
                    <div>
                      <p className="profile-para">
                        <IoSettingsOutline /> <span>Setting</span>
                      </p>
                    </div>
                    <div>
                      <p className="profile-para">
                        <IoNewspaperOutline /> <span>Billing</span>
                      </p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <hr className="horizontal-line" />
                    </div>
                    <div>
                      <p className="profile-para">
                        <LuBadgeIndianRupee /> <span>Pricing</span>
                      </p>
                    </div>
                    <div>
                      <p className="profile-para">
                        <IoHelpOutline /> <span>FAQ</span>
                      </p>
                    </div>
                    <button className="logout-btn" onClick={handleLogout}>
                      Logout
                      <span>
                        <CiLogout />
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
