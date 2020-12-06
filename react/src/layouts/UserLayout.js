import React from "react";
import { Link } from "react-router-dom";
import "./UserLayout.css";

const UserLayout = ({ children }) => (
  <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container m-auto">
        <Link className="navbar-brand" to={"/blog-overview"}>
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "33px" }}
                src={require("../images/shards-dashboards-logo.jpg")}
                alt="Shards Dashboard"
              />
              <span id ="paragraph" className="d-none d-md-inline mrx-auto"> 
                GYMO
              </span>
        </Link>
        {/* <div className="d-table m-auto">
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "25px" }}
                src={require("../../../images/shards-dashboards-logo.jpg")}
                alt="Shards Dashboard"
              />
              
                <span className="d-none d-md-inline ml-1">
                  GYMO
                </span>
              
            </div> */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link id = "phrase" className="nav-link" to={"/login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link id = "phrase" className="nav-link" to={"/sign-up"}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="auth-wrapper">
      <div className="auth-inner">{children}</div>
    </div>
  </div>
);
export default UserLayout;
