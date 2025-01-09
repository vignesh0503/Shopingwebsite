import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BiSolidComponent } from "react-icons/bi";
import { LiaElementor } from "react-icons/lia";
import { IoMapOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { IoBarChartOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoHelpOutline } from "react-icons/io5";

const SideBar = ({ setActiveComponent }) => {
  const HandleDash = () => {
    setActiveComponent("Dashboard");
  };
  const HandleComponent = () => {
    setActiveComponent("Product");
  };
  const HandleElement = () => {
    setActiveComponent("Element");
  };
  const HandleMap = () => {
    setActiveComponent("Map");
  };
  const HandlePage = () => {
    setActiveComponent("Pages");
  };
  const HandleChart = () => {
    setActiveComponent("Chart");
  };
  const HandleMail = () => {
    setActiveComponent("Mail");
  };

  return (
    <div className="sidebar">
      <div className="menu-item" onClick={HandleDash}>
        <MdOutlineDashboard />
        <span>Dashboard</span>
      </div>
      <div className="menu-item" onClick={HandleComponent}>
        <BiSolidComponent />
        <span>Product</span>
      </div>
      <div className="menu-item" onClick={HandleElement}>
        <LiaElementor />
        <span>Element</span>
      </div>
      <div className="menu-item" onClick={HandleMap}>
        <IoMapOutline />
        <span>Map</span>
      </div>
      <div className="menu-item" onClick={HandlePage}>
        <RiPagesLine />
        <span>Pages</span>
      </div>
      <div className="menu-item" onClick={HandleChart}>
        <IoBarChartOutline />
        <span>Chart</span>
      </div>
      <div className="menu-item" onClick={HandleMail}>
        <IoMailOutline />
        <span>Mail</span>
      </div>
      <div className="menu-item">
        <IoSettingsOutline />
        <span>System</span>
      </div>
      <div className="menu-item">
        <IoCartOutline />
        <span>E-commerce</span>
      </div>
      <div className="menu-item">
        <IoHelpOutline />
        <span>Help</span>
      </div>
    </div>
  );
};

export default SideBar;
