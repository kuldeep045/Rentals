// Loader.js
import React from "react";
import './Loader.css'

const Loader = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <div className="spinner"></div>
      <p className="text-white">Loading...</p>
    </div>
  );
};

export default Loader;
