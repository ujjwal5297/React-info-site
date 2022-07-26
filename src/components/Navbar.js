import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt={logo} className="nav--icon" />
      <h3 className="nav--logo_text">React Facts</h3>
    </nav>
  );
}
