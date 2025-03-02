import React, { useState, useEffect } from 'react'
import { Container, Row, Table, Button } from 'react-bootstrap';
import { useInView } from "react-intersection-observer";
import "./Courses.css"
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs, Document, Page } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const semesters = ["4TH SEM", "6TH SEM", "8TH SEM"];

const course_struct = {
    "4TH SEM": {"struct": [
      [{text: "Sl. No.", rowspan:2}, {text: "Type of course", rowspan:2}, {text: "Course Code", rowspan:2}, {text: "Course Name", rowspan:2}, {text:"Hours per week", colspan:4, rowspan:1} ,{text: "Credit Points", rowspan:2}],
      ["Lecture", "Tutorial", "Practical", "Sessional"],
      [{text: "Theory Papers", colspan:9, section: "theory"}],
      [1, "Professional Core Course", "PCCCS401", "Discrete Mathematics", 3, 0,0,0,3],
      [2, "Professional Core Course", "PCCCS402", "Computer Organisation & Architecture", 3,0,0,0,3],
      [3, "Professional Core Course", "PCCCS403", "Artificial Intelligence & Machine Learning", 3, 0,0,0,3],
      [4, "Professional Core Course", "PCCCS404", "Design & Analysis of Algorithms", 3,0,0,0,3],
      [5, "Professional Core Course", "PCCCS405", "Advanced Programming (OOP)", 3, 0,0,0,3],
      [6, "Humanities & Social Sciences including Management course", "HSMCS471", "Management 1 (Finance & Accounting)", 3,0,0,0,3],
      [7, "Humanities & Social Sciences including Management course", "ESP401", "Essential Studies for Professionals - IV", 2, 0,0,0,0.5],
      [8, "Mandatory Course", "MCC471", "Sustainability , Climate Actions & Environment al Sciences", 1,"-","(Field Projects)","-",2],
      [{text:"Total", colspan:4}, 21,0,0,0,20.5],
      [{text: "Practical Papers", colspan:9, section: "practical"}],
      [1, "Professional Core Course", "PCCCS492", "Computer Organisation & Architecture Laboratory", 0,0,4,0,2],
      [2, "Professional Core Course", "PCCCS493", "Artificial Intelligence & Machine Learning Laboratory", 0,0,2,0,1],
      [3, "Professional Core Course", "PCCCS494", "Design & Analysis of Algorithms Laboratory", 0,0,4,0,2],
      [4, "Professional Core Course", "PCCCS402", "Advanced Programming (OOP) Laboratory", 0,0,2,0,1],
      [{text:"Total", colspan:4}, 0,0,12,0,6],
      [{text: "Sessional Papers", colspan:9, section: "sessional"}],
      [1, "Humanities & Social Sciences including Management course", "SDP481", "Skill Development for Professionals - IV", 0,0,0,2,0.5],
      [2, "Innovative Project", "PRJCS481", "Innovative Project -II", 0,0,0,0,1],
      [3, "Professional Core Course", "PCCCS481", "Data Analytics", 0,0,4,0,2],
      [{text:"Total", colspan:4}, 0,0,0,4,0.5],
      [{text: "Mandatory Requirements", colspan:9, section: "mandatory"}],
      [1, "Co-curricular & Extra Curricular Activities", "MAR", "Mandatory Additional Requirement s (Score)", "-","-","-","-","-"],
      [2, "Honours", "MOOCs", "Massive Open Online Course (Credit)", "-","-","-","-","-"],
      [3, "Certification", "IFC", "Industry and Foreign Certification (Count)", "-","-","-","-","-"],
      [{text:"Total", colspan:4}, 21,0,12,4,29]
    ]
  },
    "6TH SEM": { "struct": [
      [{text: "Sl. No.", rowspan:2}, {text: "Type of course", rowspan:2}, {text: "Course Code", rowspan:2}, {text: "Course Name", rowspan:2}, {text:"Hours per week", colspan:4} ,{text: "Credit Points", rowspan:2}],
      ["Lecture", "Tutorial", "Practical", "Sessional"],
      [{text: "Theory Papers", colspan:9, section: "theory"}],
      [1, "Professional Core Course", "PCCCS601", "Computer  Networks", 3, 0,0,0,3],
      [2, "Professional Core Course", "PCCCS602", "Cloud Computing & IOT", 3,0,0,0,2],
      [3, "Professional Core Course", "PCCCS603", "Introductory Cyber Scurity", 3, 0,0,0,3],
      [4, "Professional Core Course", "PCCCS604", "Elective - I", 3,0,0,0,3],
      [5, "Professional Core Course", "PCCCS605", "Elective -II", 3, 0,0,0,3],
      [6, "Humanities & Social Sciences including Management course", "ESP(CS)601", "Essential Studies for Professionals – VI (CS)", 2, 0,0,0,0.5],
      [{text:"Total", colspan:4}, 16,0,0,0,14.5],
      [{text: "Practical Papers", colspan:9, section: "practical"}],
      [1, "Professional Core Course", "PCCCS691", " Computer  Networks Laboratory", 0,0,4,0,2],
      [2, "Professional Core Course", "PCCCS692", " Cloud Computing & IOT Laboratory", 0,0,4,0,2],
      [3, "Professional Elective Course", "PECCS691", "Introuctory Cyber Security Laboratory", 0,0,4,0,2],
      [{text:"Total", colspan:4}, 0,0,12,0,6],
      [{text: "Sessional Papers", colspan:9, section: "sessional"}],
      [1, "Humanities & Social Sciences including Management course", "SDP681", "Skill Development for Professionals - VI", 0,0,0,2,0.5],
      [2, "Innovative Project", "PRJCS681", "Project -I", 0,0,0,6,3],
      [3, "Professional Core Course", "PCCCS481", "Generative AI & Deep Learning", 0,0,0,2,1],
      [{text:"Total", colspan:4}, 0,0,0,10,4.5],
      [{text: "Mandatory Requirements", colspan:9, section: "mandatory"}],
      [1, "Co-curricular & Extra Curricular Activities", "MAR", "Mandatory Additional Requirement s (Score)", "-","-","-","-","-"],
      [2, "Honours", "MOOCs", "Massive Open Online Course (Credit)", "-","-","-","-","-"],
      [3, "Certification", "IFC", "Industry and Foreign Certification (Count)", "-","-","-","-","-"],
      [{text:"Total", colspan:4}, 16,0,12,10,25],
    ],
    "elective": [
      ["Program Name", "Track", "Elective - I", "Elective - II"],
      [{text: "B.Tech in CSE", rowspan:4}, "Network & Security", "Blockchain, Cryptocurrency & NFT (PECCS602A)", "Digital Forensics (PECCS603A)"],
      ["Artificial Intelligence & Data Science", "Soft Computing (PECCS602B)", "Natural Language Processing Data (PECCS603B)"],
      ["Theory & Systems", "Graph Theory (PECCS602C)", "Distributed Systems (PECCS603C)"],
      ["Applications", "Image Processing (PECCS602D)", "Computer Graphics (PECCS603D)"],
      [{text: "B.Tech in IT", rowspan:4}, "Network & Security", "Information Theory & Coding (PECCS602E)", "Data Communication (PECCS603F)"],
      ["Artificial Intelligence", "Soft Computing (PECCS602B)", "Natural Language Processing (PECCS603B)"],
      ["Theory and Algorithms", "Graph Theory (PECCS602C)", "Computer Graphics (PECCS603D)"],
      ["Applications", "Image Processing (PECCS602D)", "E-Commerce (PECCS603I)"],
      [{text: "B.Tech in CSE (IOTCSBT)", rowspan:3}, "Network & Security", "Blockchain, Cryptocurrency & NFT (PECCS602A)", "Digital Forensics (PECCS603A)"],
      ["Artificial Intelligence", "-", "Big Data Analytics (PECCS603G)"],
      ["Applications", "-", "Wireless Sensor Network (PECCS603H)"],
      [{text: "B.Tech in CSE (IOT)", rowspan:3}, "Network & Security", "5G Network Technology (PECCS602H)", "Data Communication (PECCS603F)"],
      ["Artificial Intelligence", "Soft Computing (PECCS602B)", "Big Data Analytics (PECCS603G)"],
      ["Applications", "Embedded System (PECCS602J) ", "Wireless Sensor Network (PECCS603H)"],
      [{text: "B.Tech in CSE (AI)", rowspan:2}, "Artificial Intelligence", "Soft Computing (PECCS602B)", "Natural Language Processing Data (PECCS603B)"], 
      ["Data Science", "Data Science using Python (PECCS602K)", "Cognitive Computing (PECCS603E)"],
      [{text: "B.Tech in CST / CSIT", rowspan:3}, "Network & Security", "Blockchain, Cryptocurrency & NFT (PECCS602A)", "Digital Forensics (PECCS603A)"], 
      ["Artificial Intelligence", "Soft Computing (PECCS602B)", "Natural Language Processing (PECCS603B)"], 
      ["Applications", "-", "Computer Graphics (PECCS603D)"],
      [{text:"B.Tech in CSE (AI & ML)", rowspan:2}, "Theoretical AI", "Soft Computing (PECCS602B)", "Natural Language Processing (PECCS603B)"],
      ["Applied AI", "Data Science using Python (PECCS602K)", "Pattern Recognition (PECCS603J)"],
      [{text: "B.Tech in CSBS", rowspan:2}, "Networks", "Blockchain, Cryptocurrency & NFT (PECCS602A)", "Wireless Sensor Network (PECCS603H)"],
      ["Applied AI", "Data Science using Python (PECCS602K)", "Natural Language Processing (PECCS603B)"]
    ]
  },
    "8TH SEM": { "struct": [
      [{text: "Sl. No.", rowspan:2}, {text: "Type of course", rowspan:2}, {text: "Course Code", rowspan:2}, {text: "Course Name", rowspan:2}, {text:"Hours per week", colspan:4} ,{text: "Credit Points", rowspan:2}],
      ["Lecture", "Tutorial", "Practical", "Sessional"],
      [{text: "Theory Papers", colspan:9, section: true}],
      [1, "Professional Core Course", "PCCCS601", "Computer  Networks", 3, 0,0,0,3],
      [2, "Professional Core Course", "PCCCS602", "Cloud Computing & IOT", 3,0,0,0,2],
      [3, "Professional Core Course", "PCCCS603", "Introductory Cyber Scurity", 3, 0,0,0,3],
      [4, "Professional Core Course", "PCCCS604", "Elective - I", 3,0,0,0,3],
      [5, "Professional Core Course", "PCCCS605", "Elective -II", 3, 0,0,0,3],
      [6, "Humanities & Social Sciences including Management course", "ESP(CS)601", "Essential Studies for Professionals - VI (CS)", 2, 0,0,0,0.5],
      [{text:"Total", colspan:4}, 16,0,0,0,14.5],
      [{text: "Practical Papers", colspan:9, section: true}],
      [1, "Professional Core Course", "PCCCS691", " Computer  Networks Laboratory", 0,0,4,0,2],
      [2, "Professional Core Course", "PCCCS692", " Cloud Computing & IOT Laboratory", 0,0,4,0,2],
      [3, "Professional Elective Course", "PECCS691", "Introuctory Cyber Security Laboratory", 0,0,4,0,2],
      [{text:"Total", colspan:4}, 0,0,12,0,6],
      [{text: "Sessional Papers", colspan:9, section: true}],
      [1, "Humanities & Social Sciences including Management course", "SDP681", "Skill Development for Professionals - VI", 0,0,0,2,0.5],
      [2, "Innovative Project", "PRJCS681", "Project -I", 0,0,0,6,3],
      [3, "Professional Core Course", "PCCCS481", "Generative AI & Deep Learning", 0,0,0,2,1],
      [{text:"Total", colspan:4}, 0,0,0,10,4.5],
      [{text: "Mandatory Requirements", colspan:9,section: true}],
      [1, "Co-curricular & Extra Curricular Activities", "MAR", "Mandatory Additional Requirement s (Score)", "-","-","-","-","-"],
      [2, "Honours", "MOOCs", "Massive Open Online Course (Credit)", "-","-","-","-","-"],
      [3, "Certification", "IFC", "Industry and Foreign Certification (Count)", "-","-","-","-","-"],
      [{text:"Total", colspan:4}, 16,0,12,10,25],
    ]
  }
}

