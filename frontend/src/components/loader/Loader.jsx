// Loader.js
import React from "react";
import './Loader.css'

const Loader = () => {
  return (
    <div className="bg-[#0B051C] min-h-screen flex items-center justify-center" style={{ textAlign: "center", padding: "50px" }}>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
