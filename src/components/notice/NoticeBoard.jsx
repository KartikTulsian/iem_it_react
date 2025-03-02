import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import moment from "moment";
import "./Notice.css";
import { notices } from "../../dummydata";

const breakpointColumns = {
  default: 3,
  1100: 2,
  768: 1,
};

export default function NoticeBoard() {
  const [time, setTime] = useState(moment().format("h:mm:ss A"));
  const [date, setDate] = useState(moment().format("dddd, MMMM Do YYYY"));
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().format("h:mm:ss A"));
      setDate(moment().format("dddd, MMMM Do YYYY"));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Close modal when pressing ESC
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`noticeboard-container ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="notice-title text-center">The What's-Happening-Here Hub</h2>
      {/* Header with Date, Time */}
      <div className="noticeboard-header">
        <span>🕒 {time}</span>
        <span>📅 {date}</span>
      </div>

      {/* Notice Grid */}
      <Masonry breakpointCols={breakpointColumns} className="masonry-grid" columnClassName="masonry-grid-column">
        {notices.map((notice) => (
          <motion.div
            key={notice.id}
            className="notice-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image Click to Enlarge */}
            <img 
              src={notice.img} 
              alt="Notice" 
              className="notice-img" 
              onClick={() => setSelectedImage(notice.img)} 
            />
            <h3>{notice.user}</h3>
            <p>{notice.desc}</p>
            
            {/* Truncate the URL */}
            <a 
              href={notice.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="notice-link"
              data-full-url={notice.link}
            >
              {notice.link.length > 30 ? `${notice.link.substring(0, 27)}...` : notice.link}
            </a>

            <div className="notice-actions">
              <button>👍 Like</button>
              <button>💬 Comment</button>
            </div>
          </motion.div>
        ))}
      </Masonry>

      {/* Full-Screen Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full View" className="full-image" />
        </div>
      )}
    </div>
  );
}
