import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">SNITCH</div>
    <nav className="nav">
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="nav-options">
        <span>Profile</span>
        <span>Cart</span>
      </div>
    </nav>
  </header>
);

export default Header;
