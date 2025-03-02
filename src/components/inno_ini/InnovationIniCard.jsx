import React from "react";
import { innovation } from "../../dummydata";
import "./Innovation.css";

export default function InnovationHub() {
  return (
    <div className="innovation-hub">
      {/* Heading Section */}
      <h1 className="innovation-heading">Innovation Hub</h1>
      <p className="innovation-subheading">
        Unleashing creativity and transforming ideas into reality through research, development, and technology.
      </p>

      {/* Innovation Cards */}
      <div className="innovation-container">
        {innovation.map((item, index) => (
          <div key={index} className="innovation-card">
            <div className="innovation-icon-container">
              <img src={item.icon} alt={item.title} className="innovation-icon" />
            </div>
            <h2 className="innovation-title">{item.title}</h2>
            <p className="innovation-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
