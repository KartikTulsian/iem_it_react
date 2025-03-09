import React, { useState, useEffect } from "react";
import "./Faculty.css";
import { mentorsList } from "../../dummydata"; 

const FacultyNode = ({ faculty, onClick}) => {
  return (
    <div className="faculty-card" onClick={() => onClick(faculty)}>
      <div className="faculty-card__img-container">
        <img src={faculty.img || "/default-profile.png"} alt={faculty.title} />
        {/* Icons beside the image (hidden initially, appear on hover) */}
      <div className="faculty-card__info">
        {faculty.linkedin && (
          <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        )}
        {faculty.gscholar && (
          <a href={faculty.gscholar} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-google-scholar"></i>
          </a>
        )}
      </div>
      </div>
      
      <div className="faculty-card__container">
        <h3>{faculty.title}</h3>
        <p><b>{faculty.desg}</b></p>
      </div>
    </div>
  );
};

const FacultyTree = ({ facultyData, onSelect }) => {
  if (!facultyData || !facultyData.hod) {
    return <div>No faculty data available.</div>;
  }

  return (
    <div className="faculty-tree" id="mentors-section">
      <div className="tree-node root">
        {facultyData.hod.map((hod) => (
          <div key={hod.id} className="tree-hod">
            <FacultyNode faculty={hod} onClick={onSelect} />
          </div>
        ))}
      </div>

      <div className="tree-row_m">
        {[facultyData.prof, facultyData.asso_prof, facultyData.assi_prof1, facultyData.assi_prof2]
          .filter(group => Array.isArray(group))
          .map((group, index) => {
            let groupClass = ""; 
            switch (index) {
              case 0: groupClass = "professor-group"; break;
              case 1: groupClass = "associate-prof-group"; break;
              case 2: groupClass = "assistant-prof-group-1"; break;
              case 3: groupClass = "assistant-prof-group-2"; break;
              default: break;
            }

            return (
              <div key={index} className={`tree-group ${groupClass}`}>
                {group.map((member) => (
                  <div key={member.id} className="tree-node">
                    <FacultyNode faculty={member} onClick={onSelect} />
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
};

const MentorModal = ({ mentor, onClose }) => {
  if (!mentor) return null;

  return (
    <div className="mentor-modal" onClick={onClose}>
      <div className="mentor-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="mentor-left">
          <img src={mentor.img || "/default-profile.png"} alt={mentor.title} className="mentor-img" />
        </div>
        <div className="mentor-right">
          <h2>{mentor.title}</h2>
          <p><b>{mentor.desg}</b></p>
          <div className="mentor-links">
            {mentor.linkedin && (
              <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            )}
            {mentor.gscholar && (
              <a href={mentor.gscholar} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-google-scholar"></i>
              </a>
            )}
          </div>

          <h3>Mentees</h3>
          <div className="mentees-container">
          {mentor.mentees ? (
            Object.entries(mentor.mentees).map(([year, mentees]) => (
              <div key={year} className="mentees-section">
                <h4>{year}</h4>
                <ul>
                  {mentees.map(([roll, serial, name]) => (
                    <li key={roll}>{serial}. {name} ({roll})</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No mentees assigned.</p>
          )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default function ListMentors() {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const facultyData = mentorsList || {};

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedMentor(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="faculty-container">
      <h1 className="faculty-header">IT Mentors List</h1>
      <FacultyTree facultyData={facultyData} onSelect={setSelectedMentor} />
      <MentorModal mentor={selectedMentor} onClose={() => setSelectedMentor(null)} />
    </div>
  );
}
