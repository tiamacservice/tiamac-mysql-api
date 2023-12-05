import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoac.png";

const Home = ({ children }) => {
  return (
    <React.Fragment>
      <nav
        className="navbar is-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a class="navbar-item">
            <img src={logo} width="112" height="28"></img>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <NavLink to="/register" className="button is-primary">
                  Register
                </NavLink>

                <NavLink to="/logincustomer" className="button is-light">
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section class="hero is-success is-halfheight">
        <div class="hero-body">
          <div class="">
            <p class="title">Half height hero</p>
            <p class="subtitle">Half height subtitle</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
