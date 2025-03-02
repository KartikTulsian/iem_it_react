import React, { useState, useEffect } from 'react'
import { Container, Row, Table, Button } from 'react-bootstrap';
import { useInView } from "react-intersection-observer";
import "./Blog.css"
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs, Document, Page } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const syllabusFiles = {
    "comp_society": "/pdfs/IEM_CSI_TechPulse_2020.pdf",
    "entrepreneurship_cell": "../pdfs/E_Cell.pdf",
  };

export default function StuChapCard() {
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
    <div>
        <section className='student_chapter' id='student_chapter-section'>
        {syllabusFiles["comp_society"] && (
        <Container className="syll-container">
          <h2 className="heading">IEM - Computer Society of India</h2>
          
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
              file={syllabusFiles["comp_society"]}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <PDFPage pageNumber={pageNumber} scale={scale} />
            </Document>
          </div>
        </Container>
      )}
        </section>
    </div>
  )
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

