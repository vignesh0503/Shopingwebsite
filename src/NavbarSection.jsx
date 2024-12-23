import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./assests/images/Logo.png";
import { FaBars } from "react-icons/fa";
const NavbarSection = () => {
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setBgColor("#243642");
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="navbar"
        style={{
          //   backgroundColor: bgColor,
          backgroundColor: "#0e314c",
          // width: "100%",
          transition: "background-color 0.3s ease",
        }}
      >
        <div className="nav">
          <div>
            <img src={Logo} alt="Logo-img" className="logo" />
          </div>

          <div className="navbar-content">
            <input type="checkbox" id="check" />
            <label for="checkbtn" className="checkbtn">
              <FaBars className="bar-icon" />
            </label>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>About</Link>
                <Link to={"/"}>Pages</Link>
                <Link to={"/"}>Shop</Link>
                <Link to={"/"}>Contact</Link>
                <Link to={"/myorder"}>My Order</Link>
                <div className="nav-btn">Support</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarSection;
