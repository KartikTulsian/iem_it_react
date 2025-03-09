import React, {useState} from 'react'
import { Container, Row, Table, Button, Card } from "react-bootstrap";
import "./Innovation.css";
import { book_chapter } from "../../dummydata";


const pubTypes = {
    faculty: "Faculty Publications",
    students: "Student Publications",
  };

export default function BookCard() {
    const [selectedPub, setSelectedPub] = useState(null);

    const handleSelect = (type) => {
      setSelectedPub(type);
      setTimeout(() => {
        const section = document.getElementById(`${type}-section`);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    };
  
    return (
      <div id="publication-section">
        <Container className="public-tabs text-center my-4">
          <Row className="justify-content-center">
            {Object.keys(pubTypes).map((type) => (
              <Button
                key={type}
                onClick={() => handleSelect(type)}
                className={`toggle-btn mx-2 ${selectedPub === type ? "active" : ""}`}
              >
                {pubTypes[type]}
              </Button>
            ))}
          </Row>
        </Container>
  
        <Container className="publication-content">
          {selectedPub && (
            <Card className="publication-card shadow-lg p-4">
              <Card.Header className="pub-header text-white text-center bg-dark">
                {pubTypes[selectedPub]}
              </Card.Header>
              <Card.Body>
                <h3 className="section-title-pub text-primary">Book Chapter Publications</h3>
                <PublicationTable type={selectedPub}/>
              </Card.Body>
            </Card>
          )}
        </Container>
      </div>
    );
  }
  
  function PublicationTable({ type}) {
    return (
      <Container className="table-responsive">
        <Table striped bordered hover responsive className="publication-table">
          <thead>
            {book_chapter[type].slice(0, 2).map((headingRow, rowIndex) => (
              <tr key={rowIndex}>
                {headingRow.map((heading, idx) => (
                  <th key={idx} colSpan={heading.colspan || 1}>{heading.text || heading}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {book_chapter[type].slice(2).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  if (typeof cell === "object" && cell !== null) {
                    return (
                      <td key={cellIndex} colSpan={cell.colspan || 1} rowSpan={cell.rowspan || 1}>
                        {cell.text}
                      </td>
                    );
                  } else {
                    return <td key={cellIndex}>{cell}</td>;
                  }
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
  