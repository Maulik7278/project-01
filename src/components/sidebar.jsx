import React from "react";
import "../styles/App.css";

const Sidebar = () => (
  <aside className="sidebar">
    <div className="filter">
      <h3>Collections</h3>
      <ul>
        <li>
          <input type="checkbox" /> Shirts
        </li>
        <li>
          <input type="checkbox" /> Jeans
        </li>
        <li>
          <input type="checkbox" /> T-Shirts
        </li>
        <li>
          <input type="checkbox" /> Trousers
        </li>
        <li>
          <input type="checkbox" /> Overshirt
        </li>
        <li>
          <input type="checkbox" /> Boxers
        </li>
        <li>
          <input type="checkbox" /> Joggers & Trackpants
        </li>
      </ul>
    </div>
    <div className="filter">
      <h3>Size</h3>
      <ul>
        <li>
          <input type="checkbox" /> XS
        </li>
        <li>
          <input type="checkbox" /> S
        </li>
        <li>
          <input type="checkbox" /> M
        </li>
        <li>
          <input type="checkbox" /> L
        </li>
        <li>
          <input type="checkbox" /> XL
        </li>
        <li>
          <input type="checkbox" /> XXL
        </li>
        <li>
          <input type="checkbox" /> 3XL
        </li>
        <li>
          <input type="checkbox" /> 4XL
        </li>
      </ul>
    </div>
  </aside>
);

export default Sidebar;
