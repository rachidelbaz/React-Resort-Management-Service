import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = {
    activated: false,
  };
  btnToggler = () => {
    this.setState({ activated: !this.state.activated });
  };
  render() {
    return (
      <>
        <nav className="nav-bar">
          <div className="brand-name">Resort Management</div>
          <ul
            className={
              this.state.activated ? "nav-links nav-links-active " : "nav-links"
            }
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Rooms">Rooms</Link>
            </li>
          </ul>
          <div
            className={this.state.activated ? "nav-btn clicked" : "nav-btn"}
            onClick={this.btnToggler}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </>
    );
  }
}
