import React, { useState } from "react";
import { innovation, magazine } from "../../dummydata";
import "./Innovation.css";
import PublicationCard from "./PublicationCard";
import PatentCard from "./PatentCard";
import BookCard from "./BookCard";
import MagazineCard from "./MagazineCard";
import AlumniReportCard from "./AlumniReportCard";

export default function InnovationHub() {
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle card click
  const handleCardClick = (item) => {
    setSelectedItem(item);
    setTimeout(() => {
      const detailsSection = document.getElementById("details-section");
      if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

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
          <div key={index} className="innovation-card" onClick={() => handleCardClick(item)}>
            <div className="innovation-icon-container">
              <img src={item.icon} alt={item.title} className="innovation-icon" />
            </div>
            <h2 className="innovation-title">{item.title}</h2>
            <p className="innovation-desc">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Scholarly Spectrum Section */}
      <h1 className="innovation-heading">Scholarly Spectrum</h1>
      <p className="innovation-subheading">
        Showcasing innovation, knowledge, and excellence through research, insights, and creative expression.
      </p>

      {/* Magazine Cards */}
      <div className="innovation-container">
        {magazine.map((item, index) => (
          <div key={index} className="innovation-card" onClick={() => handleCardClick(item)}>
            <div className="innovation-icon-container">
              <img src={item.icon} alt={item.title} className="innovation-icon" />
            </div>
            <h2 className="innovation-title">{item.title}</h2>
            <p className="innovation-desc">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Selected Item Details Section */}
      {selectedItem && (
        <div id="details-section" className="details-section">
          {/* {selectedItem.title === "Patents" && <PatentCard />} */}
          {selectedItem.title === "Publications" && <PublicationCard />}
          {selectedItem.title === "Book Chapters" && <BookCard />}
          {selectedItem.title === "Annual Report" && <MagazineCard />}
          {selectedItem.title === "Alumni Report" && <AlumniReportCard />}
        </div>
      )}
    </div>
  );
}
