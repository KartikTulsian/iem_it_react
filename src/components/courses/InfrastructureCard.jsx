import React from "react";
import { Container } from "react-bootstrap";
import "./Courses.css";

const classroom = {
  lg21: {
    title: "LG 2.1",
    img: "../images/infrastructure/class3.jpg",
  },
  cc: {
    title: "Competitive Coding Class",
    img: "../images/infrastructure/class1.jpg",
  },
  lg47: {
    title: "Theoretical Class at LG 4.7",
    img: "../images/infrastructure/class4.jpg",
  },
  annex: {
    title: "Theoretical Class at Annex 5th Floor",
    img: "../images/infrastructure/class5.jpg",
  },
};

const lab = {
  daa: {
    title: "DAA LAB",
    img: "../images/infrastructure/Lab1.jpg",
  },
  aiml: {
    title: "AIML LAB",
    img: "../images/infrastructure/Lab2.jpg",
  },
  oops: {
    title: "OOPS LAB",
    img: "../images/infrastructure/Lab3.jpg",
  },
  coa: {
    title: "COA LAB",
    img: "../images/infrastructure/Lab5.jpg",
  },
};

export default function InfrastructureCard() {
  return (
    <section className="infrastructure" id="infrastructure-section">
      <Container>
        <h2 className="infra-title">Department Infrastructure</h2>

        <h3 className="infra-subtitle">📚 Modern Classrooms</h3>
        <div className="infra-grid">
          {Object.values(classroom).map((item, index) => (
            <div className="infra-card" key={index}>
              <img src={item.img} alt={item.title} className="infra-img" />
              <div className="infra-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <h3 className="infra-subtitle">💻 Advanced Labs</h3>
        <div className="infra-grid">
          {Object.values(lab).map((item, index) => (
            <div className="infra-card" key={index}>
              <img src={item.img} alt={item.title} className="infra-img" />
              <div className="infra-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
