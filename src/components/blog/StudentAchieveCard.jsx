import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import "./Blog.css";
import { achievements } from "../../dummydata";

const breakpointColumns = {
  default: 3,
  1100: 2,
  768: 1,
};

export default function StudentAchieveCard() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  // Close modal when pressing ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedAchievement(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="achievementsboard-container" id="achievement-section">
      <h2 className="achievements-title text-center">Mission Accomplished: Student Edition</h2>

      <Masonry breakpointCols={breakpointColumns} className="masonry-achieve-grid" columnClassName="masonry-achieve-grid-column">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="achievements-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedAchievement(achievement)}
          >
            <img src={achievement.img} alt={achievement.title} className="achievements-img" />
            <h3>{achievement.title}</h3>
            <p>
            {achievement.desc.length > 400 ? `${achievement.desc.substring(0,400)}...` : achievement.desc}
            </p>
          </motion.div>
        ))}
      </Masonry>

      {selectedAchievement && (
        <div className="modal-overlay" onClick={() => setSelectedAchievement(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-image">
              <img src={selectedAchievement.img} alt={selectedAchievement.title} className="full-image" />
            </div>
            <div className="modal-details">
              <h2>{selectedAchievement.title}</h2>
              <p>{selectedAchievement.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}