import React from "react";
import "../../DashBoard.css";
import { TbAntennaBars1 } from "react-icons/tb";
import { SlUserFollow } from "react-icons/sl";
import { FaChartPie } from "react-icons/fa";
import { TbMobiledata } from "react-icons/tb";
import { MdLaptopChromebook } from "react-icons/md";
import rattingimg from "../../../assests/images/card-ratings-illustration.png";
import sessionimg from "../../../assests/images/card-session-illustration.png";
import Graphimg from "../../../assests/images/markers-apexcharts.png";
import LineChart from "./LineChart";
import Carousel from "./Carousel";
const Dashboard = () => {
  return (
    <div className="DashBoard-section">
      <div className="DashBoard-content">
        <div className="stack-overflow-content">
          <div className="stack-overflow-header">
            <div className="stack-head-content">
              <h4
                style={{ fontSize: "16px", color: "black", fontWeight: "600" }}
              >
                Stack Overview
              </h4>
              <div className="stack-overflow-middle">
                <div className="stack-sales">Total 42.5k Sales</div>
                <p>+18%^</p>
              </div>
            </div>
            <div>
              <TbAntennaBars1 />
            </div>
          </div>

          <div className="stack-overflow-bottom">
            <div className="stack-overflow-bottom-content">
              <div className="stack-user-icon-bg">
                <SlUserFollow className="stack-user-icon" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <h3>8,458</h3>
                <h4>New Customers</h4>
              </div>
            </div>
            <div className="dashBoard-stack-card">
              <div className="stack-overflow-bottom-content">
                <div className="stack-chart-icon-bg">
                  <FaChartPie className="stack-chart-icon" />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <h3>$28.5k</h3>
                  <h4>Total Profit</h4>
                </div>
              </div>
            </div>
            <div className="dashBoard-stack-card">
              <div className="stack-overflow-bottom-content">
                <div className="stack-data-icon-bg">
                  <TbMobiledata className="stack-data-icon" />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                  }}
                >
                  <h3>2,450k</h3>
                  <h4>New Transactions</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="DashBoard-content">
        <div className="rating-card-content">
          <div>
            <div className="card-info">
              <h4
                style={{ fontSize: "16px", color: "black", fontWeight: "600" }}
              >
                Ratings
              </h4>
              <div className="rating-header">
                <p>Year of 2021</p>
              </div>
            </div>
            <div className="ratings">
              <h4>8.14k</h4>
              <p>+15.6%</p>
            </div>
          </div>
          <div className="rating-img-card">
            <img
              src={rattingimg}
              alt="ratingprofile"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="DashBoard-content">
        <div style={{ display: "flex" }}>
          <div>
            <div className="card-info">
              <h4
                style={{ fontSize: "16px", color: "black", fontWeight: "600" }}
              >
                Sessions
              </h4>
              <div className="session-header">
                <p>Last Month</p>
              </div>
            </div>
            <div className="session">
              <h4>12.2k</h4>
              <p>-25.5%</p>
            </div>
          </div>

          <div className="session-img-card">
            <img
              src={sessionimg}
              alt="sessonprofile"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="DashBoard-content">
        <LineChart />
      </div>
      <div className="DashBoard-content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h4 style={{ fontSize: "16px", color: "black", fontWeight: "600" }}>
              Totak Visits
            </h4>
            <h3 style={{ fontSize: "16px", color: "black", fontWeight: "500" }}>
              $42.5k
            </h3>
          </div>
          <div>
            <p>+18.4%^</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div>
            <div className="totalVisit-content">
              <div className="mobile-icon-bg">
                <FaChartPie className="mobile-chart-icon" />
              </div>

              <div>
                <h4 className="totalvisit-mobile">Mobile</h4>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                  color: "black",
                  textAlign: "center",
                }}
              >
                23.5
              </p>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "400",
                  color: "black",
                  textAlign: "center",
                }}
              >
                %
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "grey",
                  textAlign: "center",
                }}
              >
                2,890
              </p>
            </div>
          </div>
          <div className="total-visit-vs">
            <h4>vs</h4>
          </div>
          <div>
            <div className="totalVisit-content">
              <div className="lap-icon-bg">
                <MdLaptopChromebook className="lap-chart-icon" />
              </div>

              <div>
                <h4 className="totalvisit-mobile">DeskTop</h4>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                  color: "black",
                  textAlign: "center",
                }}
              >
                76.5
              </p>
              <p
                style={{
                  fontSize: "25px",
                  fontWeight: "400",
                  color: "black",
                  textAlign: "center",
                }}
              >
                %
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "grey",
                  textAlign: "center",
                }}
              >
                22,465
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px 0",
          }}
        >
          <div className="slide">
            <div className="value1">
              <div className="value2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="DashBoard-content">
        <div>
          <h4
            style={{
              fontSize: "16px",
              color: "black",
              fontWeight: "600",
              marginBottom: "20px",
            }}
          >
            Sales This Month
          </h4>
          <p
            style={{
              fontSize: "16px",
              color: "black",
              fontWeight: "400",
            }}
          >
            Total Sales This Month
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "black",
              fontWeight: "400",
            }}
          >
            $28,450
          </p>
        </div>
        <div className="graphimg-card">
          <img src={Graphimg} alt="Graphimg" className="graphimg" />
        </div>
      </div>

      {/* Third */}
      <div className="DashBoard-content">
        <Carousel />
      </div>
      <div className="DashBoard-content">
        <div className="rating-card-content">
          <div>
            <div className="card-info">
              <h4>Ratings</h4>
              <div className="rating-header">
                <p>Year of 2021</p>
              </div>
            </div>
            <div className="ratings">
              <h4>8.14k</h4>
              <p>+15.6%</p>
            </div>
          </div>
          <div className="rating-img-card">
            <img
              src={rattingimg}
              alt="ratingprofile"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div className="DashBoard-content">
        <div style={{ display: "flex" }}>
          <div>
            <div className="card-info">
              <h4>Sessions</h4>
              <div className="session-header">
                <p>Last Month</p>
              </div>
            </div>
            <div className="session">
              <h4>12.2k</h4>
              <p>-25.5%</p>
            </div>
          </div>

          <div className="session-img-card">
            <img
              src={sessionimg}
              alt="sessonprofile"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
