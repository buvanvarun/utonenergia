import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";
import logob from "../assets/logo-b.png";
import logow from "../assets/logo-w.png";
export class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <Link className="navlinks" to="/">
            <img
              className={this.props.hover === true ? "logo h-hover" : "logo"}
              src={
                window.location.pathname === "/"
                  ? logob
                  : window.location.pathname === "/specs"
                  ? logob
                  : logow
              }
              alt="logo"
            />
          </Link>
        </div>
        <div
          className={
            window.location.pathname === "/"
              ? this.props.hover === true
                ? "list-container v-hover"
                : "list-container"
              : "hide"
          }
        >
          <NavLink
            className={
              this.props.hover === "true" ? "navlinks v-hover" : "navlinks"
            }
            to="/about"
          >
            about
          </NavLink>
          <NavLink
            className={
              this.props.hover === "false" ? "navlinks v-hover" : "navlinks"
            }
            to="/blog"
          >
            blog
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navbar;
