import React, { useState } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Dashboard from "./DashBoardComponent/DashComponent/DashBoard";
import Element from "./DashBoardComponent/Element";
import Map from "./DashBoardComponent/Map";
import Pages from "./DashBoardComponent/Pages";
import Chart from "./DashBoardComponent/ChartComponent/Chart";
import Mail from "./DashBoardComponent/Mail";
import ProductMangeMent from "./DashBoardComponent/ProductDataComponent/ProductMangeMent";

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const render = () => {
    if (activeComponent === "Dashboard") {
      return <Dashboard />;
    } else if (activeComponent === "Product") {
      return <ProductMangeMent />;
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SideBar setActiveComponent={setActiveComponent} />
        <div style={{ margin: "120px 20px 20px 220px" }}>{render()}</div>
      </div>
    </div>
  );
};

export default AdminPanel;
