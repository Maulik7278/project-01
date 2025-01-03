import React from "react";
import "./styles/App.css"; // Main CSS file for overall styling
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import ProductGrid from "./components/productGrid";

const App = () => {
  return (
    <div className="app">
      {/* Header Component */}
      <Header />

      {/* Main Content Area */}
      <div className="content">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Product Grid Component */}
        <ProductGrid />
      </div>
    </div>
  );
};

export default App;
