import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./assests/images/Logo.png";
import { FaBars } from "react-icons/fa";
import LoginForm from "./FormComponent/LoginForm";
import { useLocation } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";


const NavbarSection = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState("transparent");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openForm = () => setIsFormVisible(true);
  const closeForm = () => setIsFormVisible(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (location.pathname === "/") {
        if (scrollY > 50) {
          setBgColor("#243642");
        } else {
          setBgColor("transparent");
        }
      } else {
        if (scrollY > 10) {
          setBgColor("#243642");
        } else {
          setBgColor("#243642");
        }
      }
    };

    if (location.pathname === "/") {
      setBgColor(window.scrollY > 50 ? "#243642" : "transparent");
    } else {
      setBgColor("#243642");
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <>
      <div
        className="navbar"
        style={{
          backgroundColor: bgColor,
          // backgroundColor: "#0e314c",
          // width: "100%",
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="nav">
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

          <div className="navbar-content">
            <input type="checkbox" id="check" />
            <label for="checkbtn" className="checkbtn">
              <FaBars className="bar-icon" />
            </label>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>Pages</Link>
                <Link to={"/"}>Shop</Link>
                <Link to={"/about"}>About Us</Link>
                <Link to={"/"}>Contact Us</Link>
                <Link to={"/myorder"}>My Order</Link>
                <div>
                  <div onClick={openForm} className="nav-btn">
                    <IoPersonOutline />
                  </div>
                  {isFormVisible && (
                    <div className="popup-overlay">
                      <LoginForm onClose={closeForm} />
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarSection;
