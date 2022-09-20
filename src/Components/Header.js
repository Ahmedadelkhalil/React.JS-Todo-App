import React, { Component } from "react";
import "../Styles/Header.css";
import Img from "../Logo.jpg";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={Img} alt="oops ! not found" />
      </div>
    );
  }
}

export default Header;
