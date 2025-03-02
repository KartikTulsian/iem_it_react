import React from "react";
import { facultyList } from "../../dummydata"; 
import "./Faculty.css";

const FacultyNode = ({ faculty }) => {
  return (
    <div className="faculty-card">
      <div className="faculty-card__img-container">
        <img src={faculty.img || "/default-profile.png"} alt={faculty.title} />
      </div>
      <div className="faculty-card__container">
        <h3>{faculty.title}</h3>
        <p>{faculty.desg}</p>
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
    </div>
  );
};

const FacultyTree = ({ facultyData }) => {
  if (!facultyData || !facultyData.hod) {
    return <div>No faculty data available.</div>;
  }

  return (
    <div className="faculty-tree">
      {/* HOD at the Top */}
      <div className="tree-node root">
        {facultyData.hod.map((hod) => (
          <div key={hod.id} className="tree-hod">
            <FacultyNode faculty={hod} />
          </div>
        ))}
      </div>

      {/* Connector from HOD to Other Faculty Members */}
      {/* <svg className="connector-svg">
        <line x1="50%" y1="0" x2="50%" y2="20" stroke="#7a2fe3" strokeWidth="2" />
      </svg> */}

      {/* Professors, Associate Professors, Assistant Professors */}
      <div className="tree-row">
      {[facultyData.prof, facultyData.asso_prof, facultyData.assi_prof1, facultyData.assi_prof2]
        .filter(group => Array.isArray(group))
        .map((group, index) => {
          let groupClass = ""; // Default class
          switch (index) {
            case 0:
              groupClass = "professor-group"; // Professors
              break;
            case 1:
              groupClass = "associate-prof-group"; // Associate Professors
              break;
            case 2:
              groupClass = "assistant-prof-group-1"; // Assistant Professors 1
              break;
            case 3:
              groupClass = "assistant-prof-group-2"; // Assistant Professors 2
              break;
            default:
              break;
          }
          
          return (
            <div key={index} className={`tree-group ${groupClass}`}>
              {group.map((member) => (
                <div key={member.id} className="tree-node">
                  <FacultyNode faculty={member} />
                </div>
              ))}
            </div>
          );
        })}
    </div>

    </div>
  );
};

export default function ListFaculty() {
  const facultyData = facultyList || {};

  if (!facultyData.hod || !Array.isArray(facultyData.hod)) {
    return <div>Loading faculty data...</div>;
  }

  return (
    <div className="faculty-container">
      <h1 className="faculty-header">Program Information Technology</h1>
      <FacultyTree facultyData={facultyData} />
    </div>
  );
}
