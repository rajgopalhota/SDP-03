import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

export default function Navbar() {
  return (
    <>
      <div className="mainhead marquee">
        <span>
          <img
            alt=""
            src="https://centralbank.net.in/assets/images/New-icon.gif"
          />
          Welcome to Vajra, your trusted banking partner! &nbsp;&nbsp;&nbsp;
          |&nbsp;&nbsp;&nbsp;
          <img
            alt=""
            src="https://centralbank.net.in/assets/images/New-icon.gif"
          />
          Branches in over 100 cities across India
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <img
            alt=""
            src="https://centralbank.net.in/assets/images/New-icon.gif"
          />
          Awarded "Best Bank htmlFor Customer Service" in 2022
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; ⛈️Over 10 million satisfied
          customers&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp; ⛈️"The only way to do
          great work is to love what you do." - Steve Jobs
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; ⛈️"Believe you can and you're
          halfway there." - Theodore Roosevelt
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; ⛈️"What you get by achieving
          your goals is not as important as what you become by achieving your
          goals." - Zig Ziglar &nbsp;
        </span>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-light navbar-custom">
        <NavLink className="navbar-brand" to="/">
          VAJRA GROUPS&nbsp;&nbsp;
          <i className="fa-solid fa-sack-dollar fa-beat"></i>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav navbar-center mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="fa-solid fa-building-columns"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                <i className="fa-solid fa-address-card"></i> About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                <i className="fa-solid fa-satellite-dish"></i> Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/branches">
                <i className="fa-solid fa-code-branch"></i> Branches
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/loans">
                <i className="fa-solid fa-handshake"></i> Loans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/transaction">
              <i class="fa-solid fa-hand-holding-dollar"></i> Transactions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/payments">
                <i className="fa-solid fa-earth-americas"></i>{" "}
                Online Banking
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa-solid fa-coins"></i> VAJRA
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/contact">
                  Contact us
                </NavLink>
                <NavLink className="dropdown-item" to="/rates">
                  Rates
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/career">
                  Career
                </NavLink>
                <NavLink className="dropdown-item" to="/news">
                  News Room
                </NavLink>
                <NavLink className="dropdown-item" to="/inverstors">
                  Investor relations
                </NavLink>
              </div>
            </li>
          </ul>

          <div className="loginbutton">
            <button data-toggle="modal" data-target=".loginmodal">
              <i className="fa-solid fa-lock fa-flip"></i> Login
            </button>
          </div>
        </div>
      </nav>
      <Login />
    </>
  );
}
