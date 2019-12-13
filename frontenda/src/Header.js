import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  handleLogout = () => {
    
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            JWT Authentication Playground
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Create Account
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/login">
                  Log In
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/logout">
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
