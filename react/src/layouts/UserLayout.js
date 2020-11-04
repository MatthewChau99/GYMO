import React from "react";
import { Link } from "react-router-dom";
import "./UserLayout.css";

const UserLayout = ({ children }) => (
  <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/blog-overview"}>
          Gymo
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>
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