const syllabusFiles = {
  "4TH SEM": "/pdfs/4th_Semester_DetailedSyllabus.pdf",
  "6TH SEM": "../pdfs/Detailed_Syllabus_for_6th_Semester_removed.pdf",
};

export default function CurriculumCard() {
  const [selectedSem, setSelectedSem] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2); // Zoom Level

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const nextPage = () => setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
  const prevPage = () => setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 2));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.8));
  return (
    <section className='curriculum' id="curriculum-section">
      <Container className='sem_tabs'>
        <Row className='sem-buttons'>
          {semesters.map((sem) => (
            <div key={sem} className={`sem-tab ${selectedSem === sem ? 'active' : ''}`} onClick={() => setSelectedSem(sem)}>
              <h3>{sem} Curriculum</h3>
            </div>
          ))}
        </Row>
      </Container>
      {selectedSem && (
        <Container className='yr_curriculum'>
          <h2 className='heading'>{selectedSem} Course Structure</h2>
          <Table striped bordered hover responsive className='curriculum-table'>
            <thead>
              {course_struct[selectedSem]?.struct.slice(0, 2).map((row, idx) => (
                <tr key={idx}>
                  {row.map((col, i) => (
                    <th key={i} colSpan={col?.colspan || 1} rowSpan={col?.rowspan || 1}>
                      {col.text || col}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {course_struct[selectedSem]?.struct.slice(2).map((row, idx) => (
                <tr key={idx} className={row.section ? 'section-row' : idx % 2 === 0 ? 'even-row-c' : 'odd-row-c'}>
                  {Array.isArray(row) ? row.map((col, i) => {
                    const cellContent = typeof col === 'object' ? col.text : col;
                    const isPapers = ["Theory Papers", "Practical Papers", "Sessional Papers", "Mandatory Requirements"].includes(cellContent);
                    return (
                      <td
                      key={i}
                      colSpan={col?.colspan || 1}
                      rowSpan={col?.rowspan || 1}
                      className={isPapers ? 'section-heading' : (typeof col === 'object' && col.text.includes("Total")) ? "highlight-total" : ""}
                    >
                      {cellContent}
                    </td>
                  )}) : null}
                </tr>
              ))}
            </tbody>
          </Table>
          {selectedSem === "6TH SEM" && course_struct[selectedSem]?.elective && (
            <>
              <h2 className='heading'>Elective Courses</h2>
              <Table striped bordered hover responsive className='curriculum-table'>
                <thead>
                  {course_struct[selectedSem]?.elective.slice(0, 1).map((row, idx) => (
                    <tr key={idx}>
                      {row.map((col, i) => (
                        <th key={i} colSpan={col?.colspan || 1} rowSpan={col?.rowspan || 1}>
                          {col.text || col}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {course_struct[selectedSem].elective.slice(1).map((row, idx) => (
                    <tr key={idx} className={row.section ? 'section-row' : idx % 2 === 0 ? 'even-row-c' : 'odd-row-c'}>
                      {row.map((col, i) => {
                        const cellContent = typeof col === 'object' ? col.text : col;
                        const isBtech = ["B.Tech in CSE", "B.Tech in IT", "B.Tech in CSE (IOTCSBT)", "B.Tech in CSE (IOT)", "B.Tech in CSE (AI)", "B.Tech in CST / CSIT", "B.Tech in CSE (AI & ML)", "B.Tech in CSBS"].includes(cellContent);
                        return (
                          <td
                          key={i}
                          colSpan={col.colspan || 1}
                          rowSpan={col.rowspan || 1}
                          className={isBtech ? "highlight-Btech" : ""}
                        >
                          {cellContent}
                        </td>
                      )})}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Container>
      )}
      {/* PDF Section */}
      {selectedSem && syllabusFiles[selectedSem] && (
        <Container className="syll-container">
          <h2 className="heading">{selectedSem} Syllabus</h2>
          
          <div className="pdf-controls">
            <Button onClick={prevPage} disabled={pageNumber <= 1}>
              ◀ Prev
            </Button>
            <span>Page {pageNumber} of {numPages}</span>
            <Button onClick={nextPage} disabled={pageNumber >= numPages}>
              Next ▶
            </Button>
            <Button onClick={zoomOut}><i class="fa-solid fa-minus"></i></Button>
            <span>Zoom: {Math.round(scale * 100)}%</span>
            <Button onClick={zoomIn}><i class="fa-solid fa-plus"></i></Button>
          </div>

          <div className="pdf-viewer">
            <Document
              file={syllabusFiles[selectedSem]}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <PDFPage pageNumber={pageNumber} scale={scale} />
            </Document>
          </div>
        </Container>
      )}
    </section>
  );
}

// Lazy-loaded PDF Page Component using Intersection Observer
function PDFPage({ pageNumber, scale }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`pdf-page-wrapper ${visible ? "show" : ""}`}>
      {visible && <Page pageNumber={pageNumber} scale={scale} />}
    </div>
  );
}
