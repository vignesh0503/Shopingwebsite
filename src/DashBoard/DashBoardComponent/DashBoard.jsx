import React from "react";
import "../DashBoard.css";
import { TbAntennaBars1 } from "react-icons/tb";
import { SlUserFollow } from "react-icons/sl";
import { FaChartPie } from "react-icons/fa";
import { TbMobiledata } from "react-icons/tb";
import rattingimg from "../../assests/images/card-ratings-illustration.png";
import sessionimg from "../../assests/images/card-session-illustration.png";
const Dashboard = () => {
  return (
    <div className="DashBoard-section">
      <div className="DashBoard-content">
        <div className="stack-overflow-content">
          <div className="stack-overflow-header">
            <div className="stack-head-content">
              <h4>Stack Overview</h4>
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

      {/* Second */}
      <div className="DashBoard-content">
        <div className="stack-overflow-content">
          <div className="stack-overflow-header">
            <div className="stack-head-content">
              <h4>Stack Overview</h4>
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
      <div className="DashBoard-content">
        <div className="stack-overflow-content">
          <div className="stack-overflow-header">
            <div className="stack-head-content">
              <h4>Stack Overview</h4>
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
