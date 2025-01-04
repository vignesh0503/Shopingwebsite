import React from "react";
import { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import "./DashBoard.css";
import Dashboard from "./DashBoardComponent/DashBoard";
import Component from "./DashBoardComponent/Component";
import Element from "./DashBoardComponent/Element";
import Map from "./DashBoardComponent/Map";
import Pages from "./DashBoardComponent/Pages";
import Chart from "./DashBoardComponent/Chart";
import Mail from "./DashBoardComponent/Mail";

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const render = () => {
    if (activeComponent === "Dashboard") {
      return <Dashboard />;
    } else if (activeComponent === "Component") {
      return <Component />;
    } else if (activeComponent === "Element") {
      return <Element />;
    } else if (activeComponent === "Map") {
      return <Map />;
    } else if (activeComponent === "Pages") {
      return <Pages />;
    } else if (activeComponent === "Chart") {
      return <Chart />;
    } else if (activeComponent === "Mail") {
      return <Mail />;
    } else {
      return <Dashboard />;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TopBar />

      <div style={{ display: "flex" }}>
        <SideBar setActiveComponent={setActiveComponent} />

        <div style={{ margin: "120px 20px 20px 220px" }}>{render()}</div>
      </div>
    </div>
  );
};

export default AdminPanel;
