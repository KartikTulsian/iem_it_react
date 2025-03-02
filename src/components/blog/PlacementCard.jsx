import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../Common/heading/Heading";
import { placement } from "../../dummydata";
import "./Blog.css";

export default function PlacementCard() {
  return (
    <section className="placement" id="placement-section">
      <Container>
        <Heading subtitle="Placements" title="Some of our Elite Head-Hunters" subtitleClass="placement-subtitle"/>
        <div className="placement-grid">
          {placement.map((val, index) => (
            <div className="placement-box" key={index}>
              <div className="placement-img-container">
                <img src={val.cover} alt="Company Logo" className="placement-img" />
                <img src={val.hoverCover} alt="Hover Logo" className="placement-img-hover" />
              </div>
              <h1 className="placement-title">{val.courseName}</h1>
              <span className="placement-tag">{val.course}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
